import { getCollection } from 'astro:content';
import { load } from 'cheerio';

export async function getMediaArticles() {
  return (await getCollection('mediaArticles'))
    .filter(({data}) => !data.isDraft && !data.isArchived)
    .map(({id, data}) => {
      const f = data.fieldData;
      const body = load(f.content || '', null, false);
      body('img').each((_, el) => { const src = body(el).attr('src'); if (src && data.images[src]) body(el).attr('src', data.images[src]); body(el).attr('loading','lazy'); });
      const credit = f['author-s-name-or-source-name'] || '';
      const sourceUrl = f['link-to-article-media-source'] || '';
      const publisher = credit.includes('|') ? credit.split('|').slice(1).join('|').trim() : credit;
      return {
        id, slug: f.slug, path: `/media-articles/${f.slug}/`, title: f.name,
        seoTitle: f['search-headline-title-tag'] || f.name,
        seoDescription: f['search-meta-description'] || f['article-excerpt'] || f.name,
        publisher, credit, featured: !!f['feature-this-media-item'],
        sourceDateLabel: '', representationNote: f['article-excerpt'] || '',
        externalArticleUrl: sourceUrl, externalLinkText: 'Read the full article here...',
        bodyHtml: body.html(),
        images: [f['image-1'],f['image-2'],f['image-3']].filter(image => !!image?.url).map(image => ({src:data.images[image!.url],alt:image!.alt || f.name})),
      };
    }).sort((a,b) => Number(b.featured)-Number(a.featured) || a.title.localeCompare(b.title));
}
