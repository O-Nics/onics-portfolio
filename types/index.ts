import React, { SVGProps } from "react";

import { ProjectStack } from "@/types/project";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LinkNavigation = {
  name: string;
  href: string;
};

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  longDescription?: string;
  href: string;
  stack?: ProjectStack[];
  categories?: string[];
  school?: string;
  level?: string;
  category: "menu" | "project" | "experience" | "formation";
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export interface Education {
  id: number;
  name: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
  level: string;
  location: string;
}

// Type pour les données brutes du JSON (avant transformation)
export interface EducationRaw {
  id: number;
  name: Translations;
  school: Translations;
  startDate: Translations;
  endDate: Translations;
  description: Translations;
  level: Translations;
  location: Translations;
}

export interface EducationData {
  educations: Education[];
}

export interface EducationDataRaw {
  educations: EducationRaw[];
}

export interface SkillItem {
  name: string;
  isFavorite: boolean;
  imageUrl: string | null;
}

export interface SkillItemRaw {
  name: string | Translations;
  isFavorite: boolean;
  imageUrl: string | null;
}

export interface Skill {
  title: string;
  items: SkillItem[];
}

export interface SkillRaw {
  title: Translations;
  items: SkillItemRaw[];
}

export interface SkillsDataRaw {
  skills: SkillRaw[];
}

export interface Experience {
  id: number;
  title: string;
  society?: string | null;
  latest: boolean;
  date: string;
  location: string;
  description: string;
}

// Type pour les données brutes du JSON (avant transformation)
export interface ExperienceRaw {
  id: number;
  title: Translations;
  society?: Translations | null;
  date: Translations;
  latest: boolean;
  location: Translations;
  description: Translations;
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface ExperienceDataRaw {
  experiences: ExperienceRaw[];
}

export type Locale = "fr" | "en";

export interface Translations {
  fr: string;
  en: string;
}