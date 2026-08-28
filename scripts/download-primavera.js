import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const candidateUrls = [
  'https://uepprimavera.edu.ec/assets/logo_header.png',
  'https://ueprimavera.edu.ec/assets/logo_header.png',
  'https://colegioprimavera.edu.ec/assets/logo_header.png',
  'https://uepprimavera.edu.ec/assets/img/logo_header.png',
  'https://uepprimavera.edu.ec/images/logo_header.png',
  'https://uepprimavera.edu.ec/',
];

async function checkPrimavera() {
  const outDir = path.resolve('public/logos');
  for (const u of candidateUrls) {
    try {
      console.log(`Verificando: ${u}`);
      const res = await fetch(u, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(6000),
      });
      console.log(`   Status ${res.status}, Content-Type: ${res.headers.get('content-type')}`);
      if (res.ok && res.headers.get('content-type')?.includes('image')) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(path.join(outDir, 'uep-primavera-logo.png'), buf);
        await sharp(buf).webp({ quality: 90 }).toFile(path.join(outDir, 'uep-primavera-logo.webp'));
        const meta = await sharp(buf).metadata();
        console.log(`   🎉 Guardado exitosamente: ${meta.width}x${meta.height}, ${meta.format}`);
        return;
      } else if (res.ok && res.headers.get('content-type')?.includes('html')) {
        const html = await res.text();
        const imgs = [...html.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
        console.log(`   Imágenes en HTML:`, imgs.filter(s => s.includes('logo') || s.includes('header')));
      }
    } catch (e) {
      console.log(`   ❌ Error ${u}: ${e.message}`);
    }
  }
}

checkPrimavera();
