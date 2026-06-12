"use client";

import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import Skills from "./Skills";
import type { Profile, Skill } from "@/lib/types";

export default function About({
  profile,
  skills,
}: {
  profile: Profile;
  skills: Skill[];
}) {
  const { t, lang } = useLanguage();
  const description = L(profile, "description", lang);

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.about_image_url}
                  className="img-fluid"
                  alt={profile.name}
                />
              </div>
              <div className="col-lg-7 about-info">
                <p>
                  <strong>{t.about.labels.name} : </strong>{" "}
                  <span>{profile.name}</span>
                </p>
                <p>
                  <strong>{t.about.labels.email} : </strong>{" "}
                  <span>{profile.email}</span>
                </p>
                <p>
                  <strong>{t.about.labels.phone} : </strong>{" "}
                  <span>{profile.phone}</span>
                </p>
                <p>
                  <strong>{t.about.labels.address} : </strong>{" "}
                  <span>{L(profile, "address", lang)}</span>
                </p>
                <p>
                  <strong></strong>{" "}
                  <span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.about.labels.linkedin}
                    </a>
                  </span>
                </p>
                <p>
                  <strong></strong>{" "}
                  <span>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.about.labels.github}
                    </a>
                  </span>
                </p>
                <p>
                  <strong>{t.about.labels.languages} : </strong>{" "}
                  <span>{L(profile, "languages", lang)}</span>
                </p>
                <p>
                  <strong>{t.about.labels.availability} : </strong>{" "}
                  <span>{L(profile, "availability", lang)}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me">
              <h4>{t.about.heading}</h4>
              {description.split("\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
        <Skills skills={skills} />
      </div>
    </section>
  );
}
