<script setup lang="ts">
const props = defineProps<{ projects: Projects[] }>();
</script>

<template>
  <section>
    <ul class="grid grid-cols-1 lg:grid-cols-3 gap-9">
      <li v-for="(item, index) in props.projects" :key="index">
        <ProjectsCard
          :title="item.title"
          :description="item.description"
          :github-url="item.githubUrl"
          :images="item.images"
          :image-url="item.imageUrl"
          :project-url="item.projectUrl"
          :techstack="item.techstack"
        />
      </li>
    </ul>
  </section>
</template>
