"use client";

import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import type { JourneyEntry } from "../types";

interface JourneyCardProps {
  entry: JourneyEntry;
  /** Extra classes forwarded to GlassCard wrapper (e.g. flex-1, max-w-none). */
  className?: string;
}

/**
 * Shared glassmorphism card for both the desktop center-timeline and the
 * mobile left-timeline. Never renders its own dot or connector.
 */
export default function JourneyCard({ entry, className }: JourneyCardProps) {
  return (
    <GlassCard
      backdropBlur="sm"
      hoverEffect="lift"
      className={cn("w-full p-5", className)}
    >
      {/* Top row: meta labels + current badge */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-500">
            {entry.category === "education" ? "Education" : "Professional"}
          </span>
          <h3 className="text-sm font-bold leading-snug text-white">
            {entry.title}
          </h3>
          <p className="text-xs text-slate-400">{entry.institution}</p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span className="whitespace-nowrap text-[10px] text-slate-500">
            {entry.period}
          </span>
          {entry.current && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400 ring-1 ring-blue-500/20">
              <span className="size-1.5 animate-pulse rounded-full bg-blue-400" />
              Current
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {entry.description && (
        <p className="mb-3 text-xs leading-relaxed text-slate-500">
          {entry.description}
        </p>
      )}

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400 ring-1 ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
