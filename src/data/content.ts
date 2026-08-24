import { PracticeArea, Pillar, Metric, AboutQuadrant, CorporateValue, DiagnosticQuestion, LegalArticle } from '../types';

export const BRAND_INFO = {
  name: 'SMARTLEGALEC',
  slogan: 'Tecnología • Protección de Datos • Telecomunicaciones',
  domain: 'smartlegalec.com',
  location: 'Quito, Ecuador',
  founder: 'Abg. Luis Fernando Guerra Padilla',
  founderTitle: 'Managing Partner | Abogado Especialista en Protección de Datos, Tecnología y Telecomunicaciones',
  founderEmail: 'info@smartlegalec.com',
  email: 'info@smartlegalec.com',
  founderPhone: '+593 99 866 8139',
  address: 'Quito, Ecuador',
  schedule: 'Lunes a Viernes: 08:30 - 18:00 (Presencial & Virtual)',
  whatsappNumber: '593998668139',
  whatsappUrl: 'https://wa.me/593998668139',
  linkedinUrl: 'https://www.linkedin.com/company/99569327',
  instagramUrl: 'https://www.instagram.com/smartlegal_ec?igshid=YTQwZjQ0NmI0OA%3D%3D',
  tiktokUrl: 'https://www.tiktok.com/@smartlegal_ec',
};

export const HERO_PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Soluciones legales estratégicas y prácticas',
    description: 'Enfoque pragmático orientado a resolver contingencias reales sin obstaculizar la operativa comercial.',
  },
  {
    number: '02',
    title: 'Conocimiento jurídico y visión tecnológica',
    description: 'Entendemos el código, la arquitectura cloud y los modelos de negocio digitales tanto como la normativa vigente.',
  },
  {
    number: '03',
    title: 'Enfoque en riesgos, cumplimiento y negocio',
    description: 'Alineamos el marco regulatorio ecuatoriano e internacional con la rentabilidad y escalabilidad de tu empresa.',
  },
];

