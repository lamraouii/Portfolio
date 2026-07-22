"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import TimelineItem from "./components/TimelineItem";
import {
  EXPERIENCE_ENTRIES,
  EXPERIENCE_TITLE,
  EXPERIENCE_LABEL,
  EXPERIENCE_ANIMATION,
} from "./constants";

export default function Experience() {
  return (
    <Section id="experience" aria-label="Experience">
      <Container>
        <motion.div
          variants={EXPERIENCE_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-14"
        >
          {/* Section heading */}
          <motion.div
            variants={EXPERIENCE_ANIMATION.item}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {EXPERIENCE_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {EXPERIENCE_TITLE}
            </Heading>
          </motion.div>

          {/* Timeline */}
          <div
            className="max-w-2xl"
            role="list"
            aria-label="Experience timeline"
          >
            {EXPERIENCE_ENTRIES.map((entry, index) => (
              <div key={entry.title} role="listitem">
                <TimelineItem
                  entry={entry}
                  isLast={index === EXPERIENCE_ENTRIES.length - 1}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
