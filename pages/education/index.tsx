import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { Education, LinkNavigation } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { TimelineEducation } from "@/features/timeline";
import { getAllFormation } from "@/lib/formations";
import { NavigationInPage } from "@/features/navigation";
import Fade from "@/components/animation/fade";
import { useTranslations } from "@/hooks/useTranslations";
import { getPageMeta } from "@/lib/meta";
import { siteConfig } from "@/config";

export default function AboutPage() {
  const { t, locale } = useTranslations();
  const meta = getPageMeta("education", locale);

  const leftLink: LinkNavigation = {
    name: t.education.leftLink,
    href: "/xp",
  };
  const rightLink: LinkNavigation = {
    name: t.education.rightLink,
    href: "/contact",
  };

  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    setEducations(getAllFormation(locale));
  }, [locale]);

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
          <h1>{t.education.title}</h1>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="subtitle">{t.education.subtitle}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="corp !pt-6">{t.education.description1}</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="corp ">{t.education.description2}</p>
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
