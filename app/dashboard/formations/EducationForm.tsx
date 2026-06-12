import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import type { Education } from "@/lib/types";

export default function EducationForm({
  action,
  education,
}: {
  action: (fd: FormData) => void;
  education?: Education;
}) {
  const e = education;
  return (
    <form action={action} className="dash-form">
      {e && <input type="hidden" name="id" value={e.id} />}

      <div className="row-2">
        <div>
          <label>Intitulé (FR) *</label>
          <input type="text" name="title_fr" defaultValue={e?.title_fr} required />
        </div>
        <div>
          <label>Intitulé (EN)</label>
          <input type="text" name="title_en" defaultValue={e?.title_en} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Période</label>
          <input type="text" name="period" defaultValue={e?.period} />
        </div>
        <div>
          <label>Ordre</label>
          <input type="number" name="sort_order" defaultValue={e?.sort_order ?? 0} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>École (FR)</label>
          <input type="text" name="school_fr" defaultValue={e?.school_fr} />
        </div>
        <div>
          <label>École (EN)</label>
          <input type="text" name="school_en" defaultValue={e?.school_en} />
        </div>
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/formations" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
