'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import TimelineItem from './TimelineItem';
import { EDUCATION_ENTRIES, INTERNSHIP_ENTRIES, JOURNEY_ANIMATION } from '../constants';

export default function AcademicTimeline() {
  // Combine and sort by some logic if needed, but the user specifically asked for:
  // LEFT: Academic, RIGHT: Professional.
  // We'll interleave them by index to keep the timeline balanced visually, 
  // but if we want chronological we should sort them.
  // For now, let's just render them as pairs or alternating if possible.
  
  const maxLength = Math.max(EDUCATION_ENTRIES.length, INTERNSHIP_ENTRIES.length);
  const items = [];
  
  for (let i = 0; i < maxLength; i++) {
    if (EDUCATION_ENTRIES[i]) {
      items.push({ entry: EDUCATION_ENTRIES[i], side: 'left' as const, kind: 'education' as const });
    }
    if (INTERNSHIP_ENTRIES[i]) {
      items.push({ entry: INTERNSHIP_ENTRIES[i], side: 'right' as const, kind: 'internship' as const });
    }
  }

  return (
    <Container>
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-ml-px" />

        <motion.div
          variants={JOURNEY_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {items.map((item) => (
            <TimelineItem 
              key={`${item.kind}-${item.entry.id}`} 
              entry={item.entry} 
              side={item.side} 
              kind={item.kind} 
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
