<template>
  <div class="section-title text-center mb-4 mb-md-5">
    <h3 class="bg-white d-inline-block px-3 m-0 ff-secondary fw-semibold">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
.section-title {
  position: relative;
  z-index: 1;
  h3 {
    z-index: 1;
    position: relative;
  }
  &::before {
    position: absolute;
    background-color: #ffc7d1;
    width: 100%;
    height: 2px;
    content: "";
    inset: 0;
    margin: auto;
    z-index: 0;
  }
}

/* #FFC7D1; */
</style>
