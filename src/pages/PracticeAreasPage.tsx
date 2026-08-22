import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PRACTICE_AREAS, BRAND_INFO } from '../data/content';
import { motion } from 'motion/react';
import { ImageAutoSlider } from '../components/ui/image-auto-slider';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  ShieldCheck, 
  Code2, 
  Radio, 
  ArrowRight, 
  Scale, 
  Search,
  FileText
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
      {/* 1. HEADER SECTION with Seamless Full-Bleed Background */}
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
              src="/header-servicios.jpg"
              alt="Áreas de Práctica Jurídica - SmartLegalEC"
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
              Áreas de Práctica & <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E8C8] to-[#D4AF37] bg-clip-text text-transparent">Servicios</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Blindaje normativo integral en <strong className="text-white font-semibold">Privacidad (LOPDP)</strong>, <strong className="text-white font-semibold">Contratación Tecnológica & SaaS</strong> y regulación ante <strong className="text-white font-semibold">ARCOTEL</strong> en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-20"
      >
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto no-scrollbar pb-1 sm:pb-0 flex-nowrap sm:flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-[#0B1D3A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todas las áreas ({PRACTICE_AREAS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('lopdp')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedFilter === 'lopdp'
                  ? 'bg-[#0A66FF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Protección de Datos
            </button>
            <button
              onClick={() => setSelectedFilter('tech')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedFilter === 'tech'
                  ? 'bg-[#0A66FF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tecnología & SaaS
            </button>
            <button
              onClick={() => setSelectedFilter('telecom')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 space-y-16 sm:space-y-20">
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
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0A66FF] shrink-0">
                    {getIcon(area.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block font-heading">
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

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  {area.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-row items-center gap-2.5 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('area-detail', { areaId: area.id })}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-xs whitespace-nowrap text-center"
                >
                  <span>Ver Ficha Detallada</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(area.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-xs whitespace-nowrap text-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
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

            {/* Services Interactive Carousel for this area - Full Bleed Edge-to-Edge on Mobile */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                    Catálogo de Servicios Específicos ({area.services.length})
                  </h3>
                </div>
              </div>

              {/* Edge-to-edge breakout container on mobile */}
              <div className="-mx-4 sm:-mx-6 lg:mx-0">
                <ImageAutoSlider 
                  autoAdvanceSeconds={4.5}
                  resumeDelayMs={10000}
                  pauseOnHover={true}
                  showControls={true}
                  showDots={true}
                  className="py-1"
                >
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
                      <div
                        key={serv.id}
                        onClick={() => onNavigate('area-detail', { areaId: area.id })}
                        className="w-[210px] sm:w-[230px] md:w-[250px] bg-white hover:bg-slate-50/95 border border-slate-200/90 hover:border-blue-300/80 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 cursor-pointer select-none shrink-0"
                      >
                        {/* Service Thematic Image Banner */}
                        <div className="relative w-full h-32 sm:h-34 bg-slate-100 overflow-hidden">
                          <img
                            src={cardImg}
                            alt={serv.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                          <span className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-[#071326]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs">
                            {serv.tag}
                          </span>
                        </div>

                        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 group-hover:text-[#0A66FF] transition-colors leading-snug font-heading line-clamp-2">
                              {serv.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 text-justify">
                              {serv.shortDesc}
                            </p>
                          </div>

                          {/* Action Button: Leer más (Full-page navigation) */}
                          <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] sm:text-xs font-bold text-[#0B1D3A] group-hover:text-[#0A66FF] transition-colors inline-flex items-center gap-1">
                              <span>Leer más</span>
                              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                              Ficha
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ImageAutoSlider>
              </div>
            </div>

            {/* Closing Area Banner */}
            <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-blue-950 font-medium text-justify flex-1">
                {area.closingText}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-colors cursor-pointer shadow-xs"
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
