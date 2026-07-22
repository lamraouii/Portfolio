"use client";

import { motion } from "framer-motion";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export function NavLogo() {
  const { scrollTo } = useSmoothScroll();

  return (
    <motion.button
      onClick={() => scrollTo("hero")}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="text-lg font-bold tracking-tight rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Scroll to top"
    >
      <span className="text-foreground">Ismail</span>
      <span className="text-blue-400">.</span>
    </motion.button>
  );
}
