import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, BRAND_INFO } from '../data/content';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, RotateCcw, MessageSquare } from 'lucide-react';

interface ComplianceDiagnosticProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplianceDiagnostic: React.FC<ComplianceDiagnosticProps> = ({ isOpen, onClose }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, score: number) => {
    const updated = { ...answers, [questionId]: score };
    setAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const calculateTotalRisk = (): number => {
    const scores = Object.values(answers) as number[];
    const sum = scores.reduce((a: number, b: number) => a + b, 0);
    return sum;
  };

  const getRiskLevel = (score: number) => {
    if (score >= 11) {
      return {
        level: 'Riesgo Alto / Adecuación Prioritaria',
        color: 'text-rose-600 bg-rose-50 border-rose-200',
        badge: 'Acción Urgente Requerida',
        desc: 'Tu organización presenta exposición crítica ante la Ley Orgánica de Protección de Datos Personales (LOPDP) o contingencias contractuales por falta de instrumentos formales.',
      };
    } else if (score >= 6) {
      return {
        level: 'Riesgo Moderado / Ajuste Necesario',
        color: 'text-amber-600 bg-amber-50 border-amber-200',
        badge: 'Optimización Recomendada',
        desc: 'Cuentas con algunas bases operativas, pero existen brechas en contratos de terceros, privacidad desde el diseño o cumplimiento con autoridades de control.',
      };
    } else {
      return {
        level: 'Nivel Preventivo / Auditoría Periódica',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        badge: 'Mantenimiento Preventivo',
        desc: 'Tu enfoque es positivo, aunque se recomienda una auditoría periódica y supervisión de DPD para evitar desactualizaciones normativas.',
      };
    }
  };

  const totalScore = calculateTotalRisk();
  const result = getRiskLevel(totalScore);

  const resetDiagnostic = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  const getWhatsAppDiagnosticUrl = () => {
    const message = `Hola Abg. Luis Fernando Guerra (SmartLegalEC), completé el Test LOPDP/Tech con resultado: ${result.level} (Score: ${totalScore}/16). Me gustaría agendar un diagnóstico preliminar para mi empresa.`;
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#E6F0FF] text-[#0A66FF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#0B1D3A]">
                Diagnóstico Rápido LOPDP & Tech
              </h3>
              <p className="text-xs text-slate-500">
                Evaluación de riesgos normativos para empresas en Ecuador
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {!completed ? (
          <div>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-slate-500 font-medium mb-1.5">
                <span>Pregunta {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep) / DIAGNOSTIC_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#0A66FF] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="mb-8">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#0B1D3A] mb-5">
                {currentQ.title}
              </h4>

              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, option.score)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#0A66FF] hover:bg-[#E6F0FF]/30 transition-all flex items-start justify-between gap-3 group cursor-pointer"
                  >
                    <span className="text-sm text-slate-800 font-medium group-hover:text-[#0A66FF]">
                      {option.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0A66FF] shrink-0 mt-0.5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>* Datos confidenciales y estrictamente informativos</span>
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-slate-500 hover:text-slate-800 font-medium"
                >
                  ← Pregunta anterior
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Result Summary */
          <div className="space-y-6 animate-in fade-in">
            <div className={`p-5 rounded-xl border ${result.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {result.badge}
                </span>
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">
                {result.level}
              </h4>
              <p className="text-sm leading-relaxed opacity-90">
                {result.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-semibold text-slate-800">
                Recomendaciones inmediatas de SmartLegalEC:
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>Levantamiento de inventario y Registro de Actividades de Tratamiento (RAT).</li>
                <li>Auditoría de contratos de encargo con proveedores cloud y software SaaS.</li>
                <li>Designación o contratación de DPD Externo para canalizar requerimientos de la autoridad.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getWhatsAppDiagnosticUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#0A66FF] hover:bg-[#0852cc] text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar resultado a Abg. Luis Guerra</span>
              </a>

              <button
                onClick={resetDiagnostic}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-medium text-slate-500 hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