export const METRICS: Metric[] = [
  {
    value: '10+',
    label: 'Años de experiencia',
    detail: 'Asesorando empresas nacionales y multinacionales en el sector digital.',
  },
  {
    value: '50+',
    label: 'Organizaciones y proyectos',
    detail: 'Acompañados con éxito en adecuación LOPDP, contratos tech y telecomunicaciones.',
  },
  {
    value: '12+',
    label: 'Industrias y sectores',
    detail: 'Fintech, SaaS, telecomunicaciones, salud, retail, banca y educación.',
  },
  {
    value: '100%',
    label: 'Compromiso y personalización',
    detail: 'Atención directa por especialistas de alto nivel sin intermediarios.',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'lopdp',
    name: 'Protección de Datos y Privacidad',
    badge: 'Protección de Datos y Privacidad',
    tagline: 'Protección de datos más allá del cumplimiento',
    description:
      'La protección de datos personales se ha convertido en una obligación transversal para las organizaciones. No se trata únicamente de contar con políticas o documentos, sino de identificar cómo se utilizan los datos, gestionar los riesgos asociados y establecer medidas que funcionen en la operación diaria.\n\nEn SmartLegalEC asesoramos a empresas y organizaciones en el cumplimiento de la Ley Orgánica de Protección de Datos Personales y su normativa relacionada, mediante soluciones adaptadas a su actividad, tamaño, nivel de riesgo y realidad operativa.',
    iconName: 'ShieldCheck',
    closingText:
      '¿Necesitas evaluar el cumplimiento de tu organización? Podemos revisar tu situación actual, identificar los principales riesgos y definir las acciones necesarias.',
    ctaText: 'Evaluar mi cumplimiento LOPDP',
    whatsappMessage: 'Hola SmartLegalEC, me interesa una asesoría sobre Protección de Datos y Privacidad en Ecuador.',
    regulations: [
      'Ley Orgánica de Protección de Datos Personales (LOPDP)',
      'Reglamento General a la Ley Orgánica de Protección de Datos Personales',
      'Resoluciones y Guías de la Autoridad de Protección de Datos Personales',
      'Estándares internacionales de privacidad y seguridad de la información',
    ],
    targetAudience: [
      'Empresas y organizaciones con tratamiento de datos de clientes, colaboradores o proveedores',
      'Instituciones financieras, Fintechs, aseguradoras y entidades corporativas',
      'Clínicas, centros de salud y entidades con tratamiento de datos sensibles',
      'Plataformas digitales, comercio electrónico y servicios en línea',
      'Instituciones educativas y entidades con tratamiento de datos de menores',
    ],
    services: [
      {
        id: 'lopdp-1',
        category: 'lopdp',
        tag: 'Adecuación LOPDP',
        title: 'Implementación y adecuación a la LOPDP',
        shortDesc: 'Evaluamos el nivel de cumplimiento de la organización, identificamos brechas y desarrollamos las medidas jurídicas y organizativas necesarias.',
        fullDesc:
          'Evaluamos el nivel de cumplimiento de la organización, identificamos brechas y desarrollamos las medidas jurídicas y organizativas necesarias para adecuar sus procesos.',
      },
      {
        id: 'lopdp-2',
        category: 'lopdp',
        tag: 'DPD',
        title: 'Delegado de protección de datos personales',
        shortDesc: 'Prestamos el servicio de DPD externo, brindando asesoramiento, supervisión y acompañamiento independiente.',
        fullDesc:
          'Prestamos el servicio de delegado de protección de datos personales (DPD) externo para organizaciones que requieren o deciden contar con esta figura, brindando asesoramiento, supervisión y acompañamiento independiente en materia de protección de datos.',
      },
      {
        id: 'lopdp-3',
        category: 'lopdp',
        tag: 'Auditorías',
        title: 'Auditorías y evaluaciones de cumplimiento',
        shortDesc: 'Revisamos procesos, documentos y prácticas para identificar incumplimientos, riesgos y oportunidades de mejora.',
        fullDesc:
          'Revisamos procesos, documentos y prácticas para identificar incumplimientos, riesgos y oportunidades de mejora.',
      },
      {
        id: 'lopdp-4',
        category: 'lopdp',
        tag: 'Riesgos & EIPD',
        title: 'Gestión de riesgos y evaluaciones de impacto',
        shortDesc: 'Identificamos y evaluamos riesgos derivados del tratamiento y desarrollamos evaluaciones de impacto.',
        fullDesc:
          'Identificamos y evaluamos los riesgos derivados del tratamiento de datos personales y desarrollamos evaluaciones de impacto cuando la naturaleza del tratamiento lo requiere.',
      },
      {
        id: 'lopdp-5',
        category: 'lopdp',
        tag: 'Contratos Terceros',
        title: 'Contratos y relaciones con terceros',
        shortDesc: 'Elaboramos y revisamos contratos de encargo, transferencia y corresponsabilidad.',
        fullDesc:
          'Elaboramos y revisamos contratos de encargo, transferencia, corresponsabilidad y otras relaciones jurídicas que involucren tratamiento o intercambio de datos personales.',
      },
      {
        id: 'lopdp-6',
        category: 'lopdp',
        tag: 'Nuevas Tecnologías',
        title: 'Privacidad en proyectos y nuevas tecnologías',
        shortDesc: 'Asesoramos en la incorporación de protección de datos desde el diseño en apps, IA, biometría y videovigilancia.',
        fullDesc:
          'Asesoramos en la incorporación de protección de datos desde el diseño en aplicaciones, plataformas, inteligencia artificial, biometría, videovigilancia y otros proyectos tecnológicos.',
      },
      {
        id: 'lopdp-7',
        category: 'lopdp',
        tag: 'Incidentes',
        title: 'Gestión de incidentes y vulneraciones',
        shortDesc: 'Acompañamos la evaluación jurídica de incidentes de seguridad y determinación de acciones y notificaciones.',
        fullDesc:
          'Acompañamos la evaluación jurídica de incidentes de seguridad y la determinación de las acciones y notificaciones que correspondan.',
      },
      {
        id: 'lopdp-8',
        category: 'lopdp',
        tag: 'Políticas & Procesos',
        title: 'Políticas, procedimientos y documentación',
        shortDesc: 'Desarrollamos instrumentos jurídicos y organizativos para integrar la protección de datos a los procesos.',
        fullDesc:
          'Desarrollamos instrumentos jurídicos y organizativos que permitan integrar la protección de datos a los procesos de la organización.',
      },
      {
        id: 'lopdp-9',
        category: 'lopdp',
        tag: 'Capacitación',
        title: 'Capacitación',
        shortDesc: 'Capacitaciones generales o especializadas para directivos, jurídicos, comerciales, TI y talento humano.',
        fullDesc:
          'Diseñamos capacitaciones generales o especializadas para equipos directivos, jurídicos, comerciales, tecnológicos, talento humano y demás áreas que intervienen en el tratamiento de información.',
      },
    ],
  },
  {
    id: 'tech',
    name: 'Tecnología y Negocios Digitales',
    badge: 'Tecnología y Negocios Digitales',
    tagline: 'Contratos y asesoría jurídica para negocios que dependen de la tecnología',
    description:
      'La tecnología transforma la manera en que las empresas contratan, prestan servicios, gestionan información y desarrollan nuevos modelos de negocio. Esa transformación también genera riesgos jurídicos que deben gestionarse desde el inicio.\n\nEn SmartLegalEC asesoramos a empresas, proveedores tecnológicos y organizaciones que contratan tecnología, procurando que sus relaciones jurídicas reflejen adecuadamente la realidad técnica, comercial y operativa de cada proyecto.',
    iconName: 'Code2',
    closingText:
      'La tecnología cambia. Tus contratos también deberían hacerlo. Si estás desarrollando, contratando o implementando una solución tecnológica, podemos ayudarte a estructurar jurídicamente el proyecto desde el inicio.',
    ctaText: 'Estructurar contratos tecnológicos',
    whatsappMessage: 'Hola SmartLegalEC, requiero asesoría legal para un proyecto de Tecnología y Negocios Digitales.',
    regulations: [
      'Código Orgánico de la Economía Social de los Conocimientos (Propiedad Intelectual y Software)',
      'Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos',
      'Ley Orgánica de Defensa del Consumidor (Comercio Digital)',
      'Estándares contractuales y buenas prácticas internacionales en software y servicios Cloud',
    ],
    targetAudience: [
      'Empresas de desarrollo de software, Software as a Service (SaaS) y plataformas digitales',
      'Organizaciones en procesos de transformación digital y contratación de servicios Cloud',
      'Fintechs, pasarelas de pago y negocios digitales',
      'Startups tecnológicas en proceso de estructuración contractual y de propiedad intelectual',
      'Proveedores de infraestructura tecnológica, servicios TI y outsourcing',
    ],
    services: [
      {
        id: 'tech-1',
        category: 'tech',
        tag: 'Software & SaaS',
        title: 'Contratos de software y SaaS',
        shortDesc: 'Elaboramos, revisamos y negociamos contratos de licenciamiento, suscripción, implementación y soporte.',
        fullDesc:
          'Elaboramos, revisamos y negociamos contratos de licenciamiento, suscripción, implementación, soporte, mantenimiento y prestación de servicios tecnológicos.',
      },
      {
        id: 'tech-2',
        category: 'tech',
        tag: 'Desarrollo Software',
        title: 'Desarrollo e implementación de software',
        shortDesc: 'Definimos jurídicamente aspectos de alcance, entregables, niveles de servicio, propiedad intelectual y garantías.',
        fullDesc:
          'Definimos jurídicamente aspectos relacionados con alcance, entregables, niveles de servicio, propiedad intelectual, aceptación, responsabilidades, garantías y terminación.',
      },
      {
        id: 'tech-3',
        category: 'tech',
        tag: 'Cloud Computing',
        title: 'Cloud computing y servicios tecnológicos',
        shortDesc: 'Asesoramos en la contratación de infraestructura, plataformas y servicios en la nube.',
        fullDesc:
          'Asesoramos en la contratación de infraestructura, plataformas y servicios en la nube, incluyendo responsabilidades, seguridad, disponibilidad, tratamiento de información y continuidad del servicio.',
      },
      {
        id: 'tech-4',
        category: 'tech',
        tag: 'Outsourcing TI',
        title: 'Outsourcing y proveedores tecnológicos',
        shortDesc: 'Analizamos y estructuramos relaciones con proveedores, riesgos contractuales, confidencialidad y seguridad.',
        fullDesc:
          'Analizamos y estructuramos relaciones con proveedores tecnológicos, considerando riesgos contractuales, confidencialidad, seguridad, propiedad intelectual y protección de datos.',
      },
      {
        id: 'tech-5',
        category: 'tech',
        tag: 'Comercio Digital',
        title: 'Comercio electrónico y negocios digitales',
        shortDesc: 'Términos y condiciones, contratación electrónica, relaciones con consumidores y privacidad.',
        fullDesc:
          'Asesoramos en términos y condiciones, contratación electrónica, relaciones con consumidores, privacidad y demás aspectos jurídicos de plataformas y servicios digitales.',
      },
      {
        id: 'tech-6',
        category: 'tech',
        tag: 'Inteligencia Artificial',
        title: 'Inteligencia artificial y nuevas tecnologías',
        shortDesc: 'Analizamos los riesgos jurídicos asociados con la implementación y utilización de soluciones de IA.',
        fullDesc:
          'Analizamos los riesgos jurídicos asociados con la implementación y utilización de soluciones basadas en inteligencia artificial y otras tecnologías emergentes.',
      },
      {
        id: 'tech-7',
        category: 'tech',
        tag: 'Propiedad Intelectual',
        title: 'Propiedad intelectual y tecnología',
        shortDesc: 'Asesoramos en licencias, titularidad de desarrollos, derechos sobre software y contenidos digitales.',
        fullDesc:
          'Asesoramos en licencias, titularidad de desarrollos, derechos sobre software, contenidos y otros activos vinculados con proyectos tecnológicos.',
      },
      {
        id: 'tech-8',
        category: 'tech',
        tag: 'Negociación Tech',
        title: 'Negociación de contratos tecnológicos',
        shortDesc: 'Acompañamos negociaciones para identificar riesgos y construir acuerdos comercialmente viables.',
        fullDesc:
          'Acompañamos negociaciones entre clientes y proveedores para identificar riesgos y construir acuerdos jurídicamente sólidos y comercialmente viables.',
      },
    ],
  },
  {
    id: 'telecom',
    name: 'Telecomunicaciones y Regulación',
    badge: 'Telecomunicaciones y Regulación',
    tagline: 'Asesoría jurídica para un sector altamente regulado y en constante evolución',
    description:
      'El desarrollo de servicios de telecomunicaciones requiere comprender no solamente el negocio y la tecnología, sino también un marco regulatorio especializado que condiciona su implementación y operación.\n\nSmartLegalEC asesora a empresas nacionales e internacionales en proyectos relacionados con telecomunicaciones, conectividad y servicios tecnológicos regulados en Ecuador.',
    iconName: 'Radio',
    closingText:
      '¿Estás desarrollando un proyecto de telecomunicaciones en Ecuador? Podemos ayudarte a determinar sus requisitos regulatorios y acompañarte durante su implementación.',
    ctaText: 'Consultar proyectos de telecomunicaciones',
    whatsappMessage: 'Hola SmartLegalEC, necesito asesoría jurídica y regulatoria en proyectos de telecomunicaciones y regulación.',
    regulations: [
      'Ley Orgánica de Telecomunicaciones (LOT)',
      'Reglamento General a la Ley Orgánica de Telecomunicaciones',
      'Regulaciones y Normativas Técnicas del Sector de Telecomunicaciones',
      'Plan Nacional de Frecuencias y Régimen de Derechos de Espectro',
      'Tratados y estándares internacionales de telecomunicaciones y conectividad',
    ],
    targetAudience: [
      'Proveedores de Servicios de Internet (ISPs) y operadores de servicios regulados',
      'Operadores de telecomunicaciones portadores y móviles',
      'Empresas de comunicaciones satelitales y segmento espacial',
      'Empresas de infraestructura de conectividad, fibra óptica y coubicación',
      'Compañías que requieren redes privadas de datos o enlaces punto a punto',
    ],
    services: [
      {
        id: 'telecom-1',
        category: 'telecom',
        tag: 'Títulos Habilitantes',
        title: 'Títulos habilitantes',
        shortDesc: 'Asesoramos en la identificación, solicitud, modificación, renovación y gestión de títulos habilitantes.',
        fullDesc:
          'Asesoramos en la identificación, solicitud, modificación, renovación y gestión de títulos habilitantes necesarios para la prestación de servicios de telecomunicaciones.',
      },
      {
        id: 'telecom-2',
        category: 'telecom',
        tag: 'Servicios Telco',
        title: 'Servicios de telecomunicaciones',
        shortDesc: 'Analizamos los requisitos jurídicos y regulatorios aplicables a proyectos de telecomunicaciones.',
        fullDesc:
          'Analizamos los requisitos jurídicos y regulatorios aplicables a proyectos y modelos de negocio que involucren servicios de telecomunicaciones.',
      },
      {
        id: 'telecom-3',
        category: 'telecom',
        tag: 'Espectro',
        title: 'Espectro radioeléctrico',
        shortDesc: 'Brindamos asesoría jurídica en asuntos relacionados con el uso, asignación y regulación del espectro.',
        fullDesc:
          'Brindamos asesoría jurídica en asuntos relacionados con el uso, asignación y regulación del espectro.',
      },
      {
        id: 'telecom-4',
        category: 'telecom',
        tag: 'Servicios Satelitales',
        title: 'Servicios satelitales y segmento espacial',
        shortDesc: 'Acompañamos proyectos de segmento espacial, servicios satelitales y comunicaciones móviles.',
        fullDesc:
          'Acompañamos proyectos relacionados con segmento espacial, servicios satelitales, acceso a Internet y comunicaciones móviles por satélite.',
      },
      {
        id: 'telecom-5',
        category: 'telecom',
        tag: 'Cumplimiento',
        title: 'Cumplimiento regulatorio',
        shortDesc: 'Asesoramos en el cumplimiento de obligaciones derivadas de títulos habilitantes y regulación sectorial.',
        fullDesc:
          'Asesoramos en el cumplimiento de obligaciones derivadas de títulos habilitantes, regulación sectorial y disposiciones emitidas por las autoridades competentes.',
      },
      {
        id: 'telecom-6',
        category: 'telecom',
        tag: 'Procedimientos',
        title: 'Procedimientos administrativos',
        shortDesc: 'Brindamos acompañamiento jurídico en trámites y procedimientos administrativos de servicios regulados.',
        fullDesc:
          'Brindamos acompañamiento jurídico en trámites, requerimientos y procedimientos administrativos relacionados con la operación de servicios regulados.',
      },
      {
        id: 'telecom-7',
        category: 'telecom',
        tag: 'Contratos Sectoriales',
        title: 'Contratos de telecomunicaciones y tecnología',
        shortDesc: 'Elaboramos y revisamos contratos vinculados con infraestructura, conectividad y servicios del sector.',
        fullDesc:
          'Elaboramos y revisamos contratos vinculados con infraestructura, conectividad, servicios, proveedores y proyectos del sector.',
      },
      {
        id: 'telecom-8',
        category: 'telecom',
        tag: 'Relaciones Institucionales',
        title: 'Relaciones con autoridades',
        shortDesc: 'Acompañamos jurídicamente las gestiones ante autoridades e instituciones del proyecto.',
        fullDesc:
          'Acompañamos jurídicamente las gestiones que deban realizarse ante autoridades e instituciones relacionadas con el proyecto.',
      },
    ],
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'art-1',
    slug: 'guia-dpd-externo-ecuador',
    title: 'Delegado de Protección de Datos (DPD) en Ecuador: ¿Cuándo es obligatorio y cómo estructurarlo?',
    category: 'LOPDP & Privacidad',
    date: '14 de Febrero, 2026',
    readTime: '6 min de lectura',
    author: 'Abg. Luis Fernando Guerra Padilla',
    summary: 'Análisis pormenorizado sobre los criterios normativos de la LOPDP para la designación de un DPD, ventajas del esquema de DPD externo y sus responsabilidades ante la Superintendencia.',
    keyPoints: [
      'Criterios legales de designación obligatoria según el volumen y naturaleza del tratamiento.',
      'Diferencias críticas entre un oficial de cumplimiento interno y un DPD externo independiente.',
      'Funciones operativas: atención de derechos ARCO+, enlace con la autoridad y supervisión del RAT.',
      'Régimen de responsabilidad y mitigación de sanciones económicas.',
    ],
    content: [
      'La Ley Orgánica de Protección de Datos Personales (LOPDP) en Ecuador incorporó la figura del Delegado de Protección de Datos (DPD) como una pieza angular para garantizar que las organizaciones traten la información de manera lícita, leal y transparente.',
      'Si bien muchas organizaciones asumen que la designación del DPD es optativa, la normativa ecuatoriana y su reglamento establecen supuestos específicos donde es imperativa: entidades públicas, organizaciones que realicen tratamiento masivo o a gran escala, y aquellas que procesen categorías especiales de datos personales (salud, biométricos, financieros o de menores).',
      'Contar con un DPD Externo bajo la modalidad de servicio profesional permite a las empresas acceder a un equipo con experiencia especializada multidisciplinaria, manteniendo la independencia de criterio que la ley exige para evitar conflictos de interés con áreas comerciales o de TI.',
      'En SmartLegalEC estructuramos el servicio de DPD Externo mediante un plan de supervisión continua, protocolos de respuesta ante incidentes y canales formales para atender solicitudes de los titulares de datos y requerimientos de la Superintendencia.',
    ],
  },
  {
    id: 'art-2',
    slug: 'clausulas-criticas-contratos-saas',
    title: 'Cláusulas críticas en Contratos SaaS: Niveles de Servicio (SLA), Propiedad Intelectual y Custodia de Datos',
    category: 'Contratos Tech & SaaS',
    date: '28 de Enero, 2026',
    readTime: '8 min de lectura',
    author: 'Abg. Luis Fernando Guerra Padilla',
    summary: 'Aspectos esenciales que toda empresa tecnológica y cliente corporativo debe blindar al negociar suscripciones de software en la nube bajo la legislación ecuatoriana e internacional.',
    keyPoints: [
      'Delimitación precisa de Acuerdos de Nivel de Servicio (SLA) y penalidades por indisponibilidad.',
      'Protección irrestricta de la titularidad de los datos del cliente y exportabilidad sin trabas.',
      'Cláusulas de indemnidad ante reclamaciones de terceros por infracción de patentes o derechos de autor.',
      'Armonización contractual entre el proveedor del SaaS y los términos del hosting Cloud subyacente (AWS, Azure, GCP).',
    ],
    content: [
      'Los modelos de Software as a Service (SaaS) han transformado la forma en que las organizaciones acceden a herramientas críticas. Sin embargo, la estandarización de los contratos de adhesión a menudo traslada riesgos desproporcionados al usuario corporativo.',
      'Uno de los errores más frecuentes es no definir con claridad los tiempos de respuesta y solución ante caídas críticas de la plataforma. Un SLA no debe limitarse a porcentajes globales de "uptime", sino detallar penalidades aplicables mediante créditos en facturación o derecho de terminación sin penalidad.',
      'Asimismo, en el contexto de la LOPDP en Ecuador, el contrato SaaS debe calificar expresamente al proveedor como "Encargado del Tratamiento", estableciendo compromisos estrictos de confidencialidad, no utilización de datos para fines propios y obligación de notificación inmediata en caso de brechas de seguridad.',
      'Una revisión jurídica preventiva permite a los proveedores de software cerrar ventas con grandes clientes sin frenos legales y a los compradores proteger la continuidad de sus operaciones.',
    ],
  },
  {
    id: 'art-3',
    slug: 'regulacion-satelital-conectividad-ecuador',
    title: 'Despliegue satelital y conectividad en Ecuador: Marco regulatorio sectorial',
    category: 'Telecomunicaciones y Regulación',
    date: '10 de Enero, 2026',
    readTime: '7 min de lectura',
    author: 'Abg. Luis Fernando Guerra Padilla',
    summary: 'Requisitos jurídicos y títulos habilitantes necesarios para la prestación de servicios de provisión de segmento espacial, estaciones terrenas y conectividad satelital en territorio ecuatoriano.',
    keyPoints: [
      'Procedimiento para el registro y autorización de constelaciones de satélites no geoestacionarios (NGSO/LEO) y geoestacionarios (GSO).',
      'Régimen de asignación y uso de frecuencias del espectro radioeléctrico para gateways y enlaces de bajada/subida.',
      'Obligaciones de cumplimiento continuo y régimen tributario sectorial.',
      'Interconexión y coordinación con redes terrestres de telecomunicaciones.',
    ],
    content: [
      'El crecimiento exponencial de las constelaciones de satélites de órbita baja (LEO) ha abierto oportunidades sin precedentes para llevar conectividad a zonas remotas y sectores industriales en Ecuador como minería, energía, agroindustria y marítimo.',
      'Sin embargo, operar legalmente servicios satelitales en Ecuador exige cumplir un riguroso marco regulatorio, que incluye la obtención de títulos habilitantes para el segmento espacial y la autorización correspondiente para el uso de frecuencias.',
      'El análisis preliminar de viabilidad regulatoria permite a los operadores internacionales y distribuidores locales estructurar sus modelos comerciales conforme a la Ley Orgánica de Telecomunicaciones (LOT), evitando sanciones y retrasos en la comercialización.',
      'SmartLegalEC acompaña a empresas de telecomunicaciones en todas las etapas del trámite regulatorio, desde la preparación técnica-jurídica hasta la emisión definitiva del título habilitante.',
    ],
  },
  {
    id: 'art-4',
    slug: 'gobernanza-ia-empresas-ecuador',
    title: 'Inteligencia Artificial en la empresa: Riesgos jurídicos, propiedad intelectual y privacidad',
    category: 'Inteligencia Artificial',
    date: '18 de Diciembre, 2025',
    readTime: '5 min de lectura',
    author: 'Abg. Luis Fernando Guerra Padilla',
    summary: 'Guía práctica para implementar herramientas de IA generativa y algoritmos predictivos en la operativa empresarial mitigando contingencias de fuga de información y derechos de autor.',
    keyPoints: [
      'Políticas internas de uso aceptable de IA (Shadow AI y protección de secretos comerciales).',
      'Titularidad de creaciones generadas con asistencia de IA según el Código Ingenios.',
      'Evaluaciones de Impacto en Protección de Datos (EIPD) para modelos de perfilamiento algorítmico.',
      'Responsabilidad civil y transparencia hacia clientes finales.',
    ],
    content: [
      'La adopción acelerada de asistentes de IA y modelos generativos en departamentos comerciales, de marketing, desarrollo y legal está generando una zona gris de riesgos que las organizaciones deben regular de forma inmediata.',
      'El ingreso inadvertido de código propietario, datos financieros o bases de datos de clientes en herramientas de IA públicas puede constituir una violación directa al deber de confidencialidad y a la LOPDP.',
      'Es indispensable que las compañías establezcan una Política Corporativa de Gobernanza de Inteligencia Artificial que defina qué herramientas están autorizadas, qué tipo de información está estrictamente prohibido compartir y cómo se auditan los resultados generados.',
    ],
  },
];

