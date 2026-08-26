import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageRoute, LegalArticle } from '../types';
import { LEGAL_ARTICLES, BRAND_INFO } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Share2, 
  Sparkles, 
  User, 
  X
} from 'lucide-react';

interface InsightsPageProps {
  initialArticleSlug?: string;
  onNavigate: (route: PageRoute) => void;
  onOpenDiagnostic: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ 
  initialArticleSlug, 
  onNavigate,
  onOpenDiagnostic 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<LegalArticle | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialArticleSlug) {
      const art = LEGAL_ARTICLES.find(a => a.slug === initialArticleSlug);
      if (art) {
        setActiveArticle(art);
      }
    }
  }, [initialArticleSlug]);

  const categories = [
    'all',
    'LOPDP & Privacidad',
    'Contratos Tech & SaaS',
    'Telecomunicaciones y Regulación',
    'Inteligencia Artificial'
  ];

  const filteredArticles = LEGAL_ARTICLES.filter((art) => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
    if (searchQuery.trim() === '') return true;

    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.keyPoints.some(kp => kp.toLowerCase().includes(q))
    );
  });

  const handleShare = (art: LegalArticle) => {
    const shareText = `${art.title} - Análisis por SmartLegalEC: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: art.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
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
            <source srcSet="/header-insights.avif" type="image/avif" />
            <source srcSet="/header-insights.webp" type="image/webp" />
            <img
              src="/header-insights.webp"
              alt="Criterio Jurídico - SmartLegalEC"
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
              Publicaciones & <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Criterio Jurídico</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Análisis exhaustivo sobre la estructuración de <strong className="text-white font-semibold">ecosistemas tecnológicos</strong>, el rol estratégico del <strong className="text-white font-semibold">abogado in-house</strong>, adecuación a la <strong className="text-white font-semibold">LOPDP</strong> y la función del <strong className="text-white font-semibold">Delegado de Protección de Datos (DPD)</strong> en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-20"
      >
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto no-scrollbar pb-1 sm:pb-0 flex-nowrap sm:flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#0B1D3A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'Todos los temas' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en artículos..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A66FF] bg-slate-50"
            />
          </div>
        </div>
      </motion.section>

      {/* 3. ARTICLES LIST (Editorial Line-Separated Layout - Zero Container Bloat) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="py-8 sm:py-10 transition-colors hover:bg-slate-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                {/* Left: Category & Metadata */}
                <div className="lg:col-span-4 space-y-2.5">
                  <span className="inline-block font-bold text-[11px] px-2.5 py-0.5 rounded-md bg-[#0A66FF]/10 text-[#0A66FF] border border-[#0A66FF]/20 font-heading uppercase tracking-wider">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium pt-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Right: Title, Summary, Key Points & CTA */}
                <div className="lg:col-span-8 space-y-3">
                  <h2 
                    onClick={() => setActiveArticle(article)}
                    className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 group-hover:text-[#0A66FF] transition-colors cursor-pointer font-heading leading-snug"
                  >
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {article.summary}
                  </p>

                  {/* Key Takeaways - Clean list without nested box */}
                  {article.keyPoints && article.keyPoints.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-heading">
                        Puntos clave analizados:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {article.keyPoints.slice(0, 2).map((kp, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66FF] shrink-0 mt-0.5" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Read More Trigger */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A66FF] hover:text-[#0852cc] transition-all cursor-pointer group/btn"
                    >
                      <span>Leer artículo completo</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No se encontraron artículos
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Prueba con otro término de búsqueda o selecciona otra categoría.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#0A66FF] hover:underline cursor-pointer"
            >
              Ver todas las publicaciones
            </button>
          </div>
        )}
      </section>

      {/* 4. COMPLIANCE CALLOUT */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-[#0B1D3A] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Herramienta de Evaluación</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
              ¿Deseas verificar si tu empresa cumple con la LOPDP?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 text-justify max-w-xl">
              Prueba nuestro test de autodiagnóstico interactivo con reporte inmediato de riesgos y plan de acción.
            </p>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-md"
          >
            <span>Ejecutar Test LOPDP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.section>

      {/* 5. ARTICLE DETAIL READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div 
            className="bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl border border-slate-200 my-auto sm:my-8 max-h-[92vh] sm:max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Cerrar artículo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
                <span className="font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0A66FF] border border-blue-100">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeArticle.title}
              </h1>

              <div className="flex items-center gap-2 mt-3 text-xs text-slate-600 font-medium">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Por {activeArticle.author}</span>
              </div>
            </div>

            {/* Key Points Box */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8">
              <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-3">
                Aspectos destacados del análisis:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {activeArticle.keyPoints.map((kp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A66FF] shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Content */}
            <div className="space-y-4 text-xs sm:text-sm sm:leading-relaxed text-slate-700 font-normal border-t border-slate-100 pt-6">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line text-justify leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {/* Footer Consultation CTA in Article */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200 bg-slate-50 -mx-5 sm:-mx-8 lg:-mx-10 -mb-5 sm:-mb-8 lg:-mb-10 p-5 sm:p-8 rounded-b-2xl sm:rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  ¿Requieres asesoría sobre este tema en tu empresa?
                </h4>
                <p className="text-[11px] text-slate-600">
                  El Abg. Luis Fernando Guerra Padilla puede evaluar la aplicación directa a tu caso.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="w-full sm:w-auto p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-xs flex items-center justify-center gap-1.5 shrink-0"
                  title="Compartir"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
                </button>

                <a
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola SmartLegalEC, leí su artículo "${activeArticle.title}" y quisiera una asesoría relacionada.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all text-center shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
