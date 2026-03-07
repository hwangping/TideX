# TideX

Reaaliaikaiset ja ennustetut vuorovedet kaikille rannikoille maailmassa

Verkkosovellus: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Yleiskuva

TideX on nyt yksi yhtenäinen vuorovesiverkkosovellus, joka julkaistaan suoraan reposton juuresta. GitHub-käyttäjälle tämä tarkoittaa yhtä koodipohjaa työpöydälle, mobiiliselaimelle ja aloitusnäyttöasennukselle.

## Keskeiset ominaisuudet

- Valitse mikä tahansa rannikkopiste kartalta tai siirry suoraan nykyiseen sijaintiisi.
- Löydä nimetyt rannat läheltä OpenStreetMap-datan avulla.
- Näe 24 tunnin vuorovesikäyrä, nousuveden ajat ja 15 päivän vertailuviivat.
- Vertaa vuorovesikorkeutta, puuskia ja tuulen suuntaa samassa näkymässä.
- Selaa menneitä, nykyisiä ja tulevia päiviä harmonisella fallbackilla suoran dataikkunan ulkopuolella.
- Käytä samaa responsiivista PWA:ta työpöydällä, mobiiliwebissä ja aloitusnäytöllä.

## Ilmaiset tietolähteet

- Open-Meteo Marine: vuorovesi- / merenpintasarjat
- Open-Meteo Forecast: puuskanopeus ja tuulen suunta
- OpenStreetMap-ruudut: peruskartta
- Overpass API: läheisten rantojen haku
- Nominatim: valittujen pisteiden käänteinen geokoodaus

## Ennustemenetelmä

1. Käytä suoraa vuorovesisarjaa, kun se on saatavilla valitulle pisteelle ja päivälle.
1. Pehmennä päiväkäyrä monotonisella kuutiointerpoloinnilla.
1. Täydennä osittaiset aukot harmonisella täydentämisellä.
1. Palaa harmoniseen vuorovesimalliin, kun suoraa dataa ei ole.
1. Tarkenna nousuveden aikoja paikallisten ääriarvojen tunnistuksella ja toisen asteen interpoloinnilla.

## Asenna sovelluksena

1. Avaa [https://tide-x.vercel.app](https://tide-x.vercel.app) Safarissa, Chromessa tai muussa modernissa selaimessa.
1. Käytä selaimen valikosta `Lisää aloitusnäyttöön` tai `Asenna sovellus`.
1. Käynnistä TideX tavallisen sovelluksen tavoin, vaikka käytössä on sama verkkodeploy.

## Kansainvälistäminen

- Ajonaikaiset kielipaketit sijaitsevat `locales/`-hakemistossa ja latautuvat JSON-muodossa.
- Repositorio sisältää 42 kielipakettia, mukaan lukien RTL-tuki arabialle, heprealle ja urdulle.
- Kun muokkaat kielitiedostoja, suorita `node scripts/generate-locales.mjs`, jotta `locales/index.json` rakennetaan uudelleen.

## Projektirakenne

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

## Paikallinen kehitys

Tarjoile reposton juuri millä tahansa staattisella tiedostopalvelimella:

```bash
cd TideX
python3 -m http.server 5173
```

Avaa sitten `http://localhost:5173`.

## Julkaisu

- Julkaise reposton juuri Verceliin, Netlifyhin, Cloudflare Pagesiin tai muulle staattiselle palvelulle.
- Erillistä build-vaihetta ei tarvita.
- Juurisovellus sisältää jo PWA-manifestin, ikonit ja service workerin.

## Vastuuvapaus

- TideX on tarkoitettu suunnitteluun ja rannikkotilanteen ymmärtämiseen, ei sertifioituun navigointiin.
- Todelliset olosuhteet voivat poiketa paineen, aallokon, jokivirtaaman, paikallisen batymetrian ja sään vuoksi.
