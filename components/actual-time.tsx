"use client";
import { Chip } from "@heroui/chip";
import React from "react";

import DotAnimated from "@/components/animation/dot_animated";

declare global {
  interface Window {
    __lastClock?: string;
    __lastClock12?: string;
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

const parisFormatter12h =
  typeof Intl !== "undefined"
    ? new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,

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

function fmtParis12(d: Date): string {
  // fallback simple si Intl absent (rare)
  if (!parisFormatter12h) {
    const n = (x: number) => (x < 10 ? `0s${x}` : String(x));

    return `${n(d.getUTCHours())}:${n(d.getUTCMinutes())})}`;
  }

  return parisFormatter12h.format(d); // ex: "13:05:09"
}

export default function ActualTime() {
  const initial =
    typeof window === "undefined"
      ? "\u00A0\u00A0:\u00A0\u00A0:\u00A0\u00A0" // placeholder stable côté SSR
      : (window.__lastClock ?? fmtParis(new Date()));

  const initial12 =
    typeof window === "undefined"
      ? "\u00A0\u00A0:\u00A0\u00A0:AM" // placeholder stable côté SSR
      : (window.__lastClock12 ?? fmtParis12(new Date()));
  const [display, setDisplay] = React.useState(initial);
  const [display12, setDisplay12] = React.useState(initial12);

  React.useEffect(() => {
    const tick = () => {
      const s = fmtParis(new Date());
      const s12 = fmtParis12(new Date());

      setDisplay(s);
      setDisplay12(s12);

      window.__lastClock = s; // persist pour la prochaine page
      window.__lastClock12 = s12;
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
      <span suppressHydrationWarning className="hidden lg:flex">
        {display}{" "}
      </span>
      <span suppressHydrationWarning className="flex lg:hidden">
        {display12}{" "}
      </span>
    </Chip>
  );
}
