"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Labels } from "@/i18n/labels";
import type { Lang } from "@/lib/types";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
  t: Labels;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "fr",
      toggleLang: () => {},
      setLang: () => {},
      t: translations.fr,
    };
  }
  return ctx;
}

export { LanguageContext };
