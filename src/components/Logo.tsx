import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isDark = variant === 'dark';

  // Tamaños ampliados para mayor impacto y legibilidad
  const textHeights = {
    sm: 'h-7 sm:h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-13 sm:h-15',
    xl: 'h-16 sm:h-18',
  };

  const iconHeights = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9 sm:h-10 sm:w-10',
    lg: 'h-11 w-11 sm:h-12 sm:w-12',
    xl: 'h-14 w-14 sm:h-16 sm:w-16',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-xl sm:text-2xl md:text-3xl',
    xl: 'text-2xl sm:text-3xl md:text-4xl',
  };

  const isotypeBase = isDark 
    ? '/logos/12_isotipo_blanco_transparente' 
    : '/logos/11_isotipo_color_transparente';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Isotipo Oficial a la Izquierda */}
      <picture className="inline-flex items-center">
        <source srcSet={`${isotypeBase}.avif`} type="image/avif" />
        <source srcSet={`${isotypeBase}.webp`} type="image/webp" />
        <img
          src={`${isotypeBase}.png`}
          alt="SmartLegalEC Isotipo"
          width="48"
          height="48"
          decoding="async"
          className={`${iconHeights[size]} object-contain shrink-0 transition-transform duration-200 hover:scale-105`}
        />
      </picture>
      
      {/* Logotipo Tipográfico Limpio: "SMARTLEGALEC" */}
      <span className={`font-heading font-extrabold tracking-tight transition-colors duration-200 ${textSizes[size]} ${
        isDark ? 'text-white' : 'text-[#0B1D3A]'
      }`}>
        <span>SMART</span>
        <span className="text-[#0A66FF]">LEGAL</span>
        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>EC</span>
      </span>
    </div>
  );
};

