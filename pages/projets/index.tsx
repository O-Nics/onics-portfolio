import { useState, useMemo } from "react";
import { GetStaticProps } from "next";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";
import { ProjectCard } from "@/components/project-card";
import {
  getAllProjects,
  getAllCategories,
  getAllTechnologies,
  filterProjects,
} from "@/lib/projects";
import { Project } from "@/types/project";
import { title } from "@/components/primitives";
import { SearchIcon } from "@/components/icons";

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
    []
  );
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  // Filtrer les projets en temps réel
  const filteredProjects = useMemo(() => {
    return filterProjects({
      search: searchQuery,
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
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
        : [...prev, category]
    );
  };

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
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

        {/* Barre de recherche */}
        <div className="w-full">
          <Input
            isClearable
            placeholder="Rechercher un projet..."
            size="lg"
            startContent={<SearchIcon />}
            value={searchQuery}
            onClear={() => setSearchQuery("")}
            onValueChange={setSearchQuery}
          />
        </div>

        {/* Filtres */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filtres</h2>
            {hasActiveFilters && (
              <Button size="sm" variant="light" onPress={clearFilters}>
                Réinitialiser
              </Button>
            )}
          </div>

          {/* Catégories */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Catégories</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Chip
                  key={category}
                  className="cursor-pointer"
                  color={
                    selectedCategories.includes(category) ? "primary" : "default"
                  }
                  variant={
                    selectedCategories.includes(category) ? "solid" : "flat"
                  }
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Chip>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  className="cursor-pointer"
                  color={
                    selectedTechnologies.includes(tech) ? "secondary" : "default"
                  }
                  variant={
                    selectedTechnologies.includes(tech) ? "solid" : "flat"
                  }
                  onClick={() => toggleTechnology(tech)}
                >
                  {tech}
                </Chip>
              ))}
            </div>
          </div>

          {/* Statut */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Statut</p>
            <div className="flex flex-wrap gap-2">
              {["completed", "in-progress", "archived"].map((status) => (
                <Chip
                  key={status}
                  className="cursor-pointer"
                  color={selectedStatus.includes(status) ? "success" : "default"}
                  variant={selectedStatus.includes(status) ? "solid" : "flat"}
                  onClick={() => toggleStatus(status)}
                >
                  {status === "completed"
                    ? "Terminé"
                    : status === "in-progress"
                      ? "En cours"
                      : "Archivé"}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">
              {filteredProjects.length} projet
              {filteredProjects.length > 1 ? "s" : ""}
            </h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-default-600">
                Aucun projet ne correspond à vos critères.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
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
