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

/**
 * Récupère les projets mis en avant (featured)
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured === true);
}

/**
 * Récupère toutes les catégories uniques
 */
export function getAllCategories(): string[] {
  const categories = new Set<string>();

  getAllProjects().forEach((project) => {
    project.categories.forEach((category) => categories.add(category));
  });

  return Array.from(categories).sort();
}

/**
 * Récupère toutes les technologies uniques
 */
export function getAllTechnologies(): string[] {
  const technologies = new Set<string>();

  getAllProjects().forEach((project) => {
    project.stack.forEach((tech) => technologies.add(tech));
  });

  return Array.from(technologies).sort();
}

/**
 * Filtre les projets par catégorie
 */
export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter((project) =>
    project.categories.includes(category),
  );
}

/**
 * Filtre les projets par technologie
 */
export function getProjectsByTechnology(technology: string): Project[] {
  return getAllProjects().filter((project) =>
    project.stack.includes(technology),
  );
}

/**
 * Filtre les projets par statut
 */
export function getProjectsByStatus(
  status: "completed" | "in-progress" | "archived",
): Project[] {
  return getAllProjects().filter((project) => project.status === status);
}

/**
 * Recherche de projets (par titre ou description)
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();

  return getAllProjects().filter(
    (project) =>
      project.shortTitle.toLowerCase().includes(lowerQuery) ||
      project.longTitle.toLowerCase().includes(lowerQuery) ||
      project.shortDescription.toLowerCase().includes(lowerQuery),
  );
}

/**
 * Filtre avancé des projets
 */
export interface ProjectFilters {
  categories?: string[];
  technologies?: string[];
  status?: string[];
  search?: string;
}

export function filterProjects(filters: ProjectFilters): Project[] {
  let projects = getAllProjects();

  if (filters.categories && filters.categories.length > 0) {
    projects = projects.filter((project) =>
      project.categories.some((cat) => filters.categories?.includes(cat)),
    );
  }

  if (filters.technologies && filters.technologies.length > 0) {
    projects = projects.filter((project) =>
      project.stack.some((tech) => filters.technologies?.includes(tech)),
    );
  }

  if (filters.status && filters.status.length > 0) {
    projects = projects.filter((project) =>
      filters.status?.includes(project.status || ""),
    );
  }

  if (filters.search && filters.search.trim() !== "") {
    const lowerQuery = filters.search.toLowerCase();

    projects = projects.filter(
      (project) =>
        project.shortTitle.toLowerCase().includes(lowerQuery) ||
        project.longTitle.toLowerCase().includes(lowerQuery) ||
        project.shortDescription.toLowerCase().includes(lowerQuery),
    );
  }

  return projects;
}
