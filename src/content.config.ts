import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const columns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/columns' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    tag: z.string(),
    icon: z.string(),
    summary: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    column: reference('columns'),
    pubDate: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { columns, articles };
