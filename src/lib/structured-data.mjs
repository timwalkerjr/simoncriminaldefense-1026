import { load } from 'cheerio';

// Server/build-only: describe the content actually rendered, including collection
// filtering and pagination. Never serialize private CMS records into the graph.
export const serializeSchema = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const text = value => String(value || '').replace(/\s+/g, ' ').trim();
const ref = id => ({ '@id': id });

export function structuredDataForHtml(html, site) {
  const $ = load(html);
  if (!$('main').length || $('meta[http-equiv="refresh"]').length) return null;
  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical) return null;
  const absolute = value => {
    const u = new URL(value, canonical);
    if (u.origin === new URL(canonical).origin) {
      u.pathname = u.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
      const aliases = { '/posts': '/recent-posts', '/articles': '/recent-posts', '/case-results': '/courtroom-victories' };
      u.pathname = aliases[u.pathname] || u.pathname.replace(/^\/case-results\//, '/courtroom-victories/');
    }
    return u.href;
  };
  const url = absolute(canonical);
  const path = new URL(url).pathname;
  if (path === '/404') return null;
  const home = new URL('/', url).href;
  const firmId = home + '#firm';
  const websiteId = home + '#website';
  const pageId = url + '#webpage';
  const heading = text($('main h1').first().text());
  const description = $('meta[name="description"]').attr('content');
  const firm = {
    '@type': 'LegalService', '@id': firmId, name: site.name, url: home,
    telephone: '+1-734-887-6200',
    address: { '@type': 'PostalAddress', streetAddress: '1310 South Main Street, Suite 11', addressLocality: 'Ann Arbor', addressRegion: 'MI', postalCode: '48104', addressCountry: 'US' },
    areaServed: { '@type': 'Place', name: 'Southeast Michigan' },
    contactPoint: { '@type': 'ContactPoint', telephone: '+1-734-887-6200', contactType: 'Confidential consultation', hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day => `https://schema.org/${day}`), opens: '00:00', closes: '23:59' } },
  };
  const page = { '@type': 'WebPage', '@id': pageId, url, name: text($('title').text()), description, inLanguage: $('html').attr('lang') || 'en', isPartOf: ref(websiteId), publisher: ref(firmId), about: ref(firmId) };
  const graph = [firm, { '@type': 'WebSite', '@id': websiteId, url: home, name: site.name, inLanguage: page.inLanguage, publisher: ref(firmId) }, page];
  const add = node => { graph.push(node); return ref(node['@id']); };
  const mentions = node => { page.mentions = [...(page.mentions || []), add(node)]; };
  const image = (selector, id) => {
    const el = $(selector).first();
    if (!el.attr('src')) return undefined;
    return add({ '@type': 'ImageObject', '@id': url + '#' + id, contentUrl: absolute(el.attr('src')), ...(el.attr('alt') ? { caption: text(el.attr('alt')) } : {}) });
  };
  const list = (id, name, items, primary = false, start = 1) => {
    if (!items.length) return;
    const node = { '@type': 'ItemList', '@id': url + '#' + id, name, numberOfItems: items.length, itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: start + i, item })) };
    if (primary) page.mainEntity = add(node); else mentions(node);
  };
  const linkedPages = selector => {
    const seen = new Set();
    return $(selector).toArray().flatMap(el => {
      const link = $(el), href = link.attr('href');
      if (!href) return [];
      const target = absolute(href);
      if (seen.has(target)) return [];
      seen.add(target);
      const cardHeading = link.find('h2,h3').first().text() || link.closest('article').find('h2,h3').first().text();
      return [{ '@type': 'WebPage', '@id': target + '#webpage', url: target, name: text(cardHeading || link.text()).replace(/^(Explore|Read)\s+/, '').replace(/\s*→$/, '') }];
    });
  };

  // Use the page's displayed navigation, never invent a nonexistent /attorneys index.
  if (path !== '/') {
    const trail = [{ name: 'Home', item: home }];
    $('main nav[aria-label="Breadcrumb"] a').each((_, el) => {
      const item = absolute($(el).attr('href'));
      if (item !== home && item !== url && !trail.some(p => p.item === item)) trail.push({ name: text($(el).text()), item });
    });
    if (trail.length === 1 && /^\/courtroom-victories\/\d+$/.test(path)) trail.push({name: 'Case Results', item: absolute('/courtroom-victories')});
    trail.push({ name: heading || page.name, item: url });
    page.breadcrumb = add({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: trail.map((p, i) => ({ '@type': 'ListItem', position: i + 1, ...p })) });
  }

  if (path === '/') page.mainEntity = ref(firmId);
  if (path === '/contact') { page['@type'] = 'ContactPage'; page.mainEntity = ref(firmId); }
  if (path === '/career') {
    page['@type'] = 'AboutPage';
    page.about = { '@type': 'Person', '@id': absolute('/attorneys/joseph-a-simon') + '#person', name: 'Joseph A. Simon', url: absolute('/attorneys/joseph-a-simon') };
    page.primaryImageOfPage = image('[data-original-static="career"] img, #feature-section img', 'primaryimage');
    const photos = $('#feature-section figure').toArray().map((el, i) => ({ '@type': 'ImageObject', '@id': url + '#career-image-' + (i + 1), contentUrl: absolute($(el).find('img').attr('src')), caption: text($(el).find('figcaption').text() || $(el).find('img').attr('alt')) }));
    list('gallery', 'Career photographs', photos);
  }
  if (path.startsWith('/attorneys/')) {
    page['@type'] = 'ProfilePage';
    const person = { '@type': 'Person', '@id': url + '#person', name: heading, url, jobTitle: text($('main .eyebrow').first().text()), description, worksFor: ref(firmId), mainEntityOfPage: ref(pageId), image: image('[data-attorney-id] img', 'portrait') };
    if (path.endsWith('/joseph-a-simon')) person.sameAs = [site.socials.linkedin].filter(Boolean);
    page.mainEntity = add(person);
    page.primaryImageOfPage = person.image;
  }
  if (path.startsWith('/post/')) {
    page.primaryImageOfPage = image('main .main-image', 'primaryimage');
    page.mainEntity = add({ '@type': 'BlogPosting', '@id': url + '#article', url, headline: heading, description, articleBody: text($('[data-source-field="post-body"]').text()), inLanguage: page.inLanguage, publisher: ref(firmId), mainEntityOfPage: ref(pageId), image: page.primaryImageOfPage });
    // Import timestamps are not editorial dates; authorship is not inferred from firm ownership.
  }
  if (path.startsWith('/media-articles/')) {
    page.primaryImageOfPage = image('[data-media-image]', 'primaryimage');
    page.text = text($('[data-media-body]').text());
    const source = $('[data-media-source]').attr('href');
    if (source) page.citation = { '@type': 'CreativeWork', '@id': absolute(source), url: absolute(source), name: heading, creditText: text($('[data-media-credit]').text()) };
    // This is the firm's coverage page, not a claim that it authored the publisher's report.
  }
  if (path.startsWith('/practice-area/') || path.startsWith('/service-areas/')) {
    const hubName = text($('main nav[aria-label="Breadcrumb"] span').last().text());
    const local = $('[data-service-area]').length ? hubName : text($('main nav[aria-label="Breadcrumb"] a').eq(1).text());
    const service = { '@type': 'Service', '@id': url + '#service', url, name: heading, description, serviceType: 'Criminal defense legal services', provider: ref(firmId), mainEntityOfPage: ref(pageId), areaServed: { '@type': 'Place', name: local && local !== 'Practice Areas' ? `${local}, Michigan` : 'Southeast Michigan' } };
    page.mainEntity = add(service);
    const sourceBody = text($('[data-source-field="main-content"], [data-source-field="expanded-content"]').text());
    if (sourceBody) page.text = sourceBody;
    page.primaryImageOfPage = image('main .main-image', 'primaryimage');
    list('local-services', 'Local defense services', linkedPages('#local-practices a[href^="/practice-area/"]'));
  }

  const directories = { '/practice-areas': ['/practice-area/', 'Practice Areas'], '/service-areas': ['/service-areas/', 'Service Areas'], '/recent-posts': ['/post/', 'Posts'], '/media': ['/media-articles/', 'Media Coverage'] };
  if (directories[path]) {
    page['@type'] = 'CollectionPage';
    const [prefix, label] = directories[path];
    list('items', label, linkedPages(`main a[href^="${prefix}"]`), true);
  }

  const cases = $('[data-case-id], [data-featured-case]').toArray().map(el => {
    const card = $(el), id = card.attr('id') || 'case-' + card.attr('data-featured-case');
    return { '@type': 'CreativeWork', '@id': url + '#' + id, name: text(card.find('h2,h3').first().text()), text: text(card.text()), about: ref(firmId), ...(card.attr('id') ? { url: url + '#' + id } : {}) };
  });
  if (path.startsWith('/courtroom-victories')) page['@type'] = 'CollectionPage';
  const casePage = Number(path.split('/')[2] || 1);
  list('case-results', 'Representative case results', cases, path.startsWith('/courtroom-victories'), path.startsWith('/courtroom-victories') ? (casePage - 1) * 24 + 1 : 1);

  // Anonymous testimonials are quotations, not fabricated Person authors or self-serving star markup.
  const reviews = $('[data-review-id], [data-featured-review]').toArray().map(el => {
    const card = $(el), id = card.attr('id') || 'review-' + card.attr('data-featured-review');
    const body = text(card.find('.review-body').text()) || text(card.find('.review-copy').text());
    return { '@type': 'Quotation', '@id': url + '#' + id, name: 'Verified Client Review', text: body || text(card.find('h3').text()), about: ref(firmId), ...(card.attr('id') ? { url: url + '#' + id } : {}) };
  });
  if (path === '/reviews') page['@type'] = 'CollectionPage';
  list('testimonials', 'Verified Client Reviews', reviews, path === '/reviews');

  const badges = $('[data-award-id]').toArray().map(el => {
    const card = $(el), img = card.find('img');
    return { '@type': 'ImageObject', '@id': url + '#award-' + card.attr('data-award-id'), name: text(img.attr('alt')), contentUrl: absolute(img.attr('src')), ...(card.find('a').attr('href') ? { isBasedOn: absolute(card.find('a').attr('href')) } : {}) };
  });
  list('award-badges', 'Awards and recognition badges', badges);

  const questions = $('[data-faq-id]').toArray().map(el => ({ '@type': 'Question', '@id': url + '#faq-' + $(el).attr('data-faq-id'), name: text($(el).find('summary').text()), acceptedAnswer: { '@type': 'Answer', text: text($(el).children('div').text()) } }));
  if (questions.length) page.hasPart = add({ '@type': 'FAQPage', '@id': url + '#frequently-asked-questions', isPartOf: ref(pageId), mainEntity: questions });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function injectStructuredData(html, site) {
  const graph = structuredDataForHtml(html, site);
  // Remove legacy blocks without reserializing or otherwise altering visible HTML.
  const clean = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');
  return graph ? clean.replace('</head>', `<script type="application/ld+json" data-site-schema>${serializeSchema(graph)}</script></head>`) : clean;
}
