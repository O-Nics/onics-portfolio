export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Planche - Portfolio",
  description: "Portfolio de Nicolas Planche, développeur full-stack passionné par le développement web et mobile.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
      modal: false,
    },
    {
      label: "Projets",
      href: "/projets",
      modal: false,
    },
    {
      label: "À propos",
      href: "/a-propos",
      modal: false,
    },
    {
      label: "Contact",
      href: "/contact",
      modal: false,
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/",
      modal: false,
    },
    {
      label: "Projets",
      href: "/projets",
      modal: false,
    },
    {
      label: "À propos",
      href: "/a-propos",
      modal: false,
    },
    {
      label: "Contact",
      href: "/contact",
      modal: false,
    },
  ],
  links: {
    github: "https://github.com/O-Nicks",
    linkedin: "https://www.linkedin.com/in/nicolas-planche/",
  },
};
