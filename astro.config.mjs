// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are injected by the GitHub Pages workflow
// (.github/workflows/deploy.yml). Locally the site is served from "/".
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
