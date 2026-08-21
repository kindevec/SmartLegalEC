import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global handler for dynamic import chunk failures after new deployments
window.addEventListener('vite:preloadError', (event) => {
  console.warn('Vite preload error detected. Reloading page for new assets...', event);
  window.location.reload();
});

window.addEventListener('error', (e) => {
  if (
    e?.message?.includes('Failed to fetch dynamically imported module') ||
    e?.message?.includes('Expected a JavaScript-or-Wasm module script')
  ) {
    console.warn('Chunk script error caught. Reloading application...', e);
    window.location.reload();
  }
});

// Unregister PWA Service Worker if present
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
