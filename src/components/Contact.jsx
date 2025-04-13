import React, { useState } from "react";

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
      const response = await fetch("http://127.0.0.1:8000/contact", {
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

  return (
      <section id="contact" className="contact section">
        <div className="container section-title">
          <h2>Contact</h2>
          <p>N'hésitez pas à me contacter pour toute question ou opportunité.</p>
        </div>
        <div className="container">
          <div className="info-wrap">
            <div className="row gy-5">
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Adresse</h3>
                    <p>Tunis, Ariana, Tunisie</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Appelez-moi</h3>
                    <p>+216 58 486 482</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Envoyez-moi un email</h3>
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
                    placeholder="Votre Nom"
                    required
                />
              </div>
              <div className="col-md-6">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Votre Email"
                    required
                />
              </div>
              <div className="col-12">
                <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Objet"
                    required
                />
              </div>
              <div className="col-12">
              <textarea
                  name="description"
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                  required
              ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Chargement...</span>
                      </div>
                  ) : (
                      "Envoyer"
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Message de statut après l'envoi */}
          {messageStatus && (
              <div className={`alert ${messageStatus === "success" ? "see-more-btn1" : "alert-danger"} mt-3`}>
                {messageStatus === "success"
                    ? "Le message a été envoyé avec succès !"
                    : "Une erreur est survenue. Veuillez réessayer."}
              </div>
          )}
        </div>
      </section>
  );
};

export default Contact;
