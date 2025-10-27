import { useState, useEffect } from "react";

/**
 * Hook pour détecter la hauteur du clavier virtuel sur mobile
 * Utilise l'API visualViewport pour calculer précisément l'espace occupé par le clavier
 *
 * @returns {Object} - { keyboardHeight, isKeyboardOpen, viewportHeight }
 * - keyboardHeight: Hauteur du clavier en pixels
 * - isKeyboardOpen: Boolean indiquant si le clavier est ouvert
 * - viewportHeight: Hauteur visible du viewport (après réduction du clavier)
 */
export function useKeyboardHeight() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Vérifier si l'API visualViewport est disponible
    if (typeof window === "undefined" || !window.visualViewport) {
      // Fallback pour les navigateurs qui ne supportent pas visualViewport
      setViewportHeight(window.innerHeight);
      return;
    }

    const visualViewport = window.visualViewport;
    const documentHeight = document.documentElement.clientHeight;

    const updateKeyboardHeight = () => {
      // Hauteur visible du viewport (réduite quand le clavier est ouvert)
      const currentViewportHeight = visualViewport.height;

      // Calcul de la hauteur du clavier
      // documentHeight = hauteur totale de l'écran
      // visualViewport.height = hauteur visible (écran - clavier)
      const calculatedKeyboardHeight = documentHeight - currentViewportHeight;

      setViewportHeight(currentViewportHeight);
      setKeyboardHeight(Math.max(0, calculatedKeyboardHeight));

      // Le clavier est considéré ouvert si la différence est > 150px
      // (pour éviter les faux positifs avec les barres d'outils)
      setIsKeyboardOpen(calculatedKeyboardHeight > 150);
    };

    // Initialisation
    updateKeyboardHeight();

    // Écouter les changements de viewport (ouverture/fermeture du clavier)
    visualViewport.addEventListener("resize", updateKeyboardHeight);
    visualViewport.addEventListener("scroll", updateKeyboardHeight);

    return () => {
      visualViewport.removeEventListener("resize", updateKeyboardHeight);
      visualViewport.removeEventListener("scroll", updateKeyboardHeight);
    };
  }, []);

  return {
    keyboardHeight,
    isKeyboardOpen,
    viewportHeight,
  };
}