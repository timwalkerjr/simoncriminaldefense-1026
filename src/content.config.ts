import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional basic fields
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Docs-specific fields
    order: z.number().optional(),
    section: z.string().optional(),

    // Optional basic fields (shared with blog)
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

// Preserve Webflow's original field names and values for one-to-one migration.
// Publication filtering belongs in the consuming page, not in the import.
const reviews = defineCollection({
  loader: file('./src/content/reviews.json'),
  schema: z.object({
    cmsLocaleId: z.string(),
    createdOn: z.string(),
    lastUpdated: z.string(),
    lastPublished: z.string().nullable(),
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    sourceLabel: z.string().nullable(),
    fieldData: z.object({
      name: z.string(),
      slug: z.string(),
      'featured-review': z.boolean().nullish(),
      'review-content': z.string().nullish(),
      'review-short-text': z.string().nullish(),
      'review-content-full': z.string().nullish(),
      'review-author': z.string().nullish(),
      'review-rating': z.string().nullish(),
      'relationship-of-reviewer': z.string().nullish(),
      'review-source': z.string().nullish(),
      'date-created': z.string().nullish(),
      reviewurl: z.string().nullish(),
      'reviewed-on': z.string().nullish(),
    }).passthrough(),
  }),
});

const caseResults = defineCollection({
  loader: file('./src/content/case-results.json'),
  schema: z.object({
    // Confirmed case outcome date only; never substitute CMS timestamps.
    caseDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
      const date = new Date(`${value}T00:00:00Z`);
      return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
    }, 'Use a valid case date in YYYY-MM-DD format').nullish(),
    cmsLocaleId: z.string(),
    createdOn: z.string(),
    lastUpdated: z.string(),
    lastPublished: z.string().nullable(),
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    fieldData: z.object({
      name: z.string(),
      slug: z.string(),
      court: z.string().nullish(),
      charges: z.string().nullish(),
      result: z.string().nullish(),
      'feature-this-case': z.boolean().nullish(),
    }).passthrough(),
  }),
});

const practiceAreas = defineCollection({
  loader: file('./src/content/practice-areas.json'),
  schema: z.object({
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    lastPublished: z.string().nullable(),
    fieldData: z.object({
      name: z.string(),
      slug: z.string(),
      headline: z.string().nullish(),
      'headline-title-in-hero-section': z.string().nullish(),
      'ad-description-1': z.string().nullish(),
      'practice-area-summary': z.string().nullish(),
      'content-section-headline': z.string().nullish(),
      'main-content': z.string().nullish(),
      'expanded-content': z.string().nullish(),
      'show-expanded-content': z.boolean().nullish(),
      'show-custom-sidebar-faqs': z.boolean().nullish(),
      category: z.string().nullish(),
      'related-practice-areas': z.array(z.string()).nullish(),
      'content-main-image': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      'image-1': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      'image-2': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      video: z.object({ url: z.string(), metadata: z.object({ title: z.string().optional() }).passthrough() }).nullish(),
    }).passthrough(),
  }).passthrough(),
});
const cityPages = defineCollection({
  loader: file('./src/content/city-pages.json'),
  schema: z.object({
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    lastPublished: z.string().nullable(),
    fieldData: z.object({
      name: z.string(),
      slug: z.string(),
      headline: z.string().nullish(),
      'headline-title-in-hero-section': z.string().nullish(),
      'ad-description-1': z.string().nullish(),
      'practice-area-summary': z.string().nullish(),
      'content-section-headline': z.string().nullish(),
      'main-content': z.string().nullish(),
      'expanded-content': z.string().nullish(),
      'show-expanded-content': z.boolean().nullish(),
      'show-custom-sidebar-faqs': z.boolean().nullish(),
      category: z.string().nullish(),
      'related-practice-areas': z.array(z.string()).nullish(),
      'content-main-image': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      'image-1': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      'image-2': z.object({ url: z.string(), alt: z.string().nullish() }).nullish(),
      video: z.object({ url: z.string(), metadata: z.object({ title: z.string().optional() }).passthrough() }).nullish(),
    }).passthrough(),
  }).passthrough(),
});

