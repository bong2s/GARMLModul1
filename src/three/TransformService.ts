import * as THREE from 'three';

// Camera-space transform engine shared by buttons and gestures.
// The important rule: UI coordinates are converted to world space first,
// then to the target parent's local space. This keeps movement intuitive
// even after the timeline/object has been rotated or scaled.

export interface TransformSnapshot {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  userScale: number;
}

const MIN_USER_SCALE = 0.3;
const MAX_USER_SCALE = 5;

// Reusable temporaries.
const _camRight = new THREE.Vector3();
const _camUp = new THREE.Vector3();
const _camBackward = new THREE.Vector3();
const _worldDelta = new THREE.Vector3();
const _parentInverse = new THREE.Matrix4();
const _axisLocal = new THREE.Vector3();
const _arcPrevWorld = new THREE.Vector3();
const _arcCurrWorld = new THREE.Vector3();
const _arcAxisWorld = new THREE.Vector3();
const _parentWorldQuat = new THREE.Quaternion();
const _parentWorldQuatInv = new THREE.Quaternion();
const _worldQuat = new THREE.Quaternion();
const _localQuat = new THREE.Quaternion();

function updateCameraBasis(camera: THREE.PerspectiveCamera) {
  camera.updateMatrixWorld(true);
  camera.matrixWorld.extractBasis(_camRight, _camUp, _camBackward);
}

/** Convert a world-space direction/offset to parent-local coordinates. */
function worldToParentLocal(
  out: THREE.Vector3,
  worldVector: THREE.Vector3,
  target: THREE.Object3D,
): THREE.Vector3 {
  const parent = target.parent;
  if (!parent) {
    out.copy(worldVector);
    return out;
  }

  parent.updateMatrixWorld(true);
  _parentInverse.copy(parent.matrixWorld).invert();

  // A direction has no translation. Applying the inverse matrix's
  // linear 3x3 part also correctly compensates for parent scaling.
  const e = _parentInverse.elements;
  const x = worldVector.x;
  const y = worldVector.y;
  const z = worldVector.z;

  out.set(
    e[0] * x + e[4] * y + e[8] * z,
    e[1] * x + e[5] * y + e[9] * z,
    e[2] * x + e[6] * y + e[10] * z,
  );
  return out;
}

export class TransformService {
  /**
   * dx = camera-right
   * dy = camera-up
   * dz = camera-backward (+Z in camera space).
   *
   * Therefore:
   *   RIGHT  -> +dx
   *   LEFT   -> -dx
   *   UP     -> +dy
   *   DOWN   -> -dy
   *   NEAR   -> +dz
   *   FAR    -> -dz
   */
  static moveInCameraSpace(
    target: THREE.Object3D,
    camera: THREE.PerspectiveCamera,
    dx: number,
    dy: number,
    dz: number,
  ): void {
    updateCameraBasis(camera);

    _worldDelta.set(0, 0, 0);
    _worldDelta.addScaledVector(_camRight, dx);
    _worldDelta.addScaledVector(_camUp, dy);
    _worldDelta.addScaledVector(_camBackward, dz);

    worldToParentLocal(_worldDelta, _worldDelta, target);
    target.position.add(_worldDelta);
  }

  /**
   * Rotate around a camera-space axis using quaternions.
   * The world-space axis is converted to target-parent space before
   * premultiplying the target orientation.
   */
  static rotateAroundCameraAxis(
    target: THREE.Object3D,
    camera: THREE.PerspectiveCamera,
    axis: 'x' | 'y' | 'z',
    angle: number,
  ): void {
    updateCameraBasis(camera);

    const axisWorld =
      axis === 'x' ? _camRight :
      axis === 'y' ? _camUp :
      _camBackward;

    worldToParentLocal(_axisLocal, axisWorld, target);
    _axisLocal.normalize();

    _localQuat.setFromAxisAngle(_axisLocal, angle);
    target.quaternion.premultiply(_localQuat).normalize();
  }

