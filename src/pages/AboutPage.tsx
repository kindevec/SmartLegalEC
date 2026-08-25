import React from 'react';
import { motion } from 'framer-motion';
import { PageRoute } from '../types';
import { BRAND_INFO, METRICS, CLIENTS, ABOUT_QUADRANTS, FOUNDER_EXPERIENCE_AREAS, PHILOSOPHY } from '../data/content';
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
  Building2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const getQuadrantIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-300" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-300" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-emerald-300" />;
      default:
        return <Scale className="w-5 h-5 text-blue-300" />;
    }
  };

  const getQuadrantBg = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return 'bg-[#0A66FF]/20 border-[#0A66FF]/50';
      case 'Briefcase':
        return 'bg-[#D4AF37]/20 border-[#D4AF37]/50';
      case 'Users':
        return 'bg-purple-500/20 border-purple-400/50';
      case 'FileText':
        return 'bg-emerald-500/20 border-emerald-400/50';
      default:
        return 'bg-blue-500/20 border-blue-400/50';
    }
  };

  // Structured Timeline Data matching the official content
  const aboutTimelineData: TimelineEntry[] = [
    // ==========================================
    // 01. LIDERAZGO & DIRECCIÓN (El Fundador)
    // ==========================================
    {
      title: "Liderazgo & Dirección",
      badge: "01. DIRECTOR & FUNDADOR",
      subtitle: BRAND_INFO.founder,
      content: (
        <div className="space-y-6 w-full">
          {/* Visual 2-Column Founder Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
            {/* Left: Complete Executive Biography */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 px-4 sm:px-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {BRAND_INFO.founder}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0A66FF] mt-1 mb-4">
                  {BRAND_INFO.founderTitle}
                </p>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  <p>
                    Soy abogado ecuatoriano con experiencia en asesoría jurídica a empresas nacionales e internacionales, particularmente en asuntos relacionados con <strong className="text-slate-900 font-semibold">protección de datos personales, tecnología, telecomunicaciones y entornos empresariales regulados</strong>.
                  </p>
                  <p>
                    Mi práctica profesional se ha desarrollado en la intersección entre <strong className="text-slate-900 font-semibold">derecho, tecnología y negocio</strong>. Esto me ha permitido participar tanto en proyectos de cumplimiento normativo como en negociaciones contractuales, implementación de soluciones tecnológicas y asuntos regulatorios que requieren comprender no solo la norma, sino también la operación y los objetivos de cada organización.
                  </p>
                  <p>
                    En protección de datos personales he acompañado procesos integrales de adecuación a la LOPDP, evaluaciones de riesgo e impacto, desarrollo de políticas y procedimientos, revisión de relaciones con proveedores, gestión de incidentes y asesoramiento continuo a organizaciones. Asimismo, desempeño funciones como <strong className="text-slate-900 font-semibold">Delegado de Protección de Datos externo</strong>, brindando acompañamiento independiente en el cumplimiento de la normativa.
                  </p>
                  <p>
                    En el ámbito tecnológico, mi experiencia comprende la elaboración, revisión y negociación de contratos de software, licenciamiento, servicios tecnológicos, outsourcing, cloud y otras relaciones vinculadas con proyectos de transformación digital. En telecomunicaciones, he participado en asuntos regulatorios, contractuales y administrativos relacionados con la operación del sector y con proyectos que requieren interacción con las autoridades ecuatorianas.
                  </p>
                </div>
              </div>

              {/* 3 Key Highlights Strip */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3 my-2 w-full">
                <div className="pr-2 sm:pr-4 flex flex-col justify-start">
                  <Shield className="w-4 h-4 text-[#0A66FF] mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Protección de Datos</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">LOPDP & DPD Externo</div>
                </div>
                <div className="px-2 sm:px-4 flex flex-col justify-start">
                  <Cpu className="w-4 h-4 text-purple-600 mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Tecnología & SaaS</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Contratos & Cloud</div>
                </div>
                <div className="pl-2 sm:pl-4 flex flex-col justify-start">
                  <Scale className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Telecomunicaciones</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">Regulación ARCOTEL</div>
                </div>
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
                    className="w-full max-h-[380px] sm:max-h-[440px] object-contain object-bottom drop-shadow-xl transition-opacity duration-300"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
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
      title: "Forma de Trabajar & Áreas",
      badge: "02. FILOSOFÍA & PRÁCTICA",
      subtitle: "Enfoque Técnico, Negocio y Realidad Operativa",
      content: (
        <div className="space-y-6 w-full">
          {/* Philosophy Banner */}
          <div className="bg-[#0B1D3A] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A66FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#93C5FD]">
                <Quote className="w-4 h-4 text-[#D4AF37]" />
                <span>Mi forma de trabajar</span>
              </div>
              <blockquote className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                "{PHILOSOPHY.premise}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify max-w-3xl">
                {PHILOSOPHY.explanation}
              </p>
            </div>
          </div>

          {/* 4 Professional Experience Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
              Experiencia Profesional
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FOUNDER_EXPERIENCE_AREAS.map((exp, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0A66FF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#0A66FF]" />
                      <h5 className="font-heading font-bold text-base text-slate-900">
                        {exp.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {exp.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Área 0{idx + 1}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // ==========================================
    // 03. FORMACIÓN, EXPERIENCIA Y PARTICIPACIÓN
    // ==========================================
    {
      title: "Formación & Trayectoria",
      badge: "03. CUATRO BLOQUES",
      subtitle: "Formación Académica, Práctica, Gremio & Medios",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Cuatro dimensiones clave que integran formación universitaria, trayectoria especializada, liderazgo gremial y difusión jurídica:
          </p>

          {/* 4 Visual Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            {ABOUT_QUADRANTS.map((quad, idx) => (
              <div 
                key={idx}
                className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm group min-h-[220px] flex flex-col justify-end p-5 w-full bg-slate-900"
              >
                <img
                  src={
                    idx === 0 ? "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80" :
                    idx === 1 ? "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80" :
                    idx === 2 ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80" :
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                  }
                  alt={quad.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-35 group-hover:opacity-45"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/30" />
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${getQuadrantBg(quad.iconName)} flex items-center justify-center backdrop-blur-md`}>
                      {getQuadrantIcon(quad.iconName)}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-heading">{quad.title}</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {quad.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] shrink-0 mt-1.5" />
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 04. CLIENTES DESTACADOS (Empresas & Organizaciones)
    // ==========================================
    {
      title: "Clientes & Organizaciones",
      badge: "04. CLIENTES DE CONFIANZA",
      subtitle: "Empresas Nacionales y Grupos con Presencia Regional",
      content: (
        <div className="space-y-4 w-full">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal px-4 sm:px-0 text-justify">
            Acompañamos jurídicamente a empresas líderes y organizaciones en diversos sectores de la economía:
          </p>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CLIENTS.map((client, idx) => (
              <div
                key={client.id}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0A66FF]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-[#0A66FF] uppercase tracking-wider font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {client.sector}
                    </span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 mb-1 leading-snug">
                    {client.name}
                  </h4>
                  {client.description && (
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {client.description}
                    </p>
                  )}
                </div>

                {client.link && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#0A66FF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Visitar sitio</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // ==========================================
    // 05. TRAYECTORIA & HITOS (Dynamic Interactive Carousel)
    // ==========================================
    {
      title: "Trayectoria & Hitos",
      badge: "05. EVOLUCIÓN HISTÓRICA",
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
    // 06. FILOSOFÍA & RESULTADOS
    // ==========================================
    {
      title: "Valores & Resultados",
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
    // 07. CONVERSEMOS / CONTACTO
    // ==========================================
    {
      title: "Conversemos",
      badge: "07. ASESORÍA DIRECTA",
      subtitle: "Hablemos de tu Proyecto",
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
              src="/header-about.jpg"
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
