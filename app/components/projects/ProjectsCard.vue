<script setup lang="ts">
import type { Projects } from "~/utils/types";

const props = defineProps<Projects>();
const isEmptyImage = ref<boolean>(false);

onMounted(() => {
  if (props.imageUrl === "") {
    isEmptyImage.value = true;
  }
});
</script>

<template>
  <UPageCard
    aria-description="props.description"
    variant="subtle"
    :ui="{ header: 'border-none', footer: 'border-fg-500', body: 'flex-1' }"
    class="h-full flex flex-col bg-base-500 text-fg-500 border-3 border-primary-500 rounded-sm"
  >
    <template #header>
      <h3 class="text-lg lg:text-xl text-primary-500 pb-4">{{ props.title }}</h3>
      <!-- <p>{{ props.description }}</p> -->
    </template>

    <template>
    </template>

    <template #body>
      <div class="flex flex-col gap-5 w-full">
        <div v-if="!isEmptyImage">
          <img :src="props.imageUrl" alt="Image of Project" class="w-full" />
        </div>
        <div v-else>
          <GreenCat />
        </div>
        <p>{{ props.description }}</P>
        <ProjectsLink :project-url="props.projectUrl" :github-url="props.githubUrl" />
        <ProjectsTechStack :lists="props.techstack" />
      </div>
    </template>

    <!-- <template #footer> -->
    <!--   <LazyProjectsModal -->
    <!--     :title="props.title" -->
    <!--     :description="props.description" -->
    <!--     :images="props.images" -->
    <!--     :techstack="props.techstack" -->
    <!--   /> -->
    <!-- </template> -->
  </UPageCard>
</template>
