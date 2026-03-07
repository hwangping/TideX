# TideX

Realtids- og prognosticerede tidevand for enhver kyst i verden

Live-app: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Oversigt

TideX er nu én samlet tidevands-webapp, som deployes fra repository-roden. For GitHub-brugere betyder det én kodebase til desktop, mobilbrowser og installation på hjemmeskærmen.

## Højdepunkter

- Vælg et vilkårligt kystpunkt på kortet eller hop direkte til din aktuelle placering.
- Find navngivne strande i nærheden med OpenStreetMap-data.
- Se en 24-timers tidevandskurve med højvandetider og 15-dages referencelinjer.
- Sammenlign tidevandshøjde, vindstød og vindretning i samme visning.
- Gennemse tidligere, nuværende og fremtidige datoer med harmonisk fallback uden for direkte datavinduer.
- Brug den samme responsive PWA på desktop, mobilweb og hjemmeskærm.

## Gratis datakilder

- Open-Meteo Marine: tidevands- / havniveauserier
- Open-Meteo Forecast: vindstødshastighed og vindretning
- OpenStreetMap-fliser: baggrundskort
- Overpass API: søgning efter nærliggende strande
- Nominatim: reverse geocoding for valgte punkter

## Prognosemetode

1. Brug direkte tidevandsserier, når de findes for valgt punkt og dato.
1. Udjævn dagskurven med monoton kubisk interpolation.
1. Udfyld delvise huller med harmonisk komplettering.
1. Fald tilbage til en harmonisk tidevandsmodel, når direkte data ikke findes.
1. Finjuster højvandetider med lokal ekstremsøgning og kvadratisk interpolation.

## Installer som app

1. Åbn [https://tide-x.vercel.app](https://tide-x.vercel.app) i Safari, Chrome eller en anden moderne browser.
1. Brug `Føj til hjemmeskærm` eller `Installer app` fra browsermenuen.
1. Start TideX som en normal app med det samme webdeploy i baggrunden.

## Internationalisering

- Runtime-sprogpakker ligger i `locales/` og indlæses fra JSON.
- Repositoryet indeholder 42 sprogpakker, inklusive RTL-understøttelse for arabisk, hebraisk og urdu.
- Kør `node scripts/generate-locales.mjs` efter ændringer i sprogfiler for at genopbygge `locales/index.json`.

## Projektstruktur

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

## Lokal udvikling

Servér repository-roden med en vilkårlig statisk filserver:

```bash
cd TideX
python3 -m http.server 5173
```

Åbn derefter `http://localhost:5173`.

## Deployment

- Deploy repository-roden til Vercel, Netlify, Cloudflare Pages eller en anden statisk host.
- Der kræves ingen build-proces.
- Rodappen indeholder allerede PWA-manifest, ikoner og service worker.

## Ansvarsfraskrivelse

- TideX er til planlægning og kystforståelse, ikke certificeret navigation.
- Faktiske forhold kan afvige på grund af tryk, dønning, flodafstrømning, lokal batymetri og vejr.
