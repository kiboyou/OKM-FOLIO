"use client";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/context/LanguageContext";
import { L, Larr } from "@/lib/i18n";
import type { Project } from "@/lib/types";

export default function RealisationDetailView({
  project,
}: {
  project: Project;
}) {
  const { t, lang } = useLanguage();

  return (
    <main className="main">
      <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{L(project, "title", lang)}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">{t.projectDetail.breadcrumbHome}</Link>
              </li>
              <li className="current">{L(project, "title", lang)}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container">
          <div className="portfolio-details-slider swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              navigation
              pagination={{ clickable: true }}
              slidesPerView="auto"
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={`${L(project, "title", lang)} ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>{L(project, "title", lang)}</h2>
                <p className="center-text">
                  {L(project, "description_long", lang)}
                </p>

                <div className="mb-4">
                  <h4>{t.projectDetail.techUsed}</h4>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>🔧 {tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4>{t.projectDetail.features}</h4>
                  <ul>
                    {Larr(project, "features", lang).map((fonct, index) => (
                      <li key={index}>🚀 {fonct}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4>{t.projectDetail.collaborators}</h4>
                  <ul>
                    {project.collaborators.map((person, index) => (
                      <li key={index}>
                        👤 {person.name} – {person.role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>{t.projectDetail.projectInfo}</h3>
                <ul>
                  <li>
                    <strong>{t.projectDetail.category}</strong>{" "}
                    {L(project, "category", lang)}
                  </li>
                  <li>
                    <strong>{t.projectDetail.client}</strong> {project.client}
                  </li>
                  <li>
                    <strong>{t.projectDetail.projectDate}</strong>{" "}
                    {project.date_label}
                  </li>
                  {project.url && (
                    <>
                      <li>
                        <strong>{t.projectDetail.projectUrl} </strong>
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {project.url}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-visit"
                        >
                          {t.projectDetail.visitSite}
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
