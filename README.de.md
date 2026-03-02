# TideX

TideX ist eine mobil optimierte globale Gezeiten-Web-App. Nutzer können sie direkt im Smartphone-Browser öffnen (bereits auf Vercel bereitgestellt), jeden Küstenpunkt auf der Karte auswählen und den Meeresspiegelverlauf sowie exakte Hochwasserzeiten ansehen.

## Online-Zugang

- Produktion (Vercel): `https://tide-x.vercel.app`

## Projektfokus

- Zielgruppe: Surfen, Küstenangeln, Strandreisen, Hafenaktivitäten
- Kernnutzen: globale Punktwahl, klare Visualisierung, flüssige Bedienung, keine Installation nötig
- Bereitstellung: statisches Frontend, einfach auf Vercel/GitHub Pages/Netlify hostbar

## Hauptfunktionen

- Weltweite Kartenauswahl beliebiger Küstenpunkte
- Automatische Standorterkennung
- Liste nahegelegener Strände aus OpenStreetMap
- 24-Stunden-Gezeitenkurve
- Markierung der Hochwasserzeiten auf der Kurve
- Zeitauswahl für Vergangenheit, Gegenwart und Zukunft
- Harmonische Fallback-Prognose bei fehlenden Direktdaten
- Mehrsprachige Oberfläche mit 12 Sprachen

## Mobile Erfahrung

- Responsives Layout für iPhone und Android
- Touch-optimierte Interaktionen
- Modernes, gut lesbares Design für den Außeneinsatz
- Leichtgewichtiges Frontend mit flüssiger Interaktion

## Datenquellen und Prognoselogik (kostenlos)

- Meeresspiegel/Gezeitenserie: Open-Meteo Marine API
- Basiskarte: OpenStreetMap
- Strand-POI: OpenStreetMap Overpass API
- Reverse-Geocoding: Nominatim
- Prognose: harmonisches Fitting historischer Serien bei fehlenden Tagesdaten

## Prognose-Algorithmus (Kurzfassung)

TideX verwendet ein zweistufiges Verfahren: erst Direktdaten, dann Modell-Fallback.

- Direktserie zuerst: falls stündliche Pegeldaten für das Ziel-Datum vorliegen, werden diese direkt genutzt.
- Kurvenverfeinerung: die Stundenwerte werden per monotoner kubischer Interpolation verdichtet.
- Fallback-Prognose: fehlen Direktdaten, passt TideX ein harmonisches Modell auf historische Daten an.
- Anpassungsmethode: mehrere Tidenkonstituenten (Sinus/Cosinus-Basis) werden per kleinste Quadrate geschätzt.
- Hochwasserzeit: lokale Extrema werden erkannt und mit quadratischer Interpolation zeitlich verfeinert.

## Tech-Stack

- Frontend: HTML + CSS + JavaScript
- Karte: Leaflet
- Diagramme: ECharts
- Zeitverarbeitung: Luxon
- Deployment: Vercel (statisches Hosting)

## Lokale Entwicklung

```bash
cd TideX
python3 -m http.server 5173
```

Öffnen: `http://localhost:5173`

## Vercel-Empfehlungen

- Framework Preset: `Other`
- Build Command: leer (statische Seite)
- Output Directory: leer (Projektwurzel)
- HTTPS aktivieren (stabilere Geolokalisierung)

## README-Sprachen

- English: [`README.en.md`](./README.en.md)
- 简体中文: [`README.zh-CN.md`](./README.zh-CN.md)
- 繁體中文: [`README.zh-TW.md`](./README.zh-TW.md)
- 日本語: [`README.ja.md`](./README.ja.md)
- 한국어: [`README.ko.md`](./README.ko.md)
- Français: [`README.fr.md`](./README.fr.md)
- Español: [`README.es.md`](./README.es.md)
- Deutsch: [`README.de.md`](./README.de.md)
- Italiano: [`README.it.md`](./README.it.md)
- Tiếng Việt: [`README.vi.md`](./README.vi.md)
- ไทย: [`README.th.md`](./README.th.md)
- Bahasa Melayu: [`README.ms.md`](./README.ms.md)

## Haftungsausschluss

- Dieses Projekt dient nur der Planung und Orientierung.
- Nicht als einzige Quelle für Navigation oder sicherheitskritische Entscheidungen nutzen.
- Reale Bedingungen können durch Wind, Druck und Küstengeometrie abweichen.
