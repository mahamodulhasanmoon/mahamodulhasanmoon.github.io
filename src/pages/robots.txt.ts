import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// AI search and answer engines are explicitly allowed (GEO).
const bots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];

export const GET: APIRoute = () => new Response(
  'User-agent: *\nAllow: /\nDisallow: /work\nDisallow: /upwork\n\n' +
  bots.map((b) => `User-agent: ${b}\nAllow: /\nDisallow: /work\nDisallow: /upwork\n`).join('\n') +
  `\nSitemap: ${SITE.url}/sitemap.xml\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
