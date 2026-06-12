// Single source of truth for the existing portfolio content, shaped bilingually.
// Used by lib/data.ts in Phase 1 (before the DB is wired) and by scripts/seed.ts
// to populate Supabase. Project text reuses the original legacy data verbatim.

import type {
  BlogPost,
  Certification,
  Education,
  Idea,
  Profile,
  Project,
  Service,
  Skill,
} from "./types";
// Legacy data (allowJs) — reused as-is to avoid re-transcribing long descriptions.
import { sampleProjects } from "./legacy/allprojects.js";

const PROJECT_SLUGS: Record<number, string> = {
  10: "pentesting-ia",
  9: "bi-odoo",
  1: "clickhealth",
  2: "knowlab",
  3: "gestion-pharmaceutique-dpi",
  4: "fruitkha",
  5: "mapiss",
  6: "carexpress",
  7: "landing-page",
  8: "wingsmanager",
  12: "tech-pour-science",
};

interface ProjectEN {
  title: string;
  description: string;
  description_long: string;
  category: string;
  features: string[];
}

// English translations keyed by the legacy numeric project id.
const PROJECT_EN: Record<number, ProjectEN> = {
  10: {
    title: "Pentesting with AI Project — Offensive Security Automation",
    description:
      "An innovative cybersecurity project combining pentesting techniques and artificial intelligence to automate vulnerability detection and exploitation.",
    description_long:
      "This intelligent Pentesting project was developed in an academic and practical context to demonstrate the potential of artificial intelligence in offensive security. " +
      "The main goal was to design a solution capable of automatically performing the various pentest steps: subdomain discovery, IP and port scanning, vulnerability research, exploitation and reporting. " +
      "The project relies on a FIFO task-stack approach, allowing information gathering and attack launching to run in parallel while prioritizing continuous exploration. " +
      "A backend API was built with FastAPI to orchestrate the processes and manage results, while a ReactJS frontend provides interactive visualization of findings and test management. " +
      "AI is involved in correlating results, prioritizing targets and generating intelligent reports, offering a more efficient and automated approach to pentesting.",
    category: "Cybersecurity / Pentesting",
    features: [
      "Automated subdomain and IP discovery",
      "Port scanning and service detection",
      "Vulnerability research and correlation (CVE)",
      "Semi-automated exploitation via Metasploit",
      "AI orchestration for target prioritization",
      "Interactive results-tracking interface",
    ],
  },
  9: {
    title: "BI Project — Custom Analytics on Odoo ERP",
    description:
      "An advanced Business Intelligence project aimed at going beyond the standard analytical limits of Odoo ERP by building a tailor-made solution.",
    description_long:
      "This Business Intelligence project was carried out during the second semester of the Data Science & Artificial Intelligence program at TEK-UP University of Digital Sciences. " +
      "Our goal was to develop an advanced BI solution capable of providing visualizations, predictions and in-depth analyses of Odoo ERP module data, while overcoming data-access limitations. " +
      "The project covered the entire data lifecycle: from extraction (ETL) to predictive modeling, including storage in a Data Lake (Minio S3), structuring in a Data Warehouse (SQL Server), and visualization with Power BI. " +
      "We rebuilt our own database inspired by Odoo schemas (sales, purchases, inventory) to ensure analytical independence and flexibility. " +
      "Production deployment was handled with FastAPI and ReactJS, with particular attention to the quality of Machine Learning modeling and pipeline automation via Airflow.",
    category: "Business Intelligence",
    features: [
      "Automated ETL pipeline with Airflow",
      "Rebuilding of Odoo ERP schemas",
      "Data Lake and Data Warehouse storage",
      "Dynamic visualizations with Power BI",
      "Predictive modeling with Scikit-Learn",
      "API & Front production deployment (FastAPI + React)",
    ],
  },
  1: {
    title: "Medical Consultation Management — ClickHealth",
    description:
      "A web platform for managing medical consultations, appointment booking, the waiting queue, and specialist management.",
    description_long:
      "This project is a complete web platform dedicated to the intelligent management of medical consultations. It was designed to meet the growing needs of healthcare facilities looking to modernize their organization while offering a smooth and intuitive experience to both patients and healthcare professionals. " +
      "Thanks to a polished and ergonomic interface, the platform lets patients easily book appointments online, check doctors' available slots, and automatically receive reminders before each consultation, reducing no-shows and forgotten appointments. " +
      "Doctors benefit from a personalized dashboard to efficiently manage their schedule, track upcoming consultations, and securely access their patients' medical records. A smart queue system optimizes the order in which patients are seen based on priorities and schedule compliance, contributing to a smoother flow in healthcare facilities. In parallel, the solution supports managing different specialists, allowing a medical center to integrate several disciplines while keeping a centralized view of all activities. This platform aims to improve not only the productivity of healthcare professionals but also the comfort and satisfaction of patients. It is a modern, secure and scalable tool, adaptable to medical structures of all sizes.",
    category: "web development",
    features: [
      "Online appointment booking",
      "Management of doctors' availability",
      "Automated reminders",
      "Medical records consultation",
      "Intuitive interface for patients and doctors",
    ],
  },
  2: {
    title: "Document Management Platform — knowlab",
    description:
      "An intranet web application to centralize and ease access to documents produced by the members of a research unit.",
    description_long:
      "knowlab is an intranet web application designed to meet the needs of research units wishing to centralize, organize and secure the management of their scientific output. Thanks to a clear and functional interface, it allows researchers, teachers and lab members to upload, search and quickly consult internal documents such as reports, articles, papers, theses or presentation materials. " +
      "The platform offers a smart categorization system, advanced filters, and full-text search to optimize access to information. Each document can be annotated and classified by topic, type or author, making it easier to track and showcase research work. " +
      "An administration module manages users, access rights, and the configuration of the various document collections. Particular attention was paid to data security with role-based authentication and automatic backups. " +
      "This solution is fully deployable within a secure intranet and easily extensible according to future needs. It fosters collaboration, traceability and the promotion of scientific output within research units.",
    category: "intranet application",
    features: [
      "Archiving of scientific documents",
      "Advanced search and filtering by type/author/topic",
      "Secure upload with rights management",
      "Intuitive intranet interface",
      "User and access-role management",
    ],
  },
  3: {
    title: "Pharmaceutical Management Application — EPR",
    description:
      "Development of a web application integrated with a medical ERP for pharmaceutical management and the improvement of the Electronic Patient Record (EPR).",
    description_long:
      "This project is part of the modernization of health information systems, aiming to design and develop a web application for pharmaceutical management integrated with a medical ERP, within the Electronic Patient Record (EPR) of the TIR company. It aims to optimize medication management, strengthen the quality of care and ensure patient safety. " +
      "The application makes it possible to manage medication stocks, track expiry, centralize pharmaceutical information linked to patient records, and ease communication between the actors of the care chain. Particular attention was paid to traceability, reliability and data security. " +
      "The project followed the classic software development steps: requirements analysis through a specifications document, UML modeling with the unified process, and technical development using modern web technologies. The application is currently in the testing phase with healthcare professionals in order to identify potential bugs and improve the system's ergonomics. " +
      "A future extension plans to implement a pharmaceutical product authentication module, able to automatically check expiry dates before stock registration, to limit any risk linked to expired products.",
    category: "digital health",
    features: [
      "Medication stock management",
      "Expiry tracking and alerts",
      "Integration with the Electronic Patient Record (EPR)",
      "Product traceability and data security",
      "Intuitive interface for medical staff",
    ],
  },
  4: {
    title: "Fruit E-commerce Application — Fruitkha",
    description:
      "An e-commerce platform built with Symfony for selling fresh fruit online, with an integrated payment system.",
    description_long:
      "Fruitkha is an e-commerce web application designed to ease the online sale of fresh fruit. The main goal is to allow producers and merchants to offer their products to a wide audience through a modern, secure and easy-to-use interface. Users can browse a large fruit catalog, add items to their cart, place orders and pay online. " +
      "Built with the Symfony framework (PHP), the application adopts a robust MVC architecture with a MySQL database. The admin interface allows managing stock, orders, deliveries and promotions. On the customer side, the experience is smooth, with fast navigation, a dynamic cart, and a secure online payment interface. " +
      "Fruitkha stands out for its ease of use, clean design and ability to evolve toward more complex features such as user management, reviews, loyalty or sales analysis. Everything is designed to adapt to different devices (mobile, tablet, desktop), ensuring optimal accessibility.",
    category: "e-commerce",
    features: [
      "Online fruit catalog",
      "Dynamic cart and order management",
      "Secure online payment",
      "Admin area (stock, delivery, customers)",
      "Responsive interface for mobile and desktop",
    ],
  },
  5: {
    title: "House Sale and Rental Application — MAPISS",
    description:
      "MAPISS is a web platform built with Django connecting real-estate owners with potential buyers or tenants.",
    description_long:
      "MAPISS is an innovative web application designed to ease the sale and rental of houses and apartments. Built with the Django framework, the platform offers a centralized space for owners, agencies and clients to publish, search and consult real-estate listings in real time. " +
      "Thanks to a friendly and intuitive interface, users can filter results by several criteria (city, property type, price, surface, etc.), browse image galleries, contact sellers or owners, and even book visits. " +
      "Owners have a dashboard to manage their listings, track requests, edit information and check view statistics. The platform also integrates a geolocation system to precisely locate properties on a map, as well as a secure back office for managing content, users and transactions. " +
      "MAPISS aims to make the process of searching for or selling real estate simpler, faster and more accessible, while ensuring the security of exchanges.",
    category: "real estate",
    features: [
      "Publishing real-estate listings",
      "Filtered search (city, type, price, etc.)",
      "Online visit booking",
      "Listing management via dashboard",
      "Geolocation of properties on an interactive map",
    ],
  },
  6: {
    title: "Vehicle Rental Application — CarExpress",
    description:
      "AutoLoc is a vehicle rental web platform, built with Laravel and MySQL, allowing users to book cars online simply, quickly and securely.",
    description_long:
      "AutoLoc is a modern web application designed to simplify and digitalize vehicle rental management. Built with the PHP Laravel framework and a MySQL database, it offers an intuitive interface for both customers and fleet managers. " +
      "Users can browse a catalog of vehicles available for rent, filter by type (car, van, motorcycle, etc.), dates and pickup location, then book their vehicle in a few clicks. " +
      "The online booking system comes with notifications (email/SMS), an availability calendar, and a dashboard to track bookings, payments and customer history. On the administration side, the platform allows managing vehicles, their condition, rental contracts and customers. " +
      "With a solid architecture and complete features, AutoLoc aims to improve the efficiency of rental agencies while offering a smooth and professional user experience to customers.",
    category: "rental",
    features: [
      "Catalog of available vehicles",
      "Online booking with calendar",
      "Rental contract management",
      "Customer tracking and history",
      "Automatic email and SMS notifications",
    ],
  },
  7: {
    title: "Professional Landing Page",
    description:
      "BrightStart is a modern UI design project for a landing page intended to showcase a startup or an innovative service.",
    description_long:
      "This landing page was designed with a particular focus on user experience (UX) and aesthetics (UI). This project highlights a responsive, clean and dynamic design, able to quickly capture visitors' attention and prompt them to act (sign-up, contact, demo request, etc.). " +
      "The design includes essential sections such as an attractive header, a clear presentation of the offer or product, testimonials, an FAQ, and a footer with a contact form. Everything is structured to offer smooth reading, with a consistent color palette and legible typography. " +
      "The mockup was created in Figma, with reusable components and a grid system adaptable to all devices. This project can easily be converted into a website with any frontend stack.",
    category: "design",
    features: [
      "100% responsive design",
      "Modern and clean UI components",
      "Clear visual hierarchy",
      "Optimized call-to-action section",
      "Mockup ready for frontend integration",
    ],
  },
  8: {
    title: "Flight Booking Application — WingsManager",
    description:
      "A web application to manage flight bookings and air crew (pilots, flight attendants, stewards).",
    description_long:
      "WingsManager is a web platform dedicated to the complete management of air flights within an airline or travel agency. It integrates two main aspects: flight booking by customers and management of flight crew (pilots, stewards, flight attendants). This solution aims to modernize the internal organization of airlines while offering a smooth experience to end users. " +
      "On the customer side, the interface allows searching flights, consulting available schedules, booking online and receiving confirmations by email. Each booking is recorded in a personalized dashboard. On the administration side, managers can add or edit flights, assign crew members to specific routes, consult the schedule, and track bookings in real time. " +
      "Built with ReactJS for the frontend and .NET Core (C#) for the backend, the platform uses a robust MVC architecture with a relational database. It also integrates a roles and permissions system, a multi-criteria flight search engine, and a detailed history for traceability. This application is ideal for any organization wishing to automate its booking processes while efficiently managing its air human resources.",
    category: "air management",
    features: [
      "Online flight booking",
      "Schedule and availability consultation",
      "Assigning crew to flights",
      "Schedule management and notifications",
      "Modern interface for customers and administrators",
    ],
  },
  12: {
    title: "Educational Project — Tech Pour Science Platform",
    description:
      "A complete web platform aimed at promoting science education in Côte d'Ivoire through interactive and modern tools.",
    description_long:
      "This project was developed individually as part of the **Tech Pour Science** initiative, which aims to make science more accessible, modern and inclusive. " +
      "The goal was to design an interactive educational platform to popularize science among young people, particularly through digital content, workshops and immersive tools. " +
      "The solution covers the entire technical chain: a robust backend in Django Rest Framework for data and user management, a modern frontend in Next.js with TailwindCSS for a smooth and responsive experience, and a design centered on accessibility and interactivity. " +
      "The project illustrates the ability to build a complete, scalable, impact-oriented web application, aligned with the Sustainable Development Goals (SDGs), notably equitable access to science education.",
    category: "EdTech / Science Education",
    features: [
      "User management and authentication",
      "Delivery of interactive scientific content",
      "Responsive and accessible design with TailwindCSS",
      "Back office for managing workshops and activities",
      "Integration of educational APIs and interactive modules",
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seedProjects: Project[] = (sampleProjects as any[]).map(
  (p, idx) => {
    const en = PROJECT_EN[p.id] as ProjectEN | undefined;
    return {
      id: PROJECT_SLUGS[p.id] ?? String(p.id),
      slug: PROJECT_SLUGS[p.id] ?? String(p.id),
      title_fr: p.title,
      title_en: en?.title ?? null,
      description_fr: p.description,
      description_en: en?.description ?? null,
      description_long_fr: p.description_long,
      description_long_en: en?.description_long ?? null,
      category_fr: p.category ?? "",
      category_en: en?.category ?? null,
      client: p.client ?? null,
      date_label: p.date ?? null,
      url: p.url ? p.url.replace(/^https?:\/\//, "") : null,
      technologies: p.technologies ?? [],
      features_fr: p["fonctionnalités"] ?? [],
      features_en: en?.features ?? null,
      images: p.images ?? [],
      collaborators: p.collaborators ?? [],
      sort_order: idx + 1,
      published: true,
    };
  }
);

export const seedProfile: Profile = {
  name: "Kiboyou Mohamed OUATTARA",
  title: null,
  description_fr:
    "Développeur Web Fullstack passionné, je conçois des solutions numériques performantes et intuitives, aussi bien côté front-end (React.js, HTML/CSS, JavaScript) que back-end (Python, Django, Django REST Framework). Mes projets vont de la gestion de dossiers médicaux à des plateformes de réservation, en passant par la gestion de restaurants, laboratoires et agences de location.\nCurieux et rigoureux, je maîtrise Git, Docker, AWS ainsi que la conception de bases de données. J'évolue aisément en méthode Agile/SCRUM et j'apprécie les environnements collaboratifs, même à distance.\nÉtudiant en dernière année de cycle ingénieur en Data Science & Machine Learning à TEK-UP University (Tunis). Passionné par l'Intelligence Artificielle appliquée, l'apprentissage automatique, profond et le MLOps, je souhaite mettre mes compétences techniques et analytiques au service de projets innovants en entreprise.",
  description_en:
    "Passionate Fullstack Web Developer building performant and intuitive digital solutions on both frontend (React.js, HTML/CSS, JavaScript) and backend (Python, Django, Django REST Framework). Projects span medical record management, booking platforms, restaurant & lab systems, and car rental apps.\nCurious and rigorous, proficient with Git, Docker, AWS and database design. Comfortable with Agile/SCRUM and remote collaboration.\nFinal-year Engineering student in Data Science & Machine Learning at TEK-UP University (Tunis). Enthusiastic about applied AI, Machine Learning and MLOps, seeking to contribute technical and analytical skills to innovative company projects.",
  email: "ouattarakiboyoumohamed@gmail.com",
  phone: "+216 58 486 482",
  address_fr: "Tunis, Tunisie",
  address_en: "Tunis, Tunisia",
  availability_fr: "Immédiate",
  availability_en: "Immediate",
  languages_fr: "Français, Anglais",
  languages_en: "French, English",
  linkedin: "https://www.linkedin.com/in/kiboyou-mohamed-ouattara/",
  github: "https://github.com/kiboyou",
  cv_fr_url: "/assets/cv/cv-okm_FR.pdf",
  cv_en_url: "/assets/cv/cv-okm_EN.pdf",
  hero_image_url: "/assets/img/bg.jpeg",
  about_image_url: "/assets/img/Photographie_Kiboyou.jpg",
  typed_fr: [
    "Certified Associate in Python Programming - PCAP",
    "Freelancer",
    "Développeur Python",
    "Développeur web FullStack",
    "Élève Ingénieur en Data Science et Machine Learning",
    "Passionné par l'IA et le Machine Learning",
  ],
  typed_en: [
    "Certified Associate in Python Programming - PCAP",
    "Freelancer",
    "Python Developer",
    "Full Stack Web Developer",
    "Data Science & Machine Learning Engineering Student",
    "Passionate about AI and Machine Learning",
  ],
};

export const seedServices: Service[] = [
  {
    title_fr: "Développement Backend",
    title_en: "Backend Development",
    description_fr:
      "Création d'API robustes et évolutives, gestion des bases de données et intégration de services (Django, Spring Boot, Node.js).",
    description_en:
      "Building robust and scalable APIs, database management and service integration (Django, Spring Boot, Node.js).",
    icon: "bi bi-code-slash",
  },
  {
    title_fr: "Développement Frontend",
    title_en: "Frontend Development",
    description_fr:
      "Conception de sites web interactifs et dynamiques (React, Vue.js, Angular) pour une UX optimale.",
    description_en:
      "Creating interactive and dynamic web apps (React, Vue.js, Angular) for an optimal user experience.",
    icon: "bi bi-laptop",
  },
  {
    title_fr: "Design d'Interface Utilisateur (UI)",
    title_en: "User Interface (UI) Design",
    description_fr:
      "Création de designs modernes et intuitifs garantissant une expérience fluide.",
    description_en:
      "Designing modern, intuitive and accessible interfaces for users.",
    icon: "bi bi-ui-checks-grid",
  },
  {
    title_fr: "Gestion de Projet",
    title_en: "Project Management",
    description_fr:
      "Suivi agile, planification, coordination et livraison orientée valeur.",
    description_en:
      "Agile-driven coordination, planning and value-focused delivery.",
    icon: "bi bi-clipboard-data",
  },
  {
    title_fr: "Machine Learning",
    title_en: "Machine Learning",
    description_fr:
      "Solutions d'apprentissage automatique pour extraire des insights et améliorer vos décisions.",
    description_en:
      "ML solutions to extract insights and enhance decision-making.",
    icon: "bi bi-pc",
  },
  {
    title_fr: "Automatisation de Tâches",
    title_en: "Task Automation",
    description_fr:
      "Optimisation des processus internes via des scripts et pipelines automatisés.",
    description_en:
      "Optimizing internal processes through scripts and automated pipelines.",
    icon: "bi bi-gear-wide-connected",
  },
].map((s, i) => ({ id: `svc-${i + 1}`, sort_order: i + 1, ...s }));

export const seedSkills: Skill[] = (
  [
    { name: "Python", percentage: 70 },
    { name: "Django / DRF", percentage: 65 },
    { name: "React.js / React Native", percentage: 70 },
    { name: "JavaScript", percentage: 60 },
    { name: "HTML/CSS", percentage: 80 },
    { name: "Java / SpringBoot", name_en: "Java / Spring Boot", percentage: 60 },
    {
      name: "SQL / Bases de Données (UML)",
      name_en: "SQL / Databases (UML)",
      percentage: 75,
    },
    { name: "Git / GitHub / GitLab", percentage: 75 },
    { name: "Docker", percentage: 50 },
    { name: "AWS", percentage: 50 },
    { name: "SCRUM", percentage: 70 },
    { name: "Conception UX/UI", name_en: "UX/UI Design", percentage: 65 },
    { name: "DevOps", percentage: 50 },
    { name: "Machine Learning", percentage: 50 },
    { name: "Big Data", percentage: 50 },
    { name: "Data Science", percentage: 50 },
  ] as { name: string; name_en?: string; percentage: number }[]
).map((s, i) => ({ id: `skill-${i + 1}`, sort_order: i + 1, ...s }));

export const seedCertifications: Certification[] = [
  {
    title: "[PCAP-31-03] PCAP™ – Certified Associate Python Programmer",
    title_en: "[PCAP-31-03] PCAP™ – Certified Associate Python Programmer",
    year: "2024",
    description_fr:
      "Démontre la capacité à réaliser des tâches de programmation couvrant les bases du langage Python et les notions fondamentales de la POO (structures de contrôle, OOP, modules).",
    description_en:
      "Demonstrates ability to perform coding tasks covering Python basics and fundamental OOP concepts (control flow, OOP, modules).",
    link: "https://www.credly.com/badges/7029cebc-1877-4ce5-88ff-e35d02270601",
    is_highlight: true,
  },
  {
    title: "Python (Basic) – HackerRank",
    title_en: "Python (Basic) – HackerRank",
    year: "2024",
    description_fr:
      "Résolution de problèmes simples : boucles, fonctions, structures de contrôle, types de base.",
    description_en:
      "Solving simple problems: loops, functions, control flow, basic types.",
    link: "https://www.hackerrank.com/certificates/a7c0a550f92c",
    is_highlight: false,
  },
  {
    title: "SQL (Basic) – HackerRank",
    title_en: "SQL (Basic) – HackerRank",
    year: "2024",
    description_fr: "Requêtes SQL fondamentales : SELECT, WHERE, JOIN, GROUP BY.",
    description_en: "Fundamental SQL queries: SELECT, WHERE, JOIN, GROUP BY.",
    link: "https://www.hackerrank.com/certificates/b672eb7f89c3",
    is_highlight: false,
  },
  {
    title: "Comprendre le Web – OpenClassrooms",
    title_en: "Understanding the Web – OpenClassrooms",
    year: "2024",
    description_fr: "Modèle client-serveur, HTTP, navigateurs, hébergement.",
    description_en: "Client-server model, HTTP, browsers, hosting.",
    link: "https://openclassrooms.com/fr/course-certificates/7146256839",
    is_highlight: false,
  },
  {
    title: "Créez votre site web avec HTML5 et CSS3 – OpenClassrooms",
    title_en: "Build Your Website with HTML5 & CSS3 – OpenClassrooms",
    year: "2024",
    description_fr: "Structuration HTML, styles CSS, bonnes pratiques de base.",
    description_en: "HTML structure, CSS styling, basic best practices.",
    link: "https://openclassrooms.com/fr/course-certificates/5342739109",
    is_highlight: false,
  },
  {
    title: "Débutez avec les API REST – OpenClassrooms",
    title_en: "Getting Started with REST APIs – OpenClassrooms",
    year: "2024",
    description_fr: "Méthodes HTTP, endpoints, sérialisation, DRF.",
    description_en: "HTTP methods, endpoints, serialization, DRF.",
    link: "https://openclassrooms.com/fr/course-certificates/1862465337",
    is_highlight: false,
  },
  {
    title: "Allez plus loin avec le framework Django – OpenClassrooms",
    title_en: "Go Further with Django – OpenClassrooms",
    year: "2024",
    description_fr:
      "Permissions, sécurité, middleware, optimisation & déploiement.",
    description_en:
      "Permissions, security, middleware, optimization & deployment.",
    link: "https://openclassrooms.com/fr/course-certificates/4282622357",
    is_highlight: false,
  },
  {
    title: "Écrivez du JavaScript pour le web – OpenClassrooms",
    title_en: "Write JavaScript for the Web – OpenClassrooms",
    year: "2024",
    description_fr: "DOM, événements, logique interactive.",
    description_en: "DOM, events, interactive logic.",
    link: "https://openclassrooms.com/fr/course-certificates/4220531526",
    is_highlight: false,
  },
  {
    title: "Simplifiez-vous le CSS avec Sass – OpenClassrooms",
    title_en: "Simplify CSS with Sass – OpenClassrooms",
    year: "2024",
    description_fr: "Organisation, variables, mixins, réutilisabilité.",
    description_en: "Organization, variables, mixins, reusability.",
    link: "https://openclassrooms.com/fr/course-certificates/9515935686",
    is_highlight: false,
  },
  {
    title: "Apprenez les bases du langage Python – OpenClassrooms",
    title_en: "Learn the Basics of Python – OpenClassrooms",
    year: "2024",
    description_fr: "Bases : variables, fonctions, listes, dictionnaires.",
    description_en: "Basics: variables, functions, lists, dictionaries.",
    link: "https://openclassrooms.com/fr/course-certificates/2837768967",
    is_highlight: false,
  },
  {
    title:
      "Apprenez la programmation orientée objet avec Python – OpenClassrooms",
    title_en:
      "Learn Object-Oriented Programming with Python – OpenClassrooms",
    year: "2024",
    description_fr: "Classes, héritage, encapsulation, polymorphisme.",
    description_en: "Classes, inheritance, encapsulation, polymorphism.",
    link: "https://openclassrooms.com/fr/course-certificates/1628079851",
    is_highlight: false,
  },
  {
    title: "Débutez avec le framework Django – OpenClassrooms",
    title_en: "Getting Started with Django – OpenClassrooms",
    year: "2024",
    description_fr: "Modèles, vues, templates, ORM, admin.",
    description_en: "Models, views, templates, ORM, admin.",
    link: "https://openclassrooms.com/fr/course-certificates/9394370827",
    is_highlight: false,
  },
  {
    title: "Comprendre le Bitcoin et la Blockchain – OpenClassrooms",
    title_en: "Understanding Bitcoin & Blockchain – OpenClassrooms",
    year: "2024",
    description_fr:
      "Concepts blockchain, cryptomonnaies, sécurité décentralisée.",
    description_en:
      "Blockchain concepts, cryptocurrencies, decentralized security.",
    link: "https://openclassrooms.com/fr/course-certificates/1928553286",
    is_highlight: false,
  },
  {
    title: "Gérez du code avec Git et GitHub – OpenClassrooms",
    title_en: "Manage Code with Git & GitHub – OpenClassrooms",
    year: "2024",
    description_fr: "Branches, commits, collaboration, workflows.",
    description_en: "Branches, commits, collaboration, workflows.",
    link: "https://openclassrooms.com/fr/course-certificates/6823575302",
    is_highlight: false,
  },
].map((c, i) => ({ id: `cert-${i + 1}`, sort_order: i, ...c }));

export const seedEducation: Education[] = [
  {
    title_fr: "Cycle Ingénieur en DataScience",
    title_en: "Engineering Degree in Data Science",
    period: "2023 - 2026",
    school_fr:
      "Ecole Supérieure Privée de Technologie et d'Ingénierie TEKUP, Tunis",
    school_en: "TEKUP Higher School of Technology & Engineering, Tunis",
  },
  {
    title_fr: "Licence en Technologie du Web et Image Numériques (TWIN)",
    title_en: "Bachelor in Web Technologies & Digital Imaging (TWIN)",
    period: "2020 - 2023",
    school_fr:
      "Ecole Supérieure Africaine des TIC (ESATIC), Centre d'Excellence UIT, Côte d'Ivoire",
    school_en: "ESATIC – ITU Excellence Center, Côte d'Ivoire",
  },
].map((e, i) => ({ id: `edu-${i + 1}`, sort_order: i + 1, ...e }));

// ---- Example content for the new Blog & Ideas sections (demo seed) ----

export const seedBlogPosts: BlogPost[] = [
  {
    id: "bienvenue-sur-le-blog",
    slug: "bienvenue-sur-le-blog",
    title_fr: "Bienvenue sur mon blog",
    title_en: "Welcome to my blog",
    excerpt_fr:
      "Un premier article pour inaugurer cet espace où je partagerai mes notes et retours d'expérience.",
    excerpt_en:
      "A first post to open this space where I'll share my notes and field feedback.",
    content_fr:
      "## Bienvenue\n\nCe blog accueillera mes articles techniques, mes retours d'expérience sur mes projets et mes apprentissages en développement web, data science et IA.\n\nRestez à l'écoute !",
    content_en:
      "## Welcome\n\nThis blog will host my technical articles, feedback from my projects and what I learn in web development, data science and AI.\n\nStay tuned!",
    cover_image_url: null,
    tags: ["intro"],
    published: true,
    published_at: "2025-01-15T10:00:00Z",
  },
  {
    id: "pourquoi-fastapi-et-react",
    slug: "pourquoi-fastapi-et-react",
    title_fr: "Pourquoi j'aime FastAPI et React",
    title_en: "Why I love FastAPI and React",
    excerpt_fr:
      "Quelques raisons qui font de ce duo une stack productive pour mes projets.",
    excerpt_en: "A few reasons this duo makes a productive stack for my projects.",
    content_fr:
      "FastAPI offre une API typée, rapide et documentée automatiquement, tandis que React permet des interfaces riches et réactives. Ensemble, ils couvrent l'essentiel d'une application web moderne.",
    content_en:
      "FastAPI provides a typed, fast and auto-documented API, while React enables rich, reactive interfaces. Together they cover the essentials of a modern web app.",
    cover_image_url: null,
    tags: ["python", "react"],
    published: true,
    published_at: "2025-02-02T10:00:00Z",
  },
];

export const seedIdeas: Idea[] = [
  {
    id: "plateforme-mentorat-tech",
    slug: "plateforme-mentorat-tech",
    title_fr: "Plateforme de mentorat tech en Afrique",
    title_en: "Tech mentorship platform in Africa",
    description_fr:
      "Mettre en relation étudiants et professionnels pour du mentorat à distance, avec suivi de progression et ressources partagées.",
    description_en:
      "Connect students and professionals for remote mentorship, with progress tracking and shared resources.",
    image_url: null,
    published: true,
    sort_order: 1,
  },
  {
    id: "assistant-ia-revision",
    slug: "assistant-ia-revision",
    title_fr: "Assistant IA de révision",
    title_en: "AI study assistant",
    description_fr:
      "Un assistant qui génère des fiches et quiz personnalisés à partir des cours, pour réviser plus efficacement.",
    description_en:
      "An assistant that generates personalized flashcards and quizzes from course material for more effective study.",
    image_url: null,
    published: true,
    sort_order: 2,
  },
];
