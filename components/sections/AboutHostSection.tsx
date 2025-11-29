// components/sections/AboutHostSection.tsx
"use client";

import MotionSection from '@/components/motion/MotionSection';

export default function AboutHostSection() {
  return (
    <MotionSection id="about" className="w-full py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">À propos de KHH Global Projects</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-4">
        Texte placeholder sur l’expérience, la gestion professionnelle, la propreté, la réactivité WhatsApp, la
        transparence. Style premium, ton sérieux. (I will edit later)
      </p>
      <p className="text-lg text-slate-600 leading-relaxed mb-4">
        Ajouter une description de la vision de l’entreprise, la qualité du service, l’engagement envers les voyageurs.
        (placeholder)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Gestion professionnelle</h3>
          <p className="text-slate-600 text-sm">Appartements entretenus, standards élevés.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Réactivité 24/7</h3>
          <p className="text-slate-600 text-sm">WhatsApp direct pour assistance rapide.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Expérience premium</h3>
          <p className="text-slate-600 text-sm">Séjours confortables et sans stress.</p>
        </div>
      </div>
    </MotionSection>
  );
}
