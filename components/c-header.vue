<template>
  <div class="header">
    <img
      src="~/assets/images/logo.svg"
      alt="Логотип Softline"
      class="header__logo"
    >
    <div class="header__lines-of-business">
      <span>Облачные решения</span>
      <span>Кибербезопасность</span>
      <span>Импортозамещение</span>
      <span>Цифровая трансформация</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @extend %container;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-content: center;
  align-items: center;
  min-height: 85px;
  padding-top: 16px;
  padding-bottom: 16px;

  &__logo {
    margin-right: auto;
  }

  &__lines-of-business {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    width: max-content;

    font-weight: 600;
    white-space: nowrap;
  }
}

@media (max-width: $break-table-max) {
  .header {
    &__lines-of-business {
      width: 100%;
    }
  }
}

@media (max-width: $break-phone-max) {
  .header {
    &__lines-of-business {
      gap: 5px 10px;

      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>
