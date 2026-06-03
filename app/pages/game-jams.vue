<script setup lang="ts">
const cards = ref([
  {
    title: "Bob the wanderer",
    description: "My first successful deployed game jam ever",
    to: "https://yncynotdev.itch.io/bob-the-wanderer",
  },
]);
</script>

<template>
  <UPageGrid>
    <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
  </UPageGrid>
</template>
