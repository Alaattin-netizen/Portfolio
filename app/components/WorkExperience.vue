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
  <UCard :ui="{ body: 'p-4' }" class="flex items-start gap-4">
    <div v-if="job.logo" class="shrink-0 w-12 h-12">
      <img :src="job.logo" :alt="job.company" class="w-full h-full object-contain">
    </div>

    <div class="flex-1">
      <UButton
        v-if="job.website"
        :to="job.website"
        target="_blank"
        variant="link"
        :style="{ color: job.color }"
        class="text-xl font-semibold p-0 h-auto hover:underline"
      >
        {{ job.company }}
      </UButton>
      <span
        v-else
        :style="{ color: job.color }"
        class="text-xl font-semibold"
      >
        {{ job.company }}
      </span>

      <p>
        {{ job.position }}
      </p>

      <p>
        {{ job.startDate }} – {{ job.endDate || 'Present' }}
      </p>
    </div>
  </UCard>
</template>
