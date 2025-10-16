import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function AProposPage() {
  const skills = {
    frontend: ["Flutter", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Laravel", "Node.js", "PHP", "Python"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Docker", "Git", "GitHub", "Kubernetes", "Firebase"],
  };

  const values = [
    {
      title: "Qualité du code",
      description:
        "Je privilégie un code propre, maintenable et bien documenté pour assurer la pérennité des projets.",
    },
    {
      title: "Performance",
      description:
        "Optimisation constante pour offrir des applications rapides et fluides à vos utilisateurs.",
    },
    {
      title: "Collaboration",
      description:
        "Une communication claire et régulière pour transformer vos idées en solutions concrètes.",
    },
    {
      title: "Innovation",
      description:
        "Veille technologique continue pour utiliser les meilleures pratiques et outils modernes.",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8 py-8 md:py-10">
        {/* En-tête */}
        <div className="flex flex-col gap-4 text-center">
          <h1 className={title()}>À propos de moi</h1>
          <p className={subtitle()}>
            Développeur passionné par la création d'expériences digitales
          </p>
        </div>

        {/* Profil principal */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              alt="Nicolas Planche"
              className="rounded-lg"
              height={300}
              src="https://avatars.githubusercontent.com/u/61987116?v=4"
              width={300}
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Bonjour !</h2>
              <div className="text-default-700 space-y-3">
                <p>
                  Je suis Nicolas Planche, développeur full-stack spécialisé dans
                  la création d'applications web et mobiles. Avec une expertise
                  approfondie en Flutter, Laravel et les technologies web modernes,
                  je transforme des idées complexes en solutions digitales élégantes
                  et performantes.
                </p>
                <p>
                  Mon parcours m'a permis de travailler sur des projets variés,
                  allant d'applications mobiles grand public à des plateformes SaaS
                  complexes. Je suis constamment à la recherche de nouveaux défis
                  techniques et de projets innovants.
                </p>
                <p>
                  Passionné par l'apprentissage continu et le partage de
                  connaissances, je m'efforce de rester à jour avec les dernières
                  tendances du développement logiciel.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                isExternal
                className="flex items-center gap-2"
                href={siteConfig.links.github}
              >
                <GithubIcon size={24} />
                <span>GitHub</span>
              </Link>
              <Link
                isExternal
                className="flex items-center gap-2"
                href={siteConfig.links.linkedin}
              >
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Compétences techniques */}
        <div className="flex flex-col gap-6">
          <h2 className={title({ size: "sm" })}>Compétences techniques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardBody className="gap-3">
                <h3 className="text-lg font-semibold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Chip key={skill} color="primary" variant="flat">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-3">
                <h3 className="text-lg font-semibold">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Chip key={skill} color="secondary" variant="flat">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-3">
                <h3 className="text-lg font-semibold">Bases de données</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Chip key={skill} color="success" variant="flat">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-3">
                <h3 className="text-lg font-semibold">Outils & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Chip key={skill} color="warning" variant="flat">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Valeurs */}
        <div className="flex flex-col gap-6">
          <h2 className={title({ size: "sm" })}>Mes valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardBody className="gap-2">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-default-600">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
