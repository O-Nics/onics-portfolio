import { useState, useMemo } from "react";
import { GetStaticProps } from "next";

import DefaultLayout from "@/layouts/default";
import {
  getAllProjects,
  getAllCategories,
  getAllTechnologies,
  filterProjects,
} from "@/lib/projects";
import { Project } from "@/types/project";
import { title } from "@/components/primitives";
import { NavigationInPage } from "@/components/navigationInPage";
import { LinkNavigation } from "@/types";

interface ProjetsPageProps {
  projects: Project[];
  categories: string[];
  technologies: string[];
}

export default function ProjetsPage({
  projects,
  categories,
  technologies,
}: ProjetsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  // Filtrer les projets en temps réel
  const filteredProjects = useMemo(() => {
    return filterProjects({
      search: searchQuery,
      categories:
        selectedCategories.length > 0 ? selectedCategories : undefined,
      technologies:
        selectedTechnologies.length > 0 ? selectedTechnologies : undefined,
      status: selectedStatus.length > 0 ? selectedStatus : undefined,
    });
  }, [searchQuery, selectedCategories, selectedTechnologies, selectedStatus]);

  // Fonctions pour gérer les filtres
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedTechnologies([]);
    setSelectedStatus([]);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategories.length > 0 ||
    selectedTechnologies.length > 0 ||
    selectedStatus.length > 0;
  const leftLink: LinkNavigation = {
    name: "À propos de moi",
    href: "/a-propos",
  };
  const rightLink: LinkNavigation = {
    name: "Compétences",
    href: "/competences",
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8 py-8 md:py-10">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Mes projets</h1>
          <p className="text-lg text-default-600">
            Découvrez une sélection de mes réalisations en développement web et
            mobile.
          </p>
        </div>
      </section>
      <NavigationInPage left={leftLink} right={rightLink} />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<ProjetsPageProps> = async () => {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const technologies = getAllTechnologies();

  return {
    props: {
      projects,
      categories,
      technologies,
    },
  };
};
