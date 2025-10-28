import {
  AboutIcon,
  CompetenceIcon,
  ContactIcon,
  IntroIcon,
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
