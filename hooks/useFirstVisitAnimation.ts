"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Hook pour gérer les animations de première visite
 * @param key - Clé unique pour le sessionStorage (permet d'avoir différentes animations pour différentes sections)
 * @returns shouldAnimate - true si l'animation doit être jouée, false sinon
 */
export function useFirstVisitAnimation(key: string = "first-visit-animated") {
  const prefersReducedMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) return;

    const storageKey = key;
    const alreadyAnimated = sessionStorage.getItem(storageKey) === "1";

    if (!alreadyAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem(storageKey, "1");
    }
  }, [key, prefersReducedMotion]);

  return { shouldAnimate, mounted };
}
