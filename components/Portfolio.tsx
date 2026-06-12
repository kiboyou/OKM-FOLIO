"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types";

export default function Portfolio({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>{t.portfolio.title}</h2>
        <p>{t.portfolio.intro}</p>
      </div>

      <div className="container portfolio-container">
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div
          className="see-more"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Link href="/realisations" className="btn btn-success see-more-btn">
            {t.portfolio.seeMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
