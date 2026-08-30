import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hola SmartLegalEC, me gustaría solicitar una consulta jurídica sobre derecho digital y protección de datos.'
  )}`;

  return (
    <aside aria-label="Contacto flotante" className="hidden lg:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="desktop-floating-whatsapp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Abrir WhatsApp para consulta directa"
        title="Abrir WhatsApp para consulta directa"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </aside>
  );
};
