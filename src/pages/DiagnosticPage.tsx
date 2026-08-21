import React, { useState } from 'react';
import { PageRoute } from '../types';
import { DIAGNOSTIC_QUESTIONS, BRAND_INFO } from '../data/content';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  RotateCcw, 
  MessageSquare,
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
      {/* HEADER SECTION */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80"
            alt="Test LOPDP"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#132742] text-[#D4AF37] border border-slate-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>HERRAMIENTA INTERACTIVA GRATUITA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 font-heading">
              Test de Cumplimiento LOPDP
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Evalúa en 4 pasos el estado actual de tu empresa frente a la Ley Orgánica de Protección de Datos Personales en Ecuador e identifica contingencias normativas.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {!showResults ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider">
                Pregunta {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}
              </span>
              <div className="flex items-center gap-1.5">
                {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
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

            {/* Current Question */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-6">
                {DIAGNOSTIC_QUESTIONS[currentStep].title}
              </h2>

              <div className="space-y-3">
                {DIAGNOSTIC_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-[#0A66FF] hover:bg-blue-50/40 transition-all flex items-start justify-between gap-4 group cursor-pointer"
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
                  </button>
                ))}
              </div>
            </div>

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
          </div>
        ) : (
          /* RESULTS VIEW */
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
            {/* Header badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className={`p-4 rounded-2xl ${riskTier.bgColor} ${riskTier.borderColor} border`}>
                  {riskTier.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Resultado del Diagnóstico
                  </span>
                  <h2 className={`text-2xl font-extrabold ${riskTier.color}`}>
                    {riskTier.level}
                  </h2>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3.5 py-2 rounded-lg cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar test</span>
              </button>
            </div>

            {/* Summary Text */}
            <div className="py-6">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Evaluación Ejecutiva:
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {riskTier.summary}
              </p>
            </div>

            {/* Action Items */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#0A66FF]" />
                <span>Recomendaciones Prioritarias de Adecuación:</span>
              </h3>
              <ul className="space-y-3">
                {riskTier.actions.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0A66FF] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions: WhatsApp Direct & Copy Report */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppReportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar resultado a WhatsApp</span>
              </a>

              <button
                onClick={handleCopyReport}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar reporte'}</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-all cursor-pointer"
              >
                <span>Agendar Asesoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* INFORMATIONAL CONTEXT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-slate-600 leading-relaxed">
        <p>
          Este diagnóstico interactivo tiene fines puramente informativos y de orientación general. No constituye dictamen pericial ni asesoría jurídica vinculante. Para una auditoría legal pormenorizada de su organización, coordine una sesión formal con SmartLegalEC.
        </p>
      </section>
    </div>
  );
};
