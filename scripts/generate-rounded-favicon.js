import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function run() {
  const sourcePath = path.resolve('public/logos/06_isotipo_color_fondo_azul_noche.png');
  
  const SIZES = [
    { size: 512, name: 'favicon.png', radius: 105 },
    { size: 512, name: 'favicon-512x512.png', radius: 105 },
    { size: 192, name: 'favicon-192x192.png', radius: 40 },
    { size: 180, name: 'apple-touch-icon.png', radius: 38 },
    { size: 48, name: 'favicon-48x48.png', radius: 10 },
    { size: 32, name: 'favicon-32x32.png', radius: 7 },
    { size: 16, name: 'favicon-16x16.png', radius: 4 },
  ];

  console.log('✨ Generando favicons con esquinas redondeadas desde 06_isotipo_color_fondo_azul_noche.png...');

  for (const item of SIZES) {
    const mask = Buffer.from(`<svg width="${item.size}" height="${item.size}"><rect x="0" y="0" width="${item.size}" height="${item.size}" rx="${item.radius}" ry="${item.radius}" fill="#ffffff"/></svg>`);
    const dest = path.resolve('public', item.name);
    await sharp(sourcePath)
      .resize(item.size, item.size, { fit: 'cover' })
      .composite([{ input: mask, blend: 'dest-in' }])
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(dest);
    console.log(`✅ Creado: public/${item.name} (${item.size}x${item.size}, radio: ${item.radius}px)`);
  }

  // Favicon .ico
  const mask32 = Buffer.from('<svg width="32" height="32"><rect x="0" y="0" width="32" height="32" rx="7" ry="7" fill="#ffffff"/></svg>');
  await sharp(sourcePath)
    .resize(32, 32, { fit: 'cover' })
    .composite([{ input: mask32, blend: 'dest-in' }])
    .png()
    .toFile(path.resolve('public/favicon.ico'));
  console.log('✅ Creado: public/favicon.ico');

  // WebP & AVIF
  const mask512 = Buffer.from('<svg width="512" height="512"><rect x="0" y="0" width="512" height="512" rx="105" ry="105" fill="#ffffff"/></svg>');
  await sharp(sourcePath)
    .resize(512, 512, { fit: 'cover' })
    .composite([{ input: mask512, blend: 'dest-in' }])
    .webp({ quality: 90 })
    .toFile(path.resolve('public/favicon.webp'));

  await sharp(sourcePath)
    .resize(512, 512, { fit: 'cover' })
    .composite([{ input: mask512, blend: 'dest-in' }])
    .avif({ quality: 85 })
    .toFile(path.resolve('public/favicon.avif'));
  console.log('✅ Creados: public/favicon.webp y public/favicon.avif');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
