import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site';

export const GET: APIRoute = () => {
  const sitemapLine = SITE_URL ? `Sitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap.xml` : '';
  const robotsTxt = `
User-agent: *
Allow: /
${sitemapLine}
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
