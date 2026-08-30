import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';
import { PageRoute } from '../types';
import { 
  Sparkles, 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  Code2, 
  Radio 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string; areaFilter?: 'all' | 'lopdp' | 'tech' | 'telecom' }) => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDiagnostic }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Materialización muy suave y gradual a lo largo de 280px de scroll
          const progress = Math.min(Math.max(y / 280, 0), 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Inicializar con el scroll actual
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    setServicesDropdownOpen(false);
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (filter: 'all' | 'lopdp' | 'tech' | 'telecom') => {
    setServicesDropdownOpen(false);
    onNavigate('areas', { areaFilter: filter });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Inicio', route: 'home' },
    { label: 'Servicios', route: 'areas' },
    { label: 'Sobre Mí', route: 'about' },
    { label: 'Casos de Éxito', route: 'insights' },
    { label: 'Contacto', route: 'contact' },
  ];

  const serviceCategories: {
    id: 'lopdp' | 'tech' | 'telecom';
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    colorClass: string;
    bgClass: string;
  }[] = [
    {
      id: 'lopdp',
      label: 'Protección de Datos y Privacidad',
      description: 'Adecuación LOPDP, función de DPD externo y auditorías',
      icon: ShieldCheck,
      colorClass: 'text-[#0A66FF]',
      bgClass: 'bg-[#0A66FF]/15 border-[#0A66FF]/30',
    },
    {
      id: 'tech',
      label: 'Tecnología y Negocios Digitales',
      description: 'Contratos SaaS, desarrollo software, IA y cloud computing',
      icon: Code2,
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-500/15 border-purple-500/30',
    },
    {
      id: 'telecom',
      label: 'Telecomunicaciones y Regulación',
      description: 'Títulos habilitantes, gestión ARCOTEL y servicios TIC',
      icon: Radio,
      colorClass: 'text-[#38BDF8]',
      bgClass: 'bg-sky-500/15 border-sky-500/30',
    },
  ];

  // Cálculo de materialización descendente (de arriba hacia abajo)
  const solidStop = Math.max(0, scrollProgress * 115 - 15);
  const fadeStop = Math.min(100, scrollProgress * 130 + 15);

  const bgAlpha = Math.min(0.98, 0.15 + scrollProgress * 0.83);
  const blurPx = scrollProgress * 16;
  const borderAlpha = scrollProgress > 0.6 ? ((scrollProgress - 0.6) / 0.4) * 0.85 : 0;
  const shadowAlpha = scrollProgress > 0.5 ? ((scrollProgress - 0.5) / 0.5) * 0.45 : 0;

  const isScrolled = scrollProgress > 0.5;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ease-out ${
        isScrolled ? 'py-2.5 sm:py-3.5' : 'py-5 sm:py-6'
      }`}
    >
      {/* Capa de fondo que se materializa progresivamente de arriba hacia abajo */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-[opacity,box-shadow] duration-200 ease-out"
        style={{
          opacity: scrollProgress > 0.005 ? 1 : 0,
          backgroundColor: `rgba(11, 29, 58, ${bgAlpha})`,
          backdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
          WebkitBackdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
          maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${solidStop}%, rgba(0,0,0,0) ${fadeStop}%)`,
          WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${solidStop}%, rgba(0,0,0,0) ${fadeStop}%)`,
          borderBottom: borderAlpha > 0.01 ? `1px solid rgba(30, 41, 59, ${borderAlpha})` : '1px solid transparent',
          boxShadow: shadowAlpha > 0.01 ? `0 10px 30px -10px rgba(0, 0, 0, ${shadowAlpha})` : 'none',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="focus:outline-none cursor-pointer text-left shrink-0"
        >
          <Logo variant="dark" size="md" />
        </button>

        {/* Center Navigation Bar */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isServices = link.route === 'areas';
            const isActive = currentPage === link.route || (isServices && currentPage === 'area-detail');

            if (isServices) {
              return (
                <div
                  key={link.label}
                  className="relative group py-1"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <button
                    onClick={() => handleNavClick('areas')}
                    className={`text-xs font-semibold tracking-wide transition-all cursor-pointer relative py-1 inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-[#D4AF37]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D4AF37]' : 'text-slate-400 group-hover:text-white'}`} />
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu for Servicios */}
                  {servicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 p-2 rounded-2xl bg-[#071326]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 space-y-1"
                    >
                      <div className="px-3 py-1.5 border-b border-slate-800">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-heading">
                          Áreas de Especialización
                        </span>
                      </div>

                      {serviceCategories.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleServiceSelect(item.id)}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition-all flex items-start gap-3 group/item cursor-pointer"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${item.bgClass}`}>
                              <IconComponent className={`w-4 h-4 ${item.colorClass}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-100 group-hover/item:text-[#D4AF37] transition-colors leading-tight">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-slate-400 leading-snug mt-0.5">
                                {item.description}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.route)}
                className={`text-xs font-semibold tracking-wide transition-all cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#D4AF37]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button: Golden Pill Button (as in the mockup) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            id="nav-quote-cta"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Consulta Gratuita</span>
            <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 text-slate-950" />
            </div>
          </button>

          {/* Mobile Direct WhatsApp Button */}
          <a
            href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola SmartLegalEC, me gustaría agendar una consulta jurídica.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:hidden items-center justify-center p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
            aria-label="WhatsApp Directo"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

