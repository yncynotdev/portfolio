<template>
  <header
    class="flex flex-row justify-between items-center pt-5 w-full max-w-screen text-primary-500 sticky top-0 bg-base-500 z-50"
  >
    <!-- It shows the SocialsList components only large screen-->
    <SocialsList class="hidden lg:flex" />
    <!-- Else this one-->
    <a
      href="https://github.com/yncynotdev"
      aria-label="Link to GitHub"
      target="_blank"
      class="sm:flex lg:hidden"
    >
      <Icon name="simple-icons:github" class="size-6" />
    </a>

    <span class="flex-row items-center gap-7 hidden lg:flex">
      <ULink to="/">Home</ULink>
      <ULink to="/game-jams">Game Jams</ULink>
      <ToggleTheme />
    </span>
  </header>
</template>
