<template>
  <div class="lines-of-business">
    <h1 class="lines-of-business__heading">
      Направления бизнеса
    </h1>

    <div class="lines-of-business__list">
      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/solutions-softline.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Решения Softline
          </h6>
          <p class="line__text">
            ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.
          </p>
        </div>
      </div>

      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/cybersecurity.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Кибербезопасность
          </h6>
          <p class="line__text">
            Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.
          </p>
        </div>
      </div>

      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/import-substitution.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Импортозамещение
          </h6>
          <p class="line__text">
            ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.
          </p>
        </div>
      </div>

      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/cloud-solutions.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Облачные решения
          </h6>
          <p class="line__text">
            Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.
          </p>
        </div>
      </div>

      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/software-development.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Цифровая трансформация разработка ПО
          </h6>
          <p class="line__text">
            Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.
          </p>
        </div>
      </div>

      <div class="lines-of-business__item line">
        <img
          src="~assets/images/lines-of-business/tech-support-softline.png"
          class="line__image"
        >
        <div class="line__description">
          <h6 class="line__heading">
            Техническая поддержка Softline
          </h6>
          <p class="line__text">
            200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lines-of-business {
  @extend %container;

  padding: 0;

  &__heading {
    margin-bottom: 55px;

    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 22px 20px;
    justify-content: center;
  }

  &__item {
    width: calc(50% - 10px);
    max-width: 615px;
  }
}

.line {
  position: relative;

  height: 260px;
  overflow: hidden;

  color: #ffffff;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__description {
    position: absolute;
    bottom: -180px;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 0 20px 28px;

    background-color: rgba(#2d3653, 60%);

    transition: bottom 0.3s ease;
  }

  &__heading {
    display: flex;
    align-items: center;
    height: 80px;

    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }

  &__text {
    width: 78%;

    font-size: 17px;
    line-height: 140%;
  }

  &:hover {
    & .line__description {
      bottom: 0;
    }
  }
}

@media (max-width: $break-table-max) {
  .lines-of-business {
    &__list {
      gap: 10px;
    }

    &__item {
      width: 100%;
    }
  }

  .line {
    height: 60px;

    transition: height 0.3s ease;

    &__image {
      height: 240px;
    }

    &__description {
      top: 0;

      height: 240px;
      padding: 0 10px 20px;
    }

    &__heading {
      height: 60px;
      margin-right: 31px;

      font-size: 20px;

      &::after,
      &::before {
        position: absolute;
        right: 18px;

        display: inline-block;
        width: 2px;
        height: 10px;

        background-color: #ffffff;

        transition: transform 0.3s ease;

        content: "";
      }

      &::before {
        transform: translateX(-6px) rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }

    &__text {
      font-size: 16px;
    }

    &:hover {
      height: 240px;

      & .line__heading::before {
        transform: translateX(-6px) rotate(-135deg);
      }

      & .line__heading::after {
        transform: rotate(135deg);
      }
    }
  }
}
</style>
