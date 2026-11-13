import * as THREE from 'three';
import type { ObjectInstanceId, PlacementPose } from '@/data/types';
import { getAllTimelineObjects } from '@/data/arObjects';
import {
  createPlacementIndicator,
  createSelectionRing,
  createTextLabel,
} from './PlaceholderFactory';
import { loadObjectModel, clearModelCache } from './ModelLoader';
import {
  ARInteractionController,
  type InteractionMode,
} from './ARInteractionController';
import {
  TransformService,
  type TransformSnapshot,
} from './TransformService';

// ──────────────────────────────────────────────
// ARSceneManager
//
// Manages the Three.js scene for the AR camera view.
//
// The timeline contains all 8 original AR objects
// from the project assets, arranged chronologically.
//
// Responsibilities:
// - Three.js renderer / scene / camera
// - automatic timeline placement
// - object selection
// - selection visualisation
// - GROUP / INSPECT interaction modes
// - object/category visibility
// - transform commands
// - reset / disposal
//
// Transform rules:
// - All movement uses camera-space coordinates
// - All rotation uses camera-relative axes
// - Scaling is delegated to TransformService
//
// IMPORTANT:
// Closing the information panel must NOT clear the
// selected object. The UI may hide the panel while
// this manager keeps the object selected and interactive.
// ──────────────────────────────────────────────

type SessionState =
  | 'searching'
  | 'detected'
  | 'placed'
  | 'demo'
  | 'loading';

interface Callbacks {
  onStateChange: (state: SessionState) => void;
  onObjectSelect: (id: ObjectInstanceId | null) => void;
  onModeChange?: (mode: InteractionMode) => void;
}

interface ObjectEntry {
  id: ObjectInstanceId;
  group: THREE.Group;
  label: THREE.Group;
  isPlaceholder: boolean;
  targetHeight: number;
  homeSnap: TransformSnapshot;
}

const DIM_OPACITY = 0.2;
const NORMAL_OPACITY = 1;

const DIM_LABEL_SCALE = 0.0001;
const NORMAL_LABEL_SCALE = 1;

export class ARSceneManager {
  private container: HTMLElement;

  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  private animationId: number | null = null;

  private callbacks: Callbacks;

  private arRoot: THREE.Group | null = null;
  private placementPose: PlacementPose | null = null;

  private timelineGroup: THREE.Group | null = null;
  private timelineHomeSnap: TransformSnapshot | null = null;

  private objectEntries: ObjectEntry[] = [];

  private isLoadingTimeline = false;

  private indicator: THREE.Group;

  private selectedId: ObjectInstanceId | null = null;

  private selectionRing: THREE.Mesh | null = null;
  private selectionHalo: THREE.Mesh | null = null;

  private raycaster: THREE.Raycaster;
  private pointer: THREE.Vector2;

  private cameraAngle = 0;
  private surfaceY = 0;

  private interaction: ARInteractionController;

  private mode: InteractionMode = 'group';

  private boundResize: () => void;

  // Timeline layout
  private readonly TIMELINE_SPACING = 0.28;
  private readonly LABEL_OFFSET = 0.05;

  // Transform step sizes
  private readonly MOVE_STEP = 0.04;
  private readonly DEPTH_STEP = 0.06;
  private readonly ROTATE_STEP = Math.PI / 12;
  private readonly SCALE_FACTOR = 1.15;

