"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import EducationCard from "./components/EducationCard";
import CertificationCard from "./components/CertificationCard";
import {
  EDUCATION_TITLE,
  EDUCATION_LABEL,
  EDUCATION_ANIMATION,
} from "./constants";

export default function Education() {
  return (
    <Section id="education" aria-label="Education and Certifications">
      <Container>
        <motion.div
          variants={EDUCATION_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-14"
        >
          {/* Section heading */}
          <motion.div
            variants={EDUCATION_ANIMATION.item}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {EDUCATION_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {EDUCATION_TITLE}
            </Heading>
          </motion.div>

          {/* Two-card grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <EducationCard />
            <CertificationCard />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
