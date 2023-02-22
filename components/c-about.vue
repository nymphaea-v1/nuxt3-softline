<template>
  <div class="about">
    <div class="about__card">
      <p class="about__text">
        <span class="about__company-name">Softline</span>
        – ведущий поставщик IT-решений и сервисов.*
        Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение,
        решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  @extend %container;

  &__card {
    padding: 99px 110px;

    text-align: center;

    box-shadow: 0 0 32px rgb(0 0 0 / 8%);
  }

  &__text {
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
  }

  &__company-name {
    color: $primary;
  }
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .about {
    padding: 0;

    &__card {
      padding: 50px 55px;
    }

    &__text {
      font-size: 28px;
    }
  }
}

@media (max-width: $break-phone-max) {
  .about {
    padding: 0;

    &__card {
      padding: 24px 5px;
    }

    &__text {
      font-size: 16px;
    }
  }
}
</style>
