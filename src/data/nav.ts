import { getCollection } from 'astro:content';
import { NAV } from './site';

/** Main navigation. "Gallery" appears automatically once at least one event is published. */
export async function getNav() {
  const events = await getCollection('events', ({ data }) => !data.draft);
  if (!events.length) return NAV;
  const i = NAV.findIndex((n) => n.label === 'Contact');
  return [...NAV.slice(0, i), { label: 'Gallery', href: '/gallery' }, ...NAV.slice(i)];
}
