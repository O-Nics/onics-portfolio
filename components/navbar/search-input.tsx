import React from "react";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";

import { SearchIcon } from "@/components/icons";
import { useSearch } from "@/features/search";
import {useTranslations} from "@/hooks/useTranslations";

export const SearchInput: React.FC = () => {
  const { openSearch } = useSearch();
  const { t } = useTranslations();


  return (
    <Input
      readOnly
      aria-label="Rechercher"
      classNames={{
        base: "px-0 cursor-pointer",
        mainWrapper: "!px-0",
        inputWrapper:
          "!py-0 !h-8 min-h-0 pl-2 pr-1 dark:!bg-primary/3 border-0 dark:hover:!bg-primary/5 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/4 cursor-pointer",
        input: "text-sm cursor-pointer",
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block dark:bg-primary/6 bg-white !shadow-none px-1 !py-0.5"
          keys={["command"]}
        >
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder={t.nav.search}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onClick={openSearch}
    />
  );
};
