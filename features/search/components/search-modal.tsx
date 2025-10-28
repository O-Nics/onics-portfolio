"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDraggable,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { useRouter } from "next/router";
import { Kbd } from "@heroui/kbd";

import { ResearchResult } from "./search-result";

import { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import projectsData from "@/data/projects.json";
import educationData from "@/data/formations.json";
import experienceData from "@/data/experiences.json";
import { useSearch } from "@/features/search";
import { SearchResult } from "@/types";
import { useKeyboardHeight } from "@/hooks/useKeyboardHeight";

const SearchModal = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const router = useRouter();
  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  // Détection du clavier mobile
  const { isKeyboardOpen, viewportHeight } = useKeyboardHeight();

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
      longDescription: project.longDescription,
      stack: project.stack,
      categories: project.categories,
      href: `/projet/${project.slug}`,
      category: "project" as const,
    }));

    const experiences: SearchResult[] = experienceData.experiences.map(
      (experience) => ({
        id: `experience-${experience.id}`,
        title: experience.title,
        description: experience.description,
        href: `/xp#${experience.id}`,
        school: experience.society || undefined,
        category: "experience" as const,
      }),
    );
    const formations: SearchResult[] = educationData.educations.map(
      (education) => ({
        id: `formation-${education.id}`,
        title: education.name,
        description: education.description,
        href: `/education#${education.id}`,
        school: education.school,
        level: education.level,
        category: "formation" as const,
      }),
    );

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
      const longDescriptionMatch = item.longDescription
        ?.toLowerCase()
        .includes(query);
      const stackMatch = item.stack?.some((tech) =>
        tech.name.toLowerCase().includes(query),
      );
      const categoriesMatch = item.categories?.some((cat) =>
        cat.toLowerCase().includes(query),
      );
      const schoolMatch = item.school
        ? item.school.toLowerCase().includes(query)
        : false;
      const levelMatch = item.level
        ? item.level.toLowerCase().includes(query)
        : false;

      return (
        titleMatch ||
        descriptionMatch ||
        longDescriptionMatch ||
        stackMatch ||
        categoriesMatch ||
        schoolMatch ||
        levelMatch
      );
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

      // Gérer la navigation avec ancre
      const [hash] = item.href.split("#");

      if (hash) {
        // Si l'URL contient une ancre
        router.push(item.href).then(() => {
          // Attendre un court instant pour que le DOM se mette à jour
          setTimeout(() => {
            const element = document.getElementById(hash);

            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        });
      } else {
        // Navigation normale sans ancre
        router.push(item.href);
      }
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
      ref={targetRef}
      backdrop="blur"
      classNames={{
        base: "bg-white dark:bg-background",
        backdrop:
          "bg-linear-to-t dark:from-zinc-900 from-white/50  dark:to-primary/5 to-primary/10",
      }}
      // classNames={{
      //   backdrop: "bg-black/30",
      // }}
      isOpen={isOpen}
      placement="top"
      size="2xl"
      onClose={closeSearch}
    >
      <ModalContent className="dark:bg-background bg-white ">
        <div
          {...moveProps}
          className="h-6 my-2 ml-2 mr-10 dark:bg-gray-50/10 bg-gray-100  rounded-full md:flex hidden  !z-0 text-center items-center justify-center text-sm dark:text-gray-50/8 text-gray-200 font-bold cursor-move"
        >
          Déplacer
        </div>

        <ModalHeader className="pb-2 !pt-[00px] px-0">
          <Input
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            classNames={{
              base: "w-full",
              inputWrapper:
                "!py-0 !h-15 border !border-b-primary border-transparent border-dashed rounded-none   lg:z-40  min-h-0  dark:!bg-background  lg:mt-0 mt-0  bg-gray-50 hover:!bg-gray-100",
              input: "text-base",
            }}
            endContent={
              <Kbd className="hidden lg:inline-block dark:bg-primary/6 bg-white !shadow-none  px-1 !py-0.5 font-bold">
                ESC
              </Kbd>
            }
            placeholder="Rechercher des pages, projets, expériences, formations..."
            startContent={
              <SearchIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </ModalHeader>
        <ModalBody
          className="px-0 py-3 md:max-h-[500px] overflow-y-auto"
          style={{
            maxHeight: isKeyboardOpen
              ? `${viewportHeight - 110}px` // 150px pour le header et les marges
              : "60vh",
          }}
        >
          {filteredResults.length > 0 && (
            <ResearchResult
              closeSearch={closeSearch}
              items={filteredResults}
              router={router}
              selectedIndex={selectedIndex}
            />
          )}
          {recentSearches.length > 0 &&
            searchQuery.length == 0 &&
            filteredResults.length == 0 && (
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
          {filteredResults.length === 0 && recentSearches.length < 1 && (
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

export default SearchModal;
