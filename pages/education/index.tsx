import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/components/navigationInPage";
import {Education, LinkNavigation} from "@/types";
import FadeUp from "@/components/animation/fade-up";
import {HorizontalTimeline} from "@/components/horizontal-timeline";
import {useEffect, useState} from "react";
import {getAllFormation} from "@/lib/formations";

export default function AProposPage() {
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
    <DefaultLayout>
      <main className="">
        <FadeUp>
          <h1>Formations</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">Lorum Ipsum</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp !pt-6">
            Je suis le développeur full-stack passionné par la création
            d’expériences numériques élégantes, performantes et utiles.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp">
            Mon expertise couvre le mobile avec Flutter, le back-end avec
            Laravel, et le web moderne avec Nuxt, Next.js et React. J’aime
            transformer des idées complexes en produits clairs, scalables et
            centrés sur l’utilisateur.
          </p>
        </FadeUp>
        {educations.length > 0 &&(
          <>
          {educations.map((education, index) => (
            <HorizontalTimeline education={education} key={index} />
            ))}
          </>
        )}
      </main>
    </DefaultLayout>
  );
}
