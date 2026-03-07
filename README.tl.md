# TideX

Real-time at hinulaang pagtaas-baba ng dagat para sa anumang baybayin sa mundo

Live app: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Pangkalahatang-ideya

Ang TideX ay isa na ngayong iisang web app ng taib na dine-deploy mula sa root ng repositoryo. Para sa mga gumagamit ng GitHub, ibig sabihin nito ay iisang codebase para sa desktop, mobile browser, at pag-install sa home screen.

## Mahahalagang tampok

- Pumili ng anumang baybaying punto sa mapa o dumiretso sa kasalukuyang lokasyon mo.
- Maghanap ng mga kalapit na dalampasigang may pangalan mula sa datos ng OpenStreetMap.
- Tingnan ang 24-oras na kurba ng taib kasama ang oras ng mataas na taib at 15-araw na reference lines.
- Ihambing ang taas ng taib, bugso ng hangin, at direksiyon ng hangin sa iisang view.
- Mag-browse ng nakaraan, kasalukuyan, at hinaharap na mga petsa gamit ang harmonic fallback sa labas ng direktang data window.
- Gamitin ang parehong responsive PWA sa desktop, mobile web, at home screen.

## Libreng pinagmumulan ng datos

- Open-Meteo Marine: serye ng taib / antas ng dagat
- Open-Meteo Forecast: bilis ng bugso at direksiyon ng hangin
- OpenStreetMap tiles: basemap
- Overpass API: paghahanap ng malalapit na dalampasigan
- Nominatim: reverse geocoding para sa mga napiling punto

## Paraan ng pagtataya

1. Gamitin ang direktang serye ng taib kapag mayroon para sa napiling punto at petsa.
1. Pinapakinis ang pang-araw na kurba gamit ang monotone cubic interpolation.
1. Pinupunan ang bahagyang kulang na bahagi gamit ang harmonic completion.
1. Kapag walang direktang datos, bumabagsak ito sa harmonic tide model.
1. Pinapahusay ang oras ng mataas na taib gamit ang local extrema detection at quadratic interpolation.

## I-install bilang app

1. Buksan ang [https://tide-x.vercel.app](https://tide-x.vercel.app) sa Safari, Chrome, o ibang modernong browser.
1. Gamitin ang `Add to Home Screen` o `Install App` mula sa menu ng browser.
1. Patakbuhin ang TideX tulad ng normal na app habang nananatili ang parehong web deployment.

## Internasyonal na suporta

- Ang runtime language packs ay nasa `locales/` at nilo-load mula sa JSON.
- May 42 wika ang repositoryo, kasama ang RTL support para sa Arabic, Hebrew, at Urdu.
- Pagkatapos baguhin ang mga language file, patakbuhin ang `node scripts/generate-locales.mjs` para buuin muli ang `locales/index.json`.

## Estruktura ng proyekto

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

## Lokal na development

I-serve ang root ng repositoryo gamit ang kahit anong static file server:

```bash
cd TideX
python3 -m http.server 5173
```

Pagkatapos ay buksan ang `http://localhost:5173`.

## Deployment

- I-deploy ang root ng repositoryo sa Vercel, Netlify, Cloudflare Pages, o anumang static host.
- Walang build step na kailangan.
- Kasama na sa root app ang PWA manifest, icons, at service worker.

## Paalala

- Ang TideX ay para sa pagpaplano at pag-unawa sa baybayin, hindi para sa sertipikadong nabigasyon.
- Maaaring mag-iba ang aktuwal na kondisyon dahil sa presyon, alon, daloy ng ilog, lokal na bathymetry, at panahon.
