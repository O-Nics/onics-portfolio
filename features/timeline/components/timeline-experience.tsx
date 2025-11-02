import { XpIcon } from "@/components/icons";
import { Experience } from "@/types";
import FadeUp from "@/components/animation/fade-up";
import { useTranslations } from "@/hooks/useTranslations";

export const VerticalTimelineExperience = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const { locale } = useTranslations();

  return (
    <div id={`${experience.id}`}>
      <FadeUp delay={0.05 * index + 0.2}>
        <div className="relative ml-4 lg:mt-0 left-0 -top-0 h-full border-l border-primary pl-0 overflow-visible">
          <div className={`absolute   mb-`}>
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-primary/10 bg-primary">
              <XpIcon className="dark:text-gray-900 text-white" size={18} />
            </span>
          </div>
          <div className="mb-0 ml-10">
            <FadeUp
              className="md:flex items-center justify-between"
              delay={index * 0.05 + 0.2}
            >
              {experience.latest && (
                <span className="inline-block md:hidden   bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">
                  {locale === "fr" ? "Actuel" : "Current"}
                </span>
              )}

              <div className="block">
                <p className="text-primary/70   text-sm font-bold mb-1">
                  {experience.society}
                </p>
                <h2 className="font-extrabold ">
                  {experience.title}
                  <span className="text-sm font-semibold text-gray-400">
                   • {experience.location}
                </span>
                </h2>
              </div>
              {experience.latest && (
                <span className="md:inline-block hidden ml-2  bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">
                  {locale === "fr" ? "Actuel" : "Current"}
                </span>
              )}
            </FadeUp>
            <FadeUp delay={index * 0.05 + 0.1 + 0.2}>
              <p className="dark:text-gray-50/50 text-gray-700/50 text-sm font-semibold mb-1">
                {experience.date}
              </p>
            </FadeUp>
            <FadeUp delay={index * 0.05 + 0.15 + 0.2}>
              <p className="dark:text-gray-50/80 text-gray-800/80 corp !text-md  pb-10">
                {experience.description}
              </p>
            </FadeUp>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};
