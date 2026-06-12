"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

// Uploads a file to the public `media` bucket and stores the resulting URL in a
// hidden input so it submits with the surrounding form.
export default function ImageUploader({
  name,
  initialUrl = "",
}: {
  name: string;
  initialUrl?: string;
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
    const { error } = await supabase.storage
      .from("media")
      .upload(path, file, { upsert: false });
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
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" />
      )}
      <input type="file" accept="image/*" onChange={onFile} />
      {busy && <span>Upload…</span>}
      {err && <span style={{ color: "red" }}>{err}</span>}
      {url && (
        <button
          type="button"
          className="dash-btn small secondary"
          onClick={() => setUrl("")}
        >
          Retirer
        </button>
      )}
    </div>
  );
}
