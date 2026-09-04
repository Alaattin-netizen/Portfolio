<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

useHead({
  title: 'portfolio',
})

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: 'i-lucide-laptop',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'i-lucide-user',
  },
])
</script>

<template>
  <UApp>
    <UContainer max-width="xl" padding>
      <div class="border border-default">
        <UHeader>
          <UNavigationMenu :items="items" />

          <template #right>
            <UColorModeButton />
          </template>

          <template #body>
            <UNavigationMenu orientation="vertical" :items="items" />
          </template>
        </UHeader>

        <UMain>
          <NuxtPage />
        </UMain>

        <UFooter>
          <template #right>
            <p class="text-sm text-muted">
              © {{ new Date().getFullYear() }} Portfolio. All rights reserved.
            </p>
          </template>
        </UFooter>
      </div>
    </UContainer>
  </UApp>
</template>
