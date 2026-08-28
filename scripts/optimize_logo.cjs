const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = path.resolve('..', 'logo.jpeg');
  const outDir = path.resolve('public', 'logos');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  const bgR = 247, bgG = 247, bgB = 247;
  
  // Find bounding box of logo content
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const dist = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
      if (dist > 12) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log('Detected Logo BBox:', { minX, maxX, minY, maxY, w: maxX - minX + 1, h: maxY - minY + 1 });
  
  // Add 16px padding
  const pad = 16;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, (maxX - minX + 1) + pad * 2);
  const cropH = Math.min(height - cropY, (maxY - minY + 1) + pad * 2);
  
  // Create RGBA buffers for:
  // 1. Color Transparent (original colors with transparent bg)
  // 2. White/Light Transparent (dark text turned to crisp white for dark navbar / footer)
  
  const colorBuffer = Buffer.alloc(cropW * cropH * 4);
  const whiteBuffer = Buffer.alloc(cropW * cropH * 4);
  
  for (let cy = 0; cy < cropH; cy++) {
    for (let cx = 0; cx < cropW; cx++) {
      const srcX = cropX + cx;
      const srcY = cropY + cy;
      const srcIdx = (srcY * width + srcX) * channels;
      const destIdx = (cy * cropW + cx) * 4;
      
      const r = data[srcIdx];
      const g = data[srcIdx+1];
      const b = data[srcIdx+2];
      
      // Calculate distance to background
      const dist = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
      
      let alpha = 0;
      if (dist <= 6) {
        alpha = 0;
      } else if (dist >= 30) {
        alpha = 1.0;
      } else {
        alpha = (dist - 6) / (30 - 6);
      }
      
      const aByte = Math.round(alpha * 255);
      
      if (aByte === 0) {
        colorBuffer[destIdx] = 0;
        colorBuffer[destIdx+1] = 0;
        colorBuffer[destIdx+2] = 0;
        colorBuffer[destIdx+3] = 0;
        
        whiteBuffer[destIdx] = 0;
        whiteBuffer[destIdx+1] = 0;
        whiteBuffer[destIdx+2] = 0;
        whiteBuffer[destIdx+3] = 0;
      } else {
        // Unblend background: true_c = (c - (1 - alpha) * bg) / alpha
        const unblend = (c, bg) => {
          const val = (c - (1 - alpha) * bg) / Math.max(alpha, 0.01);
          return Math.min(255, Math.max(0, Math.round(val)));
        };
        
        const trueR = unblend(r, bgR);
        const trueG = unblend(g, bgG);
        const trueB = unblend(b, bgB);
        
        colorBuffer[destIdx] = trueR;
        colorBuffer[destIdx+1] = trueG;
        colorBuffer[destIdx+2] = trueB;
        colorBuffer[destIdx+3] = aByte;
        
        // Check if color is part of dark navy text vs colorful shield icon
        const isNavyText = (trueR < 70 && trueG < 80 && trueB < 110);
        
        if (isNavyText) {
          whiteBuffer[destIdx] = 255;
          whiteBuffer[destIdx+1] = 255;
          whiteBuffer[destIdx+2] = 255;
          whiteBuffer[destIdx+3] = aByte;
        } else {
          // Keep colorful icon mark
          whiteBuffer[destIdx] = trueR;
          whiteBuffer[destIdx+1] = trueG;
          whiteBuffer[destIdx+2] = trueB;
          whiteBuffer[destIdx+3] = aByte;
        }
      }
    }
  }
  
  console.log('Generating optimized assets in WebP, AVIF, PNG...');
  
  const targets = [
    { buf: whiteBuffer, name: '10_horizontal_blanco_transparente' },
    { buf: whiteBuffer, name: '04_horizontal_blanco_fondo_oscuro' },
    { buf: colorBuffer, name: '09_horizontal_color_transparente' },
    { buf: colorBuffer, name: '01_horizontal_color_fondo_claro' },
    { buf: colorBuffer, name: '02_horizontal_color_fondo_azul_noche' },
  ];
  
  for (const t of targets) {
    const s = sharp(t.buf, { raw: { width: cropW, height: cropH, channels: 4 } });
    
    await s.clone().png({ quality: 100, compressionLevel: 9 }).toFile(path.join(outDir, `${t.name}.png`));
    await s.clone().webp({ quality: 96, lossless: false }).toFile(path.join(outDir, `${t.name}.webp`));
    await s.clone().avif({ quality: 92, lossless: false }).toFile(path.join(outDir, `${t.name}.avif`));
    console.log(`Saved ${t.name} (png, webp, avif)`);
  }
  
  // Also generate square icon / isotipo from the icon region if possible
  // Find icon bbox (left side of logo)
  let iconMinX = minX, iconMaxX = minX, iconMinY = minY, iconMaxY = maxY;
  // The icon is on the left
  const iconThresholdX = minX + (maxX - minX) * 0.32;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= iconThresholdX; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const dist = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
      if (dist > 15) {
        if (x > iconMaxX) iconMaxX = x;
        if (y < iconMinY) iconMinY = y;
        if (y > iconMaxY) iconMaxY = y;
      }
    }
  }
  
  const iconPad = 12;
  const iconCropX = Math.max(0, iconMinX - iconPad);
  const iconCropY = Math.max(0, iconMinY - iconPad);
  const iconCropW = (iconMaxX - iconMinX + 1) + iconPad * 2;
  const iconCropH = (iconMaxY - iconMinY + 1) + iconPad * 2;
  
  console.log('Detected Isotipo BBox:', { iconCropX, iconCropY, iconCropW, iconCropH });
  
  const iconBuffer = Buffer.alloc(iconCropW * iconCropH * 4);
  for (let cy = 0; cy < iconCropH; cy++) {
    for (let cx = 0; cx < iconCropW; cx++) {
      const srcX = iconCropX + cx;
      const srcY = iconCropY + cy;
      const srcIdx = (srcY * width + srcX) * channels;
      const destIdx = (cy * iconCropW + cx) * 4;
      
      const r = data[srcIdx];
      const g = data[srcIdx+1];
      const b = data[srcIdx+2];
      
      const dist = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
      let alpha = 0;
      if (dist <= 6) alpha = 0;
      else if (dist >= 30) alpha = 1.0;
      else alpha = (dist - 6) / 24;
      
      const aByte = Math.round(alpha * 255);
      if (aByte === 0) {
        iconBuffer[destIdx] = 0;
        iconBuffer[destIdx+1] = 0;
        iconBuffer[destIdx+2] = 0;
        iconBuffer[destIdx+3] = 0;
      } else {
        const unblend = (c, bg) => Math.min(255, Math.max(0, Math.round((c - (1 - alpha) * bg) / Math.max(alpha, 0.01))));
        iconBuffer[destIdx] = unblend(r, bgR);
        iconBuffer[destIdx+1] = unblend(g, bgG);
        iconBuffer[destIdx+2] = unblend(b, bgB);
        iconBuffer[destIdx+3] = aByte;
      }
    }
  }
  
  const iconSharp = sharp(iconBuffer, { raw: { width: iconCropW, height: iconCropH, channels: 4 } });
  const iconTargets = [
    '11_isotipo_color_transparente',
    '05_isotipo_color_fondo_claro',
    '06_isotipo_color_fondo_azul_noche'
  ];
  
  for (const it of iconTargets) {
    await iconSharp.clone().png({ quality: 100 }).toFile(path.join(outDir, `${it}.png`));
    await iconSharp.clone().webp({ quality: 96 }).toFile(path.join(outDir, `${it}.webp`));
    await iconSharp.clone().avif({ quality: 92 }).toFile(path.join(outDir, `${it}.avif`));
  }
  
  // Generate all favicons and touch icons
  await iconSharp.clone().resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-16x16.webp'));
  await iconSharp.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-32x32.webp'));
  await iconSharp.clone().resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'apple-touch-icon.webp'));
  await iconSharp.clone().resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-192x192.webp'));
  await iconSharp.clone().resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-512x512.webp'));
  await iconSharp.clone().resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-dark.webp'));
  await iconSharp.clone().resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 95 }).toFile(path.resolve('public', 'favicon-light.webp'));
  await iconSharp.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.resolve('public', 'favicon.ico'));
  await iconSharp.clone().resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.resolve('public', 'favicon.png'));
  
  console.log('All logo and favicon assets successfully generated!');
}

processLogo().catch(console.error);
