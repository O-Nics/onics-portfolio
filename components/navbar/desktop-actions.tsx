import React from "react";
import Link from "next/link";
import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";

import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/features/theme";
import { siteConfig } from "@/config/site";
import FadeHorizontal from "@/components/animation/fade-horizontal";
import ActualTime from "@/components/navbar/actual-time";
import { LaunchMusic } from "@/features/music";

import { SearchInput } from "./search-input";

interface DesktopActionsProps {
  shouldAnimate: boolean;
}

export const DesktopActions: React.FC<DesktopActionsProps> = ({
  shouldAnimate,
}) => {
  return (
    <NavbarContent
      className="hidden md:flex basis-1/5 sm:basis-full"
      justify="end"
    >
      <FadeHorizontal delay={0.05} shouldAnimate={shouldAnimate}>
        <NavbarItem className="hidden md:flex">
          <SearchInput />
        </NavbarItem>
      </FadeHorizontal>

      <FadeHorizontal delay={0.1} shouldAnimate={shouldAnimate}>
        <ActualTime />
      </FadeHorizontal>

      <NavbarItem className="hidden sm:flex items-center">
        <FadeHorizontal
          delay={0.15}
          className="items-center flex"
          shouldAnimate={shouldAnimate}
        >
          <LaunchMusic />
        </FadeHorizontal>

        <FadeHorizontal
          className="items-center flex"
          delay={0.2}
          shouldAnimate={shouldAnimate}
        >
          <Link
            className="items-center flex"
            href={siteConfig.links.github}
            title="GitHub"
          >
            <Button
              isIconOnly
              aria-label="GitHub"
              className="icon-nav rounded-full"
              variant="light"
            >
              <GithubIcon
                className="icon text-default-500 hover:text-black dark:hover:text-white"
                size={44}
              />
            </Button>
          </Link>
        </FadeHorizontal>

        <FadeHorizontal
          delay={0.25}
          className="items-center flex"
          shouldAnimate={shouldAnimate}
        >
          <ThemeSwitch />
        </FadeHorizontal>
      </NavbarItem>
    </NavbarContent>
  );
};
