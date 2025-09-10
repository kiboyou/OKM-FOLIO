import { Link } from "react-router-dom";
import useLanguage from '../context/useLanguage.js';
import { sampleProjects } from "../utils/Allproject.js";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {

    const { t } = useLanguage();
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title">
                <h2>{t.portfolio.title}</h2>
                <p>{t.portfolio.intro}</p>
            </div>

            <div className="container portfolio-container">
                <div className="row">
                    {sampleProjects.slice(0, 6).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <div className="see-more" style={{ textAlign: "center", marginTop: "30px" }}>
                    <Link to="/realisations" className="btn btn-success see-more-btn">{t.portfolio.seeMore}</Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
