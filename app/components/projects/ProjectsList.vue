<script setup lang="ts">
const props = defineProps<{ projects: Projects[] }>();
</script>

<template>
  <section>
    <UPageGrid class="lg:grid-cols-2">
      <ProjectsCard
        v-for="(item, index) in props.projects"
        :key="index"
        :title="item.title"
        :description="item.description"
        :github-url="item.githubUrl"
        :images="item.images"
        :image-url="item.imageUrl"
        :project-url="item.projectUrl"
        :techstack="item.techstack"
      />
    </UPageGrid>
  </section>
</template>
