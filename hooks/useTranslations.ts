import { useRouter } from "next/router";

import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";
import { Locale } from "@/types";

type Messages = typeof frMessages;

export function useTranslations() {
  const { locale: routerLocale } = useRouter();

  const locale: Locale = (routerLocale === "en" ? "en" : "fr") as Locale;
  const messages: Messages = locale === "en" ? enMessages : frMessages;

  return {
    t: messages,
    locale,
  };
}
