"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

function payload(fd: FormData) {
  return {
    name: F.str(fd, "name"),
    percentage: F.num(fd, "percentage"),
    icon: F.strOrNull(fd, "icon"),
    sort_order: F.num(fd, "sort_order"),
  };
}

function rev() {
  revalidatePath("/dashboard/competences");
  revalidatePath("/");
}

export async function createSkill(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("skills").insert(payload(fd));
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/competences");
}

export async function updateSkill(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("skills").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  rev();
  redirect("/dashboard/competences");
}

export async function deleteSkill(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("skills").delete().eq("id", id);
  if (error) throw new Error(error.message);
  rev();
}
