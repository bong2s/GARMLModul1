import * as THREE from 'three';
import { TransformService } from './TransformService';

export type InteractionMode = 'group' | 'inspect';

interface ControllerCallbacks {
  onTap: (ndcX: number, ndcY: number) => void;
  onModeChange?: (mode: InteractionMode) => void;
}

const TAP_MAX_MOVE = 10;
const MIN_PINCH_DISTANCE = 10;
const PAN_SENSITIVITY = 1.2;
const TWIST_SENSITIVITY = 1.0;

export class ARInteractionController {
  private el: HTMLElement;
  private callbacks: ControllerCallbacks;
  private camera: THREE.PerspectiveCamera;

  private mode: InteractionMode = 'group';
  private target: THREE.Object3D | null = null;

  // Touch gesture state.
  private touchGesture: 'none' | 'arcball' | 'multi' = 'none';
  private touchWasMulti = false;
  private touchStartX = 0;
  private touchStartY = 0;
  private touchLastX = 0;
  private touchLastY = 0;

  private pinchLastDist = 0;
  private pinchLastAngle = 0;
  private pinchLastMidX = 0;
  private pinchLastMidY = 0;

  // Mouse / pen state.
  private pointerActive = false;
  private pointerButton = 0;
  private pointerStartX = 0;
  private pointerStartY = 0;
  private pointerLastX = 0;
  private pointerLastY = 0;
  private pointerGesture: 'none' | 'arcball' | 'pan' = 'none';

  private boundTouchStart: (e: TouchEvent) => void;
  private boundTouchMove: (e: TouchEvent) => void;
  private boundTouchEnd: (e: TouchEvent) => void;
  private boundPointerDown: (e: PointerEvent) => void;
  private boundPointerMove: (e: PointerEvent) => void;
  private boundPointerUp: (e: PointerEvent) => void;
  private boundWheel: (e: WheelEvent) => void;
  private boundContext: (e: Event) => void;

  constructor(
    el: HTMLElement,
    camera: THREE.PerspectiveCamera,
    _raycaster: THREE.Raycaster,
    callbacks: ControllerCallbacks,
  ) {
    this.el = el;
    this.camera = camera;
    this.callbacks = callbacks;

    // Critical on mobile: browser scrolling/zooming must never compete
    // with the AR gesture engine.
    this.el.style.touchAction = 'none';

    this.boundTouchStart = this.onTouchStart.bind(this);
    this.boundTouchMove = this.onTouchMove.bind(this);
    this.boundTouchEnd = this.onTouchEnd.bind(this);
    this.boundPointerDown = this.onPointerDown.bind(this);
    this.boundPointerMove = this.onPointerMove.bind(this);
    this.boundPointerUp = this.onPointerUp.bind(this);
    this.boundWheel = this.onWheel.bind(this);
    this.boundContext = (e: Event) => e.preventDefault();

    el.addEventListener('touchstart', this.boundTouchStart, { passive: false });
    el.addEventListener('touchmove', this.boundTouchMove, { passive: false });
    el.addEventListener('touchend', this.boundTouchEnd, { passive: false });
    el.addEventListener('touchcancel', this.boundTouchEnd, { passive: false });

    el.addEventListener('pointerdown', this.boundPointerDown);
    window.addEventListener('pointermove', this.boundPointerMove);
    window.addEventListener('pointerup', this.boundPointerUp);
    el.addEventListener('wheel', this.boundWheel, { passive: false });
    el.addEventListener('contextmenu', this.boundContext);
  }

  setMode(mode: InteractionMode) {
    this.mode = mode;
    this.callbacks.onModeChange?.(mode);
  }

  setTarget(target: THREE.Object3D | null) {
    this.target = target;
  }

  // ──────────────────────────────────────────────
  // Touch
  //
  // 1 finger  = arcball rotation
  // 2 fingers = pan + pinch zoom + optional twist rotation
  // Tap       = selection
  // ──────────────────────────────────────────────

