import useLanguage from '../context/useLanguage.js';

const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>{t.services.title}</h2>
        <p>{t.services.intro}</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {t.services.items.map((s, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="service-item position-relative">
                <div className="icon"><i className={s.icon}></i></div>
                <div className="stretched-link"><h3>{s.title}</h3></div>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
