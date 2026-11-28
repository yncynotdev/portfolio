<script setup lang="ts">
const config = useRuntimeConfig();

const items = ref([
  {
    date: "Apr 2026 - Aug 2026",
    title: "Full Stack Developer (Part-Time)",
    company: "Immaculate Conception Seminary",
    description:
      "Built a camera-based attendance system for seminarians, replacing bundy clock system.",
    avatar: {
      src: `${config.public.bucket}/img/logo-ics.jpg`,
    },
  },
  {
    date: "Feb 2026 - May 2026",
    title: "Intern",
    company: "Xentra Solutions",
    description: "Finished Platform Certification for Decisions platform.",
    avatar: {
      src: `${config.public.bucket}/img/logo-xentra.jpg`,
    },
  },
]);

const active = ref(1);
</script>

<template>
  <section class="flex flex-col gap-5 w-full max-w-screen">
    <h2 class="text-lg lg:text-2xl text-primary-500">Experiences</h2>

    <UPageCard highlight>
      <UTimeline v-model="active" :items="items">
        <template #title="{ item }">
          <span class="font-silk-screen font-bold text-md lg:text-lg text-primary-500">
            {{ item.company }} - <span>{{ item.title }}</span>
          </span>
        </template>
        <template #date="{ item }">
          <span class="font-silk-screen font-bold text-sm lg:text-md text-fg-400">{{
            item.date
          }}</span>
        </template>
        <template #description="{ item }">
          <span>{{ item.description }}</span>
        </template>
      </UTimeline>
    </UPageCard>
  </section>
</template>
