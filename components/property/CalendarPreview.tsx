'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const days = Array.from({ length: 30 }, (_, i) => i + 1);

export function CalendarPreview() {
  const [month, setMonth] = useState('Avril 2024');

  const availability = useMemo(() => {
    const blocked = new Set([3, 4, 12, 17, 21, 28]);
    return days.map((day) => ({ day, available: !blocked.has(day) }));
  }, []);

  const changeMonth = (direction: 'prev' | 'next') => {
    setMonth((prev) => `${direction === 'prev' ? 'Mars' : 'Mai'} 2024`);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between text-sm font-semibold text-ink">
        <button
          type="button"
          className="rounded-md border border-slate-200 px-3 py-2 text-xs uppercase tracking-wide text-ink/70 transition hover:border-ink"
          onClick={() => changeMonth('prev')}
        >
          ←
        </button>
        <span>{month}</span>
        <button
          type="button"
          className="rounded-md border border-slate-200 px-3 py-2 text-xs uppercase tracking-wide text-ink/70 transition hover:border-ink"
          onClick={() => changeMonth('next')}
        >
          →
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 text-xs text-ink/70">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
          <span key={day} className="text-center font-semibold text-ink/60">
            {day}
          </span>
        ))}
        {availability.map((slot) => (
          <motion.button
            key={slot.day}
            type="button"
            whileHover={slot.available ? { scale: 1.02 } : undefined}
            className={`h-10 rounded-md border text-ink transition ${
              slot.available
                ? 'border-slate-200 bg-soft hover:border-ink'
                : 'border-dashed border-slate-200 bg-white text-ink/40 line-through'
            }`}
          >
            {slot.day}
          </motion.button>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink/60">Aperçu fictif. Synchronisation à venir.</p>
    </div>
  );
}
