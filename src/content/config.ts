import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    summary: z.string(),
    timelineImages: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
      publisher: z.string().optional(),
      publishedAt: z.coerce.date().optional(),
    })).default([]),
    status: z.enum(['alleged', 'confirmed', 'disputed', 'under-investigation']).default('alleged'),
  }),
});

export const collections = { events };

