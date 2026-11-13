import type { PerformanceFactor } from './types';

export const performanceFactors: PerformanceFactor[] = [
  {
    id: 'clock-rate',
    title: 'CLOCK RATE',
    description:
      'Frekuensi clock menentukan seberapa cepat instruksi dijalankan per detik. Semakin tinggi clock rate, semakin banyak siklus eksekusi yang tersedia.',
    icon: 'Gauge',
  },
  {
    id: 'instruction-count',
    title: 'INSTRUCTION COUNT',
    description:
      'Jumlah instruksi yang dijalankan untuk sebuah program. Dipengaruhi oleh arsitektur instruction set dan optimasi compiler.',
    icon: 'ListOrdered',
  },
  {
    id: 'cpi',
    title: 'CPI',
    description:
      'Cycles Per Instruction — rata-rata jumlah siklus clock yang dibutuhkan untuk menjalankan satu instruksi. Nilai CPI dipengaruhi oleh kompleksitas instruksi dan arsitektur prosesor.',
    icon: 'Repeat',
  },
  {
    id: 'memory-hierarchy',
    title: 'MEMORY HIERARCHY',
    description:
      'Struktur bertingkat dari register, cache, RAM, dan storage. Akses ke level yang lebih dekat ke prosesor lebih cepat namun kapasitasnya lebih kecil.',
    icon: 'Layers',
  },
  {
    id: 'pipelining-ilp',
    title: 'PIPELINING / ILP',
    description:
      'Pipelining memungkinkan tumpang tindih eksekusi instruksi. Instruction-Level Parallelism (ILP) memanfaatkan ketersediaan instruksi independen untuk dieksekusi secara paralel.',
    icon: 'GitBranch',
  },
  {
    id: 'branch-prediction',
    title: 'BRANCH PREDICTION',
    description:
      'Memprediksi hasil percabangan agar pipeline tetap penuh. Prediksi yang salah menyebabkan pipeline flush dan penurunan kinerja.',
    icon: 'Split',
  },
  {
    id: 'storage',
    title: 'STORAGE',
    description:
      'Kecepatan akses storage memengaruhi waktu muat program dan data. SSD jauh lebih cepat dibanding HDD karena tidak memiliki komponen mekanis.',
    icon: 'HardDrive',
  },
];
