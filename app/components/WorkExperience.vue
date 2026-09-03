<script setup lang="ts">
defineProps<{
  job: {
    company: string
    position: string
    startDate: string
    endDate?: string
    website?: string
    logo?: string
    color?: string
  }
}>()
</script>

<template>
  <UPageCard
    variant="naked"
    class="p-0!"
  >
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4 w-full">
      <span class="text-sm text-muted">{{ job.startDate }} – {{ job.endDate || 'Present' }}</span>

      <hr class="border-t border-muted w-full">

      <div class="flex flex-wrap items-center gap-1.5 text-sm text-muted md:justify-self-end">
        <span>{{ job.position }}</span>
        <span>at</span>
        <img
          v-if="job.logo"
          :src="job.logo"
          :alt="job.company"
          class="w-4 h-4 object-contain"
        >
        <a
          v-if="job.website"
          :href="job.website"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium hover:underline"
          :style="{ color: job.color || 'var(--color-primary-500)' }"
        >
          {{ job.company }}
        </a>
        <span
          v-else
          class="font-medium"
          :style="{ color: job.color || 'var(--color-primary-500)' }"
        >
          {{ job.company }}
        </span>
      </div>
    </div>
  </UPageCard>
</template>
