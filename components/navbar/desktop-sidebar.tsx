import React from "react";

import { NavigationLinks } from "./navigation-links";
import { QuickLinks } from "./quick-links";

import {
  getNavigationLinks,
  getNavigationQuickLinks,
} from "@/config/navigation";
import { useTranslations } from "@/hooks/useTranslations";

interface Props {
  shouldAnimate: boolean;
}

export const DesktopSidebar: React.FC<Props> = ({ shouldAnimate }) => {
  const { t } = useTranslations();
  const navigationLinks = getNavigationLinks(t);
  const navigationQuickLinks = getNavigationQuickLinks(t);

  return (
    <div className="hidden mt-[65px] py-0 md:fixed md:inset-y-0 md:z-30 md:flex md:w-72 md:flex-col">
      <div className="bg-white dark:bg-primary/1 dark:border-primary/10 border-r border-l border-dashed border-gray-200">
        <div className="flex grow flex-col gap-y-5 h-[calc(100vh-80px)] mt-3 pt-4 px-4 pb-4">
          <nav className="flex flex-1 flex-col overflow-y-scroll px-2">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <NavigationLinks
                  links={navigationLinks}
                  shouldAnimate={shouldAnimate}
                />
              </li>
              <li>
                <QuickLinks
                  baseDelay={navigationLinks.length * 0.05}
                  links={navigationQuickLinks}
                  shouldAnimate={shouldAnimate}
                  title={t.nav.quickLinks}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
