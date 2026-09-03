import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        picture: z.string().optional(),
      }).passthrough(),
    }),

    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        avatar: z.string(),
        introduction: z.string(),
        communication: z.array(z.object({
          link: z.string(),
          icon: z.string(),
        })),
        aboutMe: z.string().optional(),
      }),
    }),

    work: defineCollection({
      type: 'data',
      source: 'work/*.yml',
      schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        website: z.string().optional(),
        logo: z.string().optional(),
        color: z.string().optional(),
      }),
    }),

    projectsMeta: defineCollection({
      type: 'data',
      source: 'projects/meta.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        redirectButtons: z.array(z.object({
          link: z.string(),
          color: z.enum(['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']).optional(),
          text: z.string(),
        })),
      }),
    }),

    projects: defineCollection({
      type: 'data',
      source: {
        include: 'projects/*.yml',
        exclude: ['projects/meta.yml'],
      },
      schema: z.object({
        year: z.string(),
        title: z.string(),
        description: z.string(),
        url: z.string().optional(),
      }),
    }),

  },
})
