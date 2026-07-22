"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import AboutCard from "./components/AboutCard";
import AboutStats from "./components/AboutStats";
import {
  ABOUT_TITLE,
  ABOUT_PARAGRAPHS,
  ABOUT_CARDS,
  ABOUT_ANIMATION,
} from "./constants";

export default function About() {
  return (
    <Section id="about" aria-label="About">
      <Container>
        <motion.div
          variants={ABOUT_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Left — text + stats */}
          <div className="flex flex-col gap-8">
            {/* Label + heading */}
            <motion.div variants={ABOUT_ANIMATION.item} className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Who I am
              </span>
              <Heading
                as="h2"
                size="h2"
                className="text-white"
              >
                {ABOUT_TITLE}
              </Heading>
            </motion.div>

            {/* Description paragraphs */}
            <motion.div
              variants={ABOUT_ANIMATION.item}
              className="space-y-4"
            >
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats */}
            <AboutStats />
          </div>

          {/* Right — cards */}
          <motion.div
            variants={ABOUT_ANIMATION.container}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4"
          >
            {ABOUT_CARDS.map((card) => (
              <AboutCard key={card.title} card={card} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
