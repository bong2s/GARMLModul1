import type { Processor } from './types';

export const processors: Processor[] = [
  {
    id: 0,
    name: '8086',
    year: '1978',
    description:
      'Mikroprosesor 16-bit pertama dari Intel. Menjadi fondasi arsitektur x86 yang digunakan hingga saat ini.',
  },
  {
    id: 1,
    name: '80286',
    year: '1982',
    description:
      'Mikroprosesor 16-bit dengan kemampuan protected mode. Mendukung memori virtual dan multitasking.',
  },
  {
    id: 2,
    name: '80386',
    year: '1985',
    description:
      'Mikroprosesor 32-bit pertama dari Intel. Mendukung paging dan virtual memory secara penuh.',
  },
  {
    id: 3,
    name: '80486',
    year: '1989',
    description:
      'Mikroprosesor dengan cache L1 terintegrasi dan unit floating-point on-chip. Peningkatan kinerja signifikan.',
  },
  {
    id: 4,
    name: 'Pentium',
    year: '1993',
    description:
      'Mikroprosesor superscalar dengan dua pipeline eksekusi. Menggunakan arsitektur CISC dengan pipelining.',
  },
  {
    id: 5,
    name: 'Pentium Pro / II / III',
    year: '1995–1999',
    description:
      'Arsitektur P6 dengan out-of-order execution dan cache L2 on-package. Peningkatan IPC yang signifikan.',
  },
  {
    id: 6,
    name: 'Pentium 4',
    year: '2000',
    description:
      'Arsitektur NetBurst dengan pipeline sangat dalam. Frekuensi clock tinggi namun IPC relatif rendah.',
  },
];
