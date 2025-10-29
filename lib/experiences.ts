import experiencesData from "@/data/experiences.json";
import { Experience, ExperienceData } from "@/types";

/**
 * Récupère toutes les expériences avec traduction selon la locale
 */
export function getAllExperiences(locale: string = "fr"): Experience[] {
  const data = experiencesData as unknown as ExperienceData;

  // Transformer les expériences pour retourner les valeurs traduites
  return data.experiences.map((exp: any) => ({
    ...exp,
    title: exp.title?.[locale] || exp.title?.fr || exp.title,
    society: exp.society?.[locale] || exp.society?.fr || exp.society,
    date: exp.date?.[locale] || exp.date?.fr || exp.date,
    location: exp.location?.[locale] || exp.location?.fr || exp.location,
    description: exp.description?.[locale] || exp.description?.fr || exp.description,
  }));
}
