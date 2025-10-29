import experiencesData from "@/data/experiences.json";
import { Experience, ExperienceDataRaw, Locale } from "@/types";

/**
 * Récupère toutes les expériences avec traduction selon la locale
 */
export function getAllExperiences(locale: Locale = "fr"): Experience[] {
  const data = experiencesData as ExperienceDataRaw;

  // Transformer les expériences pour retourner les valeurs traduites
  return data.experiences.map((exp) => ({
    id: exp.id,
    title: exp.title[locale] || exp.title.fr,
    society: exp.society ? exp.society[locale] || exp.society.fr : null,
    date: exp.date[locale] || exp.date.fr,
    location: exp.location[locale] || exp.location.fr,
    description: exp.description[locale] || exp.description.fr,
  }));
}
