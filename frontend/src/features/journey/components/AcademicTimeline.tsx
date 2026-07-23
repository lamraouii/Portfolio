"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import TimelineCard from "./TimelineItem";
import {
  EDUCATION_ENTRIES,
  INTERNSHIP_ENTRIES,
  JOURNEY_ANIMATION,
} from "../constants";
import type { TimelineEntry } from "../types";

interface TimelineRow {
  education?: TimelineEntry;
  internship?: TimelineEntry;
}

function buildRows(): TimelineRow[] {
  const max = Math.max(EDUCATION_ENTRIES.length, INTERNSHIP_ENTRIES.length);
  return Array.from({ length: max }, (_, i) => ({
    education: EDUCATION_ENTRIES[i],
    internship: INTERNSHIP_ENTRIES[i],
  }));
}

const ROWS = buildRows();

// Mobile: flatten row-by-row so paired items stay visually close
const MOBILE_ITEMS = ROWS.flatMap((row) => {
  const items: Array<{ entry: TimelineEntry; kind: "education" | "internship" }> = [];
  if (row.education) items.push({ entry: row.education, kind: "education" });
  if (row.internship) items.push({ entry: row.internship, kind: "internship" });
  return items;
});

// Dot color helpers
const dotColor = (kind: "education" | "internship") =>
  kind === "education"
    ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.55)]"
    : "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.55)]";

const ringColor = (kind: "education" | "internship") =>
  kind === "education" ? "border-blue-500/30" : "border-emerald-500/30";

export default function AcademicTimeline() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          DESKTOP — true two-column, center line (md+)
      ═══════════════════════════════════════════════════════ */}
      <div className="relative hidden md:block">
        {/*
          Center vertical line.
          grid-cols-[1fr_48px_1fr] ⟹ center of the 48px column = 50% of container.
          absolute left-1/2 -translate-x-1/2 lands on exactly the same axis.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border/60 to-transparent"
        />

        <motion.div
          variants={JOURNEY_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_48px_1fr] items-center">
            <div className="flex items-center justify-end gap-2 pr-6">
              <span className="text-sm font-semibold text-blue-400">Education</span>
              <GraduationCap className="size-4 text-blue-400" aria-hidden="true" />
            </div>
            {/* dot column — intentionally empty header */}
            <div />
            <div className="flex items-center gap-2 pl-6">
              <Briefcase className="size-4 text-emerald-400" aria-hidden="true" />
              <span className="text-sm font-semibold text-emerald-400">Professional</span>
            </div>
          </div>

          {/* Timeline rows */}
          {ROWS.map((row, rowIndex) => {
            const hasBoth = Boolean(row.education && row.internship);
            const kind = row.education ? "education" : "internship";

            return (
              <motion.div
                key={rowIndex}
                variants={JOURNEY_ANIMATION.item}
                className="grid grid-cols-[1fr_48px_1fr] items-start"
              >
                {/* LEFT — education card */}
                <div className="flex justify-end pr-6">
                  {row.education ? (
                    <TimelineCard
                      entry={row.education}
                      side="left"
                      kind="education"
                    />
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* CENTER — dot, perfectly centered on the line */}
                <div className="flex flex-col items-center pt-5">
                  <div
                    className={cn(
                      "relative z-10 flex size-10 items-center justify-center rounded-full border bg-background shadow-sm",
                      hasBoth
                        ? "border-border"
                        : ringColor(kind)
                    )}
                  >
                    <div
                      className={cn(
                        "size-3 rounded-full",
                        hasBoth
                          ? "bg-gradient-to-br from-blue-500 to-emerald-500"
                          : dotColor(kind)
                      )}
                    />
                    {(row.education?.current || row.internship?.current) && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 animate-ping rounded-full bg-blue-400/25"
                      />
                    )}
                  </div>
                </div>

                {/* RIGHT — internship card */}
                <div className="pl-6">
                  {row.internship ? (
                    <TimelineCard
                      entry={row.internship}
                      side="right"
                      kind="internship"
                    />
                  ) : (
                    <div className="w-full" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — single vertical timeline, chronological order
      ═══════════════════════════════════════════════════════ */}
      <div className="relative md:hidden">
        {/* Left rail line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-transparent via-border/60 to-transparent"
        />

        <motion.ul
          role="list"
          aria-label="Academic journey timeline"
          variants={JOURNEY_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative flex flex-col gap-6"
        >
          {MOBILE_ITEMS.map(({ entry, kind }) => (
            <motion.li
              key={`mobile-${kind}-${entry.id}`}
              role="listitem"
              variants={JOURNEY_ANIMATION.item}
              className="flex items-start gap-4"
            >
              {/* Dot */}
              <div
                className={cn(
                  "relative z-10 mt-1 flex size-[38px] shrink-0 items-center justify-center rounded-full border bg-background shadow-sm",
                  ringColor(kind)
                )}
              >
                <div className={cn("size-3 rounded-full", dotColor(kind))} />
                {entry.current && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 animate-ping rounded-full opacity-30",
                      kind === "education" ? "bg-blue-400" : "bg-emerald-400"
                    )}
                  />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-1">
                <TimelineCard entry={entry} side="right" kind={kind} />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
