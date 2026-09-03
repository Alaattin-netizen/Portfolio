<script setup lang="ts">
const { data: profile } = await useAsyncData('profile-data', async () => {
  const result = await queryCollection('index').first()
  return result
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
            size="2xl"
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

    <UPageSection>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">
            About Me
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ profile.aboutMe }}
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">
            {{ profile.workExperience.title }}
          </h2>
          <div class="space-y-6">
            <WorkExperience
              v-for="(job, idx) in profile.workExperience.list"
              :key="idx"
              :job="job"
            />
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection :title="profile.Someprojects.title">
      <div class="flex flex-col gap-2">
        <ProjectCard
          v-for="(project, idx) in profile.Someprojects.list"
          :key="idx"
          :project="project"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
