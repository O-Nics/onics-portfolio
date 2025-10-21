
import DefaultLayout from "@/layouts/default";
import {
  getAllProjects,
  getAllCategories,
  getAllTechnologies,
} from "@/lib/projects";
import { Project } from "@/types/project";
import { NavigationInPage } from "@/components/navigationInPage";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";

interface ProjetsPageProps {
  projects: Project[];
  categories: string[];
  technologies: string[];
}

export default function ProjetsPage({
}: ProjetsPageProps) {

  const leftLink: LinkNavigation = {
    name: "À propos de moi",
    href: "/a-propos",
  };
  const rightLink: LinkNavigation = {
    name: "Compétences",
    href: "/competences",
  };

  return (
    <DefaultLayout>
      <main>
        <FadeUp>
          <h1>Nicolas Planche</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">Développeur Full-Stack & Mobile</p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp !pt-6">
            Amoureux de la tech, je conçois des applications mobiles et web
            ainsi que des back-ends solides.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="corp">
            J’utilise des technologies modernes tel que Flutter, Laravel,
            Vue/Nuxt, Next/React, Tailwind CSS et des pratiques DevOps pour
            livrer des solutions logicielles complètes, orientées utilisateur
            et de haute qualité.
          </p>
        </FadeUp>

      <NavigationInPage left={leftLink} right={rightLink}/>
      </main>
    </DefaultLayout>
  );
}


