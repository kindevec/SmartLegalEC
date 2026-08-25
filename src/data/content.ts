import { PracticeArea, Pillar, Metric, AboutQuadrant, CorporateValue, DiagnosticQuestion, LegalArticle, Client } from '../types';

export const BRAND_INFO = {
  name: 'SMARTLEGALEC',
  slogan: 'Tecnología • Protección de Datos • Telecomunicaciones',
  domain: 'smartlegalec.com',
  location: 'Quito, Ecuador',
  founder: 'Luis Fernando Guerra Padilla',
  founderTitle: 'Abogado especializado en Protección de Datos, Tecnología y Telecomunicaciones',
  founderEmail: 'info@smartlegalec.com',
  email: 'info@smartlegalec.com',
  founderPhone: '+593 99 866 8139',
  address: 'Quito, Ecuador',
  schedule: 'Lunes a Viernes: 08:30 - 18:00 (Presencial & Virtual)',
  whatsappNumber: '593998668139',
  whatsappUrl: 'https://wa.me/593998668139',
  linkedinUrl: 'https://www.linkedin.com/company/99569327',
  instagramUrl: 'https://www.instagram.com/smartlegal_ec?igshid=YTQwZjQ0NmI0OA%3D%3D',
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
    description: 'Entendemos la arquitectura de software, servicios cloud y modelos de negocio digitales tanto como la normativa vigente.',
  },
  {
    number: '03',
    title: 'Enfoque en riesgos, cumplimiento y negocio',
    description: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio.',
  },
];

