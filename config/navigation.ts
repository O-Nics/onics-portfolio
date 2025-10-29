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

export const getNavigationLinks = (t: any) => [
  { name: t.nav.introduction, href: "/", icon: IntroIcon },
  { name: t.nav.about, href: "/a-propos", icon: AboutIcon },
  { name: t.nav.projects, href: "/projets", icon: ProjectsIcon },
  { name: t.nav.skills, href: "/competences", icon: CompetenceIcon },
  { name: t.nav.experiences, href: "/xp", icon: XpIcon },
  { name: t.nav.education, href: "/education", icon: SchoolIcon },
  { name: t.nav.contact, href: "/contact", icon: ContactIcon },
];

export const getNavigationQuickLinks = (t: any) => [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/O-Nicks",
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
    href: "images/cv/CV_Nicolas_Planche_2025.pdf",
    icon: DocIcon,
    isExternal: true,
  },
];
