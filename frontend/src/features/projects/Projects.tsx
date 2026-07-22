"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import ProjectCard from "./components/ProjectCard";
import {
  PROJECTS,
  PROJECTS_TITLE,
  PROJECTS_LABEL,
  PROJECTS_ANIMATION,
} from "./constants";

export default function Projects() {
  return (
    <Section id="projects" aria-label="Projects">
      <Container>
        <motion.div
          variants={PROJECTS_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-14"
        >
          {/* Section heading */}
          <motion.div
            variants={PROJECTS_ANIMATION.item}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {PROJECTS_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {PROJECTS_TITLE}
            </Heading>
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
