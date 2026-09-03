<script setup lang="ts">
const { data: profile } = await useAsyncData('profile-data', async () => {
  const result = await queryCollection('index').first()
  return result
})

const { data: projects } = await useAsyncData('home-projects', async () => {
  return queryCollection('projects').all()
})

const { data: workExperiences } = await useAsyncData('work-data', async () => {
  return queryCollection('work').all()
})
</script>

<template>
  <UPage v-if="profile">
    <UPageHero>
      <template #title>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            :src="profile.avatar"
            :alt="profile.title"
            class="w-20 h-20 rounded-full object-cover"
          />
          <span class="text-5xl sm:text-7xl tracking-tight font-bold text-highlighted text-center">
            {{ profile.title }}
          </span>
        </div>
      </template>

      <template #description>
        {{ profile.introduction || profile.aboutMe }}
      </template>

      <template #links>
        <UButton
          v-for="(item, idx) in profile.communication"
          :key="idx"
          :icon="item.icon"
          :to="item.link"
          target="_blank"
          variant="ghost"
        />
      </template>
    </UPageHero>

    <UPageSection :ui="{ container: 'section-custom-padding' }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">
            About Me
          </h2>
          <p class="leading-relaxed text-muted">
            {{ profile.aboutMe }}
          </p>
        </div>

        <div class="space-y-6">
          <h2 class="text-2xl font-bold mb-4">
            Work Experience
          </h2>
          <WorkExperience
            v-for="(job, idx) in workExperiences"
            :key="idx"
            :job="job"
          />
        </div>
      </div>
    </UPageSection>

    <UPageSection title="Personal Projects">
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
