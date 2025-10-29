import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { classNames } from "./utils";

import FadeUp from "@/components/animation/fade-up";

interface NavigationLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface Props {
  links: NavigationLink[];
  shouldAnimate: boolean;
}

export const NavigationLinks: React.FC<Props> = ({ links, shouldAnimate }) => {
  const pathname = usePathname();

  return (
    <ul className="-mx-2 space-y-1">
      {links.map((nav, index) => (
        <FadeUp
          key={nav.name}
          delay={index * 0.05}
          shouldAnimate={shouldAnimate}
        >
          <li key={nav.name}>
            <Link
              aria-label={nav.name}
              className="w-full cursor-pointer"
              href={nav.href}
              title={nav.name}
            >
              <div
                className={classNames(
                  pathname === nav.href
                    ? "dark:bg-primary/4 bg-white border-primary text-primary hover:bg-gray-100 dark:hover:bg-primary/2"
                    : "text-gray-700 dark:text-gray-400 transition dark:hover:bg-primary/2 hover:bg-gray-100 dark:hover:text-primary b",
                  "group flex gap-x-3 rounded-md p-2 text-sm/6 font-bold w-full justify-start",
                )}
              >
                <nav.icon
                  aria-hidden={true}
                  className={classNames(
                    pathname === nav.href
                      ? "text-primary"
                      : "text-gray-400 transition dark:group-hover:text-primary",
                    "size-6 shrink-0",
                  )}
                />
                {nav.name}
              </div>
            </Link>
          </li>
        </FadeUp>
      ))}
    </ul>
  );
};
