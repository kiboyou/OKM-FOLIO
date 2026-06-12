"use client";

import { useLanguage } from "@/context/LanguageContext";
import TypedText from "./TypedText";
import type { Profile } from "@/lib/types";

export default function Hero({ profile }: { profile: Profile }) {
  const { t, lang } = useLanguage();
  const typed = lang === "fr" ? profile.typed_fr : profile.typed_en;
  return (
    <section id="hero" className="hero section dark-background">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.hero_image_url} alt={t.hero.imgAlt} />
      <div className="container d-flex flex-column align-items-center justify-content-center text-center">
        <h2>
          {t.hero.greeting} {profile.name}
        </h2>
        <TypedText strings={typed} />
      </div>
    </section>
  );
}
