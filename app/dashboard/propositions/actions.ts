"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/auth";
import * as F from "@/lib/form";

export async function setProposalStatus(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const status = F.str(fd, "status");
  const s = await createSupabaseServerClient();
  const { error } = await s
    .from("idea_proposals")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/propositions");
}

export async function deleteProposal(fd: FormData) {
  await requireUser();
  const id = F.str(fd, "id");
  const s = await createSupabaseServerClient();
  const { error } = await s.from("idea_proposals").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/propositions");
}
