// components/common/FloatingWhatsAppButton.tsx
"use client";

const WHATSAPP_PHONE = "+212600000000"; // TODO: replace with real number

const FloatingWhatsAppButton = () => {
  const message = encodeURIComponent(
    "Bonjour, je suis intéressé par un séjour avec KHH Global Projects."
  );
  const phone = WHATSAPP_PHONE.replace("+", "");
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ouvrir WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 rounded-full px-4 py-2 bg-black text-white shadow-xl flex items-center gap-2 hover:scale-105 transition h-12"
    >
      <span className="flex h-6 w-6 items-center justify-center" aria-hidden>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M16 0C7.178 0 0 7.178 0 16c0 2.817.737 5.57 2.133 7.98L.057 32l8.237-2.047C10.637 30.265 13.29 31 16 31c8.822 0 16-7.178 16-16S24.822 0 16 0Zm0 29c-2.418 0-4.781-.644-6.84-1.862l-.489-.292-4.89 1.216 1.296-4.769-.318-.493C3.6 21.652 3 18.885 3 16 3 8.831 8.831 3 16 3s13 5.831 13 13-5.831 13-13 13Zm7.535-8.38c-.411-.206-2.423-1.195-2.799-1.33-.375-.137-.648-.206-.922.206-.272.411-1.061 1.331-1.3 1.603-.239.273-.479.309-.89.104-.411-.206-1.736-.641-3.303-2.042-1.22-1.087-2.04-2.43-2.279-2.842-.239-.411-.025-.633.18-.838.184-.184.411-.479.617-.718.206-.239.275-.411.411-.686.137-.273.068-.515-.034-.72-.104-.206-.921-2.225-1.262-3.042-.332-.796-.669-.686-.922-.697-.238-.01-.511-.012-.785-.012s-.719.104-1.097.515c-.375.411-1.44 1.404-1.44 3.423 0 2.018 1.473 3.965 1.679 4.238.206.273 2.897 4.425 7.012 6.202.981.424 1.746.676 2.342.867.984.313 1.88.27 2.587.164.79-.118 2.423-.991 2.764-1.947.342-.958.342-1.779.239-1.947-.104-.17-.375-.273-.786-.48Z" />
        </svg>
      </span>
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
