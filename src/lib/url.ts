// Prefixes internal links with the deploy base path (needed for GitHub Pages project sites).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** True when `current` is `href` or a sub-page of it. */
export function isActive(current: string, href: string): boolean {
  const strip = (p: string) => p.replace(base, '').replace(/\/$/, '') || '/';
  const c = strip(current);
  const h = strip(href);
  return h === '/' ? c === '/' : c === h || c.startsWith(`${h}/`);
}
