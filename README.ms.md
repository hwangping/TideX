# TideX

TideX ialah aplikasi web pasang surut global yang direka secara mobile-first. Pengguna boleh terus akses melalui pelayar telefon (sudah dideploy di Vercel), pilih mana-mana titik pantai pada peta, dan lihat trend paras laut serta waktu pasang tinggi yang tepat untuk hari tersebut.

## Akses Dalam Talian

- Production (Vercel): `https://tide-x.vercel.app`

## Kedudukan Projek

- Pengguna sasaran: meluncur, memancing pesisir, aktiviti pelabuhan, lawatan pantai
- Nilai utama: pemilihan lokasi global, visual jelas, UX lancar, tanpa pemasangan aplikasi
- Model deployment: frontend statik sepenuhnya, mudah dihoskan di Vercel/GitHub Pages/Netlify

## Ciri Utama

- Pilih lokasi pantai global pada peta
- Pengesanan lokasi pengguna secara automatik
- Senarai pantai berdekatan daripada OpenStreetMap
- Graf pasang surut 24 jam
- Penanda masa pasang tinggi pada graf
- Pilihan tarikh/jam untuk masa lalu, semasa dan masa hadapan
- Ramalan harmonik automatik apabila data terus tiada
- UI berbilang bahasa (12 bahasa)

## Pengalaman Mudah Alih

- Susun atur responsif untuk iPhone dan Android
- Interaksi sentuhan dioptimumkan untuk peta, peluncur dan butang
- Reka bentuk moden, mudah dibaca di luar
- Frontend ringan dan responsif

## Sumber Data dan Logik Ramalan (Semua Percuma)

- Siri paras laut/pasang surut: Open-Meteo Marine API
- Peta asas: OpenStreetMap
- POI pantai: OpenStreetMap Overpass API
- Geokod songsang: Nominatim
- Ramalan: harmonic fitting berdasarkan siri sejarah apabila data hari sasaran tiada

## Algoritma Ramalan (Ringkas)

TideX menggunakan strategi dua peringkat: data langsung dahulu, model sandaran jika data tiada.

- Siri langsung diutamakan: jika data paras laut setiap jam wujud untuk tarikh dipilih, data itu digunakan terus.
- Pelicinan lengkung: siri setiap jam dipadatkan dengan interpolasi kubik monotone.
- Ramalan sandaran: jika siri langsung tiada, TideX memadankan model harmonik daripada data sejarah.
- Kaedah padanan: beberapa konstituen pasang surut (asas sinus/kosinus) dianggar dengan least squares.
- Masa pasang tinggi: titik ekstrem tempatan dikesan dan diperhalusi dengan interpolasi kuadratik.

## Teknologi Digunakan

- Frontend: HTML + CSS + JavaScript
- Peta: Leaflet
- Carta: ECharts
- Pengurusan masa: Luxon
- Deployment: Vercel (hosting statik)

## Pembangunan Lokal

```bash
cd TideX
python3 -m http.server 5173
```

Buka: `http://localhost:5173`

## Cadangan Tetapan Vercel

- Framework Preset: `Other`
- Build Command: kosong (laman statik)
- Output Directory: kosong (deploy terus dari root)
- Gunakan HTTPS untuk kestabilan geolokasi pada mudah alih

## README Pelbagai Bahasa

- English: [`README.en.md`](./README.en.md)
- 简体中文: [`README.zh-CN.md`](./README.zh-CN.md)
- 繁體中文: [`README.zh-TW.md`](./README.zh-TW.md)
- 日本語: [`README.ja.md`](./README.ja.md)
- 한국어: [`README.ko.md`](./README.ko.md)
- Français: [`README.fr.md`](./README.fr.md)
- Español: [`README.es.md`](./README.es.md)
- Deutsch: [`README.de.md`](./README.de.md)
- Italiano: [`README.it.md`](./README.it.md)
- Tiếng Việt: [`README.vi.md`](./README.vi.md)
- ไทย: [`README.th.md`](./README.th.md)
- Bahasa Melayu: [`README.ms.md`](./README.ms.md)

## Penafian

- Projek ini untuk rujukan dan perancangan sahaja.
- Jangan gunakan sebagai satu-satunya sumber untuk navigasi atau keselamatan.
- Keadaan sebenar boleh berbeza akibat angin, tekanan udara dan bentuk muka pantai.
