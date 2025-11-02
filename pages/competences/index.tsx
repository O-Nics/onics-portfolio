import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";

import DefaultLayout from "@/layouts/default";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { NavigationInPage } from "@/features/navigation";
import { getAllSkills } from "@/lib/skills";
import Fade from "@/components/animation/fade";
import { useTranslations } from "@/hooks/useTranslations";
import { getPageMeta } from "@/lib/meta";
import { siteConfig } from "@/config";

export default function CompetencesPage({}) {
  const { t, locale } = useTranslations();
  const meta = getPageMeta("skills", locale);
  const skills = getAllSkills(locale);

  const leftLink: LinkNavigation = {
    name: t.skills.leftLink,
    href: "/projets",
  };
  const rightLink: LinkNavigation = {
    name: t.skills.rightLink,
    href: "/xp",
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
          <h1>{t.skills.title}</h1>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="subtitle">{t.skills.subtitle}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="corp !pt-6 ">{t.skills.description}</p>
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
                        {skill.imageUrl && (
                          <Image
                            alt={skill.name}
                            className={`w-6 h-6 ${skill.name == "Next.js" || skill.name === "GitHub" ? "dark:invert" : ""}`}
                            height={64}
                            src={skill.imageUrl}
                            width={64}
                          />
                        )}
                        <p className="text-sm">{skill.name}</p>
                        {skill.isFavorite && (
                          <StarIcon className="w-4" color="yellow" />
                        )}
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
