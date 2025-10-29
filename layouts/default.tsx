import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { SearchModal, SearchProvider } from "@/features/search";
import { LanguageSwitcher } from "@/components/language-switcher";

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
}

export default function DefaultLayout({
  children,
  title,
  description,
  image,
  url,
  type,
  keywords,
}: DefaultLayoutProps) {
  return (
    <SearchProvider>
      <div className="relative flex flex-col min-h-screen">
        <Head
          description={description}
          image={image}
          keywords={keywords}
          title={title}
          type={type}
          url={url}
        />
        <Navbar />
        <SearchModal />
        <main className="container-wrapper flex-grow md:pl-72 border-gray-200 dark:border-primary/10 border-dashed border-r">
          <div className=" md:pt-6 pt-3  px-5 sm:px-6 md:px-12">{children}</div>
        </main>
        <footer className="md:hidden felx w-full flex flex-col md:flex-row items-center justify-between py-4 px-5 sm:px-6 md:px-12 md:pl-72 text-xs border-t border-gray-200 dark:border-primary/10 border-dashed">
          <p className="text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
            © {new Date().getFullYear()} Nicolas Planche - All rights reserved
          </p>
          <LanguageSwitcher />
        </footer>
      </div>
    </SearchProvider>
  );
}
