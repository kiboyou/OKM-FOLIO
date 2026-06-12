import Link from "next/link";
import ImageUploader from "../_components/ImageUploader";
import SubmitButton from "../_components/SubmitButton";
import type { Idea } from "@/lib/types";

export default function IdeaForm({
  action,
  idea,
}: {
  action: (fd: FormData) => void;
  idea?: Idea;
}) {
  return (
    <form action={action} className="dash-form">
      {idea && <input type="hidden" name="id" value={idea.id} />}

      <div className="row-2">
        <div>
          <label>Slug (URL) *</label>
          <input type="text" name="slug" defaultValue={idea?.slug} required />
        </div>
        <div>
          <label>Ordre</label>
          <input
            type="number"
            name="sort_order"
            defaultValue={idea?.sort_order ?? 0}
          />
        </div>
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          name="published"
          id="i_published"
          defaultChecked={idea?.published ?? true}
        />
        <label htmlFor="i_published" style={{ margin: 0 }}>
          Publiée
        </label>
      </div>

      <div className="row-2">
        <div>
          <label>Titre (FR) *</label>
          <input type="text" name="title_fr" defaultValue={idea?.title_fr} required />
        </div>
        <div>
          <label>Titre (EN)</label>
          <input type="text" name="title_en" defaultValue={idea?.title_en ?? ""} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Description (FR)</label>
          <textarea name="description_fr" defaultValue={idea?.description_fr} />
        </div>
        <div>
          <label>Description (EN)</label>
          <textarea
            name="description_en"
            defaultValue={idea?.description_en ?? ""}
          />
        </div>
      </div>

      <div>
        <label>Image</label>
        <ImageUploader name="image_url" initialUrl={idea?.image_url ?? ""} />
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/idees" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
