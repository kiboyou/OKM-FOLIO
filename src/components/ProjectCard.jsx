import { Link } from "react-router-dom";
import useLanguage from '../context/useLanguage.js';

const ProjectCard = ({ id, images, title, description }) => {
    const { t } = useLanguage();
    return (
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item cardPro">
            {/*console.log(images);*/}
            <img src={images[0].url} className="img-fluid" alt={title} />
            <div className="portfolio-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <Link to={`/realisations/${id}`} className="details-link" title={t.projectDetail.viewDetail}>
                    <i className="bi bi-link-45deg"></i>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
