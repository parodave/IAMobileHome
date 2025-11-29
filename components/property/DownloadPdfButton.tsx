// components/property/DownloadPdfButton.tsx
'use client';

import { motion } from 'framer-motion';

type DownloadPdfButtonProps = {
  propertyId: string;
};

export default function DownloadPdfButton({ propertyId }: DownloadPdfButtonProps) {
  const handleClick = () => {
    window.open(`/api/pdf/${propertyId}`, '_blank');
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full mt-4 py-2 rounded-xl bg-black text-white text-center transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
    >
      Télécharger la fiche PDF
    </motion.button>
  );
}
