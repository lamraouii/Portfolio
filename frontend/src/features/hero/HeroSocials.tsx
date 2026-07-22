"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { HERO_SOCIALS } from "./constants";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-1">
      {HERO_SOCIALS.map(({ label, href }) => {
        const Icon = SOCIAL_ICONS[label];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3 py-2",
              "text-sm text-slate-500 transition-colors duration-200",
              "hover:bg-white/5 hover:text-slate-300"
            )}
          >
            <Icon className="size-5" />
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}
