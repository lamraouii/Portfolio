"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavLink } from "../types";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

interface NavLinksProps {
  links: NavLink[];
  activeId: string;
}

export function NavLinks({ links, activeId }: NavLinksProps) {
  const { scrollTo } = useSmoothScroll();

  return (
    <nav aria-label="Main navigation">
      <ul role="list" className="flex items-center gap-0.5">
        {links.map((link, index) => {
          const isActive = activeId === link.sectionId;

          return (
            <motion.li
              key={link.sectionId}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <button
                onClick={() => scrollTo(link.sectionId)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-md bg-foreground/8 border border-border/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{link.label}</span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
