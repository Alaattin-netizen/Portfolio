import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/ui', 'nuxt-studio'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  studio: {
    route: '/_studio',

    repository: {
      provider: 'github',
      owner: 'Alaattin-netizen',
      repo: 'Portfolio',
      branch: 'main',
    },
  },

  runtimeConfig: {
    public: {
      studioAuthGithubClientId: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_ID,
      studioAuthGithubClientSecret: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_SECRET,
    },
  },
})
