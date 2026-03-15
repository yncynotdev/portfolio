<script setup lang="ts"> </script>

<template>
  <section class="flex flex-col gap-7 w-full max-w-screen">
    <h2 class="text-lg lg:text-2xl text-purple-400">Technologies</h2>
    <div class="flex flex-col gap-5">
      <h3 class="text-lg lg:text-xl text-purple-400">Main Stack</h3>
      <MainStackList :lists="mainStackList" />
    </div>
    <div class="flex flex-col gap-5">
      <h3 class="text-lg lg:text-xl text-purple-400">Others</h3>
      <TechStackList :lists="techStackList"/>      
    </div>
    <div class="flex flex-col gap-5">
      <h3 class="text-lg lg:text-xl text-purple-400">Currently Learning</h3>
      <MainStackList :lists="learnStackList"/>      
    </div>
  </section>
</template>
