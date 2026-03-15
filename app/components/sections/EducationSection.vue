<script setup lang="ts">
const education: Education[] = [
  {
    school: "La Consolacion University Philippines",
    course: "Bachelor of Science in Information Technology",
    year: "Expected Year - 2026",
  },
  {
    school: "La Consolacion University Philippines",
    course:
      "Technological Vocational Course - Information and Communications Technology",
    year: "2022",
  },
];
</script>

<template>
  <section id="education" class="flex flex-col gap-5 w-full max-w-screen">
    <h2 class="text-lg lg:text-2xl text-secondary-600 text-cat-text">Education</h2>
    <UCard class="bg-base-500 text-fg-500 border-3 border-secondary-600 rounded-sm">
      <ul class="flex flex-col gap-5">
        <li v-for="(item, index) in education" :key="index">
          <div>
            <h3 class="text-secondary-600">{{ item.school }}</h3>
            <pre class="whitespace-normal">{{ item.course }}</pre>
            <em class="text-fg-400">{{ item.year }}</em>
          </div>
        </li>
      </ul>
    </UCard>
  </section>
</template>