  constructor(
    container: HTMLElement,
    callbacks: Callbacks,
  ) {
    this.container = container;
    this.callbacks = callbacks;

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    // ──────────────────────────────────────────
    // Renderer
    // Transparent canvas is required because
    // the real phone camera/video must remain
    // visible underneath the Three.js layer.
    // ──────────────────────────────────────────

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });

    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2),
    );

    this.renderer.setSize(width, height);

    this.renderer.setClearColor(0x000000, 0);

    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.inset = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.zIndex = '1';
    this.renderer.domElement.style.background = 'transparent';
    this.renderer.domElement.style.touchAction = 'none';

    container.appendChild(this.renderer.domElement);

    // ──────────────────────────────────────────
    // Scene
    // ──────────────────────────────────────────

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.01,
      100,
    );

    this.camera.position.set(0, 0.3, 0.6);
    this.camera.lookAt(0, 0, 0);

    // ──────────────────────────────────────────
    // Lighting
    // ──────────────────────────────────────────

    const ambient = new THREE.AmbientLight(
      0xffffff,
      0.7,
    );

    this.scene.add(ambient);

    const directional = new THREE.DirectionalLight(
      0xffffff,
      0.6,
    );

    directional.position.set(1, 2, 1);
    this.scene.add(directional);

    const fill = new THREE.DirectionalLight(
      0x22d3ee,
      0.15,
    );

    fill.position.set(-1, 0.5, -1);
    this.scene.add(fill);

    // ──────────────────────────────────────────
    // Placement indicator
    // ──────────────────────────────────────────

    this.indicator = createPlacementIndicator();

    this.indicator.position.set(
      0,
      this.surfaceY,
      -0.5,
    );

    this.indicator.visible = false;

    this.scene.add(this.indicator);

    // ──────────────────────────────────────────
    // Interaction helpers
    // ──────────────────────────────────────────

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.interaction = new ARInteractionController(
      container,
      this.camera,
      this.raycaster,
      {
        onTap: (ndcX, ndcY) => {
          this.handleTap(ndcX, ndcY);
        },

        onModeChange: (nextMode) => {
          this.mode = nextMode;
          this.callbacks.onModeChange?.(nextMode);
        },
      },
    );

    // ──────────────────────────────────────────
    // Resize
    // ──────────────────────────────────────────

    this.boundResize = this.onResize.bind(this);

    window.addEventListener(
      'resize',
      this.boundResize,
    );

    // Start render loop.
    this.animate();
  }

  // ══════════════════════════════════════════════
  // RENDER LOOP
  // ══════════════════════════════════════════════

  private animate = () => {
    this.animationId = requestAnimationFrame(
      this.animate,
    );

    // Before placement, gently rotate the preview
    // camera so the scene does not look completely
    // static.
    if (!this.isPlaced()) {
      this.cameraAngle += 0.003;

      const radius = 0.6;

      this.camera.position.x =
        Math.sin(this.cameraAngle) * radius;

      this.camera.position.z =
        Math.cos(this.cameraAngle) * radius;

      this.camera.position.y = 0.35;

      this.camera.lookAt(
        0,
        0.1,
        0,
      );
    }

    // Placement indicator animation.
    if (this.indicator.visible) {
      const t = performance.now() * 0.002;

      this.indicator.scale.setScalar(
        1 + Math.sin(t) * 0.08,
      );
    }

    // Selection ring animation.
    if (this.selectionRing) {
      const t = performance.now() * 0.003;

      const material =
        this.selectionRing.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.5 + Math.sin(t) * 0.2;
    }

    // Selection halo animation.
    if (this.selectionHalo) {
      const t = performance.now() * 0.002;

      const material =
        this.selectionHalo.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.12 + Math.sin(t) * 0.04;
    }

    // Make labels face the camera.
    if (this.timelineGroup) {
      for (const entry of this.objectEntries) {
        if (entry.label.visible) {
          entry.label.lookAt(
            this.camera.position,
          );
        }
      }
    }

    this.renderer.render(
      this.scene,
      this.camera,
    );
  };

  private onResize() {
    const width = Math.max(
      this.container.clientWidth,
      1,
    );

    const height = Math.max(
      this.container.clientHeight,
      1,
    );

    this.camera.aspect =
      width / height;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(
      width,
      height,
    );
  }

  // ══════════════════════════════════════════════
  // AUTO PLACEMENT
  // ══════════════════════════════════════════════

  async autoPlaceTimeline() {
    if (this.arRoot) return;
    if (this.isLoadingTimeline) return;

    this.isLoadingTimeline = true;

    this.callbacks.onStateChange(
      'loading',
    );

    this.placementPose = {
      position: [
        0,
        this.surfaceY,
        -0.4,
      ],
      rotation: [
        0,
        0,
        0,
      ],
    };

    this.arRoot = new THREE.Group();

    this.arRoot.position.set(
      0,
      this.surfaceY,
      -0.4,
    );

    this.scene.add(this.arRoot);

    this.indicator.visible = false;

    const objects =
      getAllTimelineObjects();

    this.timelineGroup =
      new THREE.Group();

    const totalWidth =
      (objects.length - 1) *
      this.TIMELINE_SPACING;

    const startX =
      -totalWidth / 2;

    // Load all original project models.
    const results = await Promise.all(
      objects.map((object) =>
        loadObjectModel(object),
      ),
    );

    // A reset may have happened while models
    // were loading.
    if (!this.arRoot) {
      this.isLoadingTimeline = false;
      return;
    }

    // Clear old entries defensively.
    this.objectEntries = [];

    results.forEach((result, index) => {
      const object = objects[index];

      const mesh = result.group;

      mesh.position.x =
        startX +
        index *
          this.TIMELINE_SPACING;

      mesh.userData.objectId =
        object.id;

      mesh.userData.isSelectable =
        true;

      mesh.userData.isPlaceholder =
        result.isPlaceholder;

      mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.userData.objectId =
            object.id;

          child.userData.isSelectable =
            true;
        }
      });

      this.timelineGroup!.add(mesh);

      // Educational label above the model.
      const label = createTextLabel(
        object.name,
        object.year,
      );

      label.position.set(
        mesh.position.x,
        object.targetHeight +
          this.LABEL_OFFSET,
        0,
      );

      this.timelineGroup!.add(label);

      this.objectEntries.push({
        id: object.id,
        group: mesh,
        label,
        isPlaceholder:
          result.isPlaceholder,
        targetHeight:
          object.targetHeight,
        homeSnap:
          TransformService.snapshot(
            mesh,
          ),
      });
    });

    this.arRoot.add(
      this.timelineGroup,
    );

    // Store the original timeline transform.
    this.timelineHomeSnap =
      TransformService.snapshot(
        this.timelineGroup,
      );

    this.isLoadingTimeline = false;

    // Default mode is GROUP.
    this.mode = 'group';

    this.interaction.setMode(
      'group',
    );

    this.interaction.setTarget(
      this.timelineGroup,
    );

    // Camera framing.
    const viewWidth =
      (objects.length - 1) *
      this.TIMELINE_SPACING;

    this.camera.position.set(
      0,
      0.25,
      viewWidth * 0.6 + 0.3,
    );

    this.camera.lookAt(
      0,
      0.08,
      0,
    );

    this.callbacks.onStateChange(
      'placed',
    );
  }

  // ══════════════════════════════════════════════
  // DIM / UNDIM
  // ══════════════════════════════════════════════

  private setDimForEntry(
    entry: ObjectEntry,
    dimmed: boolean,
  ) {
    entry.group.traverse(
      (child) => {
        if (!(child instanceof THREE.Mesh)) {
          return;
        }

        const materials =
          Array.isArray(child.material)
            ? child.material
            : [child.material];

        for (const material of materials) {
          if (
            material instanceof
              THREE.MeshStandardMaterial ||
            material instanceof
              THREE.MeshBasicMaterial
          ) {
            material.transparent = true;

            material.opacity =
              dimmed
                ? DIM_OPACITY
                : NORMAL_OPACITY;
          }
        }
      },
    );

    entry.label.scale.setScalar(
      dimmed
        ? DIM_LABEL_SCALE
        : NORMAL_LABEL_SCALE,
    );
  }

  private dimAllExcept(
    exceptId: ObjectInstanceId | null,
  ) {
    for (const entry of this.objectEntries) {
      this.setDimForEntry(
        entry,
        entry.id !== exceptId,
      );
    }
  }

  private undimAll() {
    for (const entry of this.objectEntries) {
      this.setDimForEntry(
        entry,
        false,
      );
    }
  }

  // ══════════════════════════════════════════════
  // TAP / SELECTION
  // ══════════════════════════════════════════════

  private handleTap(
    ndcX: number,
    ndcY: number,
  ) {
    if (!this.timelineGroup) {
      return;
    }

    this.pointer.set(
      ndcX,
      ndcY,
    );

    this.raycaster.setFromCamera(
      this.pointer,
      this.camera,
    );

    const intersects =
      this.raycaster.intersectObject(
        this.timelineGroup,
        true,
      );

    if (intersects.length > 0) {
      let objectId:
        | ObjectInstanceId
        | null = null;

      let current:
        | THREE.Object3D
        | null =
        intersects[0].object;

      while (current) {
        if (
          current.userData.objectId
        ) {
          objectId =
            current.userData
              .objectId as ObjectInstanceId;

          break;
        }

        current =
          current.parent;
      }

      if (objectId) {
        this.selectObject(
          objectId,
        );

        return;
      }
    }

    // Tapping empty space while inspecting
    // returns to the timeline.
    //
    // IMPORTANT:
    // Closing the information panel does NOT
    // call this method. The UI only hides its panel.
    if (this.mode === 'inspect') {
      this.returnToTimeline();
      return;
    }

    this.clearSelection();
  }

  selectObject(
    id: ObjectInstanceId,
  ) {
    const entry =
      this.objectEntries.find(
        (item) =>
          item.id === id,
      );

    if (!entry) {
      return;
    }

    // If an object is currently hidden by a
    // category filter, do not select it.
    if (!entry.group.visible) {
      return;
    }

    this.clearSelectionVisuals();

    this.selectedId = id;

    // Dim every other visible object.
    this.dimAllExcept(id);

    // ──────────────────────────────────────────
    // Selection ring
    // ──────────────────────────────────────────

    const ring =
      createSelectionRing(
        entry.targetHeight,
      );

    // Ring belongs to the object's pivot.
    // Do not copy the world/timeline position.
    ring.position.set(
      0,
      0.002,
      0,
    );

    entry.group.add(ring);

    this.selectionRing =
      ring;

    // ──────────────────────────────────────────
    // Selection halo
    // ──────────────────────────────────────────

    const haloGeometry =
      new THREE.SphereGeometry(
        entry.targetHeight * 0.8,
        24,
        16,
      );

    const haloMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
      });

    const halo =
      new THREE.Mesh(
        haloGeometry,
        haloMaterial,
      );

    halo.position.set(
      0,
      0,
      0,
    );

    entry.group.add(halo);

    this.selectionHalo =
      halo;

    // ──────────────────────────────────────────
    // Enter INSPECT mode
    // ──────────────────────────────────────────

    this.mode = 'inspect';

    this.interaction.setMode(
      'inspect',
    );

    this.interaction.setTarget(
      entry.group,
    );

    this.callbacks.onModeChange?.(
      'inspect',
    );

    this.callbacks.onObjectSelect(
      id,
    );
  }

  clearSelection() {
    this.clearSelectionVisuals();

    this.selectedId = null;

    this.undimAll();

    this.mode = 'group';

    this.interaction.setMode(
      'group',
    );

    this.interaction.setTarget(
      this.timelineGroup,
    );

    this.callbacks.onModeChange?.(
      'group',
    );

    this.callbacks.onObjectSelect(
      null,
    );
  }

  private clearSelectionVisuals() {
    // Selection ring.
    if (
      this.selectionRing
    ) {
      const ring =
        this.selectionRing;

      if (ring.parent) {
        ring.parent.remove(
          ring,
        );
      }

      ring.geometry.dispose();

      (
        ring.material as THREE.Material
      ).dispose();

      this.selectionRing =
        null;
    }

    // Selection halo.
    if (
      this.selectionHalo
    ) {
      const halo =
        this.selectionHalo;

      if (halo.parent) {
        halo.parent.remove(
          halo,
        );
      }

      halo.geometry.dispose();

      (
        halo.material as THREE.Material
      ).dispose();

      this.selectionHalo =
        null;
    }
  }

  // ══════════════════════════════════════════════
  // RETURN SELECTED OBJECT TO TIMELINE
  // ══════════════════════════════════════════════

  returnToTimeline() {
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (entry) {
      TransformService.resetToSnapshot(
        entry.group,
        entry.homeSnap,
      );
    }

    this.clearSelection();
  }

  // ══════════════════════════════════════════════
  // RESET SELECTED OBJECT
  //
  // Keeps inspect mode and selection active.
  // ══════════════════════════════════════════════

  resetSelectedObject() {
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (!entry) {
      return;
    }

    TransformService.resetToSnapshot(
      entry.group,
      entry.homeSnap,
    );
  }

  // ══════════════════════════════════════════════
  // RESET ENTIRE TIMELINE
  // ══════════════════════════════════════════════

  resetTimeline() {
    if (
      !this.timelineGroup ||
      !this.timelineHomeSnap
    ) {
      return;
    }

    TransformService.resetToSnapshot(
      this.timelineGroup,
      this.timelineHomeSnap,
    );
  }

  // ══════════════════════════════════════════════
  // MODE SWITCHING
  // ══════════════════════════════════════════════

  setMode(
    mode: InteractionMode,
  ) {
    if (mode === 'group') {
      if (
        this.mode ===
        'inspect'
      ) {
        this.returnToTimeline();
      } else {
        this.mode = 'group';

        this.interaction.setMode(
          'group',
        );

        this.interaction.setTarget(
          this.timelineGroup,
        );

        this.callbacks.onModeChange?.(
          'group',
        );
      }

      return;
    }

    // INSPECT mode.
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (!entry) {
      return;
    }

    if (!entry.group.visible) {
      return;
    }

    this.mode = 'inspect';

    this.interaction.setMode(
      'inspect',
    );

    this.interaction.setTarget(
      entry.group,
    );

    this.callbacks.onModeChange?.(
      'inspect',
    );
  }

  getMode(): InteractionMode {
    return this.mode;
  }

  // ══════════════════════════════════════════════
  // GROUP TRANSFORM
  // ══════════════════════════════════════════════

  moveGroup(
    axis: 'x' | 'y' | 'z',
    direction: 1 | -1,
  ) {
    if (!this.timelineGroup) {
      return;
    }

    const step =
      axis === 'z'
        ? this.DEPTH_STEP
        : this.MOVE_STEP;

    const dx =
      axis === 'x'
        ? step * direction
        : 0;

    const dy =
      axis === 'y'
        ? step * direction
        : 0;

    const dz =
      axis === 'z'
        ? step * direction
        : 0;

    TransformService.moveInCameraSpace(
      this.timelineGroup,
      this.camera,
      dx,
      dy,
      dz,
    );
  }

  rotateGroup(
    axis: 'x' | 'y' | 'z',
    direction: 1 | -1,
  ) {
    if (!this.timelineGroup) {
      return;
    }

    TransformService.rotateAroundCameraAxis(
      this.timelineGroup,
      this.camera,
      axis,
      this.ROTATE_STEP *
        direction,
    );
  }

  zoomGroup(
    direction: 1 | -1,
  ) {
    if (!this.timelineGroup) {
      return;
    }

    const factor =
      direction > 0
        ? this.SCALE_FACTOR
        : 1 /
          this.SCALE_FACTOR;

    TransformService.scaleRelative(
      this.timelineGroup,
      factor,
    );
  }

  // ══════════════════════════════════════════════
  // INDIVIDUAL TRANSFORM
  // ══════════════════════════════════════════════

  moveSelected(
    axis: 'x' | 'y' | 'z',
    direction: 1 | -1,
  ) {
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (!entry) {
      return;
    }

    const step =
      axis === 'z'
        ? this.DEPTH_STEP
        : this.MOVE_STEP;

    const dx =
      axis === 'x'
        ? step * direction
        : 0;

    const dy =
      axis === 'y'
        ? step * direction
        : 0;

    const dz =
      axis === 'z'
        ? step * direction
        : 0;

    TransformService.moveInCameraSpace(
      entry.group,
      this.camera,
      dx,
      dy,
      dz,
    );
  }

  rotateSelected(
    axis: 'x' | 'y' | 'z',
    direction: 1 | -1,
  ) {
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (!entry) {
      return;
    }

    TransformService.rotateAroundCameraAxis(
      entry.group,
      this.camera,
      axis,
      this.ROTATE_STEP *
        direction,
    );
  }

  zoomSelected(
    direction: 1 | -1,
  ) {
    if (!this.selectedId) {
      return;
    }

    const entry =
      this.objectEntries.find(
        (item) =>
          item.id ===
          this.selectedId,
      );

    if (!entry) {
      return;
    }

    const factor =
      direction > 0
        ? this.SCALE_FACTOR
        : 1 /
          this.SCALE_FACTOR;

    TransformService.scaleRelative(
      entry.group,
      factor,
    );
  }

  // ══════════════════════════════════════════════
  // CATEGORY FILTERING
  // ══════════════════════════════════════════════

  filterByCategory(
    ids: ObjectInstanceId[] | null,
  ) {
    if (!this.timelineGroup) {
      return;
    }

    const visibleSet =
      ids === null
        ? null
        : new Set(ids);

    for (const entry of this.objectEntries) {
      const visible =
        visibleSet === null ||
        visibleSet.has(entry.id);

      entry.group.visible =
        visible;

      entry.label.visible =
        visible;
    }

    // If the currently selected object
    // was removed by the active filter,
    // selection must be cleared so that
    // interaction never targets a hidden object.
    if (
      this.selectedId &&
      visibleSet &&
      !visibleSet.has(
        this.selectedId,
      )
    ) {
      this.clearSelection();
    }
  }

  // ══════════════════════════════════════════════
  // RESET / REBUILD
  // ══════════════════════════════════════════════

  reset() {
    // First remove selection visuals.
    // This must happen BEFORE disposing the
    // timeline meshes because the ring and halo
    // are children of the selected model.
    this.clearSelectionVisuals();

    this.selectedId = null;

    this.mode = 'group';

    this.interaction.setMode(
      'group',
    );

    this.interaction.setTarget(
      null,
    );

    // Dispose timeline models.
    if (this.timelineGroup) {
      this.disposeGroup(
        this.timelineGroup,
      );

      if (this.arRoot) {
        this.arRoot.remove(
          this.timelineGroup,
        );
      }

      this.timelineGroup = null;
    }

    this.timelineHomeSnap =
      null;

    this.objectEntries = [];

    // Remove AR root.
    if (this.arRoot) {
      this.scene.remove(
        this.arRoot,
      );

      this.arRoot = null;
    }

    this.placementPose =
      null;

    this.isLoadingTimeline =
      false;

    this.undimAll();

    this.callbacks.onObjectSelect(
      null,
    );

    this.callbacks.onModeChange?.(
      'group',
    );

    this.callbacks.onStateChange(
      'searching',
    );
  }

  // ══════════════════════════════════════════════
  // DEMO MODE
  // ══════════════════════════════════════════════

  async enableDemoMode() {
    if (!this.arRoot) {
      await this.autoPlaceTimeline();
    }
  }

  // ══════════════════════════════════════════════
  // HELPERS
  // ══════════════════════════════════════════════

  private isPlaced(): boolean {
    return this.arRoot !== null;
  }

  private disposeGroup(
    group: THREE.Group,
  ) {
    group.traverse(
      (child) => {
        if (
          child instanceof THREE.Mesh
        ) {
          child.geometry?.dispose();

          if (
            Array.isArray(
              child.material,
            )
          ) {
            child.material.forEach(
              (material) =>
                material.dispose(),
            );
          } else {
            child.material?.dispose();
          }
        }

        if (
          child.userData?.labelTexture
        ) {
          (
            child.userData
              .labelTexture as THREE.Texture
          ).dispose();
        }
      },
    );
  }

  // ══════════════════════════════════════════════
  // DISPOSE
  // ══════════════════════════════════════════════

  dispose() {
    if (
      this.animationId !== null
    ) {
      cancelAnimationFrame(
        this.animationId,
      );

      this.animationId = null;
    }

    window.removeEventListener(
      'resize',
      this.boundResize,
    );

    this.interaction.dispose();

    this.reset();

    clearModelCache();

    this.renderer.dispose();

    if (
      this.renderer.domElement
        .parentElement ===
      this.container
    ) {
      this.container.removeChild(
        this.renderer.domElement,
      );
    }
  }
}