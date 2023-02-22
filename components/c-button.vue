<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  @extend %button-reset;

  padding: 18px 28px;
  border-radius: 8px;

  color: #ffffff;
  font-weight: 600;
  line-height: 20px;

  background-color: $primary;

  transition: all 0.2s ease;

  &:hover {
    background-color: $primary-soft;
  }

  &:active {
    filter: brightness(90%);
  }

  &:disabled {
    color: #696969;

    background-color: #b2b2b2;

    pointer-events: none;
  }
}

@media (max-width: $break-phone-max) {
  .button {
    padding: 6.5px 25.5px;

    font-size: 16px;
    line-height: 19px;
  }
}
</style>
