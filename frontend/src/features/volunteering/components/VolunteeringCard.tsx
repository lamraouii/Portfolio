'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/common/card';
import { Heart, Calendar, MapPin } from 'lucide-react';
import ProjectImageCarousel from '@/features/projects/components/ProjectImageCarousel';
import { VOLUNTEERING_ANIMATION } from '../constants';
import type { VolunteeringEntry } from '@/features/education/types';

interface VolunteeringCardProps {
  entry: VolunteeringEntry;
}

export default function VolunteeringCard({ entry }: VolunteeringCardProps) {
  return (
    <motion.div variants={VOLUNTEERING_ANIMATION.item} className="h-full">
      <GlassCard className="flex flex-col overflow-hidden border-white/5 bg-white/[0.02] transition-all hover:border-primary/30 hover:bg-white/[0.05]">
        {/* Image Carousel */}
        <div className="relative w-full">
          <ProjectImageCarousel images={entry.images} />
          
        {/*  /!* Badge *!/*/}
        {/*  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10 shadow-lg">*/}
        {/*    <Heart className="size-3 text-red-400 fill-red-400" />*/}
        {/*    Impact*/}
        {/*  </div>*/}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-10 ">
          <div className="mb-4 mt-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80">
              {/*<MapPin className="size-3" />*/}
              {entry.institution}
            </div>
            <h3 className="mt-1 text-xl font-bold text-foreground leading-tight">{entry.event}</h3>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{entry.role}</p>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-muted-foreground/80">
            {entry.description}
          </p>

          {entry.tags && (
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

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 ">
             <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground/60 uppercase">
                {/*<Calendar className="size-3" />*/}
                <span>{entry.date}</span>
             </div>
             
             {entry.detailsUrl && (
               <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                  View Gallery
               </button>
             )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
