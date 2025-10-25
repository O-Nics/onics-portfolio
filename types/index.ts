import { SVGProps } from "react";
import {Project} from "@/types/project";

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
  href: string;
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