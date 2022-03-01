<template>
<Nav/>
<div class="clud-page">
    <div class="page-content">
        <div class="club-list-wrap">
            <!-- {{ choiceClubIdx }} -->
            <!-- Hello World -->
            <ClubList @clubListItemClick="choiceClubIdx = $event.target.value"/>
        </div>
        <ClubCard/>
    </div>
</div>
</template>

<script>
import Nav from "./../components/Nav.vue"

import ClubList from "./../components/club/ClubList.vue"
import ClubCard from "./../components/club/ClubCard.vue"

export default {
    name : "Club Page",
    datat(){return{
        choiceClubIdx : 0,
    }},
    components : {
        Nav,

        ClubCard,
        ClubList
    }
}
</script>

<style scoped>
.page-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap : 30px;
}
</style>