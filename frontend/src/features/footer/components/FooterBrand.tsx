"use client";

import { cn } from "@/lib/utils";
import { FOOTER_OWNER, FOOTER_TAGLINE } from "../constants";

export function FooterBrand() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "w-fit text-lg font-bold tracking-tight",
          "rounded-sm focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity",
          "hover:opacity-80"
        )}
      >
        <span className="text-foreground">{FOOTER_OWNER.split(" ")[0]}</span>
        <span className="text-blue-400">.</span>
      </button>

      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
        {FOOTER_TAGLINE}
      </p>
    </div>
  );
}
