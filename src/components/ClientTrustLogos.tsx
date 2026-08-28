import React from 'react';

interface ClientTrustLogosProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const ClientTrustLogos: React.FC<ClientTrustLogosProps> = ({ 
  className = '',
  variant = 'dark'
}) => {
  const isDark = variant === 'dark';

  const clientLogos = [
    {
      id: 'quala',
      name: 'Quala Ecuador S.A.',
      render: () => (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8] group-hover:rotate-12 transition-transform">
            <circle cx="12" cy="12" r="9" className="stroke-slate-400 group-hover:stroke-[#38BDF8] transition-colors" />
            <path d="M12 7c-2.5 0-4 2-4 5s2 5 4 5 4-2 4-5-1.5-5-4-5z" />
            <path d="M8 15c1.5 2 4 2 5.5 1" />
          </svg>
          <span className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-slate-200 group-hover:text-white transition-colors">
            Quala
          </span>
        </div>
      )
    },
    {
      id: 'metroeje',
      name: 'Metroeje Cía. Ltda.',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#0A66FF]/20 border border-[#0A66FF]/40 flex items-center justify-center text-[#93C5FD] group-hover:bg-[#0A66FF] group-hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
              <path d="M4 19L12 5L20 19" />
              <path d="M7 14h10" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm sm:text-base md:text-lg tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors">
              METROEJE
            </span>
            <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.25em] text-slate-400 group-hover:text-[#93C5FD] transition-colors mt-0.5 uppercase">
              INFRAESTRUCTURA
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'global-support',
      name: 'Global Support S.A.',
      render: () => (
        <div className="flex flex-col items-center justify-center">
          <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors">
            GLOBAL
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.3em] text-slate-400 group-hover:text-[#93C5FD] transition-colors mt-0.5 uppercase">
            SUPPORT
          </span>
        </div>
      )
    },
    {
      id: 'factec',
      name: 'FACTEC S.A.',
      render: () => (
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#0A66FF] animate-pulse" />
          <span className="font-heading font-black text-base sm:text-lg md:text-xl tracking-widest text-slate-200 group-hover:text-white transition-colors">
            FACTEC
          </span>
        </div>
      )
    },
    {
      id: 'salazar',
      name: 'Centro Oftalmológico Dr. Raúl Salazar',
      render: () => (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xs sm:text-sm md:text-base leading-none text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
              DR. RAÚL SALAZAR
            </span>
            <span className="text-[7px] sm:text-[8px] font-semibold tracking-wider text-slate-400 group-hover:text-emerald-300 transition-colors uppercase">
              CENTRO OFTALMOLÓGICO
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'zhm',
      name: 'ZHM Seguros S.A.',
      render: () => (
        <div className="flex flex-col items-center justify-center">
          <span className="font-heading font-black text-base sm:text-lg md:text-xl tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors">
            ZHM
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.35em] text-slate-400 group-hover:text-[#93C5FD] transition-colors mt-0.5 uppercase">
            SEGUROS
          </span>
        </div>
      )
    },
    {
      id: 'scrumz',
      name: 'Scrumz Gestión Inmobiliaria',
      render: () => (
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#D4AF37]">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
          </svg>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors">
              SCRUMZ
            </span>
            <span className="text-[7px] sm:text-[7.5px] font-semibold tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors uppercase">
              INMOBILIARIA
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'ponte-selva',
      name: 'Industria Piolera Ponte Selva',
      render: () => (
        <div className="flex flex-col items-center justify-center">
          <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
            PONTE SELVA
          </span>
          <span className="text-[7px] sm:text-[7.5px] font-bold tracking-[0.2em] text-slate-400 group-hover:text-[#93C5FD] transition-colors mt-0.5 uppercase">
            INDUSTRIA PIOLERA
          </span>
        </div>
      )
    },
    {
      id: 'medicgo',
      name: 'MedicGo S.A.S.',
      render: () => (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 border-slate-400 group-hover:border-[#38BDF8] flex items-center justify-center text-slate-300 group-hover:text-[#38BDF8] transition-colors">
            <span className="text-xs sm:text-sm font-black leading-none">+</span>
          </div>
          <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-wider text-slate-200 group-hover:text-white transition-colors">
            MEDICGO
          </span>
        </div>
      )
    },
    {
      id: 'fias',
      name: 'Fondo de Inversión Ambiental Sostenible (FIAS)',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm sm:text-base md:text-lg tracking-widest leading-none text-slate-200 group-hover:text-white transition-colors">
              FIAS
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] font-semibold tracking-wider text-slate-400 group-hover:text-emerald-300 transition-colors uppercase">
              FONDO AMBIENTAL
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'cotopaxi',
      name: 'Equipos Cotopaxi',
      render: () => (
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-400">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xs sm:text-sm md:text-base tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
              EQUIPOS COTOPAXI
            </span>
            <span className="text-[7px] sm:text-[7.5px] font-bold tracking-widest text-slate-400 group-hover:text-orange-300 transition-colors uppercase">
              MAQUINARIA
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'primavera',
      name: 'Unidad Educativa Primavera',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base leading-none text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
              U.E. PRIMAVERA
            </span>
            <span className="text-[7px] sm:text-[7.5px] font-semibold tracking-wider text-slate-400 group-hover:text-purple-300 transition-colors uppercase">
              EDUCACIÓN INTEGRAL
            </span>
          </div>
        </div>
      )
    },
  ];

  // Quadruple the array for perfectly seamless infinite marquee
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className={`w-full py-7 sm:py-9 ${isDark ? 'bg-[#071326] border-y border-slate-800/80 text-white' : 'bg-white border-y border-slate-200 text-slate-900'} relative overflow-hidden ${className}`}>
      {/* Dynamic Keyframes for Ultra-Smooth GPU Marquee */}
      <style>{`
        @keyframes clientMarqueeMotion {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .client-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clientMarqueeMotion 80s linear infinite;
          will-change: transform;
        }
        .client-marquee-container:hover .client-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-24 bg-[#0A66FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with decorative horizontal accent lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#0A66FF]" />
          <h3 className="text-[10px] sm:text-[11px] md:text-xs font-extrabold uppercase tracking-widest text-[#93C5FD] font-heading text-center">
            EMPRESAS QUE CONFÍAN EN NOSOTROS
          </h3>
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#0A66FF]" />
        </div>

        {/* Infinite Rotating Marquee Panel with Edge Fade Mask */}
        <div 
          className="client-marquee-container relative w-full overflow-hidden flex items-center select-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="client-marquee-track gap-10 sm:gap-14 md:gap-18 lg:gap-20 py-2">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group cursor-default py-2 px-4 rounded-xl hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-105"
                title={client.name}
              >
                {client.render()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


