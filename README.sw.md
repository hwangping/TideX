# TideX

Mawimbi ya maji kwa wakati halisi na utabiri kwa ufuo wowote duniani

Programu ya moja kwa moja: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Muhtasari

TideX sasa ni programu moja ya wavuti ya mawimbi inayotolewa kutoka mzizi wa hazina. Kwa watumiaji wa GitHub, hii ina maana ya codebase moja kwa desktop, kivinjari cha simu, na usakinishaji kwenye skrini ya nyumbani.

## Vipengele vikuu

- Chagua sehemu yoyote ya pwani kwenye ramani au nenda moja kwa moja kwenye eneo lako la sasa.
- Pata fukwe zilizopewa majina zilizo karibu ukitumia data ya OpenStreetMap.
- Tazama mduara wa mawimbi wa saa 24 wenye nyakati za maji kujaa na mistari ya rejea ya siku 15.
- Linganisha kiwango cha maji, kishindo cha upepo na mwelekeo wa upepo katika mwonekano mmoja.
- Vinjari tarehe za zamani, za sasa na zijazo kwa harmonic fallback nje ya dirisha la data ya moja kwa moja.
- Tumia PWA ileile inayobadilika kwenye desktop, wavuti ya simu na skrini ya nyumbani.

## Vyanzo vya data vya bure

- Open-Meteo Marine: mfululizo wa mawimbi / kiwango cha bahari
- Open-Meteo Forecast: kasi ya kishindo na mwelekeo wa upepo
- Tiles za OpenStreetMap: ramani ya msingi
- Overpass API: utafutaji wa fukwe za karibu
- Nominatim: geocoding ya kurudi kwa pointi zilizochaguliwa

## Mbinu ya utabiri

1. Tumia mfululizo wa moja kwa moja wa mawimbi ikiwa unapatikana kwa pointi na tarehe iliyochaguliwa.
1. Lainisha mduara wa siku kwa monotone cubic interpolation.
1. Jaza mapengo ya sehemu kwa ukamilishaji wa harmonic.
1. Rudi kwenye harmonic tide model wakati data ya moja kwa moja haipo.
1. Boresha nyakati za maji kujaa kwa local extrema detection na quadratic interpolation.

## Sakinisha kama programu

1. Fungua [https://tide-x.vercel.app](https://tide-x.vercel.app) katika Safari, Chrome au kivinjari kingine cha kisasa.
1. Tumia `Add to Home Screen` au `Install App` kutoka kwenye menyu ya kivinjari.
1. Zindua TideX kama programu ya kawaida huku deployment ileile ya wavuti ikiendelea kutumika.

## Ukimataifa

- Pakiti za lugha za runtime ziko katika `locales/` na hupakiwa kutoka JSON.
- Hazina ina lugha 42, ikijumuisha msaada wa RTL kwa Kiarabu, Kiebrania na Kiurdu.
- Baada ya kuhariri faili za lugha, endesha `node scripts/generate-locales.mjs` ili kujenga tena `locales/index.json`.

## Muundo wa mradi

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

## Maendeleo ya ndani

Hudumia mzizi wa hazina kwa seva yoyote ya faili tuli:

```bash
cd TideX
python3 -m http.server 5173
```

Kisha fungua `http://localhost:5173`.

## Usambazaji

- Sambaza mzizi wa hazina kwenye Vercel, Netlify, Cloudflare Pages au host yoyote ya static.
- Hakuna hatua ya build inayohitajika.
- Programu ya mzizi tayari inajumuisha PWA manifest, icons na service worker.

## Tahadhari

- TideX ni kwa kupanga safari na kuelewa pwani, si kwa urambazaji uliothibitishwa.
- Hali halisi zinaweza kutofautiana kwa sababu ya shinikizo, mawimbi, mtiririko wa mito, batimetria ya eneo na hali ya hewa.
