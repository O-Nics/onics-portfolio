import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import NextLink from "next/link";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  // Récupérer la première image du projet pour la vignette
  const thumbnail = project.media.find((m) => m.type === "image");

  return (
    <Card
      isPressable
      as={NextLink}
      className="w-full"
      href={`/projet/${project.slug}`}
    >
      {thumbnail && (
        <CardHeader className="p-0 overflow-hidden">
          <Image
            alt={thumbnail.alt || project.name}
            className="object-cover w-full h-48"
            src={thumbnail.path}
            width="100%"
          />
        </CardHeader>
      )}
      <CardBody className="gap-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{project.name}</h3>
          {project.status === "in-progress" && (
            <Chip color="warning" size="sm" variant="flat">
              En cours
            </Chip>
          )}
        </div>
        <p className="text-default-600 text-sm">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Chip key={tech} color="primary" size="sm" variant="flat">
              {tech}
            </Chip>
          ))}
          {project.stack.length > 4 && (
            <Chip size="sm" variant="flat">
              +{project.stack.length - 4}
            </Chip>
          )}
        </div>
      </CardBody>
      <CardFooter className="gap-2">
        <div className="flex flex-wrap gap-1">
          {project.categories.map((category) => (
            <Chip key={category} size="sm" variant="bordered">
              {category}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
