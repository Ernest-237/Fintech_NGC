# NGC Financial Services

## 📱 Plateforme de transactions financières Canada-Afrique

[![React Native](https://img.shields.io/badge/React%20Native-v0.72.4-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2049-black.svg)](https://expo.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Description

NGC Financial Services est une plateforme financière permettant aux utilisateurs d'effectuer des transactions financières entre le Canada et l'Afrique, notamment des transferts d'argent, des recharges de compte et des demandes de prêt personnel. Notre service principal "Direct Money" met en avant les transactions Canada-Afrique, intégrant de nombreuses solutions de paiement locales et internationales telles que Orange Money, MTN Mobile Money, cartes bancaires, PayPal et Interac.

## ✨ Fonctionnalités principales

- 💰 **Transfert d'argent** entre le Canada et plusieurs pays africains
- 💳 **Réapprovisionnement de comptes** (Wallet NGC, comptes bancaires, PayPal)
- 💼 **Demande de prêt personnel** (disponible pour le Canada)
- 👥 **Système de parrainage** avec commissions
- 📊 **Tableau de bord** avec historique des transactions et statistiques
- 🔔 **Système de notifications** en temps réel
- 🛡️ **Sécurité avancée** avec authentification à deux facteurs

## 🔧 Technologies utilisées

- **Frontend Mobile & Web**: React Native avec Expo
- **Backend**: Node.js avec Express
- **Base de données**: MongoDB
- **Authentication**: JWT, OAuth2
- **Paiements**: 
  - Cynetpay (paiements locaux africains)
  - Stripe (cartes bancaires internationales)
  - API PayPal
  - Intégration Mobile Money (Orange Money, MTN Mobile Money)
  - Interac

## 🚀 Installation & Configuration

### Prérequis

- Node.js (v16+)
- Expo CLI
- Git

### Étapes d'installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-organisation/ngc-financial-services.git
cd ngc-financial-services

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec vos clés API et configurations

# Lancer l'application en mode développement
expo start
```

## 📱 Utilisation de l'application

### Pour les clients

1. Téléchargez l'application depuis l'App Store ou Google Play
2. Créez un compte en fournissant les informations requises
3. Complétez votre profil pour débloquer toutes les fonctionnalités
4. Effectuez des transferts, des réapprovisionnements ou demandez un prêt
5. Suivez vos transactions et gérez votre wallet

### Pour les administrateurs

1. Accédez à l'interface d'administration via le web
2. Consultez et gérez les transactions, utilisateurs et demandes de prêt
3. Visualisez les statistiques et rapports

## 🏗️ Structure du projet

```
ngc-financial-services/
├── app/                      # Code source de l'application
│   ├── assets/               # Images, fonts et autres ressources
│   ├── components/           # Composants réutilisables
│   ├── config/               # Configuration de l'application
│   ├── contexts/             # Contextes React (auth, theme, etc.)
│   ├── hooks/                # Hooks personnalisés
│   ├── navigation/           # Configuration de la navigation
│   ├── screens/              # Écrans de l'application
│   ├── services/             # Services API et autres
│   ├── store/                # État global (Redux ou autre)
│   ├── types/                # Définitions TypeScript
│   └── utils/                # Utilitaires et helpers
├── backend/                  # Code serveur (si inclus dans le même repo)
├── docs/                     # Documentation
├── .env.example              # Exemple de variables d'environnement
├── .gitignore                # Fichiers ignorés par Git
├── app.json                  # Configuration Expo
├── App.tsx                   # Point d'entrée de l'application
├── babel.config.js           # Configuration Babel
├── package.json              # Dépendances et scripts
└── README.md                 # Ce fichier
```

## 📝 Guide de développement

### Conventions de code

- Utiliser ESLint et Prettier pour maintenir un code propre et cohérent
- Suivre les principes de l'architecture modulaire
- Documenter les composants et les fonctions clés
- Écrire des tests unitaires pour les fonctionnalités critiques

### Flux de travail Git

1. Créer une branche à partir de `develop` pour chaque nouvelle fonctionnalité
2. Nommer les branches selon le format: `feature/nom-de-la-fonctionnalite`
3. Faire des commits réguliers avec des messages descriptifs
4. Créer une Pull Request pour intégrer les changements à `develop`
5. Après validation, fusionner `develop` dans `main` pour les déploiements

## 🔒 Sécurité

- Authentification à deux facteurs via OTP SMS
- Cryptage des données sensibles
- Expiration automatique des sessions
- Blocage de compte après plusieurs tentatives de PIN incorrectes
- Conformité aux réglementations financières applicables

## 📊 Architecture technique

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Applications   │     │  API Gateway    │     │  Microservices  │
│  Mobile & Web   │◄───►│                 │◄───►│                 │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │                 │
                                               │  Base de données│
                                               │                 │
                                               └─────────────────┘
```

## 📋 Roadmap

- **Phase 1**: Développement de l'application de base avec transferts d'argent et wallet
- **Phase 2**: Ajout du système de commission et de parrainage
- **Phase 3**: Intégration des demandes de prêt personnel
- **Phase 4**: Automatisation des transactions (GIMAC)
- **Phase 5**: Expansion à d'autres marchés et services financiers

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📄 Licence

[MIT License](LICENSE)

## 📞 Contact

NGC Financial Services - [site web](https://www.ngcfinancial.com)

Responsable du projet: Mme Gaëlle NGOGANG - [email](mailto:contact@ngcfinancial.com)

---

© 2025 NGC Financial Services. Tous droits réservés.