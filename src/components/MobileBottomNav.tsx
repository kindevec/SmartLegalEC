import React, { useState } from 'react';
import { Home, Scale, User, BookOpen, Mail, ShieldCheck, Code2, Radio, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute } from '../types';
import { NavBar, TubelightNavItem } from './ui/tubelight-navbar';

interface MobileBottomNavProps {
  currentPage: PageRoute;
  onNavigate: (
    route: PageRoute,
    params?: { areaId?: 'lopdp' | 'tech' | 'telecom'; articleSlug?: string; areaFilter?: 'all' | 'lopdp' | 'tech' | 'telecom' }
  ) => void;
  onOpenDiagnostic: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  currentPage, 
  onNavigate,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceCategories: {
    id: 'lopdp' | 'tech' | 'telecom';
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    colorClass: string;
    bgClass: string;
  }[] = [
    {
      id: 'lopdp',
      label: 'Protección de Datos y Privacidad',
      description: 'Adecuación LOPDP, DPD externo y auditorías',
      icon: ShieldCheck,
      colorClass: 'text-[#0A66FF]',
      bgClass: 'bg-[#0A66FF]/15 border-[#0A66FF]/30',
    },
    {
      id: 'tech',
      label: 'Tecnología y Negocios Digitales',
      description: 'Contratos SaaS, software, IA y cloud',
      icon: Code2,
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-500/15 border-purple-500/30',
    },
    {
      id: 'telecom',
      label: 'Telecomunicaciones y Regulación',
      description: 'Títulos habilitantes, ARCOTEL y TIC',
      icon: Radio,
      colorClass: 'text-[#38BDF8]',
      bgClass: 'bg-sky-500/15 border-sky-500/30',
    },
  ];

  const handleServiceSelect = (filter: 'all' | 'lopdp' | 'tech' | 'telecom') => {
    setIsServicesOpen(false);
    onNavigate('areas', { areaFilter: filter });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: TubelightNavItem[] = [
    {
      name: 'Inicio',
      icon: Home,
      route: 'home',
      onClick: () => {
        setIsServicesOpen(false);
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Servicios',
      icon: Scale,
      route: 'areas',
      onClick: () => {
        setIsServicesOpen(false);
        onNavigate('areas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Sobre Mí',
      icon: User,
      route: 'about',
      onClick: () => {
        setIsServicesOpen(false);
        onNavigate('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Casos',
      icon: BookOpen,
      route: 'insights',
      onClick: () => {
        setIsServicesOpen(false);
        onNavigate('insights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Contacto',
      icon: Mail,
      route: 'contact',
      onClick: () => {
        setIsServicesOpen(false);
        onNavigate('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  // Determine which tab is active based on currentPage
  const getActiveTabName = () => {
    if (isServicesOpen) return 'Servicios';
    switch (currentPage) {
      case 'home':
        return 'Inicio';
      case 'areas':
      case 'area-detail':
        return 'Servicios';
      case 'about':
        return 'Sobre Mí';
      case 'insights':
        return 'Casos';
      case 'contact':
        return 'Contacto';
      default:
        return 'Inicio';
    }
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Services Floating Deployment Menu */}
      <AnimatePresence>
        {isServicesOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsServicesOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Bottom Sheet Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="fixed bottom-20 inset-x-4 max-w-sm mx-auto z-50 p-4 rounded-3xl bg-[#0B1D3A]/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl space-y-2.5 text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider font-heading text-slate-200">
                    Áreas de Servicios
                  </span>
                </div>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Cerrar menú de servicios"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4 Service Options */}
              <div className="space-y-1.5 pt-0.5">
                {serviceCategories.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleServiceSelect(cat.id)}
                      className="w-full p-2.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between text-left cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${cat.bgClass}`}>
                          <IconComp className={`w-4 h-4 ${cat.colorClass}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-100 group-hover:text-[#D4AF37] transition-colors truncate">
                            {cat.label}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            {cat.description}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <NavBar 
        items={navItems} 
        activeTab={getActiveTabName()} 
      />
    </div>
  );
};

export default MobileBottomNav;

