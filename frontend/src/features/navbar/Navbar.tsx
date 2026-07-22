"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { NAV_LINKS, SOCIAL_LINKS } from "./constants";
import { useScrolled } from "./hooks/use-scrolled";
import { useActiveSection } from "./hooks/use-active-section";
import { NavLogo } from "./components/NavLogo";
import { NavLinks } from "./components/NavLinks";
import { NavActions } from "./components/NavActions";
import { NavDrawer } from "./components/NavDrawer";

export function Navbar() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(NAV_LINKS);

  return (
    <motion.header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16",
        "transition-[background-color,border-color,backdrop-filter] duration-300 ease-in-out",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent border-b border-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Container className="h-full flex items-center justify-between gap-4">
        <NavLogo />

        <div className="hidden md:flex flex-1 justify-center">
          <NavLinks links={NAV_LINKS} activeId={activeId} />
        </div>

        <NavActions socialLinks={SOCIAL_LINKS} className="hidden md:flex" />

        <NavDrawer
          links={NAV_LINKS}
          socialLinks={SOCIAL_LINKS}
          activeId={activeId}
        />
      </Container>
    </motion.header>
  );
}
