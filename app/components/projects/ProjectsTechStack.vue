<script setup lang="ts">
const props = defineProps<{ lists: Technologies[] | undefined }>();
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(item, index) in props.lists" :key="index">
      <UBadge variant="subtle">
        <Icon :name="item.icon" :class="item.color" />{{ item.name }}
      </UBadge>
    </div>
  </div>
</template>
