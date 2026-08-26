import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BRAND_INFO, TRUSTED_CLIENTS } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Star, 
  Shield,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Scale,
  Cpu,
  ExternalLink,
  ArrowRight,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'slide-1',
      badge: 'Especialistas en Derecho Digital & LOPDP en Ecuador',
      titleLine1: 'Tu Aliado en',
      titleLine2: 'Soluciones Legales',
      titleHighlight: 'Estratégicas',
      description: 'Asesoría jurídica de alta especialización en Protección de Datos Personales (LOPDP), Contratos de Software, Inteligencia Artificial y Telecomunicaciones en Ecuador.',
      imageJpg: '/hero-warm-legal.jpg',
      imageWebp: '/hero-warm-legal.webp',
      imageAvif: '/hero-warm-legal.avif',
      alt: 'Firma Jurídica Especializada en Tecnología - SmartLegalEC',
    },
    {
      id: 'slide-2',
      badge: 'Blindaje Legal & Gobierno Corporativo',
      titleLine1: 'Seguridad y',
      titleLine2: 'Cumplimiento Normativo',
      titleHighlight: 'Empresarial',
      description: 'Adecuación integral a la LOPDP, designación de DPD externo y gestión de riesgos regulatorios frente a la Autoridad de Protección de Datos.',
      imageJpg: '/hero-slider-2.jpg',
      imageWebp: '/hero-slider-2.webp',
      imageAvif: '/hero-slider-2.avif',
      alt: 'Asesoría Legal Corporativa en Privacidad - SmartLegalEC',
    },
    {
      id: 'slide-3',
      badge: 'Contratos Tech • Telecomunicaciones ARCOTEL • IA',
      titleLine1: 'Innovación Legal para',
      titleLine2: 'Modelos de Negocio',
      titleHighlight: 'Digitales',
      description: 'Estructuración de contratos SaaS y Cloud, títulos habilitantes TIC ante ARCOTEL y asesoría en gobernanza e integración responsable de Inteligencia Artificial.',
      imageJpg: '/hero-slider-3.jpg',
      imageWebp: '/hero-slider-3.webp',
      imageAvif: '/hero-slider-3.avif',
      alt: 'Regulación de Telecomunicaciones e Inteligencia Artificial - SmartLegalEC',
    },
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Curated services structured identically to the carousel in the mockup
  const servicesCatalog = [
    {
      id: 'lopdp',
      num: '01',
      tag: 'LOPDP & PRIVACIDAD',
      title: 'Protección de Datos Personales',
      desc: 'Adecuación jurídica integral bajo normativa LOPDP ecuatoriana, levantamiento de RAT, políticas de privacidad y defensa sancionatoria ante la SPDP.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      badge: 'CUMPLIMIENTO SPDP',
      deliverables: ['Registro RAT & Políticas', 'Contratos de Encargo Cloud', 'Defensa Sancionatoria SPDP'],
    },
    {
      id: 'tech',
      num: '02',
      tag: 'TECH LAW & IA',
      title: 'Contratos Tecnológicos & SaaS',
      desc: 'Estructuración y blindaje de acuerdos SaaS, licencias de software, cloud computing, SLAs transfronterizos y gobernanza legal para modelos de IA.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      badge: 'CONTRATOS & CLOUD',
      deliverables: ['Acuerdos SaaS & SLAs', 'IP de Código & Licencias', 'Gobernanza Legal de IA'],
    },
    {
      id: 'telecom',
      num: '03',
      tag: 'REGULATORIO & TELCO',
      title: 'Telecomunicaciones & ARCOTEL',
      desc: 'Gestión técnica y jurídica de títulos habilitantes ante ARCOTEL, registros PVA, asignación de espectro y cumplimiento de obligaciones regulatorias.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      badge: 'HABILITANTES ARCOTEL',
      deliverables: ['Títulos Habilitantes', 'Servicios TIC & PVA', 'Defensa Regulatoria'],
    },
    {
      id: 'dpd',
      num: '04',
      tag: 'GOBERNANZA CORPORATIVA',
      title: 'Delegado de Protección de Datos',
      desc: 'Designación de DPD externo certificado para supervisar el cumplimiento continuo, auditar procesos de datos y servir como enlace con la autoridad.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      badge: 'OFICIAL DPD EXTERNO',
      deliverables: ['Supervisión Continua', 'Auditoría de Brechas', 'Canal Oficial con la SPDP'],
    }
  ];

  // Cases / Recent Legal Works table
  const legalWorks = [
    {
      sector: 'FINTECH & PAGOS DIGITALES',
      title: 'Auditoría LOPDP y Blindaje de Pasarelas de Pago Cloud',
      category: 'PROTECCIÓN DE DATOS',
      date: 'ENE 2026',
      routeId: 'lopdp' as const,
    },
    {
      sector: 'SOFTWARE ENTERPRISE',
      title: 'Estructuración de Contratos Master SaaS y SLAs de Alta Disponibilidad',
      category: 'CONTRATOS TECH',
      date: 'DIC 2025',
      routeId: 'tech' as const,
    },
    {
      sector: 'ISP / TELECOMUNICACIONES',
      title: 'Regularización de Concesión y Régimen de Cumplimiento ARCOTEL',
      category: 'REGULATORIO TIC',
      date: 'MAR 2026',
      routeId: 'telecom' as const,
    },
    {
      sector: 'RED DE SALUD PRIVADA',
      title: 'Implementación de Programa DPD Externo para Red de Salud',
      category: 'GOBERNANZA & PRIVACIDAD',
      date: 'FEB 2026',
      routeId: 'lopdp' as const,
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 selection:bg-[#D4AF37] selection:text-slate-950 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH IMAGE SLIDER */}
      {/* ========================================================================= */}
      <section className="relative bg-[#071326] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden">
        
        {/* Background Images Slider with Layered Crossfade */}
        {heroSlides.map((slide, idx) => (
          <motion.div 
            key={slide.id}
            initial={false}
            animate={{ 
              opacity: currentSlide === idx ? 0.95 : 0,
              scale: currentSlide === idx ? 1 : 1.04 
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`absolute inset-0 z-0 pointer-events-none ${currentSlide === idx ? 'visible' : 'invisible'}`}
          >
            <picture className="w-full h-full">
              <source srcSet={slide.imageAvif} type="image/avif" />
              <source srcSet={slide.imageWebp} type="image/webp" />
              <img
                src={slide.imageJpg}
                alt={slide.alt}
                width="1920"
                height="1080"
                className="w-full h-full object-cover object-right lg:object-center"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding="async"
              />
            </picture>
          </motion.div>
        ))}

        {/* Gentle dark gradient and bottom fade to guarantee contrast and seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/70 to-[#071326]/30 pointer-events-none z-1" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#071326] via-[#071326]/70 to-transparent pointer-events-none z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-3xl space-y-6">
            
            {/* Institutional Trust Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FF]/15 border border-[#0A66FF]/40 text-white backdrop-blur-md mb-2 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#0A66FF] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white">
                {heroSlides[currentSlide].badge}
              </span>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]"
            >
              {heroSlides[currentSlide].titleLine1} <br />
              {heroSlides[currentSlide].titleLine2} <br />
              <span className="text-[#D4AF37]">{heroSlides[currentSlide].titleHighlight}</span>
            </motion.h1>

            <motion.p 
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed min-h-[48px]"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* Action Buttons & Slider Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-colors cursor-pointer"
                >
                  <span>Iniciar Asesoría</span>
                  <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-slate-950" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenDiagnostic}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors cursor-pointer"
                >
                  <span>Diagnóstico LOPDP</span>
                </motion.button>
              </div>

              {/* Slider Dots and Arrows */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Diapositiva anterior"
                  className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-[#0A66FF] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Ir a diapositiva ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx 
                          ? 'w-6 bg-[#D4AF37]' 
                          : 'w-2 bg-slate-600 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextSlide}
                  aria-label="Siguiente diapositiva"
                  className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-[#0A66FF] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION - Flat 2.0 Direct Canvas Layout (Zero Box-in-Box) */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#071326] text-white py-12 sm:py-16 border-b border-slate-800/90 relative overflow-hidden"
      >
        {/* Difuminado superior / Top Soft Fade & Ambient Blur */}
        <div className="absolute top-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-[#071326] via-[#071326]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A66FF]/40 to-transparent pointer-events-none z-20" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-28 bg-[#0A66FF]/15 blur-3xl pointer-events-none" />

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Strip with Linear Divider */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0A66FF]/15 text-[#93C5FD] mb-2 border border-[#0A66FF]/30 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] animate-pulse" />
                <span>NUESTROS SERVICIOS</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Experiencia de Confianza
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed text-justify sm:text-left font-normal">
                Asesoramiento estratégico y blindaje preventivo adaptado a la economía digital y tecnológica en Ecuador.
              </p>
              <button
                onClick={() => onNavigate('areas')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-[#e4be42] transition-colors whitespace-nowrap cursor-pointer group"
              >
                <span>Ver todas las áreas</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Flat 2.0 Canvas Grid: Linear Separators, Zero Box-in-Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {servicesCatalog.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onNavigate('area-detail', { areaId: (service.id === 'dpd' ? 'lopdp' : service.id) as any })}
                className="py-6 md:py-0 md:px-5 lg:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between cursor-pointer group transition-colors"
              >
                <div>
                  {/* Flat 2.0 Numeric Anchor & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#D4AF37]">
                      {service.num}
                    </span>
                    <span className="text-[10px] font-bold text-[#93C5FD] uppercase tracking-wider font-heading">
                      {service.tag}
                    </span>
                  </div>

                  {/* Visual Media Window without bulky nested box borders */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-3.5 bg-slate-950 relative border border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/20 to-transparent pointer-events-none" />
                    
                    {/* Badge Overlay */}
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10 font-heading">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-[#60A5FA] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 text-justify font-normal">
                    {service.desc}
                  </p>

                  {/* Flat 2.0 Key Capabilities List */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-[#0A66FF] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-[#60A5FA] transition-colors">
                  <span>Explorar Servicio</span>
                  <div className="w-6 h-6 rounded-full bg-slate-800/80 group-hover:bg-[#0A66FF] flex items-center justify-center text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 3. ABOUT SECTION with Founder Portrait & Credentials (After Services) */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Client / Founder Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl group min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-slate-900 flex flex-col justify-end">
              <picture className="absolute inset-0 w-full h-full block">
                <source srcSet="/luis-guerra-portrait.avif" type="image/avif" />
                <source srcSet="/luis-guerra-portrait.webp" type="image/webp" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Abg. Luis Fernando Guerra Padilla - SmartLegalEC"
                  width="800"
                  height="950"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 via-55% to-transparent pointer-events-none" />

              {/* Card Footer Content */}
              <div className="relative z-10 p-5 sm:p-6 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A66FF]/20 text-[#93C5FD] border border-[#0A66FF]/40 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md font-heading">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] animate-pulse" />
                  <span>DIRECTOR & FUNDADOR</span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">
                  Abg. Luis Fernando Guerra Padilla
                </h3>

                <p className="text-xs text-slate-300 italic leading-relaxed pt-1">
                  "Atención personalizada y estratégica en cada proceso de adecuación y contrato digital."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Section Editorial & Firm Story */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3 font-heading">
                SOBRE NOSOTROS
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
                Construido con Integridad, <br />
                Impulsado por la <span className="text-[#0B1D3A]">Justicia</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Firma jurídica especializada en blindar empresas y proyectos tecnológicos frente a marcos regulatorios complejos en Ecuador.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Más de una década de práctica especializada asesorando a organizaciones en protección de datos (<strong className="text-slate-700 font-semibold">LOPDP</strong>), contratos de software (<strong className="text-slate-700 font-semibold">SaaS & Cloud</strong>), títulos habilitantes ante <strong className="text-slate-700 font-semibold">ARCOTEL</strong> e integración ética de Inteligencia Artificial con rigor técnico y visión comercial.
            </p>

            {/* 3 Credential Badges */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3.5 my-2">
              <div className="pr-2 sm:pr-4 flex flex-col justify-start">
                <Shield className="w-4 h-4 text-[#0A66FF] mb-1 shrink-0" />
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Oficial DPD</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Certificado SPDP</div>
              </div>
              <div className="px-2 sm:px-4 flex flex-col justify-start">
                <Scale className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">ARCOTEL & Telco</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Títulos habilitantes</div>
              </div>
              <div className="pl-2 sm:pl-4 flex flex-col justify-start">
                <Cpu className="w-4 h-4 text-purple-600 mb-1 shrink-0" />
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Tech Law & IA</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Contratos software</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md transition-colors cursor-pointer active:scale-95"
              >
                <span>Conocer Más Sobre la Firma</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer"
              >
                <span>Contactar al Abogado</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 4. RECENT LEGAL WORKS with Interactive Table Rows */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3 border border-slate-200 font-heading">
              CASOS DE ÉXITO Y TRAYECTORIA
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Algunos de Nuestros Casos Legales
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
            <p className="text-xs text-slate-500 max-w-xs md:text-right text-justify sm:text-right">
              Explora una selección de materias y asesorías corporativas que hemos manejado con éxito.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('areas')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-colors cursor-pointer shadow-xs"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-xs font-extrabold text-slate-400 uppercase tracking-wider font-heading">
          <div className="col-span-6">Título del Caso / Asesoría</div>
          <div className="col-span-3 text-center">Categoría</div>
          <div className="col-span-2 text-center">Fecha</div>
          <div className="col-span-1 text-right">Acción</div>
        </div>

        {/* Table Rows with Stagger Animation */}
        <div className="divide-y divide-slate-100">
          {legalWorks.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ x: 4, transition: { duration: 0.15 } }}
              onClick={() => onNavigate('area-detail', { areaId: work.routeId })}
              className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center hover:bg-slate-50 rounded-xl px-2 sm:px-3 transition-colors cursor-pointer group"
            >
              <div className="md:col-span-6">
                <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-slate-900 group-hover:text-[#0A66FF] transition-colors leading-snug">
                  {work.title}
                </h3>
              </div>
              <div className="flex items-center justify-between md:contents">
                <div className="md:col-span-3 md:text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                    {work.category}
                  </span>
                </div>
                <div className="md:col-span-2 md:text-center text-xs font-mono font-semibold text-slate-500">
                  {work.date}
                </div>
                <div className="md:col-span-1 text-right">
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-slate-950 transition-all inline-flex">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 5. CLIENTS / ORGANIZACIONES QUE CONFÍAN EN NOSOTROS */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-slate-700 mb-3 border border-slate-200 shadow-2xs font-heading">
                PORTAFOLIO CORPORATIVO
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
                Empresas que Confían en Nuestra Práctica
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md text-justify sm:text-left">
              Acompañamos a multinacionales, corporaciones y organizaciones líderes en Ecuador en protección de datos, contratos tecnológicos y regulación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {TRUSTED_CLIENTS.map((client) => (
              <div 
                key={client.id}
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0A66FF]/40 hover:shadow-xs transition-all flex flex-col justify-between space-y-2 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-heading">
                      {client.badge}
                    </span>
                    <Building2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A66FF] transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading leading-tight group-hover:text-[#0A66FF] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#0A66FF] mt-0.5">
                    {client.category}
                  </p>
                </div>
                {client.description && (
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed text-justify pt-1 border-t border-slate-100">
                    {client.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION & COMPLIANCE BANNER with Motion */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-[#071326] via-[#0B1D3A] to-[#132742] text-white rounded-2xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="max-w-2xl space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 font-heading">
              DIAGNÓSTICO GRATUITO LOPDP
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white leading-tight">
              ¿Tu empresa cumple con la normativa vigente en Ecuador?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Realiza nuestro test de autodiagnóstico interactivo en menos de 2 minutos para conocer tu nivel de riesgo sancionatorio y recibir recomendaciones inmediatas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xl transition-colors cursor-pointer"
            >
              <span>Hacer Test de Cumplimiento</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-6 sm:py-4 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors cursor-pointer"
            >
              <span>Contactar a un Abogado</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
