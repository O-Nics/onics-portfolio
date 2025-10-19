"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

interface FadeUpProps extends PropsWithChildren {
  delay?: number; // délai avant animation
  duration?: number; // durée de l'animation
  y?: number; // distance de déplacement (px)
  once?: boolean; // joue une seule fois ?
  className?: string; // style externe
  shouldAnimate?: boolean; // si false, pas d'animation (affichage direct)
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.4,
  y = 24,
  once = true,
  className,
  shouldAnimate = true,
}: FadeUpProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Si pas encore monté côté client, afficher invisible pour éviter le flash
  // SAUF si shouldAnimate = false (pages suivantes), alors garder visible
  if (!mounted) {
    return (
      <div className={className} style={{ opacity: shouldAnimate ? 0 : 1 }}>
        {children}
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={shouldAnimate ? { opacity: 0, y } : { opacity: 1, y: 0 }}
        transition={{ duration, delay, ease: "backOut" }}
        viewport={{ once, margin: "0px 0px -10% 0px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
