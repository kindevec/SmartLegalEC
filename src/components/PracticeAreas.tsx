import React, { useState, useMemo } from 'react';
import { PRACTICE_AREAS, BRAND_INFO } from '../data/content';
import { PracticeArea, ServiceItem } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { 
  ShieldCheck, 
  Code2, 
  Radio, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface PracticeAreasProps {
  onSelectServiceForConsultation?: (service: ServiceItem) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectServiceForConsultation }) => {
  const [activeAreaId, setActiveAreaId] = useState<'lopdp' | 'tech' | 'telecom'>('lopdp');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const activeArea = useMemo(() => {
    return PRACTICE_AREAS.find((a) => a.id === activeAreaId) || PRACTICE_AREAS[0];
  }, [activeAreaId]);

  // Filtered services if searching across all or within active area
  const displayedServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeArea.services;
    }
    const q = searchQuery.toLowerCase();
    return activeArea.services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.fullDesc.toLowerCase().includes(q) ||
        s.tag.toLowerCase().includes(q)
    );
  }, [activeArea, searchQuery]);

  const getAreaIcon = (id: string, className = 'w-5 h-5') => {
    switch (id) {
      case 'lopdp':
        return <ShieldCheck className={className} />;
      case 'tech':
        return <Code2 className={className} />;
      case 'telecom':
        return <Radio className={className} />;
      default:
        return <ShieldCheck className={className} />;
    }
  };

  const getWhatsAppForArea = (area: PracticeArea) => {
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(area.whatsappMessage)}`;
  };

  const getWhatsAppForService = (service: ServiceItem) => {
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
      `Hola SmartLegalEC, me interesa recibir asesoría especializada en: "${service.title}" (${service.tag}).`
    )}`;
  };

  return (
    <section id="areas" className="bg-[#FFFFFF] text-slate-900 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E6F0FF] text-[#0A66FF] mb-4">
            Especialización Jurídica Integral
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1D3A] tracking-tight leading-tight mb-4">
            Áreas de Práctica
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Asesoramos a corporaciones, startups y proveedores en la gestión integral de riesgos jurídicos, regulatorios y contractuales en el mercado ecuatoriano e internacional.
          </p>
        </div>

        {/* Tab Selector for 3 Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {PRACTICE_AREAS.map((area) => {
            const isActive = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => {
                  setActiveAreaId(area.id);
                  setSearchQuery('');
                }}
                id={`tab-btn-${area.id}`}
                className={`flex items-center gap-3.5 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-md shadow-[#0B1D3A]/10'
                    : 'bg-[#F8FAFC] text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg shrink-0 ${
                    isActive ? 'bg-[#0A66FF] text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {getAreaIcon(area.id, 'w-5 h-5')}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold tracking-wide uppercase opacity-75">
                    {area.badge}
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base truncate">
                    {area.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Area Banner */}
        <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A66FF] mb-2">
                {getAreaIcon(activeArea.id, 'w-4 h-4')}
                <span>{activeArea.name}</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1D3A] mb-3">
                "{activeArea.tagline}"
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeArea.description}
              </p>
            </div>

            {/* Area WhatsApp CTA */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppForArea(activeArea)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>{activeArea.ctaText}</span>
              </a>
            </div>
          </div>

          {/* Quick Search inside Services */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Servicios Especializados ({displayedServices.length} disponibles)
            </div>
            
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filtrar por término (ej. DPD, SaaS, Títulos)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A66FF] text-slate-800"
              />
            </div>
          </div>

          {/* Detailed Services Grid (Flat Anti-AI UI layout: crisp borders, generous whitespace) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between p-5 rounded-xl bg-white border border-slate-200/90 hover:border-[#0A66FF]/50 hover:shadow-md transition-all duration-200 cursor-pointer text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#E6F0FF] text-[#0A66FF]">
                      {service.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-medium">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#0B1D3A] group-hover:text-[#0A66FF] transition-colors mb-2">
                    {service.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A66FF]">
                  <span>Ver alcance legal</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {displayedServices.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500">
                No se encontraron servicios con el filtro "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs font-semibold text-[#0A66FF] hover:underline"
              >
                Restablecer búsqueda
              </button>
            </div>
          )}

          {/* Area Closing Notice */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0A66FF] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700">
                {activeArea.closingText}
              </p>
            </div>
            <a
              href={getWhatsAppForArea(activeArea)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-bold uppercase tracking-wider text-[#0A66FF] hover:underline flex items-center gap-1"
            >
              <span>Agendar revisión técnica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal / Detailed Scope Drawer for Service Detail */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#E6F0FF] text-[#0A66FF]">
                  {selectedService.tag}
                </span>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1D3A] mb-3">
                {selectedService.title}
              </h3>

              <div className="py-4 border-y border-slate-100 mb-6">
                <div className="text-xs uppercase font-semibold text-slate-400 mb-1">
                  Alcance y Metodología Jurídica
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppForService(selectedService)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Consultar por WhatsApp</span>
                </a>
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
