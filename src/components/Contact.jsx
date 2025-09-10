import { useState } from "react";
import useLanguage from '../context/useLanguage.js';

const Contact = () => {
  const [loading, setLoading] = useState(false); // état pour gérer le loading
  const [messageStatus, setMessageStatus] = useState(""); // état pour le statut du message (succès ou erreur)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Utilisation de l'objet classique pour collecter les données
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.description.value, // Changer "description" en "message"
    };

    console.log(data);

    setLoading(true); // Démarre le loading pendant l'envoi
    setMessageStatus(""); // Réinitialise le message de statut

    try {
      const response = await fetch("https://api-okmfolio.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        e.target.reset(); // Réinitialise le formulaire après l'envoi
        setMessageStatus("success"); // Message de succès
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
        setMessageStatus("error"); // Message d'erreur
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      setMessageStatus("error"); // Message d'erreur
    } finally {
      setLoading(false); // Arrête le loading une fois l'envoi terminé

      // Masquer le message après 2 secondes
      setTimeout(() => {
        setMessageStatus(""); // Masque le message après 2 secondes
      }, 2000);
    }
  };

  const { t } = useLanguage();
  return (
      <section id="contact" className="contact section">
        <div className="container section-title">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>
        <div className="container">
          <div className="info-wrap">
            <div className="row gy-5">
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>{t.contact.address}</h3>
                    <p>{t.about?.values?.address || 'Tunis, Tunisie'}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>{t.contact.callMe}</h3>
                    <p>+216 58 486 482</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>{t.contact.emailMe}</h3>
                    <p>ouattarakiboyoumohamed@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={t.contact.placeholders.name}
                    required
                />
              </div>
              <div className="col-md-6">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder={t.contact.placeholders.email}
                    required
                />
              </div>
              <div className="col-12">
                <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder={t.contact.placeholders.subject}
                    required
                />
              </div>
              <div className="col-12">
              <textarea
                  name="description"
                  className="form-control"
                  rows="6"
                  placeholder={t.contact.placeholders.message}
                  required
              ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">{t.contact.sending}</span>
                    </div>
                  ) : (
                    t.contact.send
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Message de statut après l'envoi */}
          {messageStatus && (
              <div className={`alert ${messageStatus === "success" ? "see-more-btn1" : "alert-danger"} mt-3`}>
                {messageStatus === "success" ? t.contact.success : t.contact.error}
              </div>
          )}
        </div>
      </section>
  );
};

export default Contact;
