import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import NextLink from "next/link";
import { ReactNode, useState } from "react";
import { capitalize } from "@heroui/shared-utils";
import Autoplay from "embla-carousel-autoplay";
import FsLightbox from "fslightbox-react";

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
import FadeUp from "@/components/animation/fade-up";
import { NavigationInPage } from "@/components/navigationInPage";
import { LinkNavigation } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectPageProps {
  project: Project;
}

function getColorLink(type: string) {
  // common base: transition + rounded already applied by Button elsewhere
  const common = "transition-colors duration-200";

  switch (type) {
    case "website": {
      const color = "secondary";
      return [
        common,
        // default
        "bg-secondary",
        "border",
        "border-secondary",
        "text-white",
        // hover becomes outline
        "hover:bg-transparent",
        "dark:hover:!text-purple-300",
        "hover:!text-secondary",
        "hover:border-secondary",
        "dark:hover:border-purple-300",
      ].join(" ");
    }
    case "ios": {
      // Apple brand: black
      return [
        common,
        "bg-black",
        "dark:bg-white",
        "border",
        "border-black",
        "dark:border-white",
        "text-white",
        "dark:text-black",
        "hover:!bg-transparent",
        "hover:text-black",
        "dark:hover:!text-white",
        "hover:border-black",
        "dark:hover:border-white",
        // dark mode keeps contrast
        "dark:hover:text-black",
      ].join(" ");
    }
    case "android": {
      return [
        common,
        "bg-green-600",
        "border",
        "border-green-600",
        "text-white",
        "hover:bg-transparent",
        "dark:hover:text-green-400",
        "hover:text-green-600",
        "dark:hover:border-green-400",
        "hover:border-green-600",
      ].join(" ");
    }
    case "github": {
      return [
        common,
        "bg-black",
        "dark:bg-white",
        "border",
        "border-black",
        "dark:border-white",
        "text-white",
        "dark:text-black",
        "hover:!bg-transparent",
        "hover:text-black",
        "dark:hover:!text-white",
        "hover:border-black",
        "dark:hover:border-white",
        // dark mode keeps contrast
        "dark:hover:text-black",
      ].join(" ");
    }
    case "flutter": {
      return [
        common,
        "bg-blue-500",
        "border",
        "border-blue-500",
        "text-white",
        "hover:bg-transparent",
        "hover:text-blue-500",
        "dark:hover:text-blue-300",
        "dark:hover:border-blue-300",
        "hover:border-blue-500",
      ].join(" ");
    }
    default: {
      // Neutral/unknown type: subtle gray outline behavior
      return [
        common,
        "bg-gray-200",
        "border",
        "border-gray-300",
        "text-gray-900",
        "hover:bg-transparent",
        "hover:text-gray-700",
        "hover:border-gray-400",
        "dark:bg-gray-700",
        "dark:text-gray-100",
        "dark:border-gray-600",
        "dark:hover:text-gray-300",
        "dark:hover:border-gray-500",
      ].join(" ");
    }
  }
}

function getIconLink(type: string): ReactNode {
  switch (type) {
    case "ios":
      return <AppleIcon className="h-[24px] mb-[2px]" />;
    case "android":
      return <AndroidIcon className="h-[24px]" />;
    case "github":
      return <GithubIcon />;
    case "flutter":
      return <FlutterIcon className="h-[24px]" />;
    default:
      return <ExternalLinkIcon className="h-[24px]" />;
  }
}