  private onTouchStart(e: TouchEvent) {
    e.preventDefault();

    if (e.touches.length === 1) {
      const t = e.touches[0];

      this.touchGesture = 'arcball';
      this.touchWasMulti = false;
      this.touchStartX = t.clientX;
      this.touchStartY = t.clientY;
      this.touchLastX = t.clientX;
      this.touchLastY = t.clientY;
      return;
    }

    if (e.touches.length >= 2 && this.target) {
      this.touchGesture = 'multi';
      this.touchWasMulti = true;

      const [a, b] = [e.touches[0], e.touches[1]];
      const dx = b.clientX - a.clientX;
      const dy = b.clientY - a.clientY;

      this.pinchLastDist = Math.max(Math.hypot(dx, dy), MIN_PINCH_DISTANCE);
      this.pinchLastAngle = Math.atan2(dy, dx);
      this.pinchLastMidX = (a.clientX + b.clientX) * 0.5;
      this.pinchLastMidY = (a.clientY + b.clientY) * 0.5;
    }
  }

  private onTouchMove(e: TouchEvent) {
    e.preventDefault();

    if (e.touches.length === 1 && this.touchGesture === 'arcball' && !this.touchWasMulti) {
      const t = e.touches[0];
      this.applyArcballDrag(this.touchLastX, this.touchLastY, t.clientX, t.clientY);
      this.touchLastX = t.clientX;
      this.touchLastY = t.clientY;
      return;
    }

    if (e.touches.length >= 2 && this.touchGesture === 'multi' && this.target) {
      const [a, b] = [e.touches[0], e.touches[1]];
      this.updateMultiTouch(a.clientX, a.clientY, b.clientX, b.clientY);
    }
  }

  private onTouchEnd(e: TouchEvent) {
    e.preventDefault();

    if (e.touches.length === 0) {
      if (this.touchGesture === 'arcball' && !this.touchWasMulti) {
        const moved = Math.hypot(
          this.touchLastX - this.touchStartX,
          this.touchLastY - this.touchStartY,
        );

        if (moved < TAP_MAX_MOVE) {
          this.tryTap(this.touchLastX, this.touchLastY);
        }
      }

      this.touchGesture = 'none';
      this.touchWasMulti = false;
      return;
    }

    if (e.touches.length === 1) {
      // Never resume one-finger rotation after a pinch. This prevents
      // the second half of a pinch from becoming an accidental tap/drag.
      this.touchGesture = 'none';
      this.touchWasMulti = true;

      const t = e.touches[0];
      this.touchLastX = t.clientX;
      this.touchLastY = t.clientY;
    }
  }

  // ──────────────────────────────────────────────
  // Mouse / pen
  //
  // Left drag  = arcball
  // Right drag = camera-space pan
  // Wheel      = relative zoom
  // ──────────────────────────────────────────────

