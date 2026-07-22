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
      className="relative grid grid-cols-[20px_1fr] gap-x-6"
    >
      {/* Timeline spine + dot column */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={cn(
            "relative z-10 mt-1 size-3 shrink-0 rounded-full ring-2 ring-background",
            entry.current
              ? "bg-blue-400 ring-blue-400/30"
              : "bg-slate-600"
          )}
          aria-hidden="true"
        >
          {entry.current && (
            <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-40" />
          )}
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-white/10" aria-hidden="true" />
        )}
      </div>

      {/* Content column */}
      <div className={cn("pb-10", isLast && "pb-0")}>
        {/* Kind badge + period */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
            {KIND_LABEL[entry.kind]}
          </span>
          <span className="text-xs text-slate-600">{entry.period}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-white leading-snug">
          {entry.title}
        </h3>

        {/* Organization */}
        <p className="mt-0.5 text-xs font-medium text-slate-500">
          {entry.organization}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {entry.description}
        </p>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div
            className="mt-4 flex flex-wrap gap-1.5"
            role="list"
            aria-label={`Technologies for ${entry.title}`}
          >
            {entry.tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-500"
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
