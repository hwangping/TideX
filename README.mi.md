# TideX

Ngā tai ā-tūturu me ngā matapae mō ngā takutai katoa o te ao

Taupānga ora: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Tirohanga whānui

Ko TideX ināianei he taupānga tukutuku tai kotahi ka tukuna mai i te pakiaka o te pūtake waehere. Mō ngā kaiwhakamahi GitHub, ko te tikanga he kotahi anake te codebase mō te papamahi, te pūtirotiro pūkoro me te tāuta ki te mata kāinga.

## Ngā āhuatanga matua

- Kōwhiria tētahi wāhi takutai ki te mahere, rānei peke tika ki tō wāhi o nāianei.
- Kimihia ngā takutai whai ingoa i te taha tata mā ngā raraunga OpenStreetMap.
- Tirohia he ānau tai 24 hāora me ngā wā tai pari me ngā rārangi tohutoro mō ngā rā 15.
- Whakatauritea te teitei o te tai, ngā pupuhi hau me te ahunga hau i te tirohanga kotahi.
- Tirohia ngā rā o mua, o nāianei me ā mua me te fallback taurite ki waho o te matapihi raraunga tika.
- Whakamahia te PWA urutau kotahi i runga papamahi, tukutuku pūkoro me te mata kāinga.

## Ngā puna raraunga kore utu

- Open-Meteo Marine: raupapa tai / taumata moana
- Open-Meteo Forecast: tere pupuhi hau me te ahunga hau
- Ngā tāpa OpenStreetMap: mapi matua
- Overpass API: kimi takutai tata
- Nominatim: geocoding whakamuri mō ngā wāhi kua tīpakohia

## Ara matapae

1. Whakamahia te raupapa tai tika ina wātea mō te wāhi me te rā kua tīpakohia.
1. Whakamaenehia te ānau o te rā mā te monotone cubic interpolation.
1. Whakakīa ngā āputa wāhanga mā te whakakī taurite.
1. Hoki atu ki tētahi tauira tai taurite ina kore he raraunga tika.
1. Whakakaha ake ngā wā tai pari mā te kimi tino uara ā-rohe me te quadratic interpolation.

## Tāuta hei taupānga

1. Whakatūwheratia te [https://tide-x.vercel.app](https://tide-x.vercel.app) ki Safari, Chrome, ki tētahi pūtirotiro hou rānei.
1. Whakamahia te `Add to Home Screen` rānei te `Install App` mai i te tahua pūtirotiro.
1. Whakarewahia a TideX pēnei i tētahi taupānga noa, ahakoa ko taua deployment tukutuku tonu.

## Whakawhānui reo

- Kei `locales/` ngā mōkihi reo wā-rere, ā, ka utaina mai i JSON.
- Kei roto i te pūtake 42 ngā reo, tae atu ki te tautoko RTL mō te reo Arapi, Hiperu me Urdu.
- Whai muri i te whakatika i ngā kōnae reo, rerehia te `node scripts/generate-locales.mjs` kia hanga anō ai te `locales/index.json`.

## Hanganga kaupapa

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

## Whanaketanga ā-rohe

Whakaratohia te pakiaka o te pūtake waehere mā tētahi tūmau kōnae tūroa:

```bash
cd TideX
python3 -m http.server 5173
```

Kātahi ka whakatuwhera `http://localhost:5173`.

## Tuku

- Tukua te pakiaka o te pūtake ki Vercel, Netlify, Cloudflare Pages, ki tētahi host tūroa rānei.
- Kāore he take mō tētahi hipanga build.
- Kei te taupānga matua kē te manifest PWA, ngā ata me te service worker.

## Whakakāhoretanga

- Mō te whakamahere haere me te mōhio ki te takutai a TideX, ehara mō te whakatere kua whakamanatia.
- Ka rerekē pea ngā āhuatanga tūturu nā te pēhanga, te ngaru, te rere awa, te batymetry ā-rohe me te huarere.
