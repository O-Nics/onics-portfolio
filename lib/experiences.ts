import experiencesData from "@/data/experiences.json";
import { Experience, ExperienceData } from "@/types";

/**
 * Récupère tous les projets
 */
export function getAllExperiences(): Experience[] {
  return (experiencesData as unknown as ExperienceData).experiences;
}
