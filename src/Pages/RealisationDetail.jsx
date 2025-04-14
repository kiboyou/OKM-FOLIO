import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {sampleProjects} from "../utils/Allproject.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const PortfolioDetails = () => {
    const { id } = useParams();
    const project = sampleProjects.find((proj) => proj.id === parseInt(id));

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simule un chargement de 2 secondes
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    if (!project) {
        return (
            <div className="text-center p-8">
                <h1 className="text-2xl font-bold">Projet introuvable</h1>
                <p className="text-gray-600">Désolé, le projet que vous recherchez n'existe pas.</p>
            </div>
        );
    }

    return (
        <>
        {/* Préchargeur */}
        {isLoading && <div id="preloader"></div>}

        {/* Contenu principal */}
        {!isLoading && (
            <div>
                <Header/>
                <main className="main">

                {/* Titre de page */}
                <div className="page-title">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">{project.title}</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="/">Accueil</a></li>
                                <li className="current">{project.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Section détails */}
                <section id="portfolio-details" className="portfolio-details section">
                    <div className="container">

                        {/* Slider Swiper */}
                        <div className="portfolio-details-slider swiper">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                loop={true}
                                speed={600}
                                autoplay={{ delay: 5000 }}
                                navigation
                                pagination={{ clickable: true }}
                                slidesPerView="auto"
                            >
                                {project.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img.url} alt={`Projet ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="row justify-content-between gy-4 mt-4">

                            {/* Description principale */}
                            <div className="col-lg-8">
                                <div className="portfolio-description">
                                    <h2>{project.title}</h2>
                                    <p className="center-text">{project.description_long}</p>

                                    {/* Technologies utilisées */}
                                    <div className="mb-4">
                                        <h4>Technologies utilisées :</h4>
                                        <ul>
                                            {project.technologies.map((tech, index) => (
                                                <li key={index}>🔧 {tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* fonctionnalités  */}
                                    <div className="mb-4">
                                        <h4>Fonctionnalités principales :</h4>
                                        <ul>
                                            {project.fonctionnalités.map((fonct, index) => (
                                                <li key={index}>🚀 {fonct}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Collaborateurs */}
                                    <div className="mb-4">
                                        <h4>Collaborateurs :</h4>
                                        <ul>
                                            {project.collaborators.map((person, index) => (
                                                <li key={index}>👤 {person.name} – {person.role}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Infos projet */}
                            <div className="col-lg-3">
                                <div className="portfolio-info">
                                    <h3>Informations sur le Projet</h3>
                                    <ul>
                                        <li><strong>Catégorie</strong> {project.category}</li>
                                        <li><strong>Client</strong> {project.client}</li>
                                        <li><strong>Date du Projet</strong> {project.date}</li>
                                        {project.url && (
                                            <>
                                                <li>
                                                    <strong>URL du Projet : </strong>
                                                    <a
                                                        href={`https://${project.url}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        {project.url}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={`https://${project.url}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn-visit"
                                                    >
                                                        Visiter le Site Web
                                                    </a>
                                                </li>
                                            </>
                                        )}

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
                <Footer/>
            </div>
        )}
        </>
    );
};

export default PortfolioDetails;
