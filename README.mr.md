# TideX

जगातील कोणत्याही किनाऱ्यासाठी रिअल-टाइम आणि अंदाजित भरती-ओहोटी

लाईव्ह अॅप: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## आढावा

TideX आता एकच भरती-ओहोटी वेब अॅप आहे जे repository च्या root मधून deploy होते. GitHub वापरकर्त्यांसाठी याचा अर्थ desktop, mobile browser आणि home screen installation साठी एकच codebase आहे.

## मुख्य वैशिष्ट्ये

- नकाशावर कोणताही किनारी बिंदू निवडा किंवा थेट तुमच्या सध्याच्या स्थानावर जा.
- OpenStreetMap डेटावरून जवळचे नाव असलेले किनारे शोधा.
- 24 तासांची भरती-ओहोटी वक्ररेषा, उच्च भरतीची वेळ आणि 15 दिवसांच्या संदर्भरेषा पाहा.
- भरतीची उंची, वाऱ्याचा झोत आणि वाऱ्याची दिशा एका दृश्यात तुलना करा.
- प्रत्यक्ष डेटा विंडोबाहेर harmonic fallback सह भूतकाळ, वर्तमान आणि भविष्य तारखा पाहा.
- तोच responsive PWA desktop, mobile web आणि home screen वर वापरा.

## मोफत डेटा स्रोत

- Open-Meteo Marine: भरती / समुद्रपातळी मालिका
- Open-Meteo Forecast: वाऱ्याच्या झोताचा वेग आणि दिशा
- OpenStreetMap tiles: बेसमॅप
- Overpass API: जवळचे किनारे शोधणे
- Nominatim: निवडलेल्या बिंदूंसाठी reverse geocoding

## अंदाज पद्धत

1. निवडलेल्या बिंदू आणि तारखेसाठी प्रत्यक्ष भरती मालिका उपलब्ध असल्यास ती आधी वापरा.
1. दैनिक वक्र monotone cubic interpolation ने गुळगुळीत करा.
1. आंशिक मोकळी जागा harmonic completion ने भरा.
1. प्रत्यक्ष डेटा नसल्यास harmonic tide model वर fallback करा.
1. उच्च भरतीची वेळ local extrema detection आणि quadratic interpolation ने refine करा.

## अॅप म्हणून इंस्टॉल करा

1. Safari, Chrome किंवा दुसऱ्या आधुनिक ब्राउझरमध्ये [https://tide-x.vercel.app](https://tide-x.vercel.app) उघडा.
1. ब्राउझर मेनूमधून `Add to Home Screen` किंवा `Install App` वापरा.
1. त्याच web deployment सह TideX साध्या अॅपप्रमाणे चालवा.

## आंतरराष्ट्रीयीकरण

- runtime language packs `locales/` मध्ये असतात आणि JSON मधून लोड होतात.
- repository मध्ये 42 भाषा आहेत; Arabic, Hebrew आणि Urdu साठी RTL समर्थनही आहे.
- language files बदलल्यानंतर `locales/index.json` पुन्हा तयार करण्यासाठी `node scripts/generate-locales.mjs` चालवा.

## प्रकल्प रचना

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

## स्थानिक विकास

repository root कोणत्याही static file server ने serve करा:

```bash
cd TideX
python3 -m http.server 5173
```

नंतर `http://localhost:5173` उघडा.

## डिप्लॉयमेंट

- repository root ला Vercel, Netlify, Cloudflare Pages किंवा इतर static host वर deploy करा.
- build step ची गरज नाही.
- root app मध्ये आधीच PWA manifest, icons आणि service worker आहेत.

## अस्वीकरण

- TideX हे प्रवास नियोजन आणि किनारी संदर्भासाठी आहे; प्रमाणित नेव्हिगेशनसाठी नाही.
- दाब, लाटा, नदी प्रवाह, स्थानिक bathymetry आणि हवामानामुळे प्रत्यक्ष परिस्थिती वेगळी असू शकते.
