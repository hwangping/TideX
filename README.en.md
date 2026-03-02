# TideX

TideX is a mobile-first global tide web app. Users can open it directly in a phone browser (already deployed on Vercel), pick any coastal point on the map, view real-time sea-level trends, and check exact high-tide times for the day.

## Live Access

- Production (Vercel): `https://tide-x.vercel.app`

## Project Positioning

- Target users: surfing, shore fishing, coastal travel, port activities, and general tide checking
- Core value: global point selection, clear visualization, smooth UX, no app install required
- Deployment model: pure static frontend, easy to host on Vercel/GitHub Pages/Netlify

## Core Features

- Global map selection: tap any coastline location
- Auto geolocation: detect current user location
- Nearby beach list: query and display nearby beaches from OpenStreetMap
- 24-hour tide curve: visualize daily sea-level trend
- High-tide time markers: show exact high-tide times on the curve
- Time navigation: switch date/hour across past, present, and future
- Forecast fallback: run harmonic prediction when direct series data is unavailable
- Multilingual UI: seamless support for 12 languages

## Mobile Experience

- Responsive layout optimized for iPhone and Android
- Touch-first interactions for map, slider, and controls
- Clean modern visuals for quick outdoor readability
- Lightweight frontend with smooth interactions after initial load

## Data Sources and Forecast Logic (All Free)

- Sea-level/tide series: Open-Meteo Marine API
- Base map tiles: OpenStreetMap
- Beach POI: OpenStreetMap Overpass API
- Reverse geocoding: Nominatim
- Forecast logic: harmonic fitting from historical series when direct target-day data is missing

## Forecast Algorithm (Brief)

TideX uses a two-stage strategy: direct data first, model prediction as fallback.

- Direct series first: if hourly sea-level data exists for the selected date, TideX uses it directly.
- Curve refinement: the hourly series is upsampled with monotone cubic interpolation for smoother, more realistic curves.
- Fallback model: when direct series is unavailable, TideX fits a harmonic tide model from historical sea-level data.
- Fitting method: multiple tidal constituents (sine/cosine basis terms) are solved with least-squares regression.
- High-tide timing: local extrema are detected and then refined with quadratic interpolation for more precise high-tide times.

## Tech Stack

- Frontend: HTML + CSS + JavaScript
- Map: Leaflet
- Chart: ECharts
- Time handling: Luxon
- Deployment: Vercel (static hosting)

## Local Development

```bash
cd TideX
python3 -m http.server 5173
```

Open: `http://localhost:5173`

## Vercel Deployment Notes

- Framework Preset: `Other`
- Build Command: empty (static site)
- Output Directory: empty (deploy project root)
- Keep HTTPS enabled for stable geolocation and mobile browser behavior

## README Languages

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

## Disclaimer

- This project is for planning/reference purposes only.
- Do not use it as the sole source for navigation, rescue, or safety-critical decisions.
- Real ocean conditions can differ due to wind, pressure, terrain, and local effects.
