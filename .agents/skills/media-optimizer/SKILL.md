---
name: media-optimizer
description: >-
  Convierte y optimiza recursos multimedia (imagenes PNG, JPG, GIF, SVG a WebP y AVIF,
  y video/audio a formatos ligeros) aplicando perfiles de compresion, generacion de variantes
  responsivas y marcado frontend optimizado. Usar cuando el usuario solicite convertir imagenes
  a webp/avif, optimizar assets web, reducir peso de archivos multimedia, generar variantes
  @1x/@2x o crear scripts de automatizacion con Pillow, Sharp o ffmpeg.
---

# Media Optimizer

Optimiza y convierte recursos multimedia a formatos modernos de alto rendimiento (WebP, AVIF, WebM, SVG optimizado) para aplicaciones web y móviles, garantizando la máxima reducción de peso sin pérdida perceptible de calidad visual.

---

## When to Use
* Cuando el usuario solicite convertir imágenes (PNG, JPG, JPEG, GIF) a formatos modernos como WebP o AVIF.
* Al preparar assets para landing pages, tiendas en línea o aplicaciones móviles buscando mejorar métricas de rendimiento (LCP, CLS, peso total de página).
* Al generar variantes responsivas de imágenes (p. ej. resoluciones para móvil, tablet, desktop o densidad `@1x` y `@2x`).
* Al requerir scripts en Python (`Pillow`), Node.js (`Sharp`) o comandos CLI (`cwebp`, `ffmpeg`) para procesar directorios completos de medios.
* Al optimizar vectores SVG eliminando metadatos innecesarios o reducir peso de videos/audios para la web.

---

## Steps

### 1. Evaluar el recurso y determinar el formato objetivo
* **Fotografías y gráficos complejos con degradados:** Convertir a WebP o AVIF con compresión con pérdida (calidad 80 - 85%).
* **Gráficos con transparencia, capturas o diagramas técnicos:** Convertir a WebP sin pérdida (lossless) o WebP con pérdida manteniendo canal alfa.
* **Logotipos, iconos e ilustraciones vectoriales:** Optimizar el SVG eliminando comentarios, namespaces obsoletos y metadatos (estilo SVGO).
* **Animaciones cortas o GIFs:** Convertir a WebP animado o video MP4/WebM ligero (codec VP9/AV1) con bucle.
* **Videos de fondo o banners:** Convertir a WebM (VP9) y MP4 (H.264/AAC) con bitrate controlado (CRF 28-32).

---

### 2. Seleccionar el perfil de compresión adecuado
* **Perfil Web Estándar (Recomendado):** Calidad 80 - 85. Ideal para balance entre peso ligero y fidelidad visual imperceptible al ojo humano.
* **Perfil Agresivo (Ultra-ligero / Mobile-First):** Calidad 70 - 75 con redimensión a la resolución máxima de renderizado.
* **Perfil Alta Fidelidad (Fotografía / Arte / Ecommerce):** Calidad 90 con preservación de detalles finos y perfiles de color sRGB.
* **Perfil Lossless:** Compresión sin pérdida de datos para imágenes que requieren exactitud pixel por pixel.

---

### 3. Procesamiento y conversión

#### Opción A: Script de automatización en Python (`Pillow`)
```python
import os
from PIL import Image

def optimize_image(input_path, output_dir=None, quality=82, make_webp=True, make_avif=False, max_width=None):
    img = Image.open(input_path)
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    out_dir = output_dir or os.path.dirname(input_path)
    os.makedirs(out_dir, exist_ok=True)
    
    # Redimensionar si supera el ancho maximo manteniendo proporcion
    if max_width and img.width > max_width:
        ratio = max_width / float(img.width)
        new_height = int(float(img.height) * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
    
    # Convertir modo de color si es necesario (RGBA a RGB si se guarda sin transparencia)
    if img.mode in ('RGBA', 'LA') and not make_webp:
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[-1])
        img = background
    elif img.mode not in ('RGB', 'RGBA'):
        img = img.convert('RGB')
        
    outputs = []
    if make_webp:
        webp_path = os.path.join(out_dir, f"{base_name}.webp")
        img.save(webp_path, "WEBP", quality=quality, optimize=True)
        outputs.append(webp_path)
        
    return outputs
```

#### Opción B: Script de Node.js (`Sharp`) para entornos JS/TS
```javascript
const sharp = require('sharp');
const path = require('path');

async function processImage(filePath, outputDir) {
  const fileName = path.parse(filePath).name;
  
  // Generar WebP optimizado
  await sharp(filePath)
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(outputDir, `${fileName}.webp`));
    
  // Generar variante responsiva 2x y 1x
  await sharp(filePath)
    .resize({ width: 800 })
    .webp({ quality: 80 })
    .toFile(path.join(outputDir, `${fileName}-800w.webp`));
}
```

#### Opción C: Comandos CLI (`ffmpeg` / `cwebp`)
* **Conversión rápida a WebP:**
  ```bash
  cwebp -q 82 input.png -o output.webp
  ```
* **Video MP4 a WebM optimizado:**
  ```bash
  ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
  ```

---

### 4. Generar marcado HTML responsivo
Integrar los recursos optimizados utilizando la etiqueta `<picture>` para compatibilidad con navegadores modernos y fallback automático:

```html
<picture>
  <source type="image/avif" srcset="/assets/hero.avif">
  <source type="image/webp" srcset="/assets/hero-800w.webp 800w, /assets/hero-1600w.webp 1600w" sizes="(max-width: 768px) 100vw, 800px">
  <img src="/assets/hero.jpg" alt="Descripcion del recurso" width="800" height="600" loading="lazy" decoding="async">
</picture>
```

---

## Gotchas & Buenas Prácticas
* **Atributos de dimensión obligatorios:** Incluir siempre atributos `width` y `height` o una relación de aspecto CSS (`aspect-ratio`) en la etiqueta `<img>` para evitar desplazamientos de diseño acumulados (CLS).
* **Carga diferida:** Utilizar `loading="lazy"` para imágenes debajo del pliegue (*below the fold*), pero evitarlo en la imagen principal de cabecera (LCP) donde se debe usar `fetchpriority="high"` y `loading="eager"`.
* **Transparencias:** Al convertir PNGs con canal alfa a WebP, asegurar que se mantenga el formato RGBA sin aplanar fondos accidentales a color negro o blanco a menos que se desee explícitamente.
* **Sobredimensionamiento:** No servir imágenes de 3000px si el contenedor máximo en pantalla es de 1200px. Redimensionar antes o durante la compresión para ahorrar ancho de banda.