export const METRICS: Metric[] = [
  {
    value: '10+',
    label: 'Años de experiencia',
    detail: 'Asesorando a empresas nacionales e internacionales en entornos regulados.',
  },
  {
    value: '50+',
    label: 'Organizaciones y proyectos',
    detail: 'Acompañados con éxito en adecuación LOPDP, contratos tech y ARCOTEL.',
  },
  {
    value: '12+',
    label: 'Industrias y sectores',
    detail: 'Tecnología, SaaS, telecomunicaciones, salud, consumo masivo, retail y finanzas.',
  },
  {
    value: '100%',
    label: 'Compromiso y personalización',
    detail: 'Atención directa por especialistas de alto nivel con soluciones aplicables a la práctica.',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'lopdp',
    name: 'Protección de Datos y Privacidad',
    badge: 'Cumplimiento LOPDP Ecuador',
    tagline: 'Protección de datos más allá del cumplimiento',
    description:
      'La protección de datos personales se ha convertido en una obligación transversal para las organizaciones. No se trata únicamente de contar con políticas o documentos, sino de identificar cómo se utilizan los datos, gestionar los riesgos asociados y establecer medidas que funcionen en la operación diaria. En SmartLegalEC asesoramos a empresas y organizaciones en el cumplimiento de la Ley Orgánica de Protección de Datos Personales y su normativa relacionada, mediante soluciones adaptadas a su actividad, tamaño, nivel de riesgo y realidad operativa.',
    iconName: 'ShieldCheck',
    closingText:
      '¿Necesitas evaluar el cumplimiento de tu organización? Podemos revisar tu situación actual, identificar los principales riesgos y definir las acciones necesarias.',
    ctaText: 'Evaluar mi cumplimiento LOPDP',
    whatsappMessage: 'Hola SmartLegalEC, me interesa una asesoría sobre Protección de Datos Personales y adecuación a la LOPDP en Ecuador.',
    regulations: [
      'Ley Orgánica de Protección de Datos Personales (LOPDP - R.O. 459)',
      'Reglamento General a la Ley Orgánica de Protección de Datos Personales',
      'Resoluciones y Guías de la Autoridad de Protección de Datos Personales',
      'Estándares internacionales de privacidad (RGPD / ISO 27701)',
    ],
    targetAudience: [
      'Empresas medianas y grandes con bases de datos de clientes, empleados y proveedores',
      'Instituciones financieras, Fintechs, aseguradoras y casas de valores',
      'Clínicas, laboratorios, hospitales e instituciones del sector salud',
      'Comercios electrónicos, marketplaces y plataformas de servicios masivos',
      'Entidades del sector educativo y organizaciones con tratamiento de datos de menores',
    ],
    services: [
      {
        id: 'lopdp-1',
        category: 'lopdp',
        tag: 'Adecuación Integral',
        title: 'Implementación y adecuación a la LOPDP',
        shortDesc: 'Evaluación de brechas y desarrollo de medidas jurídicas y organizativas necesarias.',
        fullDesc:
          'Evaluamos el nivel de cumplimiento de la organización, identificamos brechas y desarrollamos las medidas jurídicas y organizativas necesarias para adecuar sus procesos.',
      },
      {
        id: 'lopdp-2',
        category: 'lopdp',
        tag: 'DPO / DPD As a Service',
        title: 'Delegado de Protección de Datos externo',
        shortDesc: 'Supervisión independiente, asesoramiento continuo y acompañamiento.',
        fullDesc:
          'Prestamos el servicio de DPD externo para organizaciones que requieren o deciden contar con esta figura, brindando asesoramiento, supervisión y acompañamiento independiente en materia de protección de datos.',
      },
      {
        id: 'lopdp-3',
        category: 'lopdp',
        tag: 'Diagnóstico & Auditoría',
        title: 'Auditorías y evaluaciones de cumplimiento',
        shortDesc: 'Revisión de procesos, documentos y prácticas operativas.',
        fullDesc:
          'Revisamos procesos, documentos y prácticas para identificar incumplimientos, riesgos y oportunidades de mejora.',
      },
      {
        id: 'lopdp-4',
        category: 'lopdp',
        tag: 'EIPD & Riesgos',
        title: 'Gestión de riesgos y evaluaciones de impacto',
        shortDesc: 'Identificación de riesgos y desarrollo de evaluaciones de impacto.',
        fullDesc:
          'Identificamos y evaluamos los riesgos derivados del tratamiento de datos personales y desarrollamos evaluaciones de impacto cuando la naturaleza del tratamiento lo requiere.',
      },
      {
        id: 'lopdp-5',
        category: 'lopdp',
        tag: 'Contratos & Terceros',
        title: 'Contratos y relaciones con terceros',
        shortDesc: 'Contratos de encargo, transferencias y corresponsabilidad.',
        fullDesc:
          'Elaboramos y revisamos contratos de encargo, transferencia, corresponsabilidad y otras relaciones jurídicas que involucren tratamiento o intercambio de datos personales.',
      },
      {
        id: 'lopdp-6',
        category: 'lopdp',
        tag: 'Privacy by Design',
        title: 'Privacidad en proyectos y nuevas tecnologías',
        shortDesc: 'Protección de datos desde el diseño en apps, IA, biometría y videovigilancia.',
        fullDesc:
          'Asesoramos en la incorporación de protección de datos desde el diseño en aplicaciones, plataformas, inteligencia artificial, biometría, videovigilancia y otros proyectos tecnológicos.',
      },
      {
        id: 'lopdp-7',
        category: 'lopdp',
        tag: 'Incident Response',
        title: 'Gestión de incidentes y vulneraciones',
        shortDesc: 'Evaluación jurídica inmediata y determinación de acciones y notificaciones.',
        fullDesc:
          'Acompañamos la evaluación jurídica de incidentes de seguridad y la determinación de las acciones y notificaciones que correspondan.',
      },
      {
        id: 'lopdp-8',
        category: 'lopdp',
        tag: 'Gobierno de Datos',
        title: 'Políticas, procedimientos y documentación',
        shortDesc: 'Instrumentos jurídicos y organizativos para integrar la protección a los procesos.',
        fullDesc:
          'Desarrollamos instrumentos jurídicos y organizativos que permitan integrar la protección de datos a los procesos de la organización.',
      },
      {
        id: 'lopdp-9',
        category: 'lopdp',
        tag: 'Cultura Corporativa',
        title: 'Capacitación',
        shortDesc: 'Capacitaciones generales o especializadas para directivos y equipos operativos.',
        fullDesc:
          'Diseñamos capacitaciones generales o especializadas para equipos directivos, jurídicos, comerciales, tecnológicos, talento humano y demás áreas que intervienen en el tratamiento de información.',
      },
    ],
  },
  {
    id: 'tech',
    name: 'Tecnología y Negocios Digitales',
    badge: 'LegalTech & Negocios Digitales',
    tagline: 'Contratos y asesoría jurídica para negocios que dependen de la tecnología',
    description:
      'La tecnología transforma la manera en que las empresas contratan, prestan servicios, gestionan información y desarrollan nuevos modelos de negocio. Esa transformación también genera riesgos jurídicos que deben gestionarse desde el inicio. En SmartLegalEC asesoramos a empresas, proveedores tecnológicos y organizaciones que contratan tecnología, procurando que sus relaciones jurídicas reflejen adecuadamente la realidad técnica, comercial y operativa de cada proyecto.',
    iconName: 'Code2',
    closingText:
      'La tecnología cambia. Tus contratos también deberían hacerlo. Si estás desarrollando, contratando o implementando una solución tecnológica, podemos ayudarte a estructurar jurídicamente el proyecto desde el inicio.',
    ctaText: 'Estructurar contratos tecnológicos',
    whatsappMessage: 'Hola SmartLegalEC, requiero asesoría legal para un proyecto tecnológico / contratos de software y negocios digitales.',
    regulations: [
      'Código Orgánico de la Economía Social de los Conocimientos (Código Ingenios - Propiedad Intelectual)',
      'Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos',
      'Ley Orgánica de Defensa del Consumidor (Disposiciones sobre comercio digital)',
      'Estándares contractuales internacionales (UNIDROIT / CISG en software)',
    ],
    targetAudience: [
      'Empresas de desarrollo de software, Software as a Service (SaaS) y Apps móviles',
      'Compañías corporativas en procesos de transformación digital y migración Cloud',
      'Fintechs, procesadores de pago y plataformas de comercio digital',
      'Startups tecnológicas en rondas de inversión y formalización de PI',
      'Proveedores de infraestructura TI, hosting y centros de datos',
    ],
    services: [
      {
        id: 'tech-1',
        category: 'tech',
        tag: 'SaaS & Licencias',
        title: 'Contratos de software y SaaS',
        shortDesc: 'Licenciamiento, suscripción, implementación, soporte y mantenimiento.',
        fullDesc:
          'Elaboramos, revisamos y negociamos contratos de licenciamiento, suscripción, implementación, soporte, mantenimiento y prestación de servicios tecnológicos.',
      },
      {
        id: 'tech-2',
        category: 'tech',
        tag: 'Desarrollo de Software',
        title: 'Desarrollo e implementación de software',
        shortDesc: 'Alcance, entregables, niveles de servicio, propiedad intelectual y garantías.',
        fullDesc:
          'Definimos jurídicamente aspectos relacionados con alcance, entregables, niveles de servicio, propiedad intelectual, aceptación, responsabilidades, garantías y terminación.',
      },
      {
        id: 'tech-3',
        category: 'tech',
        tag: 'Cloud & Servicios',
        title: 'Cloud computing y servicios tecnológicos',
        shortDesc: 'Contratación de infraestructura y plataformas en la nube con seguridad y continuidad.',
        fullDesc:
          'Asesoramos en la contratación de infraestructura, plataformas y servicios en la nube, incluyendo responsabilidades, seguridad, disponibilidad, tratamiento de información y continuidad del servicio.',
      },
      {
        id: 'tech-4',
        category: 'tech',
        tag: 'Vendor Management',
        title: 'Outsourcing y proveedores tecnológicos',
        shortDesc: 'Estructuración de relaciones con proveedores, confidencialidad y riesgos.',
        fullDesc:
          'Analizamos y estructuramos relaciones con proveedores tecnológicos, considerando riesgos contractuales, confidencialidad, seguridad, propiedad intelectual y protección de datos.',
      },
      {
        id: 'tech-5',
        category: 'tech',
        tag: 'E-Commerce',
        title: 'Comercio electrónico y negocios digitales',
        shortDesc: 'Términos y condiciones, contratación electrónica, privacidad y consumidores.',
        fullDesc:
          'Asesoramos en términos y condiciones, contratación electrónica, relaciones con consumidores, privacidad y demás aspectos jurídicos de plataformas y servicios digitales.',
      },
      {
        id: 'tech-6',
        category: 'tech',
        tag: 'Inteligencia Artificial',
        title: 'Inteligencia artificial y nuevas tecnologías',
        shortDesc: 'Análisis de riesgos jurídicos en IA y tecnologías emergentes.',
        fullDesc:
          'Analizamos los riesgos jurídicos asociados con la implementación y utilización de soluciones basadas en inteligencia artificial y otras tecnologías emergentes.',
      },
      {
        id: 'tech-7',
        category: 'tech',
        tag: 'Propiedad Intelectual',
        title: 'Propiedad intelectual y tecnología',
        shortDesc: 'Licencias, titularidad de desarrollos y derechos sobre software y contenidos.',
        fullDesc:
          'Asesoramos en licencias, titularidad de desarrollos, derechos sobre software, contenidos y otros activos vinculados con proyectos tecnológicos.',
      },
      {
        id: 'tech-8',
        category: 'tech',
        tag: 'Negociación Tech',
        title: 'Negociación de contratos tecnológicos',
        shortDesc: 'Acompañamiento en negociaciones entre clientes y proveedores.',
        fullDesc:
          'Acompañamos negociaciones entre clientes y proveedores para identificar riesgos y construir acuerdos jurídicamente sólidos y comercialmente viables.',
      },
    ],
  },
  {
    id: 'telecom',
    name: 'Telecomunicaciones y Regulación',
    badge: 'Regulación ARCOTEL & Conectividad',
    tagline: 'Asesoría jurídica para un sector altamente regulado y en constante evolución',
    description:
      'El desarrollo de servicios de telecomunicaciones requiere comprender no solamente el negocio y la tecnología, sino también un marco regulatorio especializado que condiciona su implementación y operación. SmartLegalEC asesora a empresas nacionales e internacionales en proyectos relacionados con telecomunicaciones, conectividad y servicios tecnológicos regulados en Ecuador.',
    iconName: 'Radio',
    closingText:
      '¿Estás desarrollando un proyecto de telecomunicaciones en Ecuador? Podemos ayudarte a determinar sus requisitos regulatorios y acompañarte durante su implementación.',
    ctaText: 'Consultar proyectos de telecomunicaciones',
    whatsappMessage: 'Hola SmartLegalEC, necesito asesoría jurídica y regulatoria en proyectos de telecomunicaciones / títulos ARCOTEL.',
    regulations: [
      'Ley Orgánica de Telecomunicaciones (LOT)',
      'Reglamento General a la Ley Orgánica de Telecomunicaciones',
      'Resoluciones y Regulaciones Técnicas emitidas por ARCOTEL',
      'Plan Nacional de Frecuencias y Régimen de Derechos y Tarifas de Espectro',
      'Tratados de la Unión Internacional de Telecomunicaciones (UIT)',
    ],
    targetAudience: [
      'Proveedores de Servicios de Internet (ISPs) y operadores de valor agregado',
      'Operadores de telecomunicaciones portadores y móviles',
      'Empresas internacionales de comunicaciones satelitales y segmento espacial',
      'Empresas de infraestructura de torres, fibra óptica y coubicación',
      'Compañías que requieren redes privadas de datos o enlaces punto a punto dedicados',
    ],
    services: [
      {
        id: 'telecom-1',
        category: 'telecom',
        tag: 'Títulos Habilitantes',
        title: 'Títulos habilitantes',
        shortDesc: 'Identificación, solicitud, modificación, renovación y gestión ante ARCOTEL.',
        fullDesc:
          'Asesoramos en la identificación, solicitud, modificación, renovación y gestión de títulos habilitantes necesarios para la prestación de servicios de telecomunicaciones.',
      },
      {
        id: 'telecom-2',
        category: 'telecom',
        tag: 'Modelos Telco',
        title: 'Servicios de telecomunicaciones',
        shortDesc: 'Requisitos jurídicos y regulatorios para modelos de negocio en conectividad.',
        fullDesc:
          'Analizamos los requisitos jurídicos y regulatorios aplicables a proyectos y modelos de negocio que involucren servicios de telecomunicaciones.',
      },
      {
        id: 'telecom-3',
        category: 'telecom',
        tag: 'Espectro',
        title: 'Espectro radioeléctrico',
        shortDesc: 'Asesoría jurídica en uso, asignación y regulación de frecuencias.',
        fullDesc:
          'Brindamos asesoría jurídica en asuntos relacionados con el uso, asignación y regulación del espectro.',
      },
      {
        id: 'telecom-4',
        category: 'telecom',
        tag: 'Satélites & Espacio',
        title: 'Servicios satelitales y segmento espacial',
        shortDesc: 'Acompañamiento en segmento espacial, constelaciones y comunicaciones satelitales.',
        fullDesc:
          'Acompañamos proyectos relacionados con segmento espacial, servicios satelitales, acceso a Internet y comunicaciones móviles por satélite.',
      },
      {
        id: 'telecom-5',
        category: 'telecom',
        tag: 'Compliance Regulatorio',
        title: 'Cumplimiento regulatorio',
        shortDesc: 'Asesoría en obligaciones derivadas de títulos habilitantes y disposiciones oficiales.',
        fullDesc:
          'Asesoramos en el cumplimiento de obligaciones derivadas de títulos habilitantes, regulación sectorial y disposiciones emitidas por las autoridades competentes.',
      },
      {
        id: 'telecom-6',
        category: 'telecom',
        tag: 'Procedimientos',
        title: 'Procedimientos administrativos',
        shortDesc: 'Acompañamiento en trámites y procedimientos administrativos sectoriales.',
        fullDesc:
          'Brindamos acompañamiento jurídico en trámites, requerimientos y procedimientos administrativos relacionados con la operación de servicios regulados.',
      },
      {
        id: 'telecom-7',
        category: 'telecom',
        tag: 'Contratos Telco',
        title: 'Contratos de telecomunicaciones y tecnología',
        shortDesc: 'Elaboración y revisión de contratos de infraestructura, conectividad y servicios.',
        fullDesc:
          'Elaboramos y revisamos contratos vinculados con infraestructura, conectividad, servicios, proveedores y proyectos del sector.',
      },
      {
        id: 'telecom-8',
        category: 'telecom',
        tag: 'Relaciones Institucionales',
        title: 'Relaciones con autoridades',
        shortDesc: 'Acompañamiento jurídico ante ARCOTEL y otras autoridades competentes.',
        fullDesc:
          'Acompañamos jurídicamente las gestiones que deban realizarse ante ARCOTEL y otras autoridades o instituciones relacionadas con el proyecto.',
      },
    ],
  },
];

