import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const clients = [
  {
    id: 'metroeje',
    name: 'Metroeje',
    directLogo: 'https://metroeje.com/assets/logo-metroeje-BSqBUBB1.png',
    site: 'https://metroeje.com',
  },
  {
    id: 'globalsupport',
    name: 'Global Support',
    site: 'https://globalsupport.com.ec',
  },
  {
    id: 'salazar',
    name: 'Dr. Raúl Salazar',
    site: 'https://oftalmologodrraulsalazar.com',
  },
  {
    id: 'zhm',
    name: 'ZHM Seguros',
    site: 'https://zhmseguros.com',
  },
  {
    id: 'ponteselva',
    name: 'Ponte Selva',
    site: 'https://ponteselva.com',
  },
  {
    id: 'medicgo',
    name: 'MedicGo',
    site: 'https://medicgo.ec',
  },
];

async function findAndDownloadLogos() {
  const outDir = path.resolve('public/logos');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const client of clients) {
    try {
      console.log(`\n🔍 Verificando ${client.name} (${client.site})...`);
      let logoUrl = client.directLogo;

      if (!logoUrl) {
        const res = await fetch(client.site, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
          signal: AbortSignal.timeout(8000),
        });

        if (res.ok) {
          const html = await res.text();
          const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
          const candidate = imgMatches.find(src => {
            const s = src.toLowerCase();
            return s.includes('logo') || s.includes('brand') || s.includes('isotipo') || s.includes('header');
          });

          if (candidate) {
            logoUrl = candidate.startsWith('http') ? candidate : new URL(candidate, client.site).href;
            console.log(`   🎯 Logo encontrado: ${logoUrl}`);
          } else {
            console.log(`   ⚠️ No se encontró etiqueta de logo directa en HTML. Primeras imágenes:`, imgMatches.slice(0, 3));
          }
        }
      }

      if (logoUrl) {
        const imgRes = await fetch(logoUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          signal: AbortSignal.timeout(8000),
        });

        if (imgRes.ok) {
          const buffer = Buffer.from(await imgRes.arrayBuffer());
          const pngPath = path.join(outDir, `${client.id}-logo.png`);
          const webpPath = path.join(outDir, `${client.id}-logo.webp`);
          fs.writeFileSync(pngPath, buffer);

          // Convert to webp with sharp
          await sharp(buffer)
            .webp({ quality: 90 })
            .toFile(webpPath);

          const meta = await sharp(buffer).metadata();
          console.log(`   ✅ Guardado: ${client.id}-logo.webp (${meta.width}x${meta.height}, ${meta.format})`);
        } else {
          console.log(`   ❌ Error al descargar logo ${logoUrl}: Status ${imgRes.status}`);
        }
      }
    } catch (err) {
      console.error(`   ❌ Error procesando ${client.name}:`, err.message);
    }
  }
}

findAndDownloadLogos();
