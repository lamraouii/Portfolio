'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/common/card';
import { Heart } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EDUCATION_ANIMATION } from '../constants';
import { VOLUNTEERING_ENTRIES } from '@/features/volunteering/constants';
import {VolunteeringEntry} from "@/features/education/types";

function VolunteeringCard({ entry }: { entry: VolunteeringEntry }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <motion.div variants={EDUCATION_ANIMATION.item}>
      <GlassCard className="overflow-hidden flex flex-col md:flex-row h-full border-white/5 hover:border-primary/20 transition-all">
        {/* Image Slider Side */}
        <div className="relative w-full md:w-2/5 min-h-[250px]" ref={emblaRef}>
          <div className="flex h-full">
            {entry.images.map((src: string, i: number) => (
              <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
                <Image
                  src={src}
                  alt={`${entry.event} image ${i + 1}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-background/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
            <Heart className="size-3 text-red-400 fill-red-400" />
            Volunteering
          </div>
        </div>

        {/* Content Side */}
        <div className="p-8 flex-1 flex flex-col justify-center">
          <div className="mb-4">
             <span className="text-xs font-bold text-primary uppercase tracking-widest">{entry.institution}</span>
             <h3 className="text-2xl font-bold text-foreground mt-1">{entry.event}</h3>
             <p className="text-lg font-medium text-muted-foreground mt-0.5">{entry.role}</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {entry.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function VolunteeringSection() {
  return (
    <div className="mt-20 flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-2xl font-bold text-foreground">Volunteering Journey</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
      </div>
      
      <div className="flex flex-col gap-8">
        {VOLUNTEERING_ENTRIES.map((entry) => (
          <VolunteeringCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
