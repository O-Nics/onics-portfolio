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
  icon?: React.ComponentType<any>;
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

export interface EducationData {
  educations: Education[];
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

export interface ExperienceData {
  experiences: Experience[];
}
