import { SVGProps } from "react";

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