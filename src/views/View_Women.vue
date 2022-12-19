
<script setup>
    import { ref, computed } from 'vue';
    import SneakerData from '../data/SneakerData.json';
    import { RouterLink } from 'vue-router';

    const shoes = ref(SneakerData);

    const WShoes = computed(() => {
        return shoes.value.filter( (s) => s.collection === 'unisex' || s.collection === 'women' );
    })

</script>

<template>
    <div class="wrapper">
        <div class="showList" v-for="shoe in WShoes">
            <RouterLink :to="shoe.to">
                <img :src="shoe.img" :alt="shoe.name" />
                <p>{{shoe.name}}</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 5rem;
    }
    .showList {
        background-color: bisque;
        border-radius: 35px;
        transition: 0.5s;
    }
    .showList:hover{
        opacity: 0.8;
        transform: scale(1.05);
    }
    .showList img {
        width: 10rem;
        border-radius: 8px;
    }
    .showList p {
        text-align: center;
        font-weight: 600;
        text-transform: capitalize;
        color: black;
    }
    a{
        text-decoration: none;
    }
</style>