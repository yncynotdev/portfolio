<template>
  <section class="flex flex-col lg:flex-row lg:items-center w-full max-w-screen">
    <section
      class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-full max-w-screen lg:pb-28"
    >
      <h1 class="text-2xl lg:text-5xl">
        <strong>It is I,</strong>
        <span class="bg-linear-to-r from-teal-400 to-teal-300 dark:from-teal-500 dark:to-teal-400">
          <strong class="text-transparent">Yancy!</strong>
        </span>
        <br />
        <strong class="text-[2rem] lg:text-6xl">
          A
          <span class="bg-linear-to-r from-primary-500 to-primary-400 text-transparent"
            ><strong>Full Stack/</strong></span
          >
          <span class="bg-linear-to-r from-purple-500 to-purple-400 text-transparent"
            ><strong>AI Native Developer</strong></span
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
</style>
