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

import {
  GithubIcon,
  SearchIcon,
  LinkedinIcon,
  ArrowHorizontalLineIcon,
} from "@/components/icons";
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
        inputWrapper:
          "dark:!bg-primary/3 border-0 dark:hover:!bg-primary/5 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/4",
        input: "text-sm",
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block dark:bg-primary/6 bg-primary/10 !shadow-none"
          keys={["command"]}
        >
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
        base: " bg-white dark:bg-primary/1 border-dashed  border-gray-200 dark:border-primary/10 backdrop-saturate-100",
      }}
      isBordered={true}
      maxWidth="full"
      position="sticky"
    >
      <div className="container-wrapper py-0 ">
        <div className="hidden mt-[65px] py-0 lg:fixed lg:inset-y-0  lg:z-30 lg:flex lg:w-72 lg:flex-col">
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
                                    ? "dark:bg-primary/4 bg-white border-primary text-primary hover:bg-gray-50 dark:hover:bg-primary/2"
                                    : "text-gray-700 dark:text-gray-400 transition dark:hover:bg-primary/2 hover:bg-gray-50 dark:hover:text-primary b",
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
                      delay={siteConfig.sidebarNavigation.length * 0.1}
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
                                className="group flex  rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 dark:text-gray-400 dark:hover:bg-primary/2 hover:!bg-gray-50"
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

        <div
          className={
            " items-center flex lg:border-l lg:border-r h-[64px] lg:px-6 dark:border-primary/10 border-dashed border-gray-200"
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
                    <ul className="-mx-2 space-y-1 ">
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
                                    ? "dark:bg-primary/4  border-primary text-primary hover:bg-gray-50 dark:hover:bg-primary/2"
                                    : "text-gray-700 dark:text-gray-400 transition dark:hover:bg-primary/2 hover:bg-gray-50 dark:hover:text-primary b",
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
                    <div className="text-xs/6 font-bold text-gray-400">
                      Lien rapides
                    </div>
                    <ul className="-mx-2 mt-2 space-y-1">
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
                                className="group flex  rounded-md p-2 text-sm/6 font-semibold w-full justify-start text-gray-700 dark:text-gray-400 dark:hover:bg-primary/2 hover:!bg-gray-50"
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
          </NavbarMenu>
        </div>
      </div>
    </HeroUINavbar>
  );
};
