import images from "./imagesLink.js";

export const sampleProjects = [
    {
        id: 1,
        title: "Gestion des consultations médicales - ClickHealth",
        description: "Le projet est une plateforme web de gestion des consultations médicales, de la prise de rendez-vous, de la file d'attente, et de la gestion des spécialistes",
        images: images.projetConsultationMedicale,
        description_long: "Ce projet est une plateforme web complète dédiée à la gestion intelligente des consultations médicales. Elle a été conçue pour répondre aux besoins croissants des établissements de santé souhaitant moderniser leur organisation tout en offrant une expérience fluide et intuitive aux patients comme aux professionnels de santé. " +
            "Grâce à une interface soignée et ergonomique, la plateforme permet aux patients de prendre facilement rendez-vous en ligne, de consulter les créneaux disponibles des médecins, et de recevoir automatiquement des rappels avant chaque consultation, réduisant ainsi les absences et les oublis." +
            "Les médecins, quant à eux, bénéficient d’un tableau de bord personnalisé leur permettant de gérer efficacement leur emploi du temps, de suivre les consultations prévues, et d’accéder en toute sécurité aux dossiers médicaux de leurs patients. Un système de file d’attente intelligente permet d’optimiser l’ordre de passage des patients en fonction des priorités et du respect des horaires, contribuant ainsi à une meilleure fluidité dans les établissements de santé.En parallèle, la solution prend en charge la gestion des différents spécialistes, permettant à un centre médical d’intégrer plusieurs disciplines tout en gardant une vue centralisée sur l’ensemble des activités. Cette plateforme vise à améliorer non seulement la productivité des professionnels de santé, mais aussi le confort et la satisfaction des patients. Elle constitue un outil moderne, sécurisé et évolutif, adaptable aux structures médicales de toutes tailles.",
        technologies: ["React", "Tailwind CSS", "Django RestFramework ", "PostgreSQL", "Docker", "git/github"],
        fonctionnalités: [
            "Prise de rendez-vous en ligne",
            "Gestion des disponibilités des médecins",
            "Envoi de rappels automatisés",
            "Consultation des dossiers médicaux",
            "Interface intuitive pour patients et médecins"
        ],

        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur backend / adminstrateur systeme" },
            { name: "Jean Crhistian Ahikpa", role: "Développeur Front et UI/UX Designer" },
            // { name: "Anna Smith", role: "superviseur du projet" }
        ],
        category: "developpement web",
        client: "TEK-UP University",
        date: "01 septembre au 19 Decembre 2024",
        url: "https://clickhealth.abkm.tech/client",
    },
    {
        id: 2,
        title: "Plateforme de gestion documentaire - knowlab",
        description: "Ce projet vise à développer une application web intranet destinée à centraliser et faciliter l'accès aux documents produits par les membres d'une unité de recherche.",
        description_long:
            "knowlab est une application web intranet conçue pour répondre aux besoins des unités de recherche souhaitant centraliser, organiser et sécuriser la gestion de leurs productions scientifiques. Grâce à une interface claire et fonctionnelle, elle permet aux chercheurs, enseignants et membres du laboratoire de téléverser, rechercher et consulter rapidement des documents internes tels que des rapports, des articles, des communications, des thèses ou encore des supports de présentation." +
            "La plateforme offre un système de catégorisation intelligent, de filtres avancés, et de recherche plein texte permettant d’optimiser l’accès à l’information. Chaque document peut être annoté, classé par thématique, type ou auteur, facilitant le suivi et la valorisation des travaux de recherche." +
            "Un module d’administration permet de gérer les utilisateurs, les droits d’accès, ainsi que la configuration des différentes collections documentaires. Une attention particulière a été portée à la sécurité des données avec une authentification basée sur les rôles et des sauvegardes automatiques." +
            "cette solution est entièrement déployable dans un intranet sécurisé et facilement extensible en fonction des besoins futurs. Elle favorise la collaboration, la traçabilité et la valorisation de la production scientifique au sein des unités de recherche.",
        images: images.projetGestionDocumentaire, // à définir dans ton fichier images.js
        technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Hibernate", "Docker", "Git/GitHub"],
        fonctionnalités: [
            "Archivage de documents scientifiques",
            "Recherche avancée et filtrage par type/auteur/thème",
            "Téléversement sécurisé avec gestion des droits",
            "Interface intranet intuitive",
            "Gestion des utilisateurs et rôles d'accès"
        ],
        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur backend" },
            { name: "Jean Crhistian Ahikpa", role: "Concepteur UI et intégrateur" }
        ],
        category: "application intranet",
        client: "TEK-UP",
        date: "15 janvier au 30 avril 2024",
        url: "https://knowlab.abkm.tech/"
    },
    {
        id: 3,
        title: "Application de Réservation de Vols - WingsManager",
        description: "Ce projet consiste à développer une application web de gestion des réservations de vols et du personnel aérien (pilotes, hôtesses, stewards).",
        description_long:
            "WingsManager est une plateforme web dédiée à la gestion complète des vols aériens au sein d'une compagnie ou d'une agence de voyage. Elle intègre deux volets principaux : la réservation de vols par les clients et la gestion du personnel navigant (pilotes, stewards, hôtesses). Cette solution vise à moderniser l’organisation interne des compagnies aériennes tout en offrant une expérience fluide aux utilisateurs finaux." +
            "Du côté client, l’interface permet la recherche de vols, la consultation des horaires disponibles, la réservation en ligne ainsi que la réception de confirmations par e-mail. Chaque réservation est enregistrée dans un tableau de bord personnalisé. Du côté de l’administration, les gestionnaires peuvent ajouter ou modifier les vols, affecter les membres du personnel à des trajets précis, consulter le planning, et suivre les réservations en temps réel." +
            "Développée avec ReactJS pour le front-end et .NET Core (C#) pour le back-end, la plateforme utilise une architecture MVC robuste avec une base de données relationnelle. Elle intègre également un système de rôles et permissions, un moteur de recherche multi-critères pour les vols, ainsi qu’un historique détaillé pour la traçabilité. Cette application est idéale pour toute structure souhaitant automatiser ses processus de réservation tout en gérant efficacement ses ressources humaines aériennes.",
        images: images.projetReservationVols, // à définir dans ton fichier images.js
        technologies: ["React", "Tailwind CSS", ".NET Core (C#)", "SQL Server", "Entity Framework", "Docker"],
        fonctionnalités: [
            "Réservation de vols en ligne",
            "Consultation des horaires et disponibilité",
            "Affectation du personnel de bord aux vols",
            "Gestion des plannings et notifications",
            "Interface moderne pour clients et administrateurs"
        ],
        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur backend (.NET Core)" },
            { name: "Jean Crhistian Ahikpa", role: "Développeur Front React et Designer UI/UX" }
        ],
        category: "gestion aérienne",
        client: "TEK-UP University",
        date: "03 mars au 30 juin 2025",
        url: "#"
    },
    {
        id: 4,
        title: "Application E-commerce de Vente de Fruits - Fruitkha",
        description: "Ce projet est une plateforme e-commerce développée avec Symfony pour la vente en ligne de fruits frais avec intégration d’un système de paiement.",
        description_long:
            "Fruitkha est une application web e-commerce conçue pour faciliter la vente en ligne de fruits frais. L’objectif principal est de permettre aux producteurs et commerçants de proposer leurs produits à une clientèle large à travers une interface moderne, sécurisée et facile d’utilisation. Les utilisateurs peuvent parcourir un large catalogue de fruits, ajouter des articles à leur panier, passer commande et effectuer des paiements en ligne." +
            "Développée avec le framework Symfony (PHP), l’application adopte une architecture MVC robuste, avec une base de données MySQL. L’interface d’administration permet la gestion du stock, des commandes, des livraisons et des promotions. Côté client, l’expérience est fluide, avec une navigation rapide, un panier dynamique, et une interface de paiement sécurisée intégrant la solution Sprite." +
            "FruitMarket se distingue par sa simplicité d’utilisation, son design épuré et sa capacité à évoluer vers des fonctionnalités plus complexes comme la gestion des utilisateurs, les avis, la fidélisation ou encore l’analyse des ventes. Le tout est conçu pour s’adapter à différents supports (mobile, tablette, desktop), garantissant une accessibilité optimale.",
        images: images.projetEcommerceFruits, // à créer dans ton fichier images.js
        technologies: ["Symfony", "Twig", "Bootstrap", "MySQL", "Sprite API", "Docker"],
        fonctionnalités: [
            "Catalogue en ligne de fruits",
            "Panier dynamique et gestion des commandes",
            "Paiement sécurisé avec Sprite",
            "Espace administrateur (stock, livraison, clients)",
            "Interface responsive pour mobile et desktop"
        ],
        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur Backend Symfony & intégration API paiement" },
            { name: "Jean Crhistian Ahikpa", role: "Développeur Front & Designer UI/UX" }
        ],
        category: "e-commerce",
        client: "TEK-UP University",
        date: "15 avril au 30 juillet 2025",
        url: "#"
    },
    {
        id: 5,
        title: "Application de Vente et de Location de Maisons - MAPISS",
        description: "MAPISS est une plateforme web développée avec Django, permettant la mise en relation entre propriétaires de biens immobiliers et potentiels acheteurs ou locataires.",
        description_long:
            "MAPISS est une application web innovante conçue pour faciliter la vente et la location de maisons et d’appartements. Développée avec le framework Django, la plateforme offre un espace centralisé pour les propriétaires, agences et clients afin de publier, rechercher, et consulter des annonces immobilières en temps réel." +
            "Grâce à une interface conviviale et intuitive, les utilisateurs peuvent filtrer les résultats selon plusieurs critères (ville, type de bien, prix, surface, etc.), consulter des galeries d’images, contacter les vendeurs ou propriétaires, et même réserver des visites." +
            "Les propriétaires disposent d’un tableau de bord pour gérer leurs annonces, suivre les demandes, modifier les informations et vérifier les statistiques de consultation. La plateforme intègre également un système de géolocalisation pour situer précisément les biens sur une carte, ainsi qu’un back-office sécurisé pour l’administration du contenu, des utilisateurs et des transactions." +
            "MAPISS vise à rendre le processus de recherche ou de vente de bien immobilier plus simple, rapide et accessible, tout en garantissant la sécurité des échanges.",
        images: images.projetMapiss, // À créer dans ton fichier images.js
        technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "Leaflet.js", "Docker"],
        fonctionnalités: [
            "Publication d’annonces immobilières",
            "Recherche filtrée (ville, type, prix, etc.)",
            "Réservation de visites en ligne",
            "Gestion des annonces via tableau de bord",
            "Géolocalisation des biens sur carte interactive"
        ],
        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur Backend Django & DevOps" },
            { name: "Jean Crhistian Ahikpa", role: "Développeur Front & UI/UX Designer" }
        ],
        category: "immobilier",
        client: "Projet personnel / académique",
        date: "10 janvier au 15 avril 2025",
        url: "#"
    },
    {
        id: 6,
        title: "Application de Location de Véhicules - CarExpress",
        description: "AutoLoc est une plateforme web de location de véhicules, développée avec Laravel et MySQL, permettant aux utilisateurs de réserver des voitures en ligne de manière simple, rapide et sécurisée.",
        description_long:
            "AutoLoc est une application web moderne conçue pour simplifier et digitaliser la gestion de la location de véhicules. Développée avec le framework PHP Laravel et une base de données MySQL, elle offre une interface intuitive pour les clients comme pour les gestionnaires de flotte." +
            "Les utilisateurs peuvent consulter un catalogue de véhicules disponibles à la location, filtrer selon le type (voiture, utilitaire, moto, etc.), les dates et le lieu de prise en charge, puis réserver leur véhicule en quelques clics." +
            "Le système de réservation en ligne est accompagné de notifications (email/SMS), d’un calendrier de disponibilité, et d’un tableau de bord pour le suivi des réservations, des paiements et des historiques clients. Côté administration, la plateforme permet de gérer les véhicules, leurs états, les contrats de location et les clients." +
            "Grâce à une architecture solide et des fonctionnalités complètes, AutoLoc vise à améliorer l’efficacité des agences de location tout en offrant une expérience utilisateur fluide et professionnelle aux clients.",
        images: images.projetLocationVehicule, // à ajouter dans images.js
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "Docker"],
        fonctionnalités: [
            "Catalogue de véhicules disponibles",
            "Réservation en ligne avec calendrier",
            "Gestion des contrats de location",
            "Suivi des clients et historique",
            "Notifications email et SMS automatiques"
        ],
        collaborators: [
            { name: "Boni Acobe Ange Ulrich", role: "Développeur Backend Laravel & Intégrateur" },
        ],
        category: "location",
        client: "Agence AutoFleet",
        date: "20 février au 30 mai 2025",
        url: "#"
    },
    {
        id: 7,
        title: "Landing Page Professionnelle",
        description: "BrightStart est un projet de design d’interface moderne pour une landing page destinée à mettre en valeur une startup ou un service innovant.",
        description_long:
            "Cette landing page est une landing page conçue avec un focus particulier sur l’expérience utilisateur (UX) et l’esthétique (UI). Ce projet met en avant un design responsive, épuré, et dynamique, permettant de capter rapidement l’attention des visiteurs et de les inciter à l’action (inscription, prise de contact, demande de démo, etc.)." +
            "Le design intègre des sections essentielles telles qu’un header attractif, une présentation claire de l’offre ou du produit, des témoignages, une FAQ, et un pied de page avec formulaire de contact. Le tout est structuré de manière à offrir une lecture fluide, avec une palette de couleurs cohérente et une typographie lisible." +
            "La maquette a été réalisée sur Figma, avec des composants réutilisables et un système de grille adaptable sur tous les supports. Ce projet peut facilement être converti en site web avec n’importe quelle stack frontend.",
        images: images.projetLandingPage,
        technologies: ["Figma", "Adobe XD", "UI Design", "UX Research", "Responsive Layout"],
        fonctionnalités: [
            "Design 100% responsive",
            "Composants UI modernes et épurés",
            "Hiérarchisation visuelle claire",
            "Section call-to-action optimisée",
            "Maquette prête pour intégration frontend"
        ],
        collaborators: [
            { name: "Jean Crhistian Ahikpa", role: "UI/UX Designer principal" },
        ],
        category: "design",
        client: "",
        date: "05 janvier au 12 janvier 2025",
        url: ""
    }

];