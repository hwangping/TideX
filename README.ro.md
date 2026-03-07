# TideX

Maree în timp real și prognozate pentru orice coastă din lume

Aplicație online: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Prezentare generală

TideX este acum o singură aplicație web de maree, publicată direct din rădăcina repository-ului. Pentru utilizatorii GitHub, asta înseamnă o singură bază de cod pentru desktop, browser mobil și instalare pe ecranul principal.

## Puncte cheie

- Alege orice punct de coastă de pe hartă sau mergi direct la locația curentă.
- Găsește plaje denumite din apropiere folosind date OpenStreetMap.
- Vezi o curbă de maree pe 24 de ore cu momentele fluxului și linii de referință pe 15 zile.
- Compară în aceeași vedere nivelul mareei, rafalele și direcția vântului.
- Parcurge date trecute, prezente și viitoare cu fallback armonic în afara ferestrei de date directe.
- Folosește aceeași PWA responsive pe desktop, web mobil și ecranul principal.

## Surse gratuite de date

- Open-Meteo Marine: serii de maree / nivel al mării
- Open-Meteo Forecast: viteză a rafalelor și direcția vântului
- Tile-uri OpenStreetMap: hartă de bază
- Overpass API: căutare de plaje apropiate
- Nominatim: geocodare inversă pentru punctele selectate

## Abordarea de predicție

1. Folosește seria directă de maree când este disponibilă pentru punctul și data selectate.
1. Netezește curba zilnică prin interpolare cubică monotonă.
1. Completează golurile parțiale cu o completare armonică.
1. Când lipsesc datele directe, revine la un model armonic al mareelor.
1. Rafinează orele de flux prin detectarea extremelor locale și interpolare pătratică.

## Instalare ca aplicație

1. Deschide [https://tide-x.vercel.app](https://tide-x.vercel.app) în Safari, Chrome sau alt browser modern.
1. Folosește `Adaugă pe ecranul principal` sau `Instalează aplicația` din meniul browserului.
1. Rulează TideX ca pe o aplicație normală păstrând același deployment web.

## Internaționalizare

- Pachetele de limbă la runtime sunt în `locales/` și se încarcă din JSON.
- Repository-ul include 42 de limbi, inclusiv suport RTL pentru arabă, ebraică și urdu.
- După editarea fișierelor de limbă, rulează `node scripts/generate-locales.mjs` pentru a reconstrui `locales/index.json`.

## Structura proiectului

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

## Dezvoltare locală

Servește rădăcina repository-ului cu orice server de fișiere statice:

```bash
cd TideX
python3 -m http.server 5173
```

Apoi deschide `http://localhost:5173`.

## Deploy

- Publică rădăcina repository-ului pe Vercel, Netlify, Cloudflare Pages sau orice host static.
- Nu este necesar un pas de build.
- Aplicația din rădăcină include deja manifestul PWA, iconițele și service worker-ul.

## Declinare

- TideX este pentru planificare și înțelegerea contextului de coastă, nu pentru navigație certificată.
- Condițiile reale pot diferi din cauza presiunii, valurilor, debitului râurilor, batimetriei locale și vremii.
