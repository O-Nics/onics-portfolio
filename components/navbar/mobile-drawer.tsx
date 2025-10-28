import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@heroui/shared-icons";
import { NavbarItem } from "@heroui/navbar";

import { NavigationLinks } from "./navigation-links";
import { QuickLinks } from "./quick-links";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FadeHorizontal from "@/components/animation/fade-horizontal";
import ActualTime from "@/components/navbar/actual-time";
import { ToggleIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

interface Props {
  shouldAnimate: boolean;
}

export const MobileDrawer: React.FC<Props> = ({ shouldAnimate }) => {
  return (
    <div className="h-[64px] md:hidden flex">
      <Drawer>
        <DrawerTrigger>
          <ToggleIcon />
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader className="flex flex-row justify-between border border-transparent border-dashed border-b-primary">
            <Link className="flex justify-start items-center" href="/">
              <FadeHorizontal className="pl-2" shouldAnimate={shouldAnimate}>
                <Image
                  priority
                  alt="Nicolas Planche"
                  className="rounded-full"
                  height={45}
                  quality={90}
                  src="/61987116.jpeg"
                  title="Nicolas Planche"
                  width={45}
                />
              </FadeHorizontal>
              <FadeHorizontal
                className="pl-2"
                delay={0.05}
                shouldAnimate={shouldAnimate}
              >
                <ActualTime />
              </FadeHorizontal>
            </Link>

            <NavbarItem className="flex items-center">
              <FadeHorizontal
                className=""
                delay={0.2}
                shouldAnimate={shouldAnimate}
              >
                <button className="items-center flex">
                  <DrawerClose asChild={true}>
                    <CloseIcon className="h-5 w-5 dark:text-gray-400 text-gray-600 cursor-pointer" />
                  </DrawerClose>
                </button>
              </FadeHorizontal>
            </NavbarItem>
          </DrawerHeader>
          <ul className="flex flex-1 w- flex-col gap-y-7 pt-4 px-6 pb-6 overflow-y-scroll">
            <li>
              <NavigationLinks
                links={siteConfig.sidebarNavigation}
                shouldAnimate={shouldAnimate}
              />
            </li>
            <li>
              <QuickLinks
                baseDelay={siteConfig.sidebarNavigation.length * 0.05}
                links={siteConfig.quickLinks}
                shouldAnimate={shouldAnimate}
              />
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
