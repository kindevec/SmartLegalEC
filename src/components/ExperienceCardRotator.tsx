import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Code2, Radio, Scale, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ExperienceItem {
  area: string;
  description: string;
  icon: string;
}

interface ExperienceCardRotatorProps {
  items: ExperienceItem[];
  intervalMs?: number;
}

export const ExperienceCardRotator: React.FC<ExperienceCardRotatorProps> = ({
  items,
  intervalMs = 4500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66FF]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />;
      case 'Radio':
        return <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-[#818CF8]" />;
      case 'Scale':
        return <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />;
      default:
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66FF]" />;
    }
  };

  const getAccentBg = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#0A66FF]/10 border-[#0A66FF]/20 text-[#0A66FF]';
      case 1:
        return 'bg-[#38BDF8]/10 border-[#38BDF8]/20 text-[#0284C7]';
      case 2:
        return 'bg-[#818CF8]/10 border-[#818CF8]/20 text-[#6366F1]';
      case 3:
        return 'bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#B45309]';
      default:
        return 'bg-[#0A66FF]/10 border-[#0A66FF]/20 text-[#0A66FF]';
    }
  };

  // Automatic Rotation Timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, items.length, intervalMs, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[currentIndex] || items[0];

  return (
    <div 
      className="space-y-3 px-4 sm:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Header with Title and Navigation Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0A66FF] animate-pulse" />
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
            Experiencia Profesional
          </h4>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 font-mono mr-1">
            {String(currentIndex + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
          </span>
          <button
            onClick={handlePrev}
            aria-label="Pilar anterior"
            className="w-6 h-6 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente pilar"
            className="w-6 h-6 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Rotating Card Display with Animated Transitions */}
      <div className="relative min-h-[140px] sm:min-h-[135px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent line with animated time progress */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
              {!isPaused && (
                <motion.div
                  key={`progress-${currentIndex}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: intervalMs / 1000, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#0A66FF] to-[#38BDF8]"
                />
              )}
              {isPaused && (
                <div className="h-full w-full bg-[#0A66FF]/60" />
              )}
            </div>

            {/* Card Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${getAccentBg(currentIndex)}`}>
                  {getIcon(currentItem.icon)}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Área {currentIndex + 1} de {items.length}
                  </span>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {currentItem.area}
                  </h5>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed text-justify font-normal">
                {currentItem.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Tabs / Pills */}
      <div className="grid grid-cols-4 gap-1 pt-0.5">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`py-1.5 px-1 rounded-lg text-[10px] font-bold transition-all text-center cursor-pointer border truncate ${
              currentIndex === idx
                ? 'bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200/80'
            }`}
            title={item.area}
          >
            {item.area.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};
