"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { Input } from "@heroui/input";
import { useRouter } from "next/router";

import { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import projectsData from "@/data/projects.json";
import { useSearch } from "@/contexts/SearchContext";
import { SearchResult } from "@/types";
import { ResearchResult } from "@/components/ui/research-result";
import {Kbd} from "@heroui/kbd";

export const SearchModal = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const router = useRouter();

  // Détection du raccourci Cmd+K (ou Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
    };

    const storage = localStorage.getItem("recentSearches");

    if (storage) {
      const recent: SearchResult[] = JSON.parse(storage);

      setRecentSearches(recent);
    }

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
      }),
    );

    const menuQuickItems: SearchResult[] = siteConfig.quickLinks.map(
      (item, index) => ({
        id: `menu-quick-${index}`,
        title: item.name,
        href: item.href,
        category: "menu" as const,
        icon: item.icon,
      }),
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

    return [
      ...menuItems,
      ...menuQuickItems,
      ...projects,
      ...experiences,
      ...formations,
    ];
  }, []);

  // Filtrer les résultats
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();

    return searchData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const descriptionMatch = item.description?.toLowerCase().includes(query);

      return titleMatch || descriptionMatch;
    });
  }, [searchQuery, searchData]);

  // Fonction de navigation
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

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : prev,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleNavigate(filteredResults[selectedIndex]);
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

        <ModalHeader className="pb-2 pt-0 px-0">
          <Input
            endContent={
              <Kbd
                className="hidden lg:inline-block dark:bg-primary/6 bg-white !shadow-none px-1 !py-0.5 font-bold"
              >
                ESC
              </Kbd>
            }
            autoFocus
            classNames={{
              base: "w-full",
              inputWrapper:
                "!py-0 !h-18 border !border-b-primary border-transparent border-dashed rounded-none  lg:z-40 -z-1 min-h-0 dark:!bg-background  lg:mt-0 mt-8  bg-gray-50 hover:!bg-gray-100",
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
          {filteredResults.length > 0 && (
            <ResearchResult
              closeSearch={closeSearch}
              items={filteredResults}
              router={router}
              selectedIndex={selectedIndex}
            />
          )}
          {recentSearches.length > 0 && filteredResults.length == 0 && (
            <>
              <div className="pl-3 font-bold">Récent</div>
              <ResearchResult
                closeSearch={closeSearch}
                items={recentSearches}
                router={router}
                selectedIndex={selectedIndex}
              />
            </>
          )}
          {filteredResults.length === 0 && recentSearches.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              {searchQuery && (
                <p>Aucun résultat trouvé pour &#34;{searchQuery}&#34;</p>
              )}
              {searchQuery.length == 0 && recentSearches.length == 0 && (
                <p>Aucune recherche récente</p>
              )}
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
