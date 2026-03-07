# TideX

Aktuální a předpovězené přílivy pro jakékoli pobřeží na světě

Živá aplikace: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Přehled

TideX je nyní jedna tide webová aplikace nasazovaná přímo z kořene repozitáře. Pro uživatele GitHubu to znamená jednu kódovou základnu pro desktop, mobilní prohlížeč i instalaci na domovskou obrazovku.

## Hlavní možnosti

- Vyberte libovolný pobřežní bod na mapě nebo skočte přímo na svou aktuální polohu.
- Najděte pojmenované pláže v okolí z dat OpenStreetMap.
- Zobrazte 24hodinovou křivku přílivu s časy přílivu a 15denními referenčními liniemi.
- Porovnávejte výšku přílivu, nárazy větru a směr větru v jednom pohledu.
- Procházejte minulá, současná i budoucí data s harmonickým fallbackem mimo okno přímých dat.
- Používejte stejnou responzivní PWA na desktopu, mobilním webu i domovské obrazovce.

## Bezplatné zdroje dat

- Open-Meteo Marine: řady přílivu / hladiny moře
- Open-Meteo Forecast: rychlost nárazů a směr větru
- Dlaždice OpenStreetMap: základní mapa
- Overpass API: vyhledání blízkých pláží
- Nominatim: reverzní geokódování vybraných bodů

## Přístup k předpovědi

1. Použijte přímou řadu přílivu, pokud je pro zvolený bod a datum dostupná.
1. Denní křivku vyhlaďte monotónní kubickou interpolací.
1. Částečné mezery doplňte harmonickým modelem.
1. Když přímá data chybí, vraťte se k harmonickému modelu přílivu.
1. Časy přílivu zpřesněte detekcí lokálních extrémů a kvadratickou interpolací.

## Instalace jako aplikace

1. Otevřete [https://tide-x.vercel.app](https://tide-x.vercel.app) v Safari, Chromu nebo jiném moderním prohlížeči.
1. Použijte `Přidat na plochu` nebo `Instalovat aplikaci` z nabídky prohlížeče.
1. Spusťte TideX jako běžnou aplikaci při zachování stejného webového nasazení.

## Internacionalizace

- Běhové jazykové balíčky jsou v `locales/` a načítají se z JSON.
- Repozitář obsahuje 42 jazyků včetně RTL podpory pro arabštinu, hebrejštinu a urdštinu.
- Po úpravě jazykových souborů spusťte `node scripts/generate-locales.mjs` pro obnovu `locales/index.json`.

## Struktura projektu

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

## Lokální vývoj

Naservírujte kořen repozitáře libovolným statickým serverem:

```bash
cd TideX
python3 -m http.server 5173
```

Poté otevřete `http://localhost:5173`.

## Nasazení

- Nasazujte kořen repozitáře na Vercel, Netlify, Cloudflare Pages nebo jiný statický hosting.
- Build krok není potřeba.
- Kořenová aplikace už obsahuje PWA manifest, ikony a service worker.

## Upozornění

- TideX je určen pro plánování a přehled o pobřeží, ne pro certifikovanou navigaci.
- Skutečné podmínky se mohou lišit kvůli tlaku, vlnění, říčnímu průtoku, místní batymetrii a počasí.
