import React from "react";
import Link from "next/link";
import { NavbarContent } from "@heroui/navbar";

import { GithubIcon, SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/features/theme";
import { siteConfig } from "@/config/site";
import FadeHorizontal from "@/components/animation/fade-horizontal";
import { LaunchMusic } from "@/features/music";
import { useSearch } from "@/features/search";

interface MobileActionsProps {
  shouldAnimate: boolean;
}

export const MobileActions: React.FC<MobileActionsProps> = ({
  shouldAnimate,
}) => {
  const { openSearch } = useSearch();

  return (
    <NavbarContent className="md:hidden basis-1 pl-4 gap-0" justify="end">
      <FadeHorizontal
        className="md:hidden flex h-[40px] mr-8 w-[24px]"
        delay={0.05}
        shouldAnimate={shouldAnimate}
      >
        <LaunchMusic size={40} />
      </FadeHorizontal>

      <FadeHorizontal
        className="md:hidden flex mr-7 "
        delay={0.1}
        shouldAnimate={shouldAnimate}
      >
        <div className="icon">
          <SearchIcon
            className="text-gray-400  icon"
            size={17}
            onClick={openSearch}
          />
        </div>
      </FadeHorizontal>

      <FadeHorizontal
        className="mr-4"
        delay={0.15}
        shouldAnimate={shouldAnimate}
      >
        <Link href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" size={21} />
        </Link>
      </FadeHorizontal>

      <FadeHorizontal
        className="items-center flex"
        delay={0.2}
        shouldAnimate={shouldAnimate}
      >
        <ThemeSwitch />
      </FadeHorizontal>

      <FadeHorizontal delay={0.25} shouldAnimate={shouldAnimate} />
    </NavbarContent>
  );
};
