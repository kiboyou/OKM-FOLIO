import Link from "next/link";
import { counts } from "@/lib/admin-data";

function Stat({ n, l, href }: { n: number; l: string; href: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className="dash-stat">
        <div className="num">{n}</div>
        <div className="lbl">{l}</div>
      </div>
    </Link>
  );
}

export default async function DashboardHome() {
  const c = await counts();
  return (
    <>
      <h1>Tableau de bord</h1>
      <p className="dash-muted">
        Gérez l&apos;ensemble du contenu du portfolio depuis cet espace.
      </p>
      <div className="dash-grid-cards" style={{ marginTop: 20 }}>
        <Stat n={c.projects} l="Projets" href="/dashboard/projets" />
        <Stat n={c.blog_posts} l="Articles" href="/dashboard/blog" />
        <Stat n={c.ideas} l="Idées publiées" href="/dashboard/idees" />
        <Stat
          n={c.idea_proposals}
          l="Propositions reçues"
          href="/dashboard/propositions"
        />
        <Stat n={c.messages} l="Messages" href="/dashboard/messages" />
      </div>
    </>
  );
}
