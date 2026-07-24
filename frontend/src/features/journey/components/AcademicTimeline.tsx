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

// ─── flat list: every entry is independent on its own side ────────────────
interface FlatItem {
  entry: TimelineEntry;
  kind: "education" | "internship";
  side: "left" | "right";
}

function buildFlatItems(): FlatItem[] {
  const items: FlatItem[] = [];
  const max = Math.max(EDUCATION_ENTRIES.length, INTERNSHIP_ENTRIES.length);

  // Interleave so items from both sides alternate visually
  for (let i = 0; i < max; i++) {
    if (EDUCATION_ENTRIES[i]) {
      items.push({ entry: EDUCATION_ENTRIES[i], kind: "education", side: "left" });
    }
    if (INTERNSHIP_ENTRIES[i]) {
      items.push({ entry: INTERNSHIP_ENTRIES[i], kind: "internship", side: "right" });
    }
  }
  return items;
}

const FLAT_ITEMS = buildFlatItems();

// ─── dot helpers ──────────────────────────────────────────────────────────
const dotClass = (kind: "education" | "internship") =>
  kind === "education"
    ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.55)]"
    : "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.55)]";

const ringClass = (kind: "education" | "internship") =>
  kind === "education" ? "border-blue-500/30" : "border-emerald-500/30";

// ─── component ────────────────────────────────────────────────────────────
export default function AcademicTimeline() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          DESKTOP (md+) — two-column, real center line
          Fix: max-md:hidden avoids the hidden/md:block
          Tailwind v4 cascade problem entirely.
      ═══════════════════════════════════════════════ */}
      <div className="relative max-md:hidden">

        {/* ── Real vertical center line ─────────────────
            grid-cols-[1fr_48px_1fr] is symmetric:
              center of the 48 px column = 50 % of container
            The absolute line at left-1/2 lands on the same axis.
        ─────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-border/60 to-transparent"
        />

        <motion.div
          variants={JOURNEY_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col"
        >
          {/* ── Column labels ──────────────────────────── */}
          <div className="grid grid-cols-[1fr_48px_1fr] mb-10">
            <div className="flex items-center justify-end gap-2 pr-8">
              <span className="text-sm font-semibold text-blue-400">Education</span>
              <GraduationCap className="size-4 text-blue-400" aria-hidden="true" />
            </div>
            <div />
            <div className="flex items-center gap-2 pl-8">
              <Briefcase className="size-4 text-emerald-400" aria-hidden="true" />
              <span className="text-sm font-semibold text-emerald-400">Professional</span>
            </div>
          </div>

          {/* ── Individual rows — each entry on its own side ── */}
          {FLAT_ITEMS.map(({ entry, kind, side }) => {
            const isLeft = side === "left";

            return (
              <motion.div
                key={`${kind}-${entry.id}`}
                variants={JOURNEY_ANIMATION.item}
                className="grid grid-cols-[1fr_48px_1fr] items-start mb-10 last:mb-0"
              >
                {/* LEFT column */}
                <div className="flex justify-end pr-8">
                  {isLeft ? (
                    <TimelineCard entry={entry} side="left" kind={kind} />
                  ) : (
                    // empty spacer — keeps the center line visible
                    <div className="w-full" />
                  )}
                </div>

                {/* CENTER — dot on the line */}
                <div className="flex flex-col items-center pt-[18px]">
                  <div
                    className={cn(
                      "relative z-10 flex size-10 items-center justify-center",
                      "rounded-full border bg-background shadow-sm",
                      ringClass(kind)
                    )}
                  >
                    <div className={cn("size-3 rounded-full", dotClass(kind))} />
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
                </div>

                {/* RIGHT column */}
                <div className="pl-8">
                  {!isLeft ? (
                    <TimelineCard entry={entry} side="right" kind={kind} />
                  ) : (
                    <div className="w-full" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          MOBILE (<md) — single vertical timeline
      ═══════════════════════════════════════════════ */}
      <div className="relative md:hidden">
        {/* Left rail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-border/60 to-transparent"
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
          {FLAT_ITEMS.map(({ entry, kind }) => (
            <motion.li
              key={`mobile-${kind}-${entry.id}`}
              role="listitem"
              variants={JOURNEY_ANIMATION.item}
              className="flex items-start gap-4"
            >
              {/* Dot */}
              <div
                className={cn(
                  "relative z-10 mt-1 flex size-[38px] shrink-0",
                  "items-center justify-center rounded-full border bg-background shadow-sm",
                  ringClass(kind)
                )}
              >
                <div className={cn("size-3 rounded-full", dotClass(kind))} />
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
