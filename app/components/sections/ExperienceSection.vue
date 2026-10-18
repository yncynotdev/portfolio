<script setup lang="ts">
const config = useRuntimeConfig();

const items = ref([
  {
    date: "2026",
    title: "Full Stack Developer (Freelance)",
    company: "Immaculate Conception Seminary",
    description:
      "Built a punch-card attendance system for seminarians, faculty, and non-teaching personel.",
    avatar: {
      src: `${config.public.bucket}/img/logo-ics.jpg`,
    },
  },
  {
    date: "2026",
    title: "Decisions Dev Trainee",
    company: "Xentra",
    description: "Internship for developing systems using Decisions Platform.",
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

    <UPageCard class="border border-primary-500">
      <UTimeline v-model="active" :items="items">
        <template #title="{ item }">
          <span class="font-silk-screen font-bold text-md lg:text-lg text-primary-500">
            {{ item.title }} - <span>{{ item.company }}</span>
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
