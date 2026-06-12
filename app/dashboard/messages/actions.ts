"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

export async function toggleRead(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const is_read = F.bool(fd, "is_read");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("messages").update({ is_read }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/messages");
}

export async function deleteMessage(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("messages").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/messages");
}
