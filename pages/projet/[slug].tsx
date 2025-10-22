import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import NextLink from "next/link";

import DefaultLayout from "@/layouts/default";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { Project } from "@/types/project";
import { title as titleClass, subtitle } from "@/components/primitives";

interface ProjectPageProps {
  project: Project;
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
      <section className="flex flex-col gap-8 py-8 md:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link as={NextLink} color="foreground" href="/">
            Accueil
          </Link>
          <span className="text-default-400">/</span>
          <Link as={NextLink} color="foreground" href="/projets">
            Projets
          </Link>
          <span className="text-default-400">/</span>
          <span className="text-default-600">{project.name}</span>
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
          <p className={subtitle()}>{project.shortDescription}</p>

          {/* Catégories et date */}
          <div className="flex flex-wrap gap-2 items-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.replace("# ", "")}
                </h1>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-4">
                  {paragraph.replace("- ", "")}
                </li>
              );
            }
            if (paragraph.trim() === "") {
              return <br key={index} />;
            }

            return (
              <p key={index} className="text-default-700 mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Stack technique */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Chip key={tech} color="secondary" size="lg" variant="flat">
                {tech}
              </Chip>
            ))}
          </div>
        </div>

        {/* Liens */}
        {project.links.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Liens</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  as={Link}
                  color="primary"
                  href={link.url}
                  isExternal={link.target === "_blank"}
                  target={link.target}
                  title={link.title}
                  variant="bordered"
                >
                  {link.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center pt-8">
          <Button
            as={NextLink}
            color="default"
            href="/projets"
            variant="bordered"
          >
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
