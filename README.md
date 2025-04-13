# 🌟 Portfolio Personnel - Frontend (React + Vite)

Ce projet est un **portfolio personnel** moderne et responsive, développé avec **React** et **Vite**, mettant en avant mes compétences, mes projets, mon parcours, et incluant un **formulaire de contact** fonctionnel pour permettre aux visiteurs de me joindre facilement.

---

## 🛠️ Technologies utilisées

- **React** – Pour construire l’interface utilisateur de manière déclarative.
- **Vite** – Pour un développement rapide avec une expérience moderne.
- **React Router** – Pour la navigation entre les sections/pages du site.
- **Tailwind CSS** ou **CSS modules** – Pour un design propre et personnalisable.
- **Fetch API** – Pour envoyer les messages du formulaire de contact au backend (ex: FastAPI).
- **EmailJS** *(optionnel)* – Alternative si tu veux éviter un backend pour l'envoi des mails.

---

## ✨ Fonctionnalités

- **Section Accueil** – Présentation rapide et slogan d’accroche.
- **À propos** – Informations sur moi, mes valeurs, mes passions.
- **Compétences** – Liste de mes langages, outils et technologies.
- **Projets** – Galerie de projets avec descriptions et liens (GitHub, démo).
- **Formulaire de contact** – Permet aux visiteurs d’envoyer un message personnalisé.
- **Design responsive** – Optimisé pour desktop, tablette et mobile.

---

## 🚀 Installation et exécution du projet

1. **Cloner le dépôt du projet**

   Commencez par cloner le dépôt Git contenant le projet frontend.

2. **Se rendre dans le dossier du projet**

   Utilisez votre terminal pour naviguer vers le dossier cloné.

3. **Installer les dépendances**

   Exécutez la commande `npm install` afin d’installer toutes les dépendances nécessaires.

4. **Démarrer le serveur de développement**

   Lancez le projet avec la commande `npm run dev`.  
   Par défaut, l'application sera accessible sur `http://localhost:5173`.

---

## 📡 Connexion au backend

Ce frontend est conçu pour interagir avec une API FastAPI accessible à l’adresse suivante : `http://localhost:8000/contact`.

Assurez-vous que :

- Le backend est bien lancé à cette adresse.
- Le middleware CORS du backend autorise l'origine `http://localhost:5173`.

---

## 🧩 Structure du projet

Le projet est structuré de la manière suivante :

- `src/App.jsx` : contient le formulaire de contact et la logique d'envoi via `fetch`.
- `vite.config.js` : configuration du serveur de développement Vite.
- `public/` : dossier pour les fichiers statiques.
- `package.json` : liste des dépendances et scripts.

---

## 📝 Fonctionnalité du formulaire

Le formulaire contient les champs suivants :

- Nom
- Email
- Sujet
- Message

Lors de la soumission, les données sont envoyées au backend via une requête HTTP `POST`.  
Une fois le message traité, une réponse s'affiche à l’utilisateur pour confirmer l’envoi ou signaler une erreur.

---

## 🔐 Sécurité et validation

- Les champs sont requis avant la soumission.
- Le backend devrait inclure des validations supplémentaires et une protection contre le spam ou les injections.

---

## 🧪 Tests et vérification

Avant de mettre en production :

- Vérifiez que la communication avec l’API fonctionne correctement.
- Testez les cas de réussite et d’échec (ex. backend hors ligne).
- Ajoutez éventuellement un système de chargement ou de validation visuelle.

---

## 🌐 Déploiement

Pour déployer le frontend, vous pouvez utiliser :

- **Vercel**
- **Netlify**
- **GitHub Pages** (avec `vite-plugin-gh-pages`)
- **Render**

N’oubliez pas de configurer l’URL de l’API backend en fonction de l’environnement (`.env` ou variable d’environnement publique dans Vite).

---

## 🙋 Auteur

Projet développé par : _kiboyou Mohamed OUATTARA_  
Contact : _ouattarakiboyoumohamed@gmail.com - +225 0759239686 / +216 58486482_

---

## 📄 Licence

Ce projet est sous licence **LICENCE**. Vous êtes libre de le modifier et de le redistribuer.

