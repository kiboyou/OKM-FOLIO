import SkillForm from "../SkillForm";
import { createSkill } from "../actions";

export default function NewSkillPage() {
  return (
    <>
      <h1>Nouvelle compétence</h1>
      <SkillForm action={createSkill} />
    </>
  );
}
