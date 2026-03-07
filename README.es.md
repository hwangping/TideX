# TideX

Mareas en tiempo real y pronóstico para cualquier costa del mundo

Aplicación en línea: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Resumen

TideX ahora es una sola aplicación web desplegada desde la raíz del repositorio. Para usuarios de GitHub, esto significa un único código para escritorio, navegador móvil e instalación en la pantalla de inicio.

## Funciones principales

- Selecciona cualquier punto costero en el mapa o salta a tu ubicación actual.
- Encuentra playas cercanas con nombre usando datos de OpenStreetMap.
- Consulta una curva de marea de 24 horas con marcas de pleamar y líneas de referencia alta/baja de 15 días.
- Compara altura de marea, velocidad de ráfaga y dirección del viento en una sola vista.
- Explora fechas pasadas, actuales y futuras con respaldo armónico fuera de la ventana de datos directos.
- Usa la misma PWA adaptable en escritorio, web móvil y pantalla de inicio.

## Fuentes de datos gratuitas

- Open-Meteo Marine: series de marea / nivel del mar
- Open-Meteo Forecast: velocidad de ráfaga y dirección del viento
- Teselas de OpenStreetMap: mapa base
- Overpass API: búsqueda de playas cercanas
- Nominatim: geocodificación inversa de puntos seleccionados

## Enfoque de predicción

1. Usa la serie directa de marea cuando exista para el punto y la fecha seleccionados.
1. Suaviza la curva diaria con interpolación cúbica monótona.
1. Completa huecos parciales con un modelo armónico.
1. Recurre a un modelo armónico de mareas cuando no hay datos directos.
1. Refina las horas de pleamar con detección de extremos locales e interpolación cuadrática.

## Instalar como app

1. Abre [https://tide-x.vercel.app](https://tide-x.vercel.app) en Safari, Chrome u otro navegador moderno.
1. Usa `Añadir a pantalla de inicio` o `Instalar aplicación` desde el menú del navegador.
1. Inicia TideX como una app normal manteniendo el mismo despliegue web.

## Internacionalización

- Los paquetes de idioma en tiempo de ejecución viven en `locales/` y se cargan desde JSON.
- El repositorio incluye 42 idiomas, con soporte RTL para árabe, hebreo y urdu.
- Ejecuta `node scripts/generate-locales.mjs` después de editar idiomas para reconstruir `locales/index.json`.

## Estructura del proyecto

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

## Desarrollo local

Sirve la raíz del repositorio con cualquier servidor estático:

```bash
cd TideX
python3 -m http.server 5173
```

Después abre `http://localhost:5173`.

## Despliegue

- Despliega la raíz del repositorio en Vercel, Netlify, Cloudflare Pages o cualquier hosting estático.
- No se requiere paso de compilación.
- La aplicación raíz ya incluye manifiesto PWA, iconos y service worker.

## Aviso

- TideX sirve para planificar y entender la playa, no como sistema certificado de navegación.
- Las condiciones reales pueden variar por presión, oleaje, caudal fluvial, batimetría local y tiempo atmosférico.
