# 🎯 Guide Cursor IDE - Favour Afro Hair-Cut

> Guide complet pour développer ce projet dans Cursor

## 🚀 Démarrage Rapide

### 1. Ouvrir le Projet

```bash
# Dans votre terminal
cd favour-afro-haircut-complete
cursor .
```

Ou depuis Cursor :
- File → Open Folder
- Sélectionner `favour-afro-haircut-complete`

### 2. Installer les Dépendances

Dans le terminal intégré de Cursor (Cmd/Ctrl + `):

```bash
npm install
```

### 3. Lancer le Serveur

```bash
npm start
```

Le site s'ouvrira sur **http://localhost:3000**

---

## 📂 Navigation dans le Projet

### Fichiers Principaux

| Fichier | Description | Raccourci Cursor |
|---------|-------------|------------------|
| `public/index.html` | Page HTML principale | `Cmd+P` → "index" |
| `server.js` | Serveur Express | `Cmd+P` → "server" |
| `package.json` | Configuration npm | `Cmd+P` → "package" |

### Dossier src/

```
src/
├── components/    # Styles par composant (header, nav, hero, etc.)
├── styles/        # Styles globaux (variables, reset, utils)
├── scripts/       # Modules JavaScript
└── assets/        # Images et ressources
```

### Accès Rapide

Dans Cursor, utilisez `Cmd/Ctrl + P` puis tapez :
- `header.css` → Styles du header
- `main.js` → JavaScript principal
- `smooth-scroll.js` → Module de scroll
- `hero.jpg` → Image de fond

---

## 🛠️ Fonctionnalités Cursor

### 1. AI Chat (Cmd+L)

Exemples de commandes utiles :

```
"Ajoute un effet de parallaxe au hero"
"Crée une nouvelle section galerie"
"Optimise le CSS de la navigation"
"Ajoute des animations aux services"
"Explique comment fonctionne le module scroll-animation"
```

### 2. Inline Edit (Cmd+K)

Sélectionnez du code et utilisez `Cmd+K` pour :
- Refactoriser le code
- Ajouter des commentaires
- Optimiser des fonctions
- Convertir en ES6

### 3. Composer (Cmd+I)

Pour générer du code complet :
- Nouveau composant
- Nouvelle page
- Module JavaScript
- Styles CSS

### 4. Recherche Intelligente

- `Cmd+P` : Recherche de fichiers
- `Cmd+Shift+F` : Recherche dans tout le projet
- `Cmd+Shift+H` : Recherche et remplacement global

---

## 🎨 Workflow de Développement

### Modifier les Styles

1. **Ouvrir le fichier CSS du composant**
   ```bash
   Cmd+P → "navigation.css"
   ```

2. **Faire les modifications**
   ```css
   nav {
       background: var(--gold); /* Changement rapide */
   }
   ```

3. **Sauvegarder** (Cmd+S)

4. **Rafraîchir le navigateur** (F5)

### Ajouter un Nouveau Composant

1. **Créer le fichier CSS**
   ```bash
   src/components/mon-composant.css
   ```

2. **Créer le module JS (si nécessaire)**
   ```bash
   src/scripts/mon-composant.js
   ```

3. **Importer dans le HTML**
   ```html
   <link rel="stylesheet" href="/components/mon-composant.css">
   ```

4. **Importer dans le JS**
   ```javascript
   import { initMonComposant } from './mon-composant.js';
   ```

### Débugger

1. **Console Browser**
   - Ouvrir DevTools (F12)
   - Voir les logs de `console.log()`

2. **Network Tab**
   - Vérifier le chargement des ressources
   - Voir les erreurs 404

3. **Cursor Debugger**
   - Ajouter des breakpoints
   - Inspecter les variables

---

## 🔧 Raccourcis Clavier Essentiels

### Navigation

| Raccourci | Action |
|-----------|--------|
| `Cmd+P` | Ouvrir un fichier rapidement |
| `Cmd+Shift+P` | Palette de commandes |
| `Cmd+B` | Toggle sidebar |
| `Cmd+\` | Split editor |
| `Cmd+W` | Fermer l'onglet |

### Édition

| Raccourci | Action |
|-----------|--------|
| `Cmd+D` | Sélectionner occurrence suivante |
| `Cmd+Shift+L` | Sélectionner toutes les occurrences |
| `Alt+Click` | Curseurs multiples |
| `Cmd+/` | Commenter/Décommenter |
| `Shift+Alt+F` | Formatter le code |

### Terminal

| Raccourci | Action |
|-----------|--------|
| `Cmd+`` | Toggle terminal |
| `Cmd+Shift+`` | Nouveau terminal |
| `Ctrl+C` | Arrêter le serveur |

---

## 🎯 Tâches Courantes

### 1. Changer les Couleurs du Site

```bash
# Ouvrir
Cmd+P → "main.css"

# Modifier les variables CSS
:root {
    --gold: #VOTRE_COULEUR;
    --dark: #VOTRE_COULEUR;
    --cream: #VOTRE_COULEUR;
}

# Sauvegarder
Cmd+S

# Le site se met à jour automatiquement
```

### 2. Modifier le Texte du Hero

```bash
# Ouvrir
Cmd+P → "index.html"

# Chercher (Cmd+F)
"Coiffure Afro"

# Modifier le texte
# Sauvegarder (Cmd+S)
```

### 3. Ajouter une Animation

```bash
# Ouvrir le CSS du composant
Cmd+P → "services.css"

# Ajouter l'animation
@keyframes monAnimation {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
}

.service-card:hover {
    animation: monAnimation 0.3s ease;
}
```

### 4. Ajouter une Nouvelle Section

Utilisez Cursor AI (Cmd+L) :

```
"Crée une nouvelle section 'Galerie' avec une grille d'images 3x3
et des effets hover élégants qui correspondent au style du site"
```

---

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas

```bash
# Terminal Cursor (Cmd+`)
rm -rf node_modules
npm install
npm start
```

### Les changements CSS ne s'appliquent pas

1. Vérifier que le fichier est sauvegardé (Cmd+S)
2. Rafraîchir avec cache vide : `Cmd+Shift+R`
3. Vérifier la console pour les erreurs

### Les modules JS ne se chargent pas

1. Vérifier que le serveur Express tourne
2. Ouvrir DevTools → Console
3. Vérifier les erreurs d'import

### Erreur "Cannot find module"

```bash
# Vérifier package.json
npm install

# Ou installer un package spécifique
npm install express compression cors
```

---

## 📊 Extensions Cursor Recommandées

Ces extensions sont déjà compatibles avec Cursor :

1. **Live Server** - Rafraîchissement auto
2. **CSS Peek** - Navigation CSS rapide
3. **Path Intellisense** - Autocomplétion des chemins
4. **ES6 Code Snippets** - Snippets JavaScript

---

## 🚀 Workflow Git dans Cursor

### Interface Git Intégrée

1. **Voir les changements**
   - Click sur l'icône Source Control (Cmd+Shift+G)
   
2. **Stage les fichiers**
   - Click sur + à côté des fichiers

3. **Commit**
   - Écrire le message
   - Click ✓ ou `Cmd+Enter`

4. **Push**
   - Click sur ... → Push

### Terminal Git

```bash
# Terminal Cursor
git add .
git commit -m "Description des changements"
git push
```

---

## 💡 Astuces Pro

### 1. Snippets Personnalisés

Créez vos propres snippets pour aller plus vite :

```
Cmd+Shift+P → "Configure User Snippets"
```

### 2. Multi-Cursor

Sélectionnez plusieurs lignes identiques :
1. `Cmd+D` pour sélectionner occurrences
2. Modifiez toutes en même temps

### 3. Refactoring Rapide

1. Sélectionnez une variable/fonction
2. `F2` pour renommer partout
3. Tapez le nouveau nom

### 4. Zen Mode

Pour se concentrer :
```
Cmd+K Z
```

---

## 📝 Checklist Développement

- [ ] Installer les dépendances (`npm install`)
- [ ] Lancer le serveur (`npm start`)
- [ ] Tester sur localhost:3000
- [ ] Modifier et sauvegarder
- [ ] Vérifier dans le navigateur
- [ ] Tester sur mobile
- [ ] Commit les changements
- [ ] Push vers GitHub

---

## 🆘 Aide Rapide

### Commandes Cursor AI

```bash
Cmd+L     # Chat AI
Cmd+K     # Inline edit
Cmd+I     # Composer
```

### Documentation

- Dans Cursor, hover sur une fonction → voir la doc
- `Cmd+Click` sur import → aller à la définition
- `Cmd+Shift+F12` → Voir toutes les références

---

**Happy Coding dans Cursor! 🎉**

Pour toute question, utilisez Cursor AI (Cmd+L) et demandez de l'aide !
