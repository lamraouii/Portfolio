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
        className="flex h-full flex-col gap-6 p-6"
      >
        {/* Card header */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
              "bg-white/5 text-slate-300 ring-1 ring-white/10"
            )}
            aria-hidden="true"
          >
            <BadgeCheck className="size-4" />
          </div>
          <h3 className="text-sm font-semibold text-white">Certifications</h3>
        </div>

        {/* Entries */}
        <ul className="flex flex-col gap-5" aria-label="Certification entries">
          {CERTIFICATION_ENTRIES.map((entry) => (
            <li
              key={entry.title}
              className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-4"
            >
              {/* Issuer + year */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  {entry.issuer}
                </span>
                <span className="text-[10px] text-slate-600">{entry.year}</span>
              </div>

              {/* Title */}
              <p className="text-sm font-semibold leading-snug text-white">
                {entry.title}
              </p>

              {/* Credential tag */}
              {entry.credential && (
                <span className="mt-1 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-500">
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
