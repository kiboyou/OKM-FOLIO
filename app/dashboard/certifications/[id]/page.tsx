import { notFound } from "next/navigation";
import { getCertification } from "@/lib/admin-data";
import CertificationForm from "../CertificationForm";
import { updateCertification } from "../actions";

export default async function EditCertificationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const certification = await getCertification(id);
  if (!certification) notFound();
  return (
    <>
      <h1>Modifier la certification</h1>
      <CertificationForm action={updateCertification} certification={certification} />
    </>
  );
}
