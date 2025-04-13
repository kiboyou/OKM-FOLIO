import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import {sampleProjects} from "../utils/Allproject.js";

const Portfolio = () => {

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title">
                <h2>Portfolio</h2>
                <p>Quelques exemples de mes réalisations et projets.</p>
            </div>

            <div className="container portfolio-container">
                <div className="row">
                    {sampleProjects.slice(0, 6).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <div className="see-more" style={{ textAlign: "center", marginTop: "30px" }}>
                    <Link to="/realisations" className="btn btn-success see-more-btn">Voir plus de réalisations</Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
