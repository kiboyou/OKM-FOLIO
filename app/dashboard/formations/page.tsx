import Link from "next/link";
import { listEducation } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteEducation } from "./actions";

export default async function FormationsAdminPage() {
  const items = await listEducation();
  return (
    <>
      <div className="dash-topbar">
        <h1>Formations ({items.length})</h1>
        <Link href="/dashboard/formations/new" className="dash-btn">
          + Nouvelle formation
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Ordre</th>
            <th>Intitulé (FR)</th>
            <th>Période</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucune formation.
              </td>
            </tr>
          )}
          {items.map((e) => (
            <tr key={e.id}>
              <td>{e.sort_order}</td>
              <td>{e.title_fr}</td>
              <td>{e.period}</td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/formations/${e.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteEducation} id={e.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
