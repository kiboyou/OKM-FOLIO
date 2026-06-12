import { notFound } from "next/navigation";
import { getService } from "@/lib/admin-data";
import ServiceForm from "../ServiceForm";
import { updateService } from "../actions";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getService(id);
  if (!service) notFound();
  return (
    <>
      <h1>Modifier : {service.title_fr}</h1>
      <ServiceForm action={updateService} service={service} />
    </>
  );
}
