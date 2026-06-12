// Domain types — shaped like the Supabase rows (bilingual, snake_case fields).

export type Lang = "fr" | "en";

export interface Collaborator {
  name: string;
  role: string;
}

export interface ProjectImage {
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string | null;
  description_fr: string;
  description_en: string | null;
  description_long_fr: string;
  description_long_en: string | null;
  category_fr: string;
  category_en: string | null;
  client: string | null;
  date_label: string | null;
  url: string | null;
  technologies: string[];
  features_fr: string[];
  features_en: string[] | null;
  images: ProjectImage[];
  collaborators: Collaborator[];
  sort_order: number;
  published: boolean;
  created_at?: string;
}

export interface Profile {
  id?: string;
  name: string;
  title: string | null;
  description_fr: string;
  description_en: string;
  email: string;
  phone: string;
  address_fr: string;
  address_en: string;
  availability_fr: string;
  availability_en: string;
  languages_fr: string;
  languages_en: string;
  linkedin: string;
  github: string;
  cv_fr_url: string;
  cv_en_url: string;
  hero_image_url: string;
  about_image_url: string;
  typed_fr: string[];
  typed_en: string[];
}

export interface Service {
  id: string;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  icon: string;
  sort_order: number;
}

export interface Skill {
  id: string;
  name: string;
  name_en?: string | null;
  percentage: number;
  icon?: string | null;
  sort_order: number;
}

export interface Certification {
  id: string;
  title: string;
  title_en?: string | null;
  year: string;
  description_fr: string;
  description_en: string;
  link: string;
  is_highlight: boolean;
  sort_order: number;
}

export interface Education {
  id: string;
  title_fr: string;
  title_en: string;
  period: string;
  school_fr: string;
  school_en: string;
  sort_order: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string | null;
  excerpt_fr: string;
  excerpt_en: string | null;
  content_fr: string;
  content_en: string | null;
  cover_image_url: string | null;
  tags: string[];
  published: boolean;
  published_at: string | null;
  created_at?: string;
}

export interface Idea {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string | null;
  description_fr: string;
  description_en: string | null;
  image_url: string | null;
  published: boolean;
  sort_order: number;
  created_at?: string;
}

export type IdeaProposalStatus = "new" | "reviewed" | "accepted" | "rejected";

export interface IdeaProposal {
  id: string;
  author_name: string;
  author_email: string;
  title: string;
  message: string;
  status: IdeaProposalStatus;
  created_at: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}
