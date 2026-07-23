"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import TechBadge from "./TechBadge";
import type { Project } from "../types";
import { PROJECTS_ANIMATION } from "../constants";
import ProjectImageCarousel from "@/features/projects/components/ProjectImageCarousel";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={PROJECTS_ANIMATION.item} className="h-full">
      <GlassCard
        hoverEffect="lift-glow"
        backdropBlur="sm"
        className="group flex h-full flex-col gap-6 p-7"
      >
          <div>
              <ProjectImageCarousel images={project.images} />
          </div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold leading-snug text-white">
            {project.name}
          </h3>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="shrink-0 rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-slate-500">
          {project.description}
        </p>

        {/* Tech badges */}
        <div
          className="flex flex-wrap gap-2"
          aria-label={`Technologies used in ${project.name}`}
        >
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
