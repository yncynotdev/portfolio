<script setup lang="ts">
const link = "mailto:paalayancy@gmail.com";
</script>

<template>
  <UButton
    aria-label="Hire Me button (I use Neovim btw!)"
    icon="lucide:arrow-right"
    label="Hire me I use Neovim and Pi btw!"
    :to="link"
    target="_blank"
    class="rainbow text-md font-silk-screen text-neutral-950"
  />
</template>
