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
  <UCard
    class="border-0 shadow-none"
    :ui="{ body: 'px-0 py-4' }"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
      <div class="flex flex-col items-start">
        <span class="text-sm text-muted mb-2.5">{{ project.year }}</span>
        <h3 class="text-base text-pretty font-semibold text-highlighted">
          {{ project.title }}
        </h3>
        <p class="text-[15px] text-pretty text-muted mt-1">
          {{ project.description }}
        </p>
        <UButton
          v-if="project.url"
          :to="project.url"
          target="_blank"
          variant="link"
          color="primary"
          class="mt-4 p-0 h-auto text-sm group"
          :ui="{ trailingIcon: 'transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100' }"
          trailing-icon="i-lucide-arrow-right"
        >
          View Project
        </UButton>
      </div>
    </div>
  </UCard>
</template>
