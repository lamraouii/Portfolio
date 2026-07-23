"use client";

import { cn } from "@/lib/utils";
import type { FooterNavLink } from "../types";

interface FooterNavProps {
  links: FooterNavLink[];
}

export function FooterNav({ links }: FooterNavProps) {
  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-label="Footer navigation">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-2"
      >
        {links.map((link) => (
          <li key={link.sectionId}>
            <button
              onClick={() => scrollTo(link.sectionId)}
              className={cn(
                "text-sm text-muted-foreground transition-colors duration-200",
                "hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "focus-visible:ring-offset-2 rounded-sm"
              )}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
