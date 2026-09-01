import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute } from '../types';
import { BRAND_INFO, METRICS, FOUNDER_PROFILE, CORPORATE_VALUES } from '../data/content';
import { Timeline, TimelineEntry } from '../components/ui/timeline';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { 
  Award, 
  Shield, 
  Zap, 
  HeartHandshake, 
  ArrowRight, 
  Quote,
  ShieldCheck,
  Code2,
  Radio,
  Scale,
  ChevronDown
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Structured Timeline Data with High-Impact Visual Cards and Clean Layout
  const aboutTimelineData: TimelineEntry[] = [
    // ==========================================
    // 01. LIDERAZGO & DIRECCIÓN (El Fundador)
    // ==========================================
    {
      title: "Liderazgo & Dirección",
      badge: "01. DIRECTOR & FUNDADOR",
      subtitle: FOUNDER_PROFILE.name,
      content: (
        <div className="space-y-6 w-full">
          {/* Visual 2-Column Founder Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
            {/* Left: Comprehensive Founder Bio & Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-start space-y-4 px-4 sm:px-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {FOUNDER_PROFILE.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0A66FF] mt-1 mb-4">
                  {FOUNDER_PROFILE.title}
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify-clean">
                  {/* Paragraph 0: Always visible on both mobile and desktop */}
                  <p>{FOUNDER_PROFILE.bio[0]}</p>

                  {/* Paragraphs 1 & 2: Visible on desktop by default, hidden on mobile until expanded */}
                  <div className={`space-y-3 ${isBioExpanded ? 'block' : 'hidden sm:block'}`}>
                    <p>{FOUNDER_PROFILE.bio[1]}</p>
                    <p>{FOUNDER_PROFILE.bio[2]}</p>
                  </div>

                  {/* Paragraphs 3+: Collapsible on all screens */}
                  <AnimatePresence>
                    {isBioExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="space-y-3 overflow-hidden"
                      >
                        {FOUNDER_PROFILE.bio.slice(3).map((paragraph, pIdx) => (
                          <p key={pIdx + 3}>{paragraph}</p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setIsBioExpanded((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66FF] hover:text-[#0852cc] pt-1 transition-colors cursor-pointer group select-none"
                    aria-expanded={isBioExpanded}
                  >
                    <span>{isBioExpanded ? 'Mostrar menos' : 'Leer biografía completa'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isBioExpanded ? 'rotate-180 text-[#0A66FF]' : 'group-hover:translate-y-0.5 text-[#0A66FF]'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: High-Impact Visual Photo Card */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group aspect-[4/5] sm:aspect-auto min-h-[390px] sm:min-h-[360px] lg:min-h-[420px] h-full w-full">
                <picture className="absolute inset-0 w-full h-full block">
                  <source srcSet="/cliente.avif" type="image/avif" />
                  <source srcSet="/cliente.webp" type="image/webp" />
                  <img
                    src="/cliente.webp"
                    alt={FOUNDER_PROFILE.name}
                    width="896"
                    height="1200"
                    className="w-full h-full object-cover object-top scale-[1.08] -translate-y-2.5 sm:scale-100 sm:translate-y-0 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent flex flex-col justify-end p-4 sm:p-6 z-10 pointer-events-none">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed text-left [text-wrap:pretty]">
                    "Atención personalizada y estratégica en cada proceso de adecuación y contrato digital."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 02. EXPERIENCIA & PRÁCTICA (Nueva sección entre Fundador y Valores)
    // ==========================================
    {
      title: "Experiencia Profesional",
      badge: "02. EXPERIENCIA & TRAYECTORIA",
      subtitle: "Sectores Clave de Asesoría Jurídica",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify-clean">
            Práctica jurídica especializada con enfoque transversal en sectores altamente regulados y proyectos tecnológicos:
          </p>

          {/* 4 Luminous Floating Cards (Institutional Gold Theme, 2x2 Grid on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 w-full">
            {FOUNDER_PROFILE.professionalExperience.map((exp, idx) => {
              const iconMap: Record<string, React.ReactNode> = {
                ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />,
                Code2: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />,
                Radio: <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />,
                Scale: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />,
              };

              const tagMap = [
                'Cumplimiento & LOPDP',
                'Software & Negocios Digitales',
                'Regulación & Telecomunicaciones',
                'Contratos & Estrategia',
              ];

              return (
                <div
                  key={idx}
                  className="relative rounded-none md:rounded-3xl bg-[#091224] border-0 md:border md:border-slate-800/80 p-5 sm:p-6 sm:py-7 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.18)] overflow-hidden flex flex-col justify-between gap-4 transition-all duration-300 md:hover:scale-[1.015] md:hover:border-[#D4AF37]/50 hover:shadow-2xl md:border-b-2 md:border-b-[#D4AF37]/70 group select-none"
                >
                  {/* Radiant Corner Aura Glow in Institutional Gold */}
                  <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-80 bg-gradient-to-bl from-[#D4AF37]/35 via-[#D4AF37]/15 to-transparent" />

                  {/* Ambient Sparkle Stars in Gold Glow Zone */}
                  <div className="absolute top-2.5 right-3 w-28 h-20 pointer-events-none opacity-80 select-none">
                    <span className="absolute top-1 right-3 text-white text-[10px] animate-pulse">✦</span>
                    <span className="absolute top-6 right-9 text-[#D4AF37] text-[13px] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]">✦</span>
                    <span className="absolute top-11 right-2 text-white/70 text-[8px]">✦</span>
                    <span className="absolute top-3 right-16 text-[#D4AF37]/70 text-[7px]">✦</span>
                  </div>

                  {/* Top Bar: Squircle Icon Badge & Category Tag */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 backdrop-blur-md shadow-md">
                      {iconMap[exp.icon] || <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />}
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider font-mono px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 text-[#D4AF37] backdrop-blur-xs shadow-xs">
                      {tagMap[idx]}
                    </span>
                  </div>

                  {/* Middle & Content: Area Title & Description */}
                  <div className="relative z-10 space-y-2 pt-1">
                    <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug font-heading tracking-tight group-hover:text-white transition-colors">
                      {exp.area}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal text-justify-clean">
                      {exp.description}
                    </p>
                  </div>

                  {/* Mobile Diffused Divider Line between stacked cards */}
                  {idx < FOUNDER_PROFILE.professionalExperience.length - 1 && (
                    <div className="md:hidden absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 via-50% to-transparent pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 03. FILOSOFÍA CORPORATIVA (Canvas Linear Divider)
    // ==========================================
    {
      title: "Filosofía Corporativa",
      badge: "03. VALORES RECTORES",
      subtitle: "Principios de Nuestra Práctica",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify-clean">
            Cuatro pilares que aseguran precisión técnica, ética inquebrantable y visión anticipatoria:
          </p>

          {/* Canvas-Anchored 2x2 Mobile / 4-Col Desktop Grid with Linear Dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-slate-200 w-full">
            {/* Valor 1 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-r border-b lg:border-b-0 border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    {CORPORATE_VALUES[0].title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#D4AF37] font-semibold mt-0.5">
                    {CORPORATE_VALUES[0].tagline}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify-clean">
                {CORPORATE_VALUES[0].description}
              </p>
            </div>

            {/* Valor 2 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    {CORPORATE_VALUES[1].title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#0A66FF] font-semibold mt-0.5">
                    {CORPORATE_VALUES[1].tagline}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A66FF]" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify-clean">
                {CORPORATE_VALUES[1].description}
              </p>
            </div>

            {/* Valor 3 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-r lg:border-r border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    {CORPORATE_VALUES[2].title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-purple-600 font-semibold mt-0.5">
                    {CORPORATE_VALUES[2].tagline}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify-clean">
                {CORPORATE_VALUES[2].description}
              </p>
            </div>

            {/* Valor 4 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    {CORPORATE_VALUES[3].title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-emerald-600 font-semibold mt-0.5">
                    {CORPORATE_VALUES[3].tagline}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify-clean">
                {CORPORATE_VALUES[3].description}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 04. IMPACTO & RESULTADOS (Canvas Linear Divider)
    // ==========================================
    {
      title: "Impacto & Resultados",
      badge: "04. MÉTRICAS CLAVE",
      subtitle: "Resultados Tangibles en Ecuador",
      content: (
        <div className="space-y-6 w-full">
          {/* Metrics Strip without outer box */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-y border-slate-200 py-6 sm:py-8 w-full">
            {METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="py-3 sm:py-1 px-4 sm:px-6 flex flex-col justify-start text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1D3A] font-heading tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 font-heading">
                  {metric.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed text-justify-clean">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 05. ALIANZA & CONTACTO DIRECTO
    // ==========================================
    {
      title: "Alianza & Contacto",
      badge: "05. CONVERSACIONES ESTRATÉGICAS",
      subtitle: "Hablemos de tu Organización",
      hideOnMobile: true,
      content: (
        <div className="relative rounded-none sm:rounded-3xl bg-gradient-to-br from-[#071326] via-[#0B1D3A] to-[#132742] text-white p-6 sm:p-8 shadow-xl border-t border-x sm:border border-slate-800 overflow-hidden space-y-5 w-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0A66FF]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block font-heading">
              Asesoría Legal Especializada
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight max-w-xl">
              ¿Tu empresa enfrenta un desafío jurídico?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal text-justify-clean">
              Si tu empresa enfrenta un desafío jurídico relacionado con protección de datos, tecnología o telecomunicaciones, estaré encantado de conocer el proyecto y analizar cómo podemos ayudarte.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-full">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer shadow-md text-center"
            >
              <span>Contactar</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Luis Fernando Guerra, me gustaría agendar una consulta sobre un requerimiento jurídico.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md text-center"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-0 sm:pb-8">
      {/* 1. HEADER SECTION with Seamless Full-Bleed Background */}
      <section className="relative bg-[#071326] text-white min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] h-auto pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-10 flex flex-col justify-center border-b border-slate-800 overflow-hidden">
        
        {/* Full-Bleed Thematic Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <picture className="w-full h-full">
            <source srcSet="/header-about.avif" type="image/avif" />
            <source srcSet="/header-about.webp" type="image/webp" />
            <img
              src="/header-about.webp"
              alt="Sobre Luis Fernando Guerra Padilla - SmartLegalEC"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-center lg:object-right"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          
          {/* Smooth Continuous Cinematic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/85 via-45% to-[#071326]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-[#071326]/40" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3.5 leading-[1.14]">
                Sobre <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Mí</span> & <span className="text-[#D4AF37]">SmartLegalEC</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
                Abogado especializado en <strong className="text-white font-semibold">Protección de Datos</strong>, <strong className="text-white font-semibold">Tecnología</strong> y <strong className="text-white font-semibold">Telecomunicaciones</strong> en Ecuador.
              </p>
            </motion.div>

            {/* Right: Mi forma de trabajar / Work Philosophy Quote Block & Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-3"
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md text-white space-y-2 border border-slate-700/60 shadow-xl">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Quote className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider font-heading">{FOUNDER_PROFILE.workingPhilosophy.title}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 italic leading-relaxed">
                  "{FOUNDER_PROFILE.workingPhilosophy.premise}"
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed text-justify">
                  {FOUNDER_PROFILE.workingPhilosophy.detail}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all shadow-xs text-center"
                >
                  <LinkedInIcon className="w-4 h-4 shrink-0" />
                  <span>Perfil en LinkedIn</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white transition-all cursor-pointer shadow-xs text-center"
                >
                  <span>Conversemos</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS TIMELINE CANVAS: Presenting the complete story of Sobre Mí */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mt-4 sm:mt-8 w-full">
        <Timeline 
          data={aboutTimelineData}
          showHeader={false}
        />
      </div>
    </div>
  );
};
