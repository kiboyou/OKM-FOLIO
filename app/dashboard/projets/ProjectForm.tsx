import Link from "next/link";
import MultiImageField from "../_components/MultiImageField";
import SubmitButton from "../_components/SubmitButton";
import { toLines } from "@/lib/form";
import type { Project } from "@/lib/types";

export default function ProjectForm({
  action,
  project,
}: {
  action: (fd: FormData) => void;
  project?: Project;
}) {
  const collabLines = (project?.collaborators ?? [])
    .map((c) => `${c.name} | ${c.role}`)
    .join("\n");

  return (
    <form action={action} className="dash-form">
      {project && <input type="hidden" name="id" value={project.id} />}

      <div className="row-2">
        <div>
          <label>Slug (URL) *</label>
          <input type="text" name="slug" defaultValue={project?.slug} required />
        </div>
        <div>
          <label>Ordre</label>
          <input
            type="number"
            name="sort_order"
            defaultValue={project?.sort_order ?? 0}
          />
        </div>
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={project?.published ?? true}
        />
        <label htmlFor="published" style={{ margin: 0 }}>
          Publié
        </label>
      </div>

      <div className="row-2">
        <div>
          <label>Titre (FR) *</label>
          <input type="text" name="title_fr" defaultValue={project?.title_fr} required />
        </div>
        <div>
          <label>Titre (EN)</label>
          <input
            type="text"
            name="title_en"
            defaultValue={project?.title_en ?? ""}
          />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Description courte (FR)</label>
          <textarea name="description_fr" defaultValue={project?.description_fr} />
        </div>
        <div>
          <label>Description courte (EN)</label>
          <textarea
            name="description_en"
            defaultValue={project?.description_en ?? ""}
          />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Description longue (FR)</label>
          <textarea
            name="description_long_fr"
            defaultValue={project?.description_long_fr}
            style={{ minHeight: 160 }}
          />
        </div>
        <div>
          <label>Description longue (EN)</label>
          <textarea
            name="description_long_en"
            defaultValue={project?.description_long_en ?? ""}
            style={{ minHeight: 160 }}
          />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Catégorie (FR)</label>
          <input type="text" name="category_fr" defaultValue={project?.category_fr} />
        </div>
        <div>
          <label>Catégorie (EN)</label>
          <input
            type="text"
            name="category_en"
            defaultValue={project?.category_en ?? ""}
          />
        </div>
      </div>

      <div className="row-2">
        <div>
          <label>Client</label>
          <input type="text" name="client" defaultValue={project?.client ?? ""} />
        </div>
        <div>
          <label>Date (libellé)</label>
          <input
            type="text"
            name="date_label"
            defaultValue={project?.date_label ?? ""}
          />
        </div>
      </div>

      <div>
        <label>URL du projet (sans https://)</label>
        <input type="text" name="url" defaultValue={project?.url ?? ""} />
      </div>

      <div>
        <label>Technologies (une par ligne)</label>
        <textarea
          name="technologies"
          defaultValue={toLines(project?.technologies)}
        />
      </div>

      <div className="row-2">
        <div>
          <label>Fonctionnalités (FR — une par ligne)</label>
          <textarea name="features_fr" defaultValue={toLines(project?.features_fr)} />
        </div>
        <div>
          <label>Fonctionnalités (EN — une par ligne)</label>
          <textarea name="features_en" defaultValue={toLines(project?.features_en)} />
        </div>
      </div>

      <div>
        <label>Collaborateurs (un par ligne — format : Nom | Rôle)</label>
        <textarea name="collaborators" defaultValue={collabLines} />
      </div>

      <div>
        <label>Images</label>
        <MultiImageField
          name="images"
          initial={(project?.images ?? []).map((i) => i.url)}
        />
      </div>

      <div className="form-actions">
        <SubmitButton />
        <Link href="/dashboard/projets" className="dash-btn secondary">
          Annuler
        </Link>
      </div>
    </form>
  );
}
