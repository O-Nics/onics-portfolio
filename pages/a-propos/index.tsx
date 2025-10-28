import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
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
            Développeur full-stack passionné, j’aime donner vie à des produits
            qui allient esthétique, performance et sens.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp">
            Mon approche repose sur la rigueur technique, la curiosité et une
            volonté constante d’apprendre et de progresser.
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="corp">
            Du front au back, j’accorde une attention particulière à chaque
            détail : concevoir une interface fluide, structurer une architecture
            propre, optimiser les performances ou garantir la maintenabilité du
            code.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="corp">
            Mon objectif est simple : créer des applications utiles, agréables à
            utiliser et faciles à faire évoluer.
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <p className="corp">
            J’aime collaborer avec des équipes motivées, confronter les idées et
            trouver les solutions les plus adaptées aux besoins réels des
            utilisateurs.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="corp">
            Chaque projet est pour moi une nouvelle opportunité d’expérimenter,
            d’améliorer mes pratiques et de repousser mes limites pour livrer
            des produits fiables et durables.{" "}
          </p>
        </FadeUp>
        <FadeUp delay={0.45}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </FadeUp>
      </main>
    </DefaultLayout>
  );
}
