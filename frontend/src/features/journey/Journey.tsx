'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/layout';
import { cn } from '@/lib/utils';
import { JOURNEY_TITLE, JOURNEY_LABEL, JOURNEY_ENTRIES, JOURNEY_ANIMATION } from './constants';
import type { ExperienceEntry } from '../experience/types';

function JourneyItem({ entry, index, isLeft }: { entry: ExperienceEntry; index: number; isLeft: boolean }) {
  return (
    <motion.div
      variants={JOURNEY_ANIMATION.item}
      className={cn(
        "relative mb-12 flex w-full items-center justify-between",
        isLeft ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Spacer for the other side */}
      <div className="hidden w-[45%] md:block" />

      {/* Timeline Dot */}
      <div className="absolute left-[20px] z-10 flex size-10 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm md:left-1/2 md:-ml-5">
        <div className={cn(
          "size-3 rounded-full",
          entry.kind === 'education' ? "bg-blue-500" : "bg-emerald-500"
        )} />
      </div>

      {/* Content Card */}
      <div className={cn(
        "w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-white/10 md:w-[45%]",
        entry.current && "border-primary/30 ring-1 ring-primary/20"
      )}>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
          <span className="text-xs font-medium text-muted-foreground">{entry.period}</span>
        </div>
        <p className="mb-2 text-sm font-medium text-primary/80">{entry.organization}</p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
        
        {entry.tags && (
          <div className="flex flex-wrap gap-1.5">
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

export default function Journey() {
  const educationEntries = JOURNEY_ENTRIES.filter(e => e.kind === 'education');
  const workEntries = JOURNEY_ENTRIES.filter(e => e.kind === 'work');

  // We want to interleave them chronologically if possible, or just follow the request:
  // "education in left and internship ayt right"
  
  return (
    <Section id="experience" className="relative overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-primary uppercase"
          >
            {JOURNEY_LABEL}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {JOURNEY_TITLE}
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />

          <motion.div
            variants={JOURNEY_ANIMATION.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {JOURNEY_ENTRIES.map((entry, index) => (
              <JourneyItem 
                key={index} 
                entry={entry} 
                index={index} 
                isLeft={entry.kind === 'education'} 
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
