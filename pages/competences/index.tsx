import DefaultLayout from "@/layouts/default";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { NavigationInPage } from "@/components/navigationInPage";
import {Card, CardBody} from "@heroui/card";

export default function CompetencesPage({}) {
  const leftLink: LinkNavigation = {
    name: "Projets",
    href: "/projets",
  };
  const rightLink: LinkNavigation = {
    name: "Éxperiences",
    href: "/xp",
  };

  const skills = [
    {
      title: "Front-end",
      items: [
        {
          name: "Flutter",
          isFavorite: true,
          imageUrl: "/images/Flutter.png",
        },
        {
          name: "Nuxt.js",
          isFavorite: false,
          imageUrl: "/images/Nuxt.js.png",
        },
        {
          name: "Next.js",
          isFavorite: true,
          imageUrl: "/images/Next.js.png",
        },
        {
          name: "Vue.js",
          isFavorite: false,
          imageUrl: "/images/Vue.js.png",
        },
        {
          name: "React",
          isFavorite: false,
          imageUrl: "/images/React.png",
        },
        {
          name: "Astro",
          isFavorite: false,
          imageUrl: "/images/Astro.png",
        },
        {
          name: "TypeScript",
          isFavorite: true,
          imageUrl: "/images/TypeScript.png",
        },
        {
          name: "JavaScript",
          isFavorite: false,
          imageUrl: "/images/JavaScript.png",
        },
        {
          name: "Tailwind CSS",
          isFavorite: true,
          imageUrl: "/images/TailwindCSS.png",
        },
        {
          name: "Bootstrap",
          isFavorite: false,
          imageUrl: "/images/Bootstrap.png",
        },
        {
          name: "Figma",
          isFavorite: false,
          imageUrl: "/images/Figma.png",
        },
      ],
    },
    {
      title: "Back-end",
      items: [
        {
          name: "Laravel",
          isFavorite: true,
          imageUrl: "/images/Laravel.png",
        },
        {
          name: "Node.js",
          isFavorite: false,
          imageUrl: "/images/Node.js.png",
        },
        {
          name: "PHP",
          isFavorite: false,
          imageUrl: "/images/PHP.png",
        },
        {
          name: "Javascript (Node.js)",
          isFavorite: false,
          imageUrl: "/images/Javascript.png",
        },
        {
          name: "MySQL",
          isFavorite: false,
          imageUrl: "/images/MySQL.png",
        },
        {
          name: "PostgreSQL",
          isFavorite: false,
          imageUrl: "/images/PostgresSQL.png",
        },
        {
          name: "MongoDB",
          isFavorite: false,
          imageUrl: "/images/MongoDB.png",
        },
      ],
    },
    {
      title: "Outils",
      items: [
        {
          name: "Git",
          isFavorite: true,
          imageUrl: "/images/Git.png",
        },
        {
          name: "GitHub",
          isFavorite: true,
          imageUrl: "/images/GitHub.png",
        },

        {
          name: "VsCode",
          isFavorite: false,
          imageUrl: "/images/VScode.png",
        },
        {
          name: "JetBrains",
          isFavorite: true,
          imageUrl: "/images/JetBrains.png",
        },
      ],
    },
    {
      title: "Notions de base en :",
      items: [
        {
          name: "Java",
          isFavorite: false,
          imageUrl: "/images/Java.png",
        },
        {
          name: "C++",
          isFavorite: false,
          imageUrl: "/images/Cpp.png",
        },
        {
          name: "C#",
          isFavorite: false,
          imageUrl: "/images/Csharp.png",
        },
        {
          name: "Firebase",
          isFavorite: true,
          imageUrl: "/images/Firebase.png",
        },
        {
          name: "Google Cloud Console",
          isFavorite: true,
          imageUrl: "/images/Gcc.png",
        },
        {
          name: "Nest.Js",
          isFavorite: true,
          imageUrl: "/images/Nest.js.png",
        },
      ],
    },
  ];

  return (
    <DefaultLayout>
      <FadeUp>
        <h1>Compétences</h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="subtitle">Appris en codant et en debuggant</p>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="text-lg pt-10 ">
          En tant que développeur full-stack, je conçois des applications web et
          mobiles pensées pour être performantes, maintenables et scalables.
          Toujours en quête de nouvelles idées, j’enrichis ma stack au fil des
          projets et des découvertes.{" "}
        </p>
      </FadeUp>

      {skills.map((skillCategory, index) => (
        <FadeUp key={skillCategory.title} delay={0.3 + index * 0.1}>
          <div className="flex align-middle items-center">
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase break-keep ">
              {skillCategory.title}
            </h2>
            <div className="mt-10 mb-4 ml-3 border-t w-full border-dashed border-gray-100
dark:border-white/5 dark:bg-black/10"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillCategory.items.map((skill) => (
              <Card key={skill.name}>
                <CardBody>
                  <div
                    key={skill.name}
                    className="flex flex-row items-center space-y-2"
                  >
                    <img
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                      src={skill.imageUrl}
                    />
                    <p className="text-center">{skill.name}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </FadeUp>
      ))}

      <FadeUp delay={0.6}>
        <NavigationInPage left={leftLink} right={rightLink}/>
      </FadeUp>
    </DefaultLayout>
  );
}
