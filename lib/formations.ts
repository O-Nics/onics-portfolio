import educationData from "@/data/formations.json";
import { Education, EducationData } from "@/types";

/**
 * Récupère toutes les formations avec traduction selon la locale
 */
export function getAllFormation(locale: string = "fr"): Education[] {
  const data = educationData as unknown as EducationData;

  // Transformer les formations pour retourner les valeurs traduites
  return data.educations.map((edu: any) => ({
    ...edu,
    name: edu.name?.[locale] || edu.name?.fr || edu.name,
    school: edu.school?.[locale] || edu.school?.fr || edu.school,
    startDate: edu.startDate?.[locale] || edu.startDate?.fr || edu.startDate,
    endDate: edu.endDate?.[locale] || edu.endDate?.fr || edu.endDate,
    level: edu.level?.[locale] || edu.level?.fr || edu.level,
    location: edu.location?.[locale] || edu.location?.fr || edu.location,
    description:
      edu.description?.[locale] || edu.description?.fr || edu.description,
  }));
}
