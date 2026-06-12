"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

function payload(fd: FormData) {
  return {
    slug: F.str(fd, "slug"),
    title_fr: F.str(fd, "title_fr"),
    title_en: F.strOrNull(fd, "title_en"),
    description_fr: F.str(fd, "description_fr"),
    description_en: F.strOrNull(fd, "description_en"),
    image_url: F.strOrNull(fd, "image_url"),
    published: F.bool(fd, "published"),
    sort_order: F.num(fd, "sort_order"),
  };
}

function revalidatePublic() {
  revalidatePath("/dashboard/idees");
  revalidatePath("/idees");
}

export async function createIdea(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("ideas").insert(payload(fd));
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/dashboard/idees");
}

export async function updateIdea(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("ideas").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/dashboard/idees");
}

export async function deleteIdea(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("ideas").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
}
