import metaData from "@/data/meta.json";

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: "website" | "article" | "profile";
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
export function getPageMeta(
  pageKey: PageKey,
  locale: string = "fr",
): PageMeta {
  const pageMeta = metaData.pages[pageKey];

  if (!pageMeta) {
    throw new Error(`Page meta not found for key: ${pageKey}`);
  }

  return {
    title:
      (pageMeta.title as any)[locale] ||
      (pageMeta.title as any).fr ||
      pageMeta.title,
    description:
      (pageMeta.description as any)[locale] ||
      (pageMeta.description as any).fr ||
      pageMeta.description,
    keywords:
      (pageMeta.keywords as any)[locale] ||
      (pageMeta.keywords as any).fr ||
      pageMeta.keywords,
    url: locale === "en" ? `${pageMeta.url}/en` : pageMeta.url,
    type: pageMeta.type as "website" | "article" | "profile",
  };
}
