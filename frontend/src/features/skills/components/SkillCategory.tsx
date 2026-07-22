"use client";

import {
  Server,
  Brain,
  Monitor,
  Database,
  Terminal,
  type LucideProps,
} from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import SkillBadge from "./SkillBadge";
import type { SkillCategoryData } from "../types";
import { SKILLS_ANIMATION } from "../constants";

const ICON_MAP: Record<string, React.ElementType<LucideProps>> = {
  Server,
  Brain,
  Monitor,
  Database,
  Terminal,
};

interface SkillCategoryProps {
  category: SkillCategoryData;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  const Icon = ICON_MAP[category.icon] ?? Server;

  return (
    <motion.div variants={SKILLS_ANIMATION.item} className="h-full">
      <GlassCard
        hoverEffect="lift"
        backdropBlur="sm"
        className="flex h-full flex-col gap-6 p-7"
      >
        {/* Icon + title */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
              "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
            )}
            aria-hidden="true"
          >
            <Icon className="size-5" />
          </div>
          <h3 className="text-base font-semibold text-white">{category.title}</h3>
        </div>

        {/* Skill badges */}
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label={`${category.title} skills`}
        >
          {category.skills.map((skill) => (
            <div key={skill} role="listitem">
              <SkillBadge label={skill} />
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
