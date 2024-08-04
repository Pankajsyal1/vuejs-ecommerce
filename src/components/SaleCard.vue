<template>
  <div class="sale-card p-3 p-md-4 p-lg-5 text-center d-flex flex-column gap-3">
    <div>
      <img :src="require(`../assets/icons/${saleDetail.image}`)" width="140" alt="">
    </div>
    <div>
      <h3 class="h3 ff-secondary fw-semibold">Hurry Up!</h3>
      <h4 class="my-2 display-5 ff-secondary"><span class="fw-bold">{{ saleDetail.discount }}%</span> <span
          class="fw-bold">
          OFF</span></h4>
      <h3 class="h3 ff-secondary">Sale</h3>
    </div>
    <div>
      <router-link to="" class="btn btn-outline-light rounded-0 px-4">Shop Now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    saleDetail: Object
  }
}
</script>

<style lang="scss">
.custom-sales-wrapper {

  &:nth-child(1) {
    .sale-card {
      background-color: #CCCEA7;
    }
  }

  &:nth-child(2) {
    .sale-card {
      background-color: #D6BEBE;
    }
  }
}
</style>