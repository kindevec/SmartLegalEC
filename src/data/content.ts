import { PracticeArea, Pillar, Metric, AboutQuadrant, CorporateValue, DiagnosticQuestion, LegalArticle, ClientItem } from '../types';

export const BRAND_INFO = {
  name: 'SMARTLEGALEC',
  slogan: 'Tecnología • Protección de Datos • Telecomunicaciones',
  domain: 'smartlegalec.com',
  location: 'Quito, Ecuador',
  founder: 'Luis Fernando Guerra Padilla',
  founderTitle: 'Especializado en Protección de Datos, Tecnología y Telecomunicaciones',
  founderEmail: 'info@smartlegalec.com',
  email: 'info@smartlegalec.com',
  founderPhone: '+593 98 442 4134',
  address: 'Quito, Ecuador',
  schedule: 'Lunes a Viernes: 08:30 - 18:00 (Presencial & Virtual)',
  whatsappNumber: '593984424134',
  whatsappUrl: 'https://wa.me/593984424134',
  linkedinUrl: 'https://www.linkedin.com/company/smartlegalec',
  instagramUrl: 'https://www.instagram.com/smartlegal_ec?igshid=YTQwZjQ0NmI0OA%3D%3D',
  tiktokUrl: 'https://www.tiktok.com/@smartlegalec',
};

export const HERO_PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Soluciones legales estratégicas y prácticas',
    description: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio.',
  },
  {
    number: '02',
    title: 'Conocimiento jurídico y visión tecnológica',
    description: 'Comprendemos la realidad técnica, operativa y comercial de cada proyecto para estructurar acuerdos sólidos.',
  },
  {
    number: '03',
    title: 'Enfoque en riesgos, cumplimiento y negocio',
    description: 'Traducimos obligaciones jurídicas complejas en decisiones prácticas que impulsan la escalabilidad empresarial.',
  },
];

