
<script setup>
    import { ref, computed } from 'vue';
    import SneakerData from '../data/SneakerData.json';

    const shoes = ref(SneakerData);

    const MShoes = computed(() => {
        return shoes.value.filter( (s) => s.collection === 'unisex' || s.collection === 'men');
    })

</script>

<template>
    <div class="wrapper">
        <div class="showList" v-for="shoe in MShoes">
            <RouterLink :to="shoe.to">
                <img :src="shoe.img1" :alt="shoe.name" />
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
    padding-top: 4rem;
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