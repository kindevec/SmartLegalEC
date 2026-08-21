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
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/25 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Abrir WhatsApp para consulta directa"
      >
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="text-xs font-bold tracking-tight">
          ¿Conversemos?
        </span>
      </a>
    </aside>
  );
};
