<template>
  <div class="benefits">
    <div class="benefits__card">
      <div class="benefits__section compensation-package">
        <h1 class="compensation-package__heading">
          Компенсационный пакет
        </h1>
        <div class="compensation-package__list list">
          <c-round-icon
            class="compensation-package__round-icon"
            name="medicine"
          >
            ДМС
          </c-round-icon>

          <c-round-icon
            class="compensation-package__round-icon"
            name="cake"
          >
            Выходной
            <br>
            в день рождения
          </c-round-icon>

          <c-round-icon
            class="compensation-package__round-icon"
            name="phone"
          >
            Корпоративная мобильная связь
          </c-round-icon>

          <c-round-icon
            class="compensation-package__round-icon"
            name="weight"
          >
            Корпоративные скидки на спорт
          </c-round-icon>

          <c-round-icon
            class="compensation-package__round-icon"
            name="handshake"
          >
            LTI
          </c-round-icon>
        </div>
      </div>

      <div class="benefits__horizontal-line" />

      <div class="benefits__section extra-motivation">
        <h2 class="extra-motivation__heading">
          Программа дополнительной мотивации
        </h2>

        <h2 class="extra-motivation__heading extra-motivation__heading_colored">
          доплата 12% от суммы
        </h2>

        <div class="extra-motivation__list list">
          <c-round-icon
            class="extra-motivation__round-icon"
            name="printer"
          >
            Оргтехники
          </c-round-icon>

          <c-round-icon
            class="extra-motivation__round-icon"
            name="medicine"
          >
            ДМС
          </c-round-icon>

          <c-round-icon
            class="extra-motivation__round-icon"
            name="home"
          >
            Ипотеки
          </c-round-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.benefits {
  @extend %container;

  &__card {
    padding: 80px 0;

    text-align: center;

    box-shadow: 0 0 40px rgb(0 0 0 / 6%);
  }

  &__horizontal-line {
    height: 1px;
    margin: 70px 30px;

    background-color: rgb(0 0 0 / 10%);
  }
}

.compensation-package {
  &__round-icon:nth-child(5) {
    --icon-width: 60%;
  }
}

.extra-motivation {
  &__heading_colored {
    margin-bottom: 50px;

    color: $primary;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  justify-content: center;
}

@media (max-width: $break-phone-max) {
  .benefits {
    padding: 0;

    &__card {
      padding: 24px 5px;
    }

    &__horizontal-line {
      margin: 24px 0;
    }
  }

  .compensation-package {
    &__heading {
      margin-bottom: 40px;
    }

    &__list {
      gap: 25px 10px;
    }
  }

  .extra-motivation {
    &__heading_colored {
      margin-bottom: 25px;
    }

    &__list {
      gap: 25px;
      padding: 0 10vw;
    }

    &__round-icon {
      width: 80px;
    }
  }
}
</style>
