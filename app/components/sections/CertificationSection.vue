<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const items = ref([
  {
    title: "IT Specialist - Device Configuration and Management",
    description: "Certification of Device Configuration Particullarly in Windows 11",
    image: `${runtimeConfig.public.bucket}/img/certificate-it-specialist.jpg`,
    to: "https://www.credly.com/earner/earned/badge/0a998623-c501-4b17-8c5b-cd806e233add",
  },
]);
</script>

<template>
  <section class="flex flex-col gap-5 w-full">
    <h2 class="text-lg lg:text-2xl text-primary-500">Certifications</h2>

    <NuxtLink v-for="(item, index) in items" :key="index" :to="item.to" target="_blank">
      <UPageCard
        :title="item.title"
        :description="item.description"
        orientation="horizontal"
        highlight
        reverse
        :ui="{ title: 'text-primary-500 dark:text-primary-400' }"
      >
        <NuxtImg :src="item.image" />
      </UPageCard>
    </NuxtLink>
  </section>
</template>
