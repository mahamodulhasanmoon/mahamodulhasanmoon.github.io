import { SITE, EDUCATION } from './site';

const U = SITE.url;

export const PERSON = {
  '@type': 'Person', '@id': `${U}/#person`, name: SITE.name, alternateName: ['Moon', 'Mahamodul Hasan'],
  url: `${U}/`, image: `${U}/assets/profile.jpg`, email: `mailto:${SITE.email}`,
  jobTitle: SITE.role,
  description: 'Full-stack developer, AI automation specialist and DevOps engineer with 6+ years of experience, based in Dhaka, Bangladesh.',
  worksFor: { '@id': `${U}/#org` },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  knowsLanguage: ['bn', 'en'],
  knowsAbout: ['Full-stack development', 'AI automation', 'DevOps', 'Node.js', 'NestJS', 'Next.js', 'TypeScript', 'PostgreSQL',
    'MongoDB', 'Docker', 'CI/CD', 'GitHub Actions', 'AWS EC2', 'Nginx', 'Stripe', 'bKash', 'SSLCommerz'],
  alumniOf: EDUCATION.filter((e) => e.completed).map((e) => ({ '@type': e.schemaType, name: e.school })),
  sameAs: [SITE.linkedin, SITE.github, SITE.facebook, SITE.fiverr, SITE.upwork],
};

export const ORG = {
  '@type': ['Organization', 'ProfessionalService'], '@id': `${U}/#org`, name: 'Brainicsoft Digital', url: `${U}/`,
  email: SITE.email, logo: { '@type': 'ImageObject', url: `${U}/assets/logo.png`, width: 512, height: 512 },
  image: `${U}/assets/og-image.png`, foundingDate: '2023', founder: { '@id': `${U}/#person` },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' }, areaServed: 'Worldwide',
  description: 'Web development, DevOps and AI automation agency founded in 2023 by Mahamodul Hasan Moon.',
};

export const WEBSITE = { '@type': 'WebSite', '@id': `${U}/#website`, url: `${U}/`, name: SITE.name, inLanguage: 'en', publisher: { '@id': `${U}/#person` } };
