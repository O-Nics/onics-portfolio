import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { Education, LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { TimelineEducation } from "@/features/timeline";
import { getAllFormation } from "@/lib/formations";
import { NavigationInPage } from "@/features/navigation";
import Fade from "@/components/animation/fade";

export default function AboutPage() {
  const leftLink: LinkNavigation = {
    name: "Éxpériences",
    href: "/xp",
  };
  const rightLink: LinkNavigation = {
    name: "Contactez-moi",
    href: "/contact",
  };

  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    setEducations(getAllFormation());
  }, []);

  return (
    <DefaultLayout
      description="Mon parcours académique et mes formations : Licence, Master, formation scientifique et apprentissage continu."
      keywords="formations développeur, parcours académique, licence informatique, mathématiques, Université Lyon 1, formation scientifique"
      title="Formations"
      type="profile"
      url="https://nicolas-planche.fr/education"
    >
      <main className="">
        <FadeUp>
          <h1>Formations</h1>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="subtitle">Apprendre, expérimenter, évoluer.</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="corp !pt-6">
            De ma formation scientifique au lycée jusqu’à la licence
            Mathématiques et Informatique à l’Université Lyon 1, j’ai construit
            une base solide en logique et en conception logicielle.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp ">
            Mon Master Développeur Full-Stack à MyDigitalSchool Lyon a marqué
            une étape clé : j’y ai consolidé mes compétences en développement
            web et mobile, en travaillant sur des projets concrets alliant
            performance, design et expérience utilisateur.
          </p>
        </FadeUp>
        {educations.length > 0 && (
          <div className="mt-10">
            {educations.map((education, index) => (
              <TimelineEducation
                key={index}
                education={education}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      <Fade delay={educations.length * 0.1 + 0.3}>
        <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
      </Fade>
    </DefaultLayout>
  );
}
