---
name: media-optimizer
description: >-
  Convierte y optimiza recursos multimedia (imagenes PNG, JPG, GIF, SVG a WebP y AVIF,
  y video/audio a formatos ligeros) aplicando perfiles de compresion, generacion de variantes
  responsivas, refactorizacion automatica de codigo (reemplazo de extensiones en imports/src)
  y eliminacion de archivos fuente no optimizados. Usar cuando el usuario solicite convertir
  imagenes a webp/avif, optimizar assets web, reducir peso de archivos multimedia o automatizar
  el refactor multimedia en todo el repositorio.
---

# Media Optimizer & Automated Code Refactor

Esta skill automatiza la detección, conversión, refactorización de código fuente y limpieza de archivos multimedia obsoletos en proyectos web (React, Vite, Next.js, Vue, Astro, etc.).

---

## Capacidades Principales
1. **Detección Automática de Medios:** Escanea directorios de assets (`public/`, `src/assets/`, etc.) buscando archivos sin optimizar (`.png`, `.jpg`, `.jpeg`, `.bmp`).
2. **Conversión de Alto Rendimiento:** Convierte a WebP/AVIF usando compresión balanceada (calidad 80-85%) con control de concurrencia para evitar saturación de CPU/RAM.
3. **Refactorización de Código en Cascada:** Busca y reemplaza automáticamente todas las llamadas e importaciones en archivos de código (`.tsx`, `.ts`, `.jsx`, `.js`, `.html`, `.css`, `.json`).
4. **Limpieza y Ahorro de Ancho de Banda:** Elimina de forma segura los archivos pesados no optimizados para evitar que se suban al bundle de producción o consuman ancho de banda.
5. **Auditoría y Reporte:** Imprime un reporte detallado con la cantidad de archivos procesados, referencias de código modificadas y porcentaje total de megabytes/kilobytes ahorrados.

---

## Riesgos Técnicos & Prevención (Gotchas)

### 1. Control de Concurrencia (Evitar Heap Out of Memory)
* Al procesar cientos de imágenes, nunca usar `Promise.all(allImages.map(...))` sin límite.
* **Solución:** Utilizar procesamiento por lotes (*batch chunking*) con un límite de concurrencia de 4 a 8 tareas simultáneas según los núcleos de CPU disponibles.

### 2. Preservación de Originales vs. Limpieza de Build
* **Riesgo:** Si se eliminan los archivos fuente de alta resolución, se pierde la versión máster para futuras ediciones gráficas en Figma o Photoshop.
* **Buena Práctica:** Mantener una copia en un directorio `.raw-assets/` o confirmar que el repositorio Git tiene un commit de respaldo antes de la eliminación física.

### 3. Excepciones para Open Graph (`og:image`) y Favicons
* Algunos bots y rastreadores de redes sociales antiguos (Facebook/WhatsApp/Twitter) prefieren miniaturas en formato `.png` o `.jpg`.
* **Regla:** Excluir de la eliminación las imágenes referenciadas en metaetiquetas `og:image` críticas o favicons `.ico` / `.png`.

---

## Script Automatizado de Detección, Conversión y Refactorización

Puedes ejecutar este script en Node.js para realizar todo el ciclo automáticamente:

