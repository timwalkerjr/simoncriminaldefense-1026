import { defineMiddleware } from 'astro:middleware';
import { SITE } from './config/site';
import { injectStructuredData } from './lib/structured-data.mjs';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (response.status !== 200 || !response.headers.get('content-type')?.includes('text/html')) return response;
  const html = injectStructuredData(await response.text(), SITE);
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(html, { status: response.status, statusText: response.statusText, headers });
});
