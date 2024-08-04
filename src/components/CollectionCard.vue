<template>
  <div class="colllection-card position-relative">
    <div class="colllection-card-image position-relative">
      <img :src="require(`../assets/images/${collectionDetail.image}`)" class="w-100 object-fit-cover" height="380"
        alt="colllection" />
      <div class="colllection-card-content text-center p-3">
        <h5 class="text-secondary fs-14 fw-medium text-white m-0">
          {{ collectionDetail.title }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collectionDetail: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.colllection-card-content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(111deg,
      rgba(255, 255, 255, 0.4) -8.95%,
      rgba(255, 255, 255, 0.01) 114%);

  backdrop-filter: blur(32px);
}
</style>
