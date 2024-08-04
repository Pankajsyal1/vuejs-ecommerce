<template>
  <main>
    <!-- Banner -->
    <section class="banner">
      <div class="container-fluid px-0">
        <img src="../assets/images/banner-1.png" class="w-100" alt="banner" />
      </div>
    </section>

    <!-- Cateogories -->
    <section class="cateogories py-4 py-md-5">
      <div class="container">
        <div class="row gy-4">
          <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2" v-for="(category, index) in categories" :key="index">
            <div class="text-center">
              <img :src="require(`../assets/images/${category.image}`)" class="img-fluid" alt="category" />
              <h6 class="fs-6 fw-semibold m-0 mt-3">{{ category.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Posters -->
    <section class="posters py-4 py-md-5">
      <div class="container">
        <div class="row gy-4">
          <div :class="index === 0 || index === 1
            ? 'col-md-6 col-sm-6'
            : 'col-md-4 col-sm-6'
            " v-for="(poster, index) in posters" :key="index">
            <img :src="require(`../assets/images/${poster.image}`)" class="w-100" alt="posters" />
          </div>
        </div>
      </div>
    </section>

    <!-- Trending T-Shirts -->
    <section class="trending py-4 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <SectionHeading title="Trending T-Shirts" />
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(product, index) in products" :key="index">
            <ProductCard :productDetail="product" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center mt-4">
              <button class="btn btn-primary rounded-0">VIEW all</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="trending py-4 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <SectionHeading title="Featured Products" />
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-sm-6 col-md-3" v-for="(product, index) in products.slice(0, 4)" :key="index">
            <ProductCard :productDetail="product" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center mt-4">
              <button class="btn btn-primary rounded-0">VIEW all</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner-2 -->
    <section class="banner py-4">
      <div class="container-fluid px-0">
        <img src="../assets/images//banner-2.png" class="w-100" alt="banner" />
      </div>
    </section>

    <!-- New Products -->
    <section class="trending py-4 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <SectionHeading title="New Products" />
          </div>
        </div>
        <div class="row gy-4 gy-xl-0">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(product, index) in products.slice(0, 4)" :key="index">
            <ProductCard :productDetail="product" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center mt-4">
              <button class="btn btn-primary rounded-0">VIEW all</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Selling Products -->
    <section class="trending py-4 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <SectionHeading title="Best Selling Products" />
          </div>
        </div>
        <div class="row gy-4 gy-xl-0">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(product, index) in products.slice(0, 4)" :key="index">
            <ProductCard :productDetail="product" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center my-5">
              <button class="btn btn-primary rounded-0">VIEW all</button>
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-sm-6 col-md-4" v-for="(collection, index) in collections" :key="index">
            <CollectionCard :collectionDetail="collection" />
          </div>
        </div>
      </div>
    </section>

    <!-- Banner-3 -->
    <section class="banner py-4">
      <div class="container-fluid px-0">
        <img src="../assets/images//banner-3.png" class="w-100" alt="banner" />
      </div>
    </section>

    <!-- Sale -->
    <section class="sales py-4 py-md-5">
      <div class="container">
        <div class="row justify-content-center gy-4 gy-sm-0">
          <div class="col-sm-6 col-md-5 col-lg-4 custom-sales-wrapper" v-for="(sale, index) in sales" :key="index">
            <SaleCard :saleDetail="sale" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services bg-light py-4 py-md-5 my-4 my-md-5">
      <div class="container">
        <div class="row gy-4 gy-md-0 gx-2 gx-sm-3">
          <div class="col-6 col-sm-3 col-md-3" :class="index === 3 ? '' : 'border-primary-light border-end'"
            v-for="(service, index) in services" :key="index">
            <div class="text-center">
              <img :src="require(`../assets/icons/${service.image}`)" height="60" :alt="service.title" />
              <h6 class="fs-6 fw-semibold mt-2 mt-md-3 m-0">
                {{ service.title }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscribe -->
    <section class="subscribe py-5">
      <div class="container subscribe-bg bg-primary py-5">
        <div class="row justify-content-center">
          <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-6">
            <div class="text-center py-4">
              <h3 class="ff-secondary text-white h2 mb-3">Subscribe to get updates on exciting offers
                & deals</h3>

              <form action="" class="d-flex">
                <input type="email" placeholder="Enter your email"
                  class="fs-6 form-control form-control-lg rounded-0 border-0 py-md-3 py-2 shadow-none" />
                <button type="button"
                  class="btn btn-light rounded-0 fw-bolder text-primary border-0 ff-secondary px-4 shadow-none">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import categories from "@/data/categories";
import posters from "@/data/poster";
import products from "@/data/products";
import collections from "@/data/collections";
import services from "@/data/services";
import sales from "@/data/sales";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CollectionCard from "@/components/CollectionCard.vue";
import SaleCard from "@/components/SaleCard.vue";
export default {
  name: "HomeView",
  components: {
    SectionHeading,
    ProductCard,
    CollectionCard,
    SaleCard
  },
  data() {
    return {
      categories: categories,
      posters: posters,
      products: products,
      collections: collections,
      services: services,
      sales: sales,
    };
  },
};
</script>

<style lang="scss">
/* ************ services ************ */
.services {
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 125px;
    height: 125px;
    background-color: var(--primary);
    border-radius: 50%;
    left: -62.5px;
    bottom: -62.5px;

    @media all and (max-width:991px) {
      width: 100px;
      height: 100px;
      left: -50px;
      bottom: -50px;
    }

    @media all and (max-width:767px) {
      width: 60px;
      height: 60px;
      left: -30px;
      bottom: -30px;
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 125px;
    height: 125px;
    background-color: var(--primary);
    border-radius: 50%;
    right: -62.5px;
    top: -62.5px;

    @media all and (max-width:991px) {
      width: 100px;
      height: 100px;
      right: -50px;
      top: -50px;
    }

    @media all and (max-width:767px) {
      width: 60px;
      height: 60px;
      right: -30px;
      top: -30px;
    }
  }


}

/* ************ subscribe ************ */
.subscribe-bg {
  background-image: url("../assets/images/subscribe.png");
  background-size: 100% 100%;
}

.subscribe input {
  background-color: rgba(255, 255, 255, 0.32) !important;
  color: #fff !important;
}

input::placeholder {
  color: #fff !important;
}
</style>
