"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import SkillCategory from "./components/SkillCategory";
import {
  SKILL_CATEGORIES,
  SKILLS_TITLE,
  SKILLS_LABEL,
  SKILLS_ANIMATION,
} from "./constants";

export default function Skills() {
  return (
    <Section id="skills" aria-label="Skills and Technologies">
      <Container>
        <motion.div
          variants={SKILLS_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-12"
        >
          {/* Section heading */}
          <motion.div
            variants={SKILLS_ANIMATION.item}
            className="flex flex-col gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {SKILLS_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {SKILLS_TITLE}
            </Heading>
          </motion.div>

          {/* Category grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CATEGORIES.map((category) => (
              <SkillCategory key={category.title} category={category} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
