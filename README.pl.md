# TideX

Bieżące i prognozowane pływy dla dowolnego wybrzeża na świecie

Aplikacja online: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Przegląd

TideX jest teraz pojedynczą aplikacją webową o pływach wdrażaną z katalogu głównego repozytorium. Dla użytkowników GitHub oznacza to jedną bazę kodu dla desktopu, mobilnej przeglądarki i instalacji na ekranie głównym.

## Najważniejsze funkcje

- Wybieraj dowolny punkt wybrzeża na mapie albo przechodź od razu do swojej lokalizacji.
- Wyszukuj pobliskie nazwane plaże na podstawie danych OpenStreetMap.
- Oglądaj 24-godzinną krzywą pływu z godzinami przypływu i 15-dniowymi liniami odniesienia.
- Porównuj wysokość pływu, porywy wiatru i kierunek wiatru w jednym widoku.
- Przeglądaj daty przeszłe, bieżące i przyszłe z harmonicznym fallbackiem poza oknem danych bezpośrednich.
- Korzystaj z tej samej responsywnej PWA na desktopie, w mobilnej przeglądarce i z ekranu głównego.

## Bezpłatne źródła danych

- Open-Meteo Marine: serie pływu / poziomu morza
- Open-Meteo Forecast: prędkość porywów i kierunek wiatru
- Kafelki OpenStreetMap: mapa bazowa
- Overpass API: wyszukiwanie pobliskich plaż
- Nominatim: geokodowanie wsteczne wybranych punktów

## Podejście prognostyczne

1. Używaj bezpośredniej serii pływu, gdy jest dostępna dla wybranego punktu i daty.
1. Wygładzaj dzienną krzywą monotoniczną interpolacją sześcienną.
1. Uzupełniaj częściowe luki harmonicznie.
1. Przechodź na harmoniczny model pływu, gdy brak danych bezpośrednich.
1. Doprecyzowuj godziny przypływu przez wykrywanie lokalnych ekstremów i interpolację kwadratową.

## Instalacja jako aplikacja

1. Otwórz [https://tide-x.vercel.app](https://tide-x.vercel.app) w Safari, Chrome lub innej nowoczesnej przeglądarce.
1. Użyj `Dodaj do ekranu głównego` albo `Zainstaluj aplikację` z menu przeglądarki.
1. Uruchamiaj TideX jak zwykłą aplikację, zachowując to samo wdrożenie webowe.

## Internacjonalizacja

- Pakiety językowe czasu uruchomienia znajdują się w `locales/` i są ładowane z JSON.
- Repozytorium zawiera 42 pakiety językowe, w tym obsługę RTL dla arabskiego, hebrajskiego i urdu.
- Po edycji plików językowych uruchom `node scripts/generate-locales.mjs`, aby odbudować `locales/index.json`.

## Struktura projektu

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

## Rozwój lokalny

Uruchom katalog główny repozytorium dowolnym serwerem plików statycznych:

```bash
cd TideX
python3 -m http.server 5173
```

Następnie otwórz `http://localhost:5173`.

## Wdrożenie

- Wdróż katalog główny repozytorium na Vercel, Netlify, Cloudflare Pages lub dowolny hosting statyczny.
- Krok budowania nie jest wymagany.
- Aplikacja główna zawiera już manifest PWA, ikony i service worker.

## Zastrzeżenie

- TideX służy do planowania i orientacji na wybrzeżu, a nie do certyfikowanej nawigacji.
- Rzeczywiste warunki mogą się różnić z powodu ciśnienia, fali, przepływu rzek, lokalnej batymetrii i pogody.