export const METRICS: Metric[] = [
  {
    value: '10+',
    label: 'Años de experiencia',
    detail: 'Asesorando empresas nacionales y multinacionales en sectores altamente regulados.',
  },
  {
    value: '50+',
    label: 'Organizaciones y proyectos',
    detail: 'Acompañados con éxito en adecuación LOPDP, contratos tecnológicos y títulos habilitantes.',
  },
  {
    value: '12+',
    label: 'Industrias y sectores',
    detail: 'Consumo masivo, salud, educación, telecomunicaciones, tecnología, seguros e industria.',
  },
  {
    value: '100%',
    label: 'Compromiso e independencia',
    detail: 'Atención personalizada, rigurosa y directa liderada por Luis Fernando Guerra.',
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
    ctaText: 'Evaluar cumplimiento LOPDP',
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
        image: '/services/lopdp/implementacion-lopdp.jpg',
      },
      {
        id: 'lopdp-2',
        category: 'lopdp',
        tag: 'Delegado DPD Externo',
        title: 'Delegado de Protección de Datos externo',
        shortDesc: 'Supervisión independiente, asesoramiento continuo y acompañamiento.',
        fullDesc:
          'Prestamos el servicio de DPD externo para organizaciones que requieren o deciden contar con esta figura, brindando asesoramiento, supervisión y acompañamiento independiente en materia de protección de datos.',
        image: '/services/lopdp/dpd-externo.jpg',
      },
      {
        id: 'lopdp-3',
        category: 'lopdp',
        tag: 'Auditoría & Diagnóstico',
        title: 'Auditorías y evaluaciones de cumplimiento',
        shortDesc: 'Revisión de procesos, documentos y prácticas operativas.',
        fullDesc:
          'Revisamos procesos, documentos y prácticas para identificar incumplimientos, riesgos y oportunidades de mejora.',
        image: '/services/lopdp/auditorias-cumplimiento.jpg',
      },
      {
        id: 'lopdp-4',
        category: 'lopdp',
        tag: 'Evaluación de Impacto',
        title: 'Gestión de riesgos y evaluaciones de impacto',
        shortDesc: 'Identificación de riesgos y desarrollo de evaluaciones de impacto.',
        fullDesc:
          'Identificamos y evaluamos los riesgos derivados del tratamiento de datos personales y desarrollamos evaluaciones de impacto cuando la naturaleza del tratamiento lo requiere.',
        image: '/services/lopdp/gestion-riesgos-eipd.jpg',
      },
      {
        id: 'lopdp-5',
        category: 'lopdp',
        tag: 'Contratos con Terceros',
        title: 'Contratos y relaciones con terceros',
        shortDesc: 'Contratos de encargo, transferencias y corresponsabilidad.',
        fullDesc:
          'Elaboramos y revisamos contratos de encargo, transferencia, corresponsabilidad y otras relaciones jurídicas que involucren tratamiento o intercambio de datos personales.',
        image: '/services/lopdp/contratos-terceros.jpg',
      },
      {
        id: 'lopdp-6',
        category: 'lopdp',
        tag: 'Privacidad desde el Diseño',
        title: 'Privacidad en proyectos y nuevas tecnologías',
        shortDesc: 'Protección de datos desde el diseño en apps, IA, biometría y videovigilancia.',
        fullDesc:
          'Asesoramos en la incorporación de protección de datos desde el diseño en aplicaciones, plataformas, inteligencia artificial, biometría, videovigilancia y otros proyectos tecnológicos.',
        image: '/services/lopdp/privacidad-tecnologias.jpg',
      },
      {
        id: 'lopdp-7',
        category: 'lopdp',
        tag: 'Respuesta a Incidentes',
        title: 'Gestión de incidentes y vulneraciones',
        shortDesc: 'Evaluación jurídica inmediata y determinación de acciones y notificaciones.',
        fullDesc:
          'Acompañamos la evaluación jurídica de incidentes de seguridad y la determinación de las acciones y notificaciones que correspondan.',
        image: '/services/lopdp/gestion-incidentes.jpg',
      },
      {
        id: 'lopdp-8',
        category: 'lopdp',
        tag: 'Gobierno de Datos',
        title: 'Políticas, procedimientos y documentación',
        shortDesc: 'Instrumentos jurídicos y organizativos para integrar la protección a los procesos.',
        fullDesc:
          'Desarrollamos instrumentos jurídicos y organizativos que permitan integrar la protección de datos a los procesos de la organización.',
        image: '/services/lopdp/politicas-documentacion.jpg',
      },
      {
        id: 'lopdp-9',
        category: 'lopdp',
        tag: 'Capacitación y Cultura',
        title: 'Capacitación',
        shortDesc: 'Capacitaciones generales o especializadas para directivos y equipos operativos.',
        fullDesc:
          'Diseñamos capacitaciones generales o especializadas para equipos directivos, jurídicos, comerciales, tecnológicos, talento humano y demás áreas que intervienen en el tratamiento de información.',
        image: '/services/lopdp/capacitacion-corporativa.jpg',
      },
    ],
  },
  {
    id: 'tech',
    name: 'Tecnología y Negocios Digitales',
    badge: 'Derecho Digital & Tecnología',
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
      'Empresas de desarrollo de software, plataformas digitales y aplicaciones móviles',
      'Compañías en procesos de transformación digital y contratación de servicios en la nube',
      'Distribuidores de tecnología, canales, integradores y fabricantes de software',
      'Negocios digitales, comercio electrónico y plataformas de intermediación',
      'Startups tecnológicas y proveedores de servicios de Inteligencia Artificial',
    ],
    services: [
      {
        id: 'tech-1',
        category: 'tech',
        tag: 'Licencias & Suscripciones',
        title: 'Contratos de software y suscripciones digitales',
        shortDesc: 'Licenciamiento, suscripción, implementación, soporte y mantenimiento.',
        fullDesc:
          'Elaboramos, revisamos y negociamos contratos de licenciamiento, suscripción, implementación, soporte, mantenimiento y prestación de servicios tecnológicos.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-2',
        category: 'tech',
        tag: 'Desarrollo de Software',
        title: 'Desarrollo e implementación de software',
        shortDesc: 'Alcance, entregables, niveles de servicio, propiedad intelectual y garantías.',
        fullDesc:
          'Definimos jurídicamente aspectos relacionados con alcance, entregables, niveles de servicio, propiedad intelectual, aceptación, responsabilidades, garantías y terminación.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-3',
        category: 'tech',
        tag: 'Servicios en la Nube',
        title: 'Servicios en la nube e infraestructura digital',
        shortDesc: 'Contratación de infraestructura en la nube, seguridad y continuidad de servicio.',
        fullDesc:
          'Asesoramos en la contratación de infraestructura, plataformas y servicios en la nube, incluyendo responsabilidades, seguridad, disponibilidad, tratamiento de información y continuidad del servicio.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-4',
        category: 'tech',
        tag: 'Proveedores Tecnológicos',
        title: 'Tercerización y proveedores tecnológicos',
        shortDesc: 'Riesgos contractuales, confidencialidad, propiedad intelectual y datos.',
        fullDesc:
          'Analizamos y estructuramos relaciones con proveedores tecnológicos, considerando riesgos contractuales, confidencialidad, seguridad, propiedad intelectual y protección de datos.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-5',
        category: 'tech',
        tag: 'Comercio Electrónico',
        title: 'Comercio electrónico y negocios digitales',
        shortDesc: 'Términos y condiciones, contratación electrónica y privacidad en plataformas.',
        fullDesc:
          'Asesoramos en términos y condiciones, contratación electrónica, relaciones con consumidores, privacidad y demás aspectos jurídicos de plataformas y servicios digitales.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-6',
        category: 'tech',
        tag: 'Inteligencia Artificial',
        title: 'Inteligencia artificial y nuevas tecnologías',
        shortDesc: 'Riesgos jurídicos en soluciones de IA y tecnologías emergentes.',
        fullDesc:
          'Analizamos los riesgos jurídicos asociados con la implementación y utilización de soluciones basadas en inteligencia artificial y otras tecnologías emergentes.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-7',
        category: 'tech',
        tag: 'Propiedad Intelectual',
        title: 'Propiedad intelectual y tecnología',
        shortDesc: 'Licencias, titularidad de desarrollos, derechos sobre software y contenidos.',
        fullDesc:
          'Asesoramos en licencias, titularidad de desarrollos, derechos sobre software, contenidos y otros activos vinculados con proyectos tecnológicos.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'tech-8',
        category: 'tech',
        tag: 'Negociación Contractual',
        title: 'Negociación de contratos tecnológicos',
        shortDesc: 'Acuerdos jurídicamente sólidos y comercialmente viables.',
        fullDesc:
          'Acompañamos negociaciones entre clientes y proveedores para identificar riesgos y construir acuerdos jurídicamente sólidos y comercialmente viables.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'telecom',
    name: 'Telecomunicaciones y Regulación',
    badge: 'Regulación & Telecomunicaciones',
    tagline: 'Asesoría jurídica para un sector altamente regulado y en constante evolución',
    description:
      'El desarrollo de servicios de telecomunicaciones requiere comprender no solamente el negocio y la tecnología, sino también un marco regulatorio especializado que condiciona su implementación y operación. SmartLegalEC asesora a empresas nacionales e internacionales en proyectos relacionados con telecomunicaciones, conectividad y servicios tecnológicos regulados en Ecuador.',
    iconName: 'Radio',
    closingText:
      '¿Estás desarrollando un proyecto de telecomunicaciones en Ecuador? Podemos ayudarte a determinar sus requisitos regulatorios y acompañarte durante su implementación.',
    ctaText: 'Consultar proyectos de telecomunicaciones',
    whatsappMessage: 'Hola SmartLegalEC, necesito asesoría jurídica y regulatoria en proyectos de telecomunicaciones / títulos habilitantes.',
    regulations: [
      'Ley Orgánica de Telecomunicaciones (LOT)',
      'Reglamento General a la Ley Orgánica de Telecomunicaciones',
      'Resoluciones y Regulaciones Técnicas del sector',
      'Plan Nacional de Frecuencias y Régimen Tarifario de Espectro Radioeléctrico',
      'Disposiciones de la Unión Internacional de Telecomunicaciones (UIT)',
    ],
    targetAudience: [
      'Operadores de telecomunicaciones portadores, móviles y de valor agregado',
      'Proveedores de Acceso a Internet y conectividad y redes privadas',
      'Empresas internacionales de comunicaciones satelitales y segmento espacial',
      'Empresas de infraestructura de torres, coubicación y tendido de fibra óptica',
      'Empresas que implementan proyectos de conectividad y redes privadas de datos',
    ],
    services: [
      {
        id: 'telecom-1',
        category: 'telecom',
        tag: 'Títulos Habilitantes',
        title: 'Títulos habilitantes',
        shortDesc: 'Solicitud, modificación, renovación y gestión de títulos habilitantes.',
        fullDesc:
          'Asesoramos en la identificación, solicitud, modificación, renovación y gestión de títulos habilitantes necesarios para la prestación de servicios de telecomunicaciones.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'telecom-2',
        category: 'telecom',
        tag: 'Servicios de Telecomunicaciones',
        title: 'Servicios de telecomunicaciones',
        shortDesc: 'Requisitos jurídicos y regulatorios para modelos de negocio de telecomunicaciones.',
        fullDesc:
          'Analizamos los requisitos jurídicos y regulatorios aplicables a proyectos y modelos de negocio que involucren servicios de telecomunicaciones.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'telecom-3',
        category: 'telecom',
        tag: 'Espectro Radioeléctrico',
        title: 'Espectro radioeléctrico',
        shortDesc: 'Asesoría en uso, asignación y regulación de frecuencias del espectro.',
        fullDesc:
          'Brindamos asesoría jurídica en asuntos relacionados con el uso, asignación y regulación del espectro.',
        image: '/services/telecom/espectro-radioelectrico.jpg',
      },
      {
        id: 'telecom-4',
        category: 'telecom',
        tag: 'Servicios Satelitales',
        title: 'Servicios satelitales y segmento espacial',
        shortDesc: 'Segmento espacial, Internet satelital y comunicaciones móviles por satélite.',
        fullDesc:
          'Acompañamos proyectos relacionados con segmento espacial, servicios satelitales, acceso a Internet y comunicaciones móviles por satélite.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'telecom-5',
        category: 'telecom',
        tag: 'Cumplimiento Regulatorio',
        title: 'Cumplimiento regulatorio',
        shortDesc: 'Obligaciones derivadas de títulos habilitantes y disposiciones sectoriales.',
        fullDesc:
          'Asesoramos en el cumplimiento de obligaciones derivadas de títulos habilitantes, regulación sectorial y disposiciones emitidas por las autoridades competentes.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'telecom-6',
        category: 'telecom',
        tag: 'Procedimientos Administrativos',
        title: 'Procedimientos administrativos',
        shortDesc: 'Acompañamiento en trámites, requerimientos y procedimientos sancionadores.',
        fullDesc:
          'Brindamos acompañamiento jurídico en trámites, requerimientos y procedimientos administrativos relacionados con la operación de servicios regulados.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'telecom-7',
        category: 'telecom',
        tag: 'Contratos de Infraestructura',
        title: 'Contratos de telecomunicaciones y tecnología',
        shortDesc: 'Contratos de infraestructura, conectividad, proveedores y proyectos.',
        fullDesc:
          'Elaboramos y revisamos contratos vinculados con infraestructura, conectividad, servicios, proveedores y proyectos del sector.',
        image: '/services/telecom/contratos-telecomunicaciones.jpg',
      },
      {
        id: 'telecom-8',
        category: 'telecom',
        tag: 'Relaciones Institucionales',
        title: 'Relaciones con autoridades',
        shortDesc: 'Gestiones y acompañamiento jurídico ante las autoridades del sector.',
        fullDesc:
          'Acompañamos jurídicamente las gestiones que deban realizarse ante las autoridades del sector y otras instituciones relacionadas con el proyecto.',
        image: '/services/telecom/relaciones-autoridades.jpg',
      },
    ],
  },
];

