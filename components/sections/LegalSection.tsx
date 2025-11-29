// components/sections/LegalSection.tsx
'use client';

import MotionSection from '@/components/motion/MotionSection';
import { PageContainer } from '../layout/PageContainer';

type LegalDocument = {
  titleFr: string;
  subtitleFr: string;
  titleEn: string;
  subtitleEn: string;
  href: string;
  buttonLabelFr: string;
  buttonLabelEn?: string;
};

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

const legalDocuments: LegalDocument[] = [
  {
    titleFr: 'Règlement intérieur',
    subtitleFr: 'Accès rapide à la version PDF actuelle des règles de la maison pour vos locataires.',
    titleEn: 'House rules (PDF)',
    subtitleEn: 'Downloadable house rules already available for guests and owners.',
    href: '/api/pdf/marrakech-apartment',
    buttonLabelFr: 'Télécharger les règles (PDF)',
    buttonLabelEn: 'Download house rules (PDF)'
  },
  {
    titleFr: 'Fiche individuelle de police (Maroc)',
    subtitleFr: 'Formulaire obligatoire à remplir pour chaque locataire conformément à la réglementation marocaine.',
    titleEn: 'Police registration form (Morocco)',
    subtitleEn: 'Mandatory form to be completed by each guest in accordance with Moroccan regulations.',
    href: '/pdfs/fiche-police-maroc.pdf',
    buttonLabelFr: 'Télécharger la fiche (PDF)',
    buttonLabelEn: 'Download the form (PDF)'
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
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-ink">Documents et formulaires</h3>
          <p className="max-w-2xl text-sm text-ink/70">
            Téléchargez les documents clés déjà disponibles pour vos locataires et ajoutez facilement de nouveaux formulaires.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {legalDocuments.map((doc) => (
              <div
                key={doc.href}
                className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Français</p>
                    <h4 className="text-lg font-semibold text-ink">{doc.titleFr}</h4>
                    <p className="text-sm text-ink/70">{doc.subtitleFr}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/60">English</p>
                    <h5 className="text-base font-semibold text-ink">{doc.titleEn}</h5>
                    <p className="text-sm text-ink/70">{doc.subtitleEn}</p>
                  </div>
                </div>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={doc.buttonLabelEn ?? doc.buttonLabelFr}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {doc.buttonLabelFr}
                </a>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </MotionSection>
  );
}
