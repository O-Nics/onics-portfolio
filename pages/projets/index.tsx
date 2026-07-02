import { Image } from "@heroui/react";
import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { Project } from "@/types/project";
import { NavigationInPage } from "@/features/navigation";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { getAllProjects } from "@/lib/projects";
import Fade from "@/components/animation/fade";
import { useTranslations } from "@/hooks/useTranslations";
import { getPageMeta } from "@/lib/meta";
import { siteConfig } from "@/config";

interface ProjetsPageProps {
  projects: Project[];
  categories: string[];
  technologies: string[];
}

export default function ProjetsPage({}: ProjetsPageProps) {
  const { t, locale } = useTranslations();
  const projects = getAllProjects(locale);
  const meta = getPageMeta("projects", locale);

  const leftLink: LinkNavigation = {
    name: t.projects.leftLink,
    href: "/a-propos",
  };
  const rightLink: LinkNavigation = {
    name: t.projects.rightLink,
    href: "/competences",
  };

  return (
    <DefaultLayout
      description={meta.description}
      keywords={meta.keywords}
      title={meta.title}
      type={meta.type}
      url={`${siteConfig.canonicalUrl}/${meta.url}`}
    >
      <main>
        <FadeUp>
          <h1>{t.projects.title}</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">
            {t.projects.subtitle}
            <br /> {t.projects.subtitle2}
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp !pt-6 ">{t.projects.description}</p>
        </FadeUp>
        <div className="pt-8 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects
            .filter((project) => project.featured == true)
            .map((project, index) => (
              <FadeUp
                key={project.slug}
                className="card"
                delay={0.2 + index * 0.1}
              >
                <div className="overflow-hidden img-card dark:bg-gray-50/5 bg-gray-100/70 h-full dark:hover:bg-gray-50/8 hover:bg-primary/10 transition duration-300 rounded-xl">
                  <Link
                    key={project.slug}
                    href={`/projet/${project.slug}`}
                    title={project.name}
                  >
                    <div className=" h-full flex flex-col justify-between ">
                      <div className="overflow-hidden ">
                        <div className="relative h-48 overflow-hidden relative group">
                          <Image
                            alt={project.name}
                            className={`img-behind absolute object-cover w-full h-48  !rounded-b-none rounded-lg  duration-500 `}
                            src={
                              project.media.find((m) => m.type === "image")
                                ?.path || ""
                            }
                            width="100%"
                          />
                          {project.media.filter((m) => m.type === "image")
                            .length > 1 && (
                            <Image
                              alt={project.name}
                              className="img-above absolute  inset-0  object-cover w-full h-48 !rounded-b-none rounded-lg   !transition duration-500 "
                              src={
                                project.media.filter(
                                  (m) => m.type === "image",
                                )[1]?.path || ""
                              }
                              width="100%"
                            />
                          )}
                        </div>
                        <div className=" px-3 pt-3">
                          <FadeUp delay={0.15 * index + 0.05}>
                            <p className=" text-sm font-extrabold uppercase dark:text-gray-50/40 text-gray-500  tracking-tight ">
                              {project.type}
                            </p>
                          </FadeUp>
                          <FadeUp delay={0.15 * index + 0.1}>
                            <h2 className="text-lg font-extrabold dark:text-gray-50 text-black/80 mb-3 leading-6 pt-1">
                              {project.title}
                            </h2>
                          </FadeUp>
                          <FadeUp delay={0.15 * index + 0.15}>
                            <p className="text-sm dark:text-gray-50/70 text-black/60 tracking-tight">
                              {project.shortDescription}..{" "}
                            </p>
                          </FadeUp>
                        </div>
                      </div>
                      <strong className=" link ">{t.projects.seeMore}</strong>
                    </div>
                  </Link>
                </div>
              </FadeUp>
            ))}
        </div>
        <div>
          {/*<p className="mt-10 mb-6 text-2xl font-extrabold">*/}
          {/*  {t.projects.otherProjects}*/}
          {/*</p>*/}
          {/*<div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4">*/}
          {/*  {projects*/}
          {/*    .filter((project) => project.featured == false)*/}
          {/*    .map((project, index) => (*/}
          {/*      <FadeUp*/}
          {/*        key={project.slug}*/}
          {/*        className="card"*/}
          {/*        delay={0.2 + index * 0.1}*/}
          {/*      >*/}
          {/*        <div className="overflow-hidden img-card dark:bg-gray-50/5 bg-gray-100/70 h-full dark:hover:bg-gray-50/8 hover:bg-primary/10 transition duration-300 rounded-xl">*/}
          {/*          <Link*/}
          {/*            key={project.slug}*/}
          {/*            href={`/projet/${project.slug}`}*/}
          {/*            title={project.name}*/}
          {/*          >*/}
          {/*            <div className=" h-full flex flex-col justify-between ">*/}
          {/*              <div className="overflow-hidden ">*/}
          {/*                <div className=" px-3 pt-3">*/}
          {/*                  <FadeUp delay={0.15 * index + 0.05}>*/}
          {/*                    <p className=" text-sm font-extrabold uppercase dark:text-gray-50/40 text-gray-500  tracking-tight ">*/}
          {/*                      {project.type}*/}
          {/*                    </p>*/}
          {/*                  </FadeUp>*/}
          {/*                  <FadeUp delay={0.15 * index + 0.1}>*/}
          {/*                    <h2 className="text-lg font-extrabold dark:text-gray-50 text-black/80 mb-3 leading-6 pt-1">*/}
          {/*                      {project.title}*/}
          {/*                    </h2>*/}
          {/*                  </FadeUp>*/}
          {/*                  <FadeUp delay={0.15 * index + 0.15}>*/}
          {/*                    <p className="text-sm dark:text-gray-50/70 text-black/60 tracking-tight">*/}
          {/*                      {project.shortDescription}..{" "}*/}
          {/*                    </p>*/}
          {/*                  </FadeUp>*/}
          {/*                </div>*/}
          {/*              </div>*/}
          {/*              <strong className=" link ">{t.projects.seeMore}</strong>*/}
          {/*            </div>*/}
          {/*          </Link>*/}
          {/*        </div>*/}
          {/*      </FadeUp>*/}
          {/*    ))}*/}
          {/*</div>*/}
        </div>
        <Fade delay={projects.length * 0.1 + 0.2}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </Fade>
      </main>
    </DefaultLayout>
  );
}
