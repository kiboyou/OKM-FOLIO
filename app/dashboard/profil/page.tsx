import ImageUploader from "../_components/ImageUploader";
import FileUploader from "../_components/FileUploader";
import SubmitButton from "../_components/SubmitButton";
import { getProfileRow } from "@/lib/admin-data";
import { seedProfile } from "@/lib/seed-data";
import { toLines } from "@/lib/form";
import { saveProfile } from "./actions";

export default async function ProfilPage() {
  const existing = await getProfileRow();
  const p = existing ?? seedProfile;

  return (
    <>
      <h1>Profil / À propos</h1>
      <p className="dash-muted">
        Informations affichées dans les sections Accueil et À propos.
      </p>

      <form action={saveProfile} className="dash-form" style={{ marginTop: 16 }}>
        <input type="hidden" name="id" value={existing?.id ?? ""} />

        <div className="row-2">
          <div>
            <label>Nom *</label>
            <input type="text" name="name" defaultValue={p.name} required />
          </div>
          <div>
            <label>Titre / accroche (optionnel)</label>
            <input type="text" name="title" defaultValue={p.title ?? ""} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Email</label>
            <input type="email" name="email" defaultValue={p.email} />
          </div>
          <div>
            <label>Téléphone</label>
            <input type="text" name="phone" defaultValue={p.phone} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>LinkedIn</label>
            <input type="url" name="linkedin" defaultValue={p.linkedin} />
          </div>
          <div>
            <label>GitHub</label>
            <input type="url" name="github" defaultValue={p.github} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Adresse (FR)</label>
            <input type="text" name="address_fr" defaultValue={p.address_fr} />
          </div>
          <div>
            <label>Adresse (EN)</label>
            <input type="text" name="address_en" defaultValue={p.address_en} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Disponibilité (FR)</label>
            <input
              type="text"
              name="availability_fr"
              defaultValue={p.availability_fr}
            />
          </div>
          <div>
            <label>Disponibilité (EN)</label>
            <input
              type="text"
              name="availability_en"
              defaultValue={p.availability_en}
            />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Langues (FR)</label>
            <input type="text" name="languages_fr" defaultValue={p.languages_fr} />
          </div>
          <div>
            <label>Langues (EN)</label>
            <input type="text" name="languages_en" defaultValue={p.languages_en} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Description / À propos (FR)</label>
            <textarea
              name="description_fr"
              defaultValue={p.description_fr}
              style={{ minHeight: 160 }}
            />
            <div className="field-hint">
              Un paragraphe par ligne (séparés par un retour à la ligne).
            </div>
          </div>
          <div>
            <label>Description / À propos (EN)</label>
            <textarea
              name="description_en"
              defaultValue={p.description_en}
              style={{ minHeight: 160 }}
            />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Texte animé (FR — une ligne par phrase)</label>
            <textarea name="typed_fr" defaultValue={toLines(p.typed_fr)} />
          </div>
          <div>
            <label>Texte animé (EN — une ligne par phrase)</label>
            <textarea name="typed_en" defaultValue={toLines(p.typed_en)} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>Image d&apos;arrière-plan (Hero)</label>
            <ImageUploader name="hero_image_url" initialUrl={p.hero_image_url} />
          </div>
          <div>
            <label>Photo (À propos)</label>
            <ImageUploader name="about_image_url" initialUrl={p.about_image_url} />
          </div>
        </div>

        <div className="row-2">
          <div>
            <label>CV (FR — PDF)</label>
            <FileUploader name="cv_fr_url" initialUrl={p.cv_fr_url} accept=".pdf" />
          </div>
          <div>
            <label>CV (EN — PDF)</label>
            <FileUploader name="cv_en_url" initialUrl={p.cv_en_url} accept=".pdf" />
          </div>
        </div>

        <div className="form-actions">
          <SubmitButton>Enregistrer le profil</SubmitButton>
        </div>
      </form>
    </>
  );
}
