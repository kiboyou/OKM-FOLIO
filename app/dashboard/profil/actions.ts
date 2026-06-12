"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

export async function saveProfile(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const data = {
    name: F.str(fd, "name"),
    title: F.strOrNull(fd, "title"),
    description_fr: F.str(fd, "description_fr"),
    description_en: F.str(fd, "description_en"),
    email: F.str(fd, "email"),
    phone: F.str(fd, "phone"),
    address_fr: F.str(fd, "address_fr"),
    address_en: F.str(fd, "address_en"),
    availability_fr: F.str(fd, "availability_fr"),
    availability_en: F.str(fd, "availability_en"),
    languages_fr: F.str(fd, "languages_fr"),
    languages_en: F.str(fd, "languages_en"),
    linkedin: F.str(fd, "linkedin"),
    github: F.str(fd, "github"),
    cv_fr_url: F.str(fd, "cv_fr_url"),
    cv_en_url: F.str(fd, "cv_en_url"),
    hero_image_url: F.str(fd, "hero_image_url"),
    about_image_url: F.str(fd, "about_image_url"),
    typed_fr: F.lines(fd, "typed_fr"),
    typed_en: F.lines(fd, "typed_en"),
    updated_at: new Date().toISOString(),
  };

  const s = await createSupabaseServerClient();
  const { error } = id
    ? await s.from("profile").update(data).eq("id", id)
    : await s.from("profile").insert(data);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/profil");
  revalidatePath("/");
  revalidatePath("/realisations");
}
