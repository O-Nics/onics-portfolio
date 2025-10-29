import educationData from "@/data/formations.json";
import { Education, EducationDataRaw, Locale } from "@/types";

/**
 * Récupère toutes les formations avec traduction selon la locale
 */
export function getAllFormation(locale: Locale = "fr"): Education[] {
  const data = educationData as EducationDataRaw;

  // Transformer les formations pour retourner les valeurs traduites
  return data.educations.map((edu) => ({
    id: edu.id,
    name: edu.name[locale] || edu.name.fr,
    school: edu.school[locale] || edu.school.fr,
    startDate: edu.startDate[locale] || edu.startDate.fr,
    endDate: edu.endDate[locale] || edu.endDate.fr,
    level: edu.level[locale] || edu.level.fr,
    location: edu.location[locale] || edu.location.fr,
    description: edu.description[locale] || edu.description.fr,
  }));
}
