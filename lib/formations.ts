import educationData from "@/data/formations.json";
import { Education, EducationData } from "@/types";

/**
 * Récupère tous les projets
 */
export function getAllFormation(): Education[] {
  return (educationData as unknown as EducationData).educations;
}
