"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { Certification, Education, Profile } from "@/lib/types";

export default function Resume({
  profile,
  education,
  certifications,
}: {
  profile: Profile;
  education: Education[];
  certifications: Certification[];
}) {
  const { t, lang } = useLanguage();
  const highlight = certifications.find((c) => c.is_highlight);
  const others = certifications.filter((c) => !c.is_highlight);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="cv" className="resume section">
      <div className="container section-title">
        <h2>{t.resume.title}</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {/* Formation */}
          <div className="col-lg-6">
            <h3 className="resume-title">{t.resume.formation}</h3>
            {education.map((f) => (
              <div className="resume-item" key={f.id}>
                <h4>{L(f, "title", lang)}</h4>
                <h5>{f.period}</h5>
                <p>
                  <em>{L(f, "school", lang)}</em>
                </p>
              </div>
            ))}
          </div>

          {/* Certifications (PCAP highlighted first) */}
          <div className="col-lg-6">
            <h3 className="resume-title">{t.resume.certifications}</h3>
            {highlight && (
              <div
                className="resume-item border rounded p-3 mb-3"
                style={{ borderColor: "var(--accent-color)" }}
              >
                <h4 className="mb-1">{highlight.title}</h4>
                <h5 className="text-muted">{highlight.year}</h5>
                <p>
                  <em>{L(highlight, "description", lang)}</em>
                </p>
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success btn-sm"
                >
                  {t.resume.badge}
                </a>
              </div>
            )}
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              aria-controls="other-certs-grid"
            >
              {showAll ? t.resume.hideAll : t.resume.showAll}
            </button>
          </div>
        </div>

        {/* Full-width grid of other certs when open */}
        <div
          className={`row mt-4 ${showAll ? "" : "d-none"}`}
          id="other-certs-grid"
        >
          {others.map((c) => (
            <div key={c.id} className="col-sm-6 col-lg-4 mb-3">
              <div
                className="resume-item h-100 p-3 border rounded"
                style={{ borderColor: "#e5e5e5" }}
              >
                <h4 className="mb-1" style={{ fontSize: "1rem" }}>
                  {c.title}
                </h4>
                <h5 className="text-muted mb-2" style={{ fontSize: ".8rem" }}>
                  {c.year}
                </h5>
                <p className="mb-2" style={{ fontSize: ".8rem" }}>
                  <em>{L(c, "description", lang)}</em>
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-success small"
                >
                  {t.resume.otherCertLink}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CV download buttons */}
      <div className="text-center mt-4">
        <a href={profile.cv_fr_url} download>
          <button className="see-more-btn btn btn-success mt-10">
            {t.resume.cvFr}
          </button>
        </a>
        <a href={profile.cv_en_url} download>
          <button className="see-more-btn btn btn-success ms-2">
            {t.resume.cvEn}
          </button>
        </a>
      </div>
    </section>
  );
}
