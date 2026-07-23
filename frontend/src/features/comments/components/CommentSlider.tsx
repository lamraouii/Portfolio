'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Comment } from '../types';

interface CommentSliderProps {
  comments: Comment[];
}

export default function CommentSlider({ comments }: CommentSliderProps) {
  // Duplicate comments to create a seamless loop
  const duplicatedComments = [...comments, ...comments, ...comments];

  return (
    <div className="relative flex overflow-hidden py-12">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * comments.length + '%'],
        }}
        transition={{
          duration: 750,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedComments.map((comment, index) => (
          <div key={`${comment.id}-${index}`} className="flex items-center px-12 group">
            {/* Commenter Image */}
            <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20 transition-transform group-hover:scale-110">
              <Image
                src={comment.image}
                alt={comment.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Comment Content */}
            <div className="ml-6 max-w-md">
              <p className="whitespace-normal text-sm italic text-muted-foreground line-clamp-2 transition-colors group-hover:text-foreground">
                  &quot;{comment.text}&quot;
              </p>
              <div className="mt-2">
                <span className="text-sm font-bold tracking-tight text-foreground">{comment.name}</span>
                {comment.role && (
                  <span className="ml-2 text-xs text-muted-foreground/60">— {comment.role}</span>
                )}
              </div>
            </div>

            {/* Vertical Separator Line */}
            <div className="ml-12 h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden="true" />
          </div>
        ))}
      </motion.div>

      {/* Side Gradients for fading effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}
