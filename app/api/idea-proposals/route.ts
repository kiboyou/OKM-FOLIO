import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabasePublicClient } from "@/lib/supabase/public";
import { sendIdeaProposalEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: {
    author_name?: string;
    author_email?: string;
    title?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const author_name = body.author_name?.trim();
  const author_email = body.author_email?.trim();
  const title = body.title?.trim();
  const message = body.message?.trim();

  if (!author_name || !author_email || !title || !message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  if (isSupabaseConfigured) {
    const supabase = createSupabasePublicClient();
    const { error } = await supabase
      .from("idea_proposals")
      .insert({ author_name, author_email, title, message });
    if (error) {
      console.error("idea proposal insert error:", error.message);
      return NextResponse.json(
        { error: "Enregistrement impossible." },
        { status: 500 }
      );
    }
  }

  try {
    await sendIdeaProposalEmail({ author_name, author_email, title, message });
  } catch (err) {
    console.error("idea proposal email error:", err);
  }

  return NextResponse.json({ message: "Idée envoyée avec succès!" });
}
