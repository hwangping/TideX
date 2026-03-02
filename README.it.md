# TideX

TideX è una web app globale per le maree, progettata in ottica mobile-first. Gli utenti possono usarla direttamente dal browser del telefono (già distribuita su Vercel), selezionare qualsiasi punto costiero sulla mappa e vedere andamento del livello del mare e orari precisi di alta marea.

## Accesso online

- Produzione (Vercel): `https://tide-x.vercel.app`

## Posizionamento del progetto

- Utenti target: surf, pesca costiera, viaggi in spiaggia, attività portuali
- Valore principale: selezione globale dei punti, visualizzazione chiara, UX fluida, nessuna installazione
- Deploy: frontend statico puro, facile da ospitare su Vercel/GitHub Pages/Netlify

## Funzionalità principali

- Selezione globale dei punti costieri su mappa
- Geolocalizzazione automatica dell'utente
- Elenco spiagge vicine da OpenStreetMap
- Curva maree su 24 ore
- Marcatori orari delle alte maree sulla curva
- Selezione data/ora nel passato, presente e futuro
- Fallback a previsione armonica quando manca la serie diretta
- Interfaccia multilingue con 12 lingue

## Esperienza mobile

- Layout responsive per iPhone e Android
- Interazioni touch ottimizzate
- UI moderna e leggibile anche all'aperto
- Frontend leggero e reattivo

## Fonti dati e logica di previsione (tutte gratuite)

- Serie livello mare/marea: Open-Meteo Marine API
- Mappa base: OpenStreetMap
- POI spiagge: OpenStreetMap Overpass API
- Reverse geocoding: Nominatim
- Previsione: fitting armonico su serie storiche quando manca il giorno target

## Algoritmo di Previsione (Sintesi)

TideX usa una strategia a due fasi: dati diretti prima, modello di fallback dopo.

- Serie diretta prioritaria: se esiste una serie oraria per la data selezionata, viene usata direttamente.
- Raffinamento curva: la serie oraria viene densificata con interpolazione cubica monotona.
- Fallback predittivo: se mancano dati diretti, TideX adatta un modello armonico su serie storiche.
- Metodo di fitting: più componenti di marea (base seno/coseno) sono stimate con minimi quadrati.
- Orario di alta marea: gli estremi locali sono rilevati e raffinati con interpolazione quadratica.

## Stack tecnico

- Frontend: HTML + CSS + JavaScript
- Mappa: Leaflet
- Grafici: ECharts
- Gestione tempo: Luxon
- Deploy: Vercel (hosting statico)

## Sviluppo locale

```bash
cd TideX
python3 -m http.server 5173
```

Apri: `http://localhost:5173`

## Raccomandazioni Vercel

- Framework Preset: `Other`
- Build Command: vuoto (sito statico)
- Output Directory: vuoto (root del progetto)
- Abilitare HTTPS per geolocalizzazione più affidabile

## README in altre lingue

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

## Avvertenza

- Questo progetto è solo per pianificazione e consultazione.
- Non usarlo come unica fonte per navigazione o sicurezza.
- Le condizioni reali possono variare per vento, pressione e conformazione costiera.
