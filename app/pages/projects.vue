<script setup lang="ts">
const { data: meta } = await useAsyncData('projects-meta', async () => {
  return queryCollection('projectsMeta').first()
})

const { data: projects } = await useAsyncData('projects-list', async () => {
  return queryCollection('projects').all()
})

if (!meta.value || !projects.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projects not found', fatal: true })
}
</script>

<template>
  <UPage v-if="meta && projects">
    <UPageHero>
      <template #title>
        <h1 class="tracking-tight font-bold text-highlighted ...">
          {{ meta.title }}
        </h1>
      </template>
      <template #description>
        <div class="...">
          {{ meta.description }}
        </div>
      </template>
      <template #links>
        <div class="flex flex-wrap ...">
          <UButton
            v-for="(btn, idx) in meta.redirectButtons"
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
          v-for="(project, idx) in projects"
          :key="idx"
          :project="project"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
