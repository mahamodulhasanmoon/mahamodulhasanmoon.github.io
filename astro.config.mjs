// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mahamodulhasan.me',
  // Output about.html instead of about/index.html so existing URLs keep working
  build: { format: 'file' },
  trailingSlash: 'never',
  compressHTML: true,
});
