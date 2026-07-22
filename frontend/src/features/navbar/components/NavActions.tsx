"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/button";
import type { SocialLink } from "../types";
import { RESUME_URL } from "../constants";

const ICON_MAP: Record<string, React.ComponentType> = {
  GitHub: () => <LuGithub size={16} />,
  LinkedIn: () => <LuLinkedin size={16} />,
};

interface NavActionsProps {
  socialLinks: SocialLink[];
  className?: string;
}

export function NavActions({ socialLinks, className }: NavActionsProps) {
  return (
    <motion.div
      className={cn("flex items-center gap-1", className)}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      {socialLinks.map((link) => {
        const Icon = ICON_MAP[link.label];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${link.label} profile`}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md",
              "text-muted-foreground hover:text-foreground hover:bg-accent",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            {Icon && <Icon />}
          </a>
        );
      })}

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume"
      >
        <Button variant="outline" size="sm" className="gap-1.5 ml-1">
          <LuDownload size={14} aria-hidden="true" />
          Resume
        </Button>
      </a>
    </motion.div>
  );
}
