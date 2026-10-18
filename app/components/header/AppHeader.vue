<template>
  <UHeader>
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
        <UColorModeButton aria-label="Toggle Theme Button" />
      </span>
    </template>
  </UHeader>
</template>
