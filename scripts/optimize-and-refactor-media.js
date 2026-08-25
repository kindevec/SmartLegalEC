import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Configuración
const CONFIG = {
  assetDirs: ['public', 'src/assets'],
  codeDirs: ['src', 'index.html'],
  extensionsToConvert: ['.png', '.jpg', '.jpeg'],
  targetFormats: ['webp', 'avif'], // Generar ambos formatos de alta eficiencia
  qualityWebp: 82,
  qualityAvif: 78,
  concurrencyLimit: 6,
  // Proteger favicons y open-graph de eliminación para compatibilidad con bots antiguos
  excludeFromDeletion: ['favicon', 'apple-touch', '06_isotipo'], 
  deleteOriginals: true,
};

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

async function convertImages() {
  const images = [];
  for (const dir of CONFIG.assetDirs) {
    images.push(...getFilesRecursively(dir, CONFIG.extensionsToConvert));
  }

  console.log(`🔍 [media-optimizer] Encontradas ${images.length} imágenes para optimizar.`);
  const conversionMap = new Map();
  let totalBytesOriginal = 0;
  let totalBytesNew = 0;
  let filesDeletedCount = 0;

  for (let i = 0; i < images.length; i += CONFIG.concurrencyLimit) {
    const batch = images.slice(i, i + CONFIG.concurrencyLimit);
    await Promise.all(batch.map(async (imgPath) => {
      const dir = path.dirname(imgPath);
      const ext = path.extname(imgPath);
      const base = path.basename(imgPath, ext);
      const origSize = fs.statSync(imgPath).size;
      totalBytesOriginal += origSize;

      const webpPath = path.join(dir, `${base}.webp`);
      const avifPath = path.join(dir, `${base}.avif`);

      // 1. Generar WebP si no existe o si es más nuevo
      if (!fs.existsSync(webpPath)) {
        await sharp(imgPath)
          .webp({ quality: CONFIG.qualityWebp, effort: 6 })
          .toFile(webpPath);
      }

      // 2. Generar AVIF si no existe
      if (!fs.existsSync(avifPath)) {
        await sharp(imgPath)
          .avif({ quality: CONFIG.qualityAvif, effort: 6 })
          .toFile(avifPath);
      }

      const webpSize = fs.existsSync(webpPath) ? fs.statSync(webpPath).size : origSize;
      totalBytesNew += webpSize;

      conversionMap.set(path.basename(imgPath), `${base}.webp`);

      // 3. Eliminar original si está configurado y no está en exclusión
      const isExcluded = CONFIG.excludeFromDeletion.some(pat => path.basename(imgPath).toLowerCase().includes(pat));
      if (CONFIG.deleteOriginals && !isExcluded && fs.existsSync(webpPath) && webpSize > 0) {
        fs.unlinkSync(imgPath);
        filesDeletedCount++;
      }
    }));
  }

  return { conversionMap, totalBytesOriginal, totalBytesNew, filesDeletedCount };
}

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
        // Reemplazar ocurrencias directas de imágenes eliminadas
        // (por ejemplo si un <img src="...jpg" /> apunta a un archivo que se convirtió y borró)
        const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        content = content.replace(regex, newName);
        modified = true;
        totalReplacements++;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`📝 [media-optimizer] Referencias actualizadas en: ${path.relative(process.cwd(), file)}`);
    }
  }

  return totalReplacements;
}

async function run() {
  console.log('⚡ ========================================================');
  console.log('⚡ MEDIA-OPTIMIZER: Iniciando optimización multimedia');
  console.log('⚡ ========================================================');

  const { conversionMap, totalBytesOriginal, totalBytesNew, filesDeletedCount } = await convertImages();
  const replacedCount = refactorCodeReferences(conversionMap);

  const savedMB = Math.max(0, (totalBytesOriginal - totalBytesNew) / (1024 * 1024));
  const savingsPct = totalBytesOriginal > 0 ? (((totalBytesOriginal - totalBytesNew) / totalBytesOriginal) * 100).toFixed(1) : '0';

  console.log('\n📊 ========================================================');
  console.log('📊 REPORTE DE OPTIMIZACIÓN MULTIMEDIA');
  console.log('📊 ========================================================');
  console.log(`✅ Archivos procesados a WebP/AVIF : ${conversionMap.size}`);
  console.log(`🗑️  Archivos no optimizados eliminados : ${filesDeletedCount}`);
  console.log(`✏️  Referencias de código refactorizadas : ${replacedCount}`);
  console.log(`💾 Reducción estimada de peso       : ${savedMB.toFixed(2)} MB (${savingsPct}%)`);
  console.log('========================================================\n');
}

run().catch(console.error);
