// components/property/BookingBar.tsx
'use client';

import { motion } from 'framer-motion';

type BookingBarProps = {
  airbnbUrl: string;
  whatsappPhone: string;
  labelCity: string;
};

export function BookingBar({ airbnbUrl, whatsappPhone, labelCity }: BookingBarProps) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé par l'appartement à ${labelCity} via KHH Global Projects.`
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={airbnbUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex flex-1 items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
      >
        Voir sur Airbnb
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={`https://wa.me/${whatsappPhone.replace(/\D/g, '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex flex-1 items-center justify-center rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold text-ink shadow-soft transition duration-150 hover:-translate-y-0.5 hover:border-ink hover:shadow-lg active:translate-y-0"
      >
        Réservation WhatsApp
      </motion.a>
    </div>
  );
}
