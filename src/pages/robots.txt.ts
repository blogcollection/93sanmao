import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site';

export const GET: APIRoute = () => {
  const domain = (SITE_URL || 'https://sanmao.cfd').replace(/\/$/, '');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
