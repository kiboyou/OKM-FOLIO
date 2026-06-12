"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types";

export default function AllPortfolio({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>{t.portfolio.intro}</h2>
      </div>

      <div className="container portfolio-container">
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
