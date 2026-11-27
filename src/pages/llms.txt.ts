import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, SERVICES } from '../data/site';

export const GET: APIRoute = async () => {
  const cases = (await getCollection('case-studies')).sort((a, b) => a.data.order - b.data.order);
  const events = (await getCollection('events', ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const eventsBlock = events.length ? `\n## Events\n${events.map((e) => `- ${e.data.title} (${e.data.date.toISOString().slice(0, 10)}, ${e.data.location}): ${e.data.description}`).join('\n')}\n` : '';
  const body = `# Mahamodul Hasan Moon

> Mahamodul Hasan Moon is a full-stack developer, AI automation specialist and DevOps engineer based in Dhaka, Bangladesh, with 6+ years of experience. He builds web apps with Next.js, Node.js and NestJS, automates business workflows with AI, and deploys with Docker, GitHub Actions, Nginx and AWS. He founded Brainicsoft Digital in 2023.

## Key facts
- Role: ${SITE.role}
- Location: Dhaka, Bangladesh (works with clients worldwide)
- Experience: 6+ years
- Agency: Brainicsoft Digital (Founder, CEO & Lead Software Engineer), founded 2023
- Previous roles: Backend Engineer at Hunny IT; Software Engineer at Edu Fixup
- Languages: Bengali, English
- Email: ${SITE.email}
- Upwork: ${SITE.upwork}
- Fiverr: ${SITE.fiverr}
- GitHub: ${SITE.github}

## Services
${SERVICES.map((s) => `- ${s.title}: ${s.text}`).join('\n')}

## Case studies
${cases.map((c) => `- ${c.data.title} (${c.data.role}): ${c.data.result}`).join('\n')}

${eventsBlock}
## Pages
- [Home](${SITE.url}/)
- [About](${SITE.url}/about.html)
- [Services and FAQ](${SITE.url}/services.html)
- [Case Studies](${SITE.url}/case-studies.html)
- [Skills](${SITE.url}/skills.html)
- [Contact](${SITE.url}/contact.html)
${events.length ? `- [Gallery](${SITE.url}/gallery.html)\n` : ''}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
