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
import { useSearch } from "@/features/search";
import { SearchResult } from "@/types";
import { useKeyboardHeight } from "@/hooks/useKeyboardHeight";
import { useTranslations } from "@/hooks/useTranslations";
import { MoveIcon } from "@/components/icons/ui/move";
import {
  getNavigationLinks,
  getNavigationQuickLinks,
} from "@/config/navigation";
import { getAllProjects } from "@/lib/projects";
import { getAllExperiences } from "@/lib/experiences";
import { getAllFormation } from "@/lib/formations";
import projectsDataRaw from "@/data/projects.json";
import educationDataRaw from "@/data/formations.json";
import { ProjectsDataRaw } from "@/types/project";
import { EducationDataRaw, ExperienceDataRaw } from "@/types";
import experienceDataRaw from "@/data/experiences.json";

// Interface pour stocker les recherches récentes avec les deux langues
interface StoredRecentSearch {
  id: string;
  title: { fr: string; en: string };
  description?: { fr: string; en: string };
  href: string;
  category: SearchResult["category"];
}

const SearchModal = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const router = useRouter();
  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });
  const { t, locale } = useTranslations();

  // Détection du clavier mobile
  const { isKeyboardOpen, viewportHeight } = useKeyboardHeight();

  // Charger les recherches récentes depuis localStorage avec la bonne langue
  useEffect(() => {
    const storage = localStorage.getItem("recentSearches");

    if (storage) {
      const storedRecent: StoredRecentSearch[] = JSON.parse(storage);

      // Transformer en fonction de la locale
      const localized: SearchResult[] = storedRecent.map((item) => ({
        id: item.id,
        title:
          typeof item.title === "string"
            ? item.title
            : item.title[locale as "fr" | "en"] || item.title.fr,
        description: item.description
          ? typeof item.description === "string"
            ? item.description
            : item.description[locale as "fr" | "en"] || item.description.fr
          : undefined,
        href: item.href,
        category: item.category,
      }));

      setRecentSearches(localized);
    }
  }, [locale]);

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

  // Préparer les données de recherche avec transformation selon la locale
  const searchData: SearchResult[] = useMemo(() => {
    const navigationLinks = getNavigationLinks(t);
    const quickLinks = getNavigationQuickLinks(t);

    const menuItems: SearchResult[] = navigationLinks.map((item, index) => ({
      id: `menu-${index}`,
      title: item.name,
      href: item.href,
      category: "menu" as const,
      icon: item.icon,
    }));

    const menuQuickItems: SearchResult[] = quickLinks.map((item, index) => ({
      id: `menu-quick-${index}`,
      title: item.name,
      href: item.href,
      category: "menu" as const,
      icon: item.icon,
    }));

    // Utiliser les fonctions de lib pour obtenir les données transformées
    const projects = getAllProjects(locale);
    const experiences = getAllExperiences(locale);
    const formations = getAllFormation(locale);

    const projectResults: SearchResult[] = projects.map((project) => ({
      id: `project-${project.slug}`,
      title: project.name,
      description: project.shortDescription,
      longDescription: project.longDescription,
      stack: project.stack,
      categories: project.categories,
      href: `/projet/${project.slug}`,
      category: "project" as const,
    }));

    const experienceResults: SearchResult[] = experiences.map((experience) => ({
      id: `experience-${experience.id}`,
      title: experience.title,
      description: experience.description,
      href: `/xp#${experience.id}`,
      school: experience.society || undefined,
      category: "experience" as const,
    }));

    const formationResults: SearchResult[] = formations.map((education) => ({
      id: `formation-${education.id}`,
      title: education.name,
      description: education.description,
      href: `/education#${education.id}`,
      school: education.school,
      level: education.level,
      category: "formation" as const,
    }));

    return [
      ...menuItems,
      ...menuQuickItems,
      ...projectResults,
      ...experienceResults,
      ...formationResults,
    ];
  }, [locale, t]);

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

  // Fonction helper pour trouver les données brutes et extraire fr/en
  const findRawData = useCallback((item: SearchResult) => {
    let titleFr = item.title;
    let titleEn = item.title;
    let descFr = item.description;
    let descEn = item.description;

    // Extraire les données brutes selon la catégorie
    if (item.category === "project") {
      const rawData = projectsDataRaw as ProjectsDataRaw;
      const rawProject = rawData.projects.find(
        (p) => `project-${p.slug}` === item.id,
      );

      if (rawProject) {
        titleFr = rawProject.title.fr;
        titleEn = rawProject.title.en;
        descFr = rawProject.shortDescription.fr;
        descEn = rawProject.shortDescription.en;
      }
    } else if (item.category === "experience") {
      const rawData = experienceDataRaw as ExperienceDataRaw;
      const rawExp = rawData.experiences.find(
        (e) => `experience-${e.id}` === item.id,
      );

      if (rawExp) {
        titleFr = rawExp.title.fr;
        titleEn = rawExp.title.en;
        descFr = rawExp.description.fr;
        descEn = rawExp.description.en;
      }
    } else if (item.category === "formation") {
      const rawData = educationDataRaw as EducationDataRaw;
      const rawForm = rawData.educations.find(
        (f) => `formation-${f.id}` === item.id,
      );

      if (rawForm) {
        titleFr = rawForm.name.fr;
        titleEn = rawForm.name.en;
        descFr = rawForm.description.fr;
        descEn = rawForm.description.en;
      }
    }

    return { titleFr, titleEn, descFr, descEn };
  }, []);

  // Fonction de navigation
  const handleNavigate = useCallback(
    (item: SearchResult) => {
      closeSearch();

      // Récupérer les versions fr/en
      const { titleFr, titleEn, descFr, descEn } = findRawData(item);

      const storage = localStorage.getItem("recentSearches");
      let recentSearches: StoredRecentSearch[] = storage
        ? JSON.parse(storage)
        : [];

      // Créer l'entrée avec les deux langues
      const entry: StoredRecentSearch = {
        id: item.id,
        title: { fr: titleFr, en: titleEn },
        description: descFr && descEn ? { fr: descFr, en: descEn } : undefined,
        href: item.href,
        category: item.category,
      };

      recentSearches.unshift(entry);

      // De-duplicate by id and keep only 10 most recent
      recentSearches = recentSearches
        .filter((v, i, arr) => arr.findIndex((x) => x.id === v.id) === i)
        .slice(0, 10);

      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

      // Gérer la navigation avec ancre
      const hashMatch = item.href.match(/#(.+)$/);
      const hash = hashMatch ? hashMatch[1] : null;

      if (hash) {
        // Si l'URL contient une ancre
        void router.push(item.href).then(() => {
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
        void router.push(item.href);
      }
    },
    [closeSearch, router, findRawData],
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
          className="h-6 my-2 ml-2 mr-10 p-3 dark:bg-gray-50/10 bg-gray-100  rounded-full md:flex hidden w-10 !z-0 text-center items-center justify-center text-sm dark:text-gray-50/8 text-gray-200 font-bold cursor-move"
        >
          <MoveIcon className="dark:text-white text-gray-500" />
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
            placeholder={t.modal.search}
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
                <div className="pl-3 font-bold">
                  {t.modal.recent || "Récent"}
                </div>
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
                <p>
                  {t.modal.noResults} &#34;{searchQuery}&#34;
                </p>
              )}
              {searchQuery.length == 0 && recentSearches.length == 0 && (
                <p>{t.modal.noRecent}</p>
              )}
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
