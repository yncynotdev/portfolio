<template>
  <section class="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen">
    <section
      class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-full max-w-screen lg:pb-28"
    >
      <h1 class="text-2xl lg:text-5xl">
        <strong>It is I,</strong>
        <span
          class="bg-linear-to-r from-green-400 to-green-300 dark:from-green-500 dark:to-green-400"
        >
          <strong class="text-transparent">Yancy!</strong>
        </span>
        <br />
        <strong class="text-[2rem] lg:text-6xl">
          A
          <span class="bg-linear-to-r from-primary-500 to-primary-400 text-transparent"
            ><strong>Full Stack Developer</strong></span
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
