import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Shield, 
  Server, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export interface MilestoneItem {
  id: string;
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  accentColor: string;
  icon: React.ElementType;
}

export const MILESTONES: MilestoneItem[] = [
  {
    id: 'ai-era',
    year: '2024 — 2026',
    badge: 'Vanguardia Tecnológica',
    title: 'Gobernanza de IA & DPD Enterprise',
    description: 'Consolidación del servicio de Delegado de Protección de Datos (DPD / DPO) externo para corporaciones líderes en fintech, salud y telecomunicaciones. Asesoría especializada en contratos de entrenamiento de Inteligencia Artificial y gobernanza algorítmica.',
    highlights: [
      'Auditorías SPDP & Contratos Algorítmicos',
      'Delegado DPD Externo para Redes Corporativas',
      'Compliance Ético de Agentes Autónomos'
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#0A66FF',
    icon: Cpu
  },
  {
    id: 'lopdp-era',
    year: '2021 — 2023',
    badge: 'Marco LOPDP Nacional',
    title: 'Entrada en Vigor LOPDP (RO 459)',
    description: 'Con la promulgación de la Ley Orgánica de Protección de Datos Personales en Ecuador, lideramos más de 45 programas integrales de adecuación jurídica y técnica, levantamiento de RAT y redacción de políticas de privacidad transfronterizas.',
    highlights: [
      'Mapeo de Flujos & Registro RAT',
      'Contratos de Encargo con Proveedores Cloud',
      'Protocolos de Notificación ante Brechas'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981',
    icon: Shield
  },
  {
    id: 'cloud-telco',
    year: '2017 — 2020',
    badge: 'Infraestructura & Telecom',
    title: 'Contratación SaaS & Regulación en Telecomunicaciones',
    description: 'Especialización y consultoría jurídica para operadores de telecomunicaciones, proveedores de valor agregado (PVA) y empresas de software transfronterizo, incluyendo estructuración de SLAs y títulos habilitantes.',
    highlights: [
      'Títulos Habilitantes & Espectro',
      'Licenciamiento SaaS & Cloud SLAs',
      'Contratos Internacionales de Conectividad'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#8B5CF6',
    icon: Server
  },
  {
    id: 'foundation',
    year: '2014 — 2016',
    badge: 'Fundación Boutique',
    title: 'Nacimiento de la Práctica Boutique',
    description: 'Inicio de la práctica legal especializada fundada por Luis Fernando Guerra Padilla, siendo pioneros en brindar asesoramiento jurídico con entendimiento técnico profundo del software y las telecomunicaciones en Ecuador.',
    highlights: [
      'Pioneros en Derecho Digital Andino',
      'Estructuración de Negocios de Software',
      'Defensa Jurídica en Comercio Electrónico'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#D4AF37',
    icon: Sparkles
  }
];

export const MilestoneCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MILESTONES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const active = MILESTONES[currentIndex];
  const Icon = active.icon;

  return (
    <div 
      className="w-full space-y-3.5 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Era Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 px-4 sm:px-0 scrollbar-none">
        {MILESTONES.map((item, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span 
                className="w-2 h-2 rounded-full transition-all"
                style={{ 
                  backgroundColor: isSelected ? item.accentColor : '#94A3B8',
                  boxShadow: isSelected ? `0 0 8px ${item.accentColor}` : 'none'
                }} 
              />
              <span>{item.year}</span>
            </button>
          );
        })}
      </div>

      {/* Main Dynamic Carousel Card - Natural Fit (No Empty Bottom Space on PC) */}
      <div className="relative rounded-none sm:rounded-3xl overflow-hidden shadow-xl border-y sm:border border-slate-800 bg-[#071326] text-white w-full">
        {/* Dynamic Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            {/* Balanced Cinematic Gradient: readable text + clearly visible image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/65 via-50% to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/80 via-[#071326]/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Foreground Content - Natural Compact Flow */}
        <div className="relative z-10 p-4 sm:p-6 md:p-7 flex flex-col space-y-3 sm:space-y-3.5">
          {/* Top Bar inside Card */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20"
                style={{ backgroundColor: `${active.accentColor}30` }}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <span 
                className="text-xs sm:text-sm font-extrabold font-heading tracking-tight"
                style={{ color: active.accentColor }}
              >
                {active.year}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Anterior hito"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente hito"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Title & Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + '-text'}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-2.5 sm:space-y-3"
            >
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight leading-snug">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-normal text-justify">
                {active.description}
              </p>

              {/* Highlights Linear Divider (No Box-in-Box) */}
              <div className="pt-2 sm:pt-3 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15 border-y border-white/15 py-2 sm:py-2.5 my-1">
                {active.highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="py-1.5 sm:py-0 px-1 sm:px-3 flex items-center gap-2 text-[11px] sm:text-xs text-slate-200"
                  >
                    <CheckCircle2 
                      className="w-3.5 h-3.5 shrink-0" 
                      style={{ color: active.accentColor }} 
                    />
                    <span className="leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Progress Bar & Dots */}
          <div className="pt-1 sm:pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {MILESTONES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === currentIndex 
                      ? 'w-7 bg-white' 
                      : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir al hito ${i + 1}`}
                />
              ))}
            </div>

            <span className="text-[10px] text-slate-400 font-medium">
              {currentIndex + 1} de {MILESTONES.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCarousel;
