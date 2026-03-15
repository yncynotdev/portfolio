<script setup lang="ts">
const items = ref([
  {
    date: "???",
    title: "???",
    company: "???",
    description: "This will fill up once I already have a real job.",
  },
  {
    date: "2026",
    title: "Decisions Dev Trainee",
    company: "Xentra",
    description: "Internship for developing systems using Decisions Platform",
  },
]);

const active = ref(1);
</script>

<template>
  <UTimeline v-model="active" :items="items" color="neutral" size="sm">
    <template #title="{ item }">
      <h3 class="font-silk-screen font-bold text-lg lg:text-xl text-fg-500 dark:text-ctp-green-200">
        {{ item.title }} - <span>{{ item.company }}</span>
      </h3>
    </template>
    <template #date="{ item }">
      <span class="font-silk-screen font-bold text-md lg:text-lg text-fg-400">{{
        item.date
        }}</span>
    </template>
    <template #description="{ item }">
      <p class="text-fg-500">{{ item.description }}</p>
    </template>
  </UTimeline>
</template>
