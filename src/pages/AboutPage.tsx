import React from 'react';
import { motion } from 'framer-motion';
import { PageRoute } from '../types';
import { BRAND_INFO, METRICS } from '../data/content';
import { Timeline, TimelineEntry } from '../components/ui/timeline';
import { MilestoneCarousel } from '../components/MilestoneCarousel';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  Award, 
  Shield, 
  Zap, 
  HeartHandshake, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Server,
  Database,
  Cpu,
  Scale,
  Quote,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  // Structured Timeline Data with High-Impact Visual Cards and Minimal Text
  const aboutTimelineData: TimelineEntry[] = [
    // ==========================================
    // 01. LIDERAZGO & DIRECCIÓN (El Fundador)
    // ==========================================
    {
      title: "Liderazgo & Dirección",
      badge: "01. DIRECTOR & FUNDADOR",
      subtitle: BRAND_INFO.founder,
      content: (
        <div className="space-y-5 w-full">
          {/* Visual 2-Column Founder Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full">
            {/* Left: Punchy Executive Summary */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 px-4 sm:px-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {BRAND_INFO.founder}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0A66FF] mt-1 mb-3">
                  {BRAND_INFO.founderTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  Más de una década de práctica especializada en la intersección entre el <strong className="text-slate-900 font-semibold">Derecho, la Inteligencia Artificial</strong>, la Protección de Datos y el sector de las <strong className="text-slate-900 font-semibold">Telecomunicaciones</strong> en Ecuador.
                </p>
              </div>

              {/* 3 Key Highlights Strip (3 Columns on mobile & desktop - No Box-in-Box) */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3 my-1.5 w-full">
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
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">SaaS & IA Law</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Contratos software</div>
                </div>
              </div>

              {/* Action Buttons & Social Channels */}
              <div className="space-y-3 pt-2 w-full">
                {/* Primary CTA */}
                <div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer shadow-xs text-center"
                  >
                    <span>Agendar Consulta</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

                {/* Social Network Bar (Clean 3-Column Equal Grid) */}
                <div className="grid grid-cols-3 gap-2 pt-1 w-full">
                  <a
                    href={BRAND_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-2 rounded-xl bg-slate-100/90 hover:bg-[#0A66C2] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0A66C2] text-xs font-semibold transition-all duration-200 shadow-2xs group text-center"
                    aria-label="Perfil oficial de LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A66C2] group-hover:text-white transition-colors shrink-0" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"></path>
                    </svg>
                    <span className="truncate">LinkedIn</span>
                  </a>

                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-2 rounded-xl bg-slate-100/90 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-transparent text-xs font-semibold transition-all duration-200 shadow-2xs group text-center"
                    aria-label="Perfil oficial de Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E4405F] group-hover:text-white transition-colors shrink-0" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                    <span className="truncate">Instagram</span>
                  </a>

                  <a
                    href={BRAND_INFO.tiktokUrl || "https://www.tiktok.com/@smartlegal_ec"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-2 rounded-xl bg-slate-100/90 hover:bg-black text-slate-800 hover:text-white border border-slate-200/90 hover:border-black text-xs font-semibold transition-all duration-200 shadow-2xs group text-center"
                    aria-label="Perfil oficial de TikTok"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 group-hover:text-white transition-colors shrink-0" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"></path>
                    </svg>
                    <span className="truncate">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Founder Avatar Silhouette */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto flex items-end justify-center">
                <picture className="w-full h-auto block">
                  <source srcSet="/luis-guerra-portrait.avif" type="image/avif" />
                  <source srcSet="/luis-guerra-portrait.webp" type="image/webp" />
                  <img
                    src="/luis-guerra-portrait.png"
                    alt="Abg. Luis Fernando Guerra Padilla"
                    width="896"
                    height="1200"
                    className="w-full max-h-[380px] sm:max-h-[420px] object-contain object-bottom drop-shadow-xl transition-opacity duration-300"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-center italic">
                "Atención personalizada y estratégica en cada proceso de adecuación y contrato digital."
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 02. PILARES DE EXCELENCIA (Cuatro Cuadrantes Visuales)
    // ==========================================
    {
      title: "Pilares de Excelencia",
      badge: "02. CUATRO CUADRANTES",
      subtitle: "Formación, Práctica, Gremio & Doctrina",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Cuatro dimensiones clave que garantizan soluciones jurídicas de estándar internacional:
          </p>

          {/* 4 Rich Visual Bento Cards (Full-bleed on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            {/* Cuadrante 1: Formación Académica */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[200px] sm:min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80"
                alt="Formación Académica"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0A66FF]/20 border border-[#0A66FF]/50 flex items-center justify-center backdrop-blur-md">
                    <GraduationCap className="w-4 h-4 text-blue-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Formación de Alto Nivel</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2 text-justify">
                  Estudios de posgrado en Derecho y Nuevas Tecnologías, con actualización continua en estándares RGPD y LOPDP.
                </p>
              </div>
            </div>

            {/* Cuadrante 2: Experiencia y Especialización */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[200px] sm:min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80"
                alt="Experiencia y Especialización"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md">
                    <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Práctica & Adecuación LOPDP</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2 text-justify">
                  Adecuaciones LOPDP masivas, designación de DPD externo, contratos SaaS Cloud y trámites regulatorios en telecomunicaciones.
                </p>
              </div>
            </div>

            {/* Cuadrante 3: Actividad Profesional y Gremial */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[200px] sm:min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
                alt="Actividad Profesional y Gremial"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/50 flex items-center justify-center backdrop-blur-md">
                    <Users className="w-4 h-4 text-purple-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Liderazgo Gremial & Foros</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2 text-justify">
                  Participación activa en comités jurídicos, panelista en foros sobre Inteligencia Artificial y vínculo con startups.
                </p>
              </div>
            </div>

            {/* Cuadrante 4: Publicaciones y Análisis Jurídico */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[200px] sm:min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                alt="Publicaciones y Análisis Jurídico"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center backdrop-blur-md">
                    <FileText className="w-4 h-4 text-emerald-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Doctrina & Análisis Normativo</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2 text-justify">
                  Autor de artículos sobre privacidad, análisis de impacto regulatorio y vocería en medios especializados.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 03. TRAYECTORIA & HITOS (Dynamic Interactive Carousel)
    // ==========================================
    {
      title: "Trayectoria & Hitos",
      badge: "03. EVOLUCIÓN HISTÓRICA",
      subtitle: "2014 — 2026",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Evolución interactiva de nuestra práctica al compás de las mayores transformaciones tecnológicas y legales del país:
          </p>

          {/* DYNAMIC INTERACTIVE CAROUSEL (100% Full-bleed on Mobile) */}
          <MilestoneCarousel />
        </div>
      ),
    },

    // ==========================================
    // 04. FILOSOFÍA CORPORATIVA (Canvas Linear Divider)
    // ==========================================
    {
      title: "Filosofía Corporativa",
      badge: "04. VALORES RECTORES",
      subtitle: "Principios de Nuestra Práctica",
      content: (
        <div className="space-y-4 w-full">
          {/* Canvas-Anchored 2x2 Mobile / 4-Col Desktop Grid with Linear Dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-slate-200 w-full">
            {/* Valor 1 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-r border-b lg:border-b-0 border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    Excelencia
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#D4AF37] font-semibold mt-0.5">
                    Rigor de vanguardia
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                Soluciones jurídicas precisas adaptadas a la operativa real de cada cliente.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    Integridad
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#0A66FF] font-semibold mt-0.5">
                    Ética & secreto
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A66FF]" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                Confidencialidad absoluta y máxima transparencia profesional en cada encargo.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start border-r lg:border-r border-slate-200">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    Innovación
                  </h4>
                  <p className="text-[10px] sm:text-xs text-purple-600 font-semibold mt-0.5">
                    Visión predictiva
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                Anticipación constante de contingencias normativas ante nuevas tecnologías.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="py-3.5 sm:py-5 px-3 sm:px-5 flex flex-col justify-start">
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading leading-tight">
                    Compromiso
                  </h4>
                  <p className="text-[10px] sm:text-xs text-emerald-600 font-semibold mt-0.5">
                    Socio estratégico
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                Acompañamiento cercano y directo en el logro de tus objetivos de negocio.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 05. IMPACTO & RESULTADOS (Canvas Linear Divider)
    // ==========================================
    {
      title: "Impacto & Resultados",
      badge: "05. MÉTRICAS CLAVE",
      subtitle: "Resultados Tangibles en Ecuador",
      content: (
        <div className="space-y-4 w-full">
          {/* Canvas-Anchored Metric Strip with Linear Divider (No Box-in-Box) */}
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
                <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed text-justify">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 06. ALIANZA & CONTACTO DIRECTO
    // ==========================================
    {
      title: "Alianza & Contacto",
      badge: "06. CONVERSACIONES ESTRATÉGICAS",
      subtitle: "Hablemos de tu Organización",
      content: (
        <div className="relative rounded-none sm:rounded-3xl bg-gradient-to-br from-[#071326] via-[#0B1D3A] to-[#132742] text-white p-6 sm:p-8 shadow-xl border-y sm:border border-slate-800 overflow-hidden space-y-5 w-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0A66FF]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block font-heading">
              Asesoría Legal Estratégica
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight max-w-xl">
              Inicia una conversación confidencial con nuestro equipo
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal text-justify">
              Agenda una reunión informativa o remítenos los antecedentes de tu caso para coordinar una propuesta técnica a medida liderada por el Abg. Luis Fernando Guerra Padilla.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-full">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer shadow-md text-center"
            >
              <span>Contactar a la Firma</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola SmartLegalEC, me gustaría agendar una reunión con el Abg. Luis Fernando Guerra.')}`}
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
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-4 sm:pb-8">
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
              src="/header-about.jpg"
              alt="Sobre SmartLegalEC - Despacho Jurídico Boutique"
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3.5 leading-[1.14]">
              Sobre <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">SmartLegalEC</span> & <span className="text-[#D4AF37]">Liderazgo</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Firma jurídica boutique liderada por el <strong className="text-white font-semibold">Abg. Luis Fernando Guerra Padilla</strong>, especializada en asesoría de vanguardia en <strong className="text-white font-semibold">Tecnología</strong> y <strong className="text-white font-semibold">Economía de Datos</strong> en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTINUOUS TIMELINE CANVAS: Presenting the complete story of Sobre Nosotros */}
      <main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mt-4 sm:mt-8 w-full">
        <Timeline 
          data={aboutTimelineData}
          showHeader={false}
        />

      </main>
    </div>
  );
};
