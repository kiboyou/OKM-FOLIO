import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import type { Certification } from "@/lib/types";

export default function CertificationForm({
  action,
  certification,
}: {
  action: (fd: FormData) => void;
  certification?: Certification;
}) {
  const c = certification;
  return (
    <form action={action} className="dash-form">
      {c && <input type="hidden" name="id" value={c.id} />}

      <div>
        <label>Titre *</label>
        <input type="text" name="title" defaultValue={c?.title} required />
      </div>

      <div className="row-2">
        <div>
          <label>Année</label>
          <input type="text" name="year" defaultValue={c?.year} />
        </div>
        <div>
          <label>Ordre</label>
          <input type="number" name="sort_order" defaultValue={c?.sort_order ?? 0} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Description (FR)</label>
          <textarea name="description_fr" defaultValue={c?.description_fr} />
        </div>
        <div>
          <label>Description (EN)</label>
          <textarea name="description_en" defaultValue={c?.description_en} />
        </div>
      </div>

      <div>
        <label>Lien (badge / certificat)</label>
        <input type="url" name="link" defaultValue={c?.link} />
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          name="is_highlight"
          id="c_highlight"
          defaultChecked={c?.is_highlight ?? false}
        />
        <label htmlFor="c_highlight" style={{ margin: 0 }}>
          Mettre en avant (certification principale)
        </label>
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/certifications" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
