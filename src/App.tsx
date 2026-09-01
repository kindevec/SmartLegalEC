/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ComplianceDiagnostic } from './components/ComplianceDiagnostic';

// Immediate Load for LCP / Hero
import { HomePage } from './pages/HomePage';

// Robust dynamic import wrapper that handles stale CDN chunks on new deploys
function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(() =>
    factory().catch((error) => {
      // If a chunk failed to load (e.g. after a new deploy), force a fresh reload
      console.warn('Chunk load error, reloading page to fetch latest version...', error);
      window.location.reload();
      return new Promise<{ default: T }>(() => {});
    })
  );
}

// Lazy Loaded Secondary Routes with Auto-Recovery
const PracticeAreasPage = lazyWithRetry(() => import('./pages/PracticeAreasPage').then(m => ({ default: m.PracticeAreasPage })));
const AreaDetailPage = lazyWithRetry(() => import('./pages/AreaDetailPage').then(m => ({ default: m.AreaDetailPage })));
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const InsightsPage = lazyWithRetry(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const DiagnosticPage = lazyWithRetry(() => import('./pages/DiagnosticPage').then(m => ({ default: m.DiagnosticPage })));
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazyWithRetry(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedAreaId, setSelectedAreaId] = useState<'lopdp' | 'tech' | 'telecom'>('lopdp');
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<'all' | 'lopdp' | 'tech' | 'telecom'>('all');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | undefined>(undefined);
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);

  // Sync route with clean browser pathname (HTML5 History API)
  useEffect(() => {
    const handleLocationChange = () => {
      // Support migration if a user arrives with a legacy hash URL
      if (window.location.hash) {
        const legacyHash = window.location.hash.replace('#', '').replace('/', '');
        window.history.replaceState({}, '', legacyHash ? `/${legacyHash}` : '/');
      }

      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (path === '' || path === 'inicio' || path === 'home') {
        setCurrentPage('home');
      } else if (path === 'areas' || path === 'servicios') {
        setCurrentPage('areas');
      } else if (path.startsWith('area-')) {
        const area = path.replace('area-', '') as 'lopdp' | 'tech' | 'telecom';
        if (['lopdp', 'tech', 'telecom'].includes(area)) {
          setSelectedAreaId(area);
          setCurrentPage('area-detail');
        }
      } else if (path === 'sobre-nosotros' || path === 'sobre-mi' || path === 'about') {
        setCurrentPage('about');
      } else if (path.startsWith('insights') || path.startsWith('articulos')) {
        const parts = path.split('/');
        if (parts.length > 1) {
          setSelectedArticleSlug(parts[1]);
        }
        setCurrentPage('insights');
      } else if (path === 'diagnostico' || path === 'test-lopdp') {
        setCurrentPage('diagnostic');
      } else if (path === 'contacto' || path === 'contact') {
        setCurrentPage('contact');
      } else if (path === 'politica-de-privacidad' || path === 'privacidad' || path === 'privacy') {
        setCurrentPage('privacy');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Dynamic Theme-Aware Smart Favicon Sync (Light & Dark Browser Theme)
  useEffect(() => {
    const updateFavicon = (e: MediaQueryListEvent | MediaQueryList) => {
      const isDark = e.matches;
      const iconPath = isDark ? '/favicon-dark.webp' : '/favicon-light.webp';
      const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement | null;
      const appleIcon = document.getElementById('dynamic-apple-icon') as HTMLLinkElement | null;
      if (favicon) favicon.href = iconPath;
      if (appleIcon) appleIcon.href = iconPath;
    };

    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(matcher);

    if (matcher.addEventListener) {
      matcher.addEventListener('change', updateFavicon);
      return () => matcher.removeEventListener('change', updateFavicon);
    }
  }, []);

  const navigateTo = (
    route: PageRoute,
    params?: { 
      areaId?: 'lopdp' | 'tech' | 'telecom'; 
      articleSlug?: string;
      areaFilter?: 'all' | 'lopdp' | 'tech' | 'telecom';
    }
  ) => {
    let targetPath = '/';

    if (params?.areaFilter) {
      setSelectedAreaFilter(params.areaFilter);
    }

    if (params?.areaId) {
      setSelectedAreaId(params.areaId);
      targetPath = `/area-${params.areaId}`;
    } else if (params?.articleSlug) {
      setSelectedArticleSlug(params.articleSlug);
      targetPath = `/insights/${params.articleSlug}`;
    } else {
      switch (route) {
        case 'home':
          targetPath = '/';
          break;
        case 'areas':
          targetPath = '/areas';
          break;
        case 'about':
          targetPath = '/sobre-nosotros';
          break;
        case 'insights':
          targetPath = '/insights';
          break;
        case 'diagnostic':
          targetPath = '/diagnostico';
          break;
        case 'contact':
          targetPath = '/contacto';
          break;
        case 'privacy':
          targetPath = '/politica-de-privacidad';
          break;
      }
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentPage(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0A66FF] selection:text-white">
      {/* Institutional Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
      />

      {/* Main Multi-Page Route Render */}
      <main className="flex-1 w-full max-w-full bg-[#F8FAFC]">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 py-16">
              <div className="w-8 h-8 border-3 border-[#0A66FF] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-semibold text-slate-500">Cargando SmartLegalEC...</span>
            </div>
          }
        >
          {currentPage === 'home' && (
            <HomePage
              onNavigate={navigateTo}
              onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
            />
          )}

          {currentPage === 'areas' && (
            <PracticeAreasPage
              onNavigate={navigateTo}
              onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
              initialFilter={selectedAreaFilter}
              onFilterChange={setSelectedAreaFilter}
            />
          )}

          {currentPage === 'area-detail' && (
            <AreaDetailPage
              areaId={selectedAreaId}
              onNavigate={navigateTo}
              onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={navigateTo} />
          )}

          {currentPage === 'insights' && (
            <InsightsPage
              initialArticleSlug={selectedArticleSlug}
              onNavigate={navigateTo}
              onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
            />
          )}

          {currentPage === 'diagnostic' && (
            <DiagnosticPage onNavigate={navigateTo} />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onNavigate={navigateTo}
              onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
            />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage
              onNavigate={navigateTo}
            />
          )}
        </Suspense>
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
      />

      {/* Desktop Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Ergonomic Mobile Bottom Nav - Fixed at Screen Bottom */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
      />

      {/* Quick Interactive Compliance Diagnostic Modal */}
      <ComplianceDiagnostic
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
      />
    </div>
  );
}
