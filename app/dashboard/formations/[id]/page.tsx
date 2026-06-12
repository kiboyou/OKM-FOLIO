import { notFound } from "next/navigation";
import { getEducation } from "@/lib/admin-data";
import EducationForm from "../EducationForm";
import { updateEducation } from "../actions";

export default async function EditEducationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const education = await getEducation(id);
  if (!education) notFound();
  return (
    <>
      <h1>Modifier : {education.title_fr}</h1>
      <EducationForm action={updateEducation} education={education} />
    </>
  );
}
