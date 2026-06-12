import IdeaForm from "../IdeaForm";
import { createIdea } from "../actions";

export default function NewIdeaPage() {
  return (
    <>
      <h1>Nouvelle idée</h1>
      <IdeaForm action={createIdea} />
    </>
  );
}
