import Link from "next/link";
import { listIdeas } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteIdea } from "./actions";

export default async function IdeasAdminPage() {
  const ideas = await listIdeas();
  return (
    <>
      <div className="dash-topbar">
        <h1>Idées publiées ({ideas.length})</h1>
        <Link href="/dashboard/idees/new" className="dash-btn">
          + Nouvelle idée
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Ordre</th>
            <th>Titre</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ideas.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucune idée.
              </td>
            </tr>
          )}
          {ideas.map((i) => (
            <tr key={i.id}>
              <td>{i.sort_order}</td>
              <td>{i.title_fr}</td>
              <td>
                <span className={`dash-badge ${i.published ? "green" : "gray"}`}>
                  {i.published ? "Publiée" : "Brouillon"}
                </span>
              </td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/idees/${i.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteIdea} id={i.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