export const ABOUT_QUADRANTS: AboutQuadrant[] = [
  {
    title: 'Formación Académica de Alto Nivel',
    iconName: 'GraduationCap',
    items: [
      'Estudios universitarios y de posgrado especializados en Derecho, Empresa y Nuevas Tecnologías.',
      'Capacitación continua en estándares internacionales de Privacidad (RGPD / LOPDP) y Gobernanza Digital.',
      'Enfoque multidisciplinario que combina rigor dogmático con entendimiento de arquitecturas de TI.',
    ],
  },
  {
    title: 'Experiencia y Especialización',
    iconName: 'Briefcase',
    items: [
      'Trayectoria profesional consolidada en adecuación integral a la LOPDP y designación como DPD externo.',
      'Estructuración y negociación de contratos de software SaaS, Cloud, Outsourcing y desarrollo a medida.',
      'Asesoría técnica y regulatoria en proyectos de telecomunicaciones y títulos habilitantes.',
    ],
  },
  {
    title: 'Actividad Profesional y Gremial',
    iconName: 'Users',
    items: [
      'Participación activa en organizaciones profesionales, comités jurídicos y gremios tecnológicos.',
      'Panelista y expositor en foros y conferencias sobre derecho digital, ciberseguridad e inteligencia artificial.',
      'Vinculación constante con el ecosistema de innovación, startups y empresas multinacionales en Ecuador.',
    ],
  },
  {
    title: 'Publicaciones y Análisis Jurídico',
    iconName: 'FileText',
    items: [
      'Autor de artículos y análisis de coyuntura normativa sobre privacidad, protección de datos y telecomunicaciones.',
      'Apariciones en medios de comunicación y espacios especializados analizando el impacto de nuevas leyes.',
      'Generación de contenido de valor para directivos y líderes del sector tecnológico y empresarial.',
    ],
  },
];

