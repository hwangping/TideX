# TideX

Aktuálne a predpovedané prílivy pre akékoľvek pobrežie na svete

Živá aplikácia: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Prehľad

TideX je teraz jedna jednotná webová aplikácia prílivu nasadzovaná z koreňa repozitára. Pre používateľov GitHubu to znamená jednu kódovú základňu pre desktop, mobilný prehliadač aj inštaláciu na domovskú obrazovku.

## Hlavné vlastnosti

- Vyberte ľubovoľný pobrežný bod na mape alebo skočte priamo na svoju aktuálnu polohu.
- Nájdite blízke pomenované pláže pomocou údajov OpenStreetMap.
- Pozrite si 24-hodinovú krivku prílivu s časmi prílivu a 15-dňovými referenčnými čiarami.
- Porovnávajte výšku prílivu, nárazy vetra a smer vetra v jednom zobrazení.
- Prechádzajte minulé, súčasné aj budúce dátumy s harmonickým fallbackom mimo okna priamych dát.
- Používajte tú istú responzívnu PWA na desktopoch, mobilnom webe aj domovskej obrazovke.

## Bezplatné zdroje dát

- Open-Meteo Marine: série prílivu / hladiny mora
- Open-Meteo Forecast: rýchlosť nárazov a smer vetra
- OpenStreetMap dlaždice: základná mapa
- Overpass API: hľadanie blízkych pláží
- Nominatim: reverzné geokódovanie vybraných bodov

## Prístup k predpovedi

1. Použite priamu sériu prílivu, keď je dostupná pre vybraný bod a dátum.
1. Vyhlaďte dennú krivku monotónnou kubickou interpoláciou.
1. Čiastočné medzery doplňte harmonickým doplnením.
1. Keď chýbajú priame dáta, prepnite sa na harmonický model prílivu.
1. Spresnite časy prílivu detekciou lokálnych extrémov a kvadratickou interpoláciou.

## Inštalácia ako aplikácia

1. Otvorte [https://tide-x.vercel.app](https://tide-x.vercel.app) v Safari, Chrome alebo inom modernom prehliadači.
1. Použite `Pridať na domovskú obrazovku` alebo `Inštalovať aplikáciu` z menu prehliadača.
1. Spustite TideX ako bežnú aplikáciu pri zachovaní rovnakého webového deploymentu.

## Internacionalizácia

- Jazykové balíčky runtime sú v `locales/` a načítavajú sa z JSON-u.
- Repozitár obsahuje 42 jazykov vrátane RTL podpory pre arabčinu, hebrejčinu a urdčinu.
- Po úprave jazykových súborov spustite `node scripts/generate-locales.mjs`, aby sa znovu vytvoril `locales/index.json`.

## Štruktúra projektu

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

## Lokálny vývoj

Naservírujte koreň repozitára ľubovoľným statickým serverom:

```bash
cd TideX
python3 -m http.server 5173
```

Potom otvorte `http://localhost:5173`.

## Nasadenie

- Nasadzujte koreň repozitára na Vercel, Netlify, Cloudflare Pages alebo iný statický hosting.
- Build krok nie je potrebný.
- Root aplikácia už obsahuje PWA manifest, ikony a service worker.

## Upozornenie

- TideX je určený na plánovanie a porozumenie pobrežným podmienkam, nie na certifikovanú navigáciu.
- Skutočné podmienky sa môžu líšiť vplyvom tlaku, vĺn, riečneho prítoku, lokálnej batymetrie a počasia.
