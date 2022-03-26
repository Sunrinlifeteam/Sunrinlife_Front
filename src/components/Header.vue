<template>
<header>
    <img @click="$store.commit('sidebarOnOff')" src="./../assets/menu_button.svg" alt="">
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

    visibility: hidden;

    position: absolute;
}

@media (max-width : 970px) {
    header {
        visibility: visible;
    }
}
</style>