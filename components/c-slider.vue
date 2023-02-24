<template>
  <div class="slider">
    <div class="slider__header">
      <h1 class="slider__heading">
        <slot name="heading" />
      </h1>

      <div class="slider__buttons">
        <c-round-icon
          class="slider__arrow slider__arrow_left"
          name="arrow"
          @click="prevImage"
        />
        <c-round-icon
          class="slider__arrow slider__arrow_right"
          name="arrow"
          @click="nextImage"
        />
      </div>
    </div>

    <div
      ref="slideElement"
      class="slider__slide"
      @click="scrollImage"
    >
      <transition-group
        name="slide"
        :enter-from-class="`slide-${slideTransitionDirection}-enter-from`"
        :leave-to-class="`slide-${slideTransitionDirection}-leave-to`"
      >
        <div
          :key="currentImageIndex"
          class="slider__image-wrapper"
        >
          <img
            :src="currentImage"
            class="slider__image"
          >
        </div>
      </transition-group>
    </div>

    <div class="slider__lines">
      <div
        v-for="index in images.length"
        :key="index"
        class="slider__line"
        :class="{ slider__line_active: index - 1 === currentImageIndex }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Image {
  folder: string
  name: string
  alt: string
}
const props = defineProps<{
  images: Image[]
  aspectRatio: string
}>()

const currentImageIndex = ref(0)
const currentImage = ref('')

const slideElement = ref<HTMLElement | null>(null)
const slideTransitionDirection = ref<'next' | 'prev'>('next')

watchEffect(async () => {
  currentImage.value = await getImage()
})

const nextImage = () => {
  const index = ++currentImageIndex.value

  currentImageIndex.value = index === props.images.length ? 0 : index
  slideTransitionDirection.value = 'next'
}

const prevImage = () => {
  const index = --currentImageIndex.value

  currentImageIndex.value = index === -1 ? props.images.length - 1 : index
  slideTransitionDirection.value = 'prev'
}

const scrollImage = (event: MouseEvent) => {
  if (slideElement.value === null) return

  if (event.offsetX >= slideElement.value.clientHeight / 2) nextImage()
  else prevImage()
}

async function getImage () {
  const { folder, name } = props.images[currentImageIndex.value]
  return (await import(`../assets/images/${folder}/${name}.png`)).default
}
</script>

<style scoped lang="scss">
.slider {
  @extend %container;

  &__header {
    display: flex;
  }

  &__heading {
    flex-grow: 1;
  }

  &__arrow {
    --icon-width: 10px;
    --cirle-size: 56px;

    display: inline-block;
    width: min-content;
    border-radius: 50%;

    &_left {
      margin-right: 20px;
    }

    &_right {
      transform: rotate(180deg);
    }

    &:hover {
      background-color: rgb(0 0 0 / 20%);
      cursor: pointer;

      transition: background-color 0.3s ease;
    }
  }

  &__slide {
    position: relative;

    width: 100%;
    aspect-ratio: v-bind(aspectRatio);

    overflow: hidden;

    cursor: pointer;
  }

  &__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
  }

  &__lines {
    display: flex;
    gap: 10px;
    margin: 40px 0 56px;
  }

  &__line {
    flex-grow: 1;
    height: 6px;

    background-color: rgb(0 0 0 / 10%);

    &_active {
      background-color: $primary-edgy;
    }
  }
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .slider__buttons {
    display: none;
  }
}

@media (max-width: $break-phone-max) {
  .slider {
    &__heading {
      margin-bottom: 15px;
    }

    &__buttons,
    &__lines {
      display: none;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  position: absolute;

  transition: transform 0.3s ease;
}

.slide-next {
  &-enter-from {
    transform: translate(100%);
  }

  &-leave-to {
    transform: translate(-100%);
  }
}

.slide-prev {
  &-enter-from {
    transform: translate(-100%);
  }

  &-leave-to {
    transform: translate(100%);
  }
}
</style>
