# TideX

Real-time and predicted tides for any coastline in the world

Live app: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Overview

TideX is a single-deployment tide web app for GitHub users who want one codebase for desktop browsers, mobile browsers, and home-screen installation. The repository root is now the only app entry point.

## Highlights

- Select any coastal point on the map or jump to your current location.
- Find nearby named beaches from OpenStreetMap data.
- See a 24-hour tide curve with high-tide time markers and 15-day high/low reference lines.
- Compare tide height with gust speed and wind direction in the same view.
- Browse past, current, and future dates with harmonic fallback outside direct-data windows.
- Run the same responsive PWA on desktop, mobile web, and home screen.

## Free Data Sources

- Open-Meteo Marine: tide / sea-level series
- Open-Meteo Forecast: gust speed and wind direction
- OpenStreetMap tiles: basemap
- Overpass API: nearby beach discovery
- Nominatim: reverse geocoding for selected points

## Forecasting Approach

1. Use direct tide series when available for the selected point and date.
1. Smooth the daily curve with monotone cubic interpolation.
1. Fill partial gaps with harmonic completion.
1. Fallback to a harmonic tide model when direct data is unavailable.
1. Refine high-tide times with local extrema detection and quadratic interpolation.

## Install As App

1. Open [https://tide-x.vercel.app](https://tide-x.vercel.app) in Safari, Chrome, or another modern browser.
1. Use `Add to Home Screen` or `Install App` from the browser menu.
1. Launch TideX like a normal app while keeping the same web deployment.

## Internationalization

- Runtime locale packs live in `locales/` and load from JSON.
- The repository ships 42 language packs, including RTL support for Arabic, Hebrew, and Urdu.
- Run `node scripts/generate-locales.mjs` after editing locale files to rebuild `locales/index.json`.

## Project Structure

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

## Local Development

Serve the repository root with any static file server:

```bash
cd TideX
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Deployment

- Deploy the repository root to Vercel, Netlify, Cloudflare Pages, or any static host.
- No build step is required.
- The root app already includes the PWA manifest, icons, and service worker.

## Disclaimer

- TideX is for trip planning and beach awareness, not certified navigation.
- Actual coastal conditions can differ because of pressure, swell, river flow, local bathymetry, and weather.
