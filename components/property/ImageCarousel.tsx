'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageCarouselProps = {
  images: string[];
  title: string;
};

export function ImageCarousel({ images, title }: ImageCarouselProps) {
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
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-xl border border-slate-100 bg-slate-50 shadow-inner"
      >
        {images.map((src, i) => (
          <div key={`${title}-${src}`} className="relative h-64 w-full min-w-full snap-center overflow-hidden sm:h-72">
            <motion.div
              className="h-full w-full bg-slate-200"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Image
                src={src}
                alt={`${title} visuel ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={() => scrollBy('left')}
          className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg lg:flex"
          aria-label="Image précédente"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy('right')}
          className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg lg:flex"
          aria-label="Image suivante"
        >
          →
        </button>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((_, i) => (
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
