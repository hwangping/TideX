# TideX

Pasang surut masa nyata dan ramalan untuk mana-mana pesisir di dunia

Aplikasi langsung: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Gambaran keseluruhan

TideX kini ialah satu aplikasi web pasang surut yang diterbitkan terus dari akar repositori. Bagi pengguna GitHub, ini bermaksud satu pangkalan kod untuk desktop, pelayar mudah alih dan pemasangan pada skrin utama.

## Sorotan utama

- Pilih mana-mana titik pesisir pada peta atau terus lompat ke lokasi semasa anda.
- Cari pantai bernama berdekatan menggunakan data OpenStreetMap.
- Lihat lengkung pasang surut 24 jam dengan masa air pasang dan garis rujukan 15 hari.
- Bandingkan ketinggian pasang surut, hembusan angin dan arah angin dalam paparan yang sama.
- Semak tarikh lalu, semasa dan akan datang dengan fallback harmonik di luar tetingkap data langsung.
- Gunakan PWA responsif yang sama pada desktop, web mudah alih dan skrin utama.

## Sumber data percuma

- Open-Meteo Marine: siri pasang surut / paras laut
- Open-Meteo Forecast: kelajuan hembusan dan arah angin
- Jubin OpenStreetMap: peta asas
- Overpass API: carian pantai berdekatan
- Nominatim: geokod songsang untuk titik yang dipilih

## Pendekatan ramalan

1. Gunakan siri pasang surut langsung apabila tersedia untuk titik dan tarikh yang dipilih.
1. Licinkan lengkung harian dengan interpolasi kubik monoton.
1. Isi jurang separa dengan pelengkap harmonik.
1. Berundur kepada model pasang surut harmonik apabila data langsung tiada.
1. Perhalus masa air pasang dengan pengesanan ekstrem setempat dan interpolasi kuadratik.

## Pasang sebagai aplikasi

1. Buka [https://tide-x.vercel.app](https://tide-x.vercel.app) dalam Safari, Chrome atau pelayar moden lain.
1. Gunakan `Tambah ke Skrin Utama` atau `Pasang Aplikasi` daripada menu pelayar.
1. Lancarkan TideX seperti aplikasi biasa sambil mengekalkan deployment web yang sama.

## Pengantarabangsaan

- Pek bahasa runtime berada dalam `locales/` dan dimuatkan daripada JSON.
- Repositori ini menyertakan 42 bahasa termasuk sokongan RTL untuk Arab, Ibrani dan Urdu.
- Selepas mengubah fail bahasa, jalankan `node scripts/generate-locales.mjs` untuk membina semula `locales/index.json`.

## Struktur projek

```text
TideX/
├─ index.html
├─ styles.css
├─ app.js
├─ locales/
├─ icons/
├─ manifest.webmanifest
├─ service-worker.js
├─ offline.html
├─ scripts/
│  ├─ generate-locales.mjs
│  └─ generate-readmes.mjs
├─ README.md
└─ README.<locale>.md
```

## Pembangunan tempatan

Hidangkan akar repositori dengan mana-mana pelayan fail statik:

```bash
cd TideX
python3 -m http.server 5173
```

Kemudian buka `http://localhost:5173`.

## Deployment

- Deploy akar repositori ke Vercel, Netlify, Cloudflare Pages atau mana-mana hos statik.
- Tiada langkah build diperlukan.
- Aplikasi akar sudah termasuk manifest PWA, ikon dan service worker.

## Penafian

- TideX adalah untuk perancangan perjalanan dan kefahaman pesisir, bukan navigasi bertauliah.
- Keadaan sebenar boleh berbeza kerana tekanan, alun, aliran sungai, batimetri setempat dan cuaca.
