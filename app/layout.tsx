import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import FloatingWhatsAppButton from '@/components/common/FloatingWhatsAppButton';

export const metadata: Metadata = {
  title: 'KHH Global Projects | Appartements à Marrakech et Tanger',
  description:
    'Gestion premium d\'appartements haut de gamme à Marrakech et Tanger avec hospitalité attentive et design contemporain.',
  openGraph: {
    title: 'KHH Global Projects | Appartements à Marrakech et Tanger',
    description:
      'Sélection d\'appartements élégants à Marrakech et Tanger, gérés par KHH Global Projects.',
    url: 'https://khh-global-projects.com',
    siteName: 'KHH Global Projects',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'KHH Global Projects'
      }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  metadataBase: new URL('https://khh-global-projects.com')
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'KHH Global Projects',
    url: 'https://khh-global-projects.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
      addressLocality: 'Marrakech'
    },
    areaServed: ['Marrakech', 'Tanger'],
    description:
      'Gestion d\'appartements premium au Maroc, avec hospitalité et services personnalisés.',
    telephone: '+212600000000'
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
