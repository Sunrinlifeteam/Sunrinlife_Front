<template>
<Nav/>
<div class="clud-page">
    <div class="page-content">
        <div class="club-list-wrap">
            <MajorSeleter :seleteMajorIdx="seleteMajorIdx" @seleteMajor="seleteMajorIdx = $event"/>
            <ClubList
                @clubListItemClick="seleteClubIdx = $event"
                :clubIdx="seleteClubIdx"
                :marorIdx="0"
                />
        </div>
        <ClubCard
            :clubIdx="seleteClubIdx"
            :marorIdx="0"
            />
    </div>
</div>
</template>

<script>
import Nav from "./../components/Nav.vue"

import MajorSeleter from "./../components/club/MajorSeleter.vue"
import ClubList from "./../components/club/ClubList.vue"
import ClubCard from "./../components/club/ClubCard.vue"

export default {
    name : "Club Page",
    data(){return{
        seleteClubIdx : 0,
        seleteMajorIdx : 0,

        isChoiceMajor : false
    }},
    components : {
        Nav,

        ClubCard,
        ClubList,
        MajorSeleter
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