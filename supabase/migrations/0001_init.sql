-- OUATTFOLIO — initial schema (bilingual content, RLS, media bucket).
-- Apply via the Supabase SQL editor or `supabase db push`.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.profile (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  description_fr text not null default '',
  description_en text not null default '',
  email text not null default '',
  phone text not null default '',
  address_fr text not null default '',
  address_en text not null default '',
  availability_fr text not null default '',
  availability_en text not null default '',
  languages_fr text not null default '',
  languages_en text not null default '',
  linkedin text not null default '',
  github text not null default '',
  cv_fr_url text not null default '',
  cv_en_url text not null default '',
  hero_image_url text not null default '',
  about_image_url text not null default '',
  typed_fr text[] not null default '{}',
  typed_en text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_fr text not null,
  title_en text,
  description_fr text not null default '',
  description_en text,
  description_long_fr text not null default '',
  description_long_en text,
  category_fr text not null default '',
  category_en text,
  client text,
  date_label text,
  url text,
  technologies text[] not null default '{}',
  features_fr text[] not null default '{}',
  features_en text[],
  images jsonb not null default '[]',
  collaborators jsonb not null default '[]',
  sort_order int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_fr text not null,
  title_en text,
  excerpt_fr text not null default '',
  excerpt_en text,
  content_fr text not null default '',
  content_en text,
  cover_image_url text,
  tags text[] not null default '{}',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.ideas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_fr text not null,
  title_en text,
  description_fr text not null default '',
  description_en text,
  image_url text,
  published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.idea_proposals (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_email text not null,
  title text not null,
  message text not null,
  status text not null default 'new'
    check (status in ('new', 'reviewed', 'accepted', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null default '',
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  name_en text,
  percentage int not null default 0,
  icon text,
  sort_order int not null default 0
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title_fr text not null,
  title_en text not null default '',
  description_fr text not null default '',
  description_en text not null default '',
  icon text not null default '',
  sort_order int not null default 0
);

create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  title_en text,
  year text not null default '',
  description_fr text not null default '',
  description_en text not null default '',
  link text not null default '',
  is_highlight boolean not null default false,
  sort_order int not null default 0
);

create table if not exists public.education (
  id uuid primary key default gen_random_uuid(),
  title_fr text not null,
  title_en text not null default '',
  period text not null default '',
  school_fr text not null default '',
  school_en text not null default '',
  sort_order int not null default 0
);

create index if not exists projects_sort_idx on public.projects (sort_order);
create index if not exists blog_published_idx on public.blog_posts (published, published_at desc);
create index if not exists ideas_sort_idx on public.ideas (sort_order);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profile        enable row level security;
alter table public.projects       enable row level security;
alter table public.blog_posts     enable row level security;
alter table public.ideas          enable row level security;
alter table public.idea_proposals enable row level security;
alter table public.messages       enable row level security;
alter table public.skills         enable row level security;
alter table public.services       enable row level security;
alter table public.certifications enable row level security;
alter table public.education       enable row level security;

-- Public read of always-public content (anon + authenticated).
create policy "public read profile"        on public.profile        for select using (true);
create policy "public read skills"          on public.skills          for select using (true);
create policy "public read services"        on public.services        for select using (true);
create policy "public read certifications"  on public.certifications  for select using (true);
create policy "public read education"       on public.education       for select using (true);

-- Public read of published-only content.
create policy "public read published projects" on public.projects
  for select using (published = true);
create policy "public read published posts" on public.blog_posts
  for select using (published = true);
create policy "public read published ideas" on public.ideas
  for select using (published = true);

-- Public submissions (anonymous insert only).
create policy "anyone can submit a proposal" on public.idea_proposals
  for insert to anon, authenticated with check (true);
create policy "anyone can send a message" on public.messages
  for insert to anon, authenticated with check (true);

-- Admin (any authenticated user) has full access to every table.
do $$
declare t text;
begin
  foreach t in array array[
    'profile','projects','blog_posts','ideas','idea_proposals',
    'messages','skills','services','certifications','education'
  ]
  loop
    execute format(
      'create policy "admin full access" on public.%I for all to authenticated using (true) with check (true);',
      t
    );
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- Storage bucket for uploads (images, CVs)
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "public read media" on storage.objects
  for select using (bucket_id = 'media');
create policy "authenticated upload media" on storage.objects
  for insert to authenticated with check (bucket_id = 'media');
create policy "authenticated update media" on storage.objects
  for update to authenticated using (bucket_id = 'media');
create policy "authenticated delete media" on storage.objects
  for delete to authenticated using (bucket_id = 'media');
