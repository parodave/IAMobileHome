'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageCarouselProps = {
  images?: string[];
  title: string;
};

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const fallbackImages = [
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
  ];

  const slides = images?.length ? images : fallbackImages;

  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setIndex(newIndex);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIndex(0);
    const el = containerRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [slides.length]);

  const scrollToIndex = (target: number) => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: target * width, behavior: 'smooth' });
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-soft">
        <div
          ref={containerRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
        >
          {slides.map((src, i) => (
            <div
              key={`${title}-${src}-${i}`}
              className="relative h-56 w-full min-w-full snap-start overflow-hidden bg-slate-100 sm:h-64 md:h-72"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`${title} visuel ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-3 lg:flex">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            className="pointer-events-auto h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            aria-label="Image précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy('right')}
            className="pointer-events-auto h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            aria-label="Image suivante"
          >
            →
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-2 w-2 rounded-full transition ${index === i ? 'bg-ink' : 'bg-slate-300'}`}
            aria-label={`Aller à l'image ${i + 1}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
