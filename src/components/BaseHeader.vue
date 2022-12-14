
<script>

</script>


<template>
    <div class="Wrapper">
        <div class="ContainerOne">
            <fa class="bars fa-xl iconPad" icon="bars" />
            <img class="logo" alt="logo sneakers" src="../assets/logo.svg" />
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
    }
    .ContainerOne{
        width: 70%;
        margin-top: auto;
        margin-bottom: auto;
    }
    .ContainerTwo{
        width: 30%;
    }
    .alignR{
        text-align: right;
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
    }
    .logo{
        height: 1.4rem;
    }
</style>