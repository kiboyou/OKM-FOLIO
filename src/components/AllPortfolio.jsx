import ProjectCard from "./ProjectCard";
import {sampleProjects} from "../utils/Allproject.js";

const AllPortfolio = () => {
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title">
                <h2>Quelques exemples de mes réalisations et projets</h2>
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
