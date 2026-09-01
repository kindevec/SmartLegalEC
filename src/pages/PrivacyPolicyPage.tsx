import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { BRAND_INFO } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  ShieldCheck, 
  Mail, 
  ArrowLeft, 
  ArrowUpRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const purposes = [
    {
      num: '01',
      title: 'Registro en el sitio web',
      text: 'Procesar y solicitar el registro en nuestra página web.',
    },
    {
      num: '02',
      title: 'Comunicaciones directas',
      text: 'Establecer comunicación para cualquier propósito relacionado con las finalidades que se establecen en la presente política, ya sea mediante llamadas, mensajes de texto, correos electrónicos.',
    },
    {
      num: '03',
      title: 'Gestión de pagos digitales',
      text: 'Realizar pagos a través de diferentes medios y con utilización de plataformas digitales.',
    },
    {
      num: '04',
      title: 'Oferta de servicios',
      text: 'Ofrecer productos o servicios.',
    },
    {
      num: '05',
      title: 'Estrategias comerciales',
      text: 'Diseñar o implementar estrategias comerciales.',
    },
    {
      num: '06',
      title: 'Estudios de mercado y satisfacción',
      text: 'Realizar estudios de mercado y encuestas de satisfacción.',
    },
    {
      num: '07',
      title: 'Cumplimiento normativo LOPDP',
      text: 'Cumplimiento de obligaciones legales conforme lo dispuesto en la Ley Orgánica de Protección de Datos Personales y demás regulación en la materia.',
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen pb-24 text-slate-900 selection:bg-[#0A66FF] selection:text-white">
      
      {/* 1. MINIMAL EDITORIAL HEADER */}
      <header className="w-full bg-[#071326] text-white pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A66FF]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-white mb-6 sm:mb-8 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la página principal</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#0A66FF]/15 text-[#93C5FD] border border-[#0A66FF]/30 font-heading">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>MARCO NORMATIVO • LOPDP ECUADOR</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Política de Privacidad
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify max-w-3xl font-normal pt-1">
              En <strong className="text-white font-semibold">SMARTLEGALEC</strong> estamos comprometidos con la transparencia, la seguridad y la estricta observancia del marco normativo ecuatoriano sobre Protección de Datos Personales (LOPDP). A continuación, te informamos de manera clara y detallada sobre el tratamiento de tus datos personales en este sitio web.
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. MAIN EDITORIAL ARTICLE CANVAS (Zero Box-in-Box) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12 sm:space-y-14">

        {/* 01. Solicitud de Datos Personales y Finalidades */}
        <section className="space-y-4">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">01.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Solicitud de Datos Personales y Finalidades del Tratamiento
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            <strong className="text-slate-900 font-bold">SMARTLEGALEC</strong> indica que, a través de su página web, solicita tus datos personales como: <strong className="text-slate-900 font-semibold">nombre, apellido, correo electrónico y número telefónico</strong>. La obtención y tratamiento de los datos personales tiene como finalidad el mantenimiento de la relación comercial, tareas de información y marketing propias de SMARTLEGALEC.
          </p>

          <div className="pt-3 space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading uppercase tracking-wide">
              En SMARTLEGALEC utilizaremos tus datos personales para las siguientes finalidades:
            </h3>

            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {purposes.map((p) => (
                <div key={p.num} className="py-3 flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0A66FF] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {p.num}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02. Conservación de los Datos */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">02.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Conservación de los Datos Personales
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o nos solicites su supresión y durante el plazo por el cuál pudieran derivarse responsabilidades legales.
          </p>
        </section>

        {/* 03. Medios de Pago */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">03.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Información sobre Medios de Pago
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            La información sobre tus medios de pago, como los datos de tu tarjeta de crédito no la pedimos de manera directa, si a través de nuestras plataformas de pago en línea, quienes tienen por ley, la obligatoriedad de mantener la confidencialidad de esta información.
          </p>
        </section>

        {/* 04. Comunicación a Terceros */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">04.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Comunicación y Transferencia a Terceros
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Tus datos personales no serán comunicados a terceros, salvo que, por obligación legal, por consentimiento expreso, en cumplimiento de una obligación legal o en el ejercicio del interés legítimo de SMARTLEGALEC.
          </p>
        </section>

        {/* 05. Ejercicio de Derechos ARCO */}
        <section className="space-y-4">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">05.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Ejercicio de Derechos de los Titulares (LOPDP)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Podrás en cualquier momento ejercer los derechos de <strong className="text-slate-900 font-bold">información, acceso, rectificación, oposición al tratamiento y eliminación</strong>, reconocidos en la Ley Orgánica de Protección de Datos Personales, a través de un requerimiento realizado a: <a href="mailto:info@smartlegalec.com" className="text-[#0A66FF] font-bold underline hover:text-[#0852cc]">info@smartlegalec.com</a>, y conforme los requerimientos y formas establecidos en la normativa de protección de datos personales.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="mailto:info@smartlegalec.com?subject=Solicitud%20de%20Ejercicio%20de%20Derechos%20LOPDP%20-%20SMARTLEGALEC"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0B1D3A] hover:bg-slate-900 text-white transition-colors cursor-pointer shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Enviar requerimiento por correo</span>
            </a>
          </div>
        </section>

        {/* 06. Registro en nuestra página web */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">06.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Registro en nuestra Página Web
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Al momento de inscripción en este sitio web de SMARTLEGALEC declaras que conoces y autorizas de manera libre, previa, voluntaria, expresa y debidamente informada para recolectar, registrar, procesar, archivar, compilar, analizar, utilizar, transferir, organizar, actualizar y disponer tus datos personales, para los fines propios e inherentes a la prestación del servicio y venta de servicios de SMARTLEGALEC.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Tienes derecho a acceder, rectificar, oponerte al tratamiento y eliminar tus datos personales proporcionados en el registro, así como a cancelar la cuenta registrada.
          </p>
        </section>

        {/* 07. Medidas de Seguridad */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">07.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Medidas de Seguridad
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            SMARTLEGALEC adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales conforme a lo dispuesto en el marco normativo ecuatoriano sobre protección de tus datos personales.
          </p>
        </section>

        {/* 08. Enlaces con otros sitios web */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">08.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Enlaces con Otros Sitios Web
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            El sitio web puede contener enlaces a otros sitios. Este tipo de enlaces con terceros, no significa que SMARTLEGALEC lo respalda por cuanto no se tiene control sobre estos sitios.
          </p>
        </section>

        {/* 09. Consentimiento */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">09.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Consentimiento
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Al proporcionar datos personales a SMARTLEGALEC mediante este sitio web y su registro, otorgas tu consentimiento para el tratamiento, recolección, utilización y almacenamiento de tus datos, conforme las finalidades antes indicadas.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            En caso que no autorices el uso de tus datos personales, SMARTLEGALEC no podrá cumplir con las finalidades del tratamiento descritas previamente.
          </p>
        </section>

        {/* 10. Vulneración a la seguridad de datos personales */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2.5 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-[#0A66FF]">10.</span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
              Vulneración a la Seguridad de Datos Personales
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            En caso que llegare a existir un evento de vulneración a la seguridad de datos personales, SMARTLEGALEC, notificará a la autoridad y titulares, conforme lo descrito en la normativa en la materia.
          </p>
        </section>

        {/* 11. Minimal Footer Strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Última actualización conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="font-bold text-[#0A66FF] hover:underline cursor-pointer"
            >
              Contacto Directo
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent('Hola SmartLegalEC, tengo una consulta sobre su Política de Privacidad.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:underline"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};
