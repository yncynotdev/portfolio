<script setup lang="ts">
import type { Technologies } from "#imports";

const props = defineProps<{ lists: Technologies[] }>();
</script>

<template>
  <ul class="flex flex-row flex-wrap gap-3">
    <li v-for="(item, index) in props.lists" :key="index" class="flex-1 basis-1/3 lg:basis-0">
      <UPageCard class="items-center border border-primary-500">
        <div class="flex flex-col items-center">
          <Icon :name="item.icon" :size="item.size" :class="item.color" />
          <h4 class="text-[0.8rem]">{{ item.name }}</h4>
        </div>
      </UPageCard>
    </li>
  </ul>
</template>
