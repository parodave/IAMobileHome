// components/sections/HouseRulesSection.tsx
'use client';

import { PageContainer } from '../layout/PageContainer';
import MotionSection from '@/components/motion/MotionSection';

const rules = [
  'Arrivée dès 15h00 et départ avant 11h00 (horaires flexibles sur demande).',
  'Aucun événement ou soirée sans accord préalable afin de préserver le voisinage.',
  'Logement non-fumeur ; espaces extérieurs disponibles selon l\'appartement.',
  'Respect du calme de l\'immeuble, surtout en soirée et tôt le matin.',
  'Nombre maximum d\'invités conforme à la réservation, merci de prévenir pour tout changement.',
  'Animaux de compagnie sur demande uniquement.',
  'Toute casse ou incident doit être signalé rapidement pour une résolution fluide.',
  'Utilisation raisonnée de l\'énergie et de l\'eau pour un séjour responsable.'
];

export function HouseRulesSection() {
  return (
    <MotionSection id="rules" className="bg-soft">
      <PageContainer className="py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Confort & sérénité</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Règles de la maison</h2>
          <p className="max-w-2xl text-ink/70">
            Quelques repères pour garantir une expérience paisible pour tous les voyageurs et le voisinage. Texte provisoire à personnaliser.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {rules.map((rule) => (
            <div key={rule} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink/80 shadow-soft">
              {rule}
            </div>
          ))}
        </div>
      </PageContainer>
    </MotionSection>
  );
}