export const FOUNDER_PROFILE = {
  name: 'Luis Fernando Guerra Padilla',
  title: 'Especializado en Protección de Datos, Tecnología y Telecomunicaciones',
  bio: [
    'Soy Luis Fernando Guerra Padilla, abogado ecuatoriano con más de 15 años de experiencia profesional, especializado en protección de datos personales, tecnología, telecomunicaciones y asesoría jurídica empresarial.',
    'Mi carrera se ha desarrollado principalmente en sectores en los que el derecho debe convivir permanentemente con la tecnología, la regulación y las necesidades del negocio.',
    'Durante cerca de diez años formé parte del equipo jurídico - regulatorio del principal operador de telecomunicaciones del Ecuador. Esta experiencia me permitió trabajar desde dentro de una organización de gran escala, asesorando a distintas áreas de negocio en regulación de telecomunicaciones, protección de datos, derecho digital, contratos y nuevos productos, así como en procedimientos administrativos ante autoridades regulatorias.',
    'Posteriormente, me incorporé a una firma jurídica con amplia trayectoria en el sector tecnológico, donde asesoré a empresas nacionales e internacionales y consolidé mi especialización en privacidad, protección de datos y tecnología, sobre la base de la experiencia corporativa y regulatoria adquirida durante cerca de nueve años como abogado corporativo interno.',
    'Actualmente asesoro a organizaciones de distintos sectores y actúo como Delegado de Protección de Datos externo, acompañando a empresas no solo en el cumplimiento de la Ley Orgánica de Protección de Datos Personales, sino también en la toma de decisiones relacionadas con riesgos, proveedores, contratos, nuevas tecnologías, incidentes y proyectos que involucran tratamiento de información personal.',
  ],
  workingPhilosophy: {
    title: 'Mi forma de trabajar',
    premise: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para el negocio.',
    detail: 'Por eso procuro comprender el contexto de cada proyecto, identificar sus riesgos y traducir obligaciones jurídicas complejas en decisiones y soluciones que puedan aplicarse en la práctica.',
  },
  professionalExperience: [
    {
      area: 'Protección de Datos y Privacidad',
      description: 'Implementación de programas de cumplimiento, Delegado de Protección de Datos externo, auditorías, gestión de riesgos, evaluaciones de impacto, contratos, políticas y procedimientos, gestión de incidentes y asesoramiento especializado.',
      icon: 'ShieldCheck',
    },
    {
      area: 'Tecnología',
      description: 'Contratos tecnológicos, software y licenciamiento, suscripciones digitales, tercerización de servicios, computación en la nube, propiedad intelectual y acompañamiento jurídico en proyectos de transformación digital.',
      icon: 'Code2',
    },
    {
      area: 'Telecomunicaciones',
      description: 'Regulación sectorial, títulos habilitantes, servicios de telecomunicaciones, asuntos relacionados con espectro y servicios satelitales, contratos y procedimientos administrativos.',
      icon: 'Radio',
    },
    {
      area: 'Asesoría corporativa',
      description: 'Acompañamiento jurídico a empresas nacionales e internacionales, negociación contractual y soporte especializado a equipos legales, directivos y de negocio.',
      icon: 'Scale',
    },
  ],
};

