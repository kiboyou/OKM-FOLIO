"use client";

// Small confirm-then-submit form that calls a server action with the row id.
export default function DeleteButton({
  action,
  id,
  label = "Supprimer",
}: {
  action: (formData: FormData) => void;
  id: string;
  label?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Confirmer la suppression ?")) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="dash-btn small danger">
        {label}
      </button>
    </form>
  );
}
