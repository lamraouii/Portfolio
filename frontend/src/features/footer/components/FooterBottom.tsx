"use client";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { FOOTER_OWNER } from "../constants";
import { FooterSocials } from "./FooterSocials";
import { FOOTER_SOCIAL_LINKS } from "../constants";

export function FooterBottom() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 pt-8",
        "border-t border-border/50",
        "sm:flex-row sm:items-center sm:justify-between"
      )}
    >
      <p className="text-sm text-muted-foreground">
        © {year}{" "}
        <span className="text-foreground/80 font-medium">{FOOTER_OWNER}</span>
        . All rights reserved.
      </p>

      <div className="flex items-center gap-2">
        <FooterSocials links={FOOTER_SOCIAL_LINKS} />

        <div
          aria-hidden="true"
          className="mx-1 h-4 w-px bg-border/60 hidden sm:block"
        />

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-md px-3",
            "text-sm text-muted-foreground transition-colors duration-200",
            "hover:text-foreground hover:bg-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2"
          )}
        >
          <ArrowUp className="size-3.5" aria-hidden="true" />
          Back to top
        </button>
      </div>
    </div>
  );
}
