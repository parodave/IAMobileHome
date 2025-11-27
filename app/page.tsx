import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { HeroSection } from '../components/sections/HeroSection';
import { ApartmentsSection } from '../components/sections/ApartmentsSection';
import { HouseRulesSection } from '../components/sections/HouseRulesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { LegalSection } from '../components/sections/LegalSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="space-y-2">
        <HeroSection />
        <ApartmentsSection />
        <HouseRulesSection />
        <ContactSection />
        <LegalSection />
      </main>
      <SiteFooter />
    </div>
  );
}
// TODO: préparer l'ajout futur de /admin ou /dashboard en suivant la même architecture de layout.
