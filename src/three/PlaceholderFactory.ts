import * as THREE from 'three';
import type { TimelineObject, PlaceholderShape } from '@/data/types';

// ──────────────────────────────────────────────
// Placeholder geometry factory
// Creates simple recognizable 3D shapes for objects
// whose GLTF/GLB model failed to load or is missing.
// ──────────────────────────────────────────────

export function createPlaceholderMesh(obj: TimelineObject): THREE.Group {
  const group = new THREE.Group();
  group.userData.objectId = obj.id;

  const shape = obj.placeholderShape;
  const color = new THREE.Color(obj.placeholderColor);
  const h = obj.targetHeight;

  switch (shape) {
    case 'cylinder': {
      const bodyGeo = new THREE.CylinderGeometry(h * 0.35, h * 0.3, h, 24, 1);
      const bodyMat = new THREE.MeshStandardMaterial({
        color, metalness: 0.3, roughness: 0.4, transparent: true, opacity: 0.88,
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h / 2;
      group.add(body);

      const baseGeo = new THREE.CylinderGeometry(h * 0.3, h * 0.35, h * 0.08, 24);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6, roughness: 0.3 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.y = h * 0.04;
      group.add(base);
      break;
    }

    case 'chip': {
      const bodyGeo = new THREE.BoxGeometry(h * 1.4, h * 0.15, h * 1.4);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, metalness: 0.5, roughness: 0.3 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h * 0.075;
      group.add(body);

      const topGeo = new THREE.BoxGeometry(h * 1.1, h * 0.02, h * 1.1);
      const topMat = new THREE.MeshStandardMaterial({
        color, metalness: 0.4, roughness: 0.4, emissive: color, emissiveIntensity: 0.15,
      });
      const top = new THREE.Mesh(topGeo, topMat);
      top.position.y = h * 0.16;
      group.add(top);

      const pinGeo = new THREE.BoxGeometry(h * 0.04, h * 0.08, h * 0.12);
      const pinMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.2 });
      for (let side = 0; side < 4; side++) {
        for (let i = 0; i < 5; i++) {
          const pin = new THREE.Mesh(pinGeo, pinMat);
          const offset = (i - 2) * h * 0.22;
          if (side === 0) pin.position.set(offset, h * 0.04, h * 0.72);
          else if (side === 1) pin.position.set(offset, h * 0.04, -h * 0.72);
          else if (side === 2) { pin.position.set(h * 0.72, h * 0.04, offset); pin.rotation.y = Math.PI / 2; }
          else { pin.position.set(-h * 0.72, h * 0.04, offset); pin.rotation.y = Math.PI / 2; }
          group.add(pin);
        }
      }
      break;
    }

    case 'monitor': {
      const bodyGeo = new THREE.BoxGeometry(h * 1.1, h, h * 1.2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc4c4c4, metalness: 0.1, roughness: 0.7 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h / 2;
      group.add(body);

      const screenGeo = new THREE.BoxGeometry(h * 0.75, h * 0.55, h * 0.02);
      const screenMat = new THREE.MeshStandardMaterial({
        color: 0x22d3ee, metalness: 0.1, roughness: 0.2, emissive: color, emissiveIntensity: 0.2,
      });
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.set(0, h * 0.58, h * 0.61);
      group.add(screen);
      break;
    }

    case 'tower': {
      const bodyGeo = new THREE.BoxGeometry(h * 0.5, h, h * 0.55);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.15, roughness: 0.6 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h / 2;
      group.add(body);

      const panelGeo = new THREE.BoxGeometry(h * 0.42, h * 0.3, h * 0.01);
      const panelMat = new THREE.MeshStandardMaterial({
        color, metalness: 0.3, roughness: 0.4, emissive: color, emissiveIntensity: 0.1,
      });
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(0, h * 0.7, h * 0.28);
      group.add(panel);
      break;
    }

    case 'floppy': {
      const bodyGeo = new THREE.BoxGeometry(h * 1.2, h * 0.08, h * 1.2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.2, roughness: 0.5 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h * 0.04;
      group.add(body);

      const labelGeo = new THREE.BoxGeometry(h * 0.6, h * 0.01, h * 0.5);
      const labelMat = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, metalness: 0.0, roughness: 0.8 });
      const label = new THREE.Mesh(labelGeo, labelMat);
      label.position.set(0, h * 0.09, h * 0.1);
      group.add(label);
      break;
    }

    case 'ibm_pc': {
      const bodyGeo = new THREE.BoxGeometry(h * 0.9, h, h * 1.1);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc4c4c4, metalness: 0.1, roughness: 0.7 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = h / 2;
      group.add(body);

      const slotGeo = new THREE.BoxGeometry(h * 0.6, h * 0.15, h * 0.02);
      const slotMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.3, roughness: 0.5 });
      for (let i = 0; i < 2; i++) {
        const slot = new THREE.Mesh(slotGeo, slotMat);
        slot.position.set(0, h * (0.35 + i * 0.2), h * 0.56);
        group.add(slot);
      }
      break;
    }

    default: {
      const geo = new THREE.BoxGeometry(h, h, h);
      const mat = new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.5 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = h / 2;
      group.add(mesh);
    }
  }

  group.rotation.set(obj.rotation[0], obj.rotation[1], obj.rotation[2]);
  return group;
}

