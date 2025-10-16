import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex text-xs items-center justify-center py-3 text-gray-300">
        <p>
          {" "}
          © {new Date().getFullYear()} Nicolas Planche - All rights
          reserved{" "}
        </p>
      </footer>
    </div>
  );
}
