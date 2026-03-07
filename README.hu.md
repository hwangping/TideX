# TideX

Valós idejű és előrejelzett árapály bármely tengerpartra a világon

Élő alkalmazás: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Áttekintés

A TideX mostantól egyetlen, a repó gyökeréből kiadott árapály-webalkalmazás. A GitHub-felhasználók számára ez egyetlen kódbázist jelent asztali gépre, mobilböngészőre és kezdőképernyős telepítésre.

## Főbb képességek

- Válassz bármely parti pontot a térképen, vagy ugorj közvetlenül az aktuális helyedre.
- Találd meg a közeli, névvel jelölt strandokat OpenStreetMap-adatokból.
- Tekints meg egy 24 órás árapálygörbét dagályidőkkel és 15 napos referencia-vonalakkal.
- Hasonlítsd össze ugyanabban a nézetben az árapálymagasságot, a széllökést és a szélirányt.
- Járd be a múltbeli, aktuális és jövőbeli napokat harmonikus fallbackkel a közvetlen adatablakon kívül.
- Használd ugyanazt a reszponzív PWA-t asztali gépen, mobilweben és kezdőképernyőn.

## Ingyenes adatforrások

- Open-Meteo Marine: árapály- / tengerszint-sorozatok
- Open-Meteo Forecast: széllökés-sebesség és szélirány
- OpenStreetMap csempék: alaptérkép
- Overpass API: közeli strandok keresése
- Nominatim: fordított geokódolás a kiválasztott pontokhoz

## Előrejelzési megközelítés

1. Használj közvetlen árapálysorozatot, amikor az elérhető a kiválasztott ponthoz és dátumhoz.
1. Simítsd a napi görbét monoton köbös interpolációval.
1. A részleges hiányokat harmonikus kiegészítéssel töltsd ki.
1. Ha nincs közvetlen adat, állj vissza harmonikus árapálymodellre.
1. A dagályidőket lokális szélsőérték-kereséssel és kvadratikus interpolációval pontosítsd.

## Telepítés alkalmazásként

1. Nyisd meg a [https://tide-x.vercel.app](https://tide-x.vercel.app) címet Safariban, Chrome-ban vagy más modern böngészőben.
1. Használd a `Hozzáadás a kezdőképernyőhöz` vagy az `Alkalmazás telepítése` opciót a böngésző menüjéből.
1. Indítsd a TideX-et normál alkalmazásként, miközben ugyanaz a webes deploy marad érvényben.

## Nemzetköziesítés

- A futásidejű nyelvi csomagok a `locales/` mappában vannak, és JSON-ból töltődnek be.
- A repó 42 nyelvet tartalmaz, köztük RTL-támogatást arabhoz, héberhez és urduhoz.
- A nyelvi fájlok módosítása után futtasd a `node scripts/generate-locales.mjs` parancsot a `locales/index.json` újraépítéséhez.

## Projektstruktúra

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

## Helyi fejlesztés

Szolgáld ki a repó gyökerét bármilyen statikus fájlszerverrel:

```bash
cd TideX
python3 -m http.server 5173
```

Ezután nyisd meg a `http://localhost:5173` címet.

## Telepítés

- Telepítsd a repó gyökerét Vercelre, Netlifyra, Cloudflare Pagesre vagy bármely statikus hosztra.
- Nincs szükség build lépésre.
- A gyökéralkalmazás már tartalmazza a PWA-manifestet, ikonokat és a service workert.

## Felelősségi nyilatkozat

- A TideX tervezésre és part menti tájékozódásra való, nem hitelesített navigációra.
- A valós körülmények eltérhetnek a légnyomás, hullámzás, folyóvíz, helyi batimetria és időjárás miatt.
