import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import type { Skill } from "@/lib/types";

export default function SkillForm({
  action,
  skill,
}: {
  action: (fd: FormData) => void;
  skill?: Skill;
}) {
  return (
    <form action={action} className="dash-form">
      {skill && <input type="hidden" name="id" value={skill.id} />}

      <div>
        <label>Nom *</label>
        <input type="text" name="name" defaultValue={skill?.name} required />
      </div>

      <div className="row-2">
        <div>
          <label>Pourcentage (0–100)</label>
          <input
            type="number"
            name="percentage"
            min={0}
            max={100}
            defaultValue={skill?.percentage ?? 50}
          />
        </div>
        <div>
          <label>Ordre</label>
          <input
            type="number"
            name="sort_order"
            defaultValue={skill?.sort_order ?? 0}
          />
        </div>
      </div>

      <div>
        <label>Icône / emoji (optionnel)</label>
        <input type="text" name="icon" defaultValue={skill?.icon ?? ""} />
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/competences" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
