<template>
<div class="major-selecter neu-morphism-card">
    <transition name="current-major-ani">
        <div class="current-major" @click="isSelectMajor = true" v-if="!isSelectMajor" :class="{security:!selectMajorIdx, software:selectMajorIdx===1, ceo:selectMajorIdx===2, design:selectMajorIdx===3}">
            <span v-if="selectMajorIdx == 0">정보보호과</span>
            <span v-else-if="selectMajorIdx == 1">소프트웨어과</span>
            <span v-else-if="selectMajorIdx == 2">IT경영과</span>
            <span v-else-if="selectMajorIdx == 3">콘텐츠 디자인과</span>
        </div>
    </transition>
    <transition name="choice-major-ani">
        <div class="choice-major-wrap" v-if="isSelectMajor" @click="isSelectMajor = false">
            <div class="choice-major security"
                @click="$emit('selectMajor', 0)">
                정보
            </div>
            <div class="choice-major software"
                @click="$emit('selectMajor', 1)">
                솦과
            </div>
            <div class="choice-major ceo"
                @click="$emit('selectMajor', 2)">
                아경
            </div>
            <div class="choice-major design"
                @click="$emit('selectMajor', 3)">
                콘디
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name : "Major selecter",
    data(){return{
        isSelectMajor : false
    }},
    props : {
        selectMajorIdx : Number,
    },
}
</script>

<style scoped>
.major-selecter {
    height: 44px;

    margin-bottom : 24px;

    position: relative;

    overflow: hidden;
    
    font-weight: 700;
}

.major-selecter * {
    cursor: pointer;
}

.major-selecter > div {
    width : 100%;
    height : 100%;

    display: flex;

    position: absolute;
    top : 0px;
    left : 0px;
}

.major-selecter .current-major {
    font-size: 16px;
    font-weight: 700;

    justify-content: center;
    align-items: center;
}

.major-selecter .choice-major-wrap {
    align-items: stretch;
}

.major-selecter .choice-major-wrap .choice-major {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}


.major-selecter .choice-major-wrap input {
    display: none;
}

.current-major-ani-enter-from, .current-major-ani-leave-to {
    transform: translateY(-100%);
}

.current-major-ani-enter-active, .current-major-ani-leave-active {
    transition: 300ms;
}

.current-major-ani-enter-to, .current-major-ani-leave-from {
    transform: translateY(0);
}



.choice-major-ani-enter-from, .choice-major-ani-leave-to {
    transform: translateY(100%);
}

.choice-major-ani-enter-active, .choice-major-ani-leave-active {
    transition: 300ms;
}

.choice-major-ani-enter-to, .choice-major-ani-leave-from {
    transform: translateY(0%);
}

</style>