// Public data access layer.
//
// When Supabase is configured, data is read from the database (visibility
// enforced by RLS). Otherwise the app falls back to local seed data so it runs
// without a database. The public components/pages never change.

import { isSupabaseConfigured } from "./supabase/config";
import { createSupabasePublicClient } from "./supabase/public";
import {
  seedBlogPosts,
  seedCertifications,
  seedEducation,
  seedIdeas,
  seedProfile,
  seedProjects,
  seedServices,
  seedSkills,
} from "./seed-data";
import type {
  BlogPost,
  Certification,
  Education,
  Idea,
  Profile,
  Project,
  Service,
  Skill,
} from "./types";

export async function getProfile(): Promise<Profile> {
  if (!isSupabaseConfigured) return seedProfile;
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("profile")
    .select("*")
    .limit(1)
    .maybeSingle();
  return (data as Profile) ?? seedProfile;
}

export async function getProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured)
    return [...seedProjects]
      .filter((p) => p.published)
      .sort((a, b) => a.sort_order - b.sort_order);
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  return (data as Project[]) ?? [];
}

export async function getFeaturedProjects(limit = 6): Promise<Project[]> {
  return (await getProjects()).slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isSupabaseConfigured)
    return seedProjects.find((p) => p.slug === slug) ?? null;
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as Project) ?? null;
}

export async function getServices(): Promise<Service[]> {
  if (!isSupabaseConfigured)
    return [...seedServices].sort((a, b) => a.sort_order - b.sort_order);
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Service[]) ?? [];
}

export async function getSkills(): Promise<Skill[]> {
  if (!isSupabaseConfigured)
    return [...seedSkills].sort((a, b) => a.sort_order - b.sort_order);
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("skills")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Skill[]) ?? [];
}

export async function getCertifications(): Promise<Certification[]> {
  if (!isSupabaseConfigured)
    return [...seedCertifications].sort((a, b) => {
      if (a.is_highlight !== b.is_highlight) return a.is_highlight ? -1 : 1;
      return a.sort_order - b.sort_order;
    });
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("certifications")
    .select("*")
    .order("is_highlight", { ascending: false })
    .order("sort_order", { ascending: true });
  return (data as Certification[]) ?? [];
}

export async function getEducation(): Promise<Education[]> {
  if (!isSupabaseConfigured)
    return [...seedEducation].sort((a, b) => a.sort_order - b.sort_order);
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("education")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Education[]) ?? [];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured)
    return [...seedBlogPosts]
      .filter((p) => p.published)
      .sort(
        (a, b) =>
          new Date(b.published_at ?? 0).getTime() -
          new Date(a.published_at ?? 0).getTime()
      );
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return (data as BlogPost[]) ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured)
    return seedBlogPosts.find((p) => p.slug === slug) ?? null;
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as BlogPost) ?? null;
}

export async function getIdeas(): Promise<Idea[]> {
  if (!isSupabaseConfigured)
    return [...seedIdeas]
      .filter((i) => i.published)
      .sort((a, b) => a.sort_order - b.sort_order);
  const supabase = createSupabasePublicClient();
  const { data } = await supabase
    .from("ideas")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  return (data as Idea[]) ?? [];
}
