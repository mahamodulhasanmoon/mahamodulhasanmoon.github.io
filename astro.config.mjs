// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mahamodulhasan.me',
  // Output about.html instead of about/index.html so existing URLs keep working
  build: { format: 'file', inlineStylesheets: 'always' },
  trailingSlash: 'never',
  compressHTML: true,
  // Preload internal pages on hover for near-instant navigation
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
