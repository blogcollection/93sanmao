import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string(),
    author: z.string().default('三毛网络安全团队'),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