  /**
   * One-finger trackball/arcball rotation.
   * Coordinates are normalized to [-1, 1] and interpreted as points
   * on a virtual sphere in camera space.
   */
  static rotateArcball(
    target: THREE.Object3D,
    camera: THREE.PerspectiveCamera,
    previousNdcX: number,
    previousNdcY: number,
    currentNdcX: number,
    currentNdcY: number,
  ): void {
    updateCameraBasis(camera);

    const mapToWorld = (
      x: number,
      y: number,
      out: THREE.Vector3,
    ) => {
      const r2 = x * x + y * y;
      const z = r2 <= 1 ? Math.sqrt(1 - r2) : 0;
      const len = Math.hypot(x, y, z) || 1;

      out.copy(_camRight).multiplyScalar(x / len);
      out.addScaledVector(_camUp, y / len);
      out.addScaledVector(_camBackward, z / len);
      out.normalize();
    };

    mapToWorld(previousNdcX, previousNdcY, _arcPrevWorld);
    mapToWorld(currentNdcX, currentNdcY, _arcCurrWorld);

    const dot = THREE.MathUtils.clamp(
      _arcPrevWorld.dot(_arcCurrWorld),
      -1,
      1,
    );

    if (dot > 0.999999) return;

    _arcAxisWorld.crossVectors(_arcPrevWorld, _arcCurrWorld);
    const axisLength = _arcAxisWorld.length();

    if (axisLength < 1e-7) {
      // Opposite points: choose a stable camera-right axis.
      _arcAxisWorld.copy(_camRight);
      _worldQuat.setFromAxisAngle(_arcAxisWorld, Math.PI);
    } else {
      _arcAxisWorld.multiplyScalar(1 / axisLength);
      const angle = Math.acos(dot);
      _worldQuat.setFromAxisAngle(_arcAxisWorld, angle);
    }

    const parent = target.parent;
    if (parent) {
      parent.getWorldQuaternion(_parentWorldQuat);
      _parentWorldQuatInv.copy(_parentWorldQuat).invert();

      // qLocal = parent^-1 * qWorld * parent
      _localQuat
        .copy(_parentWorldQuatInv)
        .multiply(_worldQuat)
        .multiply(_parentWorldQuat)
        .normalize();
    } else {
      _localQuat.copy(_worldQuat);
    }

    target.quaternion.premultiply(_localQuat).normalize();
  }

  /**
   * Relative zoom. The normalized model scale is never confused with
   * the user's zoom multiplier.
   */
  static scaleRelative(target: THREE.Object3D, factor: number): void {
    if (!Number.isFinite(factor) || factor <= 0) return;

    const baseScale = (target.userData.baseScale as number) ?? 1;
    const currentUserScale =
      (target.userData.userScale as number) ??
      (target.scale.x / Math.max(baseScale, 1e-8));

    const newUserScale = THREE.MathUtils.clamp(
      currentUserScale * factor,
      MIN_USER_SCALE,
      MAX_USER_SCALE,
    );

    target.scale.setScalar(baseScale * newUserScale);
    target.userData.userScale = newUserScale;
  }

  static getUserScale(target: THREE.Object3D): number {
    const baseScale = (target.userData.baseScale as number) ?? 1;
    return (
      (target.userData.userScale as number) ??
      (target.scale.x / Math.max(baseScale, 1e-8))
    );
  }

  static snapshot(target: THREE.Object3D): TransformSnapshot {
    return {
      position: target.position.clone(),
      quaternion: target.quaternion.clone(),
      userScale: this.getUserScale(target),
    };
  }

  static resetToSnapshot(
    target: THREE.Object3D,
    snap: TransformSnapshot,
  ): void {
    target.position.copy(snap.position);
    target.quaternion.copy(snap.quaternion);

    const baseScale = (target.userData.baseScale as number) ?? 1;
    target.scale.setScalar(baseScale * snap.userScale);
    target.userData.userScale = snap.userScale;
  }
}
