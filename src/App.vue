<script setup>
  import '@fortawesome/free-solid-svg-icons';
  import { onMounted, ref } from 'vue';
  import BaseHeader from './components/BaseHeader.vue';

  let OpenNav = ref(false);
  const num = ref(1);

  function ToggleOpenNav() {
    OpenNav.value = !OpenNav.value
    console.log(OpenNav.value)
  }

  const ProductInformation = ref([
    {
      id: 1,
      price: 500,
      name: '',
      description: '',
      discount: 50,
      discounted_price: 250,
      img: '',
    },
    // {
    //   id: 2,
    //   price: 800,
    //   name: '',
    //   description: '',
    //   discount: 50,
    //   discounted_price: 250,
    //   img: '',
    // },
    // {
    //   id: 3,
    //   price: 450,
    //   name: '',
    //   description: '',
    //   discount: 50,
    //   discounted_price: 250,
    //   img: '',
    // },
  ]);
</script>

<!-- use vuex to store the context info
    and mobile first
-->

<!--
      What data should the app have for the cards
        *id
        *price
        *name
        *description
        *discount
        *discounted price
        *relative images
        *collection
        *gender
-->

<template>
  <BaseHeader @ToggleOpenNav="ToggleOpenNav()" :OpenNav="OpenNav" />
  <div v-if="OpenNav" class="navbarBackground">
    <div class="navbar">
      <img src="./assets/icon-close.svg" class="xmark" @click="ToggleOpenNav()" />
      navbar Hiiiiiiiiiii
    </div>
  </div>

  <div class="bannerWrap">
    <img alt="banner shoes" class="banner" src="./assets/shoeWheelBanner.png" />
    <div class="qouteWrapper">
      <p class="quote fixline1">Shoes speak</p>
      <p class="quote">louder than</p>
      <p class="quote fixline2">words.</p>
    </div>
  </div>
  <!-- <div v-for="p in ProductInformation">
    <img src="./assets/product-images/image-product-0 1-4.jpg" class="product" />
  </div> -->

</template>
<style scoped>
  .bannerWrap{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .product{
    width: 100%;
  }
  .banner{
    left: -18rem;
    width: 150%;
    position: relative;
    margin-top: 5rem;
    animation-name: InfiniteRotate 50s linear infinite;
    -webkit-animation:InfiniteRotate 50s linear infinite;
    -moz-animation:InfiniteRotate 50s linear infinite;
    animation:InfiniteRotate 50s linear infinite;
  }

  @-moz-keyframes InfiniteRotate {
    100% { -moz-transform: rotate(360deg); }
  }
  @-webkit-keyframes InfiniteRotate {
      100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes InfiniteRotate {
      100% {
          -webkit-transform: rotate(360deg);
          transform:rotate(360deg);
      }
  }
  .qouteWrapper{
    position: absolute;
    z-index: +10;
    right: 1rem;
    top: 35%;

  }
  .quote{
    font-size: 2.3rem;
    background-color: hsl(26deg 100% 55% / 90%);
    padding: 4px;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    margin: 1rem 0;
    text-align: right;
    width: fit-content;
    position: relative;
  }
  .fixline1{
    right: -0.9rem;
  }
  .fixline2{
    right: -6.9rem;
  }


  /* navbar */
  .navbar {
    background-color: var(--Orange);
    width: 60%;
    height: 100%;
  }
  .navbarBackground{
    position: absolute;
    z-index: +50;
    backdrop-filter: contrast(0.5);
    width: 100%;
    height: 100%;
    background-color: hsl(0deg 0% 0% / 50%);
  }
  .Xclose{

  }

</style>
