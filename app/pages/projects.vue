<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', async () => {
  const result = await queryCollection('projects').first()
  return result
})

if (!projects.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projects not found', fatal: true })
}
</script>

<template>
  <UPage v-if="projects">
    <UPageHero>
      <template #title>
        <h1 class="tracking-tight font-bold text-highlighted mx-0 max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl text-left">
          {{ projects.title }}
        </h1>
      </template>
      <template #description>
        <div class="text-md  max-w-2xl sm:text-md text-muted text-balance mt-6 mx-0 text-left">
          {{ projects.description }}
        </div>
      </template>
      <template #links>
        <div class="flex flex-wrap gap-x-6 gap-y-3 justify-start">
          <UButton
            v-for="(btn, idx) in projects.redirectButtons"
            :key="idx"
            :to="btn.link"
            target="_blank"
            :color="btn.color || 'primary'"
            variant="solid"
          >
            {{ btn.text }}
          </UButton>
        </div>
      </template>
    </UPageHero>

    <UPageSection>
      <div class="flex flex-col gap-2">
        <ProjectCard
          v-for="(project, idx) in projects.list"
          :key="idx"
          :project="project"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
