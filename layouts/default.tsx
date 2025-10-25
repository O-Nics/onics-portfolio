import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { SearchModal } from "@/components/search-modal";
import { SearchProvider } from "@/contexts/SearchContext";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <div className="relative flex flex-col min-h-screen">
        <Head />
        <Navbar />
        <SearchModal />
        <main className="container-wrapper flex-grow md:pl-72 border-gray-200 dark:border-primary/10 border-dashed border-r">
          <div className=" md:pt-6 pt-3  px-5 sm:px-6 md:px-12">{children}</div>
        </main>
        {/*<footer className="w-full flex text-xs items-center justify-center py-3 text-gray-300">*/}
        {/*  <p>*/}
        {/*    © {new Date().getFullYear()} Nicolas Planche - All rights reserved*/}
        {/*  </p>*/}
        {/*</footer>*/}
      </div>
    </SearchProvider>
  );
}
