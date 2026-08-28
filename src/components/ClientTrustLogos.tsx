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
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/quala-logo.webp" type="image/webp" />
            <img
              src="https://www.quala.com.ec/wp-content/uploads/sites/10/2022/04/QualaLogo.png"
              alt="Quala Ecuador S.A."
              width="225"
              height="67"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-110 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </picture>
        </div>
      )
    },
    {
      id: 'metroeje',
      name: 'Metroeje Cía. Ltda.',
      render: () => (
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/metroeje-logo.webp" type="image/webp" />
            <img
              src="/logos/metroeje-logo.png"
              alt="Metroeje Cía. Ltda."
              width="1920"
              height="325"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
              loading="lazy"
            />
          </picture>
        </div>
      )
    },
    {
      id: 'global-support',
      name: 'Global Support S.A.',
      render: () => (
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/globalsupport-logo.webp" type="image/webp" />
            <img
              src="/logos/globalsupport-logo.png"
              alt="Global Support S.A."
              width="863"
              height="234"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
              style={{ filter: isDark ? 'brightness(1.1)' : 'brightness(0)' }}
              loading="lazy"
            />
          </picture>
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
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/salazar-logo.webp" type="image/webp" />
            <img
              src="/logos/salazar-logo.png"
              alt="Centro Oftalmológico Dr. Raúl Salazar"
              width="1172"
              height="328"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
              loading="lazy"
            />
          </picture>
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
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/ponte-selva-logo.webp" type="image/webp" />
            <img
              src="/logos/ponte-selva-logo.png"
              alt="Industria Piolera Ponte Selva"
              width="519"
              height="207"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
              loading="lazy"
            />
          </picture>
        </div>
      )
    },
    {
      id: 'medicgo',
      name: 'MedicGo S.A.S.',
      render: () => (
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/medicgo-logo.webp" type="image/webp" />
            <img
              src="/logos/medicgo-logo.png"
              alt="MedicGo S.A.S."
              width="208"
              height="55"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105 brightness-110"
              loading="lazy"
            />
          </picture>
        </div>
      )
    },
    {
      id: 'fias',
      name: 'Fondo de Inversión Ambiental Sostenible (FIAS)',
      render: () => (
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="/logos/fias-logo.webp" type="image/webp" />
            <img
              src="/logos/fias-logo.png"
              alt="Fondo de Inversión Ambiental Sostenible (FIAS)"
              width="271"
              height="75"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105 brightness-110"
              loading="lazy"
            />
          </picture>
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