// ── Placement indicator ──

export function createPlacementIndicator(): THREE.Group {
  const group = new THREE.Group();

  const ringGeo = new THREE.RingGeometry(0.08, 0.1, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee, side: THREE.DoubleSide, transparent: true, opacity: 0.8,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.001;
  group.add(ring);

  const innerGeo = new THREE.CircleGeometry(0.07, 32);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee, transparent: true, opacity: 0.15, side: THREE.DoubleSide,
  });
  const inner = new THREE.Mesh(innerGeo, innerMat);
  inner.rotation.x = -Math.PI / 2;
  inner.position.y = 0.0005;
  group.add(inner);

  return group;
}

// ── Selection ring ──

export function createSelectionRing(height: number): THREE.Mesh {
  const geo = new THREE.RingGeometry(height * 0.45, height * 0.55, 48);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee, side: THREE.DoubleSide, transparent: true, opacity: 0.7,
  });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.002;
  return ring;
}

// ── Floating text label for each timeline object ──

export function createTextLabel(text: string, subtext: string): THREE.Group {
  const group = new THREE.Group();

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  const fontSize = 48;
  const subFontSize = 32;
  ctx.font = `bold ${fontSize}px Space Grotesk, sans-serif`;
  const textWidth = ctx.measureText(text).width;
  ctx.font = `${subFontSize}px Inter, sans-serif`;
  const subWidth = ctx.measureText(subtext).width;
  const width = Math.max(textWidth, subWidth) + 40;
  const height = fontSize + subFontSize + 24;

  canvas.width = width;
  canvas.height = height;

  // Background
  ctx.fillStyle = 'rgba(10, 14, 26, 0.85)';
  ctx.beginPath();
  const r = 12;
  ctx.moveTo(r, 0);
  ctx.lineTo(width - r, 0);
  ctx.quadraticCurveTo(width, 0, width, r);
  ctx.lineTo(width, height - r);
  ctx.quadraticCurveTo(width, height, width - r, height);
  ctx.lineTo(r, height);
  ctx.quadraticCurveTo(0, height, 0, height - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // Accent border
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Main text
  ctx.font = `bold ${fontSize}px Space Grotesk, sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(text, width / 2, 8);

  // Subtext
  ctx.font = `${subFontSize}px Inter, sans-serif`;
  ctx.fillStyle = '#22d3ee';
  ctx.fillText(subtext, width / 2, 8 + fontSize + 4);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const labelMat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });

  const aspect = width / height;
  const labelHeight = 0.04;
  const labelGeo = new THREE.PlaneGeometry(labelHeight * aspect, labelHeight);
  const label = new THREE.Mesh(labelGeo, labelMat);
  label.renderOrder = 999;

  group.add(label);
  group.userData.isLabel = true;
  group.userData.labelTexture = texture;

  return group;
}
