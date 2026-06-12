import Link from "next/link";
import { listCertifications } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteCertification } from "./actions";

export default async function CertificationsAdminPage() {
  const certs = await listCertifications();
  return (
    <>
      <div className="dash-topbar">
        <h1>Certifications ({certs.length})</h1>
        <Link href="/dashboard/certifications/new" className="dash-btn">
          + Nouvelle certification
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Année</th>
            <th>Mise en avant</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {certs.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucune certification.
              </td>
            </tr>
          )}
          {certs.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.year}</td>
              <td>
                {c.is_highlight ? (
                  <span className="dash-badge green">Principale</span>
                ) : (
                  <span className="dash-badge gray">—</span>
                )}
              </td>
              <td>
                <div className="dash-actions">
                  <Link
                    href={`/dashboard/certifications/${c.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deleteCertification} id={c.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
