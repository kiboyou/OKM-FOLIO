"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

function payload(fd: FormData) {
  const published = F.bool(fd, "published");
  let published_at = F.strOrNull(fd, "published_at");
  if (published && !published_at) published_at = new Date().toISOString();
  return {
    slug: F.str(fd, "slug"),
    title_fr: F.str(fd, "title_fr"),
    title_en: F.strOrNull(fd, "title_en"),
    excerpt_fr: F.str(fd, "excerpt_fr"),
    excerpt_en: F.strOrNull(fd, "excerpt_en"),
    content_fr: F.str(fd, "content_fr"),
    content_en: F.strOrNull(fd, "content_en"),
    cover_image_url: F.strOrNull(fd, "cover_image_url"),
    tags: F.lines(fd, "tags"),
    published,
    published_at,
  };
}

function revalidatePublic() {
  revalidatePath("/dashboard/blog");
  revalidatePath("/blog");
}

export async function createPost(fd: FormData) {
  await requireUser();
  const s = await createSupabaseServerClient();
  const { error } = await s.from("blog_posts").insert(payload(fd));
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/dashboard/blog");
}

export async function updatePost(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("blog_posts").update(payload(fd)).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  revalidatePath(`/blog/${F.str(fd, "slug")}`);
  redirect("/dashboard/blog");
}

export async function deletePost(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
}
