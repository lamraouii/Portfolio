"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { JourneyEntry } from "../types";
import JourneyCard from "./JourneyCard";
import { JOURNEY_ANIMATION } from "../constants";

interface DesktopTimelineProps {
  entries: JourneyEntry[];
}

/** Dot centered on the vertical center-line. Blue + ping for current entries. */
function TimelineDot({ current }: { current?: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 size-3.5 shrink-0 rounded-full ring-4",
        current
          ? "bg-blue-500 ring-blue-500/25"
          : "bg-slate-600 ring-slate-600/25"
      )}
      aria-hidden="true"
    >
      {current && (
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-40" />
      )}
    </div>
  );
}

/**
 * Short horizontal bridge from a card edge to the center dot.
 * w-8 gives a comfortable 32px gap between card and dot.
 */
function Connector() {
  return (
    <div
      className="h-px w-8 shrink-0 bg-gradient-to-r from-white/5 to-white/20"
      aria-hidden="true"
    />
  );
}

/**
 * Desktop layout — one continuous center vertical line, education entries on
 * the LEFT, professional entries on the RIGHT. Each row uses a 3-column grid
 * so the dot is always pinned at the exact horizontal center.
 *
 * Grid columns: [1fr  |  dot  |  1fr]
 *   Left cell  → flex justify-end   → card right-aligns toward the dot
 *   Center cell→ dot
 *   Right cell → flex justify-start → card left-aligns away from the dot
 */
export default function DesktopTimeline({ entries }: DesktopTimelineProps) {
  return (
    <div className="relative">
      {/* Continuous center vertical line */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <ol className="flex flex-col gap-10" aria-label="Academic journey timeline">
        {entries.map((entry) => (
          <motion.li
            key={entry.id}
            variants={JOURNEY_ANIMATION.item}
            className="grid grid-cols-[1fr_auto_1fr] items-center"
          >
            {/* LEFT slot — education only */}
            <div className="flex items-center justify-end">
              {entry.category === "education" && (
                <>
                  {/* Card capped at 420px so it never stretches; flex-end anchors it to the right */}
                  <div className="max-w-[420px] flex-1">
                    <JourneyCard entry={entry} />
                  </div>
                  <Connector />
                </>
              )}
            </div>

            {/* CENTER — always a dot */}
            <TimelineDot current={entry.current} />

            {/* RIGHT slot — professional only */}
            <div className="flex items-center justify-start">
              {entry.category === "professional" && (
                <>
                  <Connector />
                  <div className="max-w-[420px] flex-1">
                    <JourneyCard entry={entry} />
                  </div>
                </>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
