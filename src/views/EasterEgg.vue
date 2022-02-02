<template>
<div class="easterEgg">{{ msg }}</div>
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
.easterEgg{
    text-align: center;
    overflow: hidden;
}
</style>