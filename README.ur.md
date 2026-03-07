# TideX

دنیا کے کسی بھی ساحل کے لیے حقیقی وقت اور پیش گوئی شدہ مد و جزر

لائیو ایپ: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## خلاصہ

TideX اب ایک ہی مد و جزر ویب ایپ ہے جو repository کے root سے deploy ہوتی ہے۔ GitHub صارفین کے لیے اس کا مطلب desktop، mobile browser اور home screen installation کے لیے ایک ہی codebase ہے۔

## اہم خصوصیات

- نقشے پر کسی بھی ساحلی مقام کا انتخاب کریں یا سیدھا اپنی موجودہ جگہ پر جائیں۔
- OpenStreetMap ڈیٹا سے قریب کے نام والے ساحل تلاش کریں۔
- 24 گھنٹے کی مد و جزر لائن، بلند مد کے اوقات اور 15 دن کی حوالہ جاتی لکیریں دیکھیں۔
- ایک ہی منظر میں مد کی اونچائی، ہوا کے جھونکے اور ہوا کی سمت کا موازنہ کریں۔
- براہ راست ڈیٹا ونڈو سے باہر harmonic fallback کے ساتھ ماضی، حال اور مستقبل کی تاریخیں دیکھیں۔
- وہی responsive PWA desktop، mobile web اور home screen پر استعمال کریں۔

## مفت ڈیٹا ذرائع

- Open-Meteo Marine: مد / سمندری سطح کی سلسلہ واریاں
- Open-Meteo Forecast: جھونکے کی رفتار اور ہوا کی سمت
- OpenStreetMap tiles: بنیادی نقشہ
- Overpass API: قریب کے ساحلوں کی تلاش
- Nominatim: منتخب مقامات کے لیے reverse geocoding

## پیش گوئی کا طریقہ

1. منتخب مقام اور تاریخ کے لیے براہ راست مد سیریز دستیاب ہو تو پہلے اسی کو استعمال کریں۔
1. روزانہ منحنی کو monotone cubic interpolation سے ہموار کریں۔
1. جزوی خلا کو harmonic completion سے بھریں۔
1. براہ راست ڈیٹا نہ ہونے پر harmonic tide model پر fallback کریں۔
1. بلند مد کے اوقات کو local extrema detection اور quadratic interpolation سے بہتر بنائیں۔

## ایپ کے طور پر انسٹال کریں

1. Safari، Chrome یا کسی جدید براؤزر میں [https://tide-x.vercel.app](https://tide-x.vercel.app) کھولیں۔
1. براؤزر مینو سے `Add to Home Screen` یا `Install App` استعمال کریں۔
1. اسی web deployment کے ساتھ TideX کو عام ایپ کی طرح چلائیں۔

## بین الاقوامی حمایت

- runtime language packs `locales/` میں موجود ہیں اور JSON سے لوڈ ہوتے ہیں۔
- repository میں 42 زبانیں شامل ہیں، جن میں عربی، عبرانی اور اردو کے لیے RTL سپورٹ بھی ہے۔
- language files تبدیل کرنے کے بعد `locales/index.json` دوبارہ بنانے کے لیے `node scripts/generate-locales.mjs` چلائیں۔

## منصوبے کی ساخت

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

## لوکل ڈیولپمنٹ

repository root کو کسی بھی static file server سے serve کریں:

```bash
cd TideX
python3 -m http.server 5173
```

پھر `http://localhost:5173` کھولیں۔

## ڈپلائمنٹ

- repository root کو Vercel، Netlify، Cloudflare Pages یا کسی بھی static host پر deploy کریں۔
- build step کی ضرورت نہیں ہے۔
- root app میں پہلے ہی PWA manifest، icons اور service worker شامل ہیں۔

## دستبرداری

- TideX سفر کی منصوبہ بندی اور ساحلی سمجھ بوجھ کے لیے ہے، مصدقہ نیویگیشن کے لیے نہیں۔
- دباؤ، لہروں، دریائی بہاؤ، مقامی bathymetry اور موسم کی وجہ سے حقیقی حالات مختلف ہو سکتے ہیں۔
