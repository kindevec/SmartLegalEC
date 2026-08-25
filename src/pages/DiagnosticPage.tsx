import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { DIAGNOSTIC_QUESTIONS, BRAND_INFO } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  RotateCcw, 
  FileCheck,
  Copy,
  Check
} from 'lucide-react';

interface DiagnosticPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DiagnosticPage: React.FC<DiagnosticPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectOption = (score: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = score;
    setSelectedAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setCurrentStep(0);
    setShowResults(false);
  };

  // Calculate score and risk tier
  const totalScore = selectedAnswers.reduce((acc, curr) => acc + curr, 0);
  const maxPossibleScore = 16;
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);

  let riskTier = {
    level: 'Riesgo Moderado',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: <AlertTriangle className="w-10 h-10 text-amber-500" />,
    summary: 'Tu empresa cuenta con nociones básicas pero presenta brechas sustanciales de adecuación frente a la LOPDP.',
    actions: [
      'Levantar un inventario formal de bases de datos y Registro de Actividades de Tratamiento (RAT).',
      'Actualizar políticas de privacidad web y cláusulas laborales / proveedores.',
      'Evaluar la necesidad técnica de designar un Delegado de Protección de Datos (DPD) externo.',
    ],
  };

  if (totalScore >= 11) {
    riskTier = {
      level: 'Riesgo Crítico / Inminente',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: <ShieldAlert className="w-10 h-10 text-red-600" />,
      summary: 'Alta exposición a fiscalizaciones y contingencias sancionatorias por falta de instrumentos jurídicos obligatorios.',
      actions: [
        'Iniciar urgentemente una auditoría de brechas (Gap Analysis) en protección de datos.',
        'Suspender el uso de contratos o políticas genéricas sin sustento normativo ecuatoriano.',
        'Implementar protocolos obligatorios de notificación de incidentes de seguridad.',
        'Designar o contratar un Delegado de Protección de Datos (DPD) para blindar la operación.',
      ],
    };
  } else if (totalScore <= 5) {
    riskTier = {
      level: 'Riesgo Bajo / Nivel Inicial de Madurez',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
      summary: 'Tu organización ha implementado medidas previas o mantiene un bajo volumen de tratamiento.',
      actions: [
        'Auditar anualmente el mantenimiento del Registro de Actividades de Tratamiento.',
        'Capacitar periódicamente a nuevos colaboradores en cultura de protección de datos.',
        'Revisar contratos con nuevos proveedores tecnológicos antes de su firma.',
      ],
    };
  }

  const generateReportSummary = () => {
    return `*REPORTE DE DIAGNÓSTICO LOPDP - SMARTLEGALEC*\nNivel de Riesgo Identificado: ${riskTier.level}\nPuntaje: ${totalScore}/${maxPossibleScore} (${percentage}%)\n\nResumen:\n${riskTier.summary}\n\nRecomendaciones Principales:\n${riskTier.actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\nEvaluado en: ${window.location.origin}`;
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(generateReportSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppReportUrl = () => {
    const text = `Hola SmartLegalEC, realicé el Test de Cumplimiento LOPDP en su sitio web.\nResultado: ${riskTier.level} (${totalScore}/${maxPossibleScore} pts).\nMe gustaría recibir asesoría para implementar las recomendaciones de adecuación.`;
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
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
            <source srcSet="/header-servicios.avif" type="image/avif" />
            <source srcSet="/header-servicios.webp" type="image/webp" />
            <img
              src="/header-servicios.webp"
              alt="Test LOPDP - SmartLegalEC"
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
              Test de <span className="bg-gradient-to-r from-[#0A66FF] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">Cumplimiento LOPDP</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Evalúa en 4 pasos el estado actual de tu empresa frente a la <strong className="text-white font-semibold">Ley Orgánica de Protección de Datos Personales</strong> e identifica contingencias normativas y riesgos sancionatorios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIAGNOSTIC CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        {!showResults ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-md"
          >
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider font-heading">
                Pregunta {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}
              </span>
              <div className="flex items-center gap-1.5">
                {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? 'w-8 bg-[#0A66FF]'
                        : i < currentStep
                        ? 'w-3 bg-blue-300'
                        : 'w-3 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Question with Key Animation */}
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-snug mb-4 sm:mb-6 font-heading">
                {DIAGNOSTIC_QUESTIONS[currentStep].title}
              </h2>

              <div className="space-y-2.5 sm:space-y-3">
                {DIAGNOSTIC_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0A66FF] hover:bg-blue-50/40 transition-all flex items-start justify-between gap-3 sm:gap-4 group cursor-pointer"
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0A66FF] transition-colors block">
                        {opt.label}
                      </span>
                      {opt.riskNote && (
                        <span className="text-[11px] text-slate-600 mt-1 block">
                          Indicador: {opt.riskNote}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A66FF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Navigation back */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Pregunta anterior</span>
              </button>

              <span className="text-[11px] text-slate-600">
                100% Confidencial • Sin registro previo
              </span>
            </div>
          </motion.div>
        ) : (
          /* RESULTS VIEW */
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md"
          >
            {/* Header badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className={`p-4 rounded-2xl ${riskTier.bgColor} ${riskTier.borderColor} border shrink-0`}>
                  {riskTier.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block font-heading">
                    Resultado del Diagnóstico
                  </span>
                  <h2 className={`text-2xl font-extrabold ${riskTier.color} font-heading`}>
                    {riskTier.level}
                  </h2>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3.5 py-2 rounded-full cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar test</span>
              </button>
            </div>

            {/* Summary Text */}
            <div className="py-6">
              <h3 className="text-sm font-bold text-slate-900 mb-2 font-heading">
                Evaluación Ejecutiva:
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {riskTier.summary}
              </p>
            </div>

            {/* Action Items */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 font-heading">
                <FileCheck className="w-4 h-4 text-[#0A66FF]" />
                <span>Recomendaciones Prioritarias de Adecuación:</span>
              </h3>
              <ul className="space-y-3">
                {riskTier.actions.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 text-justify">
                    <CheckCircle2 className="w-4 h-4 text-[#0A66FF] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions: WhatsApp Direct & Copy Report in horizontal layout */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-100 w-full">
              <a
                href={getWhatsAppReportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all whitespace-nowrap text-center"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Enviar a WhatsApp</span>
              </a>

              <button
                onClick={handleCopyReport}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer whitespace-nowrap text-center"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
                <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-all cursor-pointer whitespace-nowrap text-center"
              >
                <span>Agendar Asesoría</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* INFORMATIONAL CONTEXT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-slate-600 leading-relaxed text-justify">
        <p>
          Este diagnóstico interactivo tiene fines puramente informativos y de orientación general. No constituye dictamen pericial ni asesoría jurídica vinculante. Para una auditoría legal pormenorizada de su organización, coordine una sesión formal con SmartLegalEC.
        </p>
        <p className="mt-2 text-slate-500 italic">
          🔒 Toda la información analizada y los reportes generados se encuentran bajo estricta reserva, amparados por el secreto profesional del abogado y las garantías de confidencialidad de la LOPDP en Ecuador.
        </p>
      </section>
    </div>
  );
};
