<script setup lang="ts">
const title = Array.from("Full Stack & AI Native Developer");
</script>

<template>
  <section class="flex flex-col lg:flex-row lg:items-center w-full max-w-screen">
    <section
      class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-full max-w-screen lg:pb-28"
    >
      <h1 class="text-2xl lg:text-5xl">
        <strong>It is I,</strong>
        <span class="bg-linear-to-r from-primary-400 to-primary-300">
          <strong class="text-transparent">Yancy!</strong>
        </span>
        <br />
        <strong class="text-[2rem] lg:text-6xl">
          A
          <span class="text-transparent"
            ><strong
              ><span
                v-for="(char, i) in title"
                :key="i"
                class="wave rainbow whitespace-pre"
                :style="{ '--i': i }"
                >{{ char }}</span
              ></strong
            ></span
          >
        </strong>
      </h1>
      <HireMeButton />
    </section>

    <CoffeeWithCat />
  </section>
</template>

<style scoped>
span {
  background-clip: text;
}

.wave {
  display: inline-block;
  animation:
    rainbow-slide 4s linear infinite,
    rainbow-blink 2s ease-in-out infinite,
    wave 1.6s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.15s), 0s, calc(var(--i) * 0.08s);
}

@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }
}

@keyframes wave {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-0.25em);
  }
}
</style>
