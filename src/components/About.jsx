import myImage from '../assets/img/profile-img1.png';
import Skills from "./Skills.jsx";

const About = () => {
  return (
      <section id="À propos" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="row justify-content-between gy-4">
                <div className="col-lg-5">
                  <img src={myImage} className="img-fluid" alt="Kiboyou Mohamed OUATTARA" />
                </div>
                <div className="col-lg-7 about-info">
                  <p><strong>Nom : </strong> <span>Kiboyou Mohamed OUATTARA</span></p>
                  <p><strong>Profil : </strong> <span>Développeur Python / Full Stack</span></p>
                  <p><strong>Email : </strong> <span>ouattarakiboyoumohamed@gmail.com</span></p>
                  <p><strong>Téléphone : </strong> <span>+216 58 486 482</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me">
                <h4>À propos de moi</h4>
                <p>
                  Développeur Web Fullstack passionné, je conçois des solutions numériques performantes et intuitives, aussi bien côté front-end (React.js, HTML/CSS, JavaScript) que back-end (Python, Django, Django REST Framework).
                  Mes projets vont de la gestion de dossiers médicaux à des plateformes de réservation, en passant par la gestion de restaurants, laboratoires et agences de location.
                  <br /> Curieux et rigoureux, je maîtrise Git, Docker, AWS ainsi que la conception de bases de données. J’évolue aisément en méthode Agile/SCRUM et j’apprécie les environnements collaboratifs, même à distance.
                  <br /> Actuellement en cycle ingénieur Data Science, je m'intéresse aussi à la manipulation et l’analyse de données, avec des compétences en Python pour la data, Machine Learning et Big Data.
                  Je cherche à contribuer à des projets innovants, en télétravail ou en hybride.
                </p>
              </div>
            </div>
          </div>
          <Skills/>
        </div>
      </section>
  );
};

export default About;
