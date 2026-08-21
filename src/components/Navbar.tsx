import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';
import { PageRoute } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDiagnostic }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Inicio', route: 'home' },
    { label: 'Servicios', route: 'areas' },
    { label: 'Sobre Mí', route: 'about' },
    { label: 'Insights', route: 'insights' },
    { label: 'Contacto', route: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1D3A]/95 backdrop-blur-md py-3 shadow-xl border-b border-slate-800/80'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
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
            const isActive = currentPage === link.route || (link.route === 'areas' && currentPage === 'area-detail');
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
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
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

