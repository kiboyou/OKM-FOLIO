import { listProposals } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteProposal, setProposalStatus } from "./actions";
import type { IdeaProposalStatus } from "@/lib/types";

const STATUS_LABELS: Record<IdeaProposalStatus, string> = {
  new: "Nouvelle",
  reviewed: "Vue",
  accepted: "Acceptée",
  rejected: "Rejetée",
};
const STATUS_BADGE: Record<IdeaProposalStatus, string> = {
  new: "blue",
  reviewed: "orange",
  accepted: "green",
  rejected: "gray",
};

export default async function ProposalsPage() {
  const proposals = await listProposals();
  return (
    <>
      <h1>Propositions d&apos;idées ({proposals.length})</h1>
      <p className="dash-muted">Idées soumises par les visiteurs.</p>
      <table className="dash-table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Idée</th>
            <th>Statut</th>
            <th>Reçue le</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {proposals.length === 0 && (
            <tr>
              <td colSpan={5} className="dash-muted">
                Aucune proposition.
              </td>
            </tr>
          )}
          {proposals.map((p) => (
            <tr key={p.id}>
              <td>
                <strong>{p.author_name}</strong>
                <br />
                <a href={`mailto:${p.author_email}`} className="dash-muted">
                  {p.author_email}
                </a>
              </td>
              <td>
                <strong>{p.title}</strong>
                <br />
                <span className="dash-muted">{p.message}</span>
              </td>
              <td>
                <span className={`dash-badge ${STATUS_BADGE[p.status]}`}>
                  {STATUS_LABELS[p.status]}
                </span>
              </td>
              <td className="dash-muted">
                {new Date(p.created_at).toLocaleDateString("fr-FR")}
              </td>
              <td>
                <div className="dash-actions">
                  <form action={setProposalStatus} className="dash-actions">
                    <input type="hidden" name="id" value={p.id} />
                    <select name="status" defaultValue={p.status}>
                      <option value="new">Nouvelle</option>
                      <option value="reviewed">Vue</option>
                      <option value="accepted">Acceptée</option>
                      <option value="rejected">Rejetée</option>
                    </select>
                    <button type="submit" className="dash-btn small secondary">
                      OK
                    </button>
                  </form>
                  <DeleteButton action={deleteProposal} id={p.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
