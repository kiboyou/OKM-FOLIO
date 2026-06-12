// Server-side data access for the dashboard (reads ALL rows, including
// unpublished). Uses the authenticated server client; RLS admin policy applies.
// All functions no-op gracefully when Supabase is not configured.

import { createSupabaseServerClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import type {
  BlogPost,
  Certification,
  Education,
  Idea,
  IdeaProposal,
  Message,
  Profile,
  Project,
  Service,
  Skill,
} from "./types";

async function db() {
  return createSupabaseServerClient();
}

export async function listProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s.from("projects").select("*").order("sort_order");
  return (data as Project[]) ?? [];
}
export async function getProject(id: string): Promise<Project | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s.from("projects").select("*").eq("id", id).maybeSingle();
  return (data as Project) ?? null;
}

export async function listBlogPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as BlogPost[]) ?? [];
}
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return (data as BlogPost) ?? null;
}

export async function listIdeas(): Promise<Idea[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s.from("ideas").select("*").order("sort_order");
  return (data as Idea[]) ?? [];
}
export async function getIdea(id: string): Promise<Idea | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s.from("ideas").select("*").eq("id", id).maybeSingle();
  return (data as Idea) ?? null;
}

export async function listProposals(): Promise<IdeaProposal[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s
    .from("idea_proposals")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as IdeaProposal[]) ?? [];
}

export async function listMessages(): Promise<Message[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as Message[]) ?? [];
}

export async function listSkills(): Promise<Skill[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s.from("skills").select("*").order("sort_order");
  return (data as Skill[]) ?? [];
}
export async function getSkill(id: string): Promise<Skill | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s.from("skills").select("*").eq("id", id).maybeSingle();
  return (data as Skill) ?? null;
}

export async function listServices(): Promise<Service[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s.from("services").select("*").order("sort_order");
  return (data as Service[]) ?? [];
}
export async function getService(id: string): Promise<Service | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s
    .from("services")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return (data as Service) ?? null;
}

export async function listCertifications(): Promise<Certification[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s
    .from("certifications")
    .select("*")
    .order("is_highlight", { ascending: false })
    .order("sort_order");
  return (data as Certification[]) ?? [];
}
export async function getCertification(
  id: string
): Promise<Certification | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s
    .from("certifications")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return (data as Certification) ?? null;
}

export async function listEducation(): Promise<Education[]> {
  if (!isSupabaseConfigured) return [];
  const s = await db();
  const { data } = await s.from("education").select("*").order("sort_order");
  return (data as Education[]) ?? [];
}
export async function getEducation(id: string): Promise<Education | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s
    .from("education")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return (data as Education) ?? null;
}

export async function getProfileRow(): Promise<Profile | null> {
  if (!isSupabaseConfigured) return null;
  const s = await db();
  const { data } = await s.from("profile").select("*").limit(1).maybeSingle();
  return (data as Profile) ?? null;
}

export async function counts() {
  const empty = {
    projects: 0,
    blog_posts: 0,
    ideas: 0,
    idea_proposals: 0,
    messages: 0,
  };
  if (!isSupabaseConfigured) return empty as Record<string, number>;
  const s = await db();
  const tables = Object.keys(empty) as (keyof typeof empty)[];
  const result: Record<string, number> = { ...empty };
  await Promise.all(
    tables.map(async (t) => {
      const { count } = await s
        .from(t)
        .select("*", { count: "exact", head: true });
      result[t] = count ?? 0;
    })
  );
  return result;
}
