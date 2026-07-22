"use client";

import { ArrowRight, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/common/button";
import { cn } from "@/lib/utils";
import { HERO_BUTTONS } from "./constants";

export default function HeroButtons() {
  const [primary, secondary] = HERO_BUTTONS;

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      {/* View Projects — scroll to section */}
      <Button
        size="lg"
        variant={primary.variant}
        className="gap-2 px-6"
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {primary.label}
        <ArrowRight className="size-4" />
      </Button>

      {/* Download CV — anchor rendered with button styles */}
      <a
        href={secondary.href}
        download
        className={cn(
          buttonVariants({ variant: secondary.variant, size: "lg" }),
          "gap-2 px-6"
        )}
      >
        <Download className="size-4" />
        {secondary.label}
      </a>
    </div>
  );
}
