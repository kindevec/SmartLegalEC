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
    },
    {
      id: 'metroeje',
      name: 'Metroeje Cía. Ltda.',
    },
    {
      id: 'global-support',
      name: 'Global Support S.A.',
    },
    {
      id: 'salazar',
      name: 'Centro Oftalmológico Dr. Raúl Salazar',
    },
    {
      id: 'zhm',
      name: 'ZHM Seguros S.A.',
      category: 'Seguros Corporativos',
      logo: '/clients/zhm-dark.webp',
      url: 'https://www.zhmseguros.com/',
      aspectClass: 'h-7 sm:h-8 md:h-9',
    },
    {
      id: 'scrumz',
      name: 'Scrumz Gestión Inmobiliaria',
    },
    {
      id: 'medicgo',
      name: 'MedicGo S.A.S.',
    },
    {
      id: 'fias',
      name: 'Fondo de Inversión Ambiental Sostenible (FIAS)',
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
          animation: clientMarqueeMotion 140s linear infinite;
          will-change: transform;
        }
        .client-marquee-container:hover .client-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-24 bg-[#0A66FF]/5 blur-3xl pointer-events-none" />

      {/* Title with decorative horizontal accent lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#0A66FF]" />
          <h3 className="text-[10px] sm:text-[11px] md:text-xs font-extrabold uppercase tracking-widest text-[#93C5FD] font-heading text-center">
            EMPRESAS QUE CONFÍAN EN NOSOTROS
          </h3>
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#0A66FF]" />
        </div>
      </div>

      {/* Infinite Rotating Marquee Panel - Full Screen Width (Edge to Edge) */}
      <div 
        className="client-marquee-container relative w-full overflow-hidden flex items-center select-none py-2 z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
        }}
      >
        <div className="client-marquee-track gap-10 sm:gap-14 md:gap-18 lg:gap-20 py-2">
          {marqueeItems.map((client, index) => {
            const content = (
              <div className="h-10 sm:h-12 md:h-14 px-2 sm:px-3 flex items-center justify-center transition-all duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.aspectClass} max-w-[130px] sm:max-w-[155px] md:max-w-[185px] w-auto object-contain transition-all duration-300 filter drop-shadow-[0_0_1px_rgba(255,255,255,0.75)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_18px_rgba(147,197,253,0.8)] group-hover:scale-110 opacity-90 group-hover:opacity-100`}
                  loading="lazy"
                />
              </div>
            );

            if (client.url) {
              return (
                <a
                  key={`${client.id}-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer shrink-0 transition-transform block"
                  title={`${client.name} - ${client.category}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={`${client.id}-${index}`}
                className="group cursor-default shrink-0 transition-transform block"
                title={`${client.name} - ${client.category}`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


