import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container-wrapper flex-grow lg:pl-72 border-gray-200 dark:border-primary/10 border-dashed border-r">
        <div className="  px-4 sm:px-6 lg:px-12">
          {children}
        </div>
      </main>
      {/*<footer className="w-full flex text-xs items-center justify-center py-3 text-gray-300">*/}
      {/*  <p>*/}
      {/*    © {new Date().getFullYear()} Nicolas Planche - All rights reserved*/}
      {/*  </p>*/}
      {/*</footer>*/}
    </div>
  );
}
