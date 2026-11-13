// Materi Info Message Modul 1 — Sejarah/Evolusi Komputer, Perancangan Kinerja, dan studi kasus
// Pentium vs PowerPC. Delapan topik bernomor (satu per model, urutan timeline) dan tiga panel
// pendukung yang tampil sebagai tab.

export type LessonBlock =
  | { kind: "heading"; text: string }
  | { kind: "text"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] }
  | { kind: "formula"; text: string }
  | { kind: "example"; lines: string[] }
  | { kind: "note"; text: string }
  | { kind: "figure"; svg: string; caption: string };

export interface LessonTopic {
  id: string;
  title: string;
  short: string;
  /** Panel pendukung (bukan salah satu dari delapan topik bernomor). */
  context?: boolean;
  blocks: LessonBlock[];
}

const h = (text: string): LessonBlock => ({ kind: "heading", text });
const p = (text: string): LessonBlock => ({ kind: "text", text });
const ul = (...items: string[]): LessonBlock => ({ kind: "list", ordered: false, items });
const ol = (...items: string[]): LessonBlock => ({ kind: "list", ordered: true, items });
const note = (text: string): LessonBlock => ({ kind: "note", text });

export const MODULE_TOPICS: LessonTopic[] = [
  {
    id: "vacuum-tube",
    title: "Tabung Hampa Udara",
    short: "Generasi I · 1940–1959",
    blocks: [
      h("Generasi I (1940–1959)"),
      p("Komputer generasi pertama memakai tabung hampa udara (vacuum tube) sebagai komponen elektronik utama, dan drum magnetik sebagai memori."),
      h("Ciri utama"),
      ul(
        "Ukuran sangat besar, dapat memenuhi satu ruangan.",
        "Boros daya dan menghasilkan panas tinggi.",
        "Dikembangkan untuk kebutuhan akademik dan militer, terutama pada masa Perang Dunia II."
      ),
      h("Mengapa digantikan"),
      p("Tabung berukuran besar, panas, dan boros energi. Transistor pada Generasi II lebih kecil, lebih cepat, dan lebih hemat energi."),
      note("Pada model 3D: tabung hampa udara mewakili teknologi inti Generasi I, bukan sebuah komputer utuh."),
    ],
  },
  {
    id: "intel-4004",
    title: "Intel 4004",
    short: "Generasi IV · 1971 · mikroprosesor awal",
    blocks: [
      h("Awal era mikroprosesor"),
      p("Intel 4004 (1971) adalah mikroprosesor komersial pertama: seluruh unit pemrosesan dimuat dalam satu chip."),
      h("Posisi pada Generasi IV"),
      ul(
        "Generasi IV berkembang sejak 1970-an dengan teknologi MOSFET dan LSI (Large Scale Integration).",
        "Mikroprosesor membawa seluruh CPU ke dalam satu chip.",
        "Hal ini membuka jalan bagi komputer personal."
      ),
      h("Data teknis (konteks tambahan)"),
      ul("Lebar data 4-bit.", "Sekitar 2.300 transistor.", "Clock hingga 740 kHz."),
      note("Tabel evolusi prosesor Intel pada Modul 1 dimulai dari 8086. Data teknis 4004 hanya pelengkap konteks timeline."),
    ],
  },
  {
    id: "semiconductors",
    title: "Semikonduktor",
    short: "Transistor, IC, MOSFET, dan LSI",
    blocks: [
      h("Bahan dasar komputer modern"),
      p("Semikonduktor (misalnya silikon) adalah bahan dasar transistor dan chip. Kemajuannya menentukan ukuran, kecepatan, dan efisiensi komputer."),
      h("Jalur perkembangan"),
      ol(
        "Generasi II: transistor menggantikan tabung hampa udara.",
        "Generasi III: Integrated Circuit (IC) memuat ratusan transistor dalam satu chip.",
        "Generasi IV: MOSFET dan LSI memungkinkan integrasi jauh lebih besar, sehingga mikroprosesor lahir."
      ),
      h("Dampak"),
      ul(
        "Ukuran komputer semakin kecil.",
        "Kecepatan naik dan konsumsi energi turun.",
        "Komputer menjadi terjangkau untuk perorangan."
      ),
    ],
  },
  {
    id: "floppy-disk",
    title: "Floppy Disk",
    short: "Penyimpanan magnetik",
    blocks: [
      h("Penyimpanan pada era komputer personal"),
      p("Floppy disk menyimpan data pada lapisan magnetik. Media ini dipakai luas untuk menyimpan dan memindahkan program serta data pada komputer personal."),
      h("Kaitan dengan kinerja"),
      ul(
        "Penyimpanan adalah bagian dari sistem memori komputer.",
        "Akses penyimpanan jauh lebih lambat daripada register, cache, atau RAM.",
        "Jika CPU harus menunggu data dari penyimpanan, kinerja sistem turun."
      ),
      note("Lihat tab Hierarki Memori untuk urutan tingkat memori."),
    ],
  },
  {
    id: "intel-8086",
    title: "Intel 8086",
    short: "Awal arsitektur x86 · 1978",
    blocks: [
      h("Mikroprosesor 16-bit"),
      ul(
        "Tahun: 1978.",
        "Arsitektur 16-bit dengan bus alamat 20-bit.",
        "Dapat mengalamati hingga 1 MB memori.",
        "Materi mencatat awal penerapan pipelining pada 8086."
      ),
      { kind: "formula", text: "Ruang alamat = 2²⁰ byte = 1 MB" },
      h("Evolusi prosesor Intel"),
      ul(
        "8086 (1978): 16-bit, dasar keluarga x86.",
        "80286 (1982): protected mode, mendukung memori virtual.",
        "80386 (1985): prosesor 32-bit pertama Intel.",
        "80486 (1989): cache L1 dan unit floating-point di dalam chip.",
        "Pentium (1993): superscalar dengan dua pipeline.",
        "Pentium Pro/II/III (1995–1999): arsitektur P6, eksekusi out-of-order.",
        "Pentium 4 (2000): NetBurst, pipeline sangat dalam dan clock tinggi."
      ),
      note("Lihat tab Rumus Kinerja untuk cara mengukur kinerja prosesor."),
    ],
  },
  {
    id: "ibm-pc",
    title: "IBM PC XT 5150",
    short: "Komputer personal x86 · 1981",
    blocks: [
      h("Dari mesin besar ke komputer personal"),
      p("IBM PC mewakili perubahan komputer dari sistem besar menjadi perangkat personal yang dibangun di sekitar prosesor Intel keluarga x86."),
      ul(
        "Tahun pada timeline: 1981.",
        "Mikroprosesor membuat komputer cukup kecil dan murah untuk perorangan.",
        "Platform PC berkembang menjadi ekosistem luas dengan banyak vendor perangkat keras dan lunak.",
        "Kompatibilitas x86 menjadi kekuatan utama Intel pada studi kasus Pentium vs PowerPC."
      ),
      note("Kode 5150 merujuk pada IBM PC asli (1981); varian XT muncul pada 1983. Model ini dipakai sebagai representasi PC era tersebut."),
    ],
  },
  {
    id: "mac-classic",
    title: "Macintosh Classic",
    short: "Platform Apple awal · 1990–1991",
    blocks: [
      h("Komputer personal Apple"),
      p("Macintosh Classic adalah komputer personal all-in-one dari Apple yang mewakili platform Apple pada awal 1990-an."),
      ul(
        "Tahun pada timeline: 1990–1991.",
        "Memakai prosesor Motorola 68000, belum PowerPC.",
        "Apple, IBM, dan Motorola membentuk aliansi PowerPC pada 1991; Mac berbasis PowerPC baru hadir pada 1994.",
        "Karena itu model ini menjadi titik awal untuk memahami platform Apple dalam studi kasus."
      ),
      note("Lanjutkan ke Power Mac G3 untuk perbandingan PowerPC dan Pentium."),
    ],
  },
  {
    id: "power-mac-g3",
    title: "Power Mac G3",
    short: "PowerPC · RISC · 1997",
    blocks: [
      h("Platform PowerPC"),
      p("Power Mac G3 (1997) memakai prosesor PowerPC G3. PowerPC dikembangkan oleh IBM, Apple, dan Motorola dengan pendekatan RISC."),
      h("RISC vs CISC"),
      ul(
        "RISC (PowerPC): instruksi sederhana dan seragam, mudah di-pipeline.",
        "CISC (Pentium): instruksi kompleks, satu instruksi dapat melakukan banyak operasi.",
        "Apple meninggalkan PowerPC dan beralih ke Intel pada 2006."
      ),
      h("Pelajaran studi kasus"),
      p("Kinerja teknis bukan satu-satunya penentu keberhasilan. Kompatibilitas, ekosistem, dan dukungan industri sangat memengaruhi hasil di pasar."),
      note("Lihat tab Pentium vs PowerPC untuk perbandingan lengkap."),
    ],
  },
];

