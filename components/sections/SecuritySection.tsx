'use client';

import { PageContainer } from '../layout/PageContainer';

const securityItems = [
  {
    title: 'Physical Security',
    description:
      'Controlled building access, secure key management, and vetted maintenance partners ensure that each property is protected 24/7. We work only with trusted local vendors and follow clear incident-response procedures.',
  },
  {
    title: 'Guest & Owner Safety',
    description:
      'All check-ins follow legal requirements for guest registration, with clear house rules and emergency contacts available in every unit. We prioritize transparency with owners on any incident, damage, or unusual activity.',
  },
  {
    title: 'Data & Compliance',
    description:
      'We handle personal data in line with applicable regulations and best practices. Booking data, identity documents, and payment information are stored securely with audited SaaS partners whenever possible.',
  },
  {
    title: 'Monitoring & Improvement',
    description:
      'Security is an ongoing process. We review procedures regularly, collect feedback from guests and owners, and update our standards as new risks and regulations emerge.',
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="bg-white">
      <PageContainer className="space-y-10 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Security &amp; Risk Management</h2>
          <p className="text-base text-ink/70">Protecting your assets, your guests, and your data.</p>
          <p className="mx-auto max-w-3xl text-sm text-ink/70 sm:text-base">
            At KHH Global Projects, security is built into every step of our property management workflow. From smart access
            control to compliant guest registration, we ensure that both owners and guests are protected at all times.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white/90 p-5 text-left shadow-soft backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
