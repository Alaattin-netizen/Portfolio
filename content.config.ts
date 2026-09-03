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
        workExperience: z.object({
          title: z.string(),
          list: z.array(z.object({
            company: z.string(),
            logo: z.string().optional(),
            color: z.string().optional(),
            position: z.string(),
            startDate: z.string(),
            endDate: z.string().optional(),
            website: z.string().optional(),
          })),
        }),
        Someprojects: z.object({
          title: z.string(),
          list: z.array(z.object({
            title: z.string(),
            description: z.string(),
            year: z.string(),
            url: z.string().optional(),
          })),
        }),
      }),
    }),

    projects: defineCollection({
      type: 'data',
      source: 'projects.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        redirectButtons: z.array(z.object({
          link: z.string(),
          color: z.enum(['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']).optional(),
          text: z.string(),
        })),
        list: z.array(z.object({
          year: z.string(),
          title: z.string(),
          description: z.string(),
          url: z.string().optional(),
        })),
      }),
    }),
  },
})