export const CORPORATE_VALUES: CorporateValue[] = [
  {
    title: 'Excelencia',
    tagline: 'Rigor jurídico de vanguardia',
    description: 'Soluciones de alto valor analítico diseñadas con máxima precisión técnica y adaptadas a la operación real de cada organización.',
    iconName: 'Award',
  },
  {
    title: 'Integridad',
    tagline: 'Ética y confidencialidad absoluta',
    description: 'Actuamos con los más altos estándares éticos, transparencia en cada recomendación y estricta confidencialidad en el manejo de información estratégica.',
    iconName: 'Shield',
  },
  {
    title: 'Innovación',
    tagline: 'Visión tecnológica anticipatoria',
    description: 'Comprendemos a fondo las herramientas tecnológicas y los modelos emergentes para anticipar contingencias y oportunidades normativas.',
    iconName: 'Zap',
  },
  {
    title: 'Compromiso',
    tagline: 'Acompañamiento cercano y real',
    description: 'Nos involucramos como socios estratégicos de negocio, acompañando a nuestros clientes en el cumplimiento tangible de sus metas.',
    iconName: 'HeartHandshake',
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'q1',
    title: '1. ¿Tu organización trata bases de datos de clientes, usuarios, empleados o proveedores en Ecuador?',
    options: [
      { label: 'Sí, contamos con bases de datos de clientes y colaboradores', score: 3, riskNote: 'Sujeto obligatorio a la LOPDP' },
      { label: 'Solo de colaboradores internos (nómina/RRHH)', score: 2, riskNote: 'Aplica LOPDP en ámbito laboral' },
      { label: 'No estamos seguros de nuestro inventario de datos', score: 4, riskNote: 'Riesgo alto por falta de registro de actividades' },
    ],
  },
  {
    id: 'q2',
    title: '2. ¿Cuentas con políticas de privacidad actualizadas, cláusulas de consentimiento y contratos de encargo con proveedores?',
    options: [
      { label: 'Sí, redactadas e implementadas con asesoría especializada', score: 1 },
      { label: 'Tenemos documentos genéricos descargados de internet', score: 4, riskNote: 'Riesgo crítico por falta de adecuación real' },
      { label: 'Aún no hemos implementado políticas formales', score: 5, riskNote: 'Riesgo de sanciones por incumplimiento normativo' },
    ],
  },
  {
    id: 'q3',
    title: '3. ¿Tu empresa desarrolla, adquiere SaaS, utiliza infraestructura Cloud o implementa Inteligencia Artificial?',
    options: [
      { label: 'Sí, contratamos o desarrollamos software y servicios en la nube', score: 3, riskNote: 'Requiere blindaje contractual y SLA' },
      { label: 'Operamos plataformas digitales o comercio electrónico', score: 3, riskNote: 'Requiere términos, condiciones y privacidad' },
      { label: 'Nuestra operación es mayoritariamente tradicional', score: 1 },
    ],
  },
  {
    id: 'q4',
    title: '4. ¿Prestas servicios de conectividad, enlaces satelitales o requieres títulos habilitantes de telecomunicaciones?',
    options: [
      { label: 'Sí, somos ISP o proveedor de telecomunicaciones', score: 4, riskNote: 'Requiere cumplimiento estricto de títulos habilitantes' },
      { label: 'Estamos planificando desplegar infraestructura o servicios de red', score: 3, riskNote: 'Requiere viabilidad regulatoria previa' },
      { label: 'No operamos en telecomunicaciones', score: 0 },
    ],
  },
];