export const CLIENTS: Client[] = [
  {
    id: 'metroeje',
    name: 'METROEJE CIA. LTDA.',
    sector: 'Movilidad & Transporte',
    description: 'Metroeje',
    link: 'https://metroeje.com',
  },
  {
    id: 'global-support',
    name: 'GLOBAL SUPPORT S.A.',
    sector: 'Tecnología & Soporte IT',
    description: 'Global Support',
    link: 'https://globalsupport.com.ec',
  },
  {
    id: 'factec',
    name: 'FACTEC S.A.',
    sector: 'Facturación & Soluciones Digitales',
    description: 'Factec S.A.',
  },
  {
    id: 'dr-salazar',
    name: 'CENTRO OFTALMOLÓGICO DR. RAÚL SALAZAR',
    sector: 'Salud & Medicina Especializada',
    description: 'Dr. Raúl Salazar Zambrano - Oftalmólogo Quito',
    link: 'https://oftalmologodrraulsalazar.com',
  },
  {
    id: 'quala',
    name: 'QUALA ECUADOR S.A.',
    sector: 'Consumo Masivo Multinacional',
    description: 'Multinacional de consumo masivo con presencia en 8 países de Centro y Sur América.',
    link: 'https://quala.com.ec',
  },
  {
    id: 'scrumz',
    name: 'SCRUMZ GESTIÓN INMOBILIARIA CIA. LTDA.',
    sector: 'Gestión Inmobiliaria & Bienes Raíces',
    description: 'Scrumz Gestión Inmobiliaria',
  },
  {
    id: 'zhm-seguros',
    name: 'ZHM SEGUROS S.A.',
    sector: 'Seguros Corporativos',
    description: 'Agencia Asesora Productora de Seguros - Especialistas en seguros corporativos.',
    link: 'https://zhmseguros.com',
  },
  {
    id: 'ponte-selva',
    name: 'INDUSTRIA PIOLERA PONTE SELVA S.A.',
    sector: 'Industria Textil & Manufactura',
    description: 'Empresa Textil en Ecuador - Ponte Selva',
    link: 'https://ponteselva.com',
  },
  {
    id: 'medicgo',
    name: 'MEDICGO S.A.S.',
    sector: 'Salud Digital & Servicios Médicos',
    description: 'MEDICGO – Tu salud nuestra pasión.',
    link: 'https://medicgo.ec',
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'art-1',
    slug: 'estructurar-juridicamente-ecosistema-tecnologico',
    title: 'Estructurar jurídicamente un ecosistema tecnológico',
    category: 'Contratos Tech & SaaS',
    date: '18 de Febrero, 2026',
    readTime: '6 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    summary: 'En los negocios tecnológicos, un contrato rara vez funciona de manera aislada. La importancia de estructurar coherentemente toda la cadena entre fabricantes, distribuidores, partners y clientes finales.',
    keyPoints: [
      'Modelar integralmente la cadena comercial: fabricantes, distribuidores, partners y usuarios.',
      'Definición de reglas comerciales, licenciamiento, garantías, soporte técnico y responsabilidades.',
      'Mitigar vacíos entre lo que se asume frente al fabricante y lo que se traslada al cliente final.',
      'Hacer viable y escalable el negocio cuando el modelo contractual acompaña al comercial.',
    ],
    content: [
      'En los negocios tecnológicos, un contrato rara vez funciona de manera aislada.',
      'Tuve la oportunidad de participar en la estructuración integral del modelo contractual y comercial regional de un grupo dedicado a la distribución de tecnología, con operaciones en varios países.',
      'El proyecto implicó modelar las distintas relaciones que forman parte del negocio: fabricantes, distribuidores, partners, canales, clientes y usuarios finales, procurando que las condiciones jurídicas y comerciales mantuvieran coherencia a lo largo de toda la cadena.',
      'El trabajo comprendió no solo contratos, sino también aspectos como: condiciones comerciales y reglas aplicables a cada canal, licenciamiento y condiciones de uso, responsabilidades de los distintos participantes, precios, pagos y condiciones asociadas a la comercialización, garantías y niveles de servicio, soporte técnico, propiedad intelectual, confidencialidad y protección de datos personales, limitaciones de responsabilidad, así como terminación y efectos posteriores de las relaciones comerciales.',
      'Uno de los principales retos de este tipo de estructuras es evitar vacíos entre lo que una empresa asume frente a un fabricante y aquello que puede trasladar o exigir a sus partners, clientes o usuarios finales.',
      'Por eso, estructurar jurídicamente un negocio tecnológico exige algo más que redactar buenos contratos: es necesario entender cómo se comercializa el producto, cómo se relacionan sus participantes, cómo circulan las obligaciones y dónde se encuentran los riesgos.',
      'Cuando el modelo contractual acompaña correctamente al modelo comercial, el Derecho deja de ser únicamente un mecanismo de protección y se convierte también en una herramienta para hacer viable y escalable el negocio.',
    ],
  },
  {
    id: 'art-2',
    slug: 'abogado-in-house-prevenir-contener-oportunidades',
    title: 'El abogado in-house: prevenir, contener y generar oportunidades',
    category: 'Telecomunicaciones & ARCOTEL',
    date: '02 de Febrero, 2026',
    readTime: '7 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    summary: 'La función jurídica dentro de una empresa va mucho más allá de responder consultas o gestionar contingencias: prevención, contención y generación de oportunidades.',
    keyPoints: [
      'PREVENCIÓN: Anticiparse oportunamente para encontrar alternativas que permitan avanzar con riesgo razonable.',
      'CONTENCIÓN: Coordinación técnica y probatoria rigurosa con más de 80% de resultados favorables en procedimientos sancionatorios.',
      'GENERACIÓN DE OPORTUNIDADES: Identificar qué sí puede hacerse mediante una interpretación regulatoria profunda.',
      'El abogado in-house como socio estratégico que entiende el negocio.',
    ],
    content: [
      'Trabajar durante varios años como abogado in-house en una de las principales compañías de telecomunicaciones del país me permitió entender que la función jurídica dentro de una empresa va mucho más allá de responder consultas o gestionar contingencias. La asesoría legal puede aportar al negocio desde tres dimensiones: prevención, contención y generación de oportunidades.',
      'PREVENCIÓN: El primer trabajo del abogado es anticiparse. Participar oportunamente en nuevos productos, contratos, decisiones comerciales, proyectos tecnológicos o cambios regulatorios permite identificar riesgos antes de que se conviertan en contingencias. Prevenir no significa impedir que el negocio avance. Significa encontrar alternativas que permitan alcanzar el objetivo empresarial con un nivel de riesgo jurídicamente razonable.',
      'CONTENCIÓN: No todos los riesgos pueden evitarse. Durante mi experiencia in-house tuve a mi cargo aproximadamente 25 procedimientos administrativos sancionatorios, además de otros asuntos regulatorios y de competencia, alcanzando resultados favorables en alrededor del 80 % de los casos. Cuando una contingencia se materializa, el rol jurídico cambia: hay que entender los hechos, coordinar con las áreas técnicas y comerciales, reconstruir decisiones, analizar evidencia y desarrollar una estrategia que permita reducir su impacto.',
      'GENERACIÓN DE OPORTUNIDADES: Esta es probablemente la dimensión menos visible de la asesoría jurídica. Conocer profundamente la regulación permite también identificar qué sí puede hacerse. Una interpretación regulatoria, una estructura contractual diferente o la identificación temprana de una alternativa jurídica pueden permitir lanzar un producto, desarrollar una alianza o ejecutar una operación que inicialmente parecía compleja.',
      'Por eso, el abogado in-house no debería ser únicamente quien identifica riesgos. Debe entender el negocio lo suficiente para prevenir cuando sea posible, contener cuando sea necesario y encontrar oportunidades cuando el marco jurídico lo permita.',
    ],
  },
  {
    id: 'art-3',
    slug: 'proteccion-datos-no-existe-implementacion-igual',
    title: 'Protección de datos: no existe una implementación igual a otra',
    category: 'LOPDP & Privacidad',
    date: '15 de Enero, 2026',
    readTime: '6 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    summary: 'Implementar un marco de protección de datos personales no consiste en replicar políticas ni plantillas. Metodología basada en la realidad operativa de cada organización.',
    keyPoints: [
      'Experiencia multisectorial: tecnología, salud, finanzas, educación, retail, consumo masivo e industria.',
      'Diferentes escenarios: adecuaciones desde cero, grupos regionales y respuestas a procesos de control SPDP.',
      'Metodología fundamental: entender la organización antes de diseñar su cumplimiento.',
      'La protección de datos no se implementa desde una plantilla, sino desde la realidad operativa.',
    ],
    content: [
      'Implementar un marco de protección de datos personales no consiste en replicar políticas, formatos o procedimientos de una organización a otra.',
      'A lo largo de los últimos años he tenido la oportunidad de participar en implementaciones y proyectos de cumplimiento de protección de datos en organizaciones nacionales y grupos con presencia regional, pertenecientes a sectores muy distintos: tecnología y distribución de software, telecomunicaciones, instituciones financieras, salud, educación, retail, productos de consumo masivo, construcción, industria, asistencia social, organizaciones no gubernamentales y entidades vinculadas al deporte, entre otros.',
      'Algunos proyectos han implicado implementar integralmente la normativa ecuatoriana. Otros han requerido estructurar marcos de privacidad para grupos con operaciones en distintos países, armonizando criterios y necesidades regionales con las exigencias locales.',
      'También existen escenarios distintos: organizaciones que empiezan desde cero y otras que deben fortalecer su cumplimiento como consecuencia de observaciones, procesos de control o medidas dispuestas por la Autoridad de Protección de Datos Personales.',
      'Cada realidad exige una aproximación diferente. Una institución de salud maneja información y riesgos distintos a los de un distribuidor regional de tecnología. Una organización de asistencia humanitaria enfrenta desafíos diferentes a una institución financiera. Y una organización sometida a medidas correctivas necesita prioridades distintas a una empresa que está construyendo preventivamente su programa de cumplimiento.',
      'Sin embargo, la metodología siempre debe comenzar por lo mismo: entender la organización antes de diseñar su cumplimiento. Eso implica conocer sus procesos, tratamientos de datos, sistemas, proveedores, transferencias, estructura organizacional, riesgos y necesidades reales.',
      'Solo después tiene sentido desarrollar políticas, contratos, registros, evaluaciones de riesgo, procedimientos de derechos, gestión de incidentes, programas de capacitación y demás instrumentos de cumplimiento. La protección de datos no se implementa desde una plantilla. Se implementa desde la realidad de cada organización.',
    ],
  },
  {
    id: 'art-4',
    slug: 'ser-delegado-proteccion-datos-mas-que-requisito',
    title: 'Ser Delegado de Protección de Datos: mucho más que cumplir un requisito',
    category: 'LOPDP & Privacidad',
    date: '20 de Diciembre, 2025',
    readTime: '6 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    summary: 'El Delegado de Protección de Datos no debe ser una figura decorativa. El verdadero valor de un DPD independiente como puente entre la normativa y la operación.',
    keyPoints: [
      'El DPD como punto de conexión entre la normativa y la operación diaria de la empresa.',
      'Funciones clave: asesorar nuevos tratamientos, auditar proveedores, evaluar riesgos y gestionar incidentes.',
      'Independencia indispensable: asesorar, supervisar y advertir sin suplantar a la administración.',
      'Un buen DPD ayuda a que los problemas no lleguen a producirse.',
    ],
    content: [
      'El Delegado de Protección de Datos Personales no debería convertirse en una figura que existe únicamente para cumplir una obligación normativa.',
      'Actualmente ejerzo como Delegado de Protección de Datos externo para organizaciones de distintos sectores, entre ellos educación, salud, tecnología, productos de consumo masivo, construcción, asistencia social, servicios, retail y tecnologías de la información.',
      'Esa diversidad me ha permitido comprobar que el verdadero valor del DPD aparece cuando conoce suficientemente la organización para convertirse en un punto de conexión entre la normativa y la operación.',
      'En la práctica, el trabajo va mucho más allá de responder consultas sobre la Ley. Implica, entre otras actividades: asesorar sobre nuevos tratamientos y proyectos, revisar contratos y relaciones con proveedores, evaluar riesgos relacionados con datos personales, acompañar evaluaciones de impacto, asesorar frente a incidentes y vulneraciones de seguridad, supervisar la atención de derechos de los titulares, capacitar y generar cultura interna, realizar seguimiento al programa de cumplimiento, emitir criterios con independencia cuando una decisión puede generar riesgos para los titulares o para la propia organización, y servir como punto de contacto frente a la Autoridad de Protección de Datos Personales.',
      'Existe además un elemento que considero fundamental: la independencia. El DPD asesora, supervisa y advierte. No sustituye a la administración ni debe convertirse en quien toma las decisiones que posteriormente tendrá que supervisar.',
      'Precisamente por eso, un DPD externo puede aportar una mirada independiente y, al mismo tiempo, aprovechar la experiencia obtenida frente a problemáticas similares en organizaciones de diferentes industrias. Después de ejercer esta función en distintos sectores, tengo claro que un buen DPD no es aquel que aparece únicamente cuando existe un problema: es aquel que logra involucrarse suficientemente para ayudar a que muchos de esos problemas no lleguen a producirse.',
    ],
  },
];

