import ProjectForm from "../ProjectForm";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <>
      <h1>Nouveau projet</h1>
      <ProjectForm action={createProject} />
    </>
  );
}
