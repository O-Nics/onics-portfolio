import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/features/navigation";
import { LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import Fade from "@/components/animation/fade";
import { useTranslations } from "@/hooks/useTranslations";
import { getPageMeta } from "@/lib/meta";
import { siteConfig } from "@/config";

export default function AProposPage() {
  const { t, locale } = useTranslations();
  const meta = getPageMeta("about", locale);

  const leftLink: LinkNavigation = {
    name: t.about.leftLink,
    href: "/",
  };
  const rightLink: LinkNavigation = {
    name: t.about.rightLink,
    href: "/projets",
  };

  return (
    <DefaultLayout
      description={meta.description}
      keywords={meta.keywords}
      title={meta.title}
      type={meta.type}
      url={`${siteConfig.canonicalUrl}/${meta.url}`}
    >
      <main className="">
        <FadeUp>
          <h1>{t.about.title}</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">{t.about.subtitle}</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp !pt-6">{t.about.description1}</p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="corp">{t.about.description2}</p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="corp">{t.about.description3}</p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="corp">{t.about.description4}</p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <p className="corp">{t.about.description5}</p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="corp">{t.about.description6}</p>
        </FadeUp>
        <Fade delay={0.45}>
          <NavigationInPage leftLink={leftLink} rightLink={rightLink} />
        </Fade>
      </main>
    </DefaultLayout>
  );
}
