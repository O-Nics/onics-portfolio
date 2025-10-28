import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";

import {
  MoonIcon,
  SunIcon,
  MonitorIcon,
  LightDarkIcon,
} from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent Hydration Mismatch
  if (!isMounted)
    return (
      <Button
        isIconOnly
        aria-label="Changer le thème"
        className="icon-nav "
        variant="light"
      >
        <LightDarkIcon
          className="icon text-default-500 hidden md:block hover:text-black dark:hover:text-white"
          size={44}
        />
        <LightDarkIcon className="text-default-500 block md:hidden" size={21} />
      </Button>
    );

  return (
    <Dropdown
      classNames={{
        content: "!z-[99999]",
        base: "!z-[99999] hover:!bg-transparent",
      }}
      shouldBlockScroll={false}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="Changer le thème"
          className="icon-nav rounded-full "
          variant="light"
        >
          <LightDarkIcon
            className="icon text-default-500 hidden md:block hover:text-black dark:hover:text-white"
            size={45}
          />
          <LightDarkIcon
            className="text-default-500 block md:hidden"
            size={20}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sélection du thème"
        onAction={(key) => setTheme(key as string)}
      >
        <DropdownItem
          key="light"
          className={`${theme === "light" ? "bg-primary/20 " : "hover:!bg-gray-100 dark:hover:!bg-gray-700/50"}`}
          startContent={<SunIcon size={18} />}
        >
          Clair
        </DropdownItem>
        <DropdownItem
          key="dark"
          className={`${theme === "dark" ? "bg-primary/50" : "hover:!bg-gray-100 dark:hover:!bg-gray-700/50"}`}
          startContent={<MoonIcon size={18} />}
        >
          Sombre
        </DropdownItem>
        <DropdownItem
          key="system"
          className={`${theme === "system" ? "bg-primary/50" : "hover:!bg-gray-100 dark:hover:!bg-gray-700/50"}`}
          startContent={<MonitorIcon size={18} />}
        >
          Système
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
