
<script setup>
    import { ref, computed } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import SneakerData from '../../data/SneakerData.json';

    const shoes = ref(SneakerData);
    const counter = ref(0);

    const Shoe = computed(() => {
        return shoes.value.filter( s => s.id === 1 );
    });

    const onSwiper = (swiper) => {
        console.log(swiper);
    };

    const onSlideChange = () => {
        console.log('slide change');
    };

    // function AddShoe() {
    //     // if( counter < Shoe.value.stock ){
    //     //     console.log("in stock");
    //     //     return this.counter.value + 1
    //     // }else{
    //     //     console.log("nope")
    //     // }
    //     console.log('blah')
    // }
    // function HiThere(){
    //     console.log('hi there')
    // }

</script>

<template>
    <div class="wrapper">
        <div v-for="i in Shoe" :key="i.id" class="ProdCard">
            <Swiper
                :slides-per-view="1"
                :space-between="50"
                :modules="[Navigation, Pagination]"
                navigation
                :pagination="{clickable:true}"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="ImgWrap"
            >
                <SwiperSlide :v-if="i.img1">
                    <img :src="i.img1" :alt="i.name" class="sliderImg"/>
                </SwiperSlide>
                <SwiperSlide :v-if="i.img2">
                    <img :src="i.img2" :alt="i.name" class="sliderImg"/>
                </SwiperSlide>
                <SwiperSlide :v-if="i.img3">
                    <img :src="i.img3" :alt="i.name" class="sliderImg"/>
                </SwiperSlide>
                <SwiperSlide :v-if="i.img4">
                    <img :src="i.img4" :alt="i.name" class="sliderImg"/>
                </SwiperSlide>
            </Swiper>

            <div class="TextWrap">
                <p class="brand">{{i.brand}}</p>
                <h3>{{i.name}}</h3>
                <p class="description">{{i.description}}</p>
                <div class="flex middle">
                    <h3>${{ i.discounted_price.toFixed(2) }}</h3>
                    <div class="discount">
                        <p  class="discountP">{{ i.discount }}%</p>
                    </div>
                    <p class="price">${{ i.price.toFixed(2) }}</p>
                </div>
            </div>
            <div class="addBtn">
                <img src="../../assets/icon-minus.svg" alt="less button" class="addMmnus" />
                <p class="counter">{{ counter }}</p>
                <!-- <img @click="HiThere()" src="../../assets/icon-plus.svg" alt="add button" class="addMmnus" /> -->
            </div>
            <button class="addCart">
                <img class="shopcart" alt="shop cart" src="../../assets/icon-cart-white.png" />
                Add to Cart
            </button>
        </div>
    </div>
</template>

<style scoped>
    /* Swripper */
    .wrapper {
        padding-top: 2rem;
    }
    .swiper-wrapper {
        display: inline-flex !important;
    }
    .sliderImg{
        width: 100%;
        margin-top: -1rem;
    }


    /* Card */
    .addBtn{
        display: flex;
        justify-content: space-around;
        background-color: var(--LightGrayishBlue);
        border-radius: 10px;
    }
    .addBtn button{
        font-size: 2rem;
        font-weight: 600;
        background-color: rgba(240, 248, 255, 0);
        border: 0px;
        padding: 2rem;
        color: var(--Orange);
    }
    .addCart {
        width: 100%;
        border-radius: 8px;
        border: 0px;
        padding: 1rem 0.5rem;
        background-color: var(--Orange);
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
        margin: 1rem 0 5rem 0;
    }
    .shopcart{
        width: 1.5rem !important;
    }
    img.addMmnus {
        width: 1rem;
        height: 1rem;
        margin-top: 2rem;
    }
    .counter{
        font-weight: 600;
        font-size: 1.5rem;
    }
    .TextWrap {
        margin: 0 1rem;
    }
    h3 {
        font-size: 2rem;
    }
    p.description {
        color: var(--DarkGrayishBlue);
        font-size: 1.1rem;
    }
    p.brand {
        color: var(--Orange);
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: uppercase;
    }
    .price{
        color: var(--GrayishBlue);
        font-weight: 600;
        font-size: 1.4rem;
        text-decoration: line-through;
        margin-left: auto;
        margin-right: 0;
    }
    .discount {
        background-color: var(--PaleOrange);
        padding: 0.5rem;
        text-align: center;
        color: var(--Orange);
        font-weight: 600;
        border-radius: 10px;
        height: 2rem;
        box-sizing: border-box;
        margin-left: 0.5rem;
    }
    p.discountP {
        margin-top: -0.2rem;
    }
</style>