export const ABOUT_QUADRANTS: AboutQuadrant[] = [
  {
    title: 'Formación académica',
    iconName: 'GraduationCap',
    items: [
      'Estudios universitarios y de posgrado relacionados con derecho, empresa, tecnología y áreas de especialización.',
      'Actualización continua en marcos regulatorios de privacidad, inteligencia artificial y telecomunicaciones.',
      'Enfoque multidisciplinario combinando rigor jurídico y entendimiento técnico-operativo.',
    ],
  },
  {
    title: 'Experiencia y especialización',
    iconName: 'Briefcase',
    items: [
      'Trayectoria profesional en protección de datos, tecnología, telecomunicaciones y asesoría empresarial.',
      'Desempeño activo como Delegado de Protección de Datos externo para organizaciones de diversos sectores.',
      'Estructuración y negociación de contratos tecnológicos de software, licenciamiento, cloud y outsourcing.',
    ],
  },
  {
    title: 'Actividad profesional',
    iconName: 'Users',
    items: [
      'Participación en organizaciones profesionales, gremios, eventos especializados y espacios del sector.',
      'Acompañamiento institucional y representación jurídica técnica ante entidades regulatorias como ARCOTEL.',
      'Asesoría continua a equipos directivos, legales y de tecnología en entornos de innovación.',
    ],
  },
  {
    title: 'Publicaciones y medios',
    iconName: 'FileText',
    items: [
      'Artículos, análisis, entrevistas, conferencias y participación en medios sobre protección de datos, tecnología y telecomunicaciones.',
      'Generación de criterio jurídico práctico para la toma de decisiones empresariales informadas.',
      'Difusión y capacitación continua sobre cumplimiento normativo y cultura de privacidad.',
    ],
  },
];

