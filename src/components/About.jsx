import myImage from '../assets/img/Photographie_Kiboyou.jpg';
import useLanguage from '../context/useLanguage.js';
import Skills from "./Skills.jsx";

const About = () => {
  const { t } = useLanguage();
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
                  <p><strong>{t.about.labels.name} : </strong> <span>Kiboyou Mohamed OUATTARA</span></p>
                  <p><strong>{t.about.labels.email} : </strong> <span>ouattarakiboyoumohamed@gmail.com</span></p>
                  <p><strong>{t.about.labels.phone} : </strong> <span>+216 58 486 482</span></p>
                  <p><strong>{t.about.labels.address} : </strong> <span>{t.about.values.address}</span></p>
                  <p><strong></strong> <span><a href="https://www.linkedin.com/in/kiboyou-mohamed-ouattara/" target="_blank" rel="noopener noreferrer">{t.about.labels.linkedin}</a></span></p>
                  <p><strong></strong> <span><a href="https://github.com/kiboyou" target="_blank" rel="noopener noreferrer">{t.about.labels.github}</a></span></p>
                  <p><strong>{t.about.labels.languages} : </strong> <span>{t.about.values.languages}</span></p>
                  <p><strong>{t.about.labels.availability} : </strong> <span>{t.about.values.availability}</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me">
                <h4>{t.about.heading}</h4>
                {t.about.description.split('\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
          <Skills/>
        </div>
      </section>
  );
};

export default About;
