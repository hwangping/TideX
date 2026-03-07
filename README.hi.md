# TideX

दुनिया के किसी भी तट के लिए रीयल-टाइम और पूर्वानुमानित ज्वार

लाइव ऐप: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## सारांश

TideX अब एक ही tide web app है जो सीधे रिपॉज़िटरी के root से deploy होती है। GitHub उपयोगकर्ताओं के लिए इसका मतलब है कि desktop, mobile browser और home screen installation के लिए एक ही codebase पर्याप्त है।

## मुख्य विशेषताएँ

- मानचित्र पर किसी भी तटीय बिंदु का चयन करें या सीधे अपनी वर्तमान स्थिति पर जाएँ।
- OpenStreetMap डेटा से पास के नामित समुद्रतट खोजें।
- 24 घंटे की ज्वार वक्र, उच्च ज्वार समय और 15-दिवसीय संदर्भ रेखाएँ देखें।
- एक ही दृश्य में ज्वार ऊँचाई, झोंके की गति और हवा की दिशा की तुलना करें।
- प्रत्यक्ष डेटा विंडो से बाहर होने पर harmonic fallback के साथ भूत, वर्तमान और भविष्य की तिथियाँ देखें।
- उसी responsive PWA का उपयोग desktop, mobile web और home screen पर करें।

## मुफ़्त डेटा स्रोत

- Open-Meteo Marine: ज्वार / समुद्र-स्तर श्रृंखलाएँ
- Open-Meteo Forecast: झोंके की गति और हवा की दिशा
- OpenStreetMap tiles: बेसमैप
- Overpass API: पास के समुद्रतट खोज
- Nominatim: चुने गए बिंदुओं के लिए reverse geocoding

## पूर्वानुमान तरीका

1. चुने गए बिंदु और तारीख के लिए प्रत्यक्ष ज्वार श्रृंखला उपलब्ध होने पर पहले उसी का उपयोग करें।
1. दैनिक वक्र को monotone cubic interpolation से smooth करें।
1. आंशिक खाली जगहों को harmonic completion से भरें।
1. प्रत्यक्ष डेटा न होने पर harmonic tide model पर fallback करें।
1. उच्च ज्वार समय को local extrema detection और quadratic interpolation से refine करें।

## ऐप के रूप में इंस्टॉल करें

1. Safari, Chrome या किसी आधुनिक ब्राउज़र में [https://tide-x.vercel.app](https://tide-x.vercel.app) खोलें।
1. ब्राउज़र मेनू से `Add to Home Screen` या `Install App` चुनें।
1. उसी web deployment के साथ TideX को सामान्य ऐप की तरह चलाएँ।

## अंतर्राष्ट्रीयकरण

- runtime language packs `locales/` में रहते हैं और JSON से लोड होते हैं।
- रिपॉज़िटरी में 42 भाषाएँ हैं, जिनमें अरबी, हिब्रू और उर्दू के लिए RTL समर्थन शामिल है।
- language files बदलने के बाद `locales/index.json` फिर से बनाने के लिए `node scripts/generate-locales.mjs` चलाएँ।

## प्रोजेक्ट संरचना

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

## लोकल डेवलपमेंट

रिपॉज़िटरी root को किसी भी static file server से सर्व करें:

```bash
cd TideX
python3 -m http.server 5173
```

फिर `http://localhost:5173` खोलें।

## डिप्लॉयमेंट

- रिपॉज़िटरी root को Vercel, Netlify, Cloudflare Pages या किसी भी static host पर deploy करें।
- build step की आवश्यकता नहीं है।
- root app में पहले से PWA manifest, icons और service worker शामिल हैं।

## अस्वीकरण

- TideX यात्रा योजना और तटीय संदर्भ के लिए है, प्रमाणित नेविगेशन के लिए नहीं।
- वास्तविक परिस्थितियाँ दबाव, swell, नदी प्रवाह, स्थानीय bathymetry और मौसम के कारण अलग हो सकती हैं।
