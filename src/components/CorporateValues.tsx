import React from 'react';
import { CORPORATE_VALUES } from '../data/content';
import { Award, Shield, Zap, HeartHandshake } from 'lucide-react';

export const CorporateValues: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#0A66FF]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#0A66FF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#0A66FF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#0A66FF]" />;
      default:
        return <Award className="w-6 h-6 text-[#0A66FF]" />;
    }
  };

  return (
    <section id="valores" className="bg-[#F8FAFC] text-slate-900 py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E6F0FF] text-[#0A66FF] mb-3">
            Principios Fundamentales
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1D3A] tracking-tight mb-3">
            Valores Corporativos
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            La práctica jurídica de SmartLegalEC se rige por principios inquebrantables de excelencia técnica, visión de futuro y cercanía comercial.
          </p>
        </div>

        {/* 4 Values Grid (Anti-AI UI: Flat structural grid, generous whitespace, no nested card clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0A66FF]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#E6F0FF] w-fit mb-4">
                  {getIcon(val.iconName)}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#0B1D3A] mb-1">
                  {val.title}
                </h3>
                
                <div className="text-xs font-semibold text-[#0A66FF] uppercase tracking-wider mb-3">
                  {val.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs">
                <span className="font-mono">Pilar 0{idx + 1}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A66FF]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
