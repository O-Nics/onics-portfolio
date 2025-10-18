"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
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

import { GithubIcon, SearchIcon, LinkedinIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import FadeUp from "@/components/animation/fade-up";
import { useFirstVisitAnimation } from "@/hooks/useFirstVisitAnimation";
import FadeHorizontal from "@/components/animation/fade-horizontal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const pathname = usePathname();

  // const { shouldAnimate } = true;
  const { shouldAnimate } = useFirstVisitAnimation("nav-animated");
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      classNames={{
        base: " border-dashed ",
      }}
      isBordered={true}
      maxWidth="full"
      position="sticky"
    >
      <div className="container-wrapper ">
        <div className="hidden mt-[64px]  lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 h-[calc(100vh-80px)] mt-3 pt-4 border-r border-l border-dashed border-gray-200 bg-white px-4 pb-4 dark:border-white/10 dark:bg-black/10">
            <nav className="flex flex-1 flex-col  overflow-y-scroll px-2">
              <ul className="flex flex-1 flex-col gap-y-7 ">
                <li>
                  <ul className="-mx-2 space-y-1 " role="list">
                    {siteConfig.sidebarNavigation.map((nav, index) => (
                      <FadeUp
                        key={nav.name}
                        delay={index * 0.1}
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
                                  ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                              )}
                            >
                              <nav.icon
                                aria-hidden="true"
                                className={classNames(
                                  pathname === nav.href
                                    ? "text-indigo-600 dark:text-white"
                                    : "text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white",
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
                </li>
                <li>
                  <FadeUp
                    delay={siteConfig.sidebarNavigation.length * 0.1}
                    shouldAnimate={shouldAnimate}
                  >
                    <div className="text-xs/6 font-semibold text-gray-400">
                      Lien rapides
                    </div>
                  </FadeUp>
                  <ul className="-mx-2 mt-2 space-y-1" role="list">
                    {siteConfig.quickLinks.map((quickLink, index) => (
                      <FadeUp
                        key={quickLink.name}
                        delay={
                          (siteConfig.sidebarNavigation.length + index) * 0.1
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
                              className="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                              href={quickLink.href}
                              variant="light"
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg  bg-white text-[0.625rem] font-medium dark:bg-white/5 text-gray-400  group-hover:text-indigo-600 dark:group-hover:text-white">
                                <quickLink.icon className="…props…" />
                              </span>
                              <span className="truncate">{quickLink.name}</span>
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

        <div
          className={
            " items-center flex lg:border-l lg:border-r lg:px-6 border-dashed border-gray-200 dark:border-white/10"
          }
        >
          <NavbarContent className="  basis-1/5 sm:basis-full " justify="start">
            <NavbarBrand className="gap-3 max-w-fit">
              <FadeHorizontal shouldAnimate={shouldAnimate}>
                <Link className="flex justify-start items-center" href="/">
                  <Image
                    priority
                    alt="Nicolas Planche"
                    className="rounded-lg"
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
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="hidden lg:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <NavbarItem className="hidden sm:flex gap-2">
              <FadeHorizontal
                className="h-[24px]"
                delay={0.2}
                shouldAnimate={shouldAnimate}
              >
                <Link href={siteConfig.links.github} title="GitHub">
                  <GithubIcon className="text-default-500" />
                </Link>
              </FadeHorizontal>
              <FadeHorizontal
                className="h-[24px]"
                delay={0.3}
                shouldAnimate={shouldAnimate}
              >
                <Link href={siteConfig.links.linkedin} title="LinkedIn">
                  <LinkedinIcon className="text-default-500" />
                </Link>
              </FadeHorizontal>
              <FadeHorizontal
                className="h-[24px]"
                delay={0.4}
                shouldAnimate={shouldAnimate}
              >
                <ThemeSwitch />
              </FadeHorizontal>
            </NavbarItem>
            <FadeHorizontal delay={0.5} shouldAnimate={shouldAnimate}>
              <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
            </FadeHorizontal>
          </NavbarContent>

          <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
            <FadeHorizontal delay={0.2} shouldAnimate={shouldAnimate}>
              <Link href={siteConfig.links.github}>
                <GithubIcon className="text-default-500" />
              </Link>
            </FadeHorizontal>
            <FadeHorizontal delay={0.3} shouldAnimate={shouldAnimate}>
              <Link href={siteConfig.links.linkedin} title="LinkedIn">
                <LinkedinIcon className="text-default-500" />
              </Link>
            </FadeHorizontal>
            <FadeHorizontal delay={0.4} shouldAnimate={shouldAnimate}>
              <ThemeSwitch />
            </FadeHorizontal>
            <FadeHorizontal delay={0.5} shouldAnimate={shouldAnimate}>
              <NavbarMenuToggle />
            </FadeHorizontal>
          </NavbarContent>

          <NavbarMenu>
            {searchInput}
            <div className="mx-2 mt-2 flex flex-col gap-2">
              <nav className="flex flex-1 flex-col ">
                <ul className="flex flex-1 w- flex-col gap-y-7">
                  <li>
                    <ul className="-mx-2 space-y-1 " role="list">
                      {siteConfig.sidebarNavigation.map((nav) => (
                        <li key={nav.name}>
                          <Link
                            aria-label={nav.name}
                            className="w-full"
                            href={nav.href}
                            title={nav.name}
                          >
                            <Button
                              className={classNames(
                                pathname === nav.href
                                  ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                              )}
                              variant="light"
                            >
                              <nav.icon
                                aria-hidden="true"
                                className={classNames(
                                  pathname === nav.href
                                    ? "text-indigo-600 dark:text-white"
                                    : "text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white",
                                  "size-6 shrink-0",
                                )}
                              />
                              {nav.name}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {/*<li>*/}
                  {/*  <div className="text-xs/6 font-semibold text-gray-400">*/}
                  {/*    Lien rapides*/}
                  {/*  </div>*/}
                  {/*  <ul className="-mx-2 mt-2 space-y-1" role="list">*/}
                  {/*    {siteConfig.quickLinks.map((quickLink) => (*/}
                  {/*      <li key={quickLink.name}>*/}
                  {/*        <Link*/}
                  {/*          aria-label={quickLink.name}*/}
                  {/*          className="w-full"*/}
                  {/*          href={quickLink.href}*/}
                  {/*          target="_blank"*/}
                  {/*          title={quickLink.name}*/}
                  {/*        >*/}
                  {/*          <Button*/}
                  {/*            className={classNames(*/}
                  {/*              quickLink.current*/}
                  {/*                ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"*/}
                  {/*                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",*/}
                  {/*              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",*/}
                  {/*            )}*/}
                  {/*            href={quickLink.href}*/}
                  {/*            variant="light"*/}
                  {/*          >*/}
                  {/*            <span*/}
                  {/*              className={classNames(*/}
                  {/*                quickLink.current*/}
                  {/*                  ? "border-indigo-600 text-indigo-600 dark:border-white/20 dark:text-white"*/}
                  {/*                  : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white",*/}
                  {/*                "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-white/5",*/}
                  {/*              )}*/}
                  {/*            >*/}
                  {/*              {quickLink.initial}*/}
                  {/*            </span>*/}
                  {/*            <span className="truncate">{quickLink.name}</span>*/}
                  {/*          </Button>*/}
                  {/*        </Link>*/}
                  {/*      </li>*/}
                  {/*    ))}*/}
                  {/*  </ul>*/}
                  {/*</li>*/}
                </ul>
              </nav>
            </div>
          </NavbarMenu>
        </div>
      </div>
    </HeroUINavbar>
  );
};
