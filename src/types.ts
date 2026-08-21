export type PageRoute = 'home' | 'areas' | 'area-detail' | 'about' | 'insights' | 'diagnostic' | 'contact';

export interface LegalArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'LOPDP & Privacidad' | 'Contratos Tech & SaaS' | 'Telecomunicaciones & ARCOTEL' | 'Inteligencia Artificial';
  date: string;
  readTime: string;
  author: string;
  keyPoints: string[];
  content: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'lopdp' | 'tech' | 'telecom';
  tag: string;
}

export interface PracticeArea {
  id: 'lopdp' | 'tech' | 'telecom';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  services: ServiceItem[];
  closingText: string;
  ctaText: string;
  whatsappMessage: string;
  regulations: string[];
  targetAudience: string[];
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface AboutQuadrant {
  title: string;
  iconName: string;
  items: string[];
}

export interface CorporateValue {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface DiagnosticQuestion {
  id: string;
  title: string;
  options: {
    label: string;
    score: number;
    riskNote?: string;
  }[];
}

