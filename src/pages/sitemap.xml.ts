import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../config/site';

export const GET: APIRoute = async () => {
  const baseUrl = SITE_URL ? SITE_URL.replace(/\/$/, '') : '';
  const posts = await getCollection('blog');

  const staticPages = [
    '',
    '/vpn',
    '/servers',
    '/download',
    '/pricing',
    '/guides',
    '/support',
    '/about',
    '/privacy',
    '/terms',
    '/security',
    '/blog',
  ];

  const staticUrls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  const blogUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.data.updated || post.data.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
