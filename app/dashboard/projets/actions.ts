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
    description_long_fr: F.str(fd, "description_long_fr"),
    description_long_en: F.strOrNull(fd, "description_long_en"),
    category_fr: F.str(fd, "category_fr"),
    category_en: F.strOrNull(fd, "category_en"),
    client: F.strOrNull(fd, "client"),
    date_label: F.strOrNull(fd, "date_label"),
    url: F.strOrNull(fd, "url"),
    technologies: F.lines(fd, "technologies"),
    features_fr: F.lines(fd, "features_fr"),
    features_en: F.linesOrNull(fd, "features_en"),
    images: F.imagesFromLines(fd, "images"),
    collaborators: F.collaboratorsFromLines(fd, "collaborators"),
    sort_order: F.num(fd, "sort_order"),
    published: F.bool(fd, "published"),
  };
}

function revalidatePublic() {
  revalidatePath("/dashboard/projets");
  revalidatePath("/");
  revalidatePath("/realisations");
}

export async function createProject(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("projects").insert(payload(fd));
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/dashboard/projets");
}

export async function updateProject(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("projects").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  revalidatePath(`/realisations/${F.str(fd, "slug")}`);
  redirect("/dashboard/projets");
}

export async function deleteProject(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
}
