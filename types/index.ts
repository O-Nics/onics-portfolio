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
  name: { fr: string; en: string };
  school: { fr: string; en: string };
  startDate: { fr: string; en: string };
  endDate: { fr: string; en: string };
  description: { fr: string; en: string };
  level: { fr: string; en: string };
  location: { fr: string; en: string };
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
  imageUrl: string;
}

export interface Skill {
  title: string;
  items: SkillItem[];
}

export interface SkillsData {
  skills: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  society?: string | null;
  date: string;
  location: string;
  description: string;
}

// Type pour les données brutes du JSON (avant transformation)
export interface ExperienceRaw {
  id: number;
  title: { fr: string; en: string };
  society?: { fr: string; en: string } | null;
  date: { fr: string; en: string };
  location: { fr: string; en: string };
  description: { fr: string; en: string };
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface ExperienceDataRaw {
  experiences: ExperienceRaw[];
}

export type Locale = "fr" | "en";
