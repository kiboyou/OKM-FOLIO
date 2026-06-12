import type { Lang } from "./types";

// Pick the localized value of a bilingual row field (`base_fr` / `base_en`),
// falling back to French when the target language is missing.
export function L(row: object | null | undefined, base: string, lang: Lang): string {
  if (!row) return "";
  const r = row as Record<string, unknown>;
  const v = r[`${base}_${lang}`] ?? r[`${base}_fr`];
  return typeof v === "string" ? v : "";
}

// Same as L but for string[] fields.
export function Larr(
  row: object | null | undefined,
  base: string,
  lang: Lang
): string[] {
  if (!row) return [];
  const r = row as Record<string, unknown>;
  const v = r[`${base}_${lang}`] ?? r[`${base}_fr`];
  return Array.isArray(v) ? (v as string[]) : [];
}
