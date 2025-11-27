import { properties } from '../../lib/properties';
import { PageContainer } from '../layout/PageContainer';
import { PropertyCard } from '../property/PropertyCard';

export function ApartmentsSection() {
  return (
    <section id="apartments" className="bg-white">
      <PageContainer className="space-y-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Collection</p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Appartements</h2>
            <p className="mt-2 max-w-2xl text-base text-ink/70">
              Deux adresses phares à Marrakech et Tanger. Sélectionnez votre destination pour découvrir les détails, services et réservations.
            </p>
          </div>
          <span className="text-sm text-ink/60">Défilement horizontal pour explorer les visuels</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
