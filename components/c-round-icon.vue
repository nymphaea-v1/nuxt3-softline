<template>
  <div class="round-icon">
    <div class="round-icon__icon-wrapper">
      <c-icon
        class="round-icon__icon"
        :name="name"
      />
    </div>
    <p class="round-icon__description">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<style scoped lang="scss">
.round-icon {
  width: max-content;

  &__icon-wrapper {
    width: 110px;
    height: 110px;
    margin: 0 auto 10px;
    border-radius: 50%;

    color: $primary;

    background-color: rgb(0 0 0 / 5%);
  }

  &__icon {
    display: block;
    width: 48px;
    height: 100%;
    margin: 0 auto;
  }

  &__description {
    width: 178px;

    font-size: 18px;
    line-height: 110%;
    text-align: center;
  }
}

@media (max-width: $break-phone-max) {
  .round-icon {
    &__icon-wrapper {
      width: 80px;
      height: 80px;
    }

    &__icon {
      width: 34px;
    }

    &__description {
      width: 120px;

      font-size: 16px;
    }
  }
}
</style>
