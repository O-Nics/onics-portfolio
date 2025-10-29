import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
import { Experience, LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { getAllExperiences } from "@/lib/experiences";
import { TimelineExperience } from "@/features/timeline";
import Fade from "@/components/animation/fade";
import {useTranslations} from "@/hooks/useTranslations";

export default function AProposPage() {
  const { t, locale } = useTranslations();

  const leftLink: LinkNavigation = {
    name: t.experiences.leftLink,
    href: "/competences",
  };
  const rightLink: LinkNavigation = {
    name: t.experiences.rightLink,
    href: "/education",
  };

  const [expericences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(getAllExperiences(locale));
  }, [locale]);

  return (
    <DefaultLayout
      description="Mon parcours professionnel en tant que développeur full-stack et mobile"
      keywords="expériences professionnelles, parcours développeur, développeur full-stack, freelance, Da Auto Sport, projets professionnels"
      title="Expériences"
      type="profile"
      url="https://nicolas-planche.fr/xp"
    >
      <main className="">
        <FadeUp>
          <h1>{t.experiences.title}</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">
            {t.experiences.subtitle}
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp !pt-6">
            {t.experiences.description1}
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp">
            {t.experiences.description2}
          </p>
        </FadeUp>

        {expericences.length > 0 && (
          <div className="mt-10">
            {expericences.map((experience, index) => (
              <TimelineExperience
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        )}
        <Fade delay={0.45}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </Fade>
      </main>
    </DefaultLayout>
  );
}
