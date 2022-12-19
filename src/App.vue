<script setup>
  import '@fortawesome/free-solid-svg-icons';
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import BaseHeader from './components/BaseHeader.vue';
  import BaseCelNavbarVue from './components/BaseCelNavbar.vue';

  let OpenNav = ref(false);
  const num = ref(1);

  function ToggleOpenNav() {
    OpenNav.value = !OpenNav.value
    console.log(OpenNav.value)
  }

  // const SneakersData = [
  //   {
  //       id: 1,
  //       price: 500,
  //       name: 'Fall Bliss',
  //       description: `These low-profile sneakers are your perfect casual wear companion. Features a durable rubber outer sole, they'll withstand everything the weather can offer.`,
  //       discount: 50,
  //       discounted_price: 250,
  //       img: 'src/assets/product-images/image-product-0 1-4.jpg',
  //       thumbnail1: 'src/assets/thumbnails/products_sneaker0 1-4_thumbnail.jpg',
  //       thumbnail2: 'src/assets/thumbnails/products_sneaker0 2-4_thumbnail.jpg',
  //       thumbnail3: 'src/assets/thumbnails/products_sneaker0 3-4_thumbnail.jpg',
  //       thumbnail4: 'src/assets/thumbnails/products_sneaker0 4-4_thumbnail.jpg',
  //       collection: 'unisex',
  //       stock: 5,
  //   },
  //   {
  //       id: 2,
  //       price: 800,
  //       name: 'Nike SuperRep Go ',
  //       description: `Perfect summer sneakers for running`,
  //       discount: 50,
  //       discounted_price: 250,
  //       img: 'src/assets/product-images/products_sneaker1 1-2.jpg',
  //       thumbnail: 'src/assets/thumbnails/products_sneaker1 1-2_thumbnail.jpg',
  //       collection: 'men',
  //       stock: 1,
  //   },
  //   {
  //       id: 3,
  //       price: 450,
  //       name: 'Nike Air Force 1',
  //       description: `The Women’s Nike Air Force 1 Low Shadow “Pastel” is a “do-it-yourself” inspired look for the classic “Uptown” for women. Without saying as much, the “Pastel” is decidedly “Easter” in appearance with abstract pastel panels highlighting its design.`,
  //       discount: 50,
  //       discounted_price: 250,
  //       img: 'src/assets/product-images/products_sneaker2 1-2.jpg',
  //       thumbnail: 'src/assets/thumbnails/products_sneaker2 1-2_thumbnail.jpg',
  //       collection: 'women',
  //       stock: 8,
  //   },
  // ];

</script>

<!-- TODO:  - use vuex to store the context info
            - mobile first
            - make a filter in women and men to show the thumbnails of the sneakers that are or the page gender

-->

<template>
  <BaseHeader @ToggleOpenNav="ToggleOpenNav()" :OpenNav="OpenNav" />
  <BaseCelNavbarVue @ToggleOpenNav="ToggleOpenNav()" :OpenNav="OpenNav" />
  <RouterView />

  <!-- <div v-for="p in ProductInformation">
    <img src="./assets/product-images/image-product-0 1-4.jpg" class="product" />
  </div> -->

</template>
<style scoped>
  .relative{
    position: relative;
  }

  .product{
    width: 100%;
  }

</style>
