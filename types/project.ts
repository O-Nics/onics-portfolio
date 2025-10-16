export interface ProjectLink {
  url: string;
  text: string;
  title: string;
  alt: string;
  target: "_blank" | "_self" | "_parent" | "_top";
}

export interface ProjectMedia {
  type: "image" | "video";
  path: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string; // identifiant unique pour l'URL
  shortTitle: string;
  longTitle: string;
  shortDescription: string;
  body: string; // corps de texte long (peut contenir du markdown)
  media: ProjectMedia[]; // images et vidéos
  links: ProjectLink[]; // liens externes (démo, repo, etc.)
  stack: string[]; // technologies utilisées
  categories: string[]; // catégories (web, mobile, full-stack, etc.)
  featured?: boolean; // pour mettre en avant sur la page d'accueil
  date?: string; // date de réalisation (format ISO: YYYY-MM-DD)
  status?: "completed" | "in-progress" | "archived";
}

export interface ProjectsData {
  projects: Project[];
}
