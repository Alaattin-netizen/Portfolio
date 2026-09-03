import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/ui', 'nuxt-studio'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

})