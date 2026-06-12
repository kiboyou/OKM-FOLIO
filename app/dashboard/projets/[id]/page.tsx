import { notFound } from "next/navigation";
import { getProject } from "@/lib/admin-data";
import ProjectForm from "../ProjectForm";
import { updateProject } from "../actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();
  return (
    <>
      <h1>Modifier : {project.title_fr}</h1>
      <ProjectForm action={updateProject} project={project} />
    </>
  );
}
