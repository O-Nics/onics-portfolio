export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Planche - Portfolio",
  description: "Portfolio website of Nicolas Planche, a passionate developer.",
  navItems: [
    {
      label: "Home",
      href: "/",
      modal: false,
    },
    {
      label: "Projects",
      href: "/projects",
      modal: false,
    },
    {
      label: "Contact",
      href: "/contact",
      modal: true,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      modal: false,
    },
    {
      label: "Projects",
      href: "/projects",
      modal: false,
    },
    {
      label: "Contact",
      href: "/contact",
      modal: true,
    },
  ],
  links: {
    github: "https://github.com/O-Nicks",
    linkedin: "https://www.linkedin.com/in/nicolas-planche/",
  },
};
