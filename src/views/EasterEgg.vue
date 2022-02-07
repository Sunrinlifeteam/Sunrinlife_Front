<template>
<div class="easterEgg">{{ msg }}</div>

<div class="circles">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
</div>
</template>

<script>
let msg = ""

for(let i = 0; i < 1000; i++){
    msg += "EDCAN은 정말 최고야!! "
}

export default {
    name : "easterEgg",
    data(){return{
        msg
    }}
}
</script>

<style>
.circles {
    position: absolute;
    top: 50%;
    left : 50%;
    transform: translate(-50%, -50%);
}

.circles div {
    border : 5px solid transparent;
    /* border-top-width : px; */
    border-radius: 100%;

    animation-name : loading-animation;
    animation-iteration-count: infinite;
    /* animation-timing-function: ease-in; */
    animation-timing-function: linear;

    position: absolute;
    top: 50%;
    left : 50%;
    transform: translate(-50%, -50%);
}

.circles .circle1{
    width : 50px;
    height : 50px;
    border-top-color: var(--main-color3);

    animation-duration: 600ms;
    
}

.circles .circle2{
    width : 80px;
    height : 80px;
    border-top-color: var(--main-color3);
    border-right-color: var(--main-color3);

    animation-duration: 700ms;
}

.circles .circle3{
    width : 110px;
    height : 110px;
    border-top-color: var(--main-color3);
    border-bottom-color: var(--main-color3);
    border-right-color: var(--main-color3);

    animation-duration: 1000ms;
}

@keyframes loading-animation {
    from{
        transform: translate(-50%, -50%) rotate(0turn);
    }
    to{
        transform: translate(-50%, -50%) rotate(1turn);
    }
}

.easterEgg{
    text-align: center;
    overflow: hidden;
}
</style>