import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const url = 'https://scontent.fmec3-1.fna.fbcdn.net/v/t39.30808-6/436499655_732903489036081_7726637062289837859_n.jpg?stp=dst-jpg_tt6&cstp=mx1862x1862&ctp=s1862x1862&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fp82g71lGqIQ7kNvwENM_Hs&_nc_oc=AdrVPKfKdBS1kKlOfKqOldSm2F9D6asD_8N0uSv9UeauD8BY_eFaYa_WuKepj5HwLCU&_nc_zt=23&_nc_ht=scontent.fmec3-1.fna&_nc_gid=fYJ9_dV4BHrpgE_7HRfzjw&_nc_ss=7b289&oh=00_AQLlgCYtl1suus5PblWO3m4UvT1b91big88nqXJoXx9BCg&oe=6A97EB48';

async function downloadScrumz() {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (res.ok) {
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync('public/logos/scrumz-logo.jpg', buf);
    const meta = await sharp(buf).metadata();
    console.log('✅ Scrumz descargado:', meta.width, 'x', meta.height, meta.format);
    
    // Save webp
    await sharp(buf).webp({ quality: 90 }).toFile('public/logos/scrumz-logo.webp');
    await sharp(buf).png().toFile('public/logos/scrumz-logo.png');
    console.log('✅ Scrumz convertido a WebP y PNG');
  } else {
    console.error('Error fetching Scrumz:', res.status);
  }
}

downloadScrumz();
