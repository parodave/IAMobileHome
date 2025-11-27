export type Property = {
  id: string;
  city: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  airbnbUrl: string;
  whatsappPhone: string;
  address: string;
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  surface: number;
};

export const properties: Property[] = [
  {
    id: 'marrakech-apartment',
    city: 'Marrakech',
    title: 'Appartement à Marrakech',
    subtitle: 'Design lumineux avec vue sur la palmeraie',
    description:
      'Appartement premium idéalement situé proche de la médina, finitions élégantes, lumière naturelle abondante et balcon paisible. Texte provisoire en français à ajuster.',
    // TODO: replace these Unsplash URLs with real Supabase image URLs later.
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529429617124-aee1f1650a5c?auto=format&fit=crop&w=1200&q=80'
    ],
    airbnbUrl: 'https://www.airbnb.com/rooms/marrakech-placeholder',
    whatsappPhone: '+212612345678',
    address: 'Quartier Hivernage, Marrakech',
    amenities: [
      'Wi-Fi fibre',
      'Climatisation',
      'Piscine rooftop',
      'Conciergerie 24/7',
      'Cuisine équipée',
      'Parking sécurisé'
    ],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    surface: 110
  },
  {
    id: 'tanger-apartment',
    city: 'Tanger',
    title: 'Appartement à Tanger',
    subtitle: "Panorama sur l'Atlantique, lignes épurées",
    description:
      'Adresse élégante sur la corniche, volumes généreux et terrasses baignées de soleil. Texte provisoire en français à compléter.',
    // TODO: replace these Unsplash URLs with real Supabase image URLs later.
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529429617124-aee1f1650a5c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&w=1200&q=80'
    ],
    airbnbUrl: 'https://www.airbnb.com/rooms/tanger-placeholder',
    whatsappPhone: '+212698765432',
    address: 'Corniche de Tanger, Tanger',
    amenities: [
      'Vue mer',
      'Terrasse ensoleillée',
      'Smart TV',
      'Blanchisserie',
      'Ascenseur privé',
      'Service de ménage'
    ],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    surface: 145
  }
];
// TODO: connect this à un futur panneau admin pour gérer les données dynamiquement.
