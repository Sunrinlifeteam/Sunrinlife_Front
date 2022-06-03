<template>
    <div class="panel">
        <div class="easter-egg-page">
            <div class="page-content">
                <h1>인트라넷 개발자의 현재 모습</h1>
                <img src="/img/easterEgg.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Easter egg page",
    components: {},
};
</script>

<style scoped>
.page-content {
    text-align: center;
    word-break: keep-all;
}

.page-content * {
    /* display: inline-block; */
    margin: 0 auto;
}

img {
    width: 100%;
    max-width: 700px;
}
</style>
