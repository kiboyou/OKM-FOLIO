"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Profile } from "@/lib/types";

export default function Footer({ profile }: { profile: Profile }) {
  const { t } = useLanguage();
  return (
    <footer id="footer" className="footer accent-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">K.M. OUATTARA</strong>{" "}
            <span>{t.footer.rights}</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
