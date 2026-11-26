import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

const pages: [string, string][] = [
  ['/', '1.0'], ['/about.html', '0.9'], ['/services.html', '0.9'],
  ['/case-studies.html', '0.9'], ['/skills.html', '0.7'], ['/contact.html', '0.8'],
];

export const GET: APIRoute = () => {
  const urls = pages.map(([p, pr]) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${SITE.lastUpdated}</lastmod><priority>${pr}</priority></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
