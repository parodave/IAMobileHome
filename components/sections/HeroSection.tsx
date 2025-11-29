// components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { PageContainer } from '../layout/PageContainer';
import MotionSection from '@/components/motion/MotionSection';

export function HeroSection() {
  return (
    <MotionSection id="hero" className="relative overflow-hidden bg-white">
      <PageContainer className="pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 shadow-soft">
              Maroc • Hospitalité premium
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              KHH Global Projects
            </h1>
            <p className="max-w-xl text-lg text-ink/80">
              Appartements haut de gamme à Marrakech et Tanger, pensés pour une expérience sereine, contemporaine et généreuse.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#apartments"
                className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Voir les appartements
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition duration-150 hover:-translate-y-0.5 hover:border-ink hover:shadow-lg active:translate-y-0"
              >
                Contact
              </a>
            </div>
          </motion.div>
          {false && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl border border-slate-100 bg-soft p-6 shadow-soft">
                <div className="h-64 rounded-xl bg-gradient-to-br from-slate-100 to-white shadow-inner" />
                <div className="mt-4 space-y-2 text-sm text-ink/70">
                  <p>Éclairage naturel, confort moderne, hospitalité inspirée des grandes maisons marocaines.</p>
                  <p className="text-ink">Sélection privée, service attentif, réservations simples.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </PageContainer>
    </MotionSection>
  );
}
