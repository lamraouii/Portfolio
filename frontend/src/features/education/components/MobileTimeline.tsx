"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { JourneyEntry } from "../types";
import JourneyCard from "./JourneyCard";
import { JOURNEY_ANIMATION } from "../constants";

interface MobileTimelineProps {
  entries: JourneyEntry[];
}

/**
 * Mobile layout — single vertical line on the LEFT side.
 * Every entry renders as a card to the RIGHT of the dot.
 *
 * Geometry (container-relative):
 *   Line center  : left = DOT_CENTER_PX = 11px
 *   Dot column   : width = DOT_COL_W = 22px  →  dot center at 11px ✓
 *   Connector    : 16px wide, aligns dot ring-edge to card left edge
 *   Card         : flex-1, fills all remaining width
 *
 * Dot vertical alignment: mt-5 (20px) pushes the dot down to roughly the
 * first content line of the card (card has p-5 = 20px top padding).
 */

const DOT_COL_W = 22; // px — column containing the dot; its center = line x

export default function MobileTimeline({ entries }: MobileTimelineProps) {
  return (
    <div className="relative">
      {/* Left vertical line — centered at DOT_COL_W / 2 */}
      <div
        style={{ left: DOT_COL_W / 2 }}
        className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <ol className="flex flex-col gap-8" aria-label="Academic journey timeline">
        {entries.map((entry) => (
          <motion.li
            key={entry.id}
            variants={JOURNEY_ANIMATION.item}
            className="flex items-start"
          >
            {/* Dot column: fixed width so the dot center always sits on the line */}
            <div
              style={{ width: DOT_COL_W }}
              className="flex shrink-0 justify-center"
            >
              <div
                className={cn(
                  "relative z-10 mt-5 size-3 rounded-full ring-4",
                  entry.current
                    ? "bg-blue-500 ring-blue-500/25"
                    : "bg-slate-600 ring-slate-600/25"
                )}
                aria-hidden="true"
              >
                {entry.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-40" />
                )}
              </div>
            </div>

            {/* Horizontal connector — bridges ring edge → card */}
            <div
              className="mt-[26px] h-px w-4 shrink-0 bg-gradient-to-r from-white/20 to-white/5"
              aria-hidden="true"
            />

            {/* Card — fills all remaining horizontal space */}
            <JourneyCard entry={entry} className="min-w-0 flex-1" />
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
