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

  // Robust Sync route with browser Hash and Pathname (Fluid Back/Forward navigation)
  useEffect(() => {
    const handleLocationChange = () => {
      // 1. Get raw path from either Hash (#/insights/slug) or Pathname (/insights/slug)
      let rawPath = '';
      if (window.location.hash) {
        rawPath = window.location.hash.replace(/^#\/?/, '');
      } else {
        rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      }

      // Clean query params or trailing slashes
      const cleanPath = rawPath.split('?')[0].replace(/^\/+|\/+$/g, '');

      if (cleanPath === '' || cleanPath === 'inicio' || cleanPath === 'home') {
        setCurrentPage('home');
        setSelectedArticleSlug(undefined);
      } else if (cleanPath === 'areas' || cleanPath === 'servicios') {
        setCurrentPage('areas');
        setSelectedArticleSlug(undefined);
      } else if (cleanPath.startsWith('area-')) {
        const area = cleanPath.replace('area-', '') as 'lopdp' | 'tech' | 'telecom';
        if (['lopdp', 'tech', 'telecom'].includes(area)) {
          setSelectedAreaId(area);
          setCurrentPage('area-detail');
          setSelectedArticleSlug(undefined);
        }
      } else if (cleanPath === 'sobre-nosotros' || cleanPath === 'sobre-mi' || cleanPath === 'about') {
        setCurrentPage('about');
        setSelectedArticleSlug(undefined);
      } else if (cleanPath.startsWith('insights') || cleanPath.startsWith('articulos')) {
        const parts = cleanPath.split('/');
        if (parts.length > 1 && parts[1].trim() !== '') {
          setSelectedArticleSlug(parts[1].trim());
        } else {
          setSelectedArticleSlug(undefined);
        }
        setCurrentPage('insights');
      } else if (cleanPath === 'diagnostico' || cleanPath === 'test-lopdp') {
        setCurrentPage('diagnostic');
        setSelectedArticleSlug(undefined);
      } else if (cleanPath === 'contacto' || cleanPath === 'contact') {
        setCurrentPage('contact');
        setSelectedArticleSlug(undefined);
      } else if (cleanPath === 'politica-de-privacidad' || cleanPath === 'privacidad' || cleanPath === 'privacy') {
        setCurrentPage('privacy');
        setSelectedArticleSlug(undefined);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
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
    let targetHash = '#/';

    if (params?.areaFilter) {
      setSelectedAreaFilter(params.areaFilter);
    }

    if (params?.areaId) {
      setSelectedAreaId(params.areaId);
      setSelectedArticleSlug(undefined);
      targetHash = `#/area-${params.areaId}`;
    } else if (params?.articleSlug) {
      setSelectedArticleSlug(params.articleSlug);
      targetHash = `#/insights/${params.articleSlug}`;
    } else {
      switch (route) {
        case 'home':
          targetHash = '#/';
          setSelectedArticleSlug(undefined);
          break;
        case 'areas':
          targetHash = '#/areas';
          setSelectedArticleSlug(undefined);
          break;
        case 'about':
          targetHash = '#/sobre-nosotros';
          setSelectedArticleSlug(undefined);
          break;
        case 'insights':
          targetHash = '#/insights';
          setSelectedArticleSlug(undefined);
          break;
        case 'diagnostic':
          targetHash = '#/diagnostico';
          setSelectedArticleSlug(undefined);
          break;
        case 'contact':
          targetHash = '#/contacto';
          setSelectedArticleSlug(undefined);
          break;
        case 'privacy':
          targetHash = '#/politica-de-privacidad';
          setSelectedArticleSlug(undefined);
          break;
      }
    }

    // Update URL hash smoothly, enabling native browser back/forward history
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
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
