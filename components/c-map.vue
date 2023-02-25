<template>
  <div
    class="map"
    :class="{ 'dropdown-opened': isDropdownOpened }"
  >
    <div class="map__header">
      <h3
        class="map__heading"
        @click="toggleDropdown"
      >
        Офисы Softline
      </h3>

      <div class="map__regions-wrapper">
        <div class="map__regions">
          <span
            v-for="region in regions"
            :key="region"
            class="map__region"
            :class="{ 'map__region_active': region === activeRegion }"
            @click="setActiveRegion(region)"
          >
            {{ region }}
          </span>
        </div>
      </div>

      <transition name="dropdown">
        <div
          v-show="isDropdownOpened"
          class="map__offices-dropdown"
        >
          <div class="map__offices-list offices-list">
            <div
              v-for="region in groupedOffices.keys()"
              :key="region"
              class="offices-list__column"
              :class="{ opened: dropdownOpenedRegion === region }"
            >
              <h6
                class="offices-list__region"
                @click="changeDropdownOpenedRegion(region)"
              >
                {{ region }}
              </h6>
              <div
                v-if="groupedOffices.get(region)!.length > 1"
                class="offices-list__cities"
              >
                <span
                  v-for="{ city } in groupedOffices.get(region)"
                  :key="city"
                  class="offices-list__city"
                >
                  {{ city }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="map__body">
      <div class="map__image-wrapper">
        <img
          src="~/assets/images/map.png"
          class="map__image"
        >

        <div
          v-for="office in activeRegionOffices"
          :key="office.city"
          class="map__office"
          :class="[office.dotTop ? 'top' : 'bottom']"
          :style="office.styles"
        >
          {{ filterCityName(office.city) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const regions = ['Все', 'Москва', 'Центр', 'Северо-Запад', 'Юг', 'Волга', 'Урал', 'Сибирь', 'Дальний Восток'] as const

type Region = Exclude<typeof regions[number], 'Все'>

interface Office {
  city: string
  region: Region
  styles: { left: string, top: string, fontSize: string}
  dotTop: boolean
}

const offices: Office[] = [
  { city: 'Москва', region: 'Москва', styles: { left: '10.19%', top: '38.8%', fontSize: '16px' }, dotTop: true },
  { city: 'Белгород', region: 'Центр', styles: { left: '6%', top: '48%', fontSize: '12px' }, dotTop: true },
  { city: 'Воронеж', region: 'Центр', styles: { left: '6.5%', top: '42.6%', fontSize: '12px' }, dotTop: true },
  { city: 'Ярославль', region: 'Центр', styles: { left: '13.2%', top: '34.4%', fontSize: '12px' }, dotTop: true },
  { city: 'Санкт-Петербург', region: 'Северо-Запад', styles: { left: '8.3%', top: '23.5%', fontSize: '16px' }, dotTop: true },
  { city: 'Калининград', region: 'Северо-Запад', styles: { left: '1.1%', top: '22%', fontSize: '12px' }, dotTop: true },
  { city: 'Ростов-на-Дону', region: 'Юг', styles: { left: '3.5%', top: '54.5%', fontSize: '14px' }, dotTop: true },
  { city: 'Краснодар', region: 'Юг', styles: { left: '2.2%', top: '65%', fontSize: '14px' }, dotTop: true },
  { city: 'Волгоград', region: 'Юг', styles: { left: '7.2%', top: '61.5%', fontSize: '12px' }, dotTop: true },
  { city: 'Казань', region: 'Волга', styles: { left: '20%', top: '50.7%', fontSize: '12px' }, dotTop: true },
  { city: 'Самара', region: 'Волга', styles: { left: '14.6%', top: '52%', fontSize: '12px' }, dotTop: true },
  { city: 'Уфа', region: 'Волга', styles: { left: '20.8%', top: '57.7%', fontSize: '12px' }, dotTop: true },
  { city: 'Оренбург', region: 'Волга', styles: { left: '17%', top: '62%', fontSize: '12px' }, dotTop: true },
  { city: 'Нижний Новгород', region: 'Волга', styles: { left: '14.1%', top: '45%', fontSize: '12px' }, dotTop: true },
  { city: 'Екатеринбург', region: 'Урал', styles: { left: '25%', top: '56%', fontSize: '12px' }, dotTop: true },
  { city: 'Челябинск', region: 'Урал', styles: { left: '24.9%', top: '62%', fontSize: '14px' }, dotTop: true },
  { city: 'Пермь', region: 'Урал', styles: { left: '31%', top: '51%', fontSize: '14px' }, dotTop: true },
  { city: 'Сургут', region: 'Урал', styles: { left: '35.5%', top: '53%', fontSize: '12px' }, dotTop: true },
  { city: 'Тюмень', region: 'Урал', styles: { left: '33.5%', top: '61.5%', fontSize: '14px' }, dotTop: true },
  { city: 'Ижевск', region: 'Урал', styles: { left: '26.5%', top: '49.6%', fontSize: '12px' }, dotTop: true },
  { city: 'Новосибирск', region: 'Сибирь', styles: { left: '40.5%', top: '76.5%', fontSize: '12px' }, dotTop: true },
  { city: 'Омск', region: 'Сибирь', styles: { left: '37.5%', top: '80.1%', fontSize: '14px' }, dotTop: true },
  { city: 'Томск', region: 'Сибирь', styles: { left: '47.5%', top: '72.5%', fontSize: '14px' }, dotTop: false },
  { city: 'Красноярск', region: 'Сибирь', styles: { left: '51.2%', top: '76%', fontSize: '12px' }, dotTop: true },
  { city: 'Иркутск', region: 'Сибирь', styles: { left: '56.5%', top: '82%', fontSize: '14px' }, dotTop: true },
  { city: 'Хабаровск', region: 'Дальний Восток', styles: { left: '80.2%', top: '79%', fontSize: '16px' }, dotTop: false },
  { city: 'Владивосток', region: 'Дальний Восток', styles: { left: '78.4%', top: '96%', fontSize: '16px' }, dotTop: true }
]

const groupedOffices = ref<Map<Region, Office[]>>(new Map())

offices.forEach((office) => {
  if (groupedOffices.value.has(office.region)) groupedOffices.value.get(office.region)!.push(office)
  else groupedOffices.value.set(office.region, [office])
})

const activeRegion = ref<Region | 'Все'>('Все')
const activeRegionOffices = computed<Office[]>(() => activeRegion.value === 'Все' ? offices : (groupedOffices.value.get(activeRegion.value) as Office[]))
const setActiveRegion = (region: Region | 'Все') => { activeRegion.value = region }

const isDropdownOpened = ref(false)
const toggleDropdown = () => { isDropdownOpened.value = !isDropdownOpened.value }

const dropdownOpenedRegion = ref<Region | null>(null)
const changeDropdownOpenedRegion = (region: Region) => { dropdownOpenedRegion.value = dropdownOpenedRegion.value === region ? null : region }
watch(isDropdownOpened, (newValue) => { if (!newValue) dropdownOpenedRegion.value = null })

const filterCityName = (city: string) => {
  return city === 'Нижний Новгород' ? 'Н. Новгород' : city
}
</script>

<style scoped lang="scss">
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.map {
  @extend %container;

  padding: 0;

  &__header {
    @extend %container;

    position: relative;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 80px;
    margin-bottom: 90px;

    box-shadow: 0 0 40px rgb(0 0 0 / 6%);
  }

  &__heading {
    position: relative;

    height: 80px;
    margin-right: 24px;
    padding-right: 32px;

    font-weight: 600;
    font-size: 24px;
    line-height: 80px;

    &::after,
    &::before {
      position: absolute;
      top: 50%;
      right: 0;

      display: inline-block;
      width: 3px;
      height: 14px;

      background-color: $gray;

      transition: transform 0.3s ease;

      content: "";
    }

    &::before {
      transform: translate(-14px, -50%) rotate(-50deg);
    }

    &::after {
      transform: translate(-5px, -50%) rotate(50deg);
    }

    &:hover {
      color: $primary-edgy;

      cursor: pointer;

      &::after,
      &::before {
        background-color: $primary-edgy;
      }
    }
  }

  &__regions-wrapper {
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  &__regions {
    display: flex;
    gap: 30px;
    width: max-content;
    height: 80px;

    font-weight: 600;
    font-size: 18px;
    line-height: 80px;
  }

  &__region {
    position: relative;

    &:hover {
      color: $primary-edgy;

      cursor: pointer;
    }

    &_active {
      color: $primary-edgy;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;

        display: block;
        width: 100%;
        height: 3px;

        background-color: $primary-edgy;

        content: "";
      }
    }
  }

  &__offices-dropdown {
    position: absolute;
    top: calc(100% + 20px);
    left: 0;
    z-index: 1;

    width: 100%;
    padding: 30px 68.5px;

    background-color: #ffffff;
    box-shadow: 0 0 32px rgb(0 0 0 / 6%);
  }

  &__body {
    margin: 0 30px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  &__image-wrapper {
    position: relative;

    min-width: max-content;
  }

  &__office {
    position: absolute;

    font-weight: 600;

    &::before {
      position: absolute;
      left: 50%;

      width: 8px;
      height: 8px;
      border-radius: 50%;

      background-color: $gray;
      transform: translateX(-50%);

      content: "";
    }

    &.top::before {
      top: -10px;
    }

    &.bottom::before {
      bottom: -10px;
    }
  }
}

.dropdown-opened {
  & .map {
    &__regions,
    &__body {
      opacity: 0.1;

      transition: opacity 0.3s ease;

      pointer-events: none;
    }

    &__heading {
      &::before {
        transform: translate(-14px, -50%) rotate(-130deg);
      }

      &::after {
        transform: translate(-5px, -50%) rotate(130deg);
      }
    }
  }
}

.offices-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;

  font-size: 18px;
  font-family: "Proxima Nova", sans-serif;
  line-height: 20px;

  &__cities {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  }

  &__region {
    font-size: 18px;
    line-height: 20px;
  }
}

@media (max-width: $break-table-max) {
  .map {
    &__header {
      margin: 0 0 9px;
    }

    &__heading {
      height: 58px;

      line-height: 58px;
    }

    &__regions {
      height: 37px;

      line-height: 100%;
    }

    &__body {
      margin: 0;
    }

    &__image {
      position: relative;
      left: 6px;

      height: 500px;
    }

    &__offices-dropdown {
      top: calc(100% - 37px);

      padding: 15px;

      box-shadow: 0 15px 16px -10px rgb(0 0 0 / 6%);
    }
  }

  .offices-list {
    gap: 15px 6%;

    &__column {
      &:nth-child(3n + 1) {
        width: 24%;
      }

      &:nth-child(3n + 2) {
        width: 24%;
      }

      &:nth-child(3n + 3) {
        width: 40%;
      }
    }

    &__region {
      position: relative;

      width: fit-content;
      padding-right: 16px;

      &::after {
        position: absolute;
        top: 50%;
        right: 0;

        width: 0;
        height: 0;
        border-top: 5px solid $gray;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;

        content: "";
      }
    }

    &__cities {
      display: none;
      gap: 8px;
      margin-top: 8px;
    }

    &__column.opened {
      .offices-list__region {
        color: $primary-edgy;

        &::after {
          border-top: none;
          border-bottom: 5px solid $gray;
        }
      }

      .offices-list__cities {
        display: flex;
      }
    }
  }
}

@media (max-width: $break-phone-max) {
  .map {
    &__heading {
      font-size: 20px;
    }

    &__regions {
      font-size: 14px;
    }

    &__image {
      height: 445px;
    }

    &__offices-dropdown {
      padding: 15px 5px;
    }
  }

  .offices-list {
    &__region,
    &__cities {
      font-size: 14px;
    }
  }
}
</style>
