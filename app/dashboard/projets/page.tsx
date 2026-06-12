import Link from "next/link";
import { listProjects } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteProject } from "./actions";

export default async function ProjectsPage() {
  const projects = await listProjects();
  return (
    <>
      <div className="dash-topbar">
        <h1>Projets ({projects.length})</h1>
        <Link href="/dashboard/projets/new" className="dash-btn">
          + Nouveau projet
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Ordre</th>
            <th>Titre</th>
            <th>Slug</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 && (
            <tr>
              <td colSpan={5} className="dash-muted">
                Aucun projet.
              </td>
            </tr>
          )}
          {projects.map((p) => (
            <tr key={p.id}>
              <td>{p.sort_order}</td>
              <td>{p.title_fr}</td>
              <td>{p.slug}</td>
              <td>
                <span className={`dash-badge ${p.published ? "green" : "gray"}`}>
                  {p.published ? "Publié" : "Brouillon"}
                </span>
              </td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/projets/${p.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteProject} id={p.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
