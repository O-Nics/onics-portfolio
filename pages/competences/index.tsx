import Image from "next/image";
import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { LinkNavigation, Skill } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { NavigationInPage } from "@/features/navigation";
import { getAllSkills } from "@/lib/skills";
import Fade from "@/components/animation/fade";

export default function CompetencesPage({}) {
  const leftLink: LinkNavigation = {
    name: "Projets",
    href: "/projets",
  };
  const rightLink: LinkNavigation = {
    name: "Éxperiences",
    href: "/xp",
  };

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(getAllSkills());
  }, []);

  return (
    <DefaultLayout
      title="Compétences"
      description="Mes compétences techniques en développement : Flutter, Laravel, React, Vue.js, Next.js, Nuxt.js, TypeScript, Tailwind CSS, DevOps et bien plus."
      url="https://nicolas-planche.fr/competences"
      type="website"
      keywords="compétences développeur, Flutter, Laravel, React, Vue.js, Next.js, Nuxt.js, TypeScript, JavaScript, Tailwind CSS, DevOps, Docker, Git"
    >
      <main>
        <FadeUp>
          <h1>Compétences</h1>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="subtitle">
            Apprendre par la pratique, maîtriser par la rigueur.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="corp !pt-6 ">
            J’ai appris en codant, en testant et en déboguant, jusqu’à faire du
            développement bien plus qu’un métier : une manière de penser. En
            tant que développeur full-stack, je conçois des applications web et
            mobiles performantes, maintenables et scalables, en cherchant
            toujours à repousser mes limites et à enrichir ma stack au fil des
            projets.{" "}
          </p>
        </FadeUp>

        {skills.map((skillCategory, index) => (
          <FadeUp key={skillCategory.title} delay={0.15 + index * 0.05}>
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
                <FadeUp key={skill.name} delay={0.2 + index * 0.02}>
                  <div key={skill.name} className="w-fit shadow-red-50">
                    <div className="flex-row flex items-center align-middle rounded-lg dark:bg-white/3 bg-gray-100 px-3 hover:bg-gray-100 dark:hover:bg-primary/10 hover:bg-primary/10 transition py-2 ">
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

        <Fade delay={0.5}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </Fade>
      </main>
    </DefaultLayout>
  );
}
