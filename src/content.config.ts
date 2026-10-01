import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date().nullable(),
      status: z.enum(['shipped', 'in-progress', 'planned']),
      team: z.union([z.literal('solo'), z.number().int().min(2)]),
      role: z.string().optional(),
      stack: z.array(z.string()).min(1),
      repo: z.string().url().optional(),
      itch: z.string().url().optional(),
      video: z.string().url().optional(),
      cover: image(),
      coverAlt: z.string(),
      order: z.number().int(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
