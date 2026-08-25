---
name: resource-preload-optimization
description: >-
  Audits and resolves browser preload warnings, misconfigured `<link rel="preload">` tags,
  and unneeded static assets in Single Page Applications (SPA), Vite, and React projects.
  Use when encountering console warnings like "The resource was preloaded using link preload
  but not used within a few seconds", or when optimizing Largest Contentful Paint (LCP)
  and network waterfalls.
---

# Resource Preload Optimization & SPA Asset Auditing

This skill provides an authoritative guide and step-by-step diagnostic workflow for detecting, auditing, and fixing resource preloading warnings, unoptimized static assets, and LCP bottlenecks in modern Single Page Applications (React, Vite, Vue, etc.).

---

## 1. Problem Diagnosis: The Preload Warning

### Symptom
The browser console throws warnings such as:
```text
The resource https://domain.com/asset.avif was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
```

### Root Causes in SPAs
1. **Route Mismatch in Static HTML (`index.html`)**:
   * A `<link rel="preload" as="image" href="/hero-home.avif" />` is declared in `index.html`.
   * When users navigate or land directly on non-home routes (e.g., `/contacto`, `/servicios`), `index.html` is parsed, triggering the preload. Because that specific image is never rendered on `/contacto`, the browser discards the preloaded bytes and flags an unused preload warning.
2. **Asset Path or Format Desynchronization**:
   * The `<link rel="preload">` specifies an old image filename or format (e.g., `/hero-warm-legal.avif`), but the React component was updated to render a new image (e.g., `/hero-panoramic-legaltech.avif`).
3. **Missing or Incorrect Attributes**:
   * Missing `as="image"`, `type="image/avif"`, or `crossorigin` on font/CORS resources.
4. **Redundant Preloading with Modern Native Image Attributes**:
   * In modern browsers, `<img loading="eager" fetchpriority="high" ...>` directly informs the preload scanner without requiring a static `<link rel="preload">` in `index.html`.

---

## 2. Standard Diagnostic & Resolution Workflow

### Step 1: Search for Hardcoded Preloads in Static HTML
Search `index.html` and any entry HTML templates for `<link rel="preload"`:
```bash
# Locate all preload links in the repository
grep -rn "rel=\"preload\"" index.html public/ src/
```

### Step 2: Correlate Preloads with Actual Component Usage
For each preloaded resource, verify:
* Is this resource used on **every single route** (e.g., global logo, primary web font)?
* If it is only used on a specific page/component (e.g., Hero image on Home):
  * **Do NOT** preload it globally in `index.html`.
  * Instead, let the component handle high-priority loading natively.

### Step 3: Implement Native High-Priority Loading in Components
Replace static `index.html` preloads with component-level native hints:

```tsx
// Example: High-priority responsive Hero Image in React
<picture className="w-full h-full">
  <source srcSet="/hero-image.avif" type="image/avif" />
  <source srcSet="/hero-image.webp" type="image/webp" />
  <img
    src="/hero-image.jpg"
    alt="Hero Description"
    width="1920"
    height="1080"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    className="w-full h-full object-cover"
  />
</picture>
```

### Step 4: Keep Only Truly Universal Preloads in `index.html`
In `index.html`, retain only critical universal assets:
* **Preconnect** for Google Fonts or external CDN origins:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ```
* **Critical primary font files** (if self-hosted and required for initial text rendering):
  ```html
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
  ```

---

## 3. Verification & Quality Assurance Checklist

- [ ] **Console Cleanliness**: Navigate to all top-level routes (e.g., `/`, `/contacto`, `/areas`, `/sobre-nosotros`) and verify zero preload console warnings.
- [ ] **LCP Performance**: Ensure Largest Contentful Paint (LCP) remains under 1.5s using Chrome DevTools Lighthouse / Network tab.
- [ ] **Network Waterfall**: Verify that images on subpages are only requested when those pages are loaded.
- [ ] **Build Validation**: Run `npm run build` to confirm zero bundle errors.
