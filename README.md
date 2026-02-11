# 🚀 Favour Afro Hair-Cut - Landing Page

> Projet web professionnel avec architecture modulaire pour Cursor IDE

## 📦 Structure du Projet

```
favour-afro-haircut-complete/
├── src/                          # Code source
│   ├── components/               # Composants CSS
│   │   ├── header.css
│   │   ├── navigation.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── pricing.css
│   │   ├── testimonials.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── styles/                   # Styles globaux
│   │   └── main.css
│   ├── scripts/                  # Modules JavaScript
│   │   ├── main.js
│   │   ├── smooth-scroll.js
│   │   ├── scroll-animation.js
│   │   ├── mobile-menu.js
│   │   └── scroll-to-top.js
│   └── assets/                   # Assets statiques
│       └── images/
│           └── hero.jpg
├── public/                       # Fichiers publics
│   └── index.html
├── config/                       # Configuration (vide pour l'instant)
├── server.js                     # Serveur Express
├── package.json                  # Dépendances npm
├── .gitignore                   # Git ignore
└── README.md                     # Ce fichier
```

## 🎯 Installation et Lancement

### Prérequis
- Node.js >= 14.0.0
- npm >= 6.0.0

### Installation

```bash
# 1. Ouvrir dans Cursor
cursor .

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

Le site sera accessible sur **http://localhost:3000**

### Commandes Disponibles

```bash
npm start          # Démarre le serveur Express (port 3000)
npm run dev        # Alias pour npm start
npm run watch      # Démarre avec nodemon (redémarrage auto)
npm run serve      # Serveur statique simple
npm run build      # Prépare pour production
npm run preview    # Prévisualisation (port 8080)
```

## 🏗️ Architecture

### Modularité

Le projet est organisé en modules pour faciliter la maintenance :

**CSS Modulaire** : Chaque composant a son propre fichier CSS
- `/src/components/*.css` : Styles par composant
- `/src/styles/main.css` : Variables et styles globaux

**JavaScript Modulaire** : Code organisé en modules ES6
- `/src/scripts/main.js` : Point d'entrée
- `/src/scripts/*.js` : Modules individuels (scroll, menu, etc.)

### Serveur Express

Le fichier `server.js` fournit :
- Serveur de développement local
- Compression GZIP
- Support CORS
- Routes statiques optimisées

## 🎨 Personnalisation

### Modifier les Couleurs

Éditer `src/styles/main.css` :

```css
:root {
    --gold: #D4A574;
    --dark: #1a1a1a;
    --cream: #F5E6D3;
    --white: #ffffff;
}
```

### Modifier un Composant

Chaque composant a son propre fichier CSS dans `src/components/`.
Par exemple, pour modifier le header :

```bash
# Éditer
src/components/header.css
```

### Ajouter un Nouveau Module JS

1. Créer le module dans `src/scripts/`
2. L'importer dans `src/scripts/main.js`
3. L'initialiser dans le `DOMContentLoaded`

Exemple :

```javascript
// src/scripts/mon-module.js
export function initMonModule() {
    console.log('Module initialisé!');
}

// src/scripts/main.js
import { initMonModule } from './mon-module.js';

document.addEventListener('DOMContentLoaded', () => {
    initMonModule();
});
```

## 🔧 Développement dans Cursor

### Fonctionnalités Cursor

1. **Autocomplétion intelligente** : Cursor comprend la structure modulaire
2. **Navigation rapide** : Cmd/Ctrl + P pour ouvrir n'importe quel fichier
3. **Refactoring** : Renommer facilement variables et fonctions
4. **Terminal intégré** : Utilisez le terminal intégré pour npm

### Raccourcis Utiles

```
Cmd/Ctrl + P       : Recherche rapide de fichiers
Cmd/Ctrl + Shift + F : Recherche dans tout le projet
Cmd/Ctrl + `       : Terminal
Cmd/Ctrl + B       : Toggle sidebar
```

## 🌐 Déploiement

### Option 1 : Netlify

```bash
# Drag & drop le dossier "public" sur netlify.com
# Ou via CLI :
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2 : Vercel

```bash
npm install -g vercel
vercel --prod
```

### Option 3 : Serveur traditionnel

Copier le contenu de `public/` et `src/` sur votre serveur web.

## 📱 Tests

### Tester Localement

```bash
npm start
# Ouvrir http://localhost:3000
```

### Tester sur Mobile

1. Trouver votre IP locale :
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig | grep inet
   ```

2. Sur mobile (même WiFi) : `http://VOTRE-IP:3000`

## 🔍 SEO

Le site inclut :
- Meta tags optimisés
- Structure sémantique HTML5
- Balises Open Graph
- Attributs ARIA pour l'accessibilité

## 📝 Git Workflow

```bash
# Initialiser Git
git init

# Premier commit
git add .
git commit -m "Initial commit"

# Connecter à GitHub
git remote add origin <URL>
git push -u origin main
```

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas

```bash
# Vérifier Node.js
node --version

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Port déjà utilisé

```bash
# Tuer le processus sur le port 3000
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Les modules JS ne se chargent pas

Vérifier que le serveur Express fonctionne (pas juste ouvrir index.html).

## 📚 Ressources

- [Documentation Express](https://expressjs.com/)
- [Modules ES6](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)
- [CSS Variables](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)

## 📄 Licence

MIT © 2026 Favour Afro Hair-Cut

---

**Développé pour Cursor IDE** 💻✨
