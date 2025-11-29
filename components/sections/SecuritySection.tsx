// components/sections/SecuritySection.tsx
"use client";

import { FC } from 'react';
import { PageContainer } from '../layout/PageContainer';
import MotionSection from '@/components/motion/MotionSection';

type Pillar = {
  title: string;
  subtitle: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    title: 'Data Protection',
    subtitle: 'Protection des données clients',
    points: [
      'Confidential handling of guest and owner information with role-based access only.',
      'Encryption at rest and in transit for booking details, IDs, and agreements.',
      'Scoped credentials for partners and strict offboarding to avoid lingering access.',
    ],
  },
  {
    title: 'Payment Security',
    subtitle: 'Sécurité des paiements',
    points: [
      'Secure PSPs like Stripe to process payments; no card storage on local systems.',
      'Monitoring of payment logs and dispute traces to keep a clear audit trail.',
      'Adherence to provider compliance requirements and fraud screening workflows.',
    ],
  },
  {
    title: 'Compliance & Continuity',
    subtitle: 'Conformité et sauvegardes',
    points: [
      'Documented processes for guest verification, check-in, and regulatory reporting.',
      'Regular backups for key operational data with recovery tests and access tracking.',
      'Recorded access history for sensitive data and shared drives to maintain oversight.',
    ],
  },
  {
    title: 'Transparency',
    subtitle: 'Transparence avec propriétaires et locataires',
    points: [
      'Clear communication of incidents, maintenance, and guest issues in real time.',
      'Shared dashboards or reports that highlight booking health, payments, and actions taken.',
      'Commitment to honest updates so owners and tenants know exactly how we protect them.',
    ],
  },
];

const SecuritySection: FC = () => {
  return (
    <MotionSection id="security" className="bg-white">
      <PageContainer className="space-y-10 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Trust &amp; Safety</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Security &amp; Compliance</h2>
          <p className="mx-auto max-w-3xl text-sm text-ink/70 sm:text-base">
            Security is woven into every step of KHH Global Projects: data confidentiality, reliable payments, documented
            compliance, and transparent communication for owners and guests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-slate-200 bg-white/90 p-6 text-left shadow-soft backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">{pillar.subtitle}</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-ink/75">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ink/60" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </MotionSection>
  );
};

export default SecuritySection;
