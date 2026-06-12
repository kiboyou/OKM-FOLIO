import Link from "next/link";
import ImageUploader from "../_components/ImageUploader";
import SubmitButton from "../_components/SubmitButton";
import { toLines } from "@/lib/form";
import type { BlogPost } from "@/lib/types";

// "2025-02-02T10:00:00Z" -> "2025-02-02T10:00" for datetime-local input.
function toLocalInput(iso: string | null): string {
  if (!iso) return "";
  return iso.slice(0, 16);
}

export default function PostForm({
  action,
  post,
}: {
  action: (fd: FormData) => void;
  post?: BlogPost;
}) {
  return (
    <form action={action} className="dash-form">
      {post && <input type="hidden" name="id" value={post.id} />}

      <div className="row-2">
        <div>
          <label>Slug (URL) *</label>
          <input type="text" name="slug" defaultValue={post?.slug} required />
        </div>
        <div>
          <label>Date de publication</label>
          <input
            type="datetime-local"
            name="published_at"
            defaultValue={toLocalInput(post?.published_at ?? null)}
          />
        </div>
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          name="published"
          id="b_published"
          defaultChecked={post?.published ?? false}
        />
        <label htmlFor="b_published" style={{ margin: 0 }}>
          Publié
        </label>
      </div>

      <div className="row-2">
        <div>
          <label>Titre (FR) *</label>
          <input type="text" name="title_fr" defaultValue={post?.title_fr} required />
        </div>
        <div>
          <label>Titre (EN)</label>
          <input type="text" name="title_en" defaultValue={post?.title_en ?? ""} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Extrait (FR)</label>
          <textarea name="excerpt_fr" defaultValue={post?.excerpt_fr} />
        </div>
        <div>
          <label>Extrait (EN)</label>
          <textarea name="excerpt_en" defaultValue={post?.excerpt_en ?? ""} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Contenu (FR — markdown) *</label>
          <textarea
            name="content_fr"
            defaultValue={post?.content_fr}
            style={{ minHeight: 220 }}
            required
          />
        </div>
        <div>
          <label>Contenu (EN — markdown)</label>
          <textarea
            name="content_en"
            defaultValue={post?.content_en ?? ""}
            style={{ minHeight: 220 }}
          />
        </div>
      </div>

      <div>
        <label>Tags (un par ligne)</label>
        <textarea name="tags" defaultValue={toLines(post?.tags)} />
      </div>

      <div>
        <label>Image de couverture</label>
        <ImageUploader name="cover_image_url" initialUrl={post?.cover_image_url ?? ""} />
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/blog" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
