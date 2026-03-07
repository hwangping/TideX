# TideX

Marées en temps réel et prévisions pour toutes les côtes du monde

Application en ligne: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Présentation

TideX est désormais une seule application web de marées déployée depuis la racine du dépôt. Pour les utilisateurs GitHub, cela signifie une base de code unique pour le bureau, le navigateur mobile et l'installation sur l'écran d'accueil.

## Points forts

- Choisir n'importe quel point côtier sur la carte ou revenir à la position actuelle.
- Trouver des plages nommées à proximité à partir des données OpenStreetMap.
- Afficher une courbe de marée sur 24 heures avec heures de pleine mer et lignes de référence sur 15 jours.
- Comparer hauteur de marée, rafales et direction du vent dans la même vue.
- Parcourir dates passées, présentes et futures avec repli harmonique hors des fenêtres de données directes.
- Utiliser la même PWA responsive sur ordinateur, web mobile et écran d'accueil.

## Sources de données gratuites

- Open-Meteo Marine : séries de marée / niveau marin
- Open-Meteo Forecast : vitesse des rafales et direction du vent
- Tuiles OpenStreetMap : carte de base
- Overpass API : recherche de plages proches
- Nominatim : géocodage inverse des points sélectionnés

## Approche de prévision

1. Utiliser la série de marée directe lorsqu'elle existe pour le point et la date choisis.
1. Lisser la courbe quotidienne avec une interpolation cubique monotone.
1. Combler les lacunes partielles avec une complétion harmonique.
1. Basculer sur un modèle harmonique quand les données directes sont absentes.
1. Affiner les heures de pleine mer via détection d'extrêmes locaux et interpolation quadratique.

## Installer comme application

1. Ouvrir [https://tide-x.vercel.app](https://tide-x.vercel.app) dans Safari, Chrome ou un navigateur moderne.
1. Utiliser `Ajouter à l'écran d'accueil` ou `Installer l'application` depuis le menu du navigateur.
1. Lancer TideX comme une application classique tout en conservant le même déploiement web.

## Internationalisation

- Les packs de langue d'exécution se trouvent dans `locales/` et sont chargés depuis des fichiers JSON.
- Le dépôt inclut 42 langues, avec prise en charge RTL pour l'arabe, l'hébreu et l'ourdou.
- Après modification des fichiers de langue, exécuter `node scripts/generate-locales.mjs` pour reconstruire `locales/index.json`.

## Structure du projet

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

## Développement local

Servir la racine du dépôt avec n'importe quel serveur de fichiers statiques :

```bash
cd TideX
python3 -m http.server 5173
```

Puis ouvrir `http://localhost:5173`.

## Déploiement

- Déployer la racine du dépôt sur Vercel, Netlify, Cloudflare Pages ou tout hébergement statique.
- Aucune étape de build n'est nécessaire.
- L'application racine inclut déjà le manifeste PWA, les icônes et le service worker.

## Avertissement

- TideX sert à la planification et à l'information littorale, pas à la navigation certifiée.
- Les conditions réelles peuvent varier selon la pression, la houle, le débit fluvial, la bathymétrie locale et la météo.
