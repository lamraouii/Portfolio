"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import DesktopTimeline from "./components/DesktopTimeline";
import MobileTimeline from "./components/MobileTimeline";
import {
  JOURNEY_TITLE,
  JOURNEY_LABEL,
  JOURNEY_ENTRIES,
  JOURNEY_ANIMATION,
} from "./constants";

/**
 * Academic Journey section.
 *
 * Desktop (lg+) : center vertical line, education LEFT, professional RIGHT.
 * Mobile (<lg)  : left vertical line, all cards to the RIGHT.
 *
 * Both layouts share JourneyCard and the same JOURNEY_ENTRIES data array.
 * The responsive split is handled entirely via Tailwind display utilities so
 * no JS breakpoint detection is needed.
 */
export default function Education() {
  return (
    <Section id="academic-journey" aria-label="Academic Journey">
      <Container>
        <motion.div
          variants={JOURNEY_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-14"
        >
          {/* Section heading */}
          <motion.div
            variants={JOURNEY_ANIMATION.item}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {JOURNEY_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {JOURNEY_TITLE}
            </Heading>

            {/* Desktop legend */}
            <div className="hidden items-center gap-6 lg:flex">
              <LegendItem color="education" label="Education — left" />
              <LegendItem color="professional" label="Professional — right" />
            </div>
          </motion.div>

          {/* Desktop timeline (lg+) */}
          <div className="hidden lg:block">
            <DesktopTimeline entries={JOURNEY_ENTRIES} />
          </div>

          {/* Mobile timeline (<lg) */}
          <div className="block lg:hidden">
            <MobileTimeline entries={JOURNEY_ENTRIES} />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── Legend helper (desktop only) ────────────────────────────────────────── */

function LegendItem({
  color,
  label,
}: {
  color: "education" | "professional";
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={
          color === "education"
            ? "size-2 rounded-full bg-blue-500"
            : "size-2 rounded-full bg-slate-500"
        }
        aria-hidden="true"
      />
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}
