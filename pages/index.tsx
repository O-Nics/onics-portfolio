"use client";
import DefaultLayout from "@/layouts/default";
import { NavigationInPage } from "@/components/navigationInPage";
import { LinkNavigation } from "@/types";

export default function Example() {
  const rightLink: LinkNavigation = {
    name: "À propos de moi",
    href: "/a-propos",
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
      <DefaultLayout>
        <main className="">
          <h1 className="text-7xl font-extrabold">Nicolas Planche</h1>
          <p className="text-3xl font-bold pt-2">
            Développeur Full-Stack & Mobile
          </p>
          <p className="pt-4 text-xl">
            Amoureux de la tech, je conçois des applications mobiles et web
            ainsi que des back-ends solides.
          </p>
          <p className="pt-4 text-xl">
            J’utilise des technologies modernes
            tel que Flutter, Laravel, Vue/Nuxt, Next/React, Tailwind CSS et des
            pratiques DevOps pour livrer des solutions logicielles complètes,
            orientées utilisateur et de haute qualité.
          </p>

          <NavigationInPage right={rightLink} />
        </main>
      </DefaultLayout>
    </>
  );
}
