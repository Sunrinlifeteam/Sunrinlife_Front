<template>
<Nav/>
<div class="page-content clud-page">
    <ClubCard/>
</div>
</template>

<script>
import Nav from "./../components/Nav.vue"

import ClubCard from "./../components/club/ClubCard.vue"

export default {
    name : "Club Page",
    components : {
        Nav,

        ClubCard,
    }
}
</script>

<style scoped>

</style>