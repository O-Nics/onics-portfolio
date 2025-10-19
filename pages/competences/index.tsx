import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { NavigationInPage } from "@/components/navigationInPage";

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
          name: "Google Cloud",
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
      <main >

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
              <h2 className="mt-5 mb-4 text-lg font-bold whitespace-nowrap">
                {skillCategory.title}
              </h2>
              <div
                className="mt-5 mb-4 ml-3 border-t w-full border-dashed border-gray-100
dark:border-white/5 dark:bg-black/10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, index) => (
                <FadeUp key={skill.name} delay={0.4 + index * 0.05}>
                  <div key={skill.name} className="w-fit shadow-red-50">
                    <div
                      className="flex-row flex items-center align-middle rounded-lg dark:bg-primary/5 bg-gray-50 px-3 hover:bg-gray-100 dark:hover:bg-primary/20 transition py-2 ">
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          alt={skill.name}
                          className={`w-6 h-6 ${skill.name == "Next.js" || skill.name === "GitHub" ? "dark:invert" : ""}`}
                          height={64}
                          src={skill.imageUrl}
                          width={64}
                        />
                        <p className="text-sm">{skill.name}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        ))}

        <FadeUp delay={0.6}>
          <NavigationInPage left={leftLink} right={rightLink}/>
        </FadeUp>
      </main>
    </DefaultLayout>
  );
}
