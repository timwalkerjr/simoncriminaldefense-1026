import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    // Visible intro shown in the post hero (source lede), separate from the meta description
    lead: z.string().optional(),
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
    // Structured data, rendered by BlogLayout. Any schema.org type is allowed,
    // so the shape is deliberately unconstrained; an array composes several
    // schemas on one post.
    jsonLd: z
      .union([
        z.record(z.string(), z.any()),
        z.array(z.record(z.string(), z.any())),
      ])
      .optional(),
    // The article editor writes these. Zod strips any key the schema does not
    // declare, so they must stay declared to reach the layout.
    imageAlt: z.string().optional(),
    schemaType: z.string().optional(),
    schemaData: z.record(z.string(), z.any()).optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
    // Practice-area links shown in the article sidebar
    relatedPractice: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    showRelatedPosts: z.boolean().optional(),
  }),
});

// Press coverage articles mirror the source /media-articles/<slug>/ URLs.
// Kept separate from blog so they do not appear in blog listings.
const media = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/media' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Press credit shown in the article header and sidebar
    sourceName: z.string().optional(),
    sourceAuthor: z.string().optional(),
    sourceUrl: z.string().optional(),
    // Original public source path, e.g. /media-articles/<slug>/
    sourcePath: z.string().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
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
    // Structured data, rendered by BlogLayout. Any schema.org type is allowed,
    // so the shape is deliberately unconstrained; an array composes several
    // schemas on one post.
    jsonLd: z
      .union([
        z.record(z.string(), z.any()),
        z.array(z.record(z.string(), z.any())),
      ])
      .optional(),
    // The article editor writes these. Zod strips any key the schema does not
    // declare, so they must stay declared to reach the layout.
    imageAlt: z.string().optional(),
    schemaType: z.string().optional(),
    schemaData: z.record(z.string(), z.any()).optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog, docs, media };
