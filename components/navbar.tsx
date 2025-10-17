import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, LinkedinIcon } from "@/components/icons";
import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import DefaultLayout from "@/layouts/default";

const navigation = [
  { name: 'Introduction', href: '#', icon: HomeIcon, current: true },
  { name: 'À propos de moi', href: '#', icon: UsersIcon, current: false },
  { name: 'Projets', href: '#', icon: FolderIcon, current: false },
  { name: 'Compétences', href: '#', icon: FolderIcon, current: false },
  { name: 'Experiences', href: '#', icon: CalendarIcon, current: false },
  { name: 'Formations', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Contact', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Github', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Linkedin', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Buy me a coffee', href: '#', initial: 'W', current: false },
  { id: 3, name: 'Télécharger mon CV', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
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
      maxWidth="full"
      position="sticky"
      isBordered={true}
    >
      <div className="container-wrapper ">
        <div className="hidden mt-[64px]  lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div
            className="flex grow flex-col gap-y-5 h-[100vh] mt-3 pt-4 border-r border-l border-dashed border-gray-200 bg-white px-6 pb-4 dark:border-white/10 dark:bg-black/10">
            <nav className="flex flex-1 flex-col ">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 ">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? 'text-indigo-600 dark:text-white'
                                : 'text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-indigo-600 text-indigo-600 dark:border-white/20 dark:text-white'
                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white',
                              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-white/5',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
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

        <div className={" items-center flex lg:border-l lg:border-r lg:px-6 border-dashed border-gray-200 dark:border-white/10"}>
          <NavbarContent className="  basis-1/5 sm:basis-full " justify="start">
            <NavbarBrand className="gap-3 max-w-fit">
              <NextLink className="flex justify-start items-center gap-1" href="/">
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
                      linkStyles({color: "foreground"}),
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
                <GithubIcon className="text-default-500"/>
              </Link>
              <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
                <LinkedinIcon className="text-default-500"/>
              </Link>
              <ThemeSwitch/>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          </NavbarContent>

          <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
            <Link isExternal href={siteConfig.links.github}>
              <GithubIcon className="text-default-500"/>
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
              <LinkedinIcon className="text-default-500"/>
            </Link>
            <ThemeSwitch/>
            <NavbarMenuToggle className="h-[50px]"/>
          </NavbarContent>

          <NavbarMenu>
            {searchInput}
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link as={NextLink} color="foreground" href={item.href} size="lg">
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>

        </div>
      </div>
    </HeroUINavbar>
  );
};
