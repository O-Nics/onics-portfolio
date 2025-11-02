import {Translations} from "@/types/index";

export interface ProjectLink {
  url: string;
  text: string;
  title: string;
  alt: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  type: string;
}

export interface ProjectStack {
  name: string;
  image: string | null;
}

export interface ProjectMedia {
  type: "image" | "video";
  path: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  body: string;
  platform: string[];
  technologies: string[];
  status: string;
  role: string;
  team: string;
  teamSize: number;
  statusNumber: number;
  type: string;
  media: ProjectMedia[];
  links: ProjectLink[];
  stack: ProjectStack[];
  categories: string[];
  features: string[];
  challenges: string[];
  lessonLearned: string[];
  featured?: boolean;
}

// Type pour les données brutes du JSON (avant transformation)
export interface ProjectRaw {
  slug: string;
  name: string;
  title: Translations;
  shortDescription: Translations;
  longDescription: Translations;
  body: Translations;
  platform: { fr: string[]; en: string[] };
  technologies: string[];
  status: Translations;
  statusNumber: number;
  role: Translations;
  team: Translations;
  teamSize: number;
  type: Translations;
  media: ProjectMedia[];
  links: Array<{
    url: string;
    text: Translations;
    title: Translations;
    alt: string;
    target: "_blank" | "_self" | "_parent" | "_top";
    type: string;
  }>;
  stack: ProjectStack[];
  categories: { fr: string[]; en: string[] };
  features: { fr: string[]; en: string[] };
  challenges: { fr: string[]; en: string[] };
  lessonLearned: { fr: string[]; en: string[] };
  featured?: boolean;
  endDate?: string;
}

export interface ProjectsDataRaw {
  projects: ProjectRaw[];
}
