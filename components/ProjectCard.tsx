"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage();
  const cover = project.images?.[0]?.url;
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item cardPro">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {cover && (
        <img src={cover} className="img-fluid" alt={L(project, "title", lang)} />
      )}
      <div className="portfolio-info">
        <h4>{L(project, "title", lang)}</h4>
        <p>{L(project, "description", lang)}</p>
        <Link
          href={`/realisations/${project.slug}`}
          className="details-link"
          title={t.projectDetail.viewDetail}
        >
          <i className="bi bi-link-45deg"></i>
        </Link>
      </div>
    </div>
  );
}
