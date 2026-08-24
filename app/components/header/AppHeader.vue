<template>
  <UHeader class="bg-base-500">
    <!-- It shows the SocialsList components only large screen-->
    <template #left>
      <SocialsList class="hidden lg:flex" />
      <!-- Else this one-->
      <NuxtLink
        href="https://github.com/yncynotdev"
        aria-label="Link to GitHub"
        target="_blank"
        class="sm:flex lg:hidden"
      >
        <UIcon name="simple-icons:github" class="size-6" />
      </NuxtLink>
    </template>

    <template #right>
      <span class="flex-row items-center gap-7 hidden lg:flex">
        <!-- <ULink to="/">Home</ULink> -->
        <!-- <ULink to="/game-jams">Game Jams</ULink> -->
        <ToggleTheme />
      </span>
    </template>
  </UHeader>
</template>
