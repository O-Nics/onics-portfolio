/**
 * Search Feature
 *
 * Fonctionnalité de recherche globale du portfolio.
 * Inclut la modal de recherche, le contexte et les composants associés.
 */

// Components
export { default as SearchModal } from "./components/search-modal";
export { ResearchResult as SearchResult } from "./components/search-result";

// Context
export { SearchProvider, useSearch } from "./contexts/search-context";
