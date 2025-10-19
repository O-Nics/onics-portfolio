import { CalendarIcon } from "@heroicons/react/24/outline";

import {
  AboutIcon,
  CoffeeIcon,
  ContactIcon,
  DocIcon,
  GithubIcon,
  IntroIcon,
  LinkedinIcon,
  ProjectsIcon,
  SchoolIcon,
  XpIcon,
} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Planche - Portfolio",
  description:
    "Portfolio de Nicolas Planche, développeur full-stack passionné par le développement web et mobile.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
      modal: false,
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/",
      modal: false,
    },
  ],
  sidebarNavigation: [
    { name: "Introduction", href: "/", icon: IntroIcon },
    { name: "À propos de moi", href: "/a-propos", icon: AboutIcon },
    { name: "Projets", href: "/projets", icon: ProjectsIcon },
    { name: "Compétences", href: "/competences", icon: XpIcon },
    { name: "Experiences", href: "/xp", icon: CalendarIcon },
    {
      name: "Formations",
      href: "/education",
      icon: SchoolIcon,
    },
    { name: "Contact", href: "/contact", icon: ContactIcon },
  ],
  quickLinks: [
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
      name: "Buy me a coffee",
      href: "https://buymeacoffee.com/o.nicks",
      icon: CoffeeIcon,
      isExternal: true,
    },
    {
      id: 4,
      name: "Télécharger mon CV",
      href: "#",
      icon: DocIcon,
      isExternal: false,
    },
  ],
  links: {
    github: "https://github.com/O-Nicks",
    linkedin: "https://www.linkedin.com/in/nicolas-planche/",
  },
};
