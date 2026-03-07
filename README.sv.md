# TideX

Tidsaktuella och prognostiserade tidvatten för alla kuster i världen

Liveapp: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Översikt

TideX är nu en enda tidvattenapp som distribueras från repositoryts rot. För GitHub-användare betyder det en kodbas för desktop, mobil webbläsare och installation på hemskärmen.

## Höjdpunkter

- Välj vilken kustpunkt som helst på kartan eller hoppa direkt till din aktuella plats.
- Hitta namngivna stränder i närheten med OpenStreetMap-data.
- Visa en 24-timmars tidvattenkurva med högvattentider och 15-dagars referenslinjer.
- Jämför tidvattennivå, vindbyar och vindriktning i samma vy.
- Bläddra mellan tidigare, nuvarande och framtida datum med harmonisk fallback utanför direkta datafönster.
- Använd samma responsiva PWA på desktop, mobilwebb och hemskärm.

## Gratis datakällor

- Open-Meteo Marine: tidvatten- / havsnivåserier
- Open-Meteo Forecast: vindbyshastighet och vindriktning
- OpenStreetMap-plattor: baskarta
- Overpass API: sökning efter närliggande stränder
- Nominatim: omvänd geokodning för valda punkter

## Prognosmetod

1. Använd direkt tidvattenserie när den finns för vald punkt och datum.
1. Jämna ut dagskurvan med monoton kubisk interpolation.
1. Fyll partiella luckor med harmonisk komplettering.
1. Falla tillbaka till en harmonisk tidvattenmodell när direkta data saknas.
1. Förfina högvattentider med lokal extremdetektion och kvadratisk interpolation.

## Installera som app

1. Öppna [https://tide-x.vercel.app](https://tide-x.vercel.app) i Safari, Chrome eller en annan modern webbläsare.
1. Använd `Lägg till på hemskärmen` eller `Installera app` från webbläsarmenyn.
1. Starta TideX som en vanlig app med samma webbdistribution.

## Internationalisering

- Runtime-språkpaket ligger i `locales/` och laddas från JSON.
- Repositoryt innehåller 42 språk, inklusive RTL-stöd för arabiska, hebreiska och urdu.
- Kör `node scripts/generate-locales.mjs` efter att språkfiler ändrats för att bygga om `locales/index.json`.

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

## Lokal utveckling

Servera repositoryts rot med valfri statisk filserver:

```bash
cd TideX
python3 -m http.server 5173
```

Öppna sedan `http://localhost:5173`.

## Distribution

- Distribuera repositoryts rot till Vercel, Netlify, Cloudflare Pages eller annan statisk host.
- Inget byggsteg behövs.
- Root-appen innehåller redan PWA-manifest, ikoner och service worker.

## Ansvarsfriskrivning

- TideX är för planering och kustöversikt, inte certifierad navigation.
- Verkliga förhållanden kan skilja sig på grund av tryck, dyning, flodflöde, lokal batymetri och väder.
