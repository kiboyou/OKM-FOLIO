import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import useLanguage from '../context/useLanguage.js';
import { sampleProjects } from "../utils/Allproject.js";

const PortfolioDetails = () => {
    const { id } = useParams();
    const { t } = useLanguage();
    const project = sampleProjects.find((proj) => proj.id === parseInt(id));

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simule un chargement de 2 secondes
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    if (!project) {
        return (
            <div className="text-center p-8">
                <h1 className="text-2xl font-bold">{t.projectDetail.notfoundTitle}</h1>
                <p className="text-gray-600">{t.projectDetail.notfoundMessage}</p>
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
                                <li><a href="/">{t.projectDetail.breadcrumbHome}</a></li>
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
                                        <h4>{t.projectDetail.techUsed}</h4>
                                        <ul>
                                            {project.technologies.map((tech, index) => (
                                                <li key={index}>🔧 {tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* fonctionnalités  */}
                                    <div className="mb-4">
                                        <h4>{t.projectDetail.features}</h4>
                                        <ul>
                                            {project.fonctionnalités.map((fonct, index) => (
                                                <li key={index}>🚀 {fonct}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Collaborateurs */}
                                    <div className="mb-4">
                                        <h4>{t.projectDetail.collaborators}</h4>
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
                                    <h3>{t.projectDetail.projectInfo}</h3>
                                    <ul>
                                        <li><strong>{t.projectDetail.category}</strong> {project.category}</li>
                                        <li><strong>{t.projectDetail.client}</strong> {project.client}</li>
                                        <li><strong>{t.projectDetail.projectDate}</strong> {project.date}</li>
                                        {project.url && (
                                            <>
                                                <li>
                                                    <strong>{t.projectDetail.projectUrl} </strong>
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
                                                        {t.projectDetail.visitSite}
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
