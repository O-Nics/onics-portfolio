import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import {
  AboutIcon,
  CoffeeIcon, ContactIcon,
  DocIcon,
  GithubIcon, IntroIcon,
  LinkedinIcon, ProjectsIcon, SchoolIcon, XpIcon,
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
    { name: "Introduction", href: "/", icon: IntroIcon, current: true },
    { name: "À propos de moi", href: "/a-propos", icon: AboutIcon, current: false },
    { name: "Projets", href: "/projets", icon: ProjectsIcon, current: false },
    { name: "Compétences", href: "/skills", icon: XpIcon, current: false },
    { name: "Experiences", href: "/xp", icon: CalendarIcon, current: false },
    {
      name: "Formations",
      href: "/education",
      icon: SchoolIcon,
      current: false,
    },
    { name: "Contact", href: "/contact", icon: ContactIcon, current: false },
  ],
  quickLinks: [
    {
      id: 1,
      name: "Github",
      href: "https://github.com/O-Nicks",
      icon: GithubIcon,
    },
    {
      id: 2,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/nicolas-planche/",
      icon: LinkedinIcon,
    },
    {
      id: 3,
      name: "Télécharger mon CV",
      href: "#",
      icon: DocIcon,
    },
    {
      id: 4,
      name: "Buy me a coffee",
      href: "https://buymeacoffee.com/o.nicks",
      icon: CoffeeIcon,
    },
  ],
  links: {
    github: "https://github.com/O-Nicks",
    linkedin: "https://www.linkedin.com/in/nicolas-planche/",
  },
};