export const TRUSTED_CLIENTS: ClientItem[] = [
  {
    id: 'quala',
    name: 'QUALA ECUADOR S.A.',
    category: 'Consumo Masivo Multinacional',
    description: 'Multinacional de consumo masivo con presencia en 8 países de Centro y Sur América.',
    badge: 'Multinacional',
    url: 'https://www.quala.com.ec/',
  },
  {
    id: 'metroeje',
    name: 'METROEJE CIA. LTDA.',
    category: 'Infraestructura & Transporte',
    description: 'Empresa especializada en proyectos viales y transporte en Ecuador.',
    badge: 'Infraestructura',
    url: 'https://www.metroeje.com/',
  },
  {
    id: 'global-support',
    name: 'GLOBAL SUPPORT S.A.',
    category: 'Servicios Corporativos & TI',
    description: 'Compañía de soporte operativo y soluciones tecnológicas empresariales.',
    badge: 'Servicios TI',
    url: 'https://globalsupport.com.ec/',
  },
  {
    id: 'factec',
    name: 'FACTEC S.A.',
    category: 'Tecnología & Facturación Digital',
    description: 'Soluciones tecnológicas empresariales y sistemas de facturación electrónica.',
    badge: 'Tecnología',
  },
  {
    id: 'salazar',
    name: 'CENTRO OFTALMOLÓGICO DR. RAÚL SALAZAR',
    category: 'Salud & Especialidades Médicas',
    description: 'Institución médica de referencia en salud visual en Quito.',
    badge: 'Salud',
    url: 'https://oftalmologiaquito.com/',
  },
  {
    id: 'zhm',
    name: 'ZHM SEGUROS S.A.',
    category: 'Seguros Corporativos',
    description: 'Agencia Asesora Productora de Seguros especializada en pólizas corporativas.',
    badge: 'Seguros',
    url: 'https://www.zhmseguros.com/',
  },
  {
    id: 'scrumz',
    name: 'SCRUMZ GESTIÓN INMOBILIARIA CIA. LTDA.',
    category: 'Desarrollo Inmobiliario',
    description: 'Firma de gestión y desarrollo inmobiliario corporativo y residencial.',
    badge: 'Inmobiliario',
    url: 'https://www.facebook.com/Scrumz.ec/',
  },
  {
    id: 'ponte-selva',
    name: 'INDUSTRIA PIOLERA PONTE SELVA S.A.',
    category: 'Manufactura & Textil',
    description: 'Empresa textil y manufacturera tradicional en Ecuador.',
    badge: 'Industria',
    url: 'https://www.ponteselva.com.ec/',
  },
  {
    id: 'medicgo',
    name: 'MEDICGO S.A.S.',
    category: 'Salud Digital & Asistencia Médica',
    description: 'Plataforma y servicios de atención médica y telemedicina.',
    badge: 'Salud Digital',
    url: 'https://medicgo.com.ec/',
  },
  {
    id: 'fias',
    name: 'FONDO DE INVERSIÓN AMBIENTAL SOSTENIBLE (FIAS)',
    category: 'Fondos Ambientales & Sostenibilidad',
    description: 'Fondo de inversión fiduciario ambiental para conservación y desarrollo sostenible.',
    badge: 'Sostenibilidad',
    url: 'https://fias.org.ec/',
  },
  {
    id: 'equipos-cotopaxi',
    name: 'EQUIPOS COTOPAXI',
    category: 'Equipamiento & Maquinaria',
    description: 'Suministro y soporte de maquinaria y equipamiento técnico industrial.',
    badge: 'Equipamiento',
  },
  {
    id: 'primavera',
    name: 'UNIDAD EDUCATIVA PRIMAVERA',
    category: 'Educación Integral',
    description: 'Institución educativa en Tumbaco con formación integral para niños y jóvenes.',
    badge: 'Educación',
    url: 'https://www.ueprimavera.edu.ec/',
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'art-1',
    slug: 'estructurar-juridicamente-ecosistema-tecnologico',
    title: 'Estructurar jurídicamente un ecosistema tecnológico',
    category: 'Contratos Tecnológicos',
    date: '20 de Febrero, 2026',
    readTime: '6 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    image: '/articles/ecosistema-tecnologico.jpg',
    summary: 'En los negocios tecnológicos, un contrato rara vez funciona de manera aislada. Claves para modelar las distintas relaciones entre fabricantes, distribuidores, aliados comerciales, canales de venta, clientes y usuarios finales manteniendo coherencia jurídica y comercial.',
    keyPoints: [
      'Condiciones comerciales y reglas aplicables a cada canal de distribución.',
      'Licenciamiento, condiciones de uso y propiedad intelectual a lo largo de la cadena.',
      'Evitar vacíos entre lo que una empresa asume frente a un fabricante y lo exigible a sus clientes o usuarios finales.',
      'El Derecho como herramienta para hacer viable y escalable el negocio cuando acompaña al modelo comercial.',
    ],
    content: [
      'En los negocios tecnológicos, un contrato rara vez funciona de manera aislada.',
      'Tuve la oportunidad de participar en la estructuración integral del modelo contractual y comercial regional de un grupo dedicado a la distribución de tecnología, con operaciones en varios países.',
      'El proyecto implicó modelar las distintas relaciones que forman parte del negocio: fabricantes, distribuidores, aliados comerciales, canales de venta, clientes y usuarios finales, procurando que las condiciones jurídicas y comerciales mantuvieran coherencia a lo largo de toda la cadena.',
      'El trabajo comprendió no solo contratos, sino también aspectos como:\n• Condiciones comerciales y reglas aplicables a cada canal.\n• Licenciamiento y condiciones de uso.\n• Responsabilidades de los distintos participantes.\n• Precios, pagos y condiciones asociadas a la comercialización.\n• Garantías y niveles de servicio.\n• Soporte técnico.\n• Propiedad intelectual.\n• Confidencialidad y protección de datos personales.\n• Limitaciones de responsabilidad.\n• Terminación y efectos posteriores de las relaciones comerciales.',
      'Uno de los principales retos de este tipo de estructuras es evitar vacíos entre lo que una empresa asume frente a un fabricante y aquello que puede trasladar o exigir a sus aliados comerciales, clientes o usuarios finales.',
      'Por eso, estructurar jurídicamente un negocio tecnológico exige algo más que redactar buenos contratos.',
      'Es necesario entender cómo se comercializa el producto, cómo se relacionan sus participantes, cómo circulan las obligaciones y dónde se encuentran los riesgos.',
      'Cuando el modelo contractual acompaña correctamente al modelo comercial, el Derecho deja de ser únicamente un mecanismo de protección y se convierte también en una herramienta para hacer viable y escalable el negocio.',
    ],
  },
  {
    id: 'art-2',
    slug: 'abogado-in-house-prevenir-contener-generar-oportunidades',
    title: 'Abogado corporativo interno: prevenir, contener y generar oportunidades',
    category: 'Asesoría Corporativa',
    date: '12 de Febrero, 2026',
    readTime: '7 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    image: '/articles/abogado-in-house.jpg',
    summary: 'La función jurídica dentro de una empresa va mucho más allá de responder consultas o gestionar contingencias. La asesoría legal puede aportar al negocio desde tres dimensiones: prevención, contención y generación de oportunidades.',
    keyPoints: [
      'Prevención: Anticiparse a los riesgos participando oportunamente en nuevos productos, decisiones comerciales y proyectos tecnológicos.',
      'Contención: Estrategia y coordinación técnica en procedimientos sancionatorios (alrededor del 80% de resultados favorables en ~25 casos).',
      'Generación de oportunidades: Conocer a fondo la regulación para identificar alternativas que permitan lanzar productos o alianzas.',
      'El rol del asesor legal como facilitador estratégico que comprende a fondo la operación.',
    ],
    content: [
      'Trabajar durante varios años como abogado corporativo interno en una de las principales compañías de telecomunicaciones del país me permitió entender que la función jurídica dentro de una empresa va mucho más allá de responder consultas o gestionar contingencias.',
      'La asesoría legal puede aportar al negocio desde tres dimensiones: prevención, contención y generación de oportunidades.',
      'PREVENCIÓN:\nEl primer trabajo del abogado es anticiparse. Participar oportunamente en nuevos productos, contratos, decisiones comerciales, proyectos tecnológicos o cambios regulatorios permite identificar riesgos antes de que se conviertan en contingencias. Prevenir no significa impedir que el negocio avance. Significa encontrar alternativas que permitan alcanzar el objetivo empresarial con un nivel de riesgo jurídicamente razonable.',
      'CONTENCIÓN:\nNo todos los riesgos pueden evitarse. Durante mi trayectoria corporativa interna tuve a mi cargo aproximadamente 25 procedimientos administrativos sancionatorios, además de otros asuntos regulatorios y de competencia, alcanzando resultados favorables en alrededor del 80 % de los casos. Cuando una contingencia se materializa, el rol jurídico cambia: hay que entender los hechos, coordinar con las áreas técnicas y comerciales, reconstruir decisiones, analizar evidencia y desarrollar una estrategia que permita reducir su impacto.',
      'GENERACIÓN DE OPORTUNIDADES:\nEsta es probablemente la dimensión menos visible de la asesoría jurídica. Conocer profundamente la regulación permite también identificar qué sí puede hacerse. Una interpretación regulatoria, una estructura contractual diferente o la identificación temprana de una alternativa jurídica pueden permitir lanzar un producto, desarrollar una alianza o ejecutar una operación que inicialmente parecía compleja.',
      'Por eso, el abogado corporativo interno no debería ser únicamente quien identifica riesgos. Debe entender el negocio lo suficiente para prevenir cuando sea posible, contener cuando sea necesario y encontrar oportunidades cuando el marco jurídico lo permita.',
    ],
  },
  {
    id: 'art-3',
    slug: 'proteccion-de-datos-no-existe-implementacion-igual-a-otra',
    title: 'Protección de datos: no existe una implementación igual a otra',
    category: 'LOPDP & Privacidad',
    date: '25 de Enero, 2026',
    readTime: '6 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    image: '/articles/proteccion-datos-implementacion.jpg',
    summary: 'Implementar un marco de protección de datos personales no consiste en replicar políticas, formatos o plantillas de una organización a otra. La metodología real exige entender la organización antes de diseñar su cumplimiento.',
    keyPoints: [
      'Diversidad sectorial: Salud, educación, telecomunicaciones, tecnología financiera, comercio minorista, construcción y consumo masivo manejan riesgos totalmente distintos.',
      'Escenarios regionales y locales: Armonización de marcos multinacionales con las exigencias puntuales de la LOPDP en Ecuador.',
      'Metodología práctica: Conocer procesos, tratamientos, proveedores, sistemas y estructura antes de redactar documentos.',
      'La protección de datos no se implementa desde una plantilla. Se implementa desde la realidad de cada organización.',
    ],
    content: [
      'Implementar un marco de protección de datos personales no consiste en replicar políticas, formatos o procedimientos de una organización a otra.',
      'A lo largo de los últimos años he tenido la oportunidad de participar en implementaciones y proyectos de cumplimiento de protección de datos en organizaciones nacionales y grupos con presencia regional, pertenecientes a sectores muy distintos.',
      'Entre ellos: tecnología y distribución de software, telecomunicaciones, instituciones financieras, salud, educación, comercio minorista, productos de consumo masivo, construcción, industria, asistencia social, organizaciones no gubernamentales y entidades vinculadas al deporte, entre otros.',
      'Algunos proyectos han implicado implementar integralmente la normativa ecuatoriana. Otros han requerido estructurar marcos de privacidad para grupos con operaciones en distintos países, armonizando criterios y necesidades regionales con las exigencias locales.',
      'También existen escenarios distintos: organizaciones que empiezan desde cero y otras que deben fortalecer su cumplimiento como consecuencia de observaciones, procesos de control o medidas dispuestas por la Autoridad de Protección de Datos Personales.',
      'Cada realidad exige una aproximación diferente. Una institución de salud maneja información y riesgos distintos a los de un distribuidor regional de tecnología. Una organización de asistencia humanitaria enfrenta desafíos diferentes a una institución financiera. Y una organización sometida a medidas correctivas necesita prioridades distintas a una empresa que está construyendo preventivamente su programa de cumplimiento.',
      'Sin embargo, la metodología siempre debe comenzar por lo mismo: entender la organización antes de diseñar su cumplimiento.',
      'Eso implica conocer sus procesos, tratamientos de datos, sistemas, proveedores, transferencias, estructura organizacional, riesgos y necesidades reales. Solo después tiene sentido desarrollar políticas, contratos, registros, evaluaciones de riesgo, procedimientos de derechos, gestión de incidentes, programas de capacitación y demás instrumentos de cumplimiento.',
      'Después de trabajar con organizaciones tan distintas, una conclusión permanece: La protección de datos no se implementa desde una plantilla. Se implementa desde la realidad de cada organización.',
    ],
  },
  {
    id: 'art-4',
    slug: 'ser-delegado-de-proteccion-de-datos-mucho-mas-que-cumplir-un-requisito',
    title: 'Ser Delegado de Protección de Datos: mucho más que cumplir un requisito',
    category: 'LOPDP & Privacidad',
    date: '10 de Enero, 2026',
    readTime: '7 min de lectura',
    author: 'Luis Fernando Guerra Padilla',
    image: '/articles/delegado-proteccion-datos.jpg',
    summary: 'El verdadero valor del Delegado de Protección de Datos aparece cuando conoce suficientemente la organización para convertirse en un punto de conexión entre la normativa y la operación, manteniendo una independencia fundamental.',
    keyPoints: [
      'El DPD como punto de conexión: Integrar la normativa a la operación en sectores como educación, salud, comercio minorista, construcción y tecnología.',
      'Actividades operativas: Asesoría en proyectos, revisión de contratos de proveedores, gestión de riesgos, EIPD y atención de derechos.',
      'Independencia fundamental: El DPD asesora, supervisa y advierte sin sustituir a la administración ni entrar en conflictos de interés.',
      'Acompañamiento preventivo: Lograr involucrarse oportunamente para ayudar a que muchos problemas no lleguen a producirse.',
    ],
    content: [
      'El Delegado de Protección de Datos Personales no debería convertirse en una figura que existe únicamente para cumplir una obligación normativa.',
      'Actualmente ejerzo como Delegado de Protección de Datos externo para organizaciones de distintos sectores, entre ellos educación, salud, tecnología, productos de consumo masivo, construcción, asistencia social, servicios, comercio minorista y tecnologías de la información.',
      'Esa diversidad me ha permitido comprobar que el verdadero valor del DPD aparece cuando conoce suficientemente la organización para convertirse en un punto de conexión entre la normativa y la operación.',
      'En la práctica, el trabajo va mucho más allá de responder consultas sobre la Ley. Implica, entre otras actividades:\n• Asesorar sobre nuevos tratamientos y proyectos.\n• Revisar contratos y relaciones con proveedores.\n• Evaluar riesgos relacionados con datos personales.\n• Acompañar evaluaciones de impacto.\n• Asesorar frente a incidentes y vulneraciones de seguridad.\n• Supervisar la atención de derechos de los titulares.\n• Capacitar y generar cultura interna.\n• Realizar seguimiento al programa de cumplimiento.\n• Emitir criterios con independencia cuando una decisión puede generar riesgos para los titulares o para la propia organización.\n• Servir como punto de contacto frente a la Autoridad de Protección de Datos Personales.',
      'Existe además un elemento que considero fundamental: la independencia. El DPD asesora, supervisa y advierte. No sustituye a la administración ni debe convertirse en quien toma las decisiones que posteriormente tendrá que supervisar.',
      'Precisamente por eso, un DPD externo puede aportar una mirada independiente y, al mismo tiempo, aprovechar la experiencia obtenida frente a problemáticas similares en organizaciones de diferentes industrias.',
      'Después de ejercer esta función en distintos sectores, tengo claro que un buen DPD no es aquel que aparece únicamente cuando existe un problema. Es aquel que logra involucrarse suficientemente para ayudar a que muchos de esos problemas no lleguen a producirse.',
    ],
  },
];

