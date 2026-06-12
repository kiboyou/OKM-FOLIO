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
    period: F.str(fd, "period"),
    school_fr: F.str(fd, "school_fr"),
    school_en: F.str(fd, "school_en"),
    sort_order: F.num(fd, "sort_order"),
  };
}

function rev() {
  revalidatePath("/dashboard/formations");
  revalidatePath("/");
}

export async function createEducation(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("education").insert(payload(fd));
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/formations");
}

export async function updateEducation(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("education").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/formations");
}

export async function deleteEducation(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("education").delete().eq("id", id);
  if (error) throw new Error(error.message);
  rev();
}