```javascript
/**
 * scripts/optimize-and-refactor-media.js
 * Requiere: npm install --save-dev sharp glob
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Configuración de Directorios y Opciones
const CONFIG = {
  assetDirs: ['public', 'src/assets'],
  codeDirs: ['src', 'index.html'],
  extensionsToConvert: ['.png', '.jpg', '.jpeg'],
  targetFormat: 'webp', // 'webp' o 'avif'
  quality: 82,
  concurrencyLimit: 5,
  excludePatterns: ['favicon', 'og-image', '06_isotipo'], // Proteger logos/OG si se desea
  deleteOriginals: true, // Eliminar el JPG/PNG tras convertir con éxito
};

// Utilidad para buscar archivos recursivamente
function getFilesRecursively(dir, filterExts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, filterExts));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (!filterExts || filterExts.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

// 2. Función de Conversión con Control de Concurrencia
async function convertImages() {
  const images = [];
  for (const dir of CONFIG.assetDirs) {
    images.push(...getFilesRecursively(dir, CONFIG.extensionsToConvert));
  }

  const filteredImages = images.filter(img => 
    !CONFIG.excludePatterns.some(pat => path.basename(img).includes(pat))
  );

  console.log(`🔍 Encontradas ${filteredImages.length} imágenes para optimizar.`);
  const conversionMap = new Map(); // Mapa de { oldFilename: newFilename }
  let totalBytesSaved = 0;

  for (let i = 0; i < filteredImages.length; i += CONFIG.concurrencyLimit) {
    const batch = filteredImages.slice(i, i + CONFIG.concurrencyLimit);
    await Promise.all(batch.map(async (imgPath) => {
      const dir = path.dirname(imgPath);
      const ext = path.extname(imgPath);
      const base = path.basename(imgPath, ext);
      const outPath = path.join(dir, `${base}.${CONFIG.targetFormat}`);

      const origSize = fs.statSync(imgPath).size;

      // Conversión con Sharp
      await sharp(imgPath)
        .webp({ quality: CONFIG.quality, effort: 6 })
        .toFile(outPath);

      const newSize = fs.statSync(outPath).size;
      const saved = origSize - newSize;
      totalBytesSaved += Math.max(0, saved);

      conversionMap.set(path.basename(imgPath), `${base}.${CONFIG.targetFormat}`);

      if (CONFIG.deleteOriginals && fs.existsSync(outPath) && newSize > 0) {
        fs.unlinkSync(imgPath);
      }
    }));
  }

  return { conversionMap, totalBytesSaved };
}

// 3. Reemplazo de Referencias en Código
function refactorCodeReferences(conversionMap) {
  if (conversionMap.size === 0) return 0;

  const codeFiles = [];
  const codeExts = ['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.json'];

  for (const dirOrFile of CONFIG.codeDirs) {
    if (fs.existsSync(dirOrFile)) {
      const stat = fs.statSync(dirOrFile);
      if (stat.isDirectory()) {
        codeFiles.push(...getFilesRecursively(dirOrFile, codeExts));
      } else if (codeExts.includes(path.extname(dirOrFile).toLowerCase())) {
        codeFiles.push(dirOrFile);
      }
    }
  }

  let totalReplacements = 0;

  for (const file of codeFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    for (const [oldName, newName] of conversionMap.entries()) {
      if (content.includes(oldName)) {
        // Reemplazar globalmente respetando la cadena exacta
        const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        content = content.replace(regex, newName);
        modified = true;
        totalReplacements++;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✏️ Referencias actualizadas en: ${path.relative(process.cwd(), file)}`);
    }
  }

  return totalReplacements;
}

// 4. Ejecución Principal
async function main() {
  console.log('🚀 Iniciando proceso de optimización multimedia y refactorización...');
  const { conversionMap, totalBytesSaved } = await convertImages();
  const replacedCount = refactorCodeReferences(conversionMap);

  console.log('\n📊 RESUMEN DE OPTIMIZACIÓN:');
  console.log(`✅ Archivos convertidos a WebP: ${conversionMap.size}`);
  console.log(`📝 Referencias en código actualizadas: ${replacedCount}`);
  console.log(`💾 Ahorro total de espacio: ${(totalBytesSaved / 1024 / 1024).toFixed(2)} MB\n`);
}

main().catch(console.error);
```

---

## Flujo de Trabajo Recomendado

1. **Paso 1:** Ejecutar `git status` y asegurarse de que el árbol de trabajo esté limpio o respaldado.
2. **Paso 2:** Ejecutar la automatización de la skill para convertir medios y actualizar archivos `.tsx`, `.html`, `.css`.
3. **Paso 3:** Ejecutar `npm run build` para garantizar que no existan rutas rotas ni errores de tipado en TypeScript.
4. **Paso 4:** Confirmar con `git commit` y desplegar el nuevo bundle ultra-optimizado.
