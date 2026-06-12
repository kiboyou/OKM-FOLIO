"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

// Manages a list of image URLs (upload to `media` or paste a URL). Submits the
// list as a newline-separated hidden field parsed server-side via imagesFromLines.
export default function MultiImageField({
  name,
  initial = [],
}: {
  name: string;
  initial?: string[];
}) {
  const [urls, setUrls] = useState<string[]>(initial);
  const [manual, setManual] = useState("");
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
    setUrls((prev) => [...prev, data.publicUrl]);
    setBusy(false);
    e.target.value = "";
  };

  const addManual = () => {
    const u = manual.trim();
    if (u) {
      setUrls((prev) => [...prev, u]);
      setManual("");
    }
  };

  return (
    <div>
      <input type="hidden" name={name} value={urls.join("\n")} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
        {urls.map((u, i) => (
          <div key={i} style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={u}
              alt=""
              style={{
                height: 70,
                borderRadius: 6,
                border: "1px solid #e5e7eb",
              }}
            />
            <button
              type="button"
              className="dash-btn small danger"
              style={{ position: "absolute", top: -8, right: -8, padding: "0 6px" }}
              onClick={() => setUrls((prev) => prev.filter((_, j) => j !== i))}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <input type="file" accept="image/*" onChange={onFile} />
        {busy && <span>Upload…</span>}
        <input
          type="text"
          placeholder="…ou coller une URL"
          value={manual}
          onChange={(e) => setManual(e.target.value)}
          style={{ flex: "1 1 220px" }}
        />
        <button type="button" className="dash-btn small secondary" onClick={addManual}>
          Ajouter l&apos;URL
        </button>
      </div>
      {err && <div style={{ color: "red", fontSize: 12 }}>{err}</div>}
    </div>
  );
}
