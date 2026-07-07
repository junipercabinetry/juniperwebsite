/**
 * One-time (re-runnable) image optimization pipeline.
 *
 * - Converts photographic PNG/JPG assets in /public to WebP (max 1920px wide,
 *   quality 80) and removes the originals.
 * - Normalizes the one misnamed file (…vancouver_1.3.png → …vancouver-1.3.webp).
 * - Generates og-image.jpg (1200×630) and juniper-hero-poster.jpg from the
 *   hero photo.
 * - Deletes assets that are no longer referenced anywhere in the app.
 *
 * Usage: npm run optimize-images
 */
import { readdir, stat, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = fileURLToPath(new URL('../public/', import.meta.url));

// Brand assets kept in their original format (transparency, tiny files).
const KEEP_AS_IS = new Set([
  'white-logo-header-01.png',
  'green-logo-scroll.png',
  'white-logo-footer.png',
  'white_bg_(1).svg',
]);

// No longer referenced by any page/component.
const DELETE_UNUSED = new Set([
  'white.png',
  'white_bg.png',
  'white_text.png',
  'white_text_copy.png',
  'dark_text.png',
  'icon.ico',
  'favicon-juniper-cabinetry-green-circle-tree.png',
  'snow-mountain-profile.jpg',
  'portfolio-image-05.png',
  'portfolio-image-09.png',
  'portfolio-image-12.jpg',
  'portfolio-image-13.jpg',
  'portfolio-image-14.jpg',
  'services-image-04.png',
]);

// Misnamed source files → normalized output basenames.
const RENAMES = {
  'modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver_1.3.png':
    'modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.3',
};

const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

async function main() {
  const files = await readdir(PUBLIC_DIR);
  let converted = 0;
  let deleted = 0;
  let savedBytes = 0;

  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);
    const ext = path.extname(file).toLowerCase();

    if (DELETE_UNUSED.has(file)) {
      await unlink(filePath);
      deleted++;
      console.log(`deleted (unused): ${file}`);
      continue;
    }

    if (KEEP_AS_IS.has(file) || !['.png', '.jpg', '.jpeg'].includes(ext)) {
      continue;
    }

    const baseName = RENAMES[file] ?? file.slice(0, -ext.length);
    const outPath = path.join(PUBLIC_DIR, `${baseName}.webp`);
    const { size: originalSize } = await stat(filePath);

    try {
      await sharp(filePath)
        .rotate() // respect EXIF orientation
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);
    } catch (err) {
      console.warn(`SKIPPED (not a valid image): ${file} — ${err.message}`);
      continue;
    }

    const { size: newSize } = await stat(outPath);
    savedBytes += originalSize - newSize;
    await unlink(filePath);
    converted++;
    console.log(
      `converted: ${file} → ${baseName}.webp (${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024).toFixed(0)}KB)`,
    );
  }

  // Social share image and hero video poster from the flagship kitchen photo.
  const heroSource = path.join(PUBLIC_DIR, 'kitchen-hero-01.webp');
  if (existsSync(heroSource)) {
    await sharp(heroSource)
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(path.join(PUBLIC_DIR, 'og-image.jpg'));
    console.log('generated: og-image.jpg (1200×630)');

    await sharp(heroSource)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 70 })
      .toFile(path.join(PUBLIC_DIR, 'juniper-hero-poster.jpg'));
    console.log('generated: juniper-hero-poster.jpg');
  }

  console.log(
    `\nDone: ${converted} converted, ${deleted} deleted, ~${(savedBytes / 1024 / 1024).toFixed(0)}MB saved.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
