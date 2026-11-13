// Registry model Modul 1. ID model dan ID topik dipisah; pemetaan di bawah adalah konfigurasi eksplisit.
// Berkas model ada di public/models/<id>/ (gltf + scene.bin + textures/ harus berdampingan).

import { CONTEXT_PANELS, MODULE_TOPICS, type LessonTopic } from "./lessons";

export interface ModelEntry {
  id: string;
  label: string;
  url: string;
}

const BASE = import.meta.env.BASE_URL;
const url = (path: string) => `${BASE}models/${encodeURI(path)}`;

// Urutan = alur belajar (timeline Modul 1).
export const MODELS: ModelEntry[] = [
  { id: "vacuum_tube", label: "Tabung Hampa Udara", url: url("vacuum_tube/Vacuum_Tube.glb") },
  { id: "intel_4004", label: "Intel 4004", url: url("intel_4004/intel4004.gltf") },
  { id: "semiconductors", label: "Semikonduktor", url: url("semiconductors/semiconductors.gltf") },
  { id: "floppy_disk", label: "Floppy Disk", url: url("floppy_disk/floppy_disk.gltf") },
  { id: "intel_8086", label: "Intel 8086", url: url("intel_8086/cpu_intel_8086.gltf") },
  { id: "ibm_pc_xt_5150", label: "IBM PC XT 5150", url: url("ibm_pc_xt_5150/ibm_pc_xt_5150.gltf") },
  { id: "macintosh_classic", label: "Macintosh Classic", url: url("macintosh_classic/macintosh_classic_1991.gltf") },
  { id: "power_mac_g3", label: "Power Mac G3", url: url("power_mac_g3/apple_power_mac_g3.gltf") },
];

export function modelUrl(id: string): string {
  return MODELS.find((m) => m.id === id)?.url ?? "";
}

// Topik utama tiap model (model id → topic id).
export const MODEL_TOPIC_MAP: Record<string, string[]> = {
  vacuum_tube: ["vacuum-tube"],
  intel_4004: ["intel-4004"],
  semiconductors: ["semiconductors"],
  floppy_disk: ["floppy-disk"],
  intel_8086: ["intel-8086"],
  ibm_pc_xt_5150: ["ibm-pc"],
  macintosh_classic: ["mac-classic"],
  power_mac_g3: ["power-mac-g3"],
};

// Panel pendukung (tab tambahan) per model.
const MODEL_CONTEXT: Record<string, string[]> = {
  floppy_disk: ["memory-hierarchy"],
  intel_8086: ["performance-formulas"],
  power_mac_g3: ["pentium-vs-powerpc"],
};

export function getOwnTopicsForModel(modelId: string): LessonTopic[] {
  const ids = MODEL_TOPIC_MAP[modelId] ?? [];
  return MODULE_TOPICS.filter((t) => ids.includes(t.id));
}

/** Semua tab pada panel info model: topik utama, lalu panel pendukung. */
export function getTopicsForModel(modelId: string): LessonTopic[] {
  const ctx = CONTEXT_PANELS.filter((t) => (MODEL_CONTEXT[modelId] ?? []).includes(t.id));
  return [...getOwnTopicsForModel(modelId), ...ctx];
}
