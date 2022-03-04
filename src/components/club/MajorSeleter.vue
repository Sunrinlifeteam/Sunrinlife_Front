<template>
<div class="major-seleter neu-morphism-card">
    <transition name="current-major-ani">
        <div class="current-major" @click="isSeleteMajor = true" v-if="!isSeleteMajor">
            <span v-if="seleteMajorIdx == 0">정보보호과</span>
            <span v-else-if="seleteMajorIdx == 1">소프트웨어과</span>
            <span v-else-if="seleteMajorIdx == 2">IT경영과</span>
            <span v-else-if="seleteMajorIdx == 3">콘텐츠 디자인과</span>
        </div>
    </transition>
    <transition name="choice-major-ani">
        <div class="choice-major-wrap" v-if="isSeleteMajor" @click="isSeleteMajor = false">
            <div class="choice-major" :class="{seleted : seleteMajorIdx == 0}"
                @click="$emit('seleteMajor', 0)">
                정보
            </div>
            <div class="choice-major" :class="{seleted : seleteMajorIdx == 1}"
                @click="$emit('seleteMajor', 1)">
                솦과
            </div>
            <div class="choice-major" :class="{seleted : seleteMajorIdx == 2}"
                @click="$emit('seleteMajor', 2)">
                아경
            </div>
            <div class="choice-major" :class="{seleted : seleteMajorIdx == 3}"
                @click="$emit('seleteMajor', 3)">
                콘디
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name : "Major seleter",
    data(){return{
        isSeleteMajor : false
    }},
    props : {
        seleteMajorIdx : Number,
    },
}
</script>

<style scoped>
.major-seleter {
    height: 44px;

    margin-bottom : 24px;

    position: relative;

    overflow: hidden;
}

.major-seleter * {
    cursor: pointer;
}

.major-seleter > div {
    width : 100%;
    height : 100%;

    display: flex;

    position: absolute;
    top : 0px;
    left : 0px;
}

.current-major {
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;

    color : white;
    background-color: #ffcf49;

    justify-content: center;
    align-items: center;
}

.choice-major-wrap {
    align-items: stretch;
}

.choice-major-wrap .choice-major {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

.choice-major-wrap .choice-major:hover {
    background-color: #ffce494a;
}

.choice-major-wrap .choice-major.seleted {
    background-color: #ffcf49;
}

.choice-major-wrap input {
    display: none;
}
</style>

<style scoped>
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