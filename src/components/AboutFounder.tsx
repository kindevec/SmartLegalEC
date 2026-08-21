import React from 'react';
import { ABOUT_QUADRANTS, METRICS, BRAND_INFO } from '../data/content';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  Quote, 
  MessageSquare, 
  Linkedin, 
  CheckCircle2,
  Scale
} from 'lucide-react';

export const AboutFounder: React.FC = () => {
  const getQuadrantIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#0A66FF]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#0A66FF]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#0A66FF]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0A66FF]" />;
      default:
        return <Scale className="w-5 h-5 text-[#0A66FF]" />;
    }
  };

  const whatsappDirectUrl = `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hola Abg. Luis Fernando Guerra, me gustaría agendar una reunión para presentarle un requerimiento legal de mi empresa.'
  )}`;

  return (
    <section
      id="sobre-mi"
      className="bg-[#0B1D3A] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Badge */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-[#93C5FD] border border-slate-700 mb-4">
            Liderazgo & Experiencia
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3">
            Luis Fernando Guerra Padilla
          </h2>
          <p className="text-base sm:text-lg text-[#93C5FD] font-medium">
            Managing Partner • Abogado especializado en Protección de Datos, Tecnología y Telecomunicaciones
          </p>
        </div>

        {/* Biography & Philosophy Banner (Anti-AI UI: Clear contrast, editorial manifesto layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              Soy abogado ecuatoriano con experiencia en asesoría jurídica a empresas nacionales e internacionales, particularmente en asuntos relacionados con protección de datos personales, tecnología, telecomunicaciones y entornos empresariales regulados.
            </p>
            <p>
              Mi práctica profesional se ha desarrollado en la intersección entre derecho, tecnología y negocio. Esto me ha permitido participar tanto en proyectos de cumplimiento normativo como en negociaciones contractuales, implementación de soluciones tecnológicas y asuntos regulatorios que requieren comprender no solo la norma, sino también la operación y los objetivos de cada organización.
            </p>

            <div className="pt-3 flex items-center gap-4">
              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66FF]" />
                <span>Perfil en LinkedIn</span>
              </a>
              
              <span className="text-xs text-slate-400">
                Ubicación: Quito, Ecuador
              </span>
            </div>
          </div>

          {/* Philosophy / Manifesto Block */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-[#0A66FF] mb-4 opacity-80" />
              <div className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                Filosofía de Trabajo
              </div>
              <blockquote className="font-heading font-medium text-lg sm:text-xl text-white italic leading-snug mb-6">
                "Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio."
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                Luis Fernando Guerra Padilla
              </div>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0A66FF] hover:underline flex items-center gap-1"
              >
                <span>Contactar</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Grid (Social Proof) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col"
            >
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A66FF] mb-1">
                {metric.value}
              </span>
              <span className="font-semibold text-sm sm:text-base text-white mb-1.5">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 leading-normal">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Quadrants: Formación | Especialización | Actividad | Publicaciones */}
        <div className="pt-6">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">
            Trayectoria Profesional y Formación
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_QUADRANTS.map((quadrant, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    {getQuadrantIcon(quadrant.iconName)}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {quadrant.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {quadrant.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0A66FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section Closing CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0B1D3A] border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-2">
              Conversemos sobre tu proyecto
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Si tu empresa enfrenta un desafío jurídico relacionado con protección de datos, tecnología o telecomunicaciones, estaré encantado de conocer el proyecto y analizar cómo podemos ayudarte.
            </p>
          </div>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-md transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>CONTACTAR CON LUIS GUERRA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
