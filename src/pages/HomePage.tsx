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
      tag: 'LOPDP',
      title: 'Protección de Datos & Privacidad',
      desc: 'Adecuación integral a la LOPDP, DPD externo, gestión de riesgos de privacidad y auditoría frente a la SPDP en Ecuador.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      isFeatured: false,
      badge: 'CUMPLIMIENTO',
    },
    {
      id: 'tech',
      tag: 'TECH LAW',
      title: 'Contratos Tecnológicos & SaaS',
      desc: 'Blindaje de SLAs, términos y condiciones, propiedad intelectual de software, cloud computing e integración de IA responsable.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      isFeatured: true,
      badge: 'ESPECIALIZACIÓN',
    },
    {
      id: 'telecom',
      tag: 'REGULATORIO',
      title: 'Telecomunicaciones & ARCOTEL',
      desc: 'Títulos habilitantes, registros de servicios TIC, régimen sancionatorio y cumplimiento normativo ante el ente de control.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      isFeatured: false,
      badge: 'REGULACIÓN',
    },
    {
      id: 'dpd',
      tag: 'DPD / DPO',
      title: 'Delegado de Protección de Datos',
      desc: 'Servicio de DPD certificado como servicio externo independiente para supervisión normativa y canal con la Autoridad.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      isFeatured: false,
      badge: 'OFICIAL DPD',
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
      {/* 1. HERO SECTION with Motion Animations */}
      {/* ========================================================================= */}
      <section className="relative bg-[#071326] text-white pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 overflow-hidden border-b border-slate-800">
        
        {/* Thematic Warm Luxury Legal Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <picture className="w-full h-full">
            <source srcSet="/hero-warm-legal.avif" type="image/avif" />
            <source srcSet="/hero-warm-legal.webp" type="image/webp" />
            <img
              src="/hero-warm-legal.jpg"
              alt="Firma Jurídica Especializada - SmartLegalEC"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-right lg:object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Gentle warm dark gradient on the left side to guarantee perfect text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-3xl space-y-6">
            
            {/* Institutional Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FF]/15 border border-[#0A66FF]/40 text-white backdrop-blur-md mb-6 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#0A66FF] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white">
              Especialistas en Derecho Digital & LOPDP en Ecuador
            </span>
          </motion.div>

            {/* Main Display Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Tu Aliado en <br />
              Soluciones Legales <br />
              <span className="text-[#D4AF37]">Estratégicas</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              Asesoría jurídica de alta especialización en Protección de Datos Personales (LOPDP), Contratos de Software, Inteligencia Artificial y Telecomunicaciones en Ecuador.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-colors cursor-pointer"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <span>Diagnóstico LOPDP</span>
              </motion.button>
            </div>
          </div>
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
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Firma jurídica especializada en blindar empresas y proyectos tecnológicos frente a marcos regulatorios complejos en Ecuador.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Más de una década asesorando a organizaciones en protección de datos (LOPDP), contratos de software, cloud computing e integración de IA con rigor técnico y visión comercial.
            </p>
            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md transition-colors cursor-pointer active:scale-95"
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
      {/* 3. SERVICES SECTION - Full-Width Edge to Edge */}
      {/* ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="w-full bg-[#0B1D3A] text-white py-16 sm:py-20 border-y border-slate-800 mb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E6F0FF]/15 text-[#E6F0FF] mb-2 border border-[#0A66FF]/30">
                NUESTROS SERVICIOS
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Experiencia de Confianza
              </h2>
            </div>

            <p className="text-xs text-slate-300 max-w-sm">
              Soluciones jurídicas con experiencia comprobada y enfoque en resultados para empresas en entorno digital.
            </p>
          </div>

          {/* Services Clean Editorial Grid (No Box-in-Box / No Nested White Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-800 pt-4">
            {servicesCatalog.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onNavigate('area-detail', { areaId: service.id as any })}
                className="flex flex-col justify-between cursor-pointer group lg:px-6 first:lg:pl-0 last:lg:pr-0 transition-colors"
              >
                <div>
                  {/* Category Tag */}
                  <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block mb-3">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-[#0A66FF] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Photographic Visual without heavy frame */}
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-900/60 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#0A66FF] transition-colors">
                  <span>Conocer más</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A66FF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
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
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3 border border-slate-200">
              CASOS DE ÉXITO Y TRAYECTORIA
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Algunos de Nuestros Casos Legales
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-xs text-slate-500 max-w-xs md:text-right">
              Explora una selección de materias y asesorías corporativas que hemos manejado con éxito.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('areas')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-colors cursor-pointer"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowUpRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
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
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center hover:bg-slate-50 rounded-xl px-3 transition-colors cursor-pointer group"
            >
              <div className="md:col-span-6">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0A66FF] transition-colors">
                  {work.title}
                </h3>
              </div>
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
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-[#071326] via-[#0B1D3A] to-[#132742] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
              DIAGNÓSTICO GRATUITO LOPDP
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              ¿Tu empresa cumple con la normativa vigente en Ecuador?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Realiza nuestro test de autodiagnóstico interactivo en menos de 2 minutos para conocer tu nivel de riesgo sancionatorio y recibir recomendaciones inmediatas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xl transition-colors cursor-pointer"
            >
              <span>Hacer Test de Cumplimiento</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors cursor-pointer"
            >
              <span>Contactar a un Abogado</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
