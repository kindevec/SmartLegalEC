import React, { useState } from 'react';
import { BRAND_INFO, FAQS } from '../data/content';
import { sanitizeInput, isValidEmail } from '../utils/security';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { InstagramIcon } from './InstagramIcon';
import { TikTokIcon } from './TikTokIcon';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Phone, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  onOpenDiagnostic: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDiagnostic }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceArea: 'lopdp',
    message: '',
    _hp_trap: '', // Honeypot anti-spam
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData._hp_trap) {
      console.warn('Bot submission blocked.');
      return;
    }

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (sanitizedEmail && !isValidEmail(sanitizedEmail)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setErrorMessage('');
    setFormData({
      ...formData,
      name: sanitizedName,
      email: sanitizedEmail,
      company: sanitizedCompany,
      message: sanitizedMessage,
    });
    setSubmitted(true);
  };

  const getCustomWhatsAppUrl = () => {
    const areaLabels: Record<string, string> = {
      lopdp: 'Protección de Datos y Privacidad',
      tech: 'Tecnología y Negocios Digitales',
      telecom: 'Telecomunicaciones y Regulación',
      other: 'Otra consulta especializada',
    };

    const text = `Hola Abg. Luis Fernando Guerra (SmartLegalEC),
Mi nombre es: ${formData.name || 'Cliente'}
Empresa: ${formData.company || 'No especificada'}
Correo: ${formData.email || 'No especificado'}
Área de interés: ${areaLabels[formData.serviceArea] || 'Consulta general'}
Mensaje: ${formData.message || 'Deseo coordinar una reunión de asesoría jurídica.'}`;

    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="bg-[#0B1D3A] text-white py-20 lg:py-28 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-[#93C5FD] border border-slate-700 mb-3">
            Atención Inmediata
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Conversemos sobre tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Coordinamos consultas presenciales en Quito, Ecuador o virtuales a nivel nacional e internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Direct Consultation Channels & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F284E] border border-slate-700/80 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#25D366] text-white">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Canal Directo por WhatsApp
                  </h3>
                  <p className="text-xs text-slate-400">
                    Respuesta rápida y coordinación ejecutiva
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Escríbenos directamente para agendar una sesión inicial o presentar un requerimiento específico con el Abg. Luis Fernando Guerra Padilla.
              </p>

              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hola SmartLegalEC, me gustaría agendar una reunión para presentarle un requerimiento legal de mi empresa en Ecuador.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-direct"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>INICIAR CHAT EN WHATSAPP</span>
              </a>
            </div>

            {/* Interactive Diagnostic Quick Teaser */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#0A66FF]/20 text-[#0A66FF] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white mb-1">
                    ¿No estás seguro de tu nivel de riesgo?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Realiza nuestro diagnóstico interactivo LOPDP & Tech en menos de 2 minutos.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Hacer test de evaluación</span>
                <span>→</span>
              </button>
            </div>

            {/* Direct Contact Points */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#0A66FF] shrink-0" />
                <span>info@smartlegalec.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0A66FF] shrink-0" />
                <span>Quito, Ecuador • Cobertura Nacional e Internacional</span>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-400 font-medium">Síguenos:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={BRAND_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#0A66FF] hover:text-white text-slate-300 transition-all border border-slate-700/60"
                    aria-label="LinkedIn oficial"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#0A66FF] hover:text-white text-slate-300 transition-all border border-slate-700/60"
                    aria-label="Instagram oficial"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BRAND_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-black hover:text-white text-slate-300 transition-all border border-slate-700/60"
                    aria-label="TikTok oficial"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola SmartLegalEC, me gustaría solicitar una consulta jurídica.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#25D366] hover:text-white text-slate-300 transition-all border border-slate-700/60"
                    aria-label="WhatsApp oficial"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
              Formulario de Diagnóstico y Consulta
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Completa los datos para preparar una propuesta o revisión preliminar adaptada a tu organización.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Anti-Spam Honeypot Field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="_hp_trap"
                    value={formData._hp_trap}
                    onChange={(e) => setFormData({ ...formData, _hp_trap: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ing. Carlos Mendoza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-1 py-2 sm:py-2.5 bg-transparent border-0 border-b-2 border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Correo corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@tuempresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-1 py-2 sm:py-2.5 bg-transparent border-0 border-b-2 border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Empresa u Organización *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-1 py-2 sm:py-2.5 bg-transparent border-0 border-b-2 border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Área de especialización requerida
                    </label>
                    <select
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 bg-slate-950/80 hover:bg-slate-950 border border-slate-700/90 hover:border-slate-600 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] focus:ring-2 focus:ring-[#0A66FF]/20 transition-all shadow-xs cursor-pointer"
                    >
                      <option value="lopdp" className="bg-slate-900 text-white">Protección de Datos y Privacidad</option>
                      <option value="tech" className="bg-slate-900 text-white">Tecnología y Negocios Digitales</option>
                      <option value="telecom" className="bg-slate-900 text-white">Telecomunicaciones y Regulación</option>
                      <option value="other" className="bg-slate-900 text-white">Diagnóstico integral / Otra consulta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Descripción del caso o proyecto
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos brevemente sobre tu proyecto, número aproximado de colaboradores, o situación ante la normativa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-1 py-2 sm:py-2.5 bg-transparent border-0 border-b-2 border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#0A66FF] transition-colors rounded-none resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0A66FF] hover:bg-[#0852cc] text-white shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR SOLICITUD DE ASESORÍA</span>
                  </button>

                  <a
                    href={getCustomWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Enviar por WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center sm:text-left leading-relaxed">
                  🔒 Toda la información provista a través de este portal está amparada bajo el secreto profesional de la abogacía y será tratada con absoluta confidencialidad, bajo riguroso apego a la LOPDP ecuatoriana y al Código Orgánico de la Función Judicial.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#0A66FF]/20 text-[#0A66FF] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-xl text-white">
                  ¡Mensaje preparado con éxito!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Gracias {formData.name}. Tu solicitud para <strong className="text-white">{formData.company}</strong> está lista. Para agilizar la respuesta directa con el Abg. Luis Fernando Guerra, puedes enviarla instantáneamente por WhatsApp:
                </p>
                <div className="pt-2">
                  <a
                    href={getCustomWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>ABRIR EN WHATSAPP CON DATOS PRECARGADOS</span>
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-slate-500 hover:text-slate-300 underline pt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Legal FAQs Section */}
        <div className="pt-10 border-t border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-2">
              <HelpCircle className="w-4 h-4 text-[#0A66FF]" />
              <span>Preguntas Frecuentes</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Criterios Jurídicos y Dudas Habituales
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800"
              >
                <h4 className="font-heading font-semibold text-base text-white mb-2 flex items-start gap-2">
                  <span className="text-[#0A66FF] font-mono text-sm font-bold">0{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
