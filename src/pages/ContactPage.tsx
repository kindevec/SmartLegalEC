import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { BRAND_INFO, FAQS, PRACTICE_AREAS } from '../data/content';
import { sanitizeInput, isValidEmail, isValidPhone } from '../utils/security';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { InstagramIcon } from '../components/InstagramIcon';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  Clock,
  Lock
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
    _hp_trap: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp_trap) {
      console.warn('Bot submission blocked.');
      return;
    }

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setErrorMessage('Por favor completa todos los campos requeridos (*).');
      return;
    }

    if (!isValidEmail(sanitizedEmail)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (sanitizedPhone && !isValidPhone(sanitizedPhone)) {
      setErrorMessage('Por favor ingresa un número telefónico válido.');
      return;
    }

    setErrorMessage('');
    setFormData({
      ...formData,
      name: sanitizedName,
      company: sanitizedCompany,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
    });
    setSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const areaObj = PRACTICE_AREAS.find(a => a.id === formData.area);
    const areaName = areaObj ? areaObj.name : 'Consulta General';
    const text = `*SOLICITUD DE ASESORÍA - SMARTLEGALEC*\nNombre: ${formData.name || 'No especificado'}\nEmpresa: ${formData.company || 'Particular'}\nEmail: ${formData.email || 'No especificado'}\nTeléfono: ${formData.phone || 'No especificado'}\nÁrea de Interés: ${areaName}\nUrgencia: ${formData.urgency}\n\nMensaje:\n${formData.message || 'Deseo coordinar una sesión de asesoría especializada.'}`;
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
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
            <source srcSet="/header-contacto.avif" type="image/avif" />
            <source srcSet="/header-contacto.webp" type="image/webp" />
            <img
              src="/header-contacto.jpg"
              alt="Contacto y Consulta Jurídica - SmartLegalEC"
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
              Contacto & <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E8C8] to-[#D4AF37] bg-clip-text text-transparent">Coordinación Legal</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal text-justify">
              Agenda una <strong className="text-white font-semibold">consulta jurídica confidencial</strong> directamente con el <strong className="text-white font-semibold">Abg. Luis Fernando Guerra Padilla</strong> para estructurar una estrategia a la medida de tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CANVAS LAYOUT (Zero Box-in-Box, Anchored to Canvas) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 lg:pt-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full">
          
          {/* LEFT COLUMN: FORMULARIO DIRECTO EN EL LIENZO (7 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 w-full"
          >
            <div>
              <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block mb-1 font-heading">
                01. FORMULARIO DE CONSULTA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-2">
                Escríbenos sobre tu Caso o Proyecto
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Completa los datos de tu empresa y el requerimiento legal. Te responderemos en menos de 24 horas hábiles con una propuesta técnica o para coordinar una reunión inicial confidencial.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1 w-full">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot anti-spam trap */}
                <input
                  type="text"
                  name="_hp_trap"
                  value={formData._hp_trap}
                  onChange={(e) => setFormData({ ...formData, _hp_trap: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Row 1: Nombre & Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Carlos Pérez"
                      className="w-full px-1 py-2.5 sm:py-3 bg-transparent border-0 border-b-2 border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                      Empresa / Organización
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. TechCorp S.A."
                      className="w-full px-1 py-2.5 sm:py-3 bg-transparent border-0 border-b-2 border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Row 2: Correo & Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full px-1 py-2.5 sm:py-3 bg-transparent border-0 border-b-2 border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+593 99 866 8139"
                      className="w-full px-1 py-2.5 sm:py-3 bg-transparent border-0 border-b-2 border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Row 3: Materia & Urgencia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Materia Jurídica
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-2 focus:ring-[#0A66FF]/15 transition-all shadow-xs cursor-pointer"
                    >
                      <option value="lopdp">Protección de Datos / LOPDP Ecuador</option>
                      <option value="tech">Contratos Tecnológicos / SaaS / Cloud</option>
                      <option value="telecom">Telecomunicaciones / Regulación ARCOTEL</option>
                      <option value="dpd">Delegado DPD Externo / Compliance IA</option>
                      <option value="general">Otra asesoría jurídica especializada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Nivel de Urgencia
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-2 focus:ring-[#0A66FF]/15 transition-all shadow-xs cursor-pointer"
                    >
                      <option value="normal">Estándar (Respuesta en 24h hábiles)</option>
                      <option value="urgente">Urgente (Reunión y propuesta prioritaria)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Mensaje */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Resumen del Requerimiento *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe brevemente los antecedentes de tu consulta o el objetivo de tu proyecto..."
                    className="w-full px-1 py-2.5 sm:py-3 bg-transparent border-0 border-b-2 border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none resize-y"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full text-xs sm:text-sm font-bold bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-md transition-all cursor-pointer text-center"
                  >
                    <span>Enviar Requerimiento</span>
                    <Send className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md text-center"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp Inmediato</span>
                  </a>
                </div>

                {/* Confidentiality & Legal Seal */}
                <div className="pt-3 flex items-start gap-2 text-slate-500 text-[11px] leading-relaxed text-justify">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Toda la información remitida está amparada bajo <strong className="text-slate-700 font-semibold">estricto secreto profesional y confidencialidad</strong> de conformidad con el COGEP y la LOPDP. No compartimos datos con terceros.
                  </span>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4 border-y border-slate-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  ¡Requerimiento Enviado con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed text-justify">
                  Hemos recibido tu solicitud. El Abg. Luis Fernando Guerra Padilla revisará los antecedentes y se pondrá en contacto contigo en menos de 24 horas.
                </p>
                <div className="pt-3 flex flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Abrir en WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* RIGHT COLUMN: CANALES DIRECTOS & RESPALDO (5 COLS - Canvas-Anchored Linear Dividers) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 w-full"
          >
            <div>
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-1 font-heading">
                02. CANALES DIRECTOS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-2">
                Despacho & Contacto
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Atención directa personalizada por el titular del despacho sin intermediarios:
              </p>
            </div>

            {/* Direct Channels Strip (Canvas Linear Divider) */}
            <div className="divide-y divide-slate-200 border-y border-slate-200 py-1 w-full">
              {/* Teléfono */}
              <div className="py-3.5 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#0A66FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-heading">
                    Teléfono & WhatsApp Directo
                  </span>
                  <a 
                    href={`tel:${BRAND_INFO.founderPhone}`} 
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0A66FF] transition-colors block leading-snug"
                  >
                    {BRAND_INFO.founderPhone}
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Lunes a Viernes: 08:30 — 18:00 (GMT-5)
                  </span>
                </div>
              </div>

              {/* Correo */}
              <div className="py-3.5 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-heading">
                    Correo Electrónico Oficial
                  </span>
                  <a 
                    href={`mailto:${BRAND_INFO.founderEmail}`} 
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0A66FF] transition-colors block leading-snug break-all"
                  >
                    {BRAND_INFO.founderEmail}
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Revisión de antecedentes en menos de 24 horas
                  </span>
                </div>
              </div>

              {/* Ubicación */}
              <div className="py-3.5 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-heading">
                    Ubicación & Cobertura
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {BRAND_INFO.address}
                  </p>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Sesiones presenciales en Quito y virtuales a nivel nacional e internacional
                  </span>
                </div>
              </div>

              {/* Redes y Canales Digitales */}
              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-700">
                  Redes Profesionales & Canales:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {/* LinkedIn */}
                  <a
                    href={BRAND_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#0A66C2] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0A66C2] text-xs font-semibold transition-all duration-200 shadow-2xs group"
                    aria-label="Perfil oficial de LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-slate-800 hover:text-white border border-slate-200 hover:border-transparent text-xs font-semibold transition-all duration-200 shadow-2xs group"
                    aria-label="Perfil oficial de Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors shrink-0" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC TRIGGER - Integrated Sleek Canvas Banner */}
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#071326] via-[#0B1D3A] to-[#132742] text-white p-5 sm:p-6 border border-slate-800 shadow-md space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-[#D4AF37]" />
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider font-heading">
                  Herramienta Gratuita
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading leading-tight">
                ¿Prefieres realizar una autoevaluación primero?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed text-justify">
                Evalúa el nivel de cumplimiento LOPDP y madurez regulatoria de tu organización en menos de 2 minutos.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-sm"
              >
                <span>Hacer Test Diagnóstico LOPDP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3. CANVAS FAQ SECTION (Linear Divider Layout) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-slate-200 w-full"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block mb-1 font-heading">
              03. PREGUNTAS FRECUENTES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-2">
              Dudas Comunes sobre Nuestra Asesoría
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Respuestas directas a las inquietudes más frecuentes sobre la contratación de servicios jurídicos, confidencialidad y alcance de adecuaciones:
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 w-full">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0A66FF] transition-colors font-heading">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2.5 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>
      </main>
    </div>
  );
};
