# TideX

Realtime en voorspelde getijden voor elke kustlijn ter wereld

Live-app: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Overzicht

TideX is nu één getijden-webapp die vanuit de root van de repository wordt uitgerold. Voor GitHub-gebruikers betekent dat één codebasis voor desktop, mobiele browser en installatie op het startscherm.

## Belangrijkste punten

- Kies elk kustpunt op de kaart of spring direct naar je huidige locatie.
- Vind benoemde stranden in de buurt met OpenStreetMap-gegevens.
- Bekijk een getijdencurve van 24 uur met hoogwatermomenten en referentielijnen voor 15 dagen.
- Vergelijk getijhoogte, windstoten en windrichting in dezelfde weergave.
- Blader door verleden, heden en toekomst met harmonische fallback buiten directe gegevensvensters.
- Gebruik dezelfde responsieve PWA op desktop, mobiel web en startscherm.

## Gratis databronnen

- Open-Meteo Marine: reeksen voor getij / zeeniveau
- Open-Meteo Forecast: windsnelheid van windstoten en windrichting
- OpenStreetMap-tegels: basiskaart
- Overpass API: zoeken naar nabijgelegen stranden
- Nominatim: reverse geocoding voor geselecteerde punten

## Voorspellingsaanpak

1. Gebruik directe getijdenreeksen wanneer die beschikbaar zijn voor punt en datum.
1. Maak de dagcurve vloeiender met monotone kubische interpolatie.
1. Vul gedeeltelijke gaten aan met harmonische completering.
1. Val terug op een harmonisch getijdenmodel wanneer directe data ontbreekt.
1. Verfijn hoogwatermomenten met lokale extremendetectie en kwadratische interpolatie.

## Installeren als app

1. Open [https://tide-x.vercel.app](https://tide-x.vercel.app) in Safari, Chrome of een andere moderne browser.
1. Gebruik `Toevoegen aan beginscherm` of `App installeren` via het browsermenu.
1. Start TideX als een normale app terwijl dezelfde webdeploy behouden blijft.

## Internationalisatie

- Runtime-taalpakketten staan in `locales/` en worden uit JSON geladen.
- De repository bevat 42 talen, inclusief RTL-ondersteuning voor Arabisch, Hebreeuws en Urdu.
- Voer na het aanpassen van taalbestanden `node scripts/generate-locales.mjs` uit om `locales/index.json` opnieuw op te bouwen.

## Projectstructuur

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

## Lokale ontwikkeling

Serveer de repository-root met een willekeurige statische bestandsserver:

```bash
cd TideX
python3 -m http.server 5173
```

Open daarna `http://localhost:5173`.

## Deployment

- Deploy de repository-root naar Vercel, Netlify, Cloudflare Pages of een andere statische host.
- Er is geen buildstap nodig.
- De root-app bevat al het PWA-manifest, de pictogrammen en de service worker.

## Disclaimer

- TideX is bedoeld voor planning en kustcontext, niet voor gecertificeerde navigatie.
- Werkelijke omstandigheden kunnen afwijken door druk, deining, rivierafvoer, lokale bathymetrie en weer.
