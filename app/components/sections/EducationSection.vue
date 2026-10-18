<script setup lang="ts">
const education: Education[] = [
  {
    school: "La Consolacion University Philippines",
    course: "Bachelor of Science in Information Technology",
    year: "2026",
  },
];
</script>

<template>
  <section id="education" class="flex flex-col gap-5 w-full max-w-screen pb-24">
    <h2 class="text-lg lg:text-2xl text-primary-500 text-cat-text">Education</h2>

    <UPageCard class="border border-primary-500">
      <ul class="flex flex-col gap-5">
        <li v-for="(item, index) in education" :key="index">
          <div>
            <h3 class="text-primary-500">{{ item.school }}</h3>
            <pre class="whitespace-normal">{{ item.course }}</pre>
            <em>{{ item.year }}</em>
          </div>
        </li>
      </ul>
    </UPageCard>
  </section>
</template>
