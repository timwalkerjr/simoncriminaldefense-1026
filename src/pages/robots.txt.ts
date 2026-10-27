import { SITE } from '@/config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const noIndex = import.meta.env.SITE_NOINDEX !== 'false';
  const crawlDirective = noIndex ? 'Disallow: /' : 'Allow: /';
  const content = `User-agent: *
${crawlDirective}

Sitemap: ${new URL('/sitemap-index.xml', SITE.url)}`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
