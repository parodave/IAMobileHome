'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#apartments', label: 'Appartements' },
  { href: '#rules', label: 'Règles de la maison' },
  { href: '#contact', label: 'Contact' },
  { href: '#legal', label: 'Légal' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-ink" aria-label="Accueil KHH Global Projects">
          KHH Global Projects
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="relative h-10 w-10 rounded-md border border-slate-200 shadow-soft md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="block h-[2px] w-5 bg-ink"
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-5 bg-ink"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-5 bg-ink"
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
                <ul className="space-y-3 text-sm font-medium text-ink/90">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block rounded-md px-2 py-2 transition hover:bg-slate-50"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
