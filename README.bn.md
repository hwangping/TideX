# TideX

বিশ্বের যেকোনো উপকূলের জন্য রিয়েল-টাইম ও পূর্বাভাসভিত্তিক জোয়ার

লাইভ অ্যাপ: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## সংক্ষিপ্ত পরিচিতি

TideX এখন একটি একক জোয়ার-ভাটা ওয়েব অ্যাপ, যা রিপোজিটরির রুট থেকেই ডিপ্লয় করা হয়। GitHub ব্যবহারকারীদের জন্য এর মানে হলো ডেস্কটপ, মোবাইল ব্রাউজার এবং হোম স্ক্রিন ইনস্টলের জন্য একটি মাত্র কোডবেস।

## মূল বৈশিষ্ট্য

- মানচিত্রে যেকোনো উপকূলীয় বিন্দু নির্বাচন করুন বা সরাসরি আপনার বর্তমান অবস্থানে যান।
- OpenStreetMap ডেটা থেকে কাছাকাছি নামযুক্ত সৈকত খুঁজে নিন।
- ২৪ ঘণ্টার জোয়ার-ভাটা রেখা, উচ্চ জোয়ার সময় এবং ১৫ দিনের রেফারেন্স লাইন দেখুন।
- একই ভিউতে জোয়ারের উচ্চতা, ঝোড়ো হাওয়া এবং বাতাসের দিক তুলনা করুন।
- সরাসরি ডেটা উইন্ডোর বাইরে harmonic fallback সহ অতীত, বর্তমান ও ভবিষ্যৎ তারিখ দেখুন।
- একই responsive PWA ডেস্কটপ, মোবাইল ওয়েব এবং হোম স্ক্রিনে ব্যবহার করুন।

## বিনামূল্যের ডেটা উৎস

- Open-Meteo Marine: জোয়ার / সমুদ্রপৃষ্ঠের সিরিজ
- Open-Meteo Forecast: ঝোড়ো হাওয়ার গতি ও বাতাসের দিক
- OpenStreetMap tiles: বেসম্যাপ
- Overpass API: কাছাকাছি সৈকত অনুসন্ধান
- Nominatim: নির্বাচিত স্থানের reverse geocoding

## পূর্বাভাস পদ্ধতি

1. নির্বাচিত স্থান ও তারিখের জন্য সরাসরি জোয়ার সিরিজ থাকলে সেটিই আগে ব্যবহার করা হয়।
1. দৈনিক রেখা monotone cubic interpolation দিয়ে মসৃণ করা হয়।
1. আংশিক ফাঁক harmonic completion দিয়ে পূরণ করা হয়।
1. সরাসরি ডেটা না থাকলে harmonic tide model এ fallback করা হয়।
1. উচ্চ জোয়ার সময় local extrema detection এবং quadratic interpolation দিয়ে refine করা হয়।

## অ্যাপ হিসেবে ইনস্টল

1. Safari, Chrome বা অন্য আধুনিক ব্রাউজারে [https://tide-x.vercel.app](https://tide-x.vercel.app) খুলুন।
1. ব্রাউজার মেনু থেকে `Add to Home Screen` বা `Install App` ব্যবহার করুন।
1. একই web deployment রেখে TideX-কে স্বাভাবিক অ্যাপের মতো চালান।

## আন্তর্জাতিকীকরণ

- runtime language pack `locales/`-এ থাকে এবং JSON থেকে লোড হয়।
- রিপোজিটরিতে ৪২টি ভাষা রয়েছে, যার মধ্যে আরবি, হিব্রু ও উর্দুর জন্য RTL সমর্থন আছে।
- language file বদলানোর পরে `locales/index.json` নতুন করে বানাতে `node scripts/generate-locales.mjs` চালান।

## প্রকল্পের কাঠামো

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

## লোকাল ডেভেলপমেন্ট

যেকোনো static file server দিয়ে রিপোজিটরির root সার্ভ করুন:

```bash
cd TideX
python3 -m http.server 5173
```

তারপর `http://localhost:5173` খুলুন।

## ডিপ্লয়মেন্ট

- রিপোজিটরির root-কে Vercel, Netlify, Cloudflare Pages বা অন্য যেকোনো static host-এ deploy করুন।
- build step দরকার নেই।
- root app-এ আগেই PWA manifest, icons এবং service worker রয়েছে।

## দায়বদ্ধতা ঘোষণা

- TideX ভ্রমণ পরিকল্পনা ও উপকূল বোঝার জন্য, এটি কোনো স্বীকৃত নেভিগেশন টুল নয়।
- চাপ, ঢেউ, নদীর প্রবাহ, স্থানীয় bathymetry ও আবহাওয়ার কারণে বাস্তব অবস্থা ভিন্ন হতে পারে।
