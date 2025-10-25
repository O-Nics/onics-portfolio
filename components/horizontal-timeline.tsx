import { LocationIcon, SchoolIcon } from "@/components/icons";
import { Education } from "@/types";

export const HorizontalTimeline = ({ education }: { education: Education }) => {
  return (
    <div className="relative pl-4 pb-5">
      <div
        className={`absolute left-0 -top-0 h-full border-l border-primary ml-4`}
      >
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-primary/10 dark:bg-primary">
          <SchoolIcon className="dark:text-gray-900" size={18} />
        </span>
      </div>
      <div className="mb-0 mt-5 ml-10">
        <span className="flex items-center text-secondary-500 text-sm font-semibold mb-2">
          {" "}
          <LocationIcon size={18} />   {education.location}
        </span>
        <h2 className="font-extrabold ">
          {education.name}
          <span className="text-sm font-semibold text-gray-400">• Lyon</span>
        </h2>
        <p className="text-gray-50/50 text-sm font-semibold mb-5">
          {education.startDate} - {education.endDate}
        </p>
        <p className="text-gray-50/80 corp mb-4">{education.description}</p>
      </div>
    </div>
  );
};
