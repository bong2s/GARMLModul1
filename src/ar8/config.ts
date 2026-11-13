// Komposisi scene untuk 8 model Modul 1 (sistem sama dengan Modul 1: ukuran dinormalisasi dari
// bounding box GLB asli, lalu ditata per sel). Urutan baca: baris belakang kiri→kanan = 1–4,
// baris depan kiri→kanan = 5–8 (urutan timeline Modul 1).
//
// Ukuran asli (x × y × z, satuan model masing-masing, diukur dari accessor + transform node):
//   Vacuum Tube 1245×2851×1245 · Intel 4004 4.72×1.14×1.61 · Semikonduktor 1.06×0.53×1.02
//   Floppy 0.168×0.155×0.076 · Intel 8086 2.04×1.25×8.00 (sisi panjang di z → rotateY 90°)
//   IBM PC 4.08×2.70×5.71 · Mac Classic 0.445×0.593×0.480 · Power Mac G3 0.889×0.458×0.792

export interface ModelLayout {
  label: string;
  color: string;
  /** Sisi terpanjang setelah normalisasi (satuan scene). */
  targetSize: number;
  /** (x, z) pusat model sebelum seluruh susunan dipusatkan. */
  cell: [number, number];
  rotateX?: number;
  rotateY?: number;
}

const BACK_Z = -1.9;
const FRONT_Z = 1.9;
const COL = [-3.6, -1.2, 1.2, 3.6];

export const MODEL_LAYOUT: Record<string, ModelLayout> = {
  vacuum_tube: { label: "TABUNG HAMPA", color: "#fbbf24", targetSize: 2.1, cell: [COL[0], BACK_Z] },
  intel_4004: { label: "INTEL 4004", color: "#38bdf8", targetSize: 2.1, cell: [COL[1], BACK_Z] },
  semiconductors: { label: "SEMIKONDUKTOR", color: "#2dd4bf", targetSize: 2.0, cell: [COL[2], BACK_Z] },
  floppy_disk: { label: "FLOPPY DISK", color: "#a78bfa", targetSize: 1.9, cell: [COL[3], BACK_Z] },
  intel_8086: { label: "INTEL 8086", color: "#60a5fa", targetSize: 2.1, cell: [COL[0], FRONT_Z], rotateY: Math.PI / 2 },
  ibm_pc_xt_5150: { label: "IBM PC XT", color: "#34d399", targetSize: 2.2, cell: [COL[1], FRONT_Z] },
  macintosh_classic: { label: "MAC CLASSIC", color: "#fb923c", targetSize: 1.9, cell: [COL[2], FRONT_Z] },
  power_mac_g3: { label: "POWER MAC G3", color: "#f472b6", targetSize: 2.0, cell: [COL[3], FRONT_Z] },
};

export const HOME_EULER = { x: 0.62, y: -0.42, order: "YXZ" as const };
export const DIM_OPACITY = 0.35;
export const PART_SCALE_MIN = 0.25;
export const PART_SCALE_MAX = 4;
export const ZOOM_STEP = 1.15;
