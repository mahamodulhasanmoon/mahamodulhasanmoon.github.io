import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

const pages: [string, string][] = [
  ['/', '1.0'], ['/about', '0.9'], ['/services', '0.9'],
  ['/case-studies', '0.9'], ['/skills', '0.7'], ['/contact', '0.8'],
];

export const GET: APIRoute = async () => {
  const events = await getCollection('events', ({ data }) => !data.draft);
  const all: [string, string][] = events.length ? [...pages, ['/gallery', '0.6']] : pages;
  const urls = all.map(([p, pr]) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${SITE.lastUpdated}</lastmod><priority>${pr}</priority></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
