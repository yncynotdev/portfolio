<template>
  <section class="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen">
    <section
      class="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-full max-w-screen lg:pb-28"
    >
      <h1 class="text-2xl lg:text-5xl">
        <span class="bg-linear-to-r from-purple-500 to-purple-400">
          <strong class="text-transparent">It is I,</strong>
        </span>
        <span class="bg-linear-to-r from-primary-500 to-primary-400">
          <strong class="text-transparent">It is I, Yancy! </strong>
        </span>
        <br />
        <strong class="text-[2rem] lg:text-6xl"> Your average programming enjoyer! </strong>
      </h1>
      <BadgesList />
    </section>

    <CoffeeWithCat />
  </section>
</template>

<style scoped>
span {
  background-clip: text;
}
</style>
