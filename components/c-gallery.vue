<template>
  <c-slider
    class="gallery"
    :images="images"
    aspect-ratio="1110 / 834"
  >
    <template #heading>
      Корпоративная жизнь
    </template>
  </c-slider>
</template>

<script setup lang="ts">
const images = [
  { folder: 'gallery', name: 'slide-1', alt: 'Наши достижения' },
  { folder: 'gallery', name: 'slide-2', alt: 'День донора' },
  { folder: 'gallery', name: 'slide-3', alt: 'Проект в поддержку ЗОЖ "Вместе на движе"' },
  { folder: 'gallery', name: 'slide-4', alt: 'Корпоративный спорт' },
  { folder: 'gallery', name: 'slide-5', alt: 'Фотоконкурс "Арбуз-party"' }
]
</script>
