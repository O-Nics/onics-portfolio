"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { backOut } from "framer-motion";

interface FadeHorizontalProps extends PropsWithChildren {
  delay?: number; // délai avant animation
  duration?: number; // durée de l'animation
  y?: number; // léger décalage vertical
  once?: boolean; // joue une seule fois ?
  className?: string; // style externe
  shouldAnimate?: boolean; // si false, pas d'animation
  left?: boolean; // true = arrive depuis la gauche, false = depuis la droite
  distance?: number; // distance horizontale du slide
}

export default function FadeHorizontal({
  children,
  delay = 0,
  duration = 0.6,
  y = 0,
  once = true,
  className,
  shouldAnimate = true,
  left = true,
  distance = 10, // par défaut 40px de translation horizontale
}: FadeHorizontalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Si pas monté, invisible uniquement si animation attendue, sinon visible
  if (!mounted)
    return (
      <span className={className} style={{ opacity: shouldAnimate ? 0 : 1 }}>
        {children}
      </span>
    );

  // si left = true → commence à gauche, sinon à droite
  const initialX = left ? -distance : distance;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={
          shouldAnimate
            ? { opacity: 0, x: initialX, y }
            : { opacity: 1, x: 0, y: 0 }
        }
        transition={{ duration, delay, ease: backOut }}
        viewport={{ once, amount: 0.2 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
