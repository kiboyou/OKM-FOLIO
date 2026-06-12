"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

function payload(fd: FormData) {
  return {
    title: F.str(fd, "title"),
    year: F.str(fd, "year"),
    description_fr: F.str(fd, "description_fr"),
    description_en: F.str(fd, "description_en"),
    link: F.str(fd, "link"),
    is_highlight: F.bool(fd, "is_highlight"),
    sort_order: F.num(fd, "sort_order"),
  };
}

function rev() {
  revalidatePath("/dashboard/certifications");
  revalidatePath("/");
}

export async function createCertification(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("certifications").insert(payload(fd));
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/certifications");
}

export async function updateCertification(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s
    .from("certifications")
    .update(payload(fd))
    .eq("id", id);
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/certifications");
}

export async function deleteCertification(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("certifications").delete().eq("id", id);
  if (error) throw new Error(error.message);
  rev();
}
