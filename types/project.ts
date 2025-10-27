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
  status: "completed" | "in-progress" | "active" | "archived" | "not completed";
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

export interface ProjectsData {
  projects: Project[];
}