
<script setup>
    import { ref } from 'vue';
import SneakerData from '../data/SneakerData.json';

    const shoes = ref(SneakerData);

</script>

<template>
    <div v-for="shoe in shoes">
        <p>{{shoe.name}}</p>
        <img :src="shoe.img" :alt="shoe.name" />
    </div>

</template>

<style scoped>

</style>