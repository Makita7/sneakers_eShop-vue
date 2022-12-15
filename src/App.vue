<script setup>
  import '@fortawesome/free-solid-svg-icons';
  import { ref } from 'vue';
  import BaseHeader from './components/BaseHeader.vue'

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
  <BaseHeader/>
  <div v-for="p in ProductInformation">
    <img src="./assets/product-images/image-product-0 1-4.jpg" class="product" />
  </div>

</template>
<style scoped>
  .product{
    width: 100%;
  }

</style>