export const FAQS = [
  {
    q: '¿Por qué es urgente que mi empresa en Ecuador se adecúe a la LOPDP?',
    a: 'La Ley Orgánica de Protección de Datos Personales (LOPDP) establece obligaciones directas para todas las personas naturales y jurídicas que traten datos en Ecuador. Su régimen sancionador contempla multas económicas significativas y la obligación de reparar a los titulares de datos ante vulneraciones.',
  },
  {
    q: '¿Cuándo es necesario nombrar un Delegado de Protección de Datos (DPD)?',
    a: 'El DPD es obligatorio para entidades del sector público y organizaciones que realizan tratamiento a gran escala, datos sensibles o perfilamiento continuo. Muchas empresas eligen la modalidad de DPD Externo por eficiencia de costos, experiencia e independencia técnica.',
  },
  {
    q: '¿Qué diferencia a SmartLegalEC de un estudio jurídico tradicional?',
    a: 'Hablamos el idioma de la tecnología. No solo revisamos normas legales, sino que comprendemos la arquitectura técnica de un SaaS, una API, un pipeline de datos o una constelación satelital, traduciendo requerimientos técnicos en contratos y medidas jurídicas que funcionan.',
  },
  {
    q: '¿Cómo coordinamos una primera consulta o diagnóstico?',
    a: 'Puedes escribirnos directamente a nuestro WhatsApp oficial o completar el formulario de contacto para agendar una sesión inicial con el Abg. Luis Fernando Guerra Padilla.',
  },
];

