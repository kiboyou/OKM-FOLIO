const Services = () => {
  return (
      <section id="services" className="services section">
        <div className="container section-title">
          <h2>Mes Services</h2>
          <p>Découvrez les services que nous proposons pour répondre à vos besoins spécifiques en développement et
            technologie.</p>
        </div>

        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" >
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <a className="stretched-link">
                  <h3>Développement Backend</h3>
                </a>
                <p>Création d'API robustes et évolutives, gestion des bases de données et intégration des services
                  backend avec des technologies comme Django, Spring Boot et Node.js.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <a className="stretched-link">
                  <h3>Développement Frontend</h3>
                </a>
                <p>Conception de sites web interactifs et dynamiques avec des technologies modernes comme React, Vue.js
                  et Angular pour une expérience utilisateur optimale.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-ui-checks-grid"></i>
                </div>
                <a className="stretched-link">
                  <h3>Design d'Interface Utilisateur (UI)</h3>
                </a>
                <p>Création de designs modernes et intuitifs, garantissant une interface agréable et fluide pour vos
                  utilisateurs finaux, en optimisant l'expérience utilisateur.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <a className="stretched-link">
                  <h3>Gestion de Projet</h3>
                </a>
                <p>Nous assurons une gestion de projet efficace, en suivant des méthodologies agiles pour garantir la
                  livraison dans les délais et la satisfaction du client.</p>
                {/*<a href="#" className="stretched-link"></a>*/}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-pc"></i>

                </div>
                <a className="stretched-link">
                  <h3>Machine Learning</h3>
                </a>
                <p>Développement de solutions basées sur l'apprentissage automatique, afin d'extraire des insights
                  précieux à partir de vos données et améliorer vos processus décisionnels.</p>
                {/*<a href="#" className="stretched-link"></a>*/}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                <a className="stretched-link">
                  <h3>Automatisation de Tâches</h3>
                </a>
                <p>Optimisation de vos processus internes avec des solutions d'automatisation pour réduire les tâches
                  manuelles et améliorer l'efficacité opérationnelle.</p>
                {/*<a href="#" className="stretched-link"></a>*/}
              </div>
            </div>

          </div>

        </div>

      </section>


  );
};

export default Services;
