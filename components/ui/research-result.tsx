import { useCallback } from "react";

import { SearchResult } from "@/types";
import {NextRouter} from "next/router";

export const ResearchResult = ({
  items,
  selectedIndex,
  closeSearch,
  router
}: {
  items: SearchResult[];
  selectedIndex: number;
  closeSearch(): void;
  router: NextRouter;
}) => {
  const getCategoryLabel = (category: SearchResult["category"]) => {
    switch (category) {
      case "menu":
        return "Menu";
      case "project":
        return "Projet";
      case "experience":
        return "Expérience";
      case "formation":
        return "Formation";
      default:
        return "";
    }
  };

  const getCategoryColor = (category: SearchResult["category"]) => {
    switch (category) {
      case "menu":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "project":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
      case "experience":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "formation":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400";
      default:
        return "";
    }
  };

  const handleNavigate = useCallback(
    (item: SearchResult) => {
      closeSearch();
      // ajout de recherche recente dans le local storage

      const storage = localStorage.getItem("recentSearches");
      let recentSearches: Array<{
        id: string;
        title: string;
        description?: string;
        href: string;
        category: SearchResult["category"];
      }> = storage ? JSON.parse(storage) : [];

      // add current search to the front (most recent first)
      const entry = {
        id: item.id,
        title: item.title,
        description: item.description,
        href: item.href,
        category: item.category,
      };

      recentSearches.unshift(entry);

      // de-duplicate by id and keep only 10 most recent
      recentSearches = recentSearches
        .filter((v, i, arr) => arr.findIndex((x) => x.id === v.id) === i)
        .slice(0, 10);

      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

      router.push(item.href);
    },
    [closeSearch, router],
  );

  return (
    <div className="flex flex-col gap-1">
      {items.map((result, index) => {
        const Icon = result.icon;

        return (
          <button
            key={result.id}
            className={`w- text-left mx-3 px-3 rounded-2xl py-3 transition-colors cursor-pointer flex items-start gap-3 ${
              index === selectedIndex
                ? "bg-gray-100 dark:bg-primary/5"
                : "hover:bg-gray-100 bg-gray-50 dark:bg-gray-50/5 dark:hover:bg-primary/3"
            }`}
            onClick={() => handleNavigate(result)}
          >
            {Icon && (
              <Icon className="w-5 h-5 mt-0.5 text-gray-500 dark:text-gray-400 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {result.title}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ${getCategoryColor(result.category)}`}
                >
                  {getCategoryLabel(result.category)}
                </span>
              </div>
              {result.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {result.description}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};
