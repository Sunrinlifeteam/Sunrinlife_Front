<template>
<Sidebar/>

<div class="panel">
    <div class="clud-page">
        <div class="page-content">
            <div class="club-list-wrap">
                <MajorSelecter :selectMajorIdx="selectMajorIdx" @selectMajor="selectMajorIdx = $event"/>
                <ClubList
                    @clubListItemClick="selectClubIdx = $event"
                    :clubIdx="selectClubIdx"
                    :marorIdx="0"
                    :clubList="SW"
                    />
            </div>
            <ClubCard
                :clubIdx="selectClubIdx"
                :marorIdx="0"
                />
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "./../components/Sidebar.vue"

import MajorSelecter from "../components/club/MajorSelecter.vue"
import ClubList from "./../components/club/ClubList.vue"
import ClubCard from "./../components/club/ClubCard.vue"

import { SW } from "./../components/club/TempClubData"

export default {
    name : "Club Page",
    data(){return{
        selectClubIdx : 0,
        selectMajorIdx : 0,

        isChoiceMajor : false,

        SW,
    }},
    components : {
        Sidebar,

        ClubCard,
        ClubList,
        MajorSelecter
    }
}
</script>

<style scoped>
.page-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap : 30px;
}

.club-list-wrap{
    width:195px
}

@media (max-width : 1100px) {
    .page-content {
        grid-template-columns : unset;
        grid-template-rows: auto auto;
    }

    .club-list-wrap {
        width : 100%;

        display: flex;
        flex-direction: column;
    }
}

</style>