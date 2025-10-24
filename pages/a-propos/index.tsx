import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/components/navigationInPage";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";

export default function AProposPage() {
  const leftLink: LinkNavigation = {
    name: "Introduction",
    href: "/",
  };
  const rightLink: LinkNavigation = {
    name: "Projets",
    href: "/projets",
  };

  return (
    <DefaultLayout>
      <main className="">
        <FadeUp>
          <h1>À propos de moi</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">Créer, apprendre, itérer</p>
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
        <FadeUp delay={0.25}>
          <p className="corp">
            Curieux et rigoureux, je m’attache à appliquer des pratiques de
            clean code, d’optimisation, d’accessibilité et de DevOps pour
            concevoir des solutions durables.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="corp">
            Ce qui me motive avant tout ? La collaboration. J’aime créer,
            apprendre et construire avec des équipes passionnées pour donner vie
            à des projets qui ont un vrai impact.
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <NavigationInPage left={leftLink} right={rightLink} />
        </FadeUp>
      </main>
    </DefaultLayout>
  );
}
