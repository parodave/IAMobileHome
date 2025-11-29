// components/property/PropertyCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Property } from '../../lib/properties';
import { ImageCarousel } from './ImageCarousel';
import { BookingBar } from './BookingBar';
import { CalendarPreview } from './CalendarPreview';
import DownloadPdfButton from './DownloadPdfButton';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.article
      className="flex h-full flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="space-y-4">
        <ImageCarousel images={property.images} title={property.title} />
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink/60">
            <span>{property.city}</span>
            <span>{property.surface} m² • {property.maxGuests} pers.</span>
          </div>
          <h3 className="text-2xl font-semibold text-ink">{property.title}</h3>
          <p className="text-ink/70">{property.subtitle}</p>
          <p className="text-sm text-ink/70">{property.description}</p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm text-ink/80 sm:grid-cols-3">
            <div className="rounded-md border border-slate-100 bg-soft px-3 py-2 shadow-inner">
              <p className="text-xs uppercase text-ink/60">Chambres</p>
              <p className="font-semibold text-ink">{property.bedrooms}</p>
            </div>
            <div className="rounded-md border border-slate-100 bg-soft px-3 py-2 shadow-inner">
              <p className="text-xs uppercase text-ink/60">Salles de bain</p>
              <p className="font-semibold text-ink">{property.bathrooms}</p>
            </div>
            <div className="rounded-md border border-slate-100 bg-soft px-3 py-2 shadow-inner">
              <p className="text-xs uppercase text-ink/60">Adresse</p>
              <p className="font-semibold text-ink">{property.address}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-ink/80 shadow-soft"
              >
                {amenity}
              </span>
            ))}
          </div>
          <BookingBar
            airbnbUrl={property.airbnbUrl}
            whatsappPhone={property.whatsappPhone}
            labelCity={property.city}
          />
          <DownloadPdfButton propertyId={property.id} />
        </div>
        <CalendarPreview />
      </div>
    </motion.article>
  );
}
