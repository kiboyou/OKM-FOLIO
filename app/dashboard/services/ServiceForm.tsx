import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import type { Service } from "@/lib/types";

export default function ServiceForm({
  action,
  service,
}: {
  action: (fd: FormData) => void;
  service?: Service;
}) {
  return (
    <form action={action} className="dash-form">
      {service && <input type="hidden" name="id" value={service.id} />}

      <div className="row-2">
        <div>
          <label>Titre (FR) *</label>
          <input type="text" name="title_fr" defaultValue={service?.title_fr} required />
        </div>
        <div>
          <label>Titre (EN)</label>
          <input type="text" name="title_en" defaultValue={service?.title_en} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Description (FR)</label>
          <textarea name="description_fr" defaultValue={service?.description_fr} />
        </div>
        <div>
          <label>Description (EN)</label>
          <textarea name="description_en" defaultValue={service?.description_en} />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Icône (classe bootstrap-icons)</label>
          <input
            type="text"
            name="icon"
            defaultValue={service?.icon ?? "bi bi-code-slash"}
          />
          <div className="field-hint">ex : bi bi-code-slash, bi bi-laptop…</div>
        </div>
        <div>
          <label>Ordre</label>
          <input
            type="number"
            name="sort_order"
            defaultValue={service?.sort_order ?? 0}
          />
        </div>
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/services" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
