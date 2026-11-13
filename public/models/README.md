# Aset model Modul 1

Setiap model berada di folder sendiri dan dimuat dari `/models/<id>/<berkas>` (lihat `src/ar8/registry.ts`).
File `.gltf` merujuk ke `scene.bin` dan folder `textures/` yang HARUS berada di folder yang sama.

Status pada ZIP yang diterima: hanya `vacuum_tube/Vacuum_Tube.glb` yang lengkap (GLB self-contained).
Tujuh model `.gltf` lain belum menyertakan `scene.bin` dan `textures/`. Letakkan keduanya di folder model
masing-masing; tanpa itu aplikasi memakai kotak penanda sementara dan menampilkan peringatan.

| Folder | Berkas gltf | Perlu |
|---|---|---|
| intel_4004 | intel4004.gltf | scene.bin, textures/ |
| semiconductors | semiconductors.gltf | scene.bin |
| floppy_disk | floppy_disk.gltf | scene.bin, textures/ |
| intel_8086 | cpu_intel_8086.gltf | scene.bin, textures/ |
| ibm_pc_xt_5150 | ibm_pc_xt_5150.gltf | scene.bin, textures/ |
| macintosh_classic | macintosh_classic_1991.gltf | scene.bin, textures/ |
| power_mac_g3 | apple_power_mac_g3.gltf | scene.bin, textures/ |
