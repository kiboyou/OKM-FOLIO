"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

function payload(fd: FormData) {
  return {
    title_fr: F.str(fd, "title_fr"),
    title_en: F.str(fd, "title_en"),
    description_fr: F.str(fd, "description_fr"),
    description_en: F.str(fd, "description_en"),
    icon: F.str(fd, "icon"),
    sort_order: F.num(fd, "sort_order"),
  };
}

function rev() {
  revalidatePath("/dashboard/services");
  revalidatePath("/");
}

export async function createService(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("services").insert(payload(fd));
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/services");
}

export async function updateService(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("services").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/services");
}

export async function deleteService(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);
  rev();
}
