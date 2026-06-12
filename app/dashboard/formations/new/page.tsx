import EducationForm from "../EducationForm";
import { createEducation } from "../actions";

export default function NewEducationPage() {
  return (
    <>
      <h1>Nouvelle formation</h1>
      <EducationForm action={createEducation} />
    </>
  );
}
