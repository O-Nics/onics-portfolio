import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Image } from "@heroui/image";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "@heroui/button";

import { GithubIcon, SearchIcon, LinkedinIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

const navigation = [
  { name: "Introduction", href: "#", icon: HomeIcon, current: true },
  { name: "À propos de moi", href: "#", icon: UsersIcon, current: false },
  { name: "Projets", href: "#", icon: FolderIcon, current: false },
  { name: "Compétences", href: "#", icon: FolderIcon, current: false },
  { name: "Experiences", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Formations",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Contact", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Github", href: "#", initial: "H", current: false },
  { id: 2, name: "Linkedin", href: "#", initial: "T", current: false },
  { id: 3, name: "Buy me a coffee", href: "#", initial: "W", current: false },
  {
    id: 3,
    name: "Télécharger mon CV",
    href: "#",
    initial: "W",
    current: false,
  },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = () => {
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
          <div className="flex grow flex-col gap-y-5 h-[calc(100vh-80px)] mt-3 pt-4 border-r border-l border-dashed border-gray-200 bg-white px-6 pb-4 dark:border-white/10 dark:bg-black/10">
            <nav className="flex flex-1 flex-col ">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1 " role="list">
                    {navigation.map((nav) => (
                      <li key={nav.name}>
                        <Link
                          aria-label={nav.name}
                          href={nav.href}
                          title={nav.name}
                          className="w-full"
                        >
                          <Button
                            className={classNames(
                              nav.current
                                ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                            )}
                            variant="light"
                          >
                            <nav.icon
                              aria-hidden="true"
                              className={classNames(
                                nav.current
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
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">
                    Lien rapides
                  </div>
                  <ul className="-mx-2 mt-2 space-y-1" role="list">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <Link
                          aria-label={team.name}
                          href={team.href}
                          target="_blank"
                          title={team.name}
                        >
                          <Button
                            className={classNames(
                              team.current
                                ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                            )}
                            href={team.href}
                            variant="light"
                          >
                            <span
                              className={classNames(
                                team.current
                                  ? "border-indigo-600 text-indigo-600 dark:border-white/20 dark:text-white"
                                  : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white",
                                "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-white/5",
                              )}
                            >
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                    href="#"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white"
                    />
                    Settings
                  </a>
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
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <Image
                  alt="Nicolas Planche"
                  height={45}
                  src="https://avatars.githubusercontent.com/u/61987116?v=4"
                  width={45}
                />
                <p className="pl-4 font-bold text-inherit">Nicolas Planche</p>
              </NextLink>
            </NavbarBrand>
            <div className="hidden lg:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </div>
          </NavbarContent>

          <NavbarContent
            className="hidden lg:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <NavbarItem className="hidden sm:flex gap-2">
              <Link isExternal href={siteConfig.links.github} title="GitHub">
                <GithubIcon className="text-default-500" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                title="LinkedIn"
              >
                <LinkedinIcon className="text-default-500" />
              </Link>
              <ThemeSwitch />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          </NavbarContent>

          <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
            <Link isExternal href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
              <LinkedinIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
            <NavbarMenuToggle className="h-[50px]" />
          </NavbarContent>

          <NavbarMenu>
            {searchInput}
            <div className="mx-2 mt-2 flex flex-col gap-2">
              <nav className="flex flex-1 flex-col ">
                <ul className="flex flex-1 w- flex-col gap-y-7">
                  <li>
                    <ul className="-mx-2 space-y-1 " role="list">
                      {navigation.map((nav) => (
                        <li key={nav.name}>
                          <Link
                            aria-label={nav.name}
                            className="w-full"
                            href={nav.href}
                            title={nav.name}
                          >
                            <Button
                              className={classNames(
                                nav.current
                                  ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                              )}
                              variant="light"
                            >
                              <nav.icon
                                aria-hidden="true"
                                className={classNames(
                                  nav.current
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
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">
                      Lien rapides
                    </div>
                    <ul className="-mx-2 mt-2 space-y-1" role="list">
                      {teams.map((team) => (
                        <li key={team.name}>
                          <Link
                            aria-label={team.name}
                            className="w-full"
                            href={team.href}
                            target="_blank"
                            title={team.name}

                          >
                            <Button
                              className={classNames(
                                team.current
                                  ? "bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full justify-start",
                              )}
                              href={team.href}
                              variant="light"
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? "border-indigo-600 text-indigo-600 dark:border-white/20 dark:text-white"
                                    : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-white/5",
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                      href="#"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white"
                      />
                      Settings
                    </a>
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
