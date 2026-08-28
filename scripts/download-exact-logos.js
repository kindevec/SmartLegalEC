import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const exactLogos = [
  {
    id: 'salazar',
    url: 'https://oftalmologiaquito.com/wp-content/uploads/2025/04/CENTRO-OFTALMOLOGICO-DR-RAUL-SALAZAR-HORIZONTAL.png',
  },
  {
    id: 'ponte-selva',
    url: 'https://www.ponteselva.com.ec/wp-content/uploads/2024/08/IPPS-NEW-WEB-1.png',
  },
  {
    id: 'medicgo',
    url: 'https://medicgo.com.ec/wp-content/uploads/2022/04/logo_color.png',
  },
  {
    id: 'metroeje',
    url: 'https://metroeje.com/assets/logo-metroeje-BSqBUBB1.png',
  },
  {
    id: 'globalsupport',
    url: 'https://globalsupport.com.ec/wp-content/uploads/2021/08/LOGO-BLANCO-02.png',
  },
];

async function downloadExact() {
  const outDir = path.resolve('public/logos');
  for (const item of exactLogos) {
    try {
      console.log(`Descargando ${item.id} desde ${item.url}...`);
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        const pngPath = path.join(outDir, `${item.id}-logo.png`);
        const webpPath = path.join(outDir, `${item.id}-logo.webp`);
        fs.writeFileSync(pngPath, buf);
        await sharp(buf).webp({ quality: 92 }).toFile(webpPath);
        const meta = await sharp(buf).metadata();
        console.log(`✅ ${item.id} guardado (${meta.width}x${meta.height}, ${meta.format})`);
      } else {
        console.log(`❌ Error ${item.id}: status ${res.status}`);
      }
    } catch (e) {
      console.log(`❌ Error ${item.id}: ${e.message}`);
    }
  }
}

downloadExact();
