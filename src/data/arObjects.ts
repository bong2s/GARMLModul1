import type { TimelineObject, ObjectInstanceId } from './types';
import { modelUrl } from '@/ar8/registry';

// ──────────────────────────────────────────────
// Timeline objects — 8 items in chronological order.
//
// Sumber data:
// - Asset/model: public/models/<id>/* (lihat src/ar8/registry.ts)
// - Materi pembelajaran: Modul 1 — Evolusi dan Kinerja Komputer
// - Referensi studi kasus: Evolusi Pentium vs PowerPC
//
// Urutan timeline sengaja dipertahankan:
// 0 Vacuum Tube
// 1 Intel 4004
// 2 Semiconductors
// 3 Floppy Disk
// 4 Intel 8086
// 5 IBM PC XT 5150
// 6 Macintosh Classic
// 7 Power Mac G3
// ──────────────────────────────────────────────


export const timelineObjects: TimelineObject[] = [
  // =========================================================
  // 0 — GENERASI I
  // =========================================================
  {
    id: 'vacuum_tube',
    order: 0,
    modelPath: modelUrl('vacuum_tube'),
    name: 'TABUNG HAMPA UDARA',
    year: '1940–1959',
    generation: 'Generasi I',
    technology: 'Vacuum Tube / Tabung Hampa Udara',
    targetHeight: 0.16,
    rotation: [0, 0, 0],
    shortDescription:
      'Komponen utama komputer generasi pertama yang menggunakan tabung hampa udara.',
    placeholderShape: 'cylinder',
    placeholderColor: '#22d3ee',

    educationalInfo: {
      summary:
        'Komputer generasi pertama berkembang pada periode 1940–1959 dan menggunakan tabung hampa udara (vacuum tube) serta drum magnetik. Perkembangannya didorong oleh kebutuhan strategis, termasuk lingkungan akademik dan militer pada masa Perang Dunia II. Ukuran komputer pada generasi ini sangat besar hingga dapat memenuhi satu ruangan.',

      details: [
        'Periode Generasi I: 1940–1959',
        'Teknologi utama: tabung hampa udara (vacuum tube)',
        'Menggunakan drum magnetik sebagai salah satu media penyimpanan',
        'Berkembang dalam lingkungan akademik dan militer',
        'Perkembangannya didorong oleh kebutuhan strategis Perang Dunia II',
        'Ukuran fisik komputer sangat besar dan dapat memenuhi satu ruangan',
      ],

      topics: ['sejarah', 'generasi_1'],

      sourceNote:
        'Berdasarkan materi Modul 1 — Sejarah/Evolusi Komputer, Generasi I.',
    },
  },

  // =========================================================
  // 1 — GENERASI IV / MIKROPROSESOR
  // =========================================================
  {
    id: 'intel_4004',
    order: 1,
    modelPath: modelUrl('intel_4004'),
    name: 'INTEL 4004',
    year: '1971',
    generation: 'Generasi IV',
    technology: 'Microprocessor / MOSFET / LSI',
    targetHeight: 0.10,
    rotation: [0, 0, 0],
    shortDescription:
      'Model mikroprosesor yang merepresentasikan awal perkembangan era mikroprosesor.',

    placeholderShape: 'chip',
    placeholderColor: '#3b82f6',

    educationalInfo: {
      summary:
        'Intel 4004 digunakan dalam timeline AR sebagai representasi awal era mikroprosesor pada Generasi IV. Materi Modul 1 menjelaskan bahwa Generasi IV dimulai pada dekade 1970-an ketika perkembangan MOSFET dan Large Scale Integration (LSI) membawa komputer menuju pengembangan mikroprosesor.',

      details: [
        'Tahun pada timeline: 1971',
        'Merepresentasikan perkembangan awal era mikroprosesor',
        'Generasi IV berkembang mulai dekade 1970-an',
        'MOSFET menjadi salah satu teknologi penting dalam perkembangan Generasi IV',
        'Large Scale Integration (LSI) memungkinkan integrasi komponen dalam skala lebih besar',
        'Perkembangan tersebut membawa komputer menuju penggunaan mikroprosesor',
      ],

      topics: ['sejarah', 'generasi_4', 'mikroprosesor'],

      sourceNote:
        'Konteks Generasi IV berdasarkan materi Modul 1. Detail historis Intel 4004 digunakan sebagai konteks tambahan untuk model pada timeline.',
    },
  },

  // =========================================================
  // 2 — GENERASI IV / SEMIKONDUKTOR
  // =========================================================
  {
    id: 'semiconductors',
    order: 2,
    modelPath: modelUrl('semiconductors'),
    name: 'SEMIKONDUKTOR',
    year: '1970-an',
    generation: 'Generasi IV',
    technology: 'Semiconductor / MOSFET / LSI',
    targetHeight: 0.12,
    rotation: [0, 0, 0],
    shortDescription:
      'Teknologi semikonduktor yang mendukung integrasi komponen dan perkembangan mikroprosesor.',

    placeholderShape: 'chip',
    placeholderColor: '#0e7490',

    educationalInfo: {
      summary:
        'Perkembangan semikonduktor, MOSFET, dan integrasi berskala besar (Large Scale Integration/LSI) menjadi bagian penting dari Generasi IV. Perkembangan ini memungkinkan komponen elektronik menjadi semakin terintegrasi dan mendukung lahirnya mikroprosesor.',

      details: [
        'Berkaitan dengan perkembangan komputer Generasi IV',
        'MOSFET menjadi salah satu teknologi penting dalam perkembangan Generasi IV',
        'Large Scale Integration (LSI) meningkatkan tingkat integrasi komponen',
        'Integrasi komponen mendukung miniaturisasi perangkat komputer',
        'Perkembangan semikonduktor mendukung lahirnya mikroprosesor',
        'Perkembangan ini menjadi bagian dari transisi menuju era komputer personal',
      ],

      topics: ['sejarah', 'generasi_4', 'mikroprosesor'],

      sourceNote:
        'Berdasarkan materi Modul 1 — Sejarah/Evolusi Komputer, Generasi IV.',
    },
  },

  // =========================================================
  // 3 — STORAGE / KINERJA
  // =========================================================
  {
    id: 'floppy_disk',
    order: 3,
    modelPath: modelUrl('floppy_disk'),
    name: 'FLOPPY DISK',
    year: '1970-an–1980-an',
    generation: 'Generasi IV',
    technology: 'Magnetic Storage',
    targetHeight: 0.14,
    rotation: [0, 0, 0],
    shortDescription:
      'Media penyimpanan berbasis magnetik yang merepresentasikan perkembangan storage pada era komputer personal.',

    placeholderShape: 'floppy',
    placeholderColor: '#60a5fa',

    educationalInfo: {
      summary:
        'Floppy disk merupakan media penyimpanan berbasis magnetik yang digunakan pada perkembangan komputer personal. Dalam konteks Modul 1, objek ini dapat dikaitkan dengan pembahasan storage dan pengaruh hierarki memori terhadap kinerja sistem komputer.',

      details: [
        'Media penyimpanan berbasis magnetik',
        'Berkaitan dengan perkembangan komputer personal',
        'Merepresentasikan perkembangan teknologi penyimpanan pada era komputer personal',
        'Storage merupakan bagian dari sistem memori dan penyimpanan komputer',
        'Kecepatan akses memori dan penyimpanan dapat memengaruhi kinerja sistem',
        'Hierarki memori mempertimbangkan perbedaan kecepatan dan karakteristik berbagai tingkat penyimpanan',
      ],

      topics: ['sejarah', 'kinerja', 'storage'],

      sourceNote:
        'Kaitan dengan kinerja dan storage hierarchy berdasarkan materi Modul 1 — Perancangan Kinerja Sistem Komputer. Floppy disk digunakan sebagai konteks historis tambahan untuk asset AR.',
    },
  },

  // =========================================================
  // 4 — MIKROPROSESOR / EVOLUSI INTEL
  // =========================================================
  {
    id: 'intel_8086',
    order: 4,
    modelPath: modelUrl('intel_8086'),
    name: 'INTEL 8086',
    year: '1978',
    generation: 'Generasi IV',
    technology: '16-bit Microprocessor / x86',
    targetHeight: 0.14,
    rotation: [0, 0, 0],
    shortDescription:
      'Mikroprosesor 16-bit tahun 1978 yang menjadi bagian penting dalam evolusi arsitektur x86.',

    placeholderShape: 'chip',
    placeholderColor: '#3b82f6',

    educationalInfo: {
      summary:
        'Intel 8086 merupakan mikroprosesor tahun 1978 dengan arsitektur 16-bit dan bus alamat 20-bit yang dapat mengalamati hingga 1 MB. Dalam materi Modul 1, 8086 menjadi titik awal tabel evolusi prosesor Intel yang kemudian berkembang menuju generasi prosesor berikutnya.',

      details: [
        'Tahun: 1978',
        'Arsitektur: 16-bit',
        'Bus alamat: 20-bit',
        'Kemampuan pengalamatan: hingga 1 MB',
        'Menjadi bagian awal dari evolusi prosesor Intel yang dibahas dalam materi',
        'Materi juga mencatat perkembangan awal pipelining pada 8086',
        'Evolusi berikutnya mencakup 80286, 80386, 80486, Pentium, Pentium Pro/II/III, dan Pentium 4',
      ],

      topics: [
        'sejarah',
        'generasi_4',
        'mikroprosesor',
        'prosesor',
        'pentium',
      ],

      sourceNote:
        'Berdasarkan materi Modul 1 — Evolusi Prosesor: 8086 (1978), termasuk karakteristik 16-bit, bus alamat 20-bit, kemampuan pengalamatan 1 MB, dan perkembangan awal pipelining.',
    },
  },

  // =========================================================
  // 5 — PERSONAL COMPUTER
  // =========================================================
  {
    id: 'ibm_pc_xt_5150',
    order: 5,
    modelPath: modelUrl('ibm_pc_xt_5150'),
    name: 'IBM PC XT 5150',
    year: '1981',
    generation: 'Generasi IV',
    technology: 'Personal Computer / Intel x86',
    targetHeight: 0.20,
    rotation: [0, 0, 0],
    shortDescription:
      'Komputer personal IBM yang merepresentasikan perkembangan era personal computer.',

    placeholderShape: 'ibm_pc',
    placeholderColor: '#475569',

    educationalInfo: {
      summary:
        'IBM PC XT 5150 digunakan sebagai representasi perkembangan komputer personal pada era mikroprosesor. Objek ini menghubungkan perkembangan mikroprosesor dengan perubahan bentuk dan penggunaan komputer dari sistem berukuran besar menuju komputer personal.',

      details: [
        'Tahun: 1981',
        'Merepresentasikan perkembangan komputer personal',
        'Berkaitan dengan perkembangan platform PC berbasis prosesor Intel',
        'Menunjukkan perubahan penggunaan komputer menuju sistem personal',
        'Perkembangan mikroprosesor menjadi salah satu faktor penting dalam perkembangan komputer personal',
        'Objek ini berada pada konteks Generasi IV dalam timeline AR',
      ],

      topics: ['sejarah', 'generasi_4', 'personal_computer'],

      sourceNote:
        'Konteks Generasi IV dan perkembangan komputer personal berdasarkan materi Modul 1. IBM PC XT 5150 digunakan sebagai konteks historis tambahan pada timeline AR.',
    },
  },

  // =========================================================
  // 6 — APPLE / STUDI KASUS
  // =========================================================
  {
    id: 'macintosh_classic',
    order: 6,
    modelPath: modelUrl('macintosh_classic'),
    name: 'MACINTOSH CLASSIC',
    year: '1990–1991',
    generation: 'Generasi IV',
    technology: 'Personal Computer / Microprocessor',
    targetHeight: 0.20,
    rotation: [0, 0, 0],
    shortDescription:
      'Komputer personal Apple yang merepresentasikan perkembangan platform komputer personal.',

    placeholderShape: 'monitor',
    placeholderColor: '#60a5fa',

    educationalInfo: {
      summary:
        'Macintosh Classic merupakan komputer personal Apple pada era perkembangan komputer generasi keempat. Dalam konteks pembelajaran, objek ini menjadi penghubung menuju pembahasan perkembangan platform Apple dan studi kasus perubahan arsitektur prosesor dari PowerPC menuju Intel.',

      details: [
        'Komputer personal Apple',
        'Tahun pada timeline: 1990–1991',
        'Merepresentasikan perkembangan komputer personal pada Generasi IV',
        'Menjadi bagian dari konteks perkembangan platform komputer Apple',
        'Apple pernah menggunakan arsitektur PowerPC sebelum berpindah ke prosesor Intel',
        'Peralihan tersebut menjadi bagian penting dalam studi kasus Pentium dan PowerPC',
      ],

      topics: [
        'sejarah',
        'generasi_4',
        'personal_computer',
        'pentium_vs_powerpc',
      ],

      sourceNote:
        'Konteks Generasi IV berdasarkan materi Modul 1. Hubungan dengan PowerPC dan Intel digunakan dalam konteks studi kasus Pentium vs PowerPC.',
    },
  },

  // =========================================================
  // 7 — POWERPC / STUDI KASUS
  // =========================================================
  {
    id: 'power_mac_g3',
    order: 7,
    modelPath: modelUrl('power_mac_g3'),
    name: 'POWER MAC G3',
    year: '1997',
    generation: 'Generasi IV',
    technology: 'PowerPC / RISC',
    targetHeight: 0.22,
    rotation: [0, 0, 0],
    shortDescription:
      'Komputer Apple berbasis PowerPC yang menjadi bagian penting studi kasus RISC vs CISC.',

    placeholderShape: 'tower',
    placeholderColor: '#06b6d4',

    educationalInfo: {
      summary:
        'Power Mac G3 digunakan untuk merepresentasikan platform PowerPC dalam studi kasus Modul 1. PowerPC dikembangkan oleh IBM, Apple, dan Motorola dengan pendekatan RISC, sedangkan Pentium Intel menggunakan pendekatan CISC. Perbandingan ini menunjukkan bahwa performa teknis bukan satu-satunya faktor yang menentukan keberhasilan sebuah teknologi di pasar.',

      details: [
        'Tahun pada timeline: 1997',
        'Menggunakan prosesor PowerPC G3',
        'PowerPC dikembangkan oleh IBM, Apple, dan Motorola',
        'PowerPC menggunakan pendekatan RISC',
        'Pentium Intel menggunakan pendekatan CISC',
        'RISC menggunakan instruksi yang lebih sederhana dibanding pendekatan CISC',
        'Materi membandingkan Pentium dan PowerPC dari sisi filosofi arsitektur, bus, dan koherensi cache',
        'PowerPC akhirnya ditinggalkan Apple pada tahun 2006',
        'Pentium terus berkembang dalam ekosistem Intel',
        'Studi kasus menunjukkan bahwa kompatibilitas, ekosistem, dan dukungan industri dapat memengaruhi keberhasilan teknologi di pasar',
      ],

      topics: [
        'sejarah',
        'generasi_4',
        'prosesor',
        'powerpc',
        'pentium',
        'pentium_vs_powerpc',
        'studi_kasus',
      ],

      sourceNote:
        'Berdasarkan materi Modul 1 — Evolusi Pentium vs PowerPC, termasuk perbedaan CISC dan RISC, IBM–Apple–Motorola, kompatibilitas, perkembangan pasar, dan hasil studi kasus.',
    },
  },
];

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

export function getTimelineObjectById(
  id: ObjectInstanceId,
): TimelineObject | undefined {
  return timelineObjects.find((o) => o.id === id);
}

export function getAllTimelineObjects(): TimelineObject[] {
  return [...timelineObjects].sort((a, b) => a.order - b.order);
}