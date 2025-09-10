import useLanguage from '../context/useLanguage.js';
import { sampleProjects } from "../utils/Allproject.js";
import ProjectCard from "./ProjectCard";

const AllPortfolio = () => {
    const { t } = useLanguage();
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title">
                <h2>{t.portfolio.intro}</h2>
            </div>

            <div className="container portfolio-container">
                <div className="row">
                    {sampleProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllPortfolio;
