import Link from "next/link";
import { listSkills } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteSkill } from "./actions";

export default async function SkillsAdminPage() {
  const skills = await listSkills();
  return (
    <>
      <div className="dash-topbar">
        <h1>Compétences ({skills.length})</h1>
        <Link href="/dashboard/competences/new" className="dash-btn">
          + Nouvelle compétence
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Ordre</th>
            <th>Nom</th>
            <th>Niveau</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {skills.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucune compétence.
              </td>
            </tr>
          )}
          {skills.map((s) => (
            <tr key={s.id}>
              <td>{s.sort_order}</td>
              <td>{s.name}</td>
              <td>{s.percentage}%</td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/competences/${s.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteSkill} id={s.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
