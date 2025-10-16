import { GetStaticProps } from "next";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { Project } from "@/types/project";

interface IndexPageProps {
  featuredProjects: Project[];
}

export default function IndexPage({ featuredProjects }: IndexPageProps) {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Nicolas Planche</h1>
          <h2 className={title({ color: "violet" })}>Développeur Full-Stack</h2>
          <p className={subtitle({ class: "mt-4" })}>
            Je construis des applications web et mobiles performantes avec
            Flutter, Laravel et les technologies modernes.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            as={NextLink}
            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
            href="/projets"
          >
            Voir mes projets
          </Button>
          <Button
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="/contact"
          >
            Me contacter
          </Button>
        </div>

        <div className="flex gap-4 mt-4">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" size={24} />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
            <LinkedinIcon className="text-default-500" size={24} />
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="flex flex-col gap-8 py-8 md:py-10">
          <div className="flex flex-col gap-2">
            <h2 className={title({ size: "sm" })}>Projets en vedette</h2>
            <p className="text-default-600">
              Découvrez une sélection de mes réalisations récentes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              as={NextLink}
              className={buttonStyles({ variant: "flat" })}
              href="/projets"
            >
              Voir tous les projets
            </Button>
          </div>
        </section>
      )}

      {/* About Preview Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className={title({ size: "sm" })}>À propos</h2>
            <p className="mt-4 text-default-700">
              Passionné par le développement logiciel, je me spécialise dans la
              création d'applications web et mobiles complètes. Mon approche
              combine expertise technique, rigueur et créativité pour
              transformer vos idées en solutions digitales performantes.
            </p>
            <div className="mt-6">
              <Button
                as={NextLink}
                className={buttonStyles({ variant: "light" })}
                href="/a-propos"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      featuredProjects,
    },
  };
};