  private onPointerDown(e: PointerEvent) {
    if (e.pointerType === 'touch') return;

    e.preventDefault();

    this.pointerActive = true;
    this.pointerButton = e.button;
    this.pointerStartX = e.clientX;
    this.pointerStartY = e.clientY;
    this.pointerLastX = e.clientX;
    this.pointerLastY = e.clientY;
    this.pointerGesture = e.button === 2 ? 'pan' : 'arcball';

    try {
      this.el.setPointerCapture(e.pointerId);
    } catch {
      // Pointer capture is a progressive enhancement.
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (e.pointerType === 'touch') return;
    if (!this.pointerActive || !this.target) return;

    if (this.pointerGesture === 'arcball') {
      this.applyArcballDrag(
        this.pointerLastX,
        this.pointerLastY,
        e.clientX,
        e.clientY,
      );
    } else if (this.pointerGesture === 'pan') {
      this.applyScreenPan(
        e.clientX - this.pointerLastX,
        e.clientY - this.pointerLastY,
      );
    }

    this.pointerLastX = e.clientX;
    this.pointerLastY = e.clientY;
  }

  private onPointerUp(e: PointerEvent) {
    if (e.pointerType === 'touch') return;
    if (!this.pointerActive) return;

    const moved = Math.hypot(
      e.clientX - this.pointerStartX,
      e.clientY - this.pointerStartY,
    );

    if (
      this.pointerButton === 0 &&
      this.pointerGesture === 'arcball' &&
      moved < TAP_MAX_MOVE
    ) {
      this.tryTap(e.clientX, e.clientY);
    }

    try {
      this.el.releasePointerCapture(e.pointerId);
    } catch {
      // Pointer capture may already have been released.
    }

    this.pointerActive = false;
    this.pointerGesture = 'none';
  }

  private onWheel(e: WheelEvent) {
    if (!this.target) return;

    e.preventDefault();

    const factor = e.deltaY > 0 ? 1 / 1.1 : 1.1;
    TransformService.scaleRelative(this.target, factor);
  }

  // ──────────────────────────────────────────────
  // Shared transform operations
  // ──────────────────────────────────────────────

  private applyArcballDrag(
    previousX: number,
    previousY: number,
    currentX: number,
    currentY: number,
  ) {
    if (!this.target) return;

    const rect = this.el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const toNdc = (x: number, y: number) => ({
      x: ((x - rect.left) / rect.width) * 2 - 1,
      y: -(((y - rect.top) / rect.height) * 2 - 1),
    });

    const prev = toNdc(previousX, previousY);
    const curr = toNdc(currentX, currentY);

    TransformService.rotateArcball(
      this.target,
      this.camera,
      prev.x,
      prev.y,
      curr.x,
      curr.y,
    );
  }

  private applyScreenPan(deltaX: number, deltaY: number) {
    if (!this.target) return;

    const rect = this.el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const sensitivity =
      this.mode === 'inspect' ? PAN_SENSITIVITY * 0.7 : PAN_SENSITIVITY;

    TransformService.moveInCameraSpace(
      this.target,
      this.camera,
      (deltaX / rect.width) * sensitivity,
      -(deltaY / rect.height) * sensitivity,
      0,
    );
  }

  private updateMultiTouch(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ) {
    if (!this.target) return;

    const dx = x2 - x1;
    const dy = y2 - y1;

    const dist = Math.max(Math.hypot(dx, dy), MIN_PINCH_DISTANCE);
    const angle = Math.atan2(dy, dx);

    const midX = (x1 + x2) * 0.5;
    const midY = (y1 + y2) * 0.5;

    // 1) Two-finger pan uses the same camera-space movement engine.
    this.applyScreenPan(
      midX - this.pinchLastMidX,
      midY - this.pinchLastMidY,
    );

    // 2) Pinch uses a relative ratio, so zoom direction never depends
    // on the model's original GLTF normalization scale.
    const scaleFactor = dist / Math.max(this.pinchLastDist, MIN_PINCH_DISTANCE);
    TransformService.scaleRelative(this.target, scaleFactor);

    // 3) Optional two-finger twist, also through the shared quaternion engine.
    let angleDelta = angle - this.pinchLastAngle;
    if (angleDelta > Math.PI) angleDelta -= Math.PI * 2;
    if (angleDelta < -Math.PI) angleDelta += Math.PI * 2;

    if (Math.abs(angleDelta) > 0.0001) {
      TransformService.rotateAroundCameraAxis(
        this.target,
        this.camera,
        'y',
        angleDelta * TWIST_SENSITIVITY,
      );
    }

    this.pinchLastDist = dist;
    this.pinchLastAngle = angle;
    this.pinchLastMidX = midX;
    this.pinchLastMidY = midY;
  }

  private tryTap(x: number, y: number) {
    const rect = this.el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const ndcX = ((x - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((y - rect.top) / rect.height) * 2 + 1;
    this.callbacks.onTap(ndcX, ndcY);
  }

  dispose() {
    this.el.removeEventListener('touchstart', this.boundTouchStart);
    this.el.removeEventListener('touchmove', this.boundTouchMove);
    this.el.removeEventListener('touchend', this.boundTouchEnd);
    this.el.removeEventListener('touchcancel', this.boundTouchEnd);
    this.el.removeEventListener('pointerdown', this.boundPointerDown);
    window.removeEventListener('pointermove', this.boundPointerMove);
    window.removeEventListener('pointerup', this.boundPointerUp);
    this.el.removeEventListener('wheel', this.boundWheel);
    this.el.removeEventListener('contextmenu', this.boundContext);
  }
}
