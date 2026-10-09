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
    z
      .object({
        title: z.string(),
        summary: z.string(),
        start: z.coerce.date(),
        end: z.coerce.date().nullable(),
        status: z.enum(['shipped', 'in-progress', 'planned', 'shelved']),
        team: z.union([z.literal('solo'), z.number().int().min(2)]),
        role: z.string().optional(),
        stack: z.array(z.string()).min(1),
        repo: z.string().url().optional(),
        itch: z.string().url().optional(),
        video: z.string().url().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        // base filename in public/media/<slug>/, without extension
        clips: z.array(z.object({ name: z.string(), alt: z.string() })).default([]),
        shots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
        order: z.number().int(),
        draft: z.boolean().default(false),
      })
      .refine((d) => d.draft || (d.cover && d.coverAlt), {
        message: 'non-draft entries need cover and coverAlt',
      }),
});

export const collections = { projects };
