<template>
  <div class="numbers">
    <div class="numbers__item">
      <p class="numbers__number">
        <span class="numbers__more-than">></span>30 лет
      </p>
      <p class="numbers__text">
        на IT-рынке
      </p>
    </div>

    <div class="numbers__item">
      <p class="numbers__number">
        4600
      </p>
      <p class="numbers__text">
        сотрудников в России
      </p>
    </div>

    <div class="numbers__item">
      <p class="numbers__number">
        25
      </p>
      <p class="numbers__text">
        городов России
      </p>
    </div>

    <div class="numbers__item">
      <p class="numbers__number">
        2000
        <span class="numbers__plus">+</span>
      </p>
      <p class="numbers__text">
        разработчиков
      </p>
    </div>

    <div class="numbers__item">
      <p class="numbers__number">
        3000
        <span class="numbers__plus">+</span>
      </p>
      <p class="numbers__text">
        сотрудников ежегодно
        <br>
        проходят оценку и обучение
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.numbers {
  display: flex;
  flex-wrap: wrap;
  gap: 80px 185px;
  justify-content: center;
  max-width: 889px;
  margin: 0 auto;

  &__item:nth-child(n + 4) {
    margin: 0 -2.5px;
  }

  &__number {
    color: $primary-edgy;
    font-weight: 600;
    font-size: 80px;
    line-height: 80%;
  }

  &__more-than {
    display: inline-block;
    margin-right: 10px;

    font-weight: 900;
    font-size: 64px;
    line-height: 100%;
    vertical-align: top;
  }

  &__plus {
    margin-left: -6px;

    font-size: 64px;
    vertical-align: top;
  }

  &__text {
    line-height: 150%;
  }
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .numbers {
    gap: 40px 5vw;
    max-width: 95vw;

    text-align: center;

    &__item {
      width: 210px;
      margin: 0;
    }

    &__number {
      font-size: 56px;
    }

    &__more-than {
      margin-right: 6px;

      font-size: 44px;
    }

    &__plus {
      font-size: 44px;
    }
  }
}

@media (max-width: $break-phone-max) {
  .numbers {
    gap: 24px 8px;
    justify-content: space-around;
    max-width: 264px;

    text-align: center;

    &__item {
      margin: 0;
    }

    &__number {
      font-size: 40px;
    }

    &__more-than {
      margin-right: 4px;

      font-size: 30px;
    }

    &__plus {
      font-size: 30px;
    }

    &__text {
      margin-left: -4px;

      font-size: 16px;
    }
  }
}
</style>
