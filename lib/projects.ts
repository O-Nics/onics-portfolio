import { Project, ProjectRaw, ProjectsDataRaw } from "@/types/project";
import projectsData from "@/data/projects.json";
import { Locale } from "@/types";

/**
 * Récupère tous les projets avec traduction selon la locale
 */
export function getAllProjects(locale: Locale = "fr"): Project[] {
  const data = projectsData as ProjectsDataRaw;

  // Transformer les projets pour retourner les valeurs traduites
  return data.projects.map((project: ProjectRaw) => ({
    ...project,
    title: project.title[locale] || project.title.fr,
    shortDescription:
      project.shortDescription[locale] || project.shortDescription.fr,
    longDescription:
      project.longDescription[locale] || project.longDescription.fr,
    body: project.body[locale] || project.body.fr,
    status: project.status[locale] || project.status.fr,
    team: project.team[locale] || project.team.fr,
    role: project.role[locale] || project.role.fr,
    type: project.type[locale] || project.type.fr,
    platform: project.platform[locale] || project.platform.fr,
    categories: project.categories[locale] || project.categories.fr,
    features: project.features[locale] || project.features.fr,
    challenges: project.challenges[locale] || project.challenges.fr,
    lessonLearned: project.lessonLearned[locale] || project.lessonLearned.fr,
    links: project.links.map((link) => ({
      url: link.url,
      text: link.text[locale] || link.text.fr,
      title: link.title[locale] || link.title.fr,
      alt: link.alt,
      target: link.target,
      type: link.type,
    })),
  }));
}

/**
 * Récupère un projet par son slug selon la locale
 */
export function getProjectBySlug(
  slug: string,
  locale: Locale = "fr",
): Project | undefined {
  return getAllProjects(locale).find((project) => project.slug === slug);
}
