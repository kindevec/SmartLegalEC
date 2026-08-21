import React from 'react';
import { PageRoute, PracticeArea } from '../types';
import { PRACTICE_AREAS, BRAND_INFO, LEGAL_ARTICLES } from '../data/content';
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
  MessageSquare,
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
    if (areaId === 'tech') return art.category === 'Contratos Tech & SaaS' || art.category === 'Inteligencia Artificial';
    if (areaId === 'telecom') return art.category === 'Telecomunicaciones & ARCOTEL';
    return true;
  });

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* NAVIGATION BREADCRUMB & HEADER */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-16 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
            alt="Detalle de Área Legal"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('areas')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al catálogo de áreas</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  {getIcon(currentArea.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider block">
                    {currentArea.badge}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {currentArea.name}
                  </h1>
                </div>
              </div>

              <p className="text-base text-slate-200 font-medium mb-3 italic">
                «{currentArea.tagline}»
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentArea.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(currentArea.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-md transition-all cursor-pointer"
              >
                <span>Solicitar Asesoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUB-NAV SWITCHER */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-3 gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
            Cambiar de área:
          </span>
          <div className="flex items-center gap-2">
            {PRACTICE_AREAS.map((a) => (
              <button
                key={a.id}
                onClick={() => onNavigate('area-detail', { areaId: a.id })}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  a.id === areaId
                    ? 'bg-[#0B1D3A] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {a.badge}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN (8 COLS): DETAILED SERVICES CATALOG */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 font-heading tracking-tight">
              Alcance de los Servicios Jurídicos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
              Cada servicio es ejecutado con metodología legal rigurosa, adaptada a la escala y madurez tecnológica de la organización.
            </p>

            <div className="space-y-4">
              {currentArea.services.map((serv, index) => (
                <div
                  key={serv.id}
                  className="border border-slate-200/90 rounded-2xl p-5 sm:p-6 bg-white hover:border-[#0A66FF]/40 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0A66FF] text-xs font-extrabold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors font-heading">
                        {serv.title}
                      </h3>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-[#0B1D3A] shrink-0">
                      {serv.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2 pl-9">
                    {serv.shortDesc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pl-9 border-t border-slate-100 pt-3">
                    {serv.fullDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RELATED ARTICLES / LEGAL INSIGHTS */}
          {relatedArticles.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
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
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors line-clamp-1">
                        {art.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A66FF] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (4 COLS): SIDEBAR INFO & CTA */}
        <div className="lg:col-span-4 space-y-6">
          {/* APPLICABLE REGULATIONS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
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
          </div>

          {/* TARGET AUDIENCE / WHO NEEDS THIS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
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
          </div>

          {/* DIAGNOSTIC TRIGGER */}
          {areaId === 'lopdp' && (
            <div className="bg-gradient-to-br from-blue-900 to-[#0B1D3A] text-white rounded-2xl p-6 shadow-sm border border-blue-900">
              <Sparkles className="w-6 h-6 text-[#60A5FA] mb-3" />
              <h4 className="text-base font-bold text-white mb-2">
                Test de Diagnóstico LOPDP
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Evalúa en 2 minutos el nivel de exposición y riesgo sancionatorio de tu empresa.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer"
              >
                <span>Ejecutar Test Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* DIRECT CONTACT CARD */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              ¿Deseas una propuesta formal?
            </h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Escríbenos directamente o agenda una sesión de evaluación para determinar el alcance y honorarios específicos de tu caso.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-all cursor-pointer mb-2"
            >
              <span>Ir a Contacto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(currentArea.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
