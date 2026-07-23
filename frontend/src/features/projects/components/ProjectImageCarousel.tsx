'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageCarouselProps {
    images: string[];
}

export default function ProjectImageCarousel({ images }: ProjectImageCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative group/carousel overflow-hidden rounded-xl border border-white/10">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div className="relative flex-[0_0_100%] min-w-0 aspect-[16/10]" key={index}>
                            <Image
                                src={src}
                                alt={`Project screenshot ${index + 1}`}
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-black/60 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="size-4" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-black/60 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="size-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className="size-1.5 rounded-full bg-white/30 backdrop-blur-sm"
                    />
                ))}
            </div>
        </div>
    );
}
