// components/sections/LegalSection.tsx
'use client';

import MotionSection from '@/components/motion/MotionSection';
import { PageContainer } from '../layout/PageContainer';

const items = [
  {
    title: 'Mentions légales',
    content:
      'Texte de mentions légales provisoire. Merci de le faire valider et compléter par un conseil juridique avant publication définitive.'
  },
  {
    title: "Conditions générales d'utilisation",
    content:
      "Conditions d'utilisation fictives pour l'usage du site et des réservations. À adapter selon vos besoins et la réglementation locale."
  },
  {
    title: 'Politique de confidentialité',
    content:
      'Politique de confidentialité à personnaliser : collecte, utilisation, conservation des données. Prévoir consultation d\'un professionnel.'
  },
  {
    title: 'Cookies',
    content:
      'Informations cookies génériques. Décrivez les finalités et offrez des choix aux visiteurs. Contenu provisoire à compléter.'
  }
];

export function LegalSection() {
  return (
    <MotionSection id="legal" className="bg-soft">
      <PageContainer className="space-y-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Références</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Légal</h2>
          <p className="max-w-2xl text-ink/70">
            Contenus temporaires à valider par un professionnel du droit. Chaque bloc peut être développé ou réduit.
          </p>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.title} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-soft" open>
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-ink">
                {item.title}
                <span className="text-sm text-ink/50 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/75">{item.content}</p>
            </details>
          ))}
        </div>
      </PageContainer>
    </MotionSection>
  );
}
