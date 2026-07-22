"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import { CERTIFICATION_ENTRIES, EDUCATION_ANIMATION } from "../constants";

export default function CertificationCard() {
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
            <BadgeCheck className="size-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Certifications</h3>
        </div>

        {/* Entries */}
        <ul className="flex flex-col gap-5" aria-label="Certification entries">
          {CERTIFICATION_ENTRIES.map((entry) => (
            <li
              key={entry.title}
              className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-5"
            >
              {/* Issuer + year */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-500/70">
                  {entry.issuer}
                </span>
                <span className="text-[10px] text-slate-600">{entry.year}</span>
              </div>

              {/* Title */}
              <p className="text-base font-semibold leading-snug text-white">
                {entry.title}
              </p>

              {/* Credential tag */}
              {entry.credential && (
                <span className="mt-1 inline-flex w-fit items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {entry.credential}
                </span>
              )}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
