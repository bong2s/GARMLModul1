import type { ComparisonSide, ComparisonPoint } from './types';

export const pentiumSide: ComparisonSide = {
  name: 'PENTIUM',
  company: 'Intel',
  platform: 'PC',
  architecture: 'CISC',
  details: [
    { label: 'Perusahaan', value: 'Intel' },
    { label: 'Platform', value: 'PC' },
    { label: 'Arsitektur', value: 'CISC' },
  ],
};

export const powerpcSide: ComparisonSide = {
  name: 'POWERPC',
  company: 'IBM · Apple · Motorola',
  platform: 'Apple Macintosh',
  architecture: 'RISC',
  details: [
    { label: 'Perusahaan', value: 'IBM · Apple · Motorola' },
    { label: 'Platform', value: 'Apple Macintosh' },
    { label: 'Arsitektur', value: 'RISC' },
  ],
};

export const comparisonPoints: ComparisonPoint[] = [
  {
    label: 'Architecture',
    pentium:
      'Arsitektur x86 berbasis CISC dengan set instruksi yang kompleks dan panjang.',
    powerpc:
      'Arsitektur PowerPC berbasis RISC dengan set instruksi yang sederhana dan seragam.',
  },
  {
    label: 'Instruction Set Philosophy',
    pentium:
      'CISC — instruksi kompleks dapat melakukan banyak operasi dalam satu instruksi, namun decoding lebih rumit.',
    powerpc:
      'RISC — instruksi sederhana dan seragam, memudahkan pipelining dan eksekusi paralel.',
  },
  {
    label: 'Compatibility',
    pentium:
      'Kompatibilitas luas dengan ekosistem PC dan perangkat lunak x86 yang sudah mapan.',
    powerpc:
      'Kompatibilitas terbatas pada ekosistem Apple dan platform yang mendukung PowerPC.',
  },
  {
    label: 'Ecosystem',
    pentium:
      'Ekosistem PC sangat luas — ribuan vendor hardware dan perangkat lunak mendukung platform x86.',
    powerpc:
      'Ekosistem terutama terikat pada Apple Macintosh, dengan dukungan vendor yang lebih terbatas.',
  },
  {
    label: 'Performance Considerations',
    pentium:
      'Kinerja tinggi melalui clock rate yang meningkat dan micro-ops translation. CPI relatif lebih tinggi karena instruksi kompleks.',
    powerpc:
      'Kinerja efisien per clock berkat instruksi sederhana dan pipelining yang efektif. CPI relatif lebih rendah.',
  },
  {
    label: 'Market Outcome',
    pentium:
      'Platform x86 mendominasi pasar PC dan komputasi personal secara global.',
    powerpc:
      'Apple beralih ke Intel x86 pada tahun 2006, mengakhiri penggunaan PowerPC untuk komputasi personal.',
  },
];
