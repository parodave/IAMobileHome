// lib/faq.ts

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Comment se passe le check-in ?",
    answer:
      "Texte placeholder expliquant le check-in autonome, remise des clés, heure d’arrivée, etc. (je modifierai plus tard).",
  },
  {
    question: "Le Wi-Fi est-il adapté au télétravail ?",
    answer:
      "Texte placeholder sur la qualité et la stabilité du Wi-Fi, idéal pour appels vidéo et travail à distance.",
  },
  {
    question: "Le stationnement est-il facile ?",
    answer: "Texte placeholder expliquant les options de stationnement à proximité, gratuit ou payant.",
  },
  {
    question: "Y a-t-il une caution ou des frais supplémentaires ?",
    answer: "Texte placeholder expliquant la politique de caution, frais de ménage, etc.",
  },
];
