import { notFound } from "next/navigation";
import { getSkill } from "@/lib/admin-data";
import SkillForm from "../SkillForm";
import { updateSkill } from "../actions";

export default async function EditSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = await getSkill(id);
  if (!skill) notFound();
  return (
    <>
      <h1>Modifier : {skill.name}</h1>
      <SkillForm action={updateSkill} skill={skill} />
    </>
  );
}
