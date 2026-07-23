"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/layout";
import { Heading } from "@/components/common/heading";
import CertificationCard from "./components/CertificationCard";
import VolunteeringSection from "./components/VolunteeringSection";
import {
  EDUCATION_TITLE,
  EDUCATION_LABEL,
  EDUCATION_ANIMATION,
} from "./constants";

export default function Education() {
  return (
    <Section id="education" aria-label="Certifications and Volunteering">
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
            className="flex flex-col gap-4 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {EDUCATION_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {EDUCATION_TITLE}
            </Heading>
          </motion.div>

          {/* Centered Certification Card (taking full width or sharing) */}
          <div className="mx-auto w-full max-w-4xl">
            <CertificationCard />
          </div>

          {/* Volunteering Section */}
          <VolunteeringSection />
        </motion.div>
      </Container>
    </Section>
  );
}
