import React from 'react';
import { PageRoute } from '../types';
import { BRAND_INFO, ABOUT_QUADRANTS, CORPORATE_VALUES, METRICS } from '../data/content';
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
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Scale
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const getQuadrantIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#0A66FF]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#0A66FF]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#0A66FF]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#0A66FF]" />;
      default:
        return <Award className="w-6 h-6 text-[#0A66FF]" />;
    }
  };

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#0A66FF]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#0A66FF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#0A66FF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#0A66FF]" />;
      default:
        return <Shield className="w-6 h-6 text-[#0A66FF]" />;
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* 1. HEADER HERO */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-16 lg:pb-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header-about.jpg"
            alt="Sobre SmartLegalEC - Despacho Jurídico Boutique"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#132742] text-[#D4AF37] border border-slate-700 mb-3">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>PERFIL INSTITUCIONAL & LIDERAZGO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 font-heading">
              Sobre SmartLegalEC
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Firma jurídica boutique especializada en asesoría de vanguardia en economía de datos, tecnología y telecomunicaciones en Ecuador.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PROFILE SECTION - Editorial Clean Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider block mb-2 font-heading">
              Director & Fundador
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 font-heading tracking-tight">
              {BRAND_INFO.founder}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-6">
              {BRAND_INFO.founderTitle}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                El <strong>Abg. Luis Fernando Guerra Padilla</strong> cuenta con más de una década de ejercicio profesional especializado en la intersección entre el Derecho, las Nuevas Tecnologías y el sector de las Telecomunicaciones en Ecuador y la región andina.
              </p>
              <p>
                Su práctica se enfoca en brindar soluciones legales de alto valor estratégico para empresas nacionales y multinacionales que operan con altos volúmenes de datos personales, modelos de negocio digitales basados en software, plataformas cloud y despliegues de redes e infraestructura de conectividad.
              </p>
              <p>
                Ha participado activamente en la estructuración e implementación de programas de adecuación a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong>, actuando como Delegado de Protección de Datos (DPD) externo y como consultor en trámites regulatorios complejos ante la <strong>Agencia de Regulación y Control de las Telecomunicaciones (ARCOTEL)</strong>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Conectar en LinkedIn</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* HIGHLIGHT EDITORIAL CARD */}
          <div className="lg:col-span-4 bg-[#0B1D3A] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider font-heading">
              Compromiso de Asesoría Directa
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Cada consulta, contrato o proceso de adecuación es liderado y supervisado personalmente por el Abg. Luis Fernando Guerra Padilla, asegurando un estándar analítico riguroso y una comunicación directa y transparente.
            </p>
            <div className="pt-4 border-t border-slate-700/80">
              <div className="text-2xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400">Atención personalizada y sin intermediarios</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR STRATEGIC QUADRANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider block mb-2">
            Pilares de Excelencia
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Cuatro Cuadrantes Estratégicos
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            La combinación de formación académica continua, experiencia práctica, actividad gremial y análisis normativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABOUT_QUADRANTS.map((quad, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {getQuadrantIcon(quad.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {quad.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {quad.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0A66FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORPORATE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider block mb-2">
            Filosofía de Trabajo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Valores Corporativos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {getValueIcon(val.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {val.title}
                </h3>
                <span className="text-xs font-bold text-[#0A66FF] block mb-3">
                  {val.tagline}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. METRICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="pt-6 md:pt-0 px-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-600 max-w-xs mx-auto">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0B1D3A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Hablemos sobre las necesidades legales de tu organización
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-xl mx-auto">
            Agenda una reunión informativa o envíanos los antecedentes de tu caso para coordinar una propuesta técnica a medida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer"
            >
              <span>Contactar a la Firma</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola SmartLegalEC, me gustaría agendar una reunión con el Abg. Luis Fernando Guerra.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
