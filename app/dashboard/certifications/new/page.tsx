import CertificationForm from "../CertificationForm";
import { createCertification } from "../actions";

export default function NewCertificationPage() {
  return (
    <>
      <h1>Nouvelle certification</h1>
      <CertificationForm action={createCertification} />
    </>
  );
}
