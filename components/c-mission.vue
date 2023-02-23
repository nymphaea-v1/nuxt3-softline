<template>
  <div class="mission">
    <img
      src="~/assets/images/mission/left-pattern.svg"
      class="mission__pattern mission__pattern_left"
    >
    <img
      src="~/assets/images/mission/right-pattern.svg"
      class="mission__pattern mission__pattern_right"
    >

    <div class="mission__main">
      <h1 class="mission__heading">
        Миссия Softline
      </h1>

      <p class="mission__text">
        Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.mission {
  @extend %container;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 471px;
  overflow: hidden;

  background-image:
    linear-gradient($primary-background, $primary-background),
    linear-gradient(#{rgba($primary-edgy, 0.5)}, #{rgba($primary-edgy, 0.5)});
  background-blend-mode: darken;

  &__main {
    position: relative;
    z-index: 1;

    color: #ffffff;
    text-align: center;
  }

  &__heading {
    margin-bottom: 40px;
  }

  &__text {
    padding: 0 14px;

    font-size: 32px;
    line-height: 150%;
  }

  &__pattern {
    position: absolute;
    top: 50%;

    height: 80%;

    transform: translateY(-50%);
    opacity: 0.3;

    &_left {
      left: -48px;
    }

    &_right {
      right: -53px;
    }
  }
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .mission {
    height: 300px;

    &__heading {
      margin-bottom: 25px;
    }

    &__text {
      width: 80vw;
      padding: 0;

      font-size: 24px;
      line-height: 130%;
    }
  }
}

@media (max-width: $break-phone-max) {
  .mission {
    height: 186px;

    &__heading {
      margin-bottom: 10px;
    }

    &__text {
      width: 280px;
      padding: 0;

      font-size: 16px;
      line-height: 130%;
    }

    &__pattern {
      top: 21px;

      height: 83%;

      transform: translateY(0);

      &_left {
        left: -48px;
      }

      &_right {
        right: -34px;
      }
    }
  }
}
</style>
