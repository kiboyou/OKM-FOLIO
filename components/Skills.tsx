"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Skill } from "@/lib/types";

export default function Skills({ skills }: { skills: Skill[] }) {
  const { t, lang } = useLanguage();
  return (
    <div className="about-me">
      <h4>{t.skills.title}</h4>
      <div className="row gy-8">
        {skills.map((skill) => (
          <div
            className="col-md-6 skills-content skills-animation"
            key={skill.id}
          >
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon || ""}</span>
                <span className="skill-name">
                  {lang === "en" && skill.name_en ? skill.name_en : skill.name}
                </span>
                <span>{`${skill.percentage}%`}</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${skill.percentage}%` }}
                  data-percentage={skill.percentage}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
