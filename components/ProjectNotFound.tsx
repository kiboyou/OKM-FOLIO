"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectNotFound() {
  const { t } = useLanguage();
  return (
    <div className="text-center p-8" style={{ padding: "80px 0" }}>
      <h1 className="text-2xl font-bold">{t.projectDetail.notfoundTitle}</h1>
      <p className="text-gray-600">{t.projectDetail.notfoundMessage}</p>
    </div>
  );
}
