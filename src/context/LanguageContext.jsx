import { createContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  fr: {
    nav: { hero: 'Accueil', about: 'À propos', cv: 'CV', portfolio: 'Portfolio', services: 'Services', contact: 'Contact' },
    hero: { heading: 'Je suis Kiboyou Mohamed OUATTARA', imgAlt: 'Image de présentation' },
    typed: [
      'Certified Associate in Python Programming - PCAP',
      'Freelancer',
      'Développeur Python',
      'Développeur web FullStack',
      'Élève Ingénieur en Data Science et Machine Learning',
      "Passionné par l'IA et le Machine Learning"
    ],
    about: {
      heading: 'À propos de moi',
      labels: {
        name: 'Nom', email: 'Email', phone: 'Téléphone', address: 'Adresse', languages: 'Langues', availability: 'Disponibilité', linkedin: 'Lien LinkedIn', github: 'Lien GitHub'
      },
      values: {
        languages: 'Français, Anglais', availability: 'Immédiate', address: 'Tunis, Tunisie'
      },
      description: `Développeur Web Fullstack passionné, je conçois des solutions numériques performantes et intuitives, aussi bien côté front-end (React.js, HTML/CSS, JavaScript) que back-end (Python, Django, Django REST Framework). Mes projets vont de la gestion de dossiers médicaux à des plateformes de réservation, en passant par la gestion de restaurants, laboratoires et agences de location.\nCurieux et rigoureux, je maîtrise Git, Docker, AWS ainsi que la conception de bases de données. J’évolue aisément en méthode Agile/SCRUM et j’apprécie les environnements collaboratifs, même à distance.\nÉtudiant en dernière année de cycle ingénieur en Data Science & Machine Learning à TEK-UP University (Tunis). Passionné par l’IA appliquée, le Machine Learning et le MLOps, je souhaite mettre mes compétences techniques et analytiques au service de projets innovants en entreprise.`
    },
    resume: {
      title: 'Mon parcours académique.',
      formation: 'Formation',
      certifications: 'Certifications',
      showAll: 'Voir toutes mes certifications',
      hideAll: 'Masquer les autres',
      cvFr: 'Télécharger mon CV en français',
      cvEn: 'Download my CV in English',
      highlightDesc: `Démontre la capacité à réaliser des tâches de programmation couvrant les bases du langage Python et les notions fondamentales de la POO (structures de contrôle, OOP, modules).`,
      formationItems: [
        { title: 'Cycle Ingénieur en DataScience', period: '2023 - 2026', school: "Ecole Supérieure Privée de Technologie et d'Ingénierie TEKUP, Tunis" },
        { title: 'Licence en Technologie du Web et Image Numériques (TWIN)', period: '2020 - 2023', school: "Ecole Supérieure Africaine des TIC (ESATIC), Centre d'Excellence UIT, Côte d'Ivoire" }
      ],
      otherCertLink: 'Voir la certification',
      badge: 'Badge / Détails',
      otherCerts: [
        { title: 'Python (Basic) – HackerRank', year: '2024', desc: 'Résolution de problèmes simples : boucles, fonctions, structures de contrôle, types de base.', link: 'https://www.hackerrank.com/certificates/a7c0a550f92c' },
        { title: 'SQL (Basic) – HackerRank', year: '2024', desc: 'Requêtes SQL fondamentales : SELECT, WHERE, JOIN, GROUP BY.', link: 'https://www.hackerrank.com/certificates/b672eb7f89c3' },
        { title: 'Comprendre le Web – OpenClassrooms', year: '2024', desc: 'Modèle client-serveur, HTTP, navigateurs, hébergement.', link: 'https://openclassrooms.com/fr/course-certificates/7146256839' },
        { title: 'Créez votre site web avec HTML5 et CSS3 – OpenClassrooms', year: '2024', desc: 'Structuration HTML, styles CSS, bonnes pratiques de base.', link: 'https://openclassrooms.com/fr/course-certificates/5342739109' },
        { title: 'Débutez avec les API REST – OpenClassrooms', year: '2024', desc: 'Méthodes HTTP, endpoints, sérialisation, DRF.', link: 'https://openclassrooms.com/fr/course-certificates/1862465337' },
        { title: 'Allez plus loin avec le framework Django – OpenClassrooms', year: '2024', desc: 'Permissions, sécurité, middleware, optimisation & déploiement.', link: 'https://openclassrooms.com/fr/course-certificates/4282622357' },
        { title: 'Écrivez du JavaScript pour le web – OpenClassrooms', year: '2024', desc: 'DOM, événements, logique interactive.', link: 'https://openclassrooms.com/fr/course-certificates/4220531526' },
        { title: 'Simplifiez-vous le CSS avec Sass – OpenClassrooms', year: '2024', desc: 'Organisation, variables, mixins, réutilisabilité.', link: 'https://openclassrooms.com/fr/course-certificates/9515935686' },
        { title: 'Apprenez les bases du langage Python – OpenClassrooms', year: '2024', desc: 'Bases : variables, fonctions, listes, dictionnaires.', link: 'https://openclassrooms.com/fr/course-certificates/2837768967' },
        { title: 'Apprenez la programmation orientée objet avec Python – OpenClassrooms', year: '2024', desc: 'Classes, héritage, encapsulation, polymorphisme.', link: 'https://openclassrooms.com/fr/course-certificates/1628079851' },
        { title: 'Débutez avec le framework Django – OpenClassrooms', year: '2024', desc: 'Modèles, vues, templates, ORM, admin.', link: 'https://openclassrooms.com/fr/course-certificates/9394370827' },
        { title: 'Comprendre le Bitcoin et la Blockchain – OpenClassrooms', year: '2024', desc: 'Concepts blockchain, cryptomonnaies, sécurité décentralisée.', link: 'https://openclassrooms.com/fr/course-certificates/1928553286' },
        { title: 'Gérez du code avec Git et GitHub – OpenClassrooms', year: '2024', desc: 'Branches, commits, collaboration, workflows.', link: 'https://openclassrooms.com/fr/course-certificates/6823575302' }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: "N'hésitez pas à me contacter pour toute question ou opportunité.",
      address: 'Adresse',
      callMe: 'Appelez-moi',
      emailMe: 'Envoyez-moi un email',
      placeholders: { name: 'Votre Nom', email: 'Votre Email', subject: 'Objet', message: 'Message' },
      send: 'Envoyer',
      sending: 'Chargement...',
      success: 'Le message a été envoyé avec succès !',
      error: 'Une erreur est survenue. Veuillez réessayer.'
    },
    services: {
      title: 'Mes Services',
      intro: 'Découvrez les services que je propose pour répondre à vos besoins spécifiques en développement et technologie.',
      items: [
        { title: 'Développement Backend', desc: "Création d'API robustes et évolutives, gestion des bases de données et intégration de services (Django, Spring Boot, Node.js).", icon: 'bi bi-code-slash' },
        { title: 'Développement Frontend', desc: 'Conception de sites web interactifs et dynamiques (React, Vue.js, Angular) pour une UX optimale.', icon: 'bi bi-laptop' },
        { title: "Design d'Interface Utilisateur (UI)", desc: "Création de designs modernes et intuitifs garantissant une expérience fluide.", icon: 'bi bi-ui-checks-grid' },
        { title: 'Gestion de Projet', desc: 'Suivi agile, planification, coordination et livraison orientée valeur.', icon: 'bi bi-clipboard-data' },
        { title: 'Machine Learning', desc: "Solutions d'apprentissage automatique pour extraire des insights et améliorer vos décisions.", icon: 'bi bi-pc' },
        { title: 'Automatisation de Tâches', desc: 'Optimisation des processus internes via des scripts et pipelines automatisés.', icon: 'bi bi-gear-wide-connected' }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Quelques exemples de mes réalisations et projets.',
      seeMore: 'Voir plus de réalisations'
    },
    footer: {
      rights: 'Tous Droits Réservés'
    },
    skills: {
      title: 'Compétences Techniques (Estimations)',
      items: [
        { name: 'Python', percentage: 70 },
        { name: 'Django / DRF', percentage: 65 },
        { name: 'React.js / React Native', percentage: 70 },
        { name: 'JavaScript', percentage: 60 },
        { name: 'HTML/CSS', percentage: 80 },
        { name: 'Java / SpringBoot', percentage: 60 },
        { name: 'SQL / Bases de Données (UML)', percentage: 75 },
        { name: 'Git / GitHub / GitLab', percentage: 75 },
        { name: 'Docker', percentage: 50 },
        { name: 'AWS', percentage: 50 },
        { name: 'SCRUM', percentage: 70 },
        { name: 'Conception UX/UI', percentage: 65 },
        { name: 'DevOps', percentage: 50 },
        { name: 'Machine Learning', percentage: 50 },
        { name: 'Big Data', percentage: 50 },
        { name: 'Data Science', percentage: 50 }
      ]
    },
    projectDetail: {
      notfoundTitle: 'Projet introuvable',
      notfoundMessage: 'Désolé, le projet que vous recherchez n\'existe pas.',
      breadcrumbHome: 'Accueil',
      techUsed: 'Technologies utilisées :',
      features: 'Fonctionnalités principales :',
      collaborators: 'Collaborateurs :',
      projectInfo: 'Informations sur le Projet',
      category: 'Catégorie',
      client: 'Client',
      projectDate: 'Date du Projet',
      projectUrl: 'URL du Projet :',
      visitSite: 'Visiter le Site Web',
      viewDetail: 'Voir Détail'
    }
  },
  en: {
    nav: { hero: 'Home', about: 'About', cv: 'Resume', portfolio: 'Portfolio', services: 'Services', contact: 'Contact' },
    hero: { heading: 'I am Kiboyou Mohamed OUATTARA', imgAlt: 'Presentation image' },
    typed: [
      'Certified Associate in Python Programming - PCAP',
      'Freelancer',
      'Python Developer',
      'Full Stack Web Developer',
      'Data Science & Machine Learning Engineering Student',
      'Passionate about AI and Machine Learning'
    ],
    about: {
      heading: 'About Me',
      labels: {
        name: 'Name', email: 'Email', phone: 'Phone', address: 'Address', languages: 'Languages', availability: 'Availability', linkedin: 'LinkedIn', github: 'GitHub'
      },
      values: {
        languages: 'French, English', availability: 'Immediate', address: 'Tunis, Tunisia'
      },
      description: `Passionate Fullstack Web Developer building performant and intuitive digital solutions on both frontend (React.js, HTML/CSS, JavaScript) and backend (Python, Django, Django REST Framework). Projects span medical record management, booking platforms, restaurant & lab systems, and car rental apps.\nCurious and rigorous, proficient with Git, Docker, AWS and database design. Comfortable with Agile/SCRUM and remote collaboration.\nFinal-year Engineering student in Data Science & Machine Learning at TEK-UP University (Tunis). Enthusiastic about applied AI, Machine Learning and MLOps, seeking to contribute technical and analytical skills to innovative company projects.`
    },
    resume: {
      title: 'My academic journey.',
      formation: 'Education',
      certifications: 'Certifications',
      showAll: 'Show all certifications',
      hideAll: 'Hide others',
      cvFr: 'Download my CV in French',
      cvEn: 'Download my CV in English',
      highlightDesc: 'Demonstrates ability to perform coding tasks covering Python basics and fundamental OOP concepts (control flow, OOP, modules).',
      formationItems: [
        { title: 'Engineering Degree in Data Science', period: '2023 - 2026', school: 'TEKUP Higher School of Technology & Engineering, Tunis' },
        { title: 'Bachelor in Web Technologies & Digital Imaging (TWIN)', period: '2020 - 2023', school: 'ESATIC – ITU Excellence Center, Côte d\'Ivoire' }
      ],
      otherCertLink: 'View certification',
      badge: 'Badge / Details',
      otherCerts: [
        { title: 'Python (Basic) – HackerRank', year: '2024', desc: 'Solving simple problems: loops, functions, control flow, basic types.', link: 'https://www.hackerrank.com/certificates/a7c0a550f92c' },
        { title: 'SQL (Basic) – HackerRank', year: '2024', desc: 'Fundamental SQL queries: SELECT, WHERE, JOIN, GROUP BY.', link: 'https://www.hackerrank.com/certificates/b672eb7f89c3' },
        { title: 'Understanding the Web – OpenClassrooms', year: '2024', desc: 'Client-server model, HTTP, browsers, hosting.', link: 'https://openclassrooms.com/fr/course-certificates/7146256839' },
        { title: 'Build Your Website with HTML5 & CSS3 – OpenClassrooms', year: '2024', desc: 'HTML structure, CSS styling, basic best practices.', link: 'https://openclassrooms.com/fr/course-certificates/5342739109' },
        { title: 'Getting Started with REST APIs – OpenClassrooms', year: '2024', desc: 'HTTP methods, endpoints, serialization, DRF.', link: 'https://openclassrooms.com/fr/course-certificates/1862465337' },
        { title: 'Go Further with Django – OpenClassrooms', year: '2024', desc: 'Permissions, security, middleware, optimization & deployment.', link: 'https://openclassrooms.com/fr/course-certificates/4282622357' },
        { title: 'Write JavaScript for the Web – OpenClassrooms', year: '2024', desc: 'DOM, events, interactive logic.', link: 'https://openclassrooms.com/fr/course-certificates/4220531526' },
        { title: 'Simplify CSS with Sass – OpenClassrooms', year: '2024', desc: 'Organization, variables, mixins, reusability.', link: 'https://openclassrooms.com/fr/course-certificates/9515935686' },
        { title: 'Learn the Basics of Python – OpenClassrooms', year: '2024', desc: 'Basics: variables, functions, lists, dictionaries.', link: 'https://openclassrooms.com/fr/course-certificates/2837768967' },
        { title: 'Learn Object-Oriented Programming with Python – OpenClassrooms', year: '2024', desc: 'Classes, inheritance, encapsulation, polymorphism.', link: 'https://openclassrooms.com/fr/course-certificates/1628079851' },
        { title: 'Getting Started with Django – OpenClassrooms', year: '2024', desc: 'Models, views, templates, ORM, admin.', link: 'https://openclassrooms.com/fr/course-certificates/9394370827' },
        { title: 'Understanding Bitcoin & Blockchain – OpenClassrooms', year: '2024', desc: 'Blockchain concepts, cryptocurrencies, decentralized security.', link: 'https://openclassrooms.com/fr/course-certificates/1928553286' },
        { title: 'Manage Code with Git & GitHub – OpenClassrooms', year: '2024', desc: 'Branches, commits, collaboration, workflows.', link: 'https://openclassrooms.com/fr/course-certificates/6823575302' }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Feel free to reach out for any question or opportunity.',
      address: 'Address',
      callMe: 'Call me',
      emailMe: 'Email me',
      placeholders: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Message' },
      send: 'Send',
      sending: 'Loading...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.'
    },
    services: {
      title: 'My Services',
      intro: 'Discover the services I offer to meet your specific development and technology needs.',
      items: [
        { title: 'Backend Development', desc: 'Building robust and scalable APIs, database management and service integration (Django, Spring Boot, Node.js).', icon: 'bi bi-code-slash' },
        { title: 'Frontend Development', desc: 'Creating interactive and dynamic web apps (React, Vue.js, Angular) for an optimal user experience.', icon: 'bi bi-laptop' },
        { title: 'User Interface (UI) Design', desc: 'Designing modern, intuitive and accessible interfaces for users.', icon: 'bi bi-ui-checks-grid' },
        { title: 'Project Management', desc: 'Agile-driven coordination, planning and value-focused delivery.', icon: 'bi bi-clipboard-data' },
        { title: 'Machine Learning', desc: 'ML solutions to extract insights and enhance decision-making.', icon: 'bi bi-pc' },
        { title: 'Task Automation', desc: 'Optimizing internal processes through scripts and automated pipelines.', icon: 'bi bi-gear-wide-connected' }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Some examples of my work and projects.',
      seeMore: 'See more projects'
    },
    footer: {
      rights: 'All Rights Reserved'
    },
    skills: {
      title: 'Technical Skills (Estimates)',
      items: [
        { name: 'Python', percentage: 70 },
        { name: 'Django / DRF', percentage: 65 },
        { name: 'React.js / React Native', percentage: 70 },
        { name: 'JavaScript', percentage: 60 },
        { name: 'HTML/CSS', percentage: 80 },
        { name: 'Java / Spring Boot', percentage: 60 },
        { name: 'SQL / Databases (UML)', percentage: 75 },
        { name: 'Git / GitHub / GitLab', percentage: 75 },
        { name: 'Docker', percentage: 50 },
        { name: 'AWS', percentage: 50 },
        { name: 'SCRUM', percentage: 70 },
        { name: 'UX/UI Design', percentage: 65 },
        { name: 'DevOps', percentage: 50 },
        { name: 'Machine Learning', percentage: 50 },
        { name: 'Big Data', percentage: 50 },
        { name: 'Data Science', percentage: 50 }
      ]
    },
    projectDetail: {
      notfoundTitle: 'Project not found',
      notfoundMessage: 'Sorry, the project you are looking for does not exist.',
      breadcrumbHome: 'Home',
      techUsed: 'Technologies used:',
      features: 'Main features:',
      collaborators: 'Collaborators:',
      projectInfo: 'Project Information',
      category: 'Category',
      client: 'Client',
      projectDate: 'Project Date',
      projectUrl: 'Project URL:',
      visitSite: 'Visit Website',
      viewDetail: 'View Detail'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const toggleLang = () => setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export { LanguageContext };