export const FOUNDER_EXPERIENCE_AREAS = [
  {
    title: 'Protección de Datos y Privacidad',
    description:
      'Implementación de programas de cumplimiento, Delegado de Protección de Datos externo, auditorías, gestión de riesgos, evaluaciones de impacto, contratos, políticas y procedimientos, gestión de incidentes y asesoramiento especializado.',
  },
  {
    title: 'Tecnología',
    description:
      'Contratos tecnológicos, software y SaaS, licenciamiento, servicios digitales, outsourcing, cloud computing, propiedad intelectual y acompañamiento jurídico en proyectos de transformación digital.',
  },
  {
    title: 'Telecomunicaciones',
    description:
      'Regulación sectorial, títulos habilitantes, servicios de telecomunicaciones, asuntos relacionados con espectro y servicios satelitales, contratos y procedimientos administrativos.',
  },
  {
    title: 'Asesoría corporativa',
    description:
      'Acompañamiento jurídico a empresas nacionales e internacionales, negociación contractual y soporte especializado a equipos legales, directivos y de negocio.',
  },
];

export const PHILOSOPHY = {
  premise: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio.',
  explanation:
    'Por eso procuro comprender el contexto de cada proyecto, identificar sus riesgos y traducir obligaciones jurídicas complejas en decisiones y soluciones que puedan aplicarse en la práctica.',
};

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
    title: '4. ¿Prestas servicios de conectividad, enlaces satelitales o requieres títulos habilitantes de ARCOTEL?',
    options: [
      { label: 'Sí, somos ISP o proveedor de telecomunicaciones', score: 4, riskNote: 'Requiere cumplimiento estricto de títulos ARCOTEL' },
      { label: 'Estamos planificando desplegar infraestructura o servicios de red', score: 3, riskNote: 'Requiere viabilidad regulatoria previa' },
      { label: 'No operamos en telecomunicaciones', score: 0 },
    ],
  },
];

