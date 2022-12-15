
<template>
    <div class="bannerWrap">
        <img alt="banner shoes" class="banner" src="../assets/shoeWheelBanner.png" />
        <div class="qouteWrapper">
        <p class="quote fixline1">Shoes speak</p>
        <p class="quote">louder than</p>
        <p class="quote fixline2">words.</p>
        </div>
    </div>
</template>

<style scoped>
    .bannerWrap{
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 1rem;
    }
    .banner{
        left: -18rem;
        width: 150%;
        position: relative;
        animation-name: InfiniteRotate 50s linear infinite;
        -webkit-animation:InfiniteRotate 50s linear infinite;
        -moz-animation:InfiniteRotate 50s linear infinite;
        animation:InfiniteRotate 50s linear infinite;
        margin-top: 4.5rem;
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
</style>