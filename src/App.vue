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
