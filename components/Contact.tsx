"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { Profile } from "@/lib/types";

export default function Contact({ profile }: { profile: Profile }) {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<"" | "success" | "error">(
    ""
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("description") as HTMLTextAreaElement)
        .value,
    };

    setLoading(true);
    setMessageStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setMessageStatus("success");
      } else {
        setMessageStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setMessageStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setMessageStatus(""), 2000);
    }
  };

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
                  <p>{L(profile, "address", lang)}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>{t.contact.callMe}</h3>
                  <p>{profile.phone}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>{t.contact.emailMe}</h3>
                  <p>{profile.email}</p>
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
                rows={6}
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

        {messageStatus && (
          <div
            className={`alert ${
              messageStatus === "success" ? "see-more-btn1" : "alert-danger"
            } mt-3`}
          >
            {messageStatus === "success" ? t.contact.success : t.contact.error}
          </div>
        )}
      </div>
    </section>
  );
}
