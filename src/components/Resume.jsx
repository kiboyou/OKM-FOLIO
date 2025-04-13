const Resume = () => {
    return (
        <section id="cv" className="resume section">
            <div className="container section-title">
                <h2>Mon parcours professionnel et académique.</h2>
                {/*<p>Mon parcours professionnel et académique.</p>*/}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Formation</h3>
                        <div className="resume-item">
                            <h4>Cycle Ingénieur en DataScience</h4>
                            <h5>2023 - 2026</h5>
                            <p><em>Ecole Supérieure Privée de Technologie et d'Ingénierie TEKUP, Tunis</em></p>

                        </div>

                        <div className="resume-item">
                            <h4>Licence en Technologie du Web et Image Numériques (TWIN)</h4>
                            <h5>2020 - 2023</h5>
                            <p><em>Ecole Supérieure Africaine des TIC (ESATIC), Centre d'Excellence UIT, Côte
                                d'Ivoire</em></p>

                        </div>
                        {/* Autres sections du CV */}

                        <h3 className="resume-title">Stage</h3>
                        <div className="resume-item">
                            <h4>Stagiaire en Développement Web</h4>
                            <h5>2023 - 4 mois</h5>
                            <p><em>Technologie Innovation Révolutionner (TIR)</em></p>
                            <ul>
                                <li>Création des endpoints de l'API du Dossier Patient Informatisé (DPI).</li>
                                <li>Gestion des utilisateurs et des groupes après une étude conceptuelle.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Stagiaire en Développement Web</h4>
                            <h5>2022 - 3 mois</h5>
                            <ul>
                                <li>Développement de modules additifs au DPI (module pharmacie) pour améliorer le suivi
                                    des soins des patients et la gestion des produits médicaux.
                                </li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Mes Certificats-1</h3>
                        <div className="resume-item">
                            <h4>[PCAP-31-03] PCAP™ – Certified Associate Python Programmer</h4>
                            <h5>in 2024</h5>
                            <p><em>Earners of the PCAP – Certified Associate Python Programmer badge demonstrate
                                the ability to accomplish coding tasks related to the basics of programming in the Python language and
                                the fundamental notions and techniques used in object-oriented programming</em></p>
                            <a href="https://www.credly.com/badges/7029cebc-1877-4ce5-88ff-e35d02270601" target="_blank" rel="noreferrer">Voir la certification</a>

                        </div>
                        <div className="resume-item">
                            <h4>Python (Basic) – HackerRank</h4>
                            <h5>2024</h5>
                            <p>
                                <em>
                                    Certification de niveau débutant attestant la capacité à résoudre des problèmes de base en Python, incluant les
                                    structures de contrôle, les fonctions, les boucles et les types de données.
                                </em>
                            </p>
                            <a href="https://www.hackerrank.com/certificates/a7c0a550f92c" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>SQL (Basic) – HackerRank</h4>
                            <h5>2024</h5>
                            <p>
                                <em>
                                    Certification de niveau débutant validant la maîtrise des requêtes SQL de base, incluant SELECT, WHERE, JOIN, GROUP BY, etc.
                                </em>
                            </p>
                            <a href="https://www.hackerrank.com/certificates/b672eb7f89c3" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Comprendre le Web – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Introduction aux fondamentaux du web, incluant les notions de client/serveur, HTTP, navigateurs et hébergement.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/7146256839" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Créez votre site web avec HTML5 et CSS3 – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Apprentissage des bases du HTML et CSS pour créer des pages web structurées et stylisées.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/5342739109" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>
                        <div className="resume-item">
                            <h4>Débutez avec les API REST – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Principes des API REST, création avec Django REST Framework, méthodes HTTP, sérialisation, routes.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/1862465337" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Allez plus loin avec le framework Django – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Approfondissement Django : permissions, middleware, sécurité, gestion d’erreurs, déploiement.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/4282622357" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Projets écoles</h3>
                        <div className="resume-item">
                            <h4>Projet Gestion de Location de Voiture</h4>
                            <h5>2024 - 3 mois</h5>
                            <p><em>Projet Personnel/Académique</em></p>
                            <ul>
                                <li>Création d'une application web pour la gestion des réservations et la maintenance
                                    des véhicules.
                                </li>
                                <li>Permet aux clients de réserver en ligne et de gérer leur contrat de location.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Projet Gestion de Restaurant</h4>
                            <h5>2024 - 3 mois</h5>
                            <p><em>Projet Personnel/Académique</em></p>
                            <ul>
                                <li>Conception d'une plateforme pour la gestion des commandes, des réservations, et de
                                    la facturation.
                                </li>
                                <li>Interface utilisateur intuitive pour les serveurs et les clients.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Projet Gestion de Laboratoire</h4>
                            <h5>2024 - 2 mois</h5>
                            <p><em>Projet Personnel/Académique</em></p>
                            <ul>
                                <li>Développement d'un système pour automatiser la gestion des analyses médicales, des
                                    inventaires de produits chimiques, et des rapports de tests.
                                </li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Apprentissage Par Projet (APP)</h4>
                            <h5>2020 - 2023</h5>
                            <p><em>ESATIC</em></p>
                            <ul>
                                <li>Développement de sites web pour faciliter le remplissage des registres dans les
                                    cliniques.
                                </li>
                                <li>Promotion de la diversité des cultures ivoiriennes.</li>
                                <li>Application mobile pour améliorer la gestion des parkings dans la commune de plateau
                                    (Côte d'Ivoire).
                                </li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Mes Certificats-2</h3>
                        <div className="resume-item">
                            <h4>Écrivez du JavaScript pour le web – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Initiation au JavaScript pour rendre les pages web interactives : manipulation du DOM, événements, fonctions.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/4220531526" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Simplifiez-vous le CSS avec Sass – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Découverte de Sass pour structurer, réutiliser et simplifier le CSS dans des projets plus complexes.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/9515935686" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Apprenez les bases du langage Python – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Introduction au langage Python : variables, conditions, boucles, fonctions et structures de données simples.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/2837768967" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Apprenez la programmation orientée objet avec Python – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Compréhension des principes de la POO en Python : classes, objets, héritage, encapsulation et polymorphisme.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/1628079851" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Débutez avec le framework Django – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Création d’applications web avec Django : modèles, vues, templates, admin, ORM et routage.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/9394370827" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>



                        <div className="resume-item">
                            <h4>Comprendre le Bitcoin et la Blockchain – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Exploration du fonctionnement de la blockchain, des cryptomonnaies et de la sécurité décentralisée.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/1928553286" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                        <div className="resume-item">
                            <h4>Gérez du code avec Git et GitHub – OpenClassrooms</h4>
                            <h5>2024</h5>
                            <p>
                                <em>Utilisation de Git pour le versionnement du code et de GitHub pour la collaboration et l’hébergement distant.</em>
                            </p>
                            <a href="https://openclassrooms.com/fr/course-certificates/6823575302" target="_blank" rel="noreferrer">Voir la certification</a>
                        </div>

                    </div>
                </div>

            </div>
            {/* Bouton pour télécharger le CV */}
            <div className="text-center mt-4 ">
                <a href="/src/assets/cv/cv_OUATTARA_Kiboyou_Mohamed_FR.pdf" download>
                    <button className="see-more-btn btn btn-success mt-10">Télécharger mon CV en francais </button>
                </a>
                <a href="/src/assets/cv/cv_OUATTARA_Kiboyou_Mohamed_EN.pdf" download>
                    <button className="see-more-btn btn btn-success">Télécharger mon CV en anglais</button>
                </a>
            </div>
        </section>
    );
};

export default Resume;
