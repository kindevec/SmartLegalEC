import React from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeArea } from '../types';
import { PRACTICE_AREAS, BRAND_INFO, LEGAL_ARTICLES } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  ShieldCheck, 
  Code2, 
  Radio, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  FileText, 
  Building2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface AreaDetailPageProps {
  areaId: 'lopdp' | 'tech' | 'telecom';
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const AreaDetailPage: React.FC<AreaDetailPageProps> = ({ areaId, onNavigate, onOpenDiagnostic }) => {
  const currentArea = PRACTICE_AREAS.find((a) => a.id === areaId) || PRACTICE_AREAS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#0A66FF]" />;
      case 'Code2':
        return <Code2 className="w-8 h-8 text-[#0A66FF]" />;
      case 'Radio':
        return <Radio className="w-8 h-8 text-[#0A66FF]" />;
      default:
        return <Scale className="w-8 h-8 text-[#0A66FF]" />;
    }
  };

  const relatedArticles = LEGAL_ARTICLES.filter((art) => {
    if (areaId === 'lopdp') return art.category === 'LOPDP & Privacidad';
    if (areaId === 'tech') return art.category === 'Contratos Tecnológicos' || art.category === 'Inteligencia Artificial';
    if (areaId === 'telecom') return art.category === 'Telecomunicaciones y Regulación';
    return true;
  });

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* NAVIGATION BREADCRUMB & HEADER with Seamless Full-Bleed Background */}
      <section className="relative bg-[#071326] text-white min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] h-auto pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-center border-b border-slate-800 overflow-hidden">
        
        {/* Full-Bleed Thematic Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <picture className="w-full h-full">
            <source srcSet="/header-servicios.avif" type="image/avif" />
            <source srcSet="/header-servicios.webp" type="image/webp" />
            <img
              src="/header-servicios.webp"
              alt="Detalle de Área Legal - SmartLegalEC"
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
          <button
            onClick={() => onNavigate('areas')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al catálogo de áreas</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  {getIcon(currentArea.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider block">
                    {currentArea.badge}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {currentArea.name}
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 font-medium mb-3 italic">
                «{currentArea.tagline}»
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {currentArea.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(currentArea.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all text-center whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Consultar por WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-md transition-all cursor-pointer text-center whitespace-nowrap"
              >
                <span>Solicitar Asesoría</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUB-NAV SWITCHER */}
      <section className="bg-white border-b border-slate-200 sticky top-14 sm:top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto no-scrollbar py-2.5 sm:py-3 gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 font-heading">
            Cambiar de área:
          </span>
          <div className="flex items-center gap-2">
            {PRACTICE_AREAS.map((a) => (
              <button
                key={a.id}
                onClick={() => onNavigate('area-detail', { areaId: a.id })}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  a.id === areaId
                    ? 'bg-[#0B1D3A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {a.badge}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* LEFT COLUMN (8 COLS): DETAILED SERVICES CATALOG */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 font-heading tracking-tight">
              Alcance de los Servicios Jurídicos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 leading-relaxed text-justify">
              Cada servicio es ejecutado con metodología legal rigurosa, adaptada a la escala y madurez tecnológica de la organización.
            </p>

            <div className="space-y-4">
              {currentArea.services.map((serv, index) => (
                <motion.div
                  key={serv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="border border-slate-200/90 rounded-2xl p-4 sm:p-6 bg-white hover:border-[#0A66FF]/40 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0A66FF] text-xs font-extrabold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors font-heading leading-snug">
                        {serv.title}
                      </h3>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-slate-100 text-[#0B1D3A] shrink-0">
                      {serv.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2 pl-0 sm:pl-9 text-justify">
                    {serv.shortDesc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pl-0 sm:pl-9 border-t border-slate-100 pt-3 text-justify">
                    {serv.fullDesc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RELATED ARTICLES / LEGAL INSIGHTS */}
          {relatedArticles.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">
                Análisis y Artículos Relacionados con esta Área
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onNavigate('insights', { articleSlug: art.slug })}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50/40 hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#0A66FF] block mb-1">
                        {art.category} • {art.readTime}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors line-clamp-1 font-heading">
                        {art.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A66FF] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT COLUMN (4 COLS): SIDEBAR INFO & CTA */}
        <div className="lg:col-span-4 space-y-6">
          {/* APPLICABLE REGULATIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs"
          >
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 font-heading">
              <Scale className="w-4 h-4 text-[#0A66FF]" />
              <span>Marco Legal Aplicable</span>
            </h3>
            <ul className="space-y-2.5">
              {currentArea.regulations.map((reg, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66FF] shrink-0 mt-0.5" />
                  <span>{reg}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TARGET AUDIENCE / WHO NEEDS THIS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs"
          >
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 font-heading">
              <Building2 className="w-4 h-4 text-[#0A66FF]" />
              <span>¿A quiénes asesoramos?</span>
            </h3>
            <ul className="space-y-2.5">
              {currentArea.targetAudience.map((aud, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A66FF] shrink-0 mt-1.5" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DIAGNOSTIC TRIGGER */}
          {areaId === 'lopdp' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-gradient-to-br from-[#071326] to-[#0B1D3A] text-white rounded-2xl p-6 shadow-sm border border-slate-800"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37] mb-3" />
              <h4 className="text-base font-bold text-white mb-2 font-heading">
                Test de Diagnóstico LOPDP
              </h4>
              <p className="text-xs text-slate-300 mb-4 text-justify">
                Evalúa en 2 minutos el nivel de exposición y riesgo sancionatorio de tu empresa.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-sm"
              >
                <span>Hacer Test LOPDP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* DIRECT CONTACT CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs"
          >
            <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">
              ¿Deseas una propuesta formal?
            </h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed text-justify">
              Escríbenos directamente o agenda una sesión de evaluación para determinar el alcance y honorarios específicos de tu caso.
            </p>
            <div className="flex flex-row items-center gap-2.5 w-full">
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-all cursor-pointer whitespace-nowrap text-center"
              >
                <span>Contacto</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(currentArea.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all whitespace-nowrap text-center"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
