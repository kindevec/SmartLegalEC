import React from 'react';
import { HERO_PILLARS, BRAND_INFO } from '../data/content';
import { MessageSquare, ArrowDown, ShieldCheck, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  const whatsappUrl = `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hola SmartLegalEC, me gustaría agendar una consulta jurídica sobre derecho digital y cumplimiento en Ecuador.'
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-center bg-[#0B1D3A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800"
    >
      {/* Subtle architectural geometric grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Ambient soft glow - refined without oversaturated glassmorphism */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#0A66FF]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0A66FF]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline & Location pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#0A66FF] animate-pulse"></span>
            <span>Tecnología • Protección de Datos • Telecomunicaciones</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 bg-slate-900/60 border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-[#0A66FF]" />
            <span>Quito, Ecuador</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl mb-10">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6">
            Derecho para empresas que operan en un{' '}
            <span className="text-[#0A66FF]">entorno digital.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
            Asesoría jurídica especializada en protección de datos personales (LOPDP), contratos tecnológicos, servicios en la nube, inteligencia artificial y regulación de telecomunicaciones en Ecuador.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-base bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-lg shadow-[#0A66FF]/20 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>CONVERSEMOS</span>
          </a>

          <a
            href="#areas"
            id="hero-services-btn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
          >
            <span>VER SERVICIOS</span>
            <ArrowDown className="w-4 h-4 text-[#0A66FF]" />
          </a>

          <button
            onClick={onOpenDiagnostic}
            id="hero-diagnostic-btn"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[#93C5FD] hover:text-white bg-[#0A66FF]/10 hover:bg-[#0A66FF]/20 border border-[#0A66FF]/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0A66FF]" />
            <span>Diagnóstico Rápido LOPDP (2 min)</span>
          </button>
        </div>

        {/* 3 Strategic Pillars - Editorial Horizontal Rhythm (Anti-AI UI: Zero clunky container bloat) */}
        <div className="pt-10 border-t border-slate-800/90">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">
            Nuestros Pilares Estratégicos
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {HERO_PILLARS.map((pillar) => (
              <div key={pillar.number} className="flex flex-col">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-sm font-bold text-[#0A66FF]">{pillar.number}</span>
                  <div className="h-px flex-1 bg-slate-800" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
