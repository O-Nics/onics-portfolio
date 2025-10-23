import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import NextLink from "next/link";
import { ReactNode } from "react";

import DefaultLayout from "@/layouts/default";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { Project } from "@/types/project";
import { title as titleClass } from "@/components/primitives";
import {
  AndroidIcon,
  AppleIcon,
  ExternalLinkIcon,
  FlutterIcon,
  GithubIcon,
} from "@/components/icons";

interface ProjectPageProps {
  project: Project;
}

function getColorLink(type: string) {
  switch (type) {
    case "website":
      return "dark:hover:bg-secondary border border-secondary hover:bg-secondary hover:text-white bg-transparent ";
    case "ios":
      return "dark:hover:bg-gray-100 border dark:border-gray-50/10 border-black  hover:bg-black dark:hover:text-black hover:text-white bg-transparent ";
    case "android":
      return "dark:hover:bg-green-600 border border-green-600 hover:bg-green-600 hover:text-white bg-transparent ";
    case "github":
      return "dark:hover:bg-black border border-black hover:bg-black hover:text-white bg-transparent ";
    case "flutter":
      return "dark:hover:bg-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white bg-transparent ";
    default:
      return "gray";
  }
}

function getIconLink(type: string): ReactNode {
  switch (type) {
    case "ios":
      return <AppleIcon className="h-[24px] mb-[2px]"/>;
    case "android":
      return <AndroidIcon className="h-[24px]"/>;
    case "github":
      return <GithubIcon />;
    case "flutter":
      return <FlutterIcon className="h-[24px]" />;
    default:
      return <ExternalLinkIcon className="h-[24px]" />;
  }
}
export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <DefaultLayout>
        <div>Chargement...</div>
      </DefaultLayout>
    );
  }

  if (!project) {
    return (
      <DefaultLayout>
        <div>Projet non trouvé</div>
      </DefaultLayout>
    );
  }

  // Séparer les images et vidéos
  const images = project.media.filter((m) => m.type === "image");
  const videos = project.media.filter((m) => m.type === "video");

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-6 pt-3 pb-4 md:pb-6">
        {/* Breadcrumb */}
        <div className="flex items-center  gap-2 font-bold text-sm">
          <Link
            as={NextLink}
            className="text-default-500"
            color="foreground"
            href="/"
          >
            Accueil
          </Link>
          <span className="text-default-400 ">/</span>
          <Link
            as={NextLink}
            className="text-default-500"
            color="foreground"
            href="/projets"
          >
            Projets
          </Link>
          <span className="text-default-400 ">/</span>
          <span className="text-primary font-extrabold">{project.name}</span>
        </div>

        {/* En-tête du projet */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h1 className={titleClass({ size: "lg" })}>{project.title}</h1>
            {project.status === "in-progress" && (
              <Chip color="warning" variant="flat">
                En cours
              </Chip>
            )}
          </div>
          <p className="text-default-600">{project.shortDescription}</p>

          {/* Catégories et date */}
          <div className="flex flex-wrap gap-2 mt-3 items-center">
            {project.categories.map((category) => (
              <Chip key={category} color="primary" variant="bordered">
                {category}
              </Chip>
            ))}
            {project.date && (
              <>
                <Divider className="h-4" orientation="vertical" />
                <span className="text-sm text-default-500">
                  {new Date(project.date).toLocaleDateString("fr-FR", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Galerie d'images */}
        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Image
                  alt={image.alt || `Image ${index + 1}`}
                  className="object-cover rounded-lg"
                  src={image.path}
                  width="100%"
                />
                {image.caption && (
                  <p className="text-sm text-default-500 text-center">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Vidéos */}
        {videos.length > 0 && (
          <div className="flex flex-col gap-4">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col gap-2">
                <video controls className="w-full rounded-lg" src={video.path}>
                  <track kind="captions" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                {video.caption && (
                  <p className="text-sm text-default-500 text-center">
                    {video.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Corps du texte (markdown simplifié) */}
        <div className="prose dark:prose-invert max-w-none">
          {project.body.split("\n").map((paragraph, index) => {
            // Support simple du markdown
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-4 mb-0">
                  <span className="text-primary">|</span>{" "}
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-4 mb-0">
                  {paragraph.replace("# ", "")}
                </h1>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-8 mt-0">
                  {paragraph.replace("- ", "")}
                </li>
              );
            }
            if (paragraph.trim() === "") {
              return <br key={index} />;
            }

            return (
              <p key={index} className="text-default-700 mb-0">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Stack technique */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold"> <span className="text-primary">|</span>{" "}Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <div key={tech.name} className="w-fit shadow-red-50">
                <div className="flex-row flex items-center align-middle rounded-lg dark:bg-white/3 bg-gray-100 pr-3 pl-2 hover:bg-gray-100 dark:hover:bg-primary/10 hover:bg-primary/10 transition py-2 ">
                  <div className="flex h-5 flex-row items-center gap-2">
                    {tech.image && (
                      <Image
                        alt={tech.name}
                        className={` ${tech.name == "Next.js" || tech.name === "GitHub" || tech.name === "OpenAI API" ? "dark:invert" : ""}`}
                        height={20}
                        radius="none"
                        src={`/images/${tech.image}`}
                        width={20}
                      />
                    )}
                    <p className="text-sm">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Liens */}
        {project.links.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold"> <span className="text-primary">|</span>{" "}Liens</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  as={Link}
                  // className="px-2 h-8 mt-10 bg-white  text-gray-600 dark:text-gray-300  dark:bg-gray-800"
                  isExternal={link.target === "_blank"}
                  radius={"full"}
                  target={link.target}
                  title={link.title}
                  startContent={getIconLink(link.type)}
                  className={`${getColorLink(link.type)} px-3 h-8 `}
                  href={link.url}
                >
                  {link.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center pt-8">
          <Button as={NextLink} color="default" href="/projets" variant="flat">
            Retour aux projets
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
