import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hola SmartLegalEC, me gustaría solicitar una consulta jurídica sobre derecho digital y protección de datos.'
  )}`;

  return (
    <aside 
      aria-label="Contacto flotante" 
      className="fixed bottom-20 sm:bottom-22 lg:bottom-6 right-4 sm:right-6 z-40 lg:z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative group flex items-center justify-center cursor-pointer select-none touch-manipulation"
        aria-label="Abrir WhatsApp para consulta directa con SmartLegalEC"
        title="Contactar por WhatsApp a SmartLegalEC"
      >
        {/* Soft Ambient Glowing Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000 pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] opacity-40 blur-md group-hover:opacity-75 transition-opacity pointer-events-none" />

        {/* Main Floating Button Badge (Mobile-optimized + Desktop Luxury) */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full bg-gradient-to-tr from-[#20ba59] via-[#25D366] to-[#2be873] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] border-2 border-white/30 transition-all duration-300 group-hover:scale-110 group-active:scale-95">
          <WhatsAppIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
        </div>

        {/* Floating Tooltip Pill (Reveals on Desktop Hover Only) */}
        <div className="hidden lg:flex absolute right-full mr-3.5 px-3.5 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-white border border-slate-700/80 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-xl pointer-events-none items-center gap-1.5 font-heading">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_6px_#25D366]" />
          <span>¿Necesitas asesoría? <strong>Escríbenos</strong></span>
        </div>
      </a>
    </aside>
  );
};
