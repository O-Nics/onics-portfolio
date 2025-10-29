import { Project, ProjectsData } from "@/types/project";
import projectsData from "@/data/projects.json";

/**
 * Récupère tous les projets avec traduction selon la locale
 */
export function getAllProjects(locale: string = "fr"): Project[] {
  const data = projectsData as ProjectsData;

  // Transformer les projets pour retourner les valeurs traduites
  return data.projects.map((project: any) => ({
    ...project,
    title: project.title?.[locale] || project.title?.fr || project.title,
    shortDescription: project.shortDescription?.[locale] || project.shortDescription?.fr || project.shortDescription,
    longDescription: project.longDescription?.[locale] || project.longDescription?.fr || project.longDescription,
    body: project.body?.[locale] || project.body?.fr || project.body,
    status: project.status?.[locale] || project.status?.fr || project.status,
    type: project.type?.[locale] || project.type?.fr || project.type,
    features: project.features?.[locale] || project.features?.fr || project.features,
    challenges: project.challenges?.[locale] || project.challenges?.fr || project.challenges,
    lessonLearned: project.lessonLearned?.[locale] || project.lessonLearned?.fr || project.lessonLearned,
    links: project.links?.map((link: any) => ({
      ...link,
      text: link.text?.[locale] || link.text?.fr || link.text,
      title: link.title?.[locale] || link.title?.fr || link.title,
    })),
  }));
}

/**
 * Récupère un projet par son slug selon la locale
 */
export function getProjectBySlug(slug: string, locale: string = "fr"): Project | undefined {
  return getAllProjects(locale).find((project) => project.slug === slug);
}
