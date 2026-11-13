# Adaptasi AR Modul 1 dari Modul 8

Sistem AR Modul 8 dipasang di `src/ar8/` dan menggantikan layar AR lama (`src/three/*`, HUD/panel/permission React lama dihapus).

| File | Asal / perubahan |
|---|---|
| `src/ar8/engine.ts, scene.ts, session.ts, hotspots.ts, renderLesson.ts` | Salinan Modul 8; engine menambah `rotateY` per model |
| `src/ar8/ar8.css` | style.css Modul 8 + kompensasi preflight Tailwind |
| `src/ar8/mount.ts` | main.ts Modul 8 dijadikan `mountAR(root, {onMenu})`, ditambah tombol Menu dan dispose |
| `src/ar8/config.ts` | Komposisi 8 model Modul 1 (2 baris × 4, ukuran dari bbox asli) |
| `src/ar8/registry.ts`, `lessons.ts` | Pemetaan model → topik dan materi Modul 1 |
| `src/components/ar/ARScene.tsx` | Pembungkus React tipis |
| `public/models/<id>/` | Model dipindah dari `src/assets/models` (agar `scene.bin`/`textures` bisa berdampingan) |

Layar Sejarah, Kinerja, Pentium vs PowerPC, dan Tentang tidak diubah (diakses lewat tombol Menu).
Kamera dan WebXR mengikuti Modul 8: WebXR `immersive-ar` jika didukung; selain itu mode cadangan (bukan AR terlacak).
Jalankan: `npm install` → `npm run dev` / `npm run build` (HTTPS atau localhost untuk kamera/WebXR).
