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

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Planche",
  canonicalUrl: "https://nicolasplanche.fr",
  // canonicalUrl: "https://nicolas-planche.dev",
  description:
    "Portfolio de Nicolas Planche, développeur full-stack passionné par le développement web et mobile.",
  sidebarNavigation: [
    { name: "Introduction", href: "/", icon: IntroIcon },
    { name: "À propos de moi", href: "/a-propos", icon: AboutIcon },
    { name: "Projets", href: "/projets", icon: ProjectsIcon },
    { name: "Compétences", href: "/competences", icon: CompetenceIcon },
    { name: "Éxperiences", href: "/xp", icon: XpIcon },
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
      name: "Télécharger mon CV",
      href: "images/cv/CV_Nicolas_Planche_2025.pdf",
      icon: DocIcon,
      isExternal: true,
    },
  ],
  links: {
    github: "https://github.com/O-Nics",
    linkedin: "https://www.linkedin.com/in/nicolas-planche/",
  },
};
