"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";

import { DesktopSidebar } from "./desktop-sidebar";
import { MobileDrawer } from "./mobile-drawer";
import { DesktopLogo } from "./desktop-logo";
import { DesktopActions } from "./desktop-actions";
import { MobileActions } from "./mobile-actions";

import { useFirstVisitAnimation } from "@/hooks/useFirstVisitAnimation";

export const Navbar = () => {
  const { shouldAnimate } = useFirstVisitAnimation("nav-animated");

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
                  <DesktopLogo shouldAnimate={shouldAnimate} />
                </div>
              </div>
            </NavbarBrand>
          </NavbarContent>

          {/* Desktop Actions */}
          <DesktopActions shouldAnimate={shouldAnimate} />

          {/* Mobile Actions */}
          <MobileActions shouldAnimate={shouldAnimate} />
        </div>
      </div>
    </HeroUINavbar>
  );
};
