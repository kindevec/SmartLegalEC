import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isDark = variant === 'dark';

  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-11 sm:h-13',
    xl: 'h-14 sm:h-16',
  };

  const logoBase = isDark 
    ? '/logos/10_horizontal_blanco_transparente' 
    : '/logos/01_horizontal_color_fondo_claro';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <picture className="inline-flex items-center">
        <source srcSet={`${logoBase}.avif`} type="image/avif" />
        <source srcSet={`${logoBase}.webp`} type="image/webp" />
        <img
          src={`${logoBase}.png`}
          alt="SmartLegalEC"
          width="240"
          height="60"
          decoding="async"
          className={`${heights[size]} w-auto object-contain transition-transform duration-200 hover:scale-102`}
        />
      </picture>
    </div>
  );
};


