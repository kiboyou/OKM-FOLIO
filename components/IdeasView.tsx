"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { Idea } from "@/lib/types";

export default function IdeasView({ ideas }: { ideas: Idea[] }) {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      author_name: (form.elements.namedItem("author_name") as HTMLInputElement)
        .value,
      author_email: (
        form.elements.namedItem("author_email") as HTMLInputElement
      ).value,
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/idea-proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <>
      {/* Published ideas */}
      <section className="section">
        <div className="container section-title">
          <h2>{t.idees.publishedTitle}</h2>
          <p>{t.idees.intro}</p>
        </div>
        <div className="container">
          {ideas.length === 0 ? (
            <p className="text-center">{t.idees.empty}</p>
          ) : (
            <div className="row gy-4">
              {ideas.map((idea) => (
                <div className="col-lg-4 col-md-6" key={idea.id}>
                  <div
                    className="service-item position-relative"
                    style={{ height: "100%" }}
                  >
                    <div className="icon">
                      <i className="bi bi-lightbulb"></i>
                    </div>
                    <h3>{L(idea, "title", lang)}</h3>
                    <p>{L(idea, "description", lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Propose an idea */}
      <section className="contact section light-background">
        <div className="container section-title">
          <h2>{t.idees.proposeTitle}</h2>
          <p>{t.idees.proposeIntro}</p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="author_name"
                  className="form-control"
                  placeholder={t.idees.placeholders.name}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="author_email"
                  className="form-control"
                  placeholder={t.idees.placeholders.email}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder={t.idees.placeholders.title}
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows={6}
                  placeholder={t.idees.placeholders.message}
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? t.idees.sending : t.idees.send}
                </button>
              </div>
            </div>
          </form>

          {status && (
            <div
              className={`alert ${
                status === "success" ? "see-more-btn1" : "alert-danger"
              } mt-3`}
            >
              {status === "success" ? t.idees.success : t.idees.error}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
