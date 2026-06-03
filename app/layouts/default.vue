<template>
  <div class="px-7 md:px-14 lg:px-80">
    <AppHeader />
    <main class="flex flex-col items-start justify-center w-full max-w-screen gap-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
