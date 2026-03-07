# TideX

Sanntids- og prognosetidevann for alle kystlinjer i verden

Live-app: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Oversikt

TideX er nå én samlet tidevannsapp som distribueres fra repository-roten. For GitHub-brukere betyr det én kodebase for desktop, mobilnettleser og installasjon på startskjermen.

## Høydepunkter

- Velg et hvilket som helst kystpunkt på kartet eller hopp direkte til din nåværende posisjon.
- Finn navngitte strender i nærheten med OpenStreetMap-data.
- Se en 24-timers tidevannskurve med høyvannstider og 15-dagers referanselinjer.
- Sammenlign tidevannshøyde, vindkast og vindretning i samme visning.
- Bla gjennom tidligere, nåværende og fremtidige datoer med harmonisk fallback utenfor direkte datavinduer.
- Bruk samme responsive PWA på desktop, mobilweb og startskjerm.

## Gratis datakilder

- Open-Meteo Marine: tidevanns- / havnivåserier
- Open-Meteo Forecast: vindkasthastighet og vindretning
- OpenStreetMap-fliser: basiskart
- Overpass API: søk etter nærliggende strender
- Nominatim: omvendt geokoding for valgte punkter

## Prognosemetode

1. Bruk direkte tidevannsserier når de finnes for valgt punkt og dato.
1. Jevn ut dagskurven med monoton kubisk interpolasjon.
1. Fyll delvise hull med harmonisk komplettering.
1. Fall tilbake til en harmonisk tidevannsmodell når direkte data mangler.
1. Finjuster høyvannstidene med lokal ekstremdeteksjon og kvadratisk interpolasjon.

## Installer som app

1. Åpne [https://tide-x.vercel.app](https://tide-x.vercel.app) i Safari, Chrome eller en annen moderne nettleser.
1. Bruk `Legg til på startskjerm` eller `Installer app` fra nettlesermenyen.
1. Start TideX som en vanlig app med samme webdeploy i bakgrunnen.

## Internasjonalisering

- Runtime-språkpakker ligger i `locales/` og lastes fra JSON.
- Repositoryet inneholder 42 språkpakker, inkludert RTL-støtte for arabisk, hebraisk og urdu.
- Kjør `node scripts/generate-locales.mjs` etter endringer i språkfilene for å bygge `locales/index.json` på nytt.

## Prosjektstruktur

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

## Lokal utvikling

Server repository-roten med hvilken som helst statisk filserver:

```bash
cd TideX
python3 -m http.server 5173
```

Åpne deretter `http://localhost:5173`.

## Distribusjon

- Distribuer repository-roten til Vercel, Netlify, Cloudflare Pages eller en annen statisk host.
- Ingen build-prosess er nødvendig.
- Rotappen inneholder allerede PWA-manifest, ikoner og service worker.

## Ansvarsfraskrivelse

- TideX er for planlegging og kystforståelse, ikke sertifisert navigasjon.
- Faktiske forhold kan avvike på grunn av trykk, dønning, elvetilførsel, lokal batymetri og vær.
