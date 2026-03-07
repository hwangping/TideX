# TideX

Marees en temps real i previstes per a qualsevol costa del món

Aplicació en viu: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Visió general

TideX ara és una única aplicació web de marees desplegada des de l'arrel del repositori. Per als usuaris de GitHub, això significa una sola base de codi per a escriptori, navegador mòbil i instal·lació a la pantalla d'inici.

## Punts destacats

- Selecciona qualsevol punt de costa al mapa o salta directament a la teva ubicació actual.
- Troba platges amb nom properes amb dades d'OpenStreetMap.
- Consulta una corba de marea de 24 hores amb hores de pleamar i línies de referència de 15 dies.
- Compara alçada de marea, ratxes i direcció del vent en una sola vista.
- Recorre dates passades, actuals i futures amb fallback harmònic fora de la finestra de dades directes.
- Utilitza la mateixa PWA responsive a escriptori, web mòbil i pantalla d'inici.

## Fonts de dades gratuïtes

- Open-Meteo Marine: sèries de marea / nivell del mar
- Open-Meteo Forecast: velocitat de ratxes i direcció del vent
- Rajoles d'OpenStreetMap: mapa base
- Overpass API: cerca de platges properes
- Nominatim: geocodificació inversa dels punts seleccionats

## Enfocament de predicció

1. Fes servir la sèrie directa de marea quan estigui disponible per al punt i la data seleccionats.
1. Suavitza la corba diària amb interpolació cúbica monòtona.
1. Omple els buits parcials amb completat harmònic.
1. Recorre a un model harmònic quan no hi ha dades directes.
1. Ajusta les hores de pleamar amb detecció d'extrems locals i interpolació quadràtica.

## Instal·la com a app

1. Obre [https://tide-x.vercel.app](https://tide-x.vercel.app) a Safari, Chrome o un altre navegador modern.
1. Utilitza `Afegeix a la pantalla d'inici` o `Instal·la l'aplicació` des del menú del navegador.
1. Executa TideX com una aplicació normal mantenint el mateix desplegament web.

## Internacionalització

- Els paquets d'idioma en execució viuen a `locales/` i es carreguen des de JSON.
- El repositori inclou 42 idiomes, amb suport RTL per a àrab, hebreu i urdú.
- Després d'editar fitxers d'idioma, executa `node scripts/generate-locales.mjs` per reconstruir `locales/index.json`.

## Estructura del projecte

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

## Desenvolupament local

Serveix l'arrel del repositori amb qualsevol servidor estàtic:

```bash
cd TideX
python3 -m http.server 5173
```

Després obre `http://localhost:5173`.

## Desplegament

- Desplega l'arrel del repositori a Vercel, Netlify, Cloudflare Pages o qualsevol allotjament estàtic.
- No cal cap pas de build.
- L'aplicació arrel ja inclou manifest PWA, icones i service worker.

## Avís

- TideX és per a planificació i context costaner, no per a navegació certificada.
- Les condicions reals poden variar per pressió, onatge, cabal fluvial, batimetria local i temps.
