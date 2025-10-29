import { useRouter } from "next/router";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="text-sm font-medium"
          size="sm"
          startContent={<span className="text-lg">{currentLanguage.flag}</span>}
          variant="flat"
        >
          {currentLanguage.code.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language selection"
        onAction={(key) => changeLanguage(key as string)}
      >
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            className={locale === lang.code ? "bg-primary/10" : ""}
            startContent={<span className="text-lg">{lang.flag}</span>}
          >
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
