# TideX

TideX es una app web global de mareas diseñada con enfoque mobile-first. Los usuarios pueden abrirla directamente en el navegador del teléfono (ya desplegada en Vercel), elegir cualquier punto costero en el mapa y consultar la tendencia del nivel del mar y las horas exactas de pleamar.

## Acceso en línea

- Producción (Vercel): `https://tide-x.vercel.app`

## Enfoque del proyecto

- Usuarios objetivo: surf, pesca costera, viajes de playa, actividades portuarias
- Valor principal: selección global, visualización clara, UX fluida, sin instalación
- Despliegue: frontend estático puro, fácil de alojar en Vercel/GitHub Pages/Netlify

## Funcionalidades principales

- Selección global de punto costero en el mapa
- Geolocalización automática del usuario
- Lista de playas cercanas desde OpenStreetMap
- Curva de marea de 24 horas
- Marcado de horas de pleamar en la curva
- Selección de fecha/hora en pasado, presente y futuro
- Predicción armónica de respaldo cuando no hay serie directa
- Interfaz multilingüe: 12 idiomas

## Experiencia móvil

- Diseño responsive para iPhone y Android
- Interacciones táctiles optimizadas
- Interfaz moderna y legible en exteriores
- Frontend liviano con respuesta fluida

## Fuentes de datos y lógica de predicción (todo gratis)

- Serie de nivel del mar/marea: Open-Meteo Marine API
- Mapa base: OpenStreetMap
- POI de playas: OpenStreetMap Overpass API
- Geocodificación inversa: Nominatim
- Predicción: ajuste armónico con series históricas cuando falta el día objetivo

## Algoritmo de Predicción (Resumen)

TideX aplica una estrategia de dos etapas: datos directos primero y modelo de respaldo después.

- Serie directa primero: si existe una serie horaria para la fecha elegida, se usa directamente.
- Suavizado de curva: la serie horaria se densifica con interpolación cúbica monótona.
- Respaldo predictivo: si faltan datos directos, TideX ajusta un modelo armónico con datos históricos.
- Método de ajuste: se estiman múltiples constituyentes de marea (bases seno/coseno) por mínimos cuadrados.
- Hora de pleamar: se detectan extremos locales y se refinan con interpolación cuadrática.

## Stack técnico

- Frontend: HTML + CSS + JavaScript
- Mapa: Leaflet
- Gráficas: ECharts
- Manejo de tiempo: Luxon
- Despliegue: Vercel (hosting estático)

## Desarrollo local

```bash
cd TideX
python3 -m http.server 5173
```

Abrir: `http://localhost:5173`

## Recomendaciones para Vercel

- Framework Preset: `Other`
- Build Command: vacío (sitio estático)
- Output Directory: vacío (raíz del proyecto)
- HTTPS habilitado para geolocalización más estable

## README en otros idiomas

- English: [`README.en.md`](./README.en.md)
- 简体中文: [`README.zh-CN.md`](./README.zh-CN.md)
- 繁體中文: [`README.zh-TW.md`](./README.zh-TW.md)
- 日本語: [`README.ja.md`](./README.ja.md)
- 한국어: [`README.ko.md`](./README.ko.md)
- Français: [`README.fr.md`](./README.fr.md)
- Español: [`README.es.md`](./README.es.md)
- Deutsch: [`README.de.md`](./README.de.md)
- Italiano: [`README.it.md`](./README.it.md)
- Tiếng Việt: [`README.vi.md`](./README.vi.md)
- ไทย: [`README.th.md`](./README.th.md)
- Bahasa Melayu: [`README.ms.md`](./README.ms.md)

## Aviso

- Este proyecto es solo para referencia y planificación.
- No debe usarse como fuente única para navegación o seguridad.
- Las condiciones reales pueden variar por viento, presión y topografía local.
