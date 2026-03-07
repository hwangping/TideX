# TideX

உலகின் எந்த கடற்கரைக்கும் நேரடி மற்றும் முன்னறிவிக்கப்பட்ட அலைத் தகவல்

நேரடி பயன்பாடு: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## மேலோட்டம்

TideX இப்போது repository root இலிருந்து deploy செய்யப்படும் ஒரே ஒரு அலை வலைப்பயன்பாடு. GitHub பயனர்களுக்கு இது desktop, mobile browser மற்றும் home screen நிறுவலுக்கான ஒரே codebase என்பதை குறிக்கிறது.

## முக்கிய அம்சங்கள்

- வரைபடத்தில் எந்த கடற்கரை இடத்தையும் தேர்வு செய்யலாம் அல்லது நேராக தற்போதைய இருப்பிடத்துக்கு செல்லலாம்.
- OpenStreetMap தரவின் அடிப்படையில் அருகிலுள்ள பெயரிட்ட கடற்கரைகளை கண்டுபிடிக்கலாம்.
- 24 மணி நேர அலை வரம்பு, உயர்அலை நேரங்கள் மற்றும் 15 நாள் குறிப்பு கோடுகளை பார்க்கலாம்.
- அலை உயரம், காற்றடிப்பு வேகம் மற்றும் காற்றுத் திசையை ஒரே காட்சியில் ஒப்பிடலாம்.
- நேரடி தரவு சாளரத்திற்கு வெளியே harmonic fallback உடன் கடந்த, நடப்பு மற்றும் எதிர்கால தேதிகளைப் பார்க்கலாம்.
- அதே responsive PWA-ஐ desktop, mobile web மற்றும் home screen இல் பயன்படுத்தலாம்.

## இலவச தரவு மூலங்கள்

- Open-Meteo Marine: அலை / கடல் மட்ட தொடர்கள்
- Open-Meteo Forecast: காற்றடிப்பு வேகம் மற்றும் காற்றுத் திசை
- OpenStreetMap tiles: அடிப்படை வரைபடம்
- Overpass API: அருகிலுள்ள கடற்கரை தேடல்
- Nominatim: தேர்ந்தெடுத்த இடங்களுக்கான reverse geocoding

## முன்கணிப்பு முறைகள்

1. தேர்ந்தெடுத்த இடத்திற்கும் தேதிக்கும் நேரடி அலை தொடர் இருந்தால் அதையே முதலில் பயன்படுத்தும்.
1. தினசரி வளைவை monotone cubic interpolation மூலம் மென்மையாக்கும்.
1. பகுதி வெற்றிடங்களை harmonic completion மூலம் நிரப்பும்.
1. நேரடி தரவு இல்லாதபோது harmonic tide model க்கு மாறும்.
1. உயர்அலை நேரங்களை local extrema detection மற்றும் quadratic interpolation மூலம் மேம்படுத்தும்.

## அப்பாக நிறுவுதல்

1. Safari, Chrome அல்லது வேறு ஒரு நவீன உலாவியில் [https://tide-x.vercel.app](https://tide-x.vercel.app) ஐ திறக்கவும்.
1. உலாவி மெனுவில் `Add to Home Screen` அல்லது `Install App` ஐ பயன்படுத்தவும்.
1. அதே web deployment-ஐ வைத்தே TideX-ஐ சாதாரண app போல இயக்கலாம்.

## சர்வதேசமயமாக்கல்

- runtime language packs `locales/` இல் இருக்கும் மற்றும் JSON இலிருந்து ஏற்றப்படும்.
- repository-யில் 42 மொழிகள் உள்ளன; Arabic, Hebrew, Urdu க்கான RTL ஆதரவும் சேர்க்கப்பட்டுள்ளது.
- மொழி கோப்புகளை மாற்றிய பிறகு `locales/index.json` ஐ மீண்டும் உருவாக்க `node scripts/generate-locales.mjs` ஐ இயக்கவும்.

## திட்ட அமைப்பு

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

## உள்ளூர் மேம்பாடு

repository root-ஐ எந்த static file server-ஆக இருந்தாலும் serve செய்யவும்:

```bash
cd TideX
python3 -m http.server 5173
```

பிறகு `http://localhost:5173` ஐ திறக்கவும்.

## நிறுவல்

- repository root-ஐ Vercel, Netlify, Cloudflare Pages அல்லது வேறு static host-இல் deploy செய்யவும்.
- build step தேவையில்லை.
- root app-இல் ஏற்கனவே PWA manifest, icons மற்றும் service worker உள்ளன.

## பொறுப்புத்துறப்பு

- TideX பயணத் திட்டமிடல் மற்றும் கடற்கரை நிலை புரிதலுக்காக; இது சான்றளிக்கப்பட்ட வழிசெலுத்தல் கருவி அல்ல.
- அழுத்தம், அலை, நதி ஓட்டம், உள்ளூர் bathymetry மற்றும் வானிலை காரணமாக உண்மையான நிலை மாறலாம்.
