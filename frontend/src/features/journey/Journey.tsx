'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/layout';
import AcademicTimeline from './components/AcademicTimeline';
import { JOURNEY_TITLE, JOURNEY_LABEL } from './constants';

export default function Journey() {
  return (
    <Section id="experience" className="relative overflow-hidden pt-24 pb-12">
      <Container>
        <div className="mb-20 text-center">
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
          
          <div className="mt-8 flex justify-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span className="text-muted-foreground">Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-muted-foreground">Professional</span>
            </div>
          </div>
        </div>

        <AcademicTimeline />
      </Container>
    </Section>
  );
}
