<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about').first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero>
      <template #title>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-5xl sm:text-7xl tracking-tight font-bold text-highlighted text-center md:text-left">
              {{ page.title }}
            </h1>
            <p class="text-lg sm:text-xl text-muted mt-6  md:text-left">
              {{ page.description }}
            </p>
          </div>
          <div class="flex justify-center md:justify-end">
            <UAvatar
              class=" size-36 rounded-lg "
              :src="page.picture"
            />
          </div>
        </div>
      </template>
    </UPageHero>

    <UPageSection>
      <ContentRenderer
        :value="page"
      />
    </UPageSection>
  </UPage>
</template>
