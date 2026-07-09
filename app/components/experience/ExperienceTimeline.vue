<script setup lang="ts">
const items = ref([
  {
    date: "2026",
    title: "Full Stack Developer (Freelance)",
    company: "Immaculate Conception Seminary",
    description:
      "Built a punch-card attendance system for seminarians, faculty, and non-teaching personel.",
    avatar: {
      src: "/ics-logo.jpg",
    },
  },
  {
    date: "2026",
    title: "Decisions Dev Trainee",
    company: "Xentra",
    description: "Internship for developing systems using Decisions Platform.",
    avatar: {
      src: "/xentra-logo.jpg",
    },
  },
]);

const active = ref(1);
</script>

<template>
  <UTimeline v-model="active" :items="items" color="neutral" size="lg">
    <template #title="{ item }">
      <h3 class="font-silk-screen font-bold text-lg lg:text-xl text-primary-500">
        {{ item.title }} - <span>{{ item.company }}</span>
      </h3>
    </template>
    <template #date="{ item }">
      <span class="font-silk-screen font-bold text-md lg:text-lg text-fg-400">{{ item.date }}</span>
    </template>
    <template #description="{ item }">
      <p class="text-fg-500">{{ item.description }}</p>
    </template>
  </UTimeline>
</template>
