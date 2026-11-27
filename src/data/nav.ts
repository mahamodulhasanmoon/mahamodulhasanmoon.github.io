import { NAV } from './site';

/** Main navigation, with Gallery always shown before Contact. */
export async function getNav() {
  const i = NAV.findIndex((n) => n.label === 'Contact');
  return [...NAV.slice(0, i), { label: 'Gallery', href: '/gallery' }, ...NAV.slice(i)];
}
