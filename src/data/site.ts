// Single source of truth for site content. Edit here; every page updates.
export const SITE = {
  url: 'https://mahamodulhasan.me',
  name: 'Mahamodul Hasan Moon',
  role: 'Full Stack Developer, AI Automation Specialist & DevOps Engineer',
  email: 'moon@brainicsoft.com',
  whatsapp: 'https://wa.me/8801811993878',
  whatsappDisplay: '+880 1811-993878',
  upwork: 'https://www.upwork.com/freelancers/~017c4931e01d47e960',
  fiverr: 'https://www.fiverr.com/moon_mahamodul',
  github: 'https://github.com/mahamodulhasanmoon',
  linkedin: 'https://www.linkedin.com/in/mahamodulhasanmoon',
  facebook: 'https://www.facebook.com/mahamodulhasanmoon',
  youtubeIntro: 'jl9i5qm_pxo',
  lastUpdated: '2026-11-27',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

export type Tone = 'brand' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';

export const SERVICES: { icon: string; tone: Tone; title: string; text: string; items: string[] }[] = [
  { icon: 'code', tone: 'brand', title: 'Full Stack Development',
    text: 'Complete web applications, frontend to backend, built with Next.js, React, Node.js, NestJS and TypeScript on PostgreSQL or MongoDB.',
    items: ['Next.js and React frontends', 'Node.js, NestJS, Express.js APIs', 'PostgreSQL and MongoDB', 'Third-party integrations'] },
  { icon: 'sparkles', tone: 'violet', title: 'AI Automation',
    text: 'Repetitive business workflows automated with AI, connected to your existing APIs, databases and tools.',
    items: ['Workflow analysis', 'AI integration into backends', 'API and tool connections', 'Monitoring after launch'] },
  { icon: 'box', tone: 'cyan', title: 'Docker & CI/CD',
    text: 'Docker and GitHub Actions pipelines: push to main, tested and deployed in about 90 seconds.',
    items: ['Docker and Docker Compose', 'GitHub Actions workflows', 'Automated tests and builds', 'Instant rollback'] },
  { icon: 'cloud', tone: 'emerald', title: 'AWS & VPS Deployment',
    text: 'Servers on AWS EC2, DigitalOcean, Contabo or Hostinger with Nginx, SSL and zero-downtime releases.',
    items: ['Nginx reverse proxy and domains', "Free Let's Encrypt SSL", 'UFW, SSH and fail2ban hardening', 'Zero-downtime releases'] },
  { icon: 'card', tone: 'amber', title: 'Payment Integration',
    text: 'Online checkout and payment flows with Stripe for international payments and bKash and SSLCommerz for Bangladesh.',
    items: ['Stripe', 'bKash', 'SSLCommerz', 'Payment webhooks'] },
  { icon: 'wrench', tone: 'rose', title: 'Ongoing Support',
    text: 'Monitoring, logs, backups and improvements after launch, so the product keeps running well.',
    items: ['PM2 and log management', 'Automated database backups', 'Rollback plans', 'Post-launch fixes'] },
];

export const FAQ: [string, string][] = [
  ['Who is Mahamodul Hasan Moon?', 'Mahamodul Hasan Moon is a full-stack developer, AI automation specialist and DevOps engineer based in Dhaka, Bangladesh, with 6+ years of experience. He founded Brainicsoft Digital in 2023.'],
  ['What services do you offer?', 'Full-stack development with Next.js, Node.js and NestJS; AI automation; Docker and CI/CD; AWS and VPS deployment; Stripe, bKash and SSLCommerz payment integration; and ongoing support.'],
  ['How long does a deployment take?', 'Taking an app from a GitHub repository to a live, secured, auto-deploying server usually takes 1 to 3 days, depending on the app.'],
  ['Which hosting providers do you work with?', "AWS EC2, DigitalOcean, Contabo and Hostinger, plus most Linux VPS providers. Setups use Docker, Nginx and Let's Encrypt SSL."],
  ['Can you automate our business workflows with AI?', 'Yes. AI automation is a core focus. I connect AI to your existing backend, APIs and databases to remove repetitive manual steps.'],
  ['How do you price projects?', 'Scope and a fixed price are agreed before work starts. Hourly contracts are also available on Upwork.'],
  ['Do you provide support after launch?', 'Yes. Every project includes a handoff with written documentation of the configuration, and post-launch support is available.'],
  ['How can I hire you?', 'Email moon@brainicsoft.com, message on WhatsApp, or hire through Upwork or Fiverr (fiverr.com/moon_mahamodul).'],
];

export const REVIEW = {
  text: "Moon was a pleasure to collaborate with. He responded promptly and worked tirelessly until the issue was resolved. He's one of the best developers I've ever worked with. I'm planning to continue working with him to further enhance the excellent work he's already done. This isn't because there's anything wrong with what he's already created, but because he suggested improvements and made them, and there are even more potential improvements beyond the current project's scope.",
  who: 'Julius P.', initials: 'JP', where: 'Upwork client', project: 'Website development for business',
};

export const SKILLS: { group: string; icon: string; tone: Tone; items: string[] }[] = [
  { group: 'Full Stack', icon: 'code', tone: 'brand', items: ['Next.js', 'React', 'Node.js', 'NestJS', 'Express.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { group: 'DevOps', icon: 'cloud', tone: 'cyan', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Nginx', 'AWS EC2', 'DigitalOcean', 'Contabo', 'Hostinger', 'Ubuntu / Linux', 'Cloudflare', "Let's Encrypt", 'PM2'] },
  { group: 'AI & Automation', icon: 'workflow', tone: 'violet', items: ['AI automation', 'Workflow automation', 'AI integration', 'API integrations'] },
  { group: 'Payments', icon: 'card', tone: 'amber', items: ['Stripe', 'bKash', 'SSLCommerz'] },
];

export const HOME_STACK = ['Node.js', 'NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'GitHub Actions', 'Nginx', 'AWS EC2', 'AI automation', 'Stripe', 'bKash', 'SSLCommerz'];

export const WORK = [
  { when: '2023 – Present', role: 'Founder, CEO & Lead Software Engineer', org: 'Brainicsoft Digital', text: 'Runs a web development and DevOps agency serving international clients through Upwork and Fiverr.' },
  { when: '', role: 'Backend Engineer', org: 'Hunny IT', text: 'Backend engineering role.' },
  { when: '', role: 'Software Engineer', org: 'Edu Fixup', text: 'Software engineering role.' },
];

// Education (from Upwork profile; confirm against LinkedIn)
export const EDUCATION = [
  { degree: 'Bachelor of Computer Science (BCompSc)', field: 'Computer Science', school: 'Modern Institute of Science & Technology', years: '2022 – 2026', start: '2022', end: '2026', completed: true },
  { degree: 'Bachelor of Arts (BA)', field: 'Philosophy', school: 'Bangladesh National University', years: '2022 – 2027 (expected)', start: '2022', end: '2027', completed: false },
];

export const CERTIFICATIONS = [
  { name: 'Complete Web Development', date: 'December 2022' },
];

export const PRINCIPLES: { icon: string; tone: Tone; title: string; text: string }[] = [
  { icon: 'target', tone: 'brand', title: 'Production first', text: 'Code is built with deployment in mind from day one, so you receive something ready to run, not just to demo.' },
  { icon: 'repeat', tone: 'cyan', title: 'Automate the repetitive', text: 'Docker, CI/CD and AI automation make releases and daily work repeatable instead of manual.' },
  { icon: 'shield', tone: 'emerald', title: 'Secure by default', text: 'Nginx, SSL, firewall and SSH hardening are part of the standard setup, not an add-on.' },
  { icon: 'chat', tone: 'violet', title: 'Clear communication', text: 'Fixed scope before starting, regular updates, and written docs plus a screen-share handoff at the end.' },
];

export const PROCESS = [
  { n: '01', title: 'Discuss', text: 'You share the repo, goal and hosting. I reply with a plan.' },
  { n: '02', title: 'Scope & price', text: 'Fixed scope and price agreed before work starts.' },
  { n: '03', title: 'Build & ship', text: 'Development, automation and deployment with regular updates.' },
  { n: '04', title: 'Handoff', text: 'Written docs, screen-share walkthrough and post-launch support.' },
];

export const STATS = [
  { count: 6, suffix: '+', label: 'Years of experience' },
  { count: 4, suffix: '', label: 'Published case studies' },
  { count: 90, suffix: 's', label: 'Automated deploy time' },
  { count: null, suffix: '2023', label: 'Agency founded' },
];

// Quick facts. `links` render as anchors; keep plain text in `value` for GEO readability.
export const FACTS: { label: string; value: string; links?: { label: string; href: string }[] }[] = [
  { label: 'Name', value: 'Mahamodul Hasan Moon' },
  { label: 'Role', value: 'Full Stack Developer, AI Automation Specialist & DevOps Engineer' },
  { label: 'Location', value: 'Dhaka, Bangladesh' },
  { label: 'Experience', value: '6+ years' },
  { label: 'Agency', value: 'Brainicsoft Digital, founded 2023' },
  { label: 'Education', value: 'BCompSc, Modern Institute of Science & Technology' },
  { label: 'Languages', value: 'Bengali (native), English (fluent)' },
  { label: 'Hire on', value: '', links: [{ label: 'Upwork', href: SITE.upwork }, { label: 'Fiverr', href: SITE.fiverr }] },
];

export const TONES: Record<Tone, string> = {
  brand: 'bg-brand-500/15 text-brand-400',
  violet: 'bg-violet-500/15 text-violet-300',
  cyan: 'bg-cyan-400/15 text-cyan-300',
  emerald: 'bg-emerald-400/15 text-emerald-300',
  amber: 'bg-amber-400/15 text-amber-300',
  rose: 'bg-rose-400/15 text-rose-300',
};
