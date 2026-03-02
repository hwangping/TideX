# TideX

TideX est une application web de marées conçue en priorité pour mobile. Les utilisateurs peuvent y accéder directement depuis leur navigateur téléphone (déjà déployée sur Vercel), choisir n'importe quel point côtier sur la carte, visualiser la tendance du niveau de la mer et consulter les heures exactes de marée haute.

## Accès en ligne

- Production (Vercel) : `https://tide-x.vercel.app`

## Positionnement du projet

- Public cible : surf, pêche côtière, activités portuaires, sorties en bord de mer
- Valeur principale : sélection globale des points, visualisation claire, UX fluide, sans installation
- Déploiement : frontend statique pur, hébergement facile sur Vercel/GitHub Pages/Netlify

## Fonctionnalités principales

- Sélection d'un point côtier n'importe où dans le monde
- Géolocalisation automatique de l'utilisateur
- Liste des plages proches via OpenStreetMap
- Courbe de marée sur 24 heures
- Marquage des heures de marée haute sur la courbe
- Navigation temporelle : passé, présent et futur
- Repli automatique sur une prévision harmonique si la série directe est indisponible
- Interface multilingue : 12 langues

## Expérience mobile

- Mise en page responsive optimisée iPhone/Android
- Interactions tactiles pour carte, curseur et boutons
- Design moderne, lisible en extérieur
- Frontend léger et interaction fluide

## Sources de données et logique de prévision (100 % gratuites)

- Série marée/niveau marin : Open-Meteo Marine API
- Tuiles de carte : OpenStreetMap
- POI plages : OpenStreetMap Overpass API
- Géocodage inverse : Nominatim
- Prévision : ajustement harmonique à partir de séries historiques si besoin

## Algorithme de Prévision (Résumé)

TideX suit une stratégie en deux étapes : données directes d'abord, modèle de repli ensuite.

- Série directe en priorité : si une série horaire existe pour la date cible, elle est utilisée telle quelle.
- Lissage de courbe : la série horaire est densifiée par interpolation cubique monotone.
- Repli prédictif : si la série directe manque, TideX ajuste un modèle harmonique à partir de l'historique.
- Méthode d'ajustement : plusieurs composantes de marée (sinus/cosinus) sont résolues par moindres carrés.
- Heure de marée haute : les extrema locaux sont détectés puis raffinés par interpolation quadratique.

## Stack technique

- Frontend : HTML + CSS + JavaScript
- Carte : Leaflet
- Graphique : ECharts
- Gestion du temps : Luxon
- Déploiement : Vercel (statique)

## Développement local

```bash
cd TideX
python3 -m http.server 5173
```

Ouvrir : `http://localhost:5173`

## Recommandations de déploiement Vercel

- Framework Preset : `Other`
- Build Command : vide (site statique)
- Output Directory : vide (racine du projet)
- HTTPS activé recommandé (géolocalisation plus fiable)

## README dans d'autres langues

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

## Avertissement

- Ce projet est destiné à la planification et à la consultation.
- Ne pas l'utiliser comme source unique pour la navigation ou la sécurité.
- Les conditions réelles peuvent différer selon le vent, la pression et la topographie locale.
