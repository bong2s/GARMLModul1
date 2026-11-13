import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { TimelineObject } from '@/data/types';
import { createPlaceholderMesh } from './PlaceholderFactory';

// ──────────────────────────────────────────────
// ModelLoader
// Loads GLTF/GLB models asynchronously, normalizes
// their scale to a target AR height, aligns the
// bottom to y=0 (on the plane), and applies
// per-object rotation. Falls back to placeholder
// geometry if the model is missing or fails to load.
//
// The AR placement code treats loaded models and
// placeholders identically — both are THREE.Group
// with userData.objectId set.
// ──────────────────────────────────────────────

const loader = new GLTFLoader();

const modelCache = new Map<string, THREE.Group>();
const failedLoads = new Set<string>();

export interface LoadResult {
  group: THREE.Group;
  isPlaceholder: boolean;
  error?: string;
}

// Reusable temp for normalizeGroup
const _box = new THREE.Box3();
const _size = new THREE.Vector3();
const _center = new THREE.Vector3();

export async function loadObjectModel(obj: TimelineObject): Promise<LoadResult> {
  const ref = obj.modelPath;

  if (failedLoads.has(ref)) {
    return {
      group: createPlaceholderMesh(obj),
      isPlaceholder: true,
      error: 'Model sebelumnya gagal dimuat — menggunakan placeholder',
    };
  }

  if (modelCache.has(ref)) {
    const cached = modelCache.get(ref)!;
    const cloned = cloneGroup(cached);
    normalizeGroup(cloned, obj);
    return { group: cloned, isPlaceholder: false };
  }

  try {
    const gltf = await loader.loadAsync(ref);
    const model = gltf.scene;

    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          for (const mat of mats) {
            if (mat instanceof THREE.MeshStandardMaterial && mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
            }
          }
        }
      }
    });

    modelCache.set(ref, model);

    const cloned = cloneGroup(model);
    normalizeGroup(cloned, obj);

    return { group: cloned, isPlaceholder: false };
  } catch (err) {
    failedLoads.add(ref);
    console.warn(`[M1 GARML] Model gagal dimuat: ${ref}`, err);
    return {
      group: createPlaceholderMesh(obj),
      isPlaceholder: true,
      error: 'File model tidak dapat dimuat (dependency .bin/tekstur hilang)',
    };
  }
}

function cloneGroup(source: THREE.Group): THREE.Group {
  const cloned = source.clone(true);
  cloned.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (Array.isArray(child.material)) {
        child.material = child.material.map((m) => m.clone());
      } else if (child.material) {
        child.material = child.material.clone();
      }
    }
  });
  return cloned;
}

function normalizeGroup(group: THREE.Group, obj: TimelineObject) {
  _box.setFromObject(group);
  if (_box.isEmpty()) return;

  _box.getSize(_size);
  const targetH = obj.targetHeight;
  const currentH = _size.y;
  let scale = 1;

  if (currentH > 0.0001) {
    scale = targetH / currentH;
  } else {
    const maxDim = Math.max(_size.x, _size.y, _size.z);
    if (maxDim > 0.0001) scale = targetH / maxDim;
  }

  group.scale.setScalar(scale);

  // Re-measure after scaling to center the model
  _box.setFromObject(group);
  _box.getCenter(_center);

  // Store baseScale so zoom uses baseScale * userScale, not raw clamping
  group.userData.baseScale = scale;
  group.userData.userScale = 1;

  // Move the visual center to the object's local origin.
  // This makes the group itself the pivot, so rotation/zoom happen
  // around the visual center instead of making the model orbit away.
  group.position.x -= _center.x;
  group.position.y -= _center.y;
  group.position.z -= _center.z;

  group.rotation.set(obj.rotation[0], obj.rotation[1], obj.rotation[2]);
}

export async function preloadTimelineModels(objects: TimelineObject[]): Promise<void> {
  const loadable = objects.filter((o) => o.modelPath && !failedLoads.has(o.modelPath));
  await Promise.all(
    loadable.map(async (obj) => {
      const ref = obj.modelPath;
      if (modelCache.has(ref) || failedLoads.has(ref)) return;
      try {
        const gltf = await loader.loadAsync(ref);
        modelCache.set(ref, gltf.scene);
      } catch {
        failedLoads.add(ref);
      }
    })
  );
}

export function clearModelCache() {
  modelCache.clear();
  failedLoads.clear();
}
