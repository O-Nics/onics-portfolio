import { Project, ProjectsData } from "@/types/project";
import projectsData from "@/data/projects.json";

/**
 * Récupère tous les projets
 */
export function getAllProjects(): Project[] {
  return (projectsData as ProjectsData).projects;
}

/**
 * Récupère un projet par son slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
