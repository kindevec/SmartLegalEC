import React from 'react';
import { PageRoute } from '../types';
import { BRAND_INFO } from '../data/content';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Star, 
  Shield,
  FileCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDiagnostic }) => {

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
      title: 'Adecuación Integral LOPDP para Fintech Regional',
      category: 'PROTECCIÓN DE DATOS',
      date: 'OCT 2025',
      routeId: 'lopdp' as const,
    },
    {
      title: 'Estructuración Legal de Contratos SaaS Enterprise & SLA',
      category: 'DERECHO TECNOLÓGICO',
      date: 'NOV 2025',
      routeId: 'tech' as const,
    },
    {
      title: 'Obtención y Renovación de Título Habilitante ARCOTEL',
      category: 'TELECOMUNICACIONES',
      date: 'ENE 2026',
      routeId: 'telecom' as const,
    },
    {
      title: 'Implementación de Programa DPD Externo para Red de Salud',
      category: 'GOBERNANZA & PRIVACIDAD',
      date: 'FEB 2026',
      routeId: 'lopdp' as const,
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 selection:bg-[#D4AF37] selection:text-slate-950 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION with Seamless Full-Bleed Cinematic Background & Avatar */}
      {/* ========================================================================= */}
      <section className="relative bg-[#071326] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] h-auto pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 flex flex-col justify-center border-b border-slate-800 overflow-hidden">
        
        {/* Full-Bleed Thematic Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <picture className="w-full h-full">
            <source srcSet="/hero-warm-legal.avif" type="image/avif" />
            <source srcSet="/hero-warm-legal.webp" type="image/webp" />
            <img
              src="/hero-warm-legal.jpg"
              alt="Firma Jurídica Especializada - SmartLegalEC"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-center lg:object-right"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          
          {/* Smooth Continuous Cinematic Gradient (Deep Solid on Left for Readability, Translucent on Right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/90 via-45% to-[#071326]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-[#071326]/40" />
        </motion.div>

        {/* Ambient Tech Light Accents with Subtle Breathing Movement */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#0A66FF]/20 rounded-full blur-[100px] pointer-events-none z-0" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-2 right-12 w-64 h-64 bg-[#D4AF37]/12 rounded-full blur-[80px] pointer-events-none z-0" 
        />

        {/* AVATAR CUTOUT - Anchored strictly to the bottom-0 line of the hero section and centered on the right */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex absolute right-[8%] sm:right-[12%] md:right-[16%] lg:right-[20%] xl:right-[24%] bottom-0 z-10 pointer-events-none select-none items-end justify-center"
        >
          {/* Continuous Floating / Levitation Physics Animation */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Dynamic Backlight Halo that pulses with the avatar */}
            <motion.div 
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.92, 1.02, 0.92]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 top-12 bg-gradient-to-t from-[#0A66FF]/30 via-[#60A5FA]/20 to-transparent rounded-full blur-2xl -z-10" 
            />
            
            <picture className="block">
              <source srcSet="/lawyer-hero-avatar.avif" type="image/avif" />
              <source srcSet="/lawyer-hero-avatar.webp" type="image/webp" />
              <img
                src="/lawyer-hero-avatar.png"
                alt="Abogado Corporativo - SmartLegalEC"
                width="720"
                height="900"
                className="w-auto h-52 sm:h-64 md:h-72 lg:h-[380px] xl:h-[430px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.7)]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>

            {/* Bottom seamless blend into the hero border line */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Content Container (Left Side) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">

          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl lg:max-w-xl xl:max-w-2xl z-20"
          >
            {/* Main Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3.5 leading-[1.14]"
            >
              Soluciones Legales para la <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Era Digital</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm text-slate-300 max-w-lg sm:max-w-xl lg:max-w-xl leading-relaxed font-normal text-justify"
            >
              Asesoría jurídica especializada en <strong className="text-white font-semibold">Protección de Datos Personales (LOPDP)</strong>, <strong className="text-white font-semibold">Contratos de Software</strong>, Inteligencia Artificial y Telecomunicaciones en Ecuador.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION with Scroll Viewport Motion */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-14 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
              SOBRE NOSOTROS
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
              Construido con Integridad, <br />
              Impulsado por la <span className="text-[#0B1D3A]">Justicia</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed text-justify">
              Firma jurídica especializada en blindar empresas y proyectos tecnológicos frente a marcos regulatorios complejos en Ecuador.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
              Más de una década asesorando a organizaciones en protección de datos (LOPDP), contratos de software, cloud computing e integración de IA con rigor técnico y visión comercial.
            </p>
            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md transition-colors cursor-pointer active:scale-95"
              >
                <span>Conocer Más</span>
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950/15 flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 text-slate-950" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION - Flat 2.0 Direct Canvas Layout (Zero Box-in-Box) */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#071326] text-white py-12 sm:py-16 border-y border-slate-800/90 relative overflow-hidden mb-8 sm:mb-12"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Strip with Linear Divider */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0A66FF]/15 text-[#93C5FD] mb-2 border border-[#0A66FF]/30 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] animate-pulse" />
                <span>03. PRÁCTICA JURÍDICA ESPECIALIZADA</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Nuestros Servicios Legales
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
      {/* 5. CALL TO ACTION & COMPLIANCE BANNER with Motion */}
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
