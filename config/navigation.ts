import React from "react";

import {
  AboutIcon,
  CompetenceIcon,
  ContactIcon,
  DocIcon,
  GithubIcon,
  IntroIcon,
  LinkedinIcon,
  ProjectsIcon,
  SchoolIcon,
  XpIcon,
} from "@/components/icons";
import { Locale } from "@/types";

interface Translations {
  nav: {
    introduction: string;
    about: string;
    projects: string;
    skills: string;
    experiences: string;
    education: string;
    contact: string;
    cv: string;
  };
}

interface NavigationLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface QuickLink {
  id: number;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  isExternal: boolean;
}

export const getNavigationLinks = (t: Translations): NavigationLink[] => [
  { name: t.nav.introduction, href: "/", icon: IntroIcon },
  { name: t.nav.about, href: "/a-propos", icon: AboutIcon },
  { name: t.nav.projects, href: "/projets", icon: ProjectsIcon },
  { name: t.nav.skills, href: "/competences", icon: CompetenceIcon },
  { name: t.nav.experiences, href: "/xp", icon: XpIcon },
  { name: t.nav.education, href: "/education", icon: SchoolIcon },
  { name: t.nav.contact, href: "/contact", icon: ContactIcon },
];

export const getNavigationQuickLinks = (
  t: Translations,
  locale: Locale = "fr",
): QuickLink[] => [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/O-Nics",
    icon: GithubIcon,
    isExternal: true,
  },
  {
    id: 2,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas-planche/",
    icon: LinkedinIcon,
    isExternal: true,
  },

  {
    id: 3,
    name: t.nav.cv,
    href:
      locale === "en"
        ? "/images/cv/CV_Nicolas_Planche_2026.pdf"
        : "/images/cv/CV_Nicolas_Planche_2026.pdf",
    icon: DocIcon,
    isExternal: true,
  },
];
