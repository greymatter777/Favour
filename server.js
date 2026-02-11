const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compression GZIP
app.use(cors()); // CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// Servir les assets depuis src
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/styles', express.static(path.join(__dirname, 'src/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'src/scripts')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route 404
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log('═══════════════════════════════════════════════════');
    console.log('  🚀 Favour Afro Hair-Cut - Serveur démarré');
    console.log('═══════════════════════════════════════════════════');
    console.log(`  📍 URL locale: http://localhost:${PORT}`);
    console.log(`  🌐 Réseau: http://[votre-ip]:${PORT}`);
    console.log('═══════════════════════════════════════════════════');
    console.log('  Appuyez sur Ctrl+C pour arrêter le serveur');
    console.log('═══════════════════════════════════════════════════\n');
});

// Gestion de la fermeture propre
process.on('SIGTERM', () => {
    console.log('\n🛑 Arrêt du serveur...');
    process.exit(0);
});
