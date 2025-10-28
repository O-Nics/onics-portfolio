"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import Link from "next/link";
import React from "react";
import { Button } from "@heroui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CloseIcon } from "@heroui/shared-icons";

import {
  GithubIcon,
  SearchIcon,
  ArrowHorizontalLineIcon,
  ToggleIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import FadeUp from "@/components/animation/fade-up";
import { useFirstVisitAnimation } from "@/hooks/useFirstVisitAnimation";
import FadeHorizontal from "@/components/animation/fade-horizontal";
import ActualTime from "@/components/actual-time";
import LaunchMusic from "@/components/launch-music";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSearch } from "@/contexts/SearchContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  // const { shouldAnimate } = true;
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
        base: " bg-white/70 dark:bg-primary/1 border-dashed md:border-gray-200  dark:md:border-primary/10 border-primary backdrop-saturate-100",
        wrapper: "md:!px-0",
      }}
      isBordered={true}
      maxWidth="full"
      position="sticky"
    >
      <div className="container-wrapper py-0 ">
        {/*SideBar*/}
        <div className="hidden mt-[65px] py-0 md:fixed md:inset-y-0  md:z-30 md:flex md:w-72 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="bg-white dark:bg-primary/1 dark:border-primary/10 border-r border-l border-dashed border-gray-200">
            <div className="flex grow flex-col gap-y-5 h-[calc(100vh-80px)] mt-3 pt-4      px-4 pb-4 ">
              <nav className="flex flex-1 flex-col  overflow-y-scroll px-2">
                <ul className="flex flex-1 flex-col gap-y-7 ">
                  <li>
                    <ul className=" space-y-1 ">
                      {siteConfig.sidebarNavigation.map((nav, index) => (
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
                                  "group flex gap-x-3 rounded-md p-2 text-sm/6 font-bold w-full justify-start ",
                                )}
                              >
                                <nav.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    pathname === nav.href
                                      ? "text-primary "
                                      : "text-gray-400 transition dark:group-hover:text-primary",
                                    "size-6 shrink-0  ",
                                  )}
                                />
                                {nav.name}
                              </div>
                            </Link>
                          </li>
                        </FadeUp>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <FadeUp
                      delay={siteConfig.sidebarNavigation.length * 0.05}
                      shouldAnimate={shouldAnimate}
                    >
                      <div className="text-xs/6 font-bold text-gray-400">
                        Liens rapides
                      </div>
                    </FadeUp>
                    <ul className="-mx-2 mt-2 space-y-1">
                      {siteConfig.quickLinks.map((quickLink, index) => (
                        <FadeUp
                          key={quickLink.name}
                          delay={
                            index * 0.05 +
                            siteConfig.sidebarNavigation.length * 0.05
                          }
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
                                className="group flex  rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 dark:text-gray-400 dark:hover:!bg-primary/2 hover:!bg-gray-50"
                                href={quickLink.href}
                                variant="light"
                              >
                                <div className={"flex justify-between w-full "}>
                                  <span
                                    className={
                                      "flex gap-x-3 dark:group-hover:text-primary"
                                    }
                                  >
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg   text-[0.625rem] font-medium  text-gray-400 dark:group-hover:text-primary ">
                                      <quickLink.icon className="…props…" />
                                    </span>
                                    <span className="truncate">
                                      {quickLink.name}
                                    </span>
                                  </span>
                                  {quickLink.isExternal && (
                                    <span>
                                      <ArrowHorizontalLineIcon
                                        className={`size-5 rotate-320 transition text-transparent dark:group-hover:text-primary group-hover:text-gray-400 `}
                                      />
                                    </span>
                                  )}
                                </div>
                              </Button>
                            </Link>
                          </li>
                        </FadeUp>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/*Navbar*/}
        <div
          className={
            " items-center flex md:border-l md:border-r h-[64px] md:px-6 dark:border-primary/10 border-dashed border-gray-200"
          }
        >
          <NavbarContent className="  basis-1/5 sm:basis-full " justify="start">
            <NavbarBrand className="gap-6 max-w-fit">
              <div>
                <div className="flex items-center">
                  <div className="h-[64px] md:hidden flex">
                    <Drawer>
                      <DrawerTrigger>
                        <ToggleIcon />
                      </DrawerTrigger>
                      <DrawerContent className="">
                        <DrawerHeader className="flex flex-row justify-between border border-transparent  border-dashed border-b-primary">
                          <Link
                            className="flex justify-start items-center"
                            href="/"
                          >
                            <FadeHorizontal
                              className="pl-2 "
                              shouldAnimate={shouldAnimate}
                            >
                              <Image
                                priority
                                alt="Nicolas Planche"
                                className="rounded-full"
                                height={45}
                                quality={90}
                                src="/61987116.jpeg"
                                width={45}
                              />
                            </FadeHorizontal>
                            <FadeHorizontal
                              className="pl-2 "
                              delay={0.05}
                              shouldAnimate={shouldAnimate}
                            >
                              <ActualTime />
                            </FadeHorizontal>
                          </Link>

                          <NavbarItem className="flex  items-center">




                            <FadeHorizontal
                              className=""
                              delay={0.2}
                              shouldAnimate={shouldAnimate}
                            >
                              <button className="items-center flex">
                                <DrawerClose asChild={true}>
                                  <CloseIcon className="h-5 w-5 dark:text-gray-400 text-gray-600  cursor-pointer" />
                                </DrawerClose>
                              </button>
                            </FadeHorizontal>
                          </NavbarItem>
                        </DrawerHeader>
                        <ul className="flex flex-1 w- flex-col gap-y-7 pt-4 px-6 pb-6 overflow-y-scroll">
                          <li>
                            <ul className="-mx-2 space-y-1 ">
                              {siteConfig.sidebarNavigation.map(
                                (nav, index) => (
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
                                              ? "dark:bg-primary/4  border-primary text-primary hover:bg-gray-100 dark:hover:bg-primary/2"
                                              : "text-gray-700 dark:text-gray-400 transition dark:hover:bg-primary/2 hover:bg-gray-100 dark:hover:text-primary b",
                                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-bold w-full justify-start ",
                                          )}
                                        >
                                          <nav.icon
                                            aria-hidden="true"
                                            className={classNames(
                                              pathname === nav.href
                                                ? "text-primary "
                                                : "text-gray-400 transition dark:group-hover:text-primary",
                                              "size-6 shrink-0  ",
                                            )}
                                          />
                                          {nav.name}
                                        </div>
                                      </Link>
                                    </li>
                                  </FadeUp>
                                ),
                              )}
                            </ul>
                          </li>
                          <li>
                            <FadeUp
                              delay={siteConfig.sidebarNavigation.length * 0.05}
                              shouldAnimate={shouldAnimate}
                            >
                              <div className="text-xs/6 font-bold text-gray-400">
                                Lien rapides
                              </div>
                            </FadeUp>
                            <ul className="-mx-2 mt-2 space-y-1">
                              {siteConfig.quickLinks.map((quickLink, index) => (
                                <FadeUp
                                  key={quickLink.name}
                                  delay={
                                    (siteConfig.sidebarNavigation.length +
                                      index) *
                                    0.05
                                  }
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
                                        className="group flex  rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 dark:text-gray-400 dark:hover:!bg-primary/2 hover:!bg-gray-50"
                                        href={quickLink.href}
                                        variant="light"
                                      >
                                        <div
                                          className={
                                            "flex justify-between w-full "
                                          }
                                        >
                                          <span
                                            className={
                                              "flex gap-x-3 dark:group-hover:text-primary"
                                            }
                                          >
                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg   text-[0.625rem] font-medium  text-gray-400 dark:group-hover:text-primary ">
                                              <quickLink.icon className="…props…" />
                                            </span>
                                            <span className="truncate">
                                              {quickLink.name}
                                            </span>
                                          </span>
                                          {quickLink.isExternal && (
                                            <span>
                                              <ArrowHorizontalLineIcon
                                                className={`size-5 rotate-320 transition text-transparent dark:group-hover:text-primary group-hover:text-gray-400 `}
                                              />
                                            </span>
                                          )}
                                        </div>
                                      </Button>
                                    </Link>
                                  </li>
                                </FadeUp>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
                <FadeHorizontal
                  className="md:flex hidden"
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
                    <p className="pl-2 font-bold text-inherit ">
                      Nicolas Planche
                    </p>
                  </Link>
                </FadeHorizontal>
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="hidden md:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <FadeHorizontal delay={0.05} shouldAnimate={shouldAnimate}>
              <NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
            </FadeHorizontal>
            <FadeHorizontal
              className=""
              delay={0.1}
              shouldAnimate={shouldAnimate}
            >
              <ActualTime />
            </FadeHorizontal>
            <NavbarItem className="hidden sm:flex  items-center ">
              <FadeHorizontal
                delay={0.15}
                className="items-center flex "
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
                  className="items-center flex "
                  href={siteConfig.links.github}
                  title="GitHub"
                >
                  <Button
                    isIconOnly
                    aria-label="Changer le thème"
                    className="icon-nav rounded-full"
                    variant="light">

                  <GithubIcon
                    className="icon text-default-500 hover:text-black dark:hover:text-white"
                    size={44}
                  />
                  </Button>
                </Link>
              </FadeHorizontal>

              <FadeHorizontal
                delay={0.25}
                className="items-center flex "

                shouldAnimate={shouldAnimate}
              >
                  <ThemeSwitch />
              </FadeHorizontal>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="md:hidden basis-1 pl-4 gap-0" justify="end">
            <FadeHorizontal
              className=" md:hidden flex h-[40px] mr-8  w-[24px] "
              delay={0.05}
              shouldAnimate={shouldAnimate}
            >
              <LaunchMusic size={40} />
            </FadeHorizontal>
            <FadeHorizontal
              className=" md:hidden flex  mr-7"
              delay={0.1}
              shouldAnimate={shouldAnimate}
            >
              <SearchIcon
                className={"text-gray-400"}
                size={40}
                onClick={openSearch}
              />
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

            <FadeHorizontal delay={0.2} shouldAnimate={shouldAnimate}
                            className="items-center flex "
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
