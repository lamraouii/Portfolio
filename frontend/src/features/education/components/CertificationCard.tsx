"use client";

import { BadgeCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import { CERTIFICATION_ENTRIES, EDUCATION_ANIMATION } from "../constants";
import React, { useState } from "react";

export default function CertificationCard() {
  const [hoveredEntry, setHoveredEntry] = useState<string | null>(null);

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
              onMouseEnter={() => setHoveredEntry(entry.title)}
              onMouseLeave={() => setHoveredEntry(null)}
              className="relative flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:border-blue-500/20"
            >
              {/* Background Image on Hover */}
              <AnimatePresence>
                {hoveredEntry === entry.title && entry.imageUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl"
                  >
                    <Image
                      src={entry.imageUrl}
                      alt={entry.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10">
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

                {/* Visit Credential link */}
                {entry.credentialUrl && (
                  <a
                    href={entry.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Visit Credential
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
