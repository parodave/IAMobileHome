// components/property/DownloadPdfButton.tsx
'use client';

type DownloadPdfButtonProps = {
  propertyId: string;
};

export default function DownloadPdfButton({ propertyId }: DownloadPdfButtonProps) {
  const handleClick = () => {
    window.open(`/api/pdf/${propertyId}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full mt-4 py-2 rounded-xl bg-black text-white text-center hover:opacity-90 transition"
    >
      Télécharger la fiche PDF
    </button>
  );
}
