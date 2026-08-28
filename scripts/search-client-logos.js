import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targets = [
  { id: 'salazar', urls: ['https://oftalmologiaquito.com/', 'https://www.oftalmologodrraulsalazar.com/', 'https://oftalmologodrraulsalazar.com/'] },
  { id: 'zhm', urls: ['https://zhmseguros.com/', 'https://www.zhmseguros.com/'] },
  { id: 'ponteselva', urls: ['https://ponteselva.com.ec/', 'https://www.ponteselva.com.ec/', 'https://ponteselva.com/'] },
  { id: 'medicgo', urls: ['https://medicgo.ec/', 'https://www.medicgo.ec/', 'https://medicgo.com.ec/'] },
  { id: 'factec', urls: ['https://factec.com.ec/', 'https://www.factec.com.ec/', 'https://factec.ec/'] },
];

async function inspectSites() {
  const outDir = path.resolve('public/logos');

  for (const target of targets) {
    console.log(`\n========================================`);
    console.log(`🔎 Buscando para: ${target.id}`);
    
    let html = '';
    let usedUrl = '';
    
    for (const u of target.urls) {
      try {
        const res = await fetch(u, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
          signal: AbortSignal.timeout(8000),
        });
        if (res.ok) {
          html = await res.text();
          usedUrl = u;
          console.log(`   ✅ Conectado a: ${u}`);
          break;
        }
      } catch (e) {
        console.log(`   ⚠️ Falló ${u}: ${e.message}`);
      }
    }

    if (html && usedUrl) {
      const allImgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
      console.log(`   📸 Encontradas ${allImgs.length} imágenes en ${usedUrl}:`);
      allImgs.slice(0, 10).forEach(src => console.log(`      - ${src}`));

      // Buscar imagen de logo
      const logoCandidate = allImgs.find(src => {
        const s = src.toLowerCase();
        return s.includes('logo') || s.includes('brand') || s.includes('navbar') || s.includes('isotipo');
      });

      if (logoCandidate) {
        const fullLogoUrl = logoCandidate.startsWith('http') ? logoCandidate : new URL(logoCandidate, usedUrl).href;
        console.log(`   🎯 Descargando candidato: ${fullLogoUrl}`);
        try {
          const imgRes = await fetch(fullLogoUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            signal: AbortSignal.timeout(8000),
          });
          if (imgRes.ok) {
            const buf = Buffer.from(await imgRes.arrayBuffer());
            const webpPath = path.join(outDir, `${target.id}-logo.webp`);
            const pngPath = path.join(outDir, `${target.id}-logo.png`);
            fs.writeFileSync(pngPath, buf);
            await sharp(buf).webp({ quality: 90 }).toFile(webpPath);
            console.log(`   🎉 Guardado exitosamente: ${target.id}-logo.webp`);
          }
        } catch (err) {
          console.log(`   ❌ Error descargando logo:`, err.message);
        }
      }
    }
  }
}

inspectSites();
