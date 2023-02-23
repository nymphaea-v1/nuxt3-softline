<template>
  <div class="content">
    <c-banner class="content__section" />
    <c-about class="content__section" />
    <c-numbers class="content__section" />
    <c-mission class="content__section" />
    <c-lines-of-business class="content__section" />
    <c-benefits class="content__section" />
  </div>
</template>

<style scoped lang="scss">
.content__section:not(:last-child) {
  margin-bottom: 100px;
}

@media (min-width: $break-table-min) and (max-width: $break-table-max) {
  .content__section:not(:last-child) {
    margin-bottom: 80px;
  }
}

@media (max-width: $break-phone-max) {
  .content__section:not(:last-child) {
    margin-bottom: 50px;
  }
}
</style>
