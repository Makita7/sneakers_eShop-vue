
<script setup>
    import { RouterLink } from 'vue-router'

    defineProps ({
        OpenNav: Boolean
    });

    defineEmits ([
        'ToggleOpenNav'
    ])

</script>


<template>
    <div class="Wrapper">
        <div class="ContainerOne">
            <img class="bars iconPad" src="../assets/icon-menu.svg" @click="$emit('ToggleOpenNav')" />
            <RouterLink to="/">
                <img class="logo" alt="logo sneakers" src="../assets/logo.svg" />
            </RouterLink>
        </div>
        <div class="ContainerTwo alignR">
            <img class="cart iconPad" alt="cart icon" src="../assets/icon-cart.png" />
            <img class="profile" alt="user profile avatar" src="..\assets\image-avatar.png" />
        </div>
    </div>
</template>

<style scoped>
    .Wrapper{
        display: flex;
        padding: 1rem;
        background-color: white;
        z-index: 4;
        width: 100%;
        box-sizing: content-box;
        position: absolute;
    }
    .ContainerOne{
        width: 70%;
        margin-top: auto;
        margin-bottom: auto;
    }
    .ContainerTwo{
        width: 30%;
        display: flex;
        margin-right: 3rem;
        justify-content: end;
    }
    .profile{
        width: 2rem;
        padding-right: 0.5rem;
    }
    .cart{
        width: 2rem;
    }
    .iconPad{
        padding: 0 0.5rem;
    }
    .bars{
        color: #69707D;
        padding-right: 1rem;
    }
    .logo{
        height: 1.4rem;
    }
    .quote{
        display: absolute;
    }
</style>