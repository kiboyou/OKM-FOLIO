import { listMessages } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deleteMessage, toggleRead } from "./actions";

export default async function MessagesPage() {
  const messages = await listMessages();
  return (
    <>
      <h1>Messages ({messages.length})</h1>
      <p className="dash-muted">Messages reçus via le formulaire de contact.</p>
      <table className="dash-table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Expéditeur</th>
            <th>Sujet & message</th>
            <th>Reçu le</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucun message.
              </td>
            </tr>
          )}
          {messages.map((m) => (
            <tr
              key={m.id}
              style={{ background: m.is_read ? undefined : "#f0fdf4" }}
            >
              <td>
                <strong>{m.name}</strong>
                <br />
                <a href={`mailto:${m.email}`} className="dash-muted">
                  {m.email}
                </a>
              </td>
              <td>
                <strong>{m.subject}</strong>
                <br />
                <span className="dash-muted">{m.message}</span>
              </td>
              <td className="dash-muted">
                {new Date(m.created_at).toLocaleString("fr-FR")}
              </td>
              <td>
                <div className="dash-actions">
                  <form action={toggleRead}>
                    <input type="hidden" name="id" value={m.id} />
                    <input
                      type="hidden"
                      name="is_read"
                      value={m.is_read ? "false" : "true"}
                    />
                    <button type="submit" className="dash-btn small secondary">
                      {m.is_read ? "Marquer non lu" : "Marquer lu"}
                    </button>
                  </form>
                  <DeleteButton action={deleteMessage} id={m.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
