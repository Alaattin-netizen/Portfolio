<script setup lang="ts">
defineProps<{
  project: {
    year: string
    title: string
    description: string
    url?: string
  }
}>()
</script>

<template>
  <UPageCard
    :title="project.title"
    :to="project.url"
    orientation="horizontal"
    variant="naked"
    class="group w-full"
  >
    <template #leading>
      <span class="text-sm text-muted">{{ project.year }}</span>
    </template>

    <template #description>
      <p class="text-muted w-full max-w-none">
        {{ project.description }}
      </p>
    </template>

    <template #footer>
      <ULink
        v-if="project.url"
        :to="project.url"
        class="text-sm flex items-center text-secondary"
      >
        View Project
        <UIcon
          name="i-lucide-arrow-right"
          class="size-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100 text-secondary"
        />
      </ULink>
    </template>
  </UPageCard>
</template>