export const CONTEXT_PANELS: LessonTopic[] = [
  {
    id: "memory-hierarchy",
    title: "Hierarki Memori",
    short: "Kecepatan vs kapasitas",
    context: true,
    blocks: [
      h("Memori bertingkat"),
      p("Makin dekat ke prosesor, memori makin cepat tetapi makin mahal dan kecil kapasitasnya."),
      { kind: "example", lines: ["Register  → tercepat, kapasitas terkecil", "Cache", "RAM", "Storage   → terlambat, kapasitas terbesar"] },
      p("Data yang sering dipakai disimpan di tingkat atas agar CPU jarang menunggu."),
      note("Storage tanpa komponen mekanis (SSD) jauh lebih cepat daripada yang bermekanik (HDD, floppy)."),
    ],
  },
  {
    id: "performance-formulas",
    title: "Rumus Kinerja",
    short: "Clock, CPI, dan hukum Amdahl",
    context: true,
    blocks: [
      h("Faktor kinerja"),
      ul(
        "Clock rate: jumlah siklus per detik.",
        "Instruction count (IC): jumlah instruksi program.",
        "CPI: rata-rata siklus per instruksi.",
        "Hierarki memori, pipelining/ILP, branch prediction, dan storage."
      ),
      h("Waktu eksekusi"),
      { kind: "formula", text: "T = (IC × CPI) / f" },
      p("f adalah clock rate. Waktu turun jika IC kecil, CPI rendah, atau clock tinggi."),
      h("Hukum Amdahl"),
      { kind: "formula", text: "Speedup = 1 / ((1 − p) + p / s)" },
      p("p adalah bagian program yang dipercepat, s adalah percepatan bagian itu. Bagian yang tidak dipercepat membatasi hasil total."),
      { kind: "example", lines: ["p = 0,8 ; s = 4", "Speedup = 1 / (0,2 + 0,2) = 2,5×"] },
    ],
  },
  {
    id: "pentium-vs-powerpc",
    title: "Pentium vs PowerPC",
    short: "Studi kasus CISC vs RISC",
    context: true,
    blocks: [
      h("Arsitektur"),
      ul("Pentium (Intel, PC): x86 berbasis CISC.", "PowerPC (IBM, Apple, Motorola): RISC, platform Macintosh."),
      h("Filosofi set instruksi"),
      ul("CISC: instruksi kompleks, decoding lebih rumit.", "RISC: instruksi sederhana dan seragam, mudah di-pipeline."),
      h("Kinerja"),
      ul(
        "Pentium: clock rate naik dan terjemahan ke micro-ops; CPI relatif lebih tinggi.",
        "PowerPC: efisien per clock; CPI relatif lebih rendah."
      ),
      h("Kompatibilitas dan ekosistem"),
      ul(
        "Pentium: ekosistem PC dan perangkat lunak x86 sangat luas.",
        "PowerPC: terutama terikat pada Apple Macintosh."
      ),
      h("Hasil pasar"),
      p("x86 mendominasi pasar PC. Apple beralih ke Intel pada 2006 dan mengakhiri PowerPC untuk komputasi personal."),
    ],
  },
];
