// Seed the Supabase database with the existing portfolio content.
//
//   npm run seed
//
// Requires NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in .env.local.
// Idempotent: wipes each table then re-inserts. The DB generates uuids, so
// synthetic ids/created_at from the seed are stripped before insert.

import { createSupabaseAdminClient } from "../lib/supabase/admin";
import {
  seedBlogPosts,
  seedCertifications,
  seedEducation,
  seedIdeas,
  seedProfile,
  seedProjects,
  seedServices,
  seedSkills,
} from "../lib/seed-data";

const ZERO_UUID = "00000000-0000-0000-0000-000000000000";

function omit(obj: object, keys: string[]): Record<string, unknown> {
  const copy: Record<string, unknown> = { ...obj };
  for (const k of keys) delete copy[k];
  return copy;
}

async function main() {
  const supabase = createSupabaseAdminClient();

  const tables = [
    "projects",
    "services",
    "skills",
    "certifications",
    "education",
    "blog_posts",
    "ideas",
    "profile",
  ];

  console.log("Wiping existing rows…");
  for (const table of tables) {
    const { error } = await supabase.from(table).delete().neq("id", ZERO_UUID);
    if (error) throw new Error(`delete ${table}: ${error.message}`);
  }

  const inserts: { table: string; rows: Record<string, unknown>[] }[] = [
    { table: "profile", rows: [omit(seedProfile, ["id"])] },
    {
      table: "projects",
      rows: seedProjects.map((p) => omit(p, ["id", "created_at"])),
    },
    { table: "services", rows: seedServices.map((s) => omit(s, ["id"])) },
    { table: "skills", rows: seedSkills.map((s) => omit(s, ["id"])) },
    {
      table: "certifications",
      rows: seedCertifications.map((c) => omit(c, ["id"])),
    },
    { table: "education", rows: seedEducation.map((e) => omit(e, ["id"])) },
    {
      table: "blog_posts",
      rows: seedBlogPosts.map((b) => omit(b, ["id", "created_at"])),
    },
    { table: "ideas", rows: seedIdeas.map((i) => omit(i, ["id", "created_at"])) },
  ];

  for (const { table, rows } of inserts) {
    const { error } = await supabase.from(table).insert(rows);
    if (error) throw new Error(`insert ${table}: ${error.message}`);
    console.log(`  ✓ ${table}: ${rows.length} row(s)`);
  }

  console.log("Seed complete ✅");
}

main().catch((err) => {
  console.error("Seed failed ❌", err);
  process.exit(1);
});
