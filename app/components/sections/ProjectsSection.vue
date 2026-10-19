<script setup lang="ts">
const config = useRuntimeConfig();

const posts = ref([
  {
    title: "ClockUp",
    description: "A camera-based attendance system built using Nuxt and Hono.",
    image: `${config.public.bucket}/img/project-clockup.png`,
    to: "https://clock-up.pages.dev",
    github: "https://github.com/yncynotdev/ClockUp",
    techstack: peterTechStack,
  },
  {
    title: "Monthsary",
    description: "A project about my girlfriend built using Nuxt and Supabase.",
    image: `${config.public.bucket}/img/project-monthsary.png`,
    to: "https://monthsary-web.vercel.app/",
    techstack: monthsaryTechStack,
  },
  {
    title: "Portfolio",
    description: "A creative portfolio built with Nuxt.",
    image: `${config.public.bucket}/img/project-portfolio.png`,
    to: "https://yncynotdev.pages.dev/",
    techstack: portfolioTechStack,
  },
]);
</script>

<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-lg lg:text-2xl text-primary-500">Projects</h2>
    <UBlogPosts>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :image="post.image"
        :to="post.to"
        target="_blank"
        :ui="{ title: 'text-primary-500' }"
      >
        <template #description>
          <div class="flex flex-col gap-4">
            <p>{{ post.description }}</p>

            <ProjectsTechStack :lists="post.techstack" />
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </section>
</template>
