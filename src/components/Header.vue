<template>
<header>
    <img @click="$store.commit('sidebarOff')" src="@/assets/menu_button.svg" alt="">
</header>
</template>

<script>
export default {
    name : "Header",
}
</script>

<style scoped>
header {
    width : 100%;
    
    padding : 16px;

    /* visibility: hidden; */

    display: flex;
    justify-content: space-between;

    position: absolute;
}

img {
    width : 32px;
    height : 32px;

    cursor: pointer; 
}

.k {
    color : rgb(187 187 187 / 10%);
}

@media (max-width : 970px) {
    header {
        visibility: visible;
    }
}
</style>