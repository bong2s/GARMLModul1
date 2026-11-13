import type { Generation } from './types';

export const generations: Generation[] = [
  {
    id: 1,
    name: 'GENERASI I',
    period: '1940–1959',
    technology: 'Vacuum Tube / Tabung Hampa Udara',
    description:
      'Komputer generasi pertama menggunakan tabung hampa udara sebagai komponen elektronik utama.',
    fullDescription:
      'Komputer generasi pertama menggunakan tabung hampa udara dan magnetic drum untuk memori. Perkembangannya berkaitan dengan kebutuhan akademik dan militer, termasuk konteks Perang Dunia II. Komputer pada periode ini berukuran sangat besar, mengonsumsi banyak energi, dan menghasilkan panas yang tinggi.',
    keyPoints: [
      'Komponen utama: tabung hampa udara',
      'Memori: magnetic drum',
      'Ukuran fisik sangat besar',
      'Konteks: kebutuhan akademik dan militer',
    ],
  },
  {
    id: 2,
    name: 'GENERASI II',
    period: '1950s–1960s',
    technology: 'Transistor',
    description:
      'Transistor menggantikan tabung hampa udara sehingga komputer menjadi lebih kecil dan efisien.',
    fullDescription:
      'Transistor menggantikan tabung hampa udara sehingga komputer menjadi lebih kecil, lebih cepat, dan lebih hemat energi. Pada periode ini berkembang bahasa pemrograman tinggi, memori berbasis magnetik, dan sistem operasi yang memungkinkan eksekusi program secara batch.',
    keyPoints: [
      'Transistor menggantikan tabung hampa udara',
      'Lebih kecil, lebih cepat, lebih hemat energi',
      'Perkembangan bahasa pemrograman',
      'Muncul sistem operasi dan memori magnetik',
    ],
  },
  {
    id: 3,
    name: 'GENERASI III',
    period: '1960s–1970s',
    technology: 'Integrated Circuit / IC',
    description:
      'Integrated Circuit menjadi teknologi penting dalam perkembangan komputer generasi ketiga.',
    fullDescription:
      'Integrated Circuit (IC) menjadi teknologi penting dalam perkembangan komputer generasi ketiga. IC memungkinkan ratusan transistor terintegrasi dalam satu chip, sehingga ukuran komputer semakin berkurang dan kecepatan meningkat. Pada periode ini juga berkembang sistem operasi multiprogramming.',
    keyPoints: [
      'Integrated Circuit sebagai teknologi utama',
      'Ratusan transistor dalam satu chip',
      'Ukuran komputer semakin berkurang',
      'Perkembangan multiprogramming',
    ],
  },
  {
    id: 4,
    name: 'GENERASI IV',
    period: '1970s–sekarang',
    technology: 'MOSFET / LSI / Microprocessor',
    description:
      'Perkembangan MOSFET, LSI, dan mikroprosesor menjadi bagian penting generasi keempat.',
    fullDescription:
      'Perkembangan MOSFET dan LSI (Large Scale Integration) menjadi bagian penting generasi keempat. Mikroprosesor berkembang pada awal 1970-an, membawa seluruh unit pemrosesan ke dalam satu chip. Era ini menandai lahirnya personal computer dan revolusi komputasi skala kecil.',
    keyPoints: [
      'MOSFET dan LSI sebagai teknologi utama',
      'Mikroprosesor lahir pada awal 1970-an',
      'Seluruh CPU dalam satu chip',
      'Lahirnya personal computer',
    ],
  },
  {
    id: 5,
    name: 'GENERASI V',
    period: '1980s–sekarang',
    technology: 'Quantum Computing / Nanotechnology',
    description:
      'Materi pembelajaran mengaitkan generasi kelima dengan quantum computing dan nanotechnology.',
    fullDescription:
      'Materi pembelajaran mengaitkan generasi kelima dengan perkembangan quantum computing dan nanotechnology. Komputasi kuantum memanfaatkan prinsip superposisi dan entanglement untuk memecahkan masalah yang sulit bagi komputer klasik. Nanotechnology membuka kemungkinan miniaturisasi komponen hingga skala molekuler.',
    keyPoints: [
      'Quantum computing dan nanotechnology',
      'Prinsip superposisi dan entanglement',
      'Miniaturisasi hingga skala molekuler',
      'Paradigma komputasi baru',
    ],
  },
];
