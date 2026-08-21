import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BRAND_INFO, FAQS, PRACTICE_AREAS } from '../data/content';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDiagnostic: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    area: 'lopdp',
    urgency: 'normal',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const areaObj = PRACTICE_AREAS.find(a => a.id === formData.area);
    const areaName = areaObj ? areaObj.name : 'Consulta General';
    const text = `*SOLICITUD DE ASESORÍA - SMARTLEGALEC*\nNombre: ${formData.name || 'No especificado'}\nEmpresa: ${formData.company || 'Particular'}\nEmail: ${formData.email || 'No especificado'}\nTeléfono: ${formData.phone || 'No especificado'}\nÁrea de Interés: ${areaName}\nUrgencia: ${formData.urgency}\n\nMensaje:\n${formData.message || 'Deseo coordinar una sesión de asesoría especializada.'}`;
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* 1. HEADER SECTION with Thematic Legal Background */}
      <section className="relative bg-[#071326] text-white pt-28 sm:pt-32 pb-14 lg:pb-16 border-b border-slate-800 overflow-hidden">
        {/* Background Image - Crystal Clear, High Definition & Vibrant */}
        <div className="absolute inset-0 z-0">
          <img
            src="/header-contacto.jpg"
            alt="Contacto y Consulta Jurídica - SmartLegalEC"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#132742] text-[#D4AF37] border border-slate-700 mb-3">
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>ATENCIÓN DIRECTA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-heading">
              Contacto & Coordinación
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Agenda una consulta jurídica confidencial con el Abg. Luis Fernando Guerra Padilla.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-1">
                    Formulario de Consulta
                  </h2>
                  <p className="text-xs text-slate-600 mb-4">
                    Completa tus datos para coordinar una reunión presencial o virtual.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Carlos Pérez"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Empresa / Organización
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. TechCorp S.A."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+593 99 866 8139"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Materia Jurídica
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] bg-white cursor-pointer"
                    >
                      <option value="lopdp">Protección de Datos / LOPDP</option>
                      <option value="tech">Contratos Tech / SaaS / Cloud</option>
                      <option value="telecom">Telecomunicaciones / ARCOTEL</option>
                      <option value="general">Otra materia especializada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nivel de Urgencia
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] bg-white cursor-pointer"
                    >
                      <option value="normal">Estándar (Respuesta en 24h)</option>
                      <option value="urgente">Urgente (Reunión prioritaria)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Resumen del Requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe brevemente el caso o consulta jurídica..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md transition-all cursor-pointer"
                  >
                    <span>Enviar Requerimiento</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inmediato</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Hemos recibido tu consulta. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white"
                  >
                    <span>Abrir en WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CONTACT INFO & CHANNELS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                Canales Directos
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">Teléfono Directo</span>
                    <a href={`tel:${BRAND_INFO.founderPhone}`} className="font-semibold text-slate-900 hover:text-[#0A66FF]">
                      {BRAND_INFO.founderPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">Correo Electrónico</span>
                    <a href={`mailto:${BRAND_INFO.founderEmail}`} className="font-semibold text-slate-900 hover:text-[#0A66FF]">
                      {BRAND_INFO.founderEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">Ubicación</span>
                    <p className="font-semibold text-slate-900">{BRAND_INFO.address}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Redes:</span>
                <div className="flex gap-2">
                  <a
                    href={BRAND_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC TRIGGER */}
            <div className="bg-[#071326] text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h4 className="text-sm font-bold text-white">
                ¿Prefieres realizar una autoevaluación primero?
              </h4>
              <p className="text-xs text-slate-300">
                Evalúa tu nivel de cumplimiento LOPDP en menos de 2 minutos.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer"
              >
                <span>Hacer Test LOPDP</span>
                <Sparkles className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
