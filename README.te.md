# TideX

ప్రపంచంలోని ఏ తీరానికైనా తక్షణ మరియు అంచనా జ్వార సమాచారం

ప్రత్యక్ష యాప్: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## సారాంశం

TideX ఇప్పుడు repository root నుంచే deploy అయ్యే ఒకే ఒక జ్వార వెబ్ యాప్. GitHub వినియోగదారులకు ఇది desktop, mobile browser, home screen installation కోసం ఒకే codebase ని అందిస్తుంది.

## ప్రధాన లక్షణాలు

- మ్యాప్‌లో ఏ తీర బిందువునైనా ఎంచుకోండి లేదా నేరుగా మీ ప్రస్తుత స్థానానికి వెళ్లండి.
- OpenStreetMap డేటాతో సమీప పేరుగల తీరాలను కనుగొనండి.
- 24 గంటల జ్వార వక్రం, ఎత్తైన జ్వార సమయాలు మరియు 15 రోజుల సూచిక గీతలను చూడండి.
- జ్వార ఎత్తు, గాలి ఝాటు, గాలి దిశలను ఒకే దృశ్యంలో పోల్చండి.
- ప్రత్యక్ష డేటా విండో బయట harmonic fallback తో గత, ప్రస్తుత, భవిష్యత్ తేదీలను చూడండి.
- అదే responsive PWA ను desktop, mobile web, home screen లో ఉపయోగించండి.

## ఉచిత డేటా మూలాలు

- Open-Meteo Marine: జ్వార / సముద్ర మట్టం శ్రేణులు
- Open-Meteo Forecast: గాలి ఝాటు వేగం మరియు గాలి దిశ
- OpenStreetMap tiles: ప్రాథమిక మ్యాప్
- Overpass API: సమీప తీరాల శోధన
- Nominatim: ఎంచుకున్న బిందువుల కోసం reverse geocoding

## అంచనా విధానం

1. ఎంచుకున్న బిందువు మరియు తేదీకి ప్రత్యక్ష జ్వార శ్రేణి ఉంటే ముందుగా దానినే ఉపయోగించండి.
1. రోజువారీ వక్రాన్ని monotone cubic interpolation తో మృదువుగా చేయండి.
1. భాగంగా ఉన్న ఖాళీలను harmonic completion తో నింపండి.
1. ప్రత్యక్ష డేటా లేకపోతే harmonic tide model కు fallback అవ్వండి.
1. ఎత్తైన జ్వార సమయాలను local extrema detection మరియు quadratic interpolation తో refine చేయండి.

## యాప్‌గా ఇన్‌స్టాల్ చేయండి

1. Safari, Chrome లేదా మరో ఆధునిక బ్రౌజర్‌లో [https://tide-x.vercel.app](https://tide-x.vercel.app) ను తెరవండి.
1. బ్రౌజర్ మెనూ నుండి `Add to Home Screen` లేదా `Install App` ఉపయోగించండి.
1. అదే web deployment ను ఉంచి TideX ను సాధారణ యాప్‌లా ప్రారంభించండి.

## అంతర్జాతీయీకరణ

- runtime language packs `locales/` లో ఉంటాయి మరియు JSON నుండి లోడ్ అవుతాయి.
- repository లో 42 భాషలు ఉన్నాయి; Arabic, Hebrew, Urdu కోసం RTL మద్దతు కూడా ఉంది.
- language files మార్చిన తరువాత `locales/index.json` ను మళ్లీ నిర్మించడానికి `node scripts/generate-locales.mjs` నడపండి.

## ప్రాజెక్ట్ నిర్మాణం

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

## లోకల్ డెవలప్‌మెంట్

repository root ను ఏదైనా static file server తో serve చేయండి:

```bash
cd TideX
python3 -m http.server 5173
```

తర్వాత `http://localhost:5173` ను తెరవండి.

## డిప్లాయ్‌మెంట్

- repository root ను Vercel, Netlify, Cloudflare Pages లేదా ఏ static host పై అయినా deploy చేయండి.
- build step అవసరం లేదు.
- root app లో ఇప్పటికే PWA manifest, icons, service worker ఉన్నాయి.

## నిరాకరణ

- TideX ప్రయాణ ప్రణాళిక మరియు తీర అవగాహన కోసం, ధృవీకరించిన నావిగేషన్ కోసం కాదు.
- ఒత్తిడి, అలలు, నది ప్రవాహం, స్థానిక bathymetry మరియు వాతావరణం వల్ల నిజమైన పరిస్థితులు మారవచ్చు.
