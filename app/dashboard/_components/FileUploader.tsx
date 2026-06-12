"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

// Generic file uploader (e.g. PDF CVs). Uploads to `media`, stores the public
// URL in a hidden input, shows a link to the current file.
export default function FileUploader({
  name,
  initialUrl = "",
  accept,
}: {
  name: string;
  initialUrl?: string;
  accept?: string;
}) {
  const [url, setUrl] = useState(initialUrl);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr("");
    const supabase = createSupabaseBrowserClient();
    const safe = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const path = `${Date.now()}-${safe}`;
    const { error } = await supabase.storage.from("media").upload(path, file);
    if (error) {
      setErr(error.message);
      setBusy(false);
      return;
    }
    const { data } = supabase.storage.from("media").getPublicUrl(path);
    setUrl(data.publicUrl);
    setBusy(false);
  };

  return (
    <div className="dash-uploader">
      <input type="hidden" name={name} value={url} />
      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          Fichier actuel
        </a>
      )}
      <input type="file" accept={accept} onChange={onFile} />
      {busy && <span>Upload…</span>}
      {err && <span style={{ color: "red" }}>{err}</span>}
    </div>
  );
}
