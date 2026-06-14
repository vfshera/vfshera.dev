import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "[^_]*.mdx" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      photo: image().optional(),
      tags: z.array(z.string()),
      repo: z.url().optional(),
      link: z.url().optional(),
      kind: z.enum(["oss", "showcase"]),
      wip: z.boolean().optional().default(false),
      sortOrder: z.number().optional().default(0),
    }),
});

export const collections = { projects };
