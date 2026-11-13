// ──────────────────────────────────────────────
// Core type definitions for M1 GARML AR
// ──────────────────────────────────────────────

export type ScreenId =
  | 'intro'
  | 'ar'
  | 'timeline'
  | 'performance'
  | 'comparison'
  | 'about';

export type ObjectInstanceId =
  | 'vacuum_tube'
  | 'intel_4004'
  | 'semiconductors'
  | 'floppy_disk'
  | 'intel_8086'
  | 'ibm_pc_xt_5150'
  | 'macintosh_classic'
  | 'power_mac_g3';

export type TopicCategory =
  | 'sejarah'
  | 'kinerja'
  | 'amdahl'
  | 'benchmarking'
  | 'prosesor'
  | 'pentium_vs_powerpc';

export interface TimelineObject {
  id: ObjectInstanceId;
  order: number;
  modelPath: string;
  name: string;
  year: string;
  generation: string;
  technology: string;
  targetHeight: number;
  rotation: [number, number, number];
  shortDescription: string;
  educationalInfo: EducationalInfo;
  placeholderShape: PlaceholderShape;
  placeholderColor: string;
}

export interface EducationalInfo {
  summary: string;
  details: string[];
  topics: TopicCategory[];
  sourceNote?: string;
}

export type PlaceholderShape = 'cylinder' | 'box' | 'chip' | 'monitor' | 'tower' | 'cpu' | 'floppy' | 'ibm_pc';

export interface Generation {
  id: number;
  name: string;
  period: string;
  technology: string;
  description: string;
  fullDescription: string;
  keyPoints: string[];
}

export interface Processor {
  id: number;
  name: string;
  year: string;
  description: string;
}

export interface PerformanceFactor {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonSide {
  name: string;
  company: string;
  platform: string;
  architecture: string;
  details: { label: string; value: string }[];
}

export interface ComparisonPoint {
  label: string;
  pentium: string;
  powerpc: string;
}

// ── AR session state ──

export type ARSessionState =
  | 'idle'
  | 'requesting_permission'
  | 'permission_denied'
  | 'unsupported'
  | 'starting'
  | 'searching'
  | 'detected'
  | 'placed'
  | 'demo'
  | 'loading';

export interface PlacementPose {
  position: [number, number, number];
  rotation: [number, number, number];
}
