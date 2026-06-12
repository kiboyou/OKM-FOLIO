"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children = "Enregistrer",
}: {
  children?: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="dash-btn" disabled={pending}>
      {pending ? "Enregistrement…" : children}
    </button>
  );
}
