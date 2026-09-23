import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE_URL } from './src/config/site';

export default defineConfig({
  ...(SITE_URL ? { site: SITE_URL } : {}),
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
