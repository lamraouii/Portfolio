'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/layout';
import VolunteeringCard from './components/VolunteeringCard';
import { VOLUNTEERING_TITLE, VOLUNTEERING_LABEL, VOLUNTEERING_ENTRIES, VOLUNTEERING_ANIMATION } from './constants';

export default function Volunteering() {
  return (
    <Section id="volunteering" className="relative overflow-hidden bg-white/[0.01] dark:bg-black/[0.01] border-y border-white/5">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-primary uppercase"
          >
            {VOLUNTEERING_LABEL}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {VOLUNTEERING_TITLE}
          </motion.h2>
        </div>

        <motion.div
          variants={VOLUNTEERING_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {VOLUNTEERING_ENTRIES.map((entry) => (
            <VolunteeringCard key={entry.id} entry={entry} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
