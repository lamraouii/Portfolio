"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "../types";
import { KIND_LABEL, EXPERIENCE_ANIMATION } from "../constants";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <motion.div
      variants={EXPERIENCE_ANIMATION.item}
      className="relative grid grid-cols-[24px_1fr] gap-x-6"
    >
      {/* Timeline spine + dot column */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={cn(
            "relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full ring-2 ring-background",
            entry.current
              ? "bg-blue-400 ring-blue-400/30"
              : "bg-slate-700"
          )}
          aria-hidden="true"
        >
          {entry.current && (
            <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-40" />
          )}
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-white/8" aria-hidden="true" />
        )}
      </div>

      {/* Content column */}
      <div className={cn("pb-12", isLast && "pb-0")}>
        {/* Kind badge + period */}
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              entry.kind === "work"
                ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                : "border-white/10 bg-white/5 text-slate-500"
            )}
          >
            {KIND_LABEL[entry.kind]}
          </span>
          <span className="text-xs text-slate-600">{entry.period}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold leading-snug text-white">
          {entry.title}
        </h3>

        {/* Organization */}
        <p className="mt-1 text-sm font-medium text-slate-500">
          {entry.organization}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {entry.description}
        </p>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="list"
            aria-label={`Technologies for ${entry.title}`}
          >
            {entry.tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
