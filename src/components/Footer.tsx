import React from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO, PRACTICE_AREAS } from '../data/content';
import { PageRoute } from '../types';
import { AnimatedContainer } from './ui/footer-section';
import { Linkedin, Instagram, ArrowUp, Mail, MapPin, Scale, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0B1D3A] text-slate-300 border-t border-[#D0D7E2]/15 pt-8 pb-24 lg:pb-8 overflow-hidden text-xs">
      {/* Top Ambient Glow / Radial Accent Line */}
      <div className="absolute top-0 right-1/2 left-1/2 h-[1px] w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0A66FF]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-slate-700/60">
          
          {/* Col 1: Brand Info & Bio */}
          <AnimatedContainer delay={0.1} className="lg:col-span-4 space-y-3">
            <button 
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="text-left cursor-pointer focus:outline-none"
            >
              <Logo variant="dark" size="sm" />
            </button>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xs">
              Asesoría jurídica en Protección de Datos (LOPDP), Contratos Tech, Telecomunicaciones y Negocios Digitales en Ecuador.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#0A66FF] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="LinkedIn oficial de SmartLegalEC"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#0A66FF] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Instagram oficial de SmartLegalEC"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hola SmartLegalEC, me gustaría solicitar una consulta jurídica.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="WhatsApp oficial de SmartLegalEC"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </AnimatedContainer>

          {/* Col 2: Áreas de Práctica Quick Links */}
          <AnimatedContainer delay={0.2} className="lg:col-span-3 space-y-2">
            <div className="font-bold text-[11px] uppercase tracking-wider text-white flex items-center gap-1.5">
              <Scale className="w-3 h-3 text-[#0A66FF]" />
              <span>Áreas de Práctica</span>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => { onNavigate('area-detail', { areaId: 'lopdp' }); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Protección de Datos & LOPDP
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('area-detail', { areaId: 'tech' }); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tecnología & SaaS
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('area-detail', { areaId: 'telecom' }); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Telecomunicaciones & ARCOTEL
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('areas'); scrollToTop(); }}
                  className="text-[#60A5FA] hover:text-[#93C5FD] transition-colors cursor-pointer inline-flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>Catálogo completo →</span>
                </button>
              </li>
            </ul>
          </AnimatedContainer>

          {/* Col 3: Navegación Institucional */}
          <AnimatedContainer delay={0.3} className="lg:col-span-2 space-y-2">
            <div className="font-bold text-[11px] uppercase tracking-wider text-white">
              Navegación
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre la Firma
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('insights'); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Legal Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </AnimatedContainer>

          {/* Col 4: Contacto Institucional & Datos Oficiales */}
          <AnimatedContainer delay={0.4} className="lg:col-span-3 space-y-2">
            <div className="font-bold text-[11px] uppercase tracking-wider text-white">
              Contacto
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="font-medium text-white text-xs">
                Abg. Luis Fernando Guerra Padilla
              </p>
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-[#0A66FF] shrink-0" />
                <span>Quito, Ecuador</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#0A66FF] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-slate-300 hover:text-[#0A66FF] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0A66FF] hover:bg-[#0852cc] text-white font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Solicitar Consulta
                </button>
              </div>
            </div>
          </AnimatedContainer>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <AnimatedContainer delay={0.5} className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name} • Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Quito, Ecuador</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer font-semibold"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </AnimatedContainer>

      </div>
    </footer>
  );
};

export default Footer;
