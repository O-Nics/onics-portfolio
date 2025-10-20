import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { MoonIcon, SunIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="lg:w-[42px] lg:h-6 w-5 h-5" />;

  return (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      {...getBaseProps({
        className: clsx(
          "item-center flex transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {isSelected ? (
          <div className="icon-nav">
            {/* Mobile (moins que lg) */}
            <MoonIcon className="block mb-[1px] lg:hidden" size={21} />

            {/* Desktop (lg et plus) */}
            <MoonIcon className="hidden mb-[1px] lg:block icon " size={42} />
          </div>
        ) : (
          <div className="icon-nav">
            {/* Mobile (moins que lg) */}
            <SunIcon className="block mb-[1px] lg:hidden" size={21} />

            {/* Desktop (lg et plus) */}
            <SunIcon className="hidden mb-[1px] lg:block icon" size={42} />
          </div>
        )}
      </div>
    </Component>
  );
};
