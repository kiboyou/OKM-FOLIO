import ServiceForm from "../ServiceForm";
import { createService } from "../actions";

export default function NewServicePage() {
  return (
    <>
      <h1>Nouveau service</h1>
      <ServiceForm action={createService} />
    </>
  );
}
