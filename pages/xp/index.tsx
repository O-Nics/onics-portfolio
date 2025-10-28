import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
import { Experience, LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { getAllExperiences } from "@/lib/experiences";
import { TimelineExperience } from "@/features/timeline";

export default function AProposPage() {
  const leftLink: LinkNavigation = {
    name: "Compétences",
    href: "/compétences",
  };
  const rightLink: LinkNavigation = {
    name: "Formations",
    href: "/education",
  };

  const [expericences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(getAllExperiences());
  }, []);

  return (
    <DefaultLayout>
      <main className="">
        <FadeUp>
          <h1>Éxperience</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">
            On a besoin d’expérience pour décrocher le job… mais c’est le job
            qui donne l’expérience !
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp !pt-6">
            Au fil de mon parcours de développeur full-stack, j’ai eu l’occasion
            de toucher à tout : des applications mobiles construites avec
            Flutter, aux API Laravel robustes, en passant par des interfaces web
            élégantes réalisées avec Nuxt, Next.js et React. Chaque projet a été
            un terrain d’apprentissage, entre créativité et rigueur, parfois à
            peaufiner une animation, parfois à traquer un bug qui n’apparaît
            qu’en production à 2 h du matin.{" "}
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp">
            Ces expériences m’ont appris bien plus que la théorie : écrire du
            code clair, collaborer efficacement et toujours chercher à
            comprendre avant de corriger. Ce que j’aime avant tout ? Transformer
            des idées complexes en produits performants, utiles et agréables à
            utiliser.{" "}
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
        <FadeUp delay={0.45}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </FadeUp>
      </main>
    </DefaultLayout>
  );
}
