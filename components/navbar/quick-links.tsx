import React from "react";
import Link from "next/link";
import { Button } from "@heroui/button";

import FadeUp from "@/components/animation/fade-up";
import { ArrowHorizontalLineIcon } from "@/components/icons";

interface QuickLink {
  name: string;
  href: string;
  isExternal?: boolean;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface Props {
  title: string;
  links: QuickLink[];
  shouldAnimate: boolean;
  baseDelay?: number;
}

export const QuickLinks: React.FC<Props> = ({
  title,
  links,
  shouldAnimate,
  baseDelay = 0,
}) => {
  return (
    <>
      <FadeUp delay={baseDelay} shouldAnimate={shouldAnimate}>
        <div className="text-xs/6 font-bold text-gray-400">{title}</div>
      </FadeUp>
      <ul className="-mx-2 mt-2 space-y-1">
        {links.map((quickLink, index) => (
          <FadeUp
            key={quickLink.name}
            delay={baseDelay + (index + 1) * 0.05}
            shouldAnimate={shouldAnimate}
          >
            <li key={quickLink.name}>
              <Link
                aria-label={quickLink.name}
                href={quickLink.href}
                target="_blank"
                title={quickLink.name}
              >
                <Button
                  className="group flex rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 dark:text-gray-400 dark:hover:!bg-primary/2 hover:!bg-gray-50"
                  href={quickLink.href}
                  variant="light"
                >
                  <div className="flex justify-between w-full">
                    <span className="flex gap-x-3 dark:group-hover:text-primary">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg text-[0.625rem] font-medium text-gray-400 dark:group-hover:text-primary">
                        <quickLink.icon className="size-5" />
                      </span>
                      <span className="truncate">{quickLink.name}</span>
                    </span>
                    {quickLink.isExternal && (
                      <span>
                        <ArrowHorizontalLineIcon className="size-5 rotate-320 transition text-transparent dark:group-hover:text-primary group-hover:text-gray-400" />
                      </span>
                    )}
                  </div>
                </Button>
              </Link>
            </li>
          </FadeUp>
        ))}
      </ul>
    </>
  );
};
