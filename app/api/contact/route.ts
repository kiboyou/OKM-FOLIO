import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabasePublicClient } from "@/lib/supabase/public";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // Persist the message (RLS allows anonymous insert into `messages`).
  if (isSupabaseConfigured) {
    const supabase = createSupabasePublicClient();
    const { error } = await supabase
      .from("messages")
      .insert({ name, email, subject, message });
    if (error) {
      console.error("contact insert error:", error.message);
    }
  }

  // Send the notification email (best-effort).
  try {
    await sendContactEmail({ name, email, subject, message });
  } catch (err) {
    console.error("contact email error:", err);
  }

  return NextResponse.json({
    message: "Votre message a été envoyé avec succès!",
  });
}
