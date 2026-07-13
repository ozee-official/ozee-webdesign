import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releases = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/releases' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    label: z.string(),
    type: z.enum(['original', 'collaboration', 'remix']),
    with: z.string().optional(),
    tagline: z.string(),
    description: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    accent: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { releases };
