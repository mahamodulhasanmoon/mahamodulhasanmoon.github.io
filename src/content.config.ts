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

// Event photo gallery. Add an event: create src/content/events/<event-slug>/index.md
// and put its photos in the same folder. Folders starting with "_" are ignored (see _example-event).
const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '[^_]*/index.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string(),
    photos: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'case-studies': caseStudies, events };
