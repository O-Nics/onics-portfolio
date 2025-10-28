import { useRouter } from "next/router";
import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";

type Messages = typeof frMessages;

export function useTranslations() {
  const { locale } = useRouter();

  const messages: Messages = locale === "en" ? enMessages : frMessages;

  return {
    t: messages,
    locale: locale || "fr",
  };
}
