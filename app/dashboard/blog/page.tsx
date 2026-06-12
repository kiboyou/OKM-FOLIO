import Link from "next/link";
import { listBlogPosts } from "@/lib/admin-data";
import DeleteButton from "../_components/DeleteButton";
import { deletePost } from "./actions";

export default async function BlogAdminPage() {
  const posts = await listBlogPosts();
  return (
    <>
      <div className="dash-topbar">
        <h1>Blog ({posts.length})</h1>
        <Link href="/dashboard/blog/new" className="dash-btn">
          + Nouvel article
        </Link>
      </div>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Slug</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 && (
            <tr>
              <td colSpan={4} className="dash-muted">
                Aucun article.
              </td>
            </tr>
          )}
          {posts.map((p) => (
            <tr key={p.id}>
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
                    href={`/dashboard/blog/${p.id}`}
                    className="dash-btn small secondary"
                  >
                    Modifier
                  </Link>
                  <DeleteButton action={deletePost} id={p.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
