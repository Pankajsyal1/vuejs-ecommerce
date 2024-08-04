<template>
  <div class="product-card position-relative">
    <div class="product-card-image position-relative">
      <img
        :src="require(`../assets/images/${productDetail.image}`)"
        class="w-100 object-fit-cover"
        height="350"
        alt="product"
      />
      <!-- Icons  -->
      <ul
        class="product-card-buttons d-flex list-unstyled mb-0 gap-2 align-items-center justify-content-center position-absolute top-0 bottom-0 end-0 start-0 m-auto"
      >
        <li>
          <button class="border-0 bg-transparent" v-html="shareIcon"></button>
        </li>
        <li>
          <button class="border-0 bg-transparent" v-html="heartIcon"></button>
        </li>
        <li>
          <button class="border-0 bg-transparent" v-html="cartIcon"></button>
        </li>
      </ul>
    </div>
    <div class="product-card-content text-center px-3 py-2">
      <h5
        class="text-secondary fs-14 fw-medium mx-auto mb-2"
        style="inline-size: 18ch"
      >
        {{ productDetail.name }}
      </h5>
      <h6 class="fs-18 fw-bold m-0">
        ₹{{ productDetail.price }}
        <s class="text-danger fw-normal fs-10">₹{{ productDetail.discount }}</s>
      </h6>
    </div>
    <div class="product-card-size text-center px-3 pb-2">
      <div class="d-inline-flex gap-2 justify-content-center">
        <button type="button" class="size-button">S</button>
        <button type="button" class="size-button">M</button>
        <button type="button" class="size-button">L</button>
        <button type="button" class="size-button">XL</button>
        <button type="button" class="size-button">XXL</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productDetail: Object,
  },
  data() {
    return {
      shareIcon:
        '<svg width="44" height="44" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27.1147" r="27" fill="white"/><path d="M28.576 32.3859L23.466 29.5989C22.9755 30.0858 22.3518 30.4165 21.6736 30.5495C20.9954 30.6824 20.2929 30.6116 19.6549 30.346C19.0169 30.0803 18.4718 29.6317 18.0883 29.0567C17.7049 28.4817 17.5003 27.806 17.5003 27.1149C17.5003 26.4237 17.7049 25.7481 18.0883 25.173C18.4718 24.598 19.0169 24.1494 19.6549 23.8838C20.2929 23.6181 20.9954 23.5473 21.6736 23.6802C22.3518 23.8132 22.9755 24.144 23.466 24.6309L28.576 21.8439C28.4007 21.0216 28.5273 20.1637 28.9326 19.4271C29.3378 18.6905 29.9947 18.1244 30.7831 17.8323C31.5714 17.5402 32.4386 17.5416 33.226 17.8363C34.0134 18.1311 34.6684 18.6993 35.0712 19.4373C35.474 20.1752 35.5978 21.0335 35.4198 21.8552C35.2418 22.6769 34.774 23.407 34.1019 23.9122C33.4298 24.4173 32.5984 24.6636 31.7596 24.6061C30.9208 24.5485 30.1308 24.191 29.534 23.5989L24.424 26.3859C24.5259 26.8665 24.5259 27.3632 24.424 27.8439L29.534 30.6309C30.1308 30.0387 30.9208 29.6812 31.7596 29.6237C32.5984 29.5661 33.4298 29.8124 34.1019 30.3176C34.774 30.8227 35.2418 31.5528 35.4198 32.3745C35.5978 33.1962 35.474 34.0545 35.0712 34.7924C34.6684 35.5304 34.0134 36.0987 33.226 36.3934C32.4386 36.6881 31.5714 36.6895 30.7831 36.3974C29.9947 36.1053 29.3378 35.5392 28.9326 34.8026C28.5273 34.066 28.4007 33.2081 28.576 32.3859Z" fill="#770015"/></svg>',
      heartIcon:
        '<svg width="44" height="44" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27.1147" r="27" fill="white"/><path d="M35.243 19.8719C37.505 22.1399 37.583 25.7519 35.479 28.1079L26.999 36.5999L18.521 28.1079C16.417 25.7519 16.496 22.1339 18.757 19.8719C20.515 18.1149 23.093 17.6749 25.261 18.5549L21.343 22.4729L22.757 23.8879L27 19.6449L26.987 19.6309L27.001 19.6439C29.35 17.5349 32.98 17.6049 35.243 19.8719Z" fill="#770015"/></svg>',
      cartIcon:
        '<svg width="44" height="44" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27.1147" r="27" fill="white"/><path d="M19 21.5286L15.757 18.2866L17.172 16.8716L20.414 20.1146H35.656C35.8119 20.1146 35.9656 20.151 36.1049 20.2209C36.2442 20.2909 36.3652 20.3924 36.4583 20.5175C36.5513 20.6425 36.6139 20.7876 36.6409 20.9411C36.668 21.0946 36.6588 21.2523 36.614 21.4016L34.214 29.4016C34.1523 29.6077 34.0257 29.7883 33.8531 29.9168C33.6806 30.0452 33.4712 30.1146 33.256 30.1146H21V32.1146H32V34.1146H20C19.7348 34.1146 19.4804 34.0092 19.2929 33.8217C19.1054 33.6342 19 33.3798 19 33.1146V21.5286ZM20.5 38.1146C20.1022 38.1146 19.7207 37.9565 19.4394 37.6752C19.1581 37.3939 19 37.0124 19 36.6146C19 36.2168 19.1581 35.8352 19.4394 35.5539C19.7207 35.2726 20.1022 35.1146 20.5 35.1146C20.8978 35.1146 21.2794 35.2726 21.5607 35.5539C21.842 35.8352 22 36.2168 22 36.6146C22 37.0124 21.842 37.3939 21.5607 37.6752C21.2794 37.9565 20.8978 38.1146 20.5 38.1146ZM32.5 38.1146C32.1022 38.1146 31.7207 37.9565 31.4394 37.6752C31.1581 37.3939 31 37.0124 31 36.6146C31 36.2168 31.1581 35.8352 31.4394 35.5539C31.7207 35.2726 32.1022 35.1146 32.5 35.1146C32.8978 35.1146 33.2794 35.2726 33.5607 35.5539C33.842 35.8352 34 36.2168 34 36.6146C34 37.0124 33.842 37.3939 33.5607 37.6752C33.2794 37.9565 32.8978 38.1146 32.5 38.1146Z" fill="#770015"/></svg>',
    };
  },
};
</script>

<style lang="scss">
.product-card {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  .product-card-image img {
    transition: all 0.2s ease-in-out;
  }
  .product-card-buttons {
    visibility: hidden;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .product-card-image img {
      filter: blur(4px);
      transition: all 0.2s ease-in-out;
    }
    .product-card-buttons {
      visibility: visible;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
