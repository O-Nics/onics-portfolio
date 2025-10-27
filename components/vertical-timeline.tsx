import { SchoolIcon } from "@/components/icons";
import { Education } from "@/types";
import FadeUp from "@/components/animation/fade-up";

export const VerticalTimeline = ({
  education,
  index,
}: {
  education: Education;
  index: number;
}) => {
  return (
    <div id={`${education.id}`}>
      <FadeUp delay={0.05 * index + 0.2}>
        <div className="relative ml-4 lg:mt-0 left-0 -top-0 h-full border-l border-primary pl- overflow-visible">
          <div className={`absolute   mb-`}>
          <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-primary/10 bg-primary">
            <SchoolIcon className="dark:text-gray-900 text-white" size={18} />
          </span>
          </div>
          <div className="mb-0 ml-10">
            <FadeUp delay={index * 0.05 + 0.2}>
              <h2 className="font-extrabold ">
                {education.name}
                <span className="text-sm font-semibold text-gray-400">
                 • Lyon
              </span>
              </h2>
            </FadeUp>
            <FadeUp delay={index * 0.05 + 0.1 + 0.2}>
              <p className="dark:text-gray-50/50 text-gray-700/50 text-sm font-semibold mb-1">
                {education.startDate} - {education.endDate}
              </p>
            </FadeUp>
            <FadeUp delay={index * 0.05 + 0.15 + 0.2}>
              <p className="dark:text-gray-50/80 text-gray-800/80 corp !text-md  pb-10">
                {education.description}
              </p>
            </FadeUp>
          </div>
        </div>
      </FadeUp>

    </div>
  );
};
