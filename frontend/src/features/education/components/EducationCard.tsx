"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import { EDUCATION_ENTRIES, EDUCATION_ANIMATION } from "../constants";

export default function EducationCard() {
  return (
    <motion.div variants={EDUCATION_ANIMATION.item} className="h-full">
      <GlassCard
        hoverEffect="lift"
        backdropBlur="sm"
        className="flex h-full flex-col gap-7 p-7"
      >
        {/* Card header */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
              "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
            )}
            aria-hidden="true"
          >
            <GraduationCap className="size-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Education</h3>
        </div>

        {/* Entries */}
        <ul className="flex flex-col gap-6" aria-label="Education entries">
          {EDUCATION_ENTRIES.map((entry) => (
            <li key={entry.degree} className="flex flex-col gap-1.5">
              {/* Period */}
              <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-500/70">
                {entry.period}
              </span>

              {/* Degree */}
              <p className="text-base font-semibold leading-snug text-white">
                {entry.degree}
              </p>

              {/* Institution */}
              <p className="text-sm font-medium text-slate-500">
                {entry.institution}
              </p>

              {/* Description */}
              {entry.description && (
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {entry.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
