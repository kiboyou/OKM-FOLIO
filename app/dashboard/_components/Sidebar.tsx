"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const LINKS = [
  { href: "/dashboard", label: "Accueil", icon: "bi-speedometer2", exact: true },
  { href: "/dashboard/projets", label: "Projets", icon: "bi-folder" },
  { href: "/dashboard/blog", label: "Blog", icon: "bi-journal-text" },
  { href: "/dashboard/idees", label: "Idées publiées", icon: "bi-lightbulb" },
  {
    href: "/dashboard/propositions",
    label: "Propositions d'idées",
    icon: "bi-inbox",
  },
  { href: "/dashboard/messages", label: "Messages", icon: "bi-envelope" },
  { href: "/dashboard/services", label: "Services", icon: "bi-grid" },
  { href: "/dashboard/competences", label: "Compétences", icon: "bi-bar-chart" },
  {
    href: "/dashboard/certifications",
    label: "Certifications",
    icon: "bi-patch-check",
  },
  { href: "/dashboard/formations", label: "Formations", icon: "bi-mortarboard" },
  { href: "/dashboard/profil", label: "Profil / À propos", icon: "bi-person" },
];

export default function Sidebar({ email }: { email?: string }) {
  const pathname = usePathname();
  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <aside className="dash-sidebar">
      <div className="brand">-O.K.M- Admin</div>
      <nav>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href, l.exact) ? "active" : ""}
          >
            <i className={`bi ${l.icon}`}></i>
            {l.label}
          </Link>
        ))}
        <Link href="/" target="_blank">
          <i className="bi bi-box-arrow-up-right"></i>
          Voir le site
        </Link>
      </nav>
      <div className="sidebar-footer">
        <div style={{ marginBottom: 8 }}>{email}</div>
        <SignOutButton />
      </div>
    </aside>
  );
}
