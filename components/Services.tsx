"use client";

import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { Service } from "@/lib/types";

export default function Services({ services }: { services: Service[] }) {
  const { t, lang } = useLanguage();
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>{t.services.title}</h2>
        <p>{t.services.intro}</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.id}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={s.icon}></i>
                </div>
                <div className="stretched-link">
                  <h3>{L(s, "title", lang)}</h3>
                </div>
                <p>{L(s, "description", lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