const leftLink: LinkNavigation = {
  name: "Revenir aux projets",
  href: "/projets",
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (index: number) => {
    // Important : on inverse le booléen pour forcer la mise à jour du composant
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

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
        <FadeUp>
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
        </FadeUp>

        {/* En-tête du projet */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <FadeUp delay={0.05}>
              <h1 className={titleClass({ size: "lg" })}>{project.title}</h1>
            </FadeUp>
            {project.status === "in-progress" && (
              <Chip color="warning" variant="flat">
                En cours
              </Chip>
            )}
          </div>
          <FadeUp delay={0.1}>
            <p className="text-default-600">{project.shortDescription}</p>
          </FadeUp>

          {/* Catégories et date */}
          <FadeUp delay={0.15}>
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              {project.categories.map((category) => (
                <Chip key={category} color="primary" variant="dot">
                  {category}
                </Chip>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Galerie d'images */}
        {images.length > 0 && (
          <div>
            <FadeUp delay={0.2}>
              <Carousel
                className="rounded-md overflow-hidden flex lg:hidden "
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    stopOnInteraction: true,
                    stopOnFocusIn: true,
                    stopOnMouseEnter: true,
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent className="">
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <button
                        className="cursor-pointer"
                        onClick={() => openLightboxOnSlide(index)}
                      >
                        <div key={index} className="flex flex-col gap-2">
                          <Image
                            alt={image.alt || `Image ${index + 1}`}
                            className="object-cover "
                            src={image.path}
                            width="100%"
                          />
                        </div>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </FadeUp>
            <div className=" grid-cols-1 md:grid-cols-2 gap-4 mt-4 hidden lg:grid">
              {images.map((image, index) => (
                <FadeUp key={index} delay={0.1 + index * 0.05}>
                  <button
                    className="cursor-pointer"
                    onClick={() => openLightboxOnSlide(index)}
                  >
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
                  </button>
                </FadeUp>
              ))}
            </div>
            <FsLightbox
              loadOnlyCurrentSource
              slide={lightboxController.slide}
              sources={images.map((i) => i.path)}
              toggler={lightboxController.toggler}
            />
          </div>
        )}

        {/* Vidéos */}
        {videos.length > 0 && (
          <div>
            <FadeUp delay={0.2}>
              <Carousel
                className="rounded-md overflow-hidden flex lg:hidden "
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    stopOnInteraction: true,
                    stopOnFocusIn: true,
                    stopOnMouseEnter: true,
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent className="">
                  {videos.map((video, index) => (
                    <CarouselItem key={index}>
                      <div key={index} className="flex flex-col gap-2">
                        <video
                          controls
                          autoPlay={index == 0}
                          className="object-cover rounded-lg"
                          src={video.path}
                        >
                          <track kind="captions" />
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </FadeUp>
            <div className="grid-cols-1 md:grid-cols-2 gap-4 mt-4 hidden lg:grid">
              {videos.map((video, index) => (
                <FadeUp key={index} delay={0.2 + index * 0.05}>
                  <div
                    key={index}
                    className="flex flex-col gap-2 rounded-lg overflow-hidden"
                  >
                    <video
                      controls
                      autoPlay={index == 0}
                      className="w-full "
                      src={video.path}
                    >
                      <track kind="captions" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FsLightbox
              loadOnlyCurrentSource
              slide={lightboxController.slide}
              sources={videos.map((i) => i.path)}
              toggler={lightboxController.toggler}
            />
          </div>
        )}

        {/* Corps du texte (markdown simplifié) */}
        <div className="prose dark:prose-invert max-w-none">
          <FadeUp  delay={0.25}>
            <p  className="text-default-700 mb-0">
              {project.body}
            </p>
          </FadeUp>
        </div>

        <FadeUp  delay={0.3}>
          <h2  className="text-2xl font-bold mt-4 mb-0">
            <span className="text-primary">|</span>{" "}
            Fonctionnalités
          </h2>
        </FadeUp>
        <div className="gap-0 flex flex-col">
          {project.features.map((feature, index) => (
            <FadeUp key={index} delay={0.3 + 0.015 * index}>
              <li key={index} className="ml-8 mt-0 mb-0">
                {feature.replace("- ", "")}
              </li>
            </FadeUp>
          ))}
        </div>

        <FadeUp  delay={0.35}>
          <h2  className="text-2xl font-bold mt-4 mb-0">
            <span className="text-primary">|</span>{" "}
            Défis relevés
          </h2>
        </FadeUp>
        <div className="gap-0 flex flex-col">
          {project.challenges.map((feature, index) => (
            <FadeUp key={index} delay={0.35 + 0.015 * index}>
              <li key={index} className="ml-8 mt-0 mb-0">
                {feature.replace("- ", "")}
              </li>
            </FadeUp>
          ))}
        </div>

        <FadeUp  delay={0.35}>
          <h2  className="text-2xl font-bold mt-4 mb-0">
            <span className="text-primary">|</span>{" "}
            Leçons apprises
          </h2>
        </FadeUp>
        <div className="gap-0 flex flex-col">
          {project.lessonLearned.map((feature, index) => (
            <FadeUp key={index} delay={0.35 + 0.015 * index}>
              <li key={index} className="ml-8 mt-0 mb-0">
                {feature.replace("- ", "")}
              </li>
            </FadeUp>
          ))}
        </div>



        {/* Stack technique */}
        <div className="flex flex-col pt-5 gap-4">
          <FadeUp delay={0.4}>
            <h2 className="text-2xl font-bold">
              {" "}
              <span className="text-primary">|</span> Technologies utilisées
            </h2>
          </FadeUp>
          <div className="flex flex-wrap gap-2 pt-4">
            {project.stack.map((tech, index) => (
              <div key={tech.name} className="w-fit shadow-red-50">
                <FadeUp
                  delay={
                    0.45 + index * 0.02
                  }
                >
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
                </FadeUp>
              </div>
            ))}
          </div>
        </div>

        {/* Liens */}
        {project.links.length > 0 && (
          <div className="flex flex-col pt-5 gap-4">
            <FadeUp delay={0.5}>
              <h2 className="text-2xl font-bold">
                <span className="text-primary">|</span> Liens
              </h2>
            </FadeUp>
            <div className="flex flex-wrap pt-2 gap-3">
              {project.links.map((link, index) => (
                <FadeUp
                  key={index}
                  delay={
                    0.5 + index * 0.05
                  }
                >
                  <Button
                    key={index}
                    className={`${getColorLink(link.type)} px-3 h-8 `}
                    href={link.url}
                    radius={"full"}
                    startContent={getIconLink(link.type)}
                    target={link.target}
                    title={link.title}
                    as={Link}
                    // className="px-2 h-8 mt-10 bg-white  text-gray-600 dark:text-gray-300  dark:bg-gray-800"
                    isExternal={link.target === "_blank"}
                  >
                    {link.text}
                  </Button>
                </FadeUp>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <FadeUp delay={0.55}>
          <NavigationInPage left={leftLink} />
        </FadeUp>
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
