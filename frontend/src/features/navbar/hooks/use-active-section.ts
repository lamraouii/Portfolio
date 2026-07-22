"use client";

import { useState, useEffect } from "react";
import type { NavLink } from "../types";

export function useActiveSection(links: NavLink[]): string {
  const [activeId, setActiveId] = useState<string>(links[0]?.sectionId ?? "");

  useEffect(() => {
    const visibilityMap: Record<string, number> = {};

    const pickMostVisible = () => {
      const sorted = Object.entries(visibilityMap).sort(([, a], [, b]) => b - a);
      if (sorted[0]) setActiveId(sorted[0][0]);
    };

    const observers = links.map(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[sectionId] = entry.intersectionRatio;
          pickMostVisible();
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "-64px 0px 0px 0px",
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [links]);

  return activeId;
}