const awards = defineCollection({
  loader: file('./src/content/awards.json'),
  schema: z.object({
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    localImage: z.string().nullable(),
    downloadedFrom: z.string().nullable(),
    fieldData: z.object({
      name: z.string(), slug: z.string(),
      image: z.object({ url: z.string(), alt: z.string().nullish() }).passthrough().nullish(),
      link: z.string().nullish(),
      'embed-code': z.string().nullish(),
    }).passthrough(),
  }).passthrough(),
});
const posts = defineCollection({
  loader: file('./src/content/posts.json'),
  schema: z.object({
    isDraft: z.boolean(), isArchived: z.boolean(), createdOn: z.string(),
    assets: z.object({ 'main-image': z.string().nullable(), 'thumbnail-image': z.string().nullable() }),
    fieldData: z.object({
      name: z.string(), slug: z.string(),
      'post-body': z.string(), 'post-summary': z.string().nullish(),
      'seo-title': z.string().nullish(), 'seo-meta-description': z.string().nullish(),
      'approved-by-joe': z.boolean(), 'date-approved-by-joe': z.string().nullish(),
      featured: z.boolean().nullish(),
      'main-image': z.object({url:z.string(),alt:z.string().nullish()}).passthrough().nullish(),
      'thumbnail-image': z.object({url:z.string(),alt:z.string().nullish()}).passthrough().nullish(),
      'show-related-posts': z.boolean().nullish(),
      'show-related-practice-areas': z.boolean().nullish(),
      'related-practice-area-s': z.array(z.string()).nullish(),
    }).passthrough(),
  }).passthrough(),
});
const attorneys = defineCollection({
  loader:file('./src/content/attorneys.json'),
  schema:z.object({isDraft:z.boolean(),isArchived:z.boolean(),images:z.record(z.string(),z.string()),fieldData:z.object({name:z.string(),slug:z.string(),'job-title':z.string().nullish(),'bio-summary-2':z.string().nullish(),'bio-summary':z.string(),'attorney-photo':z.object({url:z.string(),alt:z.string().nullish()}).passthrough()}).passthrough()}).passthrough(),
});
const faqs = defineCollection({
  loader:file('./src/content/practice-faqs.json'),
  schema:z.object({isDraft:z.boolean(),isArchived:z.boolean(),fieldData:z.object({name:z.string(),slug:z.string(),'faq-answer':z.string(),category:z.string().nullish()}).passthrough()}).passthrough(),
});
const reviewStats = defineCollection({
  loader:file('./src/content/review-stats.json'),
  schema:z.object({fieldData:z.object({'total-reviews':z.number(),'business-years':z.string(),'cumaltive-review-rating':z.string()}).passthrough()}).passthrough(),
});
const mediaImage = z.object({url:z.string(),alt:z.string().nullish()}).passthrough().nullish();
const mediaArticles = defineCollection({
  loader:file('./src/content/media-articles.json'),
  schema:z.object({isDraft:z.boolean(),isArchived:z.boolean(),images:z.record(z.string(),z.string()),fieldData:z.object({
    name:z.string(),slug:z.string(),content:z.string().nullish(),
    'search-headline-title-tag':z.string().nullish(),'search-meta-description':z.string().nullish(),
    'article-excerpt':z.string().nullish(),'author-s-name-or-source-name':z.string().nullish(),
    'link-to-article-media-source':z.string().nullish(),'feature-this-media-item':z.boolean().nullish(),
    'image-1':mediaImage,'image-2':mediaImage,'image-3':mediaImage,
  }).passthrough()}).passthrough(),
});
export const collections = { blog, docs, reviews, caseResults, practiceAreas, awards, posts, attorneys, faqs, reviewStats, mediaArticles, cityPages };

