import { notFound } from "next/navigation";
import { getIdea } from "@/lib/admin-data";
import IdeaForm from "../IdeaForm";
import { updateIdea } from "../actions";

export default async function EditIdeaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idea = await getIdea(id);
  if (!idea) notFound();
  return (
    <>
      <h1>Modifier : {idea.title_fr}</h1>
      <IdeaForm action={updateIdea} idea={idea} />
    </>
  );
}
