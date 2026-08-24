<script setup lang="ts">
import monthsary from "@/assets/images/projects/monthsary/index.png";
import monthsary1 from "@/assets/images/projects/monthsary/1.png";
import monthsary2 from "@/assets/images/projects/monthsary/2.png";
import monthsary3 from "@/assets/images/projects/monthsary/3.png";
import monthsary4 from "@/assets/images/projects/monthsary/4.png";
import monthsary5 from "@/assets/images/projects/monthsary/5.png";
import portfolio from "@/assets/images/projects/portfolio/index.png";
import portfolio1 from "@/assets/images/projects/portfolio/1.png";
import portfolio2 from "@/assets/images/projects/portfolio/2.png";
import portfolio3 from "@/assets/images/projects/portfolio/3.png";
import peter from "@/assets/images/projects/peter.png";

const projects: Projects[] = [
  {
    title: "PETER",
    description: "A camera-based attendance system built using Nuxt and Hono.",
    githubUrl: "",
    imageUrl: peter,
    projectUrl: "https://peter-app-cf.pages.dev",
    techstack: peterTechStack,
  },
  {
    title: "Monthsary Website",
    description: "A project about my girlfriend built using Nuxt and Supabase.",
    githubUrl: "https://github.com/yncynotdev/monthsary",
    images: [monthsary, monthsary1, monthsary2, monthsary3, monthsary4, monthsary5],
    imageUrl: monthsary,
    projectUrl: "https://monthsary-web.vercel.app/",
    techstack: monthsaryTechStack,
  },
  {
    title: "Portfolio",
    description: "A creative portfolio built with Nuxt.",
    githubUrl: "https://github.com/yncynotdev/portfolio",
    images: [portfolio, portfolio1, portfolio2, portfolio3],
    imageUrl: portfolio,
    projectUrl: "https://yncynotdev.nuxt.dev/",
    techstack: portfolioTechStack,
  },
  {
    title: "???",
    description: "Soon..",
    githubUrl: "",
    imageUrl: "",
    projectUrl: "",
  },
];
</script>

<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-lg lg:text-2xl text-primary-500">Projects</h2>
    <ProjectsList :projects="projects" />
  </section>
</template>
