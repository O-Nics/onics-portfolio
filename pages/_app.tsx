import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { MusicProvider } from "@/features/music";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        storageKey="theme"
      >
        <MusicProvider>
          <Component {...pageProps} />
        </MusicProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
