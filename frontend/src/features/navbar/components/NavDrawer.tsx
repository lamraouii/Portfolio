"use client";

import { useState } from "react";
import * as Dialog from "@base-ui/react/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  Github01Icon,
  LinkedinIcon,
  FileDownloadIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import type { NavLink, SocialLink } from "../types";
import { RESUME_URL } from "../constants";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

interface NavDrawerProps {
  links: NavLink[];
  socialLinks: SocialLink[];
  activeId: string;
}

const ICON_MAP: Record<string, React.ComponentType> = {
  GitHub: () => <HugeiconsIcon icon={Github01Icon} size={18} />,
  LinkedIn: () => <HugeiconsIcon icon={LinkedinIcon} size={18} />,
};

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.2 },
  }),
};

export function NavDrawer({ links, socialLinks, activeId }: NavDrawerProps) {
  const [open, setOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(sectionId), 200);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden",
              "text-foreground hover:bg-accent transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          />
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HugeiconsIcon icon={Cancel01Icon} size={20} aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HugeiconsIcon icon={Menu01Icon} size={20} aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

        <Dialog.Popup
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-72 flex flex-col",
            "bg-background/95 backdrop-blur-md border-l border-border",
            "shadow-xl focus:outline-none",
            "data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
            "transition-transform duration-300 ease-in-out"
          )}
          aria-label="Navigation menu"
        >
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>

          <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
            <span className="text-sm font-medium text-muted-foreground">Menu</span>
            <Dialog.Close
              render={
                <button
                  aria-label="Close navigation menu"
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-md",
                    "text-muted-foreground hover:text-foreground hover:bg-accent",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                />
              }
            >
              <HugeiconsIcon icon={Cancel01Icon} size={16} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
            <ul role="list" className="flex flex-col gap-1">
              {links.map((link, index) => {
                const isActive = activeId === link.sectionId;
                return (
                  <motion.li
                    key={link.sectionId}
                    custom={index}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => handleNavClick(link.sectionId)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive
                          ? "text-foreground bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                      )}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-border px-4 py-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
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
                      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className={cn(
                "inline-flex h-9 items-center justify-center gap-2 px-4 rounded-md",
                "text-sm font-medium border border-border bg-input/30",
                "hover:bg-input/50 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <HugeiconsIcon icon={FileDownloadIcon} size={15} aria-hidden="true" />
              Resume
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
