# TideX

Pasang surut waktu nyata dan prediksi untuk garis pantai mana pun di dunia

Aplikasi langsung: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Ringkasan

TideX sekarang menjadi satu aplikasi web pasang surut yang diterbitkan dari akar repositori. Untuk pengguna GitHub, ini berarti satu basis kode untuk desktop, browser seluler, dan pemasangan ke layar utama.

## Sorotan

- Pilih titik pesisir mana pun di peta atau langsung lompat ke lokasi Anda saat ini.
- Temukan pantai bernama terdekat dari data OpenStreetMap.
- Lihat kurva pasang surut 24 jam dengan penanda waktu pasang dan garis referensi 15 hari.
- Bandingkan tinggi pasang, hembusan angin, dan arah angin dalam tampilan yang sama.
- Telusuri tanggal lampau, sekarang, dan masa depan dengan fallback harmonik di luar jendela data langsung.
- Gunakan PWA responsif yang sama di desktop, web seluler, dan layar utama.

## Sumber data gratis

- Open-Meteo Marine: seri pasang surut / permukaan laut
- Open-Meteo Forecast: kecepatan hembusan dan arah angin
- Tile OpenStreetMap: peta dasar
- Overpass API: pencarian pantai terdekat
- Nominatim: geocoding balik untuk titik terpilih

## Pendekatan prediksi

1. Gunakan seri pasang langsung jika tersedia untuk titik dan tanggal yang dipilih.
1. Haluskan kurva harian dengan interpolasi kubik monoton.
1. Isi celah sebagian dengan pelengkap harmonik.
1. Gunakan model pasang harmonik saat data langsung tidak tersedia.
1. Perhalus waktu pasang tinggi dengan deteksi ekstrem lokal dan interpolasi kuadratik.

## Pasang sebagai aplikasi

1. Buka [https://tide-x.vercel.app](https://tide-x.vercel.app) di Safari, Chrome, atau browser modern lain.
1. Gunakan `Tambahkan ke layar utama` atau `Pasang aplikasi` dari menu browser.
1. Jalankan TideX seperti aplikasi biasa sambil tetap memakai deployment web yang sama.

## Internasionalisasi

- Paket bahasa runtime berada di `locales/` dan dimuat dari JSON.
- Repositori ini menyediakan 42 paket bahasa, termasuk dukungan RTL untuk Arab, Ibrani, dan Urdu.
- Setelah mengubah file bahasa, jalankan `node scripts/generate-locales.mjs` untuk membangun ulang `locales/index.json`.

## Struktur proyek

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

## Pengembangan lokal

Sajikan akar repositori dengan server file statis apa pun:

```bash
cd TideX
python3 -m http.server 5173
```

Lalu buka `http://localhost:5173`.

## Deployment

- Deploy akar repositori ke Vercel, Netlify, Cloudflare Pages, atau hosting statis apa pun.
- Tidak diperlukan langkah build.
- Aplikasi root sudah mencakup manifest PWA, ikon, dan service worker.

## Penafian

- TideX dibuat untuk perencanaan perjalanan dan konteks pantai, bukan navigasi bersertifikat.
- Kondisi nyata dapat berbeda karena tekanan, swell, aliran sungai, batimetri lokal, dan cuaca.
