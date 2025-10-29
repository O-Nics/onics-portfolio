"use client";
import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import Fade from "@/components/animation/fade";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/useTranslations";

export default function Example() {
  const { t } = useTranslations();

  const rightLink: LinkNavigation = {
    name: t.home.rightLink,
    href: "/a-propos",
  };

  return (
    <>
      <PersonJsonLd
        jobTitle={t.home.subtitle}
        name={t.home.title}
        sameAs={[
          "https://github.com/O-Nicks",
          "https://www.linkedin.com/in/nicolas-planche/",
        ]}
        url="https://nicolas-planche.fr"
      />
      <WebsiteJsonLd
        description={siteConfig.description}
        name={siteConfig.name}
        url="https://nicolas-planche.fr"
      />
      <DefaultLayout
        description={t.home.description1}
        keywords="développeur full-stack, développeur mobile, Flutter, Laravel, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, portfolio développeur"
        title={t.common.home}
        type="profile"
        url="https://nicolas-planche.fr"
      >
        <main>
          <FadeUp>
            <h1>{t.home.title}</h1>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="subtitle">{t.home.subtitle}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="corp !pt-6">
              {t.home.description1}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="corp">
              {t.home.description2}
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
