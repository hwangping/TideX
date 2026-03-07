# TideX

Echtzeit- und Prognose-Gezeiten für jede Küste weltweit

Live-App: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Überblick

TideX ist jetzt eine einzelne Tide-Web-App aus dem Repository-Stamm. Für GitHub-Nutzer bedeutet das eine Codebasis für Desktop, mobilen Browser und Installation auf dem Startbildschirm.

## Highlights

- Beliebige Küstenpunkte auf der Karte wählen oder direkt zum aktuellen Standort springen.
- Nahe benannte Strände aus OpenStreetMap-Daten finden.
- 24-Stunden-Tidenkurve mit Hochwasserzeiten und 15-Tage-Referenzlinien anzeigen.
- Tidenhöhe, Böengeschwindigkeit und Windrichtung in derselben Ansicht vergleichen.
- Vergangene, aktuelle und zukünftige Daten mit harmonischem Fallback außerhalb direkter Datenfenster durchsuchen.
- Dieselbe responsive PWA auf Desktop, Mobile Web und Startbildschirm verwenden.

## Kostenlose Datenquellen

- Open-Meteo Marine: Gezeiten- / Meeresspiegelreihen
- Open-Meteo Forecast: Böengeschwindigkeit und Windrichtung
- OpenStreetMap-Kacheln: Basiskarte
- Overpass API: Suche nach nahegelegenen Stränden
- Nominatim: Reverse-Geocoding für ausgewählte Punkte

## Prognoseansatz

1. Direkte Gezeitenreihen werden bevorzugt, wenn sie für Punkt und Datum verfügbar sind.
1. Die Tageskurve wird mit monotoner kubischer Interpolation geglättet.
1. Teilweise Lücken werden harmonisch ergänzt.
1. Wenn keine Direktdaten vorliegen, fällt TideX auf ein harmonisches Gezeitenmodell zurück.
1. Hochwasserzeiten werden mit lokaler Extremwertsuche und quadratischer Interpolation verfeinert.

## Als App installieren

1. Öffne [https://tide-x.vercel.app](https://tide-x.vercel.app) in Safari, Chrome oder einem anderen modernen Browser.
1. Nutze `Zum Home-Bildschirm` oder `App installieren` im Browsermenü.
1. Starte TideX wie eine normale App, ohne einen separaten Build zu pflegen.

## Internationalisierung

- Laufzeit-Sprachpakete liegen in `locales/` und werden als JSON geladen.
- Das Repository enthält 42 Sprachpakete, inklusive RTL-Unterstützung für Arabisch, Hebräisch und Urdu.
- Nach Änderungen an Sprachdateien `node scripts/generate-locales.mjs` ausführen, um `locales/index.json` neu zu erzeugen.

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

## Lokale Entwicklung

Den Repository-Stamm mit einem beliebigen statischen Dateiserver bereitstellen:

```bash
cd TideX
python3 -m http.server 5173
```

Danach `http://localhost:5173` öffnen.

## Deployment

- Den Repository-Stamm auf Vercel, Netlify, Cloudflare Pages oder einem anderen statischen Host deployen.
- Ein Build-Schritt ist nicht erforderlich.
- Die Root-App enthält bereits PWA-Manifest, Icons und Service Worker.

## Hinweis

- TideX ist für Planung und Strandbewusstsein gedacht, nicht für zertifizierte Navigation.
- Reale Küstenbedingungen können durch Luftdruck, Dünung, Flussabfluss, lokale Bathymetrie und Wetter abweichen.
