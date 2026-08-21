import React, { useState, useEffect } from 'react';
import { PageRoute, LegalArticle } from '../types';
import { LEGAL_ARTICLES, BRAND_INFO } from '../data/content';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Share2, 
  MessageSquare,
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
    'Telecomunicaciones & ARCOTEL',
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
      {/* 1. HEADER SECTION */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header-insights.jpg"
            alt="Insights Jurídicos - SmartLegalEC"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#132742] text-[#D4AF37] border border-slate-700 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>CRITERIO & PUBLICACIONES JURÍDICAS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 font-heading">
              Legal Insights & Análisis
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Análisis técnico-jurídico y guías prácticas sobre la aplicación de la LOPDP en Ecuador, contratación tecnológica, regulación de telecomunicaciones e inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B1D3A] text-white'
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
      </section>

      {/* 3. ARTICLES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-600 mb-4">
                  <span className="font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0A66FF] border border-blue-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h2 
                  onClick={() => setActiveArticle(article)}
                  className="text-lg sm:text-xl font-bold text-slate-900 mb-3 hover:text-[#0A66FF] transition-colors cursor-pointer"
                >
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Key Takeaways preview */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Puntos clave analizados:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {article.keyPoints.slice(0, 2).map((kp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66FF] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {article.author}
                </span>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A66FF] hover:text-[#0852cc] cursor-pointer"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#0B1D3A] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Herramienta de Evaluación</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              ¿Deseas verificar si tu empresa cumple con la LOPDP?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Prueba nuestro test de autodiagnóstico interactivo con reporte inmediato de riesgos.
            </p>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all cursor-pointer shadow-md"
          >
            <span>Ejecutar Test LOPDP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. ARTICLE DETAIL READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="bg-white w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
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
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 mb-8">
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
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer Consultation CTA in Article */}
            <div className="mt-10 pt-6 border-t border-slate-200 bg-slate-50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  ¿Requieres asesoría sobre este tema en tu empresa?
                </h4>
                <p className="text-[11px] text-slate-600">
                  El Abg. Luis Fernando Guerra Padilla puede evaluar la aplicación directa a tu caso.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-xs flex items-center gap-1.5 shrink-0"
                  title="Compartir"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
                </button>

                <a
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola SmartLegalEC, leí su artículo "${activeArticle.title}" y quisiera una asesoría relacionada.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Caso</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
