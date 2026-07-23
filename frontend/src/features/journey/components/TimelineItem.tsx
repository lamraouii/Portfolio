'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { TimelineEntry } from '../types';
import { JOURNEY_ANIMATION } from '../constants';

interface TimelineItemProps {
  entry: TimelineEntry;
  side: 'left' | 'right';
  kind: 'education' | 'internship';
}

export default function TimelineItem({ entry, side, kind }: TimelineItemProps) {
  const isLeft = side === 'left';

  return (
    <motion.div
      variants={JOURNEY_ANIMATION.item}
      className={cn(
        "relative mb-12 flex w-full items-center justify-between",
        isLeft ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Spacer for the other side on Desktop */}
      <div className="hidden w-[45%] md:block" />

      {/* Timeline Dot */}
      <div className="absolute left-[20px] z-10 flex size-10 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm md:left-1/2 md:-ml-5">
        <div className={cn(
          "size-3 rounded-full",
          kind === 'education' ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        )} />
      </div>

      {/* Content Card */}
      <div className={cn(
        "w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-white/10 md:w-[45%]",
        entry.current && "border-primary/30 ring-1 ring-primary/20 bg-white/[0.07]",
        isLeft ? "md:text-right" : "md:text-left"
      )}>
        <div className={cn(
          "mb-2 flex flex-wrap items-center justify-between gap-2",
          isLeft ? "md:flex-row-reverse" : "flex-row"
        )}>
          <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
          <span className="text-xs font-semibold text-primary/70 bg-primary/5 px-2 py-1 rounded-md">{entry.period}</span>
        </div>
        
        <p className="mb-2 text-sm font-medium text-primary/80">{entry.organization}</p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
        
        {entry.tags && (
          <div className={cn(
            "flex flex-wrap gap-1.5",
            isLeft ? "md:justify-end" : "md:justify-start"
          )}>
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400 transition-colors hover:border-primary/20 hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
