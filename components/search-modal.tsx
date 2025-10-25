"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { useRouter } from "next/router";
import { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import projectsData from "@/data/projects.json";
import { useSearch } from "@/contexts/SearchContext";

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  href: string;
  category: "menu" | "project" | "experience" | "formation";
  icon?: React.ComponentType<any>;
}

export const SearchModal = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Détection du raccourci Cmd+K (ou Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSearch]);

  // Réinitialiser la recherche et l'index quand la modal s'ouvre
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Préparer les données de recherche
  const searchData: SearchResult[] = useMemo(() => {
    const menuItems: SearchResult[] = siteConfig.sidebarNavigation.map(
      (item, index) => ({
        id: `menu-${index}`,
        title: item.name,
        href: item.href,
        category: "menu" as const,
        icon: item.icon,
      })
    );

    const menuQuickItems: SearchResult[] = siteConfig.quickLinks.map(
      (item, index) => ({
        id: `menu-quick-${index}`,
        title: item.name,
        href: item.href,
        category: "menu" as const,
        icon: item.icon,
      })
    );

    const projects: SearchResult[] = projectsData.projects.map((project) => ({
      id: `project-${project.slug}`,
      title: project.name,
      description: project.shortDescription,
      href: `/projet/${project.slug}`,
      category: "project" as const,
    }));

    // TODO: Ajouter les expériences quand les données seront disponibles
    const experiences: SearchResult[] = [];

    // TODO: Ajouter les formations quand les données seront disponibles
    const formations: SearchResult[] = [];

    return [...menuItems, ...menuQuickItems, ...projects, ...experiences, ...formations];
  }, []);

  // Filtrer les résultats
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return searchData;
    }

    const query = searchQuery.toLowerCase();

    return searchData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const descriptionMatch = item.description
        ?.toLowerCase()
        .includes(query);

      return titleMatch || descriptionMatch;
    });
  }, [searchQuery, searchData]);

  // Fonction de navigation
  const handleNavigate = useCallback((href: string) => {
    closeSearch();
    router.push(href);
  }, [closeSearch, router]);

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleNavigate(filteredResults[selectedIndex].href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, filteredResults, selectedIndex, handleNavigate]);

  // Réinitialiser l'index si les résultats changent
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults.length]);

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

  return (
    <Modal
      backdrop="blur"
      classNames={{
        base: "bg-white dark:bg-background",
        backdrop: "bg-black/30",
      }}
      isOpen={isOpen}
      placement="top"
      size="2xl"
      onClose={closeSearch}
    >
      <ModalContent>
        <ModalHeader className="pb-2 pt-4 px-4">
          <Input
            autoFocus
            classNames={{
              base: "w-full",
              inputWrapper:
                "!py-0 !h-12 min-h-0 dark:!bg-primary/3 border-0 dark:hover:!bg-primary/100 bg-gray-50 hover:!bg-gray-100",
              input: "text-base",
            }}
            placeholder="Rechercher des pages, projets, expériences, formations..."
            startContent={
              <SearchIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </ModalHeader>
        <ModalBody className="px-0 py-3 max-h-[500px] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="flex flex-col gap-1">
              {filteredResults.map((result, index) => {
                const Icon = result.icon;

                return (
                  <button
                    key={result.id}
                    className={`w-full text-left px-4 py-3 transition-colors cursor-pointer flex items-start gap-3 ${
                      index === selectedIndex
                        ? "bg-gray-100 dark:bg-primary/5"
                        : "hover:bg-gray-50 dark:hover:bg-primary/3"
                    }`}
                    onClick={() => handleNavigate(result.href)}
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
                          className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${getCategoryColor(result.category)}`}
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
          ) : (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              Aucun résultat trouvé pour &#34;{searchQuery}&#34;
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};