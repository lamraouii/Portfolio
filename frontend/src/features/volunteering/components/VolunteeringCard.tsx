"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { Calendar } from "lucide-react";
import ProjectImageCarousel from "@/features/projects/components/ProjectImageCarousel";
import { VOLUNTEERING_ANIMATION } from "../constants";
import type { VolunteeringEntry } from "@/features/education/types";

interface VolunteeringCardProps {
  entry: VolunteeringEntry;
}

export default function VolunteeringCard({ entry }: VolunteeringCardProps) {
  return (
    <motion.div variants={VOLUNTEERING_ANIMATION.item} className="h-full">
      <GlassCard className="flex flex-col overflow-hidden border-white/5 bg-white/[0.02] transition-all hover:border-primary/30 hover:bg-white/[0.05]">
        {/* Image Carousel */}
        {entry.images && entry.images.length > 0 && (
          <div className="relative w-full">
            <ProjectImageCarousel images={entry.images} />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-8">
          {/* Header */}
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
              {entry.institution}
            </div>
            <h3 className="mt-1 text-xl font-bold leading-tight text-foreground">
              {entry.event}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">
              {entry.role}
            </p>
          </div>

          {/* Description */}
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground/80">
            {entry.description}
          </p>

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer — date + View Gallery */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
            {/* Date — fixed: was text-muted-foreground/60 (too faint) */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{entry.date}</span>
            </div>

            {/* View Gallery — fixed: was gated on entry.detailsUrl which was never set;
                now shows for any entry that has images */}
            {entry.images && entry.images.length > 0 && (
              <button
                onClick={() => {
                  if (entry.detailsUrl) {
                    window.open(entry.detailsUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                aria-label={`View gallery for ${entry.event}`}
                className="text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                View Gallery
              </button>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
