import { load } from 'cheerio';
import practices from '../content/practice-areas.json';
import posts from '../content/posts.json';
import cityPages from '../content/city-pages.json';

// Preserve wording and order; add anchors and update links to migrated pages.
export function practiceContent(html: string, prefix: string) {
  const $ = load(html, null, false);
  const headings: { id: string; text: string }[] = [];
  $('h2').each((index, heading) => {
    const text = $(heading).text();
    if (!text.replace(/[\s\u200b-\u200d]/g, '')) return;
    const id = `${prefix}-${index + 1}`;
    // Keep existing anchors working if the source has one.
    if ($(heading).attr('id')) $(heading).before($('<span>').attr('id', id));
    else $(heading).attr('id', id);
    headings.push({ id, text });
  });
  $('img').attr('loading', 'lazy');
  $('a[href]').each((_, link) => {
    const href = $(link).attr('href')!;
    try {
      const url = new URL(href, 'https://www.simoncriminaldefense.com');
      if (['www.simoncriminaldefense.com', 'simoncriminaldefense.com', 'simoncriminaldefense2020.webflow.io'].includes(url.hostname)
        && ([...practices, ...cityPages].some(item => url.pathname.replace(/\/$/, '') === `/practice-area/${item.fieldData.slug}`)
          || posts.some(item => url.pathname.replace(/\/$/, '') === `/post/${item.fieldData.slug}`))) {
        $(link).attr('href', `${url.pathname.replace(/\/$/, '')}/${url.search}${url.hash}`);
      }
    } catch { /* Keep unusual source links intact. */ }
  });
  return { html: $.html(), headings };
}
