<template>
  <div class="banner">
    <div class="banner__main">
      <h1 class="banner__heading">
        Поставщик услуг цифровой трансформации
        <br>
        и кибербезопасности
      </h1>
      <nuxt-link
        to="https://softline.ru"
        target="_blank"
      >
        <c-button>Наш сайт</c-button>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  @extend %container;

  display: flex;
  align-items: center;
  height: 600px;

  background-image: url("~/assets/images/banner.png");
  background-position: center;
  background-size: cover;

  &__heading {
    max-width: 709px;
    margin-right: 20px;
    margin-bottom: 60px;
  }
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .banner {
    &__heading {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: $break-phone-max) {
  .banner {
    height: 300px;

    &__heading {
      max-width: 280px;
      margin-bottom: 20px;
    }
  }
}
</style>
