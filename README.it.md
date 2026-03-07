# TideX

Maree in tempo reale e previsioni per qualsiasi costa del mondo

App online: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Panoramica

TideX ora è una singola web app delle maree distribuita dalla radice del repository. Per gli utenti GitHub significa una sola base di codice per desktop, browser mobile e installazione sulla schermata iniziale.

## Punti chiave

- Seleziona qualsiasi punto costiero sulla mappa o passa subito alla tua posizione attuale.
- Trova spiagge nominate nelle vicinanze usando i dati OpenStreetMap.
- Visualizza una curva di marea di 24 ore con orari di alta marea e linee di riferimento su 15 giorni.
- Confronta altezza della marea, raffiche e direzione del vento nella stessa vista.
- Esplora date passate, attuali e future con fallback armonico fuori dalla finestra dei dati diretti.
- Usa la stessa PWA responsive su desktop, web mobile e schermata iniziale.

## Fonti dati gratuite

- Open-Meteo Marine: serie di marea / livello del mare
- Open-Meteo Forecast: velocità delle raffiche e direzione del vento
- Tile OpenStreetMap: mappa di base
- Overpass API: ricerca delle spiagge vicine
- Nominatim: reverse geocoding dei punti selezionati

## Approccio di previsione

1. Usa la serie diretta di marea quando è disponibile per il punto e la data scelti.
1. Smussa la curva giornaliera con interpolazione cubica monotona.
1. Colma i vuoti parziali con completamento armonico.
1. Passa a un modello armonico quando i dati diretti non sono disponibili.
1. Affina gli orari di alta marea con rilevamento degli estremi locali e interpolazione quadratica.

## Installa come app

1. Apri [https://tide-x.vercel.app](https://tide-x.vercel.app) in Safari, Chrome o un altro browser moderno.
1. Usa `Aggiungi alla schermata Home` o `Installa app` dal menu del browser.
1. Avvia TideX come una normale app mantenendo lo stesso deployment web.

## Internazionalizzazione

- I pacchetti lingua runtime si trovano in `locales/` e vengono caricati da JSON.
- Il repository include 42 lingue, con supporto RTL per arabo, ebraico e urdu.
- Dopo aver modificato i file di lingua, esegui `node scripts/generate-locales.mjs` per ricreare `locales/index.json`.

## Struttura del progetto

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

## Sviluppo locale

Servi la radice del repository con qualsiasi server statico:

```bash
cd TideX
python3 -m http.server 5173
```

Poi apri `http://localhost:5173`.

## Deploy

- Distribuisci la radice del repository su Vercel, Netlify, Cloudflare Pages o qualsiasi hosting statico.
- Non è richiesto alcun passaggio di build.
- L'app principale include già manifesto PWA, icone e service worker.

## Avvertenza

- TideX è pensato per pianificazione e consapevolezza costiera, non per navigazione certificata.
- Le condizioni reali possono differire per pressione, moto ondoso, flusso fluviale, batimetria locale e meteo.
