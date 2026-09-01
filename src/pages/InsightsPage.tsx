import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute, LegalArticle } from '../types';
import { LEGAL_ARTICLES, BRAND_INFO, FOUNDER_PROFILE } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LinkedInIcon } from '../components/LinkedInIcon';
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
  ShieldCheck,
  Scale,
  Code2,
  Building2,
  ChevronRight,
  Check
} from 'lucide-react';

interface InsightsPageProps {
  initialArticleSlug?: string;
  onNavigate: (route: PageRoute, params?: { articleSlug?: string }) => void;
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setActiveArticle(null);
    }
  }, [initialArticleSlug]);

  const categories = [
    'all',
    'LOPDP & Privacidad',
    'Contratos Tecnológicos',
    'Asesoría Corporativa'
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

  const handleSelectArticle = (art: LegalArticle) => {
    setActiveArticle(art);
    onNavigate('insights', { articleSlug: art.slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveArticle(null);
    onNavigate('insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (art: LegalArticle) => {
    const shareText = `${art.title} — Análisis por SmartLegalEC: ${window.location.origin}/insights/${art.slug}`;
    if (navigator.share) {
      navigator.share({
        title: art.title,
        text: shareText,
        url: `${window.location.origin}/insights/${art.slug}`,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareText}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedArticles = activeArticle 
    ? LEGAL_ARTICLES.filter(a => a.id !== activeArticle.id).slice(0, 3)
    : [];

  if (activeArticle) {
    return (
      <div className="w-full bg-[#F8FAFC] min-h-screen pb-24 text-slate-900 selection:bg-[#0A66FF] selection:text-white">
        <section className="bg-[#071326] text-white border-b border-slate-800 sticky top-16 sm:top-20 z-30 backdrop-blur-md bg-opacity-95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors cursor-pointer group shrink-0"
            >
              <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-[#0A66FF] flex items-center justify-center transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              </div>
              <span className="hidden sm:inline">Volver a Casos de Éxito</span>
              <span className="sm:hidden">Volver</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-lg">
              <span onClick={handleBackToList} className="hover:text-white cursor-pointer transition-colors">Publicaciones</span>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-[#D4AF37] font-semibold shrink-0">{activeArticle.category}</span>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-slate-300 truncate">{activeArticle.title}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleShare(activeArticle)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700 cursor-pointer shadow-xs"
                title="Compartir publicación"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>

              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola Luis Fernando Guerra, leí su publicación "${activeArticle.title}" y quisiera consultar un caso para mi organización.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Consultar</span>
              </a>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-[#071326] via-[#0B1D3A] to-[#0F274A] text-white pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider bg-[#071326] text-[#D4AF37] border border-[#D4AF37]/40 shadow-xs font-heading">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {activeArticle.date}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {activeArticle.readTime}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.2] mb-6">
              {activeArticle.title}
            </h1>

            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-700/60">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/80 shrink-0 bg-slate-800">
                <img
                  src="/cliente.webp"
                  alt={activeArticle.author}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">
                  {activeArticle.author}
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Socio Director en SmartLegalEC • Especialista en Datos, Tecnología y Telecomunicaciones
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 space-y-8">
              {activeArticle.image && (
                <div className="w-full h-60 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group">
                  <picture className="w-full h-full block">
                    <source srcSet={activeArticle.image.replace(/\.(jpg|png|jpeg)$/, '.avif')} type="image/avif" />
                    <source srcSet={activeArticle.image.replace(/\.(jpg|png|jpeg)$/, '.webp')} type="image/webp" />
                    <img
                      src={activeArticle.image}
                      alt={activeArticle.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 font-medium italic">
                    Análisis técnico-jurídico preparado para empresas y organizaciones en Ecuador.
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-[#0A66FF] shadow-xs">
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed text-left">
                  {activeArticle.summary}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/50 border border-blue-100 rounded-2xl p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#0A66FF]" />
                  <h3 className="text-xs sm:text-sm font-extrabold text-blue-950 uppercase tracking-wider font-heading">
                    Aspectos Clave del Análisis Jurídico:
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                  {activeArticle.keyPoints.map((kp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold shadow-xs">
                        ✓
                      </div>
                      <span className="leading-relaxed font-normal">{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100 text-slate-800 leading-relaxed text-left">
                {activeArticle.content.map((paragraph, idx) => {
                  const isHeaderBlock = paragraph.startsWith('PREVENCIÓN:') || 
                                        paragraph.startsWith('CONTENCIÓN:') || 
                                        paragraph.startsWith('GENERACIÓN DE OPORTUNIDADES:');

                  if (isHeaderBlock) {
                    const [titlePart, ...bodyParts] = paragraph.split('\n');
                    return (
                      <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
                        <h4 className="text-sm sm:text-base font-extrabold text-[#0B1D3A] uppercase tracking-wide font-heading flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0A66FF]" />
                          {titlePart}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-left">
                          {bodyParts.join('\n')}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="whitespace-pre-line text-sm sm:text-base text-slate-700 leading-relaxed text-left">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-[#071326] text-white border border-slate-800 flex flex-col sm:flex-row items-center gap-5 shadow-xl">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-slate-800 shadow-md">
                  <img
                    src="/cliente.webp"
                    alt={activeArticle.author}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5 text-center sm:text-left flex-1">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider font-heading">
                    Sobre el Autor
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-white font-heading">
                    {activeArticle.author}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Abogado con más de 15 años de trayectoria profesional, ex abogado corporativo interno de telecomunicaciones y Delegado de Protección de Datos (DPD) certificado ante la SPDP.
                  </p>
                  <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                    <a
                      href={BRAND_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] hover:text-white transition-colors"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                      <span>Ver perfil en LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-900 via-[#0B1D3A] to-[#071326] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                    ¿Requieres estructurar este tema en tu empresa?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Podemos analizar tu modelo contractual, regulatorio o de privacidad de forma personalizada.
                  </p>
                </div>
                <a
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola Luis Fernando, leí su publicación "${activeArticle.title}" y quisiera agendar una asesoría legal para mi empresa.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md shrink-0 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-36 self-start">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-[#0A66FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Asesoría Directa
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Con Luis Fernando Guerra
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-left">
                  Asesoramiento estratégico para empresas que dependen de contratos digitales, privacidad y marcos regulatorios en Ecuador.
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola Luis Fernando, me gustaría una asesoría relacionada con su caso: "${activeArticle.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-xs text-center"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Directo</span>
                  </a>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-[#0A66FF] text-white transition-all shadow-xs text-center cursor-pointer"
                  >
                    <span>Formulario de Contacto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/90 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading uppercase tracking-wider">
                    Otros Casos de Éxito
                  </h4>
                  <button
                    onClick={handleBackToList}
                    className="text-[11px] font-bold text-[#0A66FF] hover:underline cursor-pointer"
                  >
                    Ver todos
                  </button>
                </div>

                <div className="divide-y divide-slate-100 space-y-3">
                  {relatedArticles.map((relArt) => (
                    <div
                      key={relArt.id}
                      onClick={() => handleSelectArticle(relArt)}
                      className="pt-3 first:pt-0 cursor-pointer group flex gap-3 items-start"
                    >
                      {relArt.image && (
                        <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                          <img
                            src={relArt.image}
                            alt={relArt.title}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-extrabold uppercase text-[#0A66FF] tracking-wider block font-heading mb-0.5">
                          {relArt.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#0A66FF] transition-colors leading-snug line-clamp-2">
                          {relArt.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {relArt.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      <section className="relative bg-[#071326] text-white min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] h-auto pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-center border-b border-slate-800 overflow-hidden">
        
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
              alt="Casos de Éxito - SmartLegalEC"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-center lg:object-right"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          
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
              Publicaciones & <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Casos de Éxito</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Análisis exhaustivo sobre la estructuración de <strong className="text-white font-semibold">ecosistemas tecnológicos</strong>, el rol estratégico del <strong className="text-white font-semibold">abogado corporativo interno</strong>, adecuación a la <strong className="text-white font-semibold">LOPDP</strong> y la función del <strong className="text-white font-semibold">Delegado de Protección de Datos (DPD)</strong> en Ecuador.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-20"
      >
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => handleSelectArticle(article)}
              className="py-8 sm:py-10 transition-colors hover:bg-slate-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                <div className="lg:col-span-4">
                  {article.image && (
                    <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-3 border border-slate-200/90 shadow-xs bg-slate-100">
                      <picture className="w-full h-full block">
                        <source srcSet={article.image.replace(/\.(jpg|png|jpeg)$/, '.avif')} type="image/avif" />
                        <source srcSet={article.image.replace(/\.(jpg|png|jpeg)$/, '.webp')} type="image/webp" />
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#071326]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs font-heading">
                        {article.category}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-slate-500">
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
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors leading-snug font-heading mb-2.5">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 text-left">
                      {article.summary}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 mb-4">
                      <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-2 font-heading">
                        Puntos Destacados:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {article.keyPoints.slice(0, 3).map((kp, kpIdx) => (
                          <li key={kpIdx} className="flex items-start gap-2 text-left">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66FF] shrink-0 mt-0.5" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A66FF] group-hover:text-[#0852cc] transition-colors font-heading">
                      <span>Leer análisis completo</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Por {article.author}
                    </span>
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
    </div>
  );
};
