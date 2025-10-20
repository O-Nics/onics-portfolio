"use client";
import { Chip } from "@heroui/chip";
import React from "react";

import DotAnimated from "@/components/animation/dot_animated";

declare global {
  interface Window {
    __lastClock?: string;
  }
}

// Formatter Paris: 24h, HH:mm:ss
const parisFormatter =
  typeof Intl !== "undefined"
    ? new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Paris",
      })
    : null;

function fmtParis(d: Date): string {
  // fallback simple si Intl absent (rare)
  if (!parisFormatter) {
    const n = (x: number) => (x < 10 ? `0${x}` : String(x));

    return `${n(d.getUTCHours())}:${n(d.getUTCMinutes())}:${n(d.getUTCSeconds())}`;
  }

  return parisFormatter.format(d); // ex: "13:05:09"
}

export default function ActualTime() {
  const initial =
    typeof window === "undefined"
      ? "\u00A0\u00A0:\u00A0\u00A0:\u00A0\u00A0" // placeholder stable côté SSR
      : (window.__lastClock ?? fmtParis(new Date()));

  const [display, setDisplay] = React.useState(initial);

  React.useEffect(() => {
    const tick = () => {
      const s = fmtParis(new Date());

      setDisplay(s);
      window.__lastClock = s; // persist pour la prochaine page
    };

    tick(); // init immédiate
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <Chip
      classNames={{
        base: "dark:bg-gray-50/5 bg-gray-50 border-0",
        content:
          "[font-feature-settings:'tnum'] font-sans font-bold text-gray-600 dark:text-gray-50/80 text-xs",
      }}
      startContent={<DotAnimated />}
    >
      <span suppressHydrationWarning>{display}</span>
    </Chip>
  );
}
