"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { GithubIcon, SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import FadeHorizontal from "@/components/animation/fade-horizontal";
import ActualTime from "@/components/actual-time";
import LaunchMusic from "@/components/launch-music";
import { useFirstVisitAnimation } from "@/hooks/useFirstVisitAnimation";
import { useSearch } from "@/contexts/SearchContext";

import { DesktopSidebar } from "./desktop-sidebar";
import { MobileDrawer } from "./mobile-drawer";

export const Navbar = () => {
  const { openSearch } = useSearch();
  const { shouldAnimate } = useFirstVisitAnimation("nav-animated");

  const searchInput = (
    <Input
      readOnly
      aria-label="Rechercher"
      classNames={{
        base: "px-0 cursor-pointer",
        mainWrapper: "!px-0",
        inputWrapper:
          "!py-0 !h-8 min-h-0 pl-2 pr-1 dark:!bg-primary/3 border-0 dark:hover:!bg-primary/5 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/4 cursor-pointer",
        input: "text-sm cursor-pointer",
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block dark:bg-primary/6 bg-white !shadow-none px-1 !py-0.5"
          keys={["command"]}
        >
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Rechercher..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onClick={openSearch}
    />
  );

  return (
    <HeroUINavbar
      classNames={{
        base: " bg-white/70 dark:bg-primary/1 border-dashed md:border-gray-200 dark:md:border-primary/10 border-primary backdrop-saturate-100",
        wrapper: "md:!px-0",
      }}
      isBordered={true}
      maxWidth="full"
      position="sticky"
    >
      <div className="container-wrapper py-0">
        {/* Desktop Sidebar */}
        <DesktopSidebar shouldAnimate={shouldAnimate} />

        {/* Navbar */}
        <div className="items-center flex md:border-l md:border-r h-[64px] md:px-6 dark:border-primary/10 border-dashed border-gray-200">
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand className="gap-6 max-w-fit">
              <div>
                <div className="flex items-center">
                  {/* Mobile Drawer */}
                  <MobileDrawer shouldAnimate={shouldAnimate} />

                  {/* Desktop Logo */}
                  <FadeHorizontal
                    className="hidden md:flex"
                    shouldAnimate={shouldAnimate}
                  >
                    <Link className="flex justify-start items-center" href="/">
                      <Image
                        priority
                        alt="Nicolas Planche"
                        className="rounded-full"
                        height={45}
                        quality={90}
                        src="/61987116.jpeg"
                        width={45}
                      />
                      <p className="pl-2 font-bold text-inherit">
                        Nicolas Planche
                      </p>
                    </Link>
                  </FadeHorizontal>
                </div>
              </div>
            </NavbarBrand>
          </NavbarContent>

          {/* Desktop Actions */}
          <NavbarContent
            className="hidden md:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <FadeHorizontal delay={0.05} shouldAnimate={shouldAnimate}>
              <NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
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

          {/* Mobile Actions */}
          <NavbarContent
            className="md:hidden basis-1 pl-4 gap-0"
            justify="end"
          >
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
              delay={0.2}
              className="items-center flex"
              shouldAnimate={shouldAnimate}
            >
              <ThemeSwitch />
            </FadeHorizontal>
            <FadeHorizontal delay={0.25} shouldAnimate={shouldAnimate} />
          </NavbarContent>
        </div>
      </div>
    </HeroUINavbar>
  );
};
