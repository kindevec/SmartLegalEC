import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { BRAND_INFO } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { ClientTrustLogos } from '../components/ClientTrustLogos';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { InstagramIcon } from '../components/InstagramIcon';
import { TikTokIcon } from '../components/TikTokIcon';
import { 
  ArrowUpRight, 
  Star, 
  Shield,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Scale,
  Cpu,
  Code2,
  Radio,
  Building2,
  Sparkles,
  ArrowRight,
  Quote
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const heroTouchStartX = useRef<number | null>(null);

  const heroSlides = [
    {
      id: 'slide-1',
      badge: 'Especialistas en Derecho Digital & LOPDP en Ecuador',
      titleLine1: 'Tu Aliado en',
      titleLine2: 'Soluciones Legales',
      titleHighlight: 'Estratégicas',
      description: 'Asesoría jurídica de alta especialización en Protección de Datos Personales (LOPDP), Contratos de Software, Inteligencia Artificial y Telecomunicaciones en Ecuador.',
      imageJpg: '/hero-panoramic-legaltech.webp',
      imageWebp: '/hero-panoramic-legaltech.webp',
      imageAvif: '/hero-panoramic-legaltech.avif',
      alt: 'Infraestructura de Centros de Datos, Ciberseguridad y Protección de Datos - SmartLegalEC',
    },
    {
      id: 'slide-2',
      badge: 'Blindaje Legal & Gobierno Corporativo',
      titleLine1: 'Seguridad y',
      titleLine2: 'Cumplimiento Normativo',
      titleHighlight: 'Empresarial',
      description: 'Gestión preventiva de riesgos legales y regulatorios en protección de datos, seguridad de la información y cumplimiento empresarial, con acompañamiento especializado frente a autoridades de control.',
      imageJpg: '/hero-slider-2.webp',
      imageWebp: '/hero-slider-2.webp',
      imageAvif: '/hero-slider-2.avif',
      alt: 'Laboratorio de Desarrollo de Software, Servicios en la Nube e IA - SmartLegalEC',
    },
    {
      id: 'slide-3',
      badge: 'Contratos Tecnológicos • Telecomunicaciones & Regulación • IA',
      titleLine1: 'Innovación Legal para',
      titleLine2: 'Modelos de Negocio',
      titleHighlight: 'Digitales',
      description: 'Soluciones legales para negocios que incorporan tecnología: contratos de software y servicios en la nube, plataformas digitales, relaciones con proveedores tecnológicos y adopción responsable de Inteligencia Artificial.',
      imageJpg: '/hero-slider-3.webp',
      imageWebp: '/hero-slider-3.webp',
      imageAvif: '/hero-slider-3.avif',
      alt: 'Estación Terrena de Telecomunicaciones, Satélites y Conectividad Global - SmartLegalEC',
    },
  ];

  // Smart Auto-advance Hero Slider:
  // 1. Resets countdown completely upon manual interaction (currentSlide change).
  // 2. Pauses rotation when user is hovering or reading (isHeroHovered).
  // 3. Pauses on tab visibility change to avoid rapid catch-up skips.
  useEffect(() => {
    if (isHeroHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7500); // 7.5s comfortable reading time

    return () => clearInterval(timer);
  }, [currentSlide, isHeroHovered, heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const handleHeroTouchStart = (e: React.TouchEvent) => {
    heroTouchStartX.current = e.touches[0].clientX;
  };

  const handleHeroTouchEnd = (e: React.TouchEvent) => {
    if (heroTouchStartX.current === null) return;
    const diff = heroTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextSlide();
      else handlePrevSlide();
    }
    heroTouchStartX.current = null;
  };

  // Curated services structured for the 3D coverflow carousel
  const servicesCatalog = [
    {
      id: 'lopdp',
      num: '01',
      tag: 'PROTECCIÓN DE DATOS Y PRIVACIDAD',
      title: 'Protección de Datos y Privacidad',
      desc: 'Protección de datos más allá del cumplimiento. Soluciones jurídicas adaptadas a la operación diaria y cumplimiento normativo integral.',
      image: '/services/lopdp/implementacion-lopdp.webp',
      badge: 'PROTECCIÓN DE DATOS',
      icon: ShieldCheck,
      iconColor: 'text-[#0A66FF]',
      deliverables: ['Implementación y adecuación LOPDP', 'Delegado de protección de datos personales', 'Auditorías y evaluaciones de riesgos'],
    },
    {
      id: 'tech',
      num: '02',
      tag: 'TECNOLOGÍA Y NEGOCIOS DIGITALES',
      title: 'Tecnología y Negocios Digitales',
      desc: 'Contratos y asesoría jurídica para negocios que dependen de la tecnología, software, servicios en la nube e inteligencia artificial.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      badge: 'CONTRATOS & TECNOLOGÍA',
      icon: Cpu,
      iconColor: 'text-[#38BDF8]',
      deliverables: ['Contratos de software y licencias', 'Servicios en la nube e infraestructura TI', 'Inteligencia artificial y negocios digitales'],
    },
    {
      id: 'telecom',
      num: '03',
      tag: 'TELECOMUNICACIONES Y REGULACIÓN',
      title: 'Telecomunicaciones y Regulación',
      desc: 'Asesoría jurídica para un sector altamente regulado y en constante evolución, conectividad y servicios tecnológicos regulados.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      badge: 'TELECOMUNICACIONES',
      icon: Radio,
      iconColor: 'text-[#D4AF37]',
      deliverables: ['Títulos habilitantes y licencias', 'Servicios de telecomunicaciones y espectro', 'Cumplimiento regulatorio y trámites'],
    },
  ];

  // Case Studies & Real Legal Publications dataset (Single Source of Truth)
  const legalWorks = [
    {
      id: 'art-1',
      slug: 'estructurar-juridicamente-ecosistema-tecnologico',
      sector: 'CONTRATOS TECNOLÓGICOS & DISTRIBUCIÓN',
      title: 'Estructurar jurídicamente un ecosistema tecnológico',
      category: 'CONTRATOS TECNOLÓGICOS',
      date: '20 FEB 2026',
      icon: Code2,
      iconColor: 'text-[#38BDF8]',
      iconBg: 'bg-sky-50 border-sky-100',
      description: 'Modelado integral de la estructura contractual regional para distribución de software y tecnología entre fabricantes, distribuidores, aliados comerciales, canales y clientes finales.',
      outcome: 'Coherencia jurídica y comercial integral, protegiendo propiedad intelectual y evitando vacíos contractuales.',
      tags: ['Software & Nube', 'Canales & Distribución', 'Propiedad Intelectual', 'Garantías & Acuerdos'],
      image: '/articles/ecosistema-tecnologico.jpg',
    },
    {
      id: 'art-2',
      slug: 'abogado-in-house-prevenir-contener-generar-oportunidades',
      sector: 'DEFENSA REGULATORIA & LITIGIO',
      title: 'Abogado corporativo interno: prevenir, contener y generar oportunidades',
      category: 'TELECOM & REGULACIÓN',
      date: '12 FEB 2026',
      icon: Radio,
      iconColor: 'text-[#D4AF37]',
      iconBg: 'bg-amber-50 border-amber-100',
      description: 'Estrategia jurídica forjada en casi una década como abogado corporativo interno en el principal operador de telecomunicaciones del país, gestionando nuevos productos y litigios.',
      outcome: 'Alrededor del 80% de resultados favorables en ~25 procedimientos administrativos sancionatorios.',
      tags: ['Abogado Interno', 'Sancionatorios (~80% Favorable)', 'Telecomunicaciones', 'Estrategia Legal'],
      image: '/articles/abogado-in-house.jpg',
    },
    {
      id: 'art-3',
      slug: 'proteccion-de-datos-no-existe-implementacion-igual-a-otra',
      sector: 'PROTECCIÓN DE DATOS & PRIVACIDAD',
      title: 'Protección de datos: no existe una implementación igual a otra',
      category: 'CUMPLIMIENTO LOPDP ECUADOR',
      date: '25 ENE 2026',
      icon: ShieldCheck,
      iconColor: 'text-[#0A66FF]',
      iconBg: 'bg-blue-50 border-blue-100',
      description: 'Metodología de adecuación integral a la LOPDP para organizaciones de salud, educación, telecomunicaciones, tecnología financiera, comercio minorista y grupos corporativos con presencia regional.',
      outcome: 'Adecuación basada en la realidad operativa del negocio, mapeo de transferencias y cumplimiento ante la SPDP.',
      tags: ['LOPDP Ecuador', 'Diagnóstico Operativo', 'RAT & Flujos', 'Multisectorial'],
      image: '/articles/proteccion-datos-implementacion.jpg',
    },
    {
      id: 'art-4',
      slug: 'ser-delegado-de-proteccion-de-datos-mucho-mas-que-cumplir-un-requisito',
      sector: 'GOBERNANZA & OFICIAL DPD',
      title: 'Ser Delegado de Protección de Datos: mucho más que cumplir un requisito',
      category: 'DELEGADO DE PROTECCIÓN DE DATOS',
      date: '10 ENE 2026',
      icon: Building2,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50 border-emerald-100',
      description: 'Ejercicio como DPD externo certificado para organizaciones de múltiples sectores: supervisión independiente, evaluación de riesgos, EIPD y atención de derechos ARCO.',
      outcome: 'Gobernanza continua, conexión entre la norma y la operación, y canal oficial ante la SPDP.',
      tags: ['Oficial DPD Externo', 'Evaluación EIPD', 'Derechos ARCO', 'Auditoría SPDP'],
      image: '/articles/delegado-proteccion-datos.jpg',
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 selection:bg-[#D4AF37] selection:text-slate-950 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH IMAGE SLIDER */}
      {/* ========================================================================= */}
      <section 
        className="relative bg-[#071326] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden group"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
        onTouchStart={handleHeroTouchStart}
        onTouchEnd={handleHeroTouchEnd}
      >
        
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

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
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
                <span>Evaluación LOPDP</span>
              </motion.button>
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-start gap-2 pt-10 sm:pt-14">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir a diapositiva ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#D4AF37] shadow-sm shadow-[#D4AF37]/50' 
                    : 'w-2.5 bg-slate-600/80 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lateral Slide Navigation Arrows (Invisible by default, reveal on slider hover) */}
        <button
          onClick={handlePrevSlide}
          aria-label="Diapositiva anterior"
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 -translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-20 w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full bg-slate-950/70 hover:bg-[#0A66FF] text-slate-200 hover:text-white flex items-center justify-center border border-slate-700/80 hover:border-[#0A66FF] backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />
        </button>

        <button
          onClick={handleNextSlide}
          aria-label="Siguiente diapositiva"
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-20 w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full bg-slate-950/70 hover:bg-[#0A66FF] text-slate-200 hover:text-white flex items-center justify-center border border-slate-700/80 hover:border-[#0A66FF] backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />
        </button>
      </section>

      {/* ========================================================================= */}
      {/* 1.5 CLIENT TRUST SOCIAL PROOF - Logos de Empresas que Confían */}
      {/* ========================================================================= */}
      <ClientTrustLogos />

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION - Flat 2.0 Direct Canvas Layout (Zero Box-in-Box) */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION - Flat 2.0 Direct Canvas Layout (Zero Box-in-Box) */}
      {/* ========================================================================= */}
      <section 
        className="w-full bg-[#071326] text-white pt-8 pb-7 sm:pt-10 sm:pb-8 border-b border-slate-800/90 relative overflow-hidden"
      >
        {/* Difuminado superior / Top Soft Fade & Ambient Blur */}
        <div className="absolute top-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#071326] via-[#071326]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A66FF]/40 to-transparent pointer-events-none z-20" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-24 bg-[#0A66FF]/15 blur-3xl pointer-events-none" />

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Header Strip with Linear Divider */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-slate-800/80 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#0A66FF]/15 text-[#93C5FD] mb-2 border border-[#0A66FF]/30 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] animate-pulse shadow-[0_0_6px_#0A66FF]" />
                <span>EXPERIENCIA DE CONFIANZA</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Nuestros <span className="text-[#D4AF37]">Servicios</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed text-justify-clean font-normal">
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

          {/* Direct 3-Card Grid (All 3 Cards Fully Visible & Interactive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pt-2">
            {servicesCatalog.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  onClick={() => onNavigate('area-detail', { areaId: (service.id === 'dpd' ? 'lopdp' : service.id) as any })}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0C203E] to-[#071326] border border-slate-700/70 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.22)] shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none"
                >
                  {/* Top Image Showcase */}
                  <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-950 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C203E] via-[#0C203E]/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-[#93C5FD] border border-white/15 backdrop-blur-md font-heading">
                        <Icon className={`w-3.5 h-3.5 ${service.iconColor}`} />
                        <span>{service.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 relative z-10">
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mb-1.5 leading-snug group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal line-clamp-3 text-justify-clean">
                        {service.desc}
                      </p>
                    </div>

                    {/* Deliverables Bullet Points */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] shrink-0 shadow-[0_0_5px_#0A66FF]" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Row: CTA Trigger */}
                    <div className="pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-[#D4AF37] transition-colors">
                      <span className="flex items-center gap-1.5 tracking-wide">
                        <span>Explorar Servicio</span>
                        <span className="text-[#D4AF37] transition-transform group-hover:translate-x-1">→</span>
                      </span>
                      <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-slate-900 border border-slate-700 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] flex items-center justify-center text-white transition-all shadow-sm">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT SECTION with Founder Portrait & Credentials (After Services) */}
      {/* ========================================================================= */}
      <section 
        className="w-full bg-[#F0F4FA] text-slate-900 pt-8 sm:pt-10 lg:pt-12 pb-0 relative overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            
            {/* LEFT: Founder Cutout Portrait with Modern Studio Orbital Disc */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start items-end w-full">
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[390px] flex items-end justify-center">
                
                {/* 1. Ambient Dynamic Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-64 sm:h-72 bg-gradient-to-tr from-[#0A66FF]/25 via-[#D4AF37]/15 to-transparent blur-3xl rounded-full pointer-events-none -z-0" />

                {/* 2. Outer Decorative Accent Orbit Ring */}
                <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 rounded-full border border-[#D4AF37]/35 pointer-events-none -z-0" />
                <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-68 sm:w-80 lg:w-88 h-68 sm:h-80 lg:h-88 rounded-full border border-blue-500/20 border-dashed pointer-events-none -z-0" />

                {/* 3. Solid Executive Studio Disc (Centered spotlight behind portrait) */}
                <div className="absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 w-56 sm:w-66 lg:w-72 h-56 sm:h-66 lg:h-72 rounded-full bg-gradient-to-tr from-[#061224] via-[#0B1E3F] to-[#133261] border-2 border-[#D4AF37]/40 shadow-2xl pointer-events-none -z-0 overflow-hidden">
                  {/* Internal ambient diagonal sheen */}
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rotate-45 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#061224] to-transparent pointer-events-none" />
                </div>

                {/* 4. Cutout Portrait with 3D Depth Overlapping the Disc */}
                <picture className="w-full h-auto block relative z-10">
                  <source srcSet="/cliente_sinfondo.avif" type="image/avif" />
                  <source srcSet="/cliente_sinfondo.webp" type="image/webp" />
                  <img
                    src="/cliente_sinfondo.webp"
                    alt="Luis Fernando Guerra Padilla - SmartLegalEC"
                    width="896"
                    height="1200"
                    className="w-full max-h-[340px] sm:max-h-[400px] lg:max-h-[450px] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] block -mb-[1px]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* RIGHT: Section Editorial & Firm Story (DESKTOP: lg:block) */}
            <div className="hidden lg:block lg:col-span-7 space-y-4 pb-8 sm:pb-12">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0A66FF]/10 text-[#0A66FF] border border-[#0A66FF]/20 mb-2 font-heading">
                  LIDERAZGO Y EXPERIENCIA
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
                  Luis Fernando Guerra
                </h2>
                <p className="text-sm sm:text-base font-semibold text-[#0A66FF] font-heading mt-1">
                  Socio Director
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify-clean">
                Abogado especializado en protección de datos personales, derecho de la tecnología y telecomunicaciones, con amplia experiencia asesorando a empresas nacionales e internacionales en entornos regulados y proyectos de transformación digital.
              </p>

              {/* 3 Credential Badges */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3 my-1.5">
                <div className="pr-2 sm:pr-4 flex flex-col justify-start">
                  <Shield className="w-4 h-4 text-[#0A66FF] mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Oficial DPD</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Certificado SPDP</div>
                </div>
                <div className="px-2 sm:px-4 flex flex-col justify-start">
                  <Scale className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Telecom & Regulación</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Títulos habilitantes</div>
                </div>
                <div className="pl-2 sm:pl-4 flex flex-col justify-start">
                  <Cpu className="w-4 h-4 text-purple-600 mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Derecho Digital & IA</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Contratos tecnológicos</div>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xs transition-colors cursor-pointer active:scale-95 text-center"
                >
                  <span>Conocer más sobre mí</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition-colors cursor-pointer text-center"
                >
                  <span>Contactar al Abogado</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH LUXURY HORIZONTAL FOUNDER STRIP (Sits right underneath cutout photo on mobile) */}
        <div className="w-full bg-gradient-to-r from-[#061224] via-[#091E3D] to-[#061224] border-y border-slate-800 text-white py-5 sm:py-6 relative z-20 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Lighting & Glowing Accent Accents */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A66FF]/60 via-[#D4AF37]/50 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 to-transparent pointer-events-none z-10" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-28 bg-[#0A66FF]/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-28 bg-[#D4AF37]/8 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            
            {/* Left: Founder Name, Dual-Tone Badge & Stylized Quote */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 flex-wrap">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-tight">
                  Luis Fernando Guerra Padilla
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#0A66FF]/20 via-[#0A66FF]/10 to-transparent border border-[#0A66FF]/40 text-[10px] font-extrabold uppercase tracking-widest text-[#93C5FD] font-heading shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] animate-pulse shadow-[0_0_8px_#0A66FF]" />
                  <span>DIRECTOR & FUNDADOR</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-semibold">SMARTLEGALEC</span>
                </span>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-2 max-w-2xl">
                <Quote className="w-4 h-4 text-[#D4AF37] shrink-0 rotate-180 mt-0.5 opacity-90" />
                <p className="text-xs sm:text-sm text-slate-300 italic font-normal leading-relaxed text-justify-clean">
                  "Atención personalizada y estratégica en cada proceso de adecuación y contrato digital."
                </p>
              </div>
            </div>

            {/* Right: Direct Channels & Interactive Social Media Pills */}
            <div className="flex flex-col items-center lg:items-end gap-2 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-heading">
                Canales & Redes Oficiales
              </span>
              
              <div className="flex items-center justify-center lg:justify-end gap-2.5 sm:gap-3 flex-wrap">
                {/* LinkedIn */}
                <motion.a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 450, damping: 12, mass: 0.75 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-[#0A66C2] text-slate-200 hover:text-white border border-slate-700/80 hover:border-[#0A66C2] text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] group"
                  aria-label="Perfil oficial de LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors shrink-0" />
                  <span>LinkedIn</span>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 450, damping: 12, mass: 0.75 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-slate-200 hover:text-white border border-slate-700/80 hover:border-transparent text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(225,48,108,0.4)] group"
                  aria-label="Perfil oficial de Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors shrink-0" />
                  <span>Instagram</span>
                </motion.a>

                {/* TikTok */}
                <motion.a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 450, damping: 12, mass: 0.75 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-black text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
                  aria-label="Perfil oficial de TikTok"
                >
                  <TikTokIcon className="w-4 h-4 text-white group-hover:text-white transition-colors shrink-0" />
                  <span>TikTok</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ONLY: Credentials & Action Buttons (Rendered underneath the dark strip on mobile) */}
        <div className="block lg:hidden max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-4 pb-8 space-y-4">
          {/* 3 Credential Badges */}
          <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3 my-1">
            <div className="pr-2 flex flex-col justify-start">
              <Shield className="w-4 h-4 text-[#0A66FF] mb-1 shrink-0" />
              <div className="text-[11px] font-bold text-slate-900 leading-tight">Oficial DPD</div>
              <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Certificado SPDP</div>
            </div>
            <div className="px-2 flex flex-col justify-start">
              <Scale className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
              <div className="text-[11px] font-bold text-slate-900 leading-tight">Telecom & Regulación</div>
              <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Títulos habilitantes</div>
            </div>
            <div className="pl-2 flex flex-col justify-start">
              <Cpu className="w-4 h-4 text-purple-600 mb-1 shrink-0" />
              <div className="text-[11px] font-bold text-slate-900 leading-tight">Derecho Digital & IA</div>
              <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Contratos tecnológicos</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('about')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xs transition-colors cursor-pointer active:scale-95 text-center"
            >
              <span>Conocer más sobre mí</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition-colors cursor-pointer text-center"
            >
              <span>Contactar al Abogado</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RECENT LEGAL WORKS / CASE STUDIES - Minimalist Editorial Showcase */}
      {/* ========================================================================= */}
      <section 
        className="w-full bg-[#FFFFFF] text-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden border-t border-slate-100"
      >
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Minimalist Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-6 border-b border-slate-200 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#0A66FF]/10 text-[#0A66FF] border border-[#0A66FF]/20 mb-2 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF]" />
                <span>PRECEDENTES & EXPERIENCIA REAL</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
                Casos de Éxito & Publicaciones Clave
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <p className="text-xs text-slate-500 max-w-sm text-justify-clean">
                Precedentes en litigio regulatorio, adecuación a la LOPDP y estructuración de ecosistemas tecnológicos en Ecuador.
              </p>
              <button
                onClick={() => onNavigate('insights')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-all cursor-pointer shadow-xs whitespace-nowrap group"
              >
                <span>Ver todas las publicaciones</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Full-Space Visual Grid of Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4">
            {legalWorks.map((work, idx) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onNavigate('insights', { articleSlug: work.slug })}
                className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[420px] p-5 sm:p-7 flex flex-col justify-between group border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#0A66FF]/60 transition-all duration-300 cursor-pointer"
              >
                {/* Full-Bleed Background Image with Deep Blur Effect */}
                <div className="absolute inset-0 w-full h-full block overflow-hidden">
                  <picture className="w-full h-full block">
                    <source srcSet={work.image.replace('.jpg', '.avif')} type="image/avif" />
                    <source srcSet={work.image.replace('.jpg', '.webp')} type="image/webp" />
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      width="1200"
                      height="800"
                      className="w-full h-full object-cover scale-110 blur-[4px] group-hover:blur-[2px] group-hover:scale-115 transition-all duration-700 ease-out brightness-[0.75] group-hover:brightness-[0.85]"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>

                {/* Dark Gradient Overlay for Maximum Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-45% to-slate-950/35 group-hover:via-slate-950/85 transition-colors" />

                {/* Top Bar: Sector Badge, Number & Date */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#071326]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-xs font-heading">
                    0{idx + 1} • {work.sector}
                  </span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono px-2 py-0.5 rounded-md bg-slate-900/60 backdrop-blur-xs border border-white/10">
                    {work.date}
                  </span>
                </div>

                {/* Bottom Content: Category, Title, Description, Impact & Tags */}
                <div className="relative z-10 space-y-2.5 pt-10">
                  <span className="text-[11px] font-bold text-[#60A5FA] uppercase tracking-wider block font-heading">
                    {work.category}
                  </span>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                    {work.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-3 text-justify-clean">
                    {work.description}
                  </p>

                  <div className="pt-1 flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <p className="font-medium text-slate-200 leading-snug text-xs text-justify-clean">
                      <strong className="text-white font-bold">Impacto:</strong> {work.outcome}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-300">
                      {work.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 backdrop-blur-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-white transition-colors">
                      <span>Leer análisis</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

