// components/sections/SecuritySection.tsx
"use client";

export default function SecuritySection() {
  return (
    <section id="security" className="w-full py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Sécurité & Conformité</h2>

      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        Placeholder expliquant les mesures de sécurité, conformité légale, maintenance, procédures internes, etc. (I will edit content later.)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Sécurité du logement</h3>
          <ul className="list-disc pl-6 text-slate-600 text-sm space-y-1">
            <li>Serrure sécurisée / porte blindée</li>
            <li>Extincteur disponible</li>
            <li>Détecteur de fumée</li>
            <li>Éclairage extérieur</li>
          </ul>
        </div>

        <div className="p-6 border rounded-2xl bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Conformité & gestion</h3>
          <ul className="list-disc pl-6 text-slate-600 text-sm space-y-1">
            <li>Ménage professionnel entre chaque séjour</li>
            <li>Équipe de maintenance dédiée</li>
            <li>Respect des réglementations locales</li>
            <li>Support WhatsApp 24/7</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
