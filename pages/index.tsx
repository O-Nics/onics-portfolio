"use client";
import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import Fade from "@/components/animation/fade";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

export default function Example() {
  const rightLink: LinkNavigation = {
    name: "À propos de moi",
    href: "/a-propos",
  };

  return (
    <>
      <PersonJsonLd
        name="Nicolas Planche"
        jobTitle="Développeur Full-Stack & Mobile"
        url="https://nicolas-planche.fr"
        sameAs={[
          "https://github.com/O-Nicks",
          "https://www.linkedin.com/in/nicolas-planche/",
        ]}
      />
      <WebsiteJsonLd
        name={siteConfig.name}
        description={siteConfig.description}
        url="https://nicolas-planche.fr"
      />
      <DefaultLayout
        title="Accueil"
        description="Développeur Full-Stack & Mobile passionné par la tech. Je conçois des applications mobiles, web et des back-ends solides avec Flutter, Laravel, React, Vue.js et Tailwind CSS."
        url="https://nicolas-planche.fr"
        type="profile"
        keywords="développeur full-stack, développeur mobile, Flutter, Laravel, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, portfolio développeur"
      >
        <main>
          <FadeUp>
            <h1>Nicolas Planche</h1>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="subtitle">Développeur Full-Stack & Mobile</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="corp !pt-6">
              Amoureux de la tech, je conçois des applications mobiles et web
              ainsi que des back-ends solides.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="corp">
              J’utilise des technologies modernes tel que Flutter, Laravel,
              Vue/Nuxt, Next/React, Tailwind CSS et des pratiques DevOps pour
              livrer des solutions logicielles complètes, orientées utilisateur
              et de haute qualité.
            </p>
          </FadeUp>

          <Fade delay={0.2}>
            <NavigationInPage rightLink={rightLink} />
          </Fade>
        </main>
      </DefaultLayout>
    </>
  );
}
