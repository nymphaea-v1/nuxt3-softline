<template>
  <svg class="icon">
    <use :href="id" />
  </svg>
</template>

<script setup lang="ts">
import 'virtual:svg-icons-register'

const props = defineProps<{ name: string }>()

const id = computed(() => `#icon-${props.name}`)
</script>

<style>
#svg-sprite symbol path {
  fill: currentcolor;
}
</style>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  aspect-ratio: 1;
}
</style>
