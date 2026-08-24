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
      id: 'global-support',
      name: 'Global Support',
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
      id: 'quala',
      name: 'Quala',
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
      id: 'factec',
      name: 'FACTEC',
      render: () => (
        <div className="font-heading font-black text-base sm:text-lg md:text-xl tracking-widest text-slate-200 group-hover:text-white transition-colors">
          FACTEC
        </div>
      )
    },
    {
      id: 'zhm-broker',
      name: 'ZHM Broker',
      render: () => (
        <div className="flex flex-col items-center justify-center">
          <span className="font-heading font-black text-base sm:text-lg md:text-xl tracking-wider leading-none text-slate-200 group-hover:text-white transition-colors">
            ZHM
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.35em] text-slate-400 group-hover:text-[#93C5FD] transition-colors mt-0.5 uppercase">
            BROKER
          </span>
        </div>
      )
    },
    {
      id: 'medicgo',
      name: 'Medicgo',
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
          animation: clientMarqueeMotion 38s linear infinite;
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


