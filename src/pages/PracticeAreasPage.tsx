import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PRACTICE_AREAS, BRAND_INFO } from '../data/content';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Code2, 
  Radio, 
  ArrowRight, 
  Scale, 
  Search,
  FileText,
  MessageSquare
} from 'lucide-react';

interface PracticeAreasPageProps {
  onNavigate: (route: PageRoute, params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string }) => void;
  onOpenDiagnostic: () => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'lopdp' | 'tech' | 'telecom'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0A66FF]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#0A66FF]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#0A66FF]" />;
      default:
        return <Scale className="w-6 h-6 text-[#0A66FF]" />;
    }
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (selectedFilter !== 'all' && area.id !== selectedFilter) return false;
    if (searchQuery.trim() === '') return true;
    
    const query = searchQuery.toLowerCase();
    const matchesName = area.name.toLowerCase().includes(query);
    const matchesDesc = area.description.toLowerCase().includes(query);
    const matchesServices = area.services.some(s => s.title.toLowerCase().includes(query) || s.shortDesc.toLowerCase().includes(query));
    return matchesName || matchesDesc || matchesServices;
  });

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20 overflow-hidden">
      {/* HEADER SECTION with Motion starting from top 0 */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-14 lg:pb-16 border-b border-slate-800 overflow-hidden">
        {/* Thematic Background Image - Crystal Clear, High Definition & Vibrant */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <picture className="w-full h-full">
            <source srcSet="/header-servicios.avif" type="image/avif" />
            <source srcSet="/header-servicios.webp" type="image/webp" />
            <img
              src="/header-servicios.jpg"
              alt="Áreas de Práctica Jurídica - SmartLegalEC"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Minimal contrast gradient only behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#132742] text-[#D4AF37] border border-slate-700 mb-3">
              <Scale className="w-3 h-3 text-[#D4AF37]" />
              <span>CATÁLOGO DE ESPECIALIDADES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 font-heading">
              Áreas de Práctica & Servicios
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Asesoría jurídica en privacidad (LOPDP), contratos de tecnología y regulación de telecomunicaciones en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20"
      >
        <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#0B1D3A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todas las áreas ({PRACTICE_AREAS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('lopdp')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'lopdp'
                  ? 'bg-[#0A66FF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Protección de Datos
            </button>
            <button
              onClick={() => setSelectedFilter('tech')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'tech'
                  ? 'bg-[#0A66FF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tecnología & SaaS
            </button>
            <button
              onClick={() => setSelectedFilter('telecom')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'telecom'
                  ? 'bg-[#0A66FF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Telecomunicaciones
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio o materia..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent bg-slate-50"
            />
          </div>
        </div>
      </motion.section>

      {/* PRACTICE AREAS FULL LIST - Clean Editorial Layout (No Container Bloat) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {filteredAreas.map((area, aIdx) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: aIdx * 0.08 }}
            id={`area-${area.id}`}
            className="pt-8 border-t border-slate-200 first:border-t-0 first:pt-0"
          >
            {/* Area Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0A66FF]">
                    {getIcon(area.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block">
                      {area.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {area.name}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#0B1D3A] font-semibold mb-2 italic">
                  «{area.tagline}»
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap sm:flex-nowrap lg:flex-col gap-2.5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('area-detail', { areaId: area.id })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-xs"
                >
                  <span>Ver Ficha Detallada</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(area.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consultar Área</span>
                </motion.a>
              </div>
            </div>

            {/* Applicable Regulations in Ecuador */}
            <div className="py-4 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">
                Normativa Aplicable:
              </span>
              {area.regulations.map((reg, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 transition-colors"
                >
                  <FileText className="w-3 h-3 text-[#0A66FF]" />
                  <span>{reg}</span>
                </span>
              ))}
            </div>

            {/* Services Grid for this area */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                  Catálogo de Servicios Específicos ({area.services.length})
                </h3>
                <span className="text-xs text-slate-500 font-normal hidden sm:inline">
                  Soluciones jurídicas a medida
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.services.map((serv, sIdx) => {
                  // Thematic service imagery mapping
                  const serviceImages: Record<string, string[]> = {
                    lopdp: [
                      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
                    ],
                    tech: [
                      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
                    ],
                    telecom: [
                      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
                    ]
                  };

                  const imgList = serviceImages[area.id] || serviceImages.lopdp;
                  const cardImg = imgList[sIdx % imgList.length];

                  return (
                      <motion.div
                        key={serv.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.35, delay: (sIdx % 3) * 0.08 }}
                        whileHover={{ y: -4, transition: { duration: 0.15 } }}
                        onClick={() => onNavigate('area-detail', { areaId: area.id })}
                        className="bg-white hover:bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer"
                      >
                        {/* Service Thematic Image Banner */}
                        <div className="relative w-full h-32 bg-slate-100 overflow-hidden">
                          <img
                            src={cardImg}
                            alt={serv.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                          <span className="absolute bottom-2 left-3 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#112340]/90 text-[#D4AF37] border border-slate-700 backdrop-blur-xs">
                            {serv.tag}
                          </span>
                        </div>

                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0A66FF] transition-colors leading-snug font-heading">
                              {serv.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {serv.shortDesc}
                            </p>
                          </div>

                          {/* Action Button: Leer más (Full-page navigation) */}
                          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0B1D3A] group-hover:text-[#0A66FF] transition-colors inline-flex items-center gap-1.5">
                              <span>Leer más</span>
                              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                              Ficha completa
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Closing Area Banner */}
              <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-blue-950 font-medium">
                {area.closingText}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-colors cursor-pointer"
              >
                <span>{area.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
