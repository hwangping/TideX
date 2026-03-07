# TideX

Stvarne i predviđene plime za bilo koju obalu na svijetu

Aplikacija uživo: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Pregled

TideX je sada jedna jedinstvena web aplikacija za plimu koja se objavljuje iz korijena repozitorija. Za GitHub korisnike to znači jednu bazu koda za desktop, mobilni preglednik i instalaciju na početni zaslon.

## Glavne značajke

- Odaberite bilo koju obalnu točku na karti ili odmah prijeđite na svoju trenutačnu lokaciju.
- Pronađite obližnje imenovane plaže pomoću podataka OpenStreetMap-a.
- Pogledajte 24-satnu krivulju plime s vremenima plime i 15-dnevnim referentnim linijama.
- Usporedite visinu plime, udare vjetra i smjer vjetra u istom prikazu.
- Pregledavajte prošle, sadašnje i buduće datume uz harmonijski fallback izvan prozora izravnih podataka.
- Koristite isti responzivni PWA na desktopu, mobilnom webu i početnom zaslonu.

## Besplatni izvori podataka

- Open-Meteo Marine: serije plime / razine mora
- Open-Meteo Forecast: brzina udara i smjer vjetra
- OpenStreetMap pločice: osnovna karta
- Overpass API: traženje obližnjih plaža
- Nominatim: obrnuto geokodiranje za odabrane točke

## Pristup prognozi

1. Koristi izravnu seriju plime kada je dostupna za odabranu točku i datum.
1. Izravnaj dnevnu krivulju monotonom kubičnom interpolacijom.
1. Djelomične praznine dopuni harmonijskim dovršetkom.
1. Kad nema izravnih podataka, prijeđi na harmonijski model plime.
1. Dorada vremena plime radi se lokalnim ekstremima i kvadratnom interpolacijom.

## Instaliraj kao aplikaciju

1. Otvori [https://tide-x.vercel.app](https://tide-x.vercel.app) u Safariju, Chromeu ili drugom modernom pregledniku.
1. Koristi `Dodaj na početni zaslon` ili `Instaliraj aplikaciju` iz izbornika preglednika.
1. Pokreni TideX kao običnu aplikaciju uz isti web deployment.

## Internacionalizacija

- Jezični paketi za runtime nalaze se u `locales/` i učitavaju iz JSON-a.
- Repozitorij sadrži 42 jezika, uključujući RTL podršku za arapski, hebrejski i urdu.
- Nakon izmjene jezičnih datoteka pokreni `node scripts/generate-locales.mjs` za obnovu `locales/index.json`.

## Struktura projekta

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

## Lokalni razvoj

Poslužite korijen repozitorija bilo kojim statičkim poslužiteljem datoteka:

```bash
cd TideX
python3 -m http.server 5173
```

Zatim otvorite `http://localhost:5173`.

## Objava

- Objavite korijen repozitorija na Vercel, Netlify, Cloudflare Pages ili bilo koji statički hosting.
- Build korak nije potreban.
- Root aplikacija već uključuje PWA manifest, ikone i service worker.

## Odricanje odgovornosti

- TideX je namijenjen planiranju i razumijevanju obalnih uvjeta, a ne certificiranoj navigaciji.
- Stvarni uvjeti mogu se razlikovati zbog tlaka, valova, riječnog dotoka, lokalne batimetrije i vremena.
