# Nimba Hospitality Group — site web

Site vitrine de **Nimba Hospitality Group** (Conakry, Guinée) — *L'art de vous recevoir*.
Construit avec [Astro](https://astro.build) (site statique), déployé sur **GitHub Pages**.

## Pages

| URL | Contenu |
| --- | --- |
| `/` | Accueil : diaporama, le groupe, expertises, destinations, 4 régions, ancrage, méthode, contact |
| `/groupe` | Manifeste, origine du nom, valeurs, vision |
| `/expertises` | Développement hôtelier · Gestion & hospitalité · Restauration & art de vivre |
| `/destinations` | 14 sites touristiques de Guinée, filtrables par région |
| `/destinations/<site>` | Fiche détaillée de chaque site (infos pratiques, incontournables, galerie) |
| `/contact` | Coordonnées, carte, formulaire |
| `/credits` | Crédits et licences des photos |

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le site dans dist/
npm run preview    # prévisualise dist/
```

## Mettre en ligne sur GitHub Pages

1. Créez un dépôt sur GitHub (ex. `nimba-hospitality`) et poussez ce dossier sur la branche `main` :
   ```bash
   git init
   git add .
   git commit -m "Site Nimba Hospitality Group"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/nimba-hospitality.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque push sur `main`
   (onglet **Actions** pour suivre). Adresse : `https://<votre-compte>.github.io/nimba-hospitality/`.

### Nom de domaine personnalisé (ex. `nimbahospitality.com`)

**Settings → Pages → Custom domain**, puis chez votre registrar :
- domaine racine : enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` ;
- sous-domaine `www` : enregistrement `CNAME` vers `<votre-compte>.github.io`.

Relancez ensuite le workflow : les chemins du site s'adaptent automatiquement (aucune modification de code).

## Modifier le contenu

- **Coordonnées, e-mail, téléphone, WhatsApp, réseaux sociaux** : `src/config.ts`
- **Destinations et régions** (textes, infos pratiques, photos) : `src/data/destinations.ts`
- **Textes des pages** : `src/pages/*.astro`
- **Couleurs et typographies** : `src/styles/global.css` (variables en tête de fichier)

### Formulaire de contact

GitHub Pages n'exécute pas de code serveur. Par défaut, le formulaire ouvre la messagerie du visiteur avec le
message prérempli. Pour recevoir les messages directement : créez un formulaire gratuit sur
[Formspree](https://formspree.io), puis collez son URL dans `formEndpoint` (`src/config.ts`).

## Photos

Les photos sont dans `src/assets/photos/` (optimisées automatiquement en WebP et en plusieurs tailles au build).
Elles proviennent de Wikimedia Commons sous licences Creative Commons (CC BY / CC BY-SA) : **le crédit de l'auteur
doit rester affiché** (sur chaque photo et sur `/credits`). Les métadonnées sont dans `src/data/photo-credits.json`.

Pour utiliser vos propres photos : déposez `mon-image.jpg` dans `src/assets/photos/` et référencez-la par son nom
(`mon-image`) dans `destinations.ts` ou dans une page. Une photo sans entrée dans `photo-credits.json`
s'affiche sans crédit.

## Logo

Le logo est redessiné en vectoriel (tracés, sans dépendance de police) par `scripts/build-logo.mjs` :

- `public/brand/nhg-logo.svg` / `nhg-logo-white.svg` — logo complet (fond clair / fond sombre)
- `public/brand/nhg-monogram.svg` / `nhg-monogram-white.svg` — monogramme NHG
- `public/brand/nhg-logo.png` — version PNG 1600 px
- `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`

Pour le régénérer après une modification : `npm run logo`.
