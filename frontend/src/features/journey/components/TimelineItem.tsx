"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "../types";

interface TimelineCardProps {
  entry: TimelineEntry;
  side: "left" | "right";
  kind: "education" | "internship";
}

const KIND_COLORS = {
  education: {
    period: "bg-blue-500/8 text-blue-400/80",
    org: "text-blue-400/70",
    current: "bg-blue-500/10 text-blue-400",
    border: "border-blue-500/30 ring-1 ring-blue-500/15",
    tag: "hover:border-blue-500/20 hover:text-blue-300/80",
  },
  internship: {
    period: "bg-emerald-500/8 text-emerald-400/80",
    org: "text-emerald-400/70",
    current: "bg-emerald-500/10 text-emerald-400",
    border: "border-emerald-500/30 ring-1 ring-emerald-500/15",
    tag: "hover:border-emerald-500/20 hover:text-emerald-300/80",
  },
} as const;

export default function TimelineCard({ entry, side, kind }: TimelineCardProps) {
  const isLeft = side === "left";
  const colors = KIND_COLORS[kind];

  return (
    <article
      className={cn(
        "w-full rounded-2xl border bg-white/5 p-5 backdrop-blur-sm",
        "transition-all duration-300 hover:bg-white/[0.08]",
        entry.current ? colors.border : "border-white/8 hover:border-white/15"
      )}
    >
      {/* Period + title row */}
      <div
        className={cn(
          "mb-2.5 flex flex-wrap items-start justify-between gap-2",
          isLeft && "md:flex-row-reverse"
        )}
      >
        <h3 className="text-base font-bold leading-tight text-foreground">
          {entry.title}
          {entry.current && (
            <span
              className={cn(
                "ml-2 inline-flex items-center rounded-full px-1.5 py-0.5",
                "text-[9px] font-semibold uppercase tracking-wider",
                colors.current
              )}
            >
              Current
            </span>
          )}
        </h3>

        <span
          className={cn(
            "shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold whitespace-nowrap",
            colors.period
          )}
        >
          {entry.period}
        </span>
      </div>

      {/* Organization */}
      <p className={cn("mb-3 text-sm font-medium", colors.org)}>
        {entry.organization}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {entry.description}
      </p>

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div
          className={cn(
            "mt-4 flex flex-wrap gap-1.5",
            isLeft && "md:justify-end"
          )}
        >
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-md border border-white/5 bg-white/5 px-2 py-0.5",
                "text-[10px] font-medium text-slate-400 transition-colors",
                colors.tag
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
