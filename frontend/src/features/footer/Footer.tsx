"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { FooterBrand } from "./components/FooterBrand";
import { FooterNav } from "./components/FooterNav";
import { FooterBottom } from "./components/FooterBottom";
import { FOOTER_NAV_LINKS, FOOTER_ANIMATION } from "./constants";

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-border/50 bg-background">
      <Container>
        <motion.div
          variants={FOOTER_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-10 py-14"
        >
          {/* Top row — brand + navigation */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <motion.div variants={FOOTER_ANIMATION.item}>
              <FooterBrand />
            </motion.div>

            <motion.div variants={FOOTER_ANIMATION.item}>
              <FooterNav links={FOOTER_NAV_LINKS} />
            </motion.div>
          </div>

          {/* Bottom row — copyright + socials + back to top */}
          <motion.div variants={FOOTER_ANIMATION.item}>
            <FooterBottom />
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
