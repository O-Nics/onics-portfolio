import metaData from "@/data/meta.json";
import { Locale } from "@/types";

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: "website" | "article" | "profile";
}

interface PageMetaRaw {
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  keywords: { fr: string; en: string };
  url: string;
  type: "website" | "article" | "profile";
}

interface MetaData {
  pages: {
    home: PageMetaRaw;
    about: PageMetaRaw;
    projects: PageMetaRaw;
    skills: PageMetaRaw;
    experiences: PageMetaRaw;
    education: PageMetaRaw;
    contact: PageMetaRaw;
  };
}

type PageKey =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experiences"
  | "education"
  | "contact";

/**
 * Récupère les métadonnées d'une page selon la locale
 */
export function getPageMeta(pageKey: PageKey, locale: Locale = "fr"): PageMeta {
  const data = metaData as MetaData;
  const pageMeta = data.pages[pageKey];

  if (!pageMeta) {
    throw new Error(`Page meta not found for key: ${pageKey}`);
  }

  return {
    title: pageMeta.title[locale] || pageMeta.title.fr,
    description: pageMeta.description[locale] || pageMeta.description.fr,
    keywords: pageMeta.keywords[locale] || pageMeta.keywords.fr,
    url: locale === "en" ? `${pageMeta.url}/en` : pageMeta.url,
    type: pageMeta.type,
  };
}
