import React from 'react';
import { motion } from 'framer-motion';
import { PageRoute } from '../types';
import { BRAND_INFO, METRICS, FOUNDER_PROFILE, TRUSTED_CLIENTS, ABOUT_QUADRANTS, CORPORATE_VALUES } from '../data/content';
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
  CheckCircle2,
  ShieldCheck,
  Code2,
  Radio,
  Building2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 px-4 sm:px-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {FOUNDER_PROFILE.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0A66FF] mt-1 mb-4">
                  {FOUNDER_PROFILE.title}
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {FOUNDER_PROFILE.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Mi forma de trabajar / Work Philosophy Quote Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B1D3A] to-[#071326] text-white space-y-2 border border-slate-800 shadow-md my-2">
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
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer shadow-xs text-center"
                >
                  <span>Conversemos</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>

            {/* Right: High-Impact Visual Photo Card & 4 Experience Pillars */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200 shadow-md group min-h-[280px] sm:min-h-[320px] h-72 sm:h-80 w-full">
                <picture className="absolute inset-0 w-full h-full block">
                  <source srcSet="/cliente.avif" type="image/avif" />
                  <source srcSet="/cliente.webp" type="image/webp" />
                  <img
                    src="/cliente.webp"
                    alt={FOUNDER_PROFILE.name}
                    width="1430"
                    height="1100"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5 sm:p-6 z-10 pointer-events-none">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed text-justify">
                    "Atención personalizada y estratégica en cada proceso de adecuación y contrato digital."
                  </p>
                </div>
              </div>

              {/* 4 Professional Experience Pillars */}
              <div className="space-y-2 px-4 sm:px-0">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
                  Experiencia Profesional
                </h4>
                <div className="space-y-2">
                  {FOUNDER_PROFILE.professionalExperience.map((exp, expIdx) => (
                    <div key={expIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#0A66FF]/10 border border-[#0A66FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                        {exp.icon === 'ShieldCheck' && <ShieldCheck className="w-3.5 h-3.5 text-[#0A66FF]" />}
                        {exp.icon === 'Code2' && <Code2 className="w-3.5 h-3.5 text-[#0A66FF]" />}
                        {exp.icon === 'Radio' && <Radio className="w-3.5 h-3.5 text-[#0A66FF]" />}
                        {exp.icon === 'Scale' && <Scale className="w-3.5 h-3.5 text-[#0A66FF]" />}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900">{exp.area}</div>
                        <div className="text-[11px] text-slate-600 leading-relaxed text-justify">{exp.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-center italic">
                "Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio."
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 02. FORMA DE TRABAJAR & EXPERIENCIA PROFESIONAL
    // ==========================================
    {
      title: "Pilares de Excelencia",
      badge: "02. CUATRO CUADRANTES",
      subtitle: "Formación, Práctica, Gremio & Publicaciones",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Cuatro dimensiones clave que integran formación universitaria, trayectoria especializada, liderazgo gremial y difusión jurídica:
          </p>

          {/* 4 Visual Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            {/* Cuadrante 1: Formación Académica */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80"
                alt={ABOUT_QUADRANTS[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0A66FF]/20 border border-[#0A66FF]/50 flex items-center justify-center backdrop-blur-md">
                    <GraduationCap className="w-4 h-4 text-blue-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">{ABOUT_QUADRANTS[0].title}</h4>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {ABOUT_QUADRANTS[0].items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-justify">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cuadrante 2: Experiencia y Especialización */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80"
                alt={ABOUT_QUADRANTS[1].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md">
                    <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">{ABOUT_QUADRANTS[1].title}</h4>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {ABOUT_QUADRANTS[1].items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-justify">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cuadrante 3: Actividad Profesional */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
                alt={ABOUT_QUADRANTS[2].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/50 flex items-center justify-center backdrop-blur-md">
                    <Users className="w-4 h-4 text-purple-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">{ABOUT_QUADRANTS[2].title}</h4>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {ABOUT_QUADRANTS[2].items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-justify">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cuadrante 4: Publicaciones y Medios */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/90 shadow-sm group min-h-[220px] flex flex-col justify-end p-5 w-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                alt={ABOUT_QUADRANTS[3].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center backdrop-blur-md">
                    <FileText className="w-4 h-4 text-emerald-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">{ABOUT_QUADRANTS[3].title}</h4>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {ABOUT_QUADRANTS[3].items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-justify">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 03. ORGANIZACIONES & CLIENTES
    // ==========================================
    {
      title: "Organizaciones & Clientes",
      badge: "03. CLIENTES DESTACADOS",
      subtitle: "Empresas que Confían en Nosotros",
      content: (
        <div className="space-y-5 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Acompañamos a empresas nacionales, grupos regionales y multinacionales de consumo masivo, salud, seguros, educación e industria en sus desafíos jurídicos más críticos:
          </p>

          {/* 12 Trusted Clients Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 w-full">
            {TRUSTED_CLIENTS.map((client) => (
              <div 
                key={client.id}
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0A66FF]/40 hover:shadow-xs transition-all flex flex-col justify-between space-y-2 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-heading">
                      {client.badge}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#0A66FF] transition-colors" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading leading-tight group-hover:text-[#0A66FF] transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#0A66FF] mt-0.5">
                    {client.category}
                  </p>
                </div>
                {client.description && (
                  <p className="text-[11px] text-slate-500 leading-relaxed text-justify pt-1 border-t border-slate-100">
                    {client.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 04. TRAYECTORIA & HITOS (Dynamic Interactive Carousel)
    // ==========================================
    {
      title: "Trayectoria & Hitos",
      badge: "04. EVOLUCIÓN HISTÓRICA",
      subtitle: "2014 — 2026",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Evolución de nuestra práctica profesional en telecomunicaciones, tecnología y protección de datos en Ecuador:
          </p>

          <MilestoneCarousel />
        </div>
      ),
    },

    // ==========================================
    // 05. FILOSOFÍA CORPORATIVA (Canvas Linear Divider)
    // ==========================================
    {
      title: "Filosofía Corporativa",
      badge: "05. VALORES RECTORES",
      subtitle: "Principios de Nuestra Práctica",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
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
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
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
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
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
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
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
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                {CORPORATE_VALUES[3].description}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 06. IMPACTO & RESULTADOS (Canvas Linear Divider)
    // ==========================================
    {
      title: "Impacto & Resultados",
      badge: "06. MÉTRICAS CLAVE",
      subtitle: "Resultados Tangibles en Ecuador",
      content: (
        <div className="space-y-6 w-full">
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-y border-slate-200 py-6 sm:py-8 w-full bg-white rounded-2xl">
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
    // 07. ALIANZA & CONTACTO DIRECTO
    // ==========================================
    {
      title: "Alianza & Contacto",
      badge: "07. CONVERSACIONES ESTRATÉGICAS",
      subtitle: "Hablemos de tu Organización",
      content: (
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#071326] via-[#0B1D3A] to-[#132742] text-white p-6 sm:p-8 shadow-xl border border-slate-800 overflow-hidden space-y-5 w-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0A66FF]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block font-heading">
              Asesoría Legal Especializada
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight max-w-xl">
              ¿Tu empresa enfrenta un desafío jurídico?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal text-justify">
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3.5 leading-[1.14]">
              Sobre <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Mí</span> & <span className="text-[#D4AF37]">SmartLegalEC</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Abogado especializado en <strong className="text-white font-semibold">Protección de Datos</strong>, <strong className="text-white font-semibold">Tecnología</strong> y <strong className="text-white font-semibold">Telecomunicaciones</strong> en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTINUOUS TIMELINE CANVAS: Presenting the complete story of Sobre Mí */}
      <main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mt-4 sm:mt-8 w-full">
        <Timeline 
          data={aboutTimelineData}
          showHeader={false}
        />
      </main>
    </div>
  );
};
