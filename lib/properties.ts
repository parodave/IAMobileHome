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
    images: [
      '/images/marrakech-1.jpg',
      '/images/marrakech-2.jpg',
      '/images/marrakech-3.jpg',
      '/images/marrakech-4.jpg',
      '/images/marrakech-5.jpg',
      '/images/marrakech-6.jpg',
      '/images/marrakech-7.jpg'
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
    subtitle: 'Panorama sur l\'Atlantique, lignes épurées',
    description:
      'Adresse élégante sur la corniche, volumes généreux et terrasses baignées de soleil. Texte provisoire en français à compléter.',
    images: [
      '/images/tanger-1.jpg',
      '/images/tanger-2.jpg',
      '/images/tanger-3.jpg',
      '/images/tanger-4.jpg',
      '/images/tanger-5.jpg',
      '/images/tanger-6.jpg',
      '/images/tanger-7.jpg',
      '/images/tanger-8.jpg'
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