export const FAQS = [
  {
    q: '¿Por qué es urgente que mi empresa en Ecuador se adecúe a la LOPDP?',
    a: 'La Ley Orgánica de Protección de Datos Personales (LOPDP) establece obligaciones directas para todas las organizaciones que traten datos en Ecuador. Su régimen sancionador contempla multas económicas y medidas correctivas ante incumplimientos o vulneraciones.',
  },
  {
    q: '¿Cuándo es necesario nombrar un Delegado de Protección de Datos (DPD)?',
    a: 'El DPD es obligatorio para entidades del sector público y organizaciones que realizan tratamiento a gran escala, datos sensibles o perfilamiento continuo. Muchas empresas eligen la modalidad de DPD Externo por eficiencia de costos, experiencia e independencia técnica.',
  },
  {
    q: '¿Qué diferencia a SmartLegalEC de un estudio jurídico tradicional?',
    a: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio. Entendemos la tecnología y la operación para estructurar contratos y medidas jurídicas que se apliquen en la práctica.',
  },
  {
    q: '¿Cómo coordinamos una primera consulta o diagnóstico?',
    a: 'Puedes escribirnos directamente a nuestro WhatsApp oficial o completar el formulario de contacto para agendar una sesión inicial con Luis Fernando Guerra Padilla.',
  },
];
