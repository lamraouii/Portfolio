'use client';

import React from 'react';
import { Section } from '@/components/layout';
import CommentSlider from './components/CommentSlider';
import { COMMENTS_MOCK } from './constants';

export default function Comments() {
  return (
    <Section id="testimonials" className="bg-muted/30 overflow-hidden py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What People Say
        </h2>
        <p className="mt-4 text-muted-foreground">
          Feedback and comments from colleagues and clients.
        </p>
      </div>
      
      <div className="relative">
        <CommentSlider comments={COMMENTS_MOCK} />
      </div>
    </Section>
  );
}
