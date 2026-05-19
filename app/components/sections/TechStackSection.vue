<script setup lang="ts"></script>

<template>
  <section class="flex flex-col gap-7 w-full max-w-screen">
    <h2 class="text-lg lg:text-2xl text-primary-500">Technologies</h2>
    <div class="flex flex-col gap-5">
      <h3 class="text-lg lg:text-xl text-primary-500">Main Stack</h3>
      <MainStackList :lists="mainStackList" />
    </div>
    <div class="flex flex-col gap-5">
      <h3 class="text-lg lg:text-xl text-primary-500">Others</h3>
      <TechStackList :lists="techStackList" />
    </div>
  </section>
</template>
