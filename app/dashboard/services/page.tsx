import Link from "next/link";
import { listServices } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteService } from "./actions";

export default async function ServicesAdminPage() {
  const services = await listServices();
  return (
    <>
      <div className="dash-topbar">
        <h1>Services ({services.length})</h1>
        <Link href="/dashboard/services/new" className="dash-btn">
          + Nouveau service
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Ordre</th>
            <th>Icône</th>
            <th>Titre (FR)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucun service.
              </td>
            </tr>
          )}
          {services.map((s) => (
            <tr key={s.id}>
              <td>{s.sort_order}</td>
              <td>
                <i className={s.icon}></i>
              </td>
              <td>{s.title_fr}</td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/services/${s.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteService} id={s.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