export const ABOUT_QUADRANTS: AboutQuadrant[] = [
  {
    title: 'Formación Académica',
    iconName: 'GraduationCap',
    items: [
      'Estudios universitarios y de posgrado relacionados con derecho, empresa, tecnología y áreas de especialización.',
      'Actualización continua en estándares internacionales de Privacidad (RGPD / LOPDP) y Gobernanza Digital.',
      'Enfoque interdisciplinario combinando rigor jurídico con comprensión de arquitecturas técnicas y de negocio.',
    ],
  },
  {
    title: 'Experiencia y especialización',
    iconName: 'Briefcase',
    items: [
      'Trayectoria profesional consolidada en protección de datos, tecnología, telecomunicaciones y asesoría empresarial.',
      'Implementación integral de programas LOPDP, función de DPD externo y estructuración de contratos de software y suscripciones digitales.',
      'Asesoría técnica y regulatoria en proyectos de conectividad, telecomunicaciones y gestiones regulatorias.',
    ],
  },
  {
    title: 'Actividad Profesional',
    iconName: 'Users',
    items: [
      'Participación activa en organizaciones profesionales, gremios, comités jurídicos y eventos especializados.',
      'Expositor y conferencista en foros sobre derecho digital, ciberseguridad, privacidad e inteligencia artificial.',
      'Vinculación con el ecosistema empresarial, tecnológico y de innovación en Ecuador y la región.',
    ],
  },
  {
    title: 'Publicaciones y Medios',
    iconName: 'FileText',
    items: [
      'Artículos, análisis, entrevistas, conferencias y participación en medios sobre protección de datos, tecnología y telecomunicaciones.',
      'Análisis técnico-jurídico sobre la aplicación de nuevas leyes y marcos regulatorios digitales.',
      'Generación de criterios prácticos para directivos, comités de cumplimiento y líderes de tecnología.',
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
      'Contratos tecnológicos, software y licenciamiento, suscripciones digitales, tercerización de servicios, computación en la nube, propiedad intelectual y acompañamiento jurídico en proyectos de transformación digital.',
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
    tagline: 'Rigor jurídico y práctico',
    description: 'Una solución jurídica debe ser técnicamente correcta, pero también debe funcionar para la operación real del negocio.',
    iconName: 'Award',
  },
  {
    title: 'Integridad',
    tagline: 'Independencia y confidencialidad',
    description: 'Actuamos con estricto secreto profesional, transparencia en cada recomendación y la independencia necesaria para proteger a la organización.',
    iconName: 'Shield',
  },
  {
    title: 'Innovación',
    tagline: 'Visión tecnológica aplicada',
    description: 'Comprendemos la realidad técnica, operativa y comercial de cada proyecto para estructurar acuerdos sólidos y viables.',
    iconName: 'Zap',
  },
  {
    title: 'Compromiso',
    tagline: 'Acompañamiento cercano',
    description: 'Nos involucramos suficientemente para anticipar contingencias y ayudar a que los problemas no lleguen a producirse.',
    iconName: 'HeartHandshake',
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'q1',
    title: '1. ¿Tu organización trata bases de datos de clientes, usuarios, empleados o proveedores en Ecuador?',
    options: [
      { label: 'Sí, contamos con bases de datos de clientes, colaboradores y proveedores', score: 3, riskNote: 'Sujeto obligatorio a la LOPDP' },
      { label: 'Solo de colaboradores internos (nómina/RRHH)', score: 2, riskNote: 'Aplica LOPDP en ámbito laboral' },
      { label: 'No estamos seguros de nuestro inventario de datos', score: 4, riskNote: 'Riesgo alto por falta de registro de actividades' },
    ],
  },
  {
    id: 'q2',
    title: '2. ¿Cuentas con políticas de privacidad actualizadas, cláusulas de consentimiento y contratos de encargo con proveedores?',
    options: [
      { label: 'Sí, redactadas e implementadas con asesoría especializada', score: 1 },
      { label: 'Tenemos documentos genéricos o plantillas descargadas de internet', score: 4, riskNote: 'Riesgo crítico: La protección de datos no se implementa desde plantillas' },
      { label: 'Aún no hemos implementado políticas formales', score: 5, riskNote: 'Riesgo de sanciones por incumplimiento normativo' },
    ],
  },
  {
    id: 'q3',
    title: '3. ¿Tu empresa desarrolla software, contrata suscripciones digitales, utiliza infraestructura en la nube o implementa Inteligencia Artificial?',
    options: [
      { label: 'Sí, contratamos o desarrollamos software y servicios en la nube', score: 3, riskNote: 'Requiere blindaje contractual y acuerdos de nivel de servicio' },
      { label: 'Operamos plataformas digitales o comercio electrónico', score: 3, riskNote: 'Requiere términos, condiciones y privacidad' },
      { label: 'Nuestra operación es mayoritariamente tradicional', score: 1 },
    ],
  },
  {
    id: 'q4',
    title: '4. ¿Prestas servicios de conectividad, enlaces satelitales o requieres títulos habilitantes?',
    options: [
      { label: 'Sí, somos proveedor de internet, operador o prestador de telecomunicaciones', score: 4, riskNote: 'Requiere cumplimiento estricto de títulos habilitantes' },
      { label: 'Estamos planificando desplegar infraestructura o servicios de red', score: 3, riskNote: 'Requiere viabilidad regulatoria previa' },
      { label: 'No operamos en telecomunicaciones', score: 0 },
    ],
  },
];

export const FAQS = [
  {
    q: '¿Por qué es fundamental que mi empresa en Ecuador se adecúe a la LOPDP?',
    a: 'La protección de datos personales es una obligación transversal. No se trata únicamente de tener políticas, sino de gestionar los riesgos y establecer medidas que funcionen en la operación diaria, evitando contingencias y sanciones de la Autoridad.',
  },
  {
    q: '¿Cuál es el valor real de un Delegado de Protección de Datos (DPD) externo?',
    a: 'El DPD externo aporta independencia técnica, supervisión especializada y la experiencia obtenida frente a problemáticas similares en diversas industrias, ayudando a que los problemas no lleguen a producirse.',
  },
  {
    q: '¿Cómo deben estructurarse los contratos de software y tecnología?',
    a: 'Estructurar jurídicamente un negocio tecnológico exige entender cómo se comercializa el producto, cómo circulan las obligaciones y dónde están los riesgos, para que el modelo contractual acompañe y haga viable el negocio.',
  },
  {
    q: '¿Cómo coordinamos una primera consulta o diagnóstico?',
    a: 'Puedes escribirnos directamente a nuestro WhatsApp oficial o completar el formulario de contacto para revisar tu situación actual y definir las acciones necesarias.',
  },
];
