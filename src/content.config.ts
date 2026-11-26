import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Add a case study by creating a new .md file in src/content/case-studies/
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    order: z.number(),
    role: z.string(),
    stack: z.array(z.string()),
    problem: z.string(),
    delivered: z.array(z.string()),
    result: z.string(),
    cover: z.string(),
    pipelineImage: z.boolean().default(false),
    // YouTube ID of a client video testimonial. Empty string = link to Upwork portfolio instead.
    videoTestimonial: z.string().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
