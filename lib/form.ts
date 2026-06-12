// Helpers to parse FormData submitted by dashboard forms.

export function str(fd: FormData, key: string): string {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function strOrNull(fd: FormData, key: string): string | null {
  const v = str(fd, key);
  return v === "" ? null : v;
}

export function num(fd: FormData, key: string, def = 0): number {
  const n = Number(fd.get(key));
  return Number.isFinite(n) ? n : def;
}

export function bool(fd: FormData, key: string): boolean {
  const v = fd.get(key);
  return v === "on" || v === "true";
}

// One item per line, trimmed, blanks removed.
export function lines(fd: FormData, key: string): string[] {
  return str(fd, key)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function linesOrNull(fd: FormData, key: string): string[] | null {
  const a = lines(fd, key);
  return a.length ? a : null;
}

export function imagesFromLines(fd: FormData, key: string): { url: string }[] {
  return lines(fd, key).map((url) => ({ url }));
}

// "Name | Role" per line.
export function collaboratorsFromLines(
  fd: FormData,
  key: string
): { name: string; role: string }[] {
  return lines(fd, key)
    .map((l) => {
      const [name, ...rest] = l.split("|");
      return { name: (name ?? "").trim(), role: rest.join("|").trim() };
    })
    .filter((c) => c.name);
}

// Turn an array back into newline-separated text for editing.
export function toLines(arr: string[] | null | undefined): string {
  return (arr ?? []).join("\n");
}
