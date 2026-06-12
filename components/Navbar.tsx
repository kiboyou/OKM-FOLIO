"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "@/context/LanguageContext";

// Home-page sections (smooth-scrolled when on "/", anchor-linked otherwise).
const SECTION_ITEMS = [
  { id: "hero", key: "hero" },
  { id: "about", key: "about" },
  { id: "cv", key: "cv" },
  { id: "portfolio", key: "portfolio" },
  { id: "services", key: "services" },
  { id: "contact", key: "contact" },
] as const;

// Standalone pages.
const PAGE_ITEMS = [
  { href: "/blog", key: "blog" },
  { href: "/idees", key: "idees" },
] as const;

export default function Navbar() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMobileMenu = () => setMobileNavActive(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", isMobileNavActive);
    return () => document.body.classList.remove("mobile-nav-active");
  }, [isMobileNavActive]);

  return (
    <>
      <i
        className={`mobile-nav-toggle d-xl-none bi ${
          isMobileNavActive ? "bi-x" : "bi-list"
        }`}
        onClick={() => setMobileNavActive((p) => !p)}
        style={{
          cursor: "pointer",
          zIndex: 99999,
          position: "fixed",
          top: 15,
          right: 15,
          fontSize: 32,
          color: "#fff",
        }}
      ></i>

      <nav id="navmenu" className="navmenu d-flex align-items-center">
        <ul>
          {SECTION_ITEMS.map((item) => (
            <li key={item.key}>
              {isHome ? (
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-80}
                  onClick={closeMobileMenu}
                  activeClass="active"
                  style={{ cursor: "pointer" }}
                >
                  {t.nav[item.key]}
                </ScrollLink>
              ) : (
                <Link href={`/#${item.id}`} onClick={closeMobileMenu}>
                  {t.nav[item.key]}
                </Link>
              )}
            </li>
          ))}
          {PAGE_ITEMS.map((item) => (
            <li key={item.key}>
              <Link href={item.href} onClick={closeMobileMenu}>
                {t.nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleLang}
          className="btn btn-sm btn-outline-success ms-2"
          style={{ whiteSpace: "nowrap" }}
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </nav>
    </>
  );
}
