// components/sections/ContactSection.tsx
'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { PageContainer } from '../layout/PageContainer';
import { BookingBar } from '../property/BookingBar';
import MotionSection from '@/components/motion/MotionSection';

export function ContactSection() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  };

  return (
    <MotionSection id="contact" className="bg-white">
      <PageContainer className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-start lg:py-24">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Échanges</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Contact</h2>
          <p className="max-w-xl text-ink/70">
            Pour toute demande de réservation, d’information ou d’organisation spécifique, écrivez-nous ou utilisez WhatsApp.
          </p>
          <div className="rounded-xl border border-slate-200 bg-soft p-4 shadow-soft">
            <p className="text-sm font-semibold text-ink">contact@khh-global-projects.com</p>
            <p className="text-sm text-ink/70">Réponse rapide et personnalisée.</p>
            <div className="mt-4">
              <BookingBar airbnbUrl="https://www.airbnb.com" whatsappPhone="+212612345678" labelCity="Maroc" />
            </div>
          </div>
        </div>
        {false && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="name">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-md border border-slate-200 bg-soft px-3 py-2 text-sm text-ink shadow-inner focus:border-ink"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-md border border-slate-200 bg-soft px-3 py-2 text-sm text-ink shadow-inner focus:border-ink"
                  placeholder="vous@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 h-28 w-full rounded-md border border-slate-200 bg-soft px-3 py-2 text-sm text-ink shadow-inner focus:border-ink"
                  placeholder="Votre demande..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Envoyer (bientôt)
              </motion.button>
              {submitted && (
                <p className="text-sm text-ink/70">Message non envoyé (back-end à configurer).</p>
              )}
            </form>
          </div>
        )}
      </PageContainer>
    </MotionSection>
  );
}
