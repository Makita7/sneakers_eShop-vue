
<script setup>
    import { RouterLink } from 'vue-router';
    import { defineEmits, defineProps } from 'vue';

    defineProps ({
        OpenNav: Boolean,
    });

    defineEmits([
        'ToggleOpenNav'
    ]);

</script>


<template>
    <transition>
        <div v-if="OpenNav" class="navbarBackground">
            <div class="navbar">
                <img src="../assets/icon-close.svg" class="Xclose" @click="$emit('ToggleOpenNav')" />
                <RouterLink to="/" @click="$emit('ToggleOpenNav')" class="link" >Collections</RouterLink>
            </div>
        </div>
    </transition>
</template>


<style scoped>
    .navbarBackground{
        position: absolute;
        z-index: +50;
        backdrop-filter: contrast(0.5);
        width: 100%;
        height: 100%;
        background-color: hsl(0deg 0% 0% / 70%);
    }
    .navbar {
        background-color: white;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        left: -0.2rem;
        position: relative;
    }
    .Xclose{
        width: 1rem;
        margin-bottom: 3rem;
        color: white;
        margin-top: 1.5rem;
        margin-left: 1rem;
    }
    .link{
        margin-left: 0rem;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.3rem;
        color: black;
        margin-left: 1rem;
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }

</style>