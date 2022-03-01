<template>
<div class="club-card">
    <div class="header">
        <img src="/edcan.png" alt="" class="logo">
        <div class="descriptions-wrap">
            <h2 class="club-name">EDCAN</h2>
            <p class="descriptions">
                EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야!
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "Club card",
}
</script>

<style scoped>
.club-card {
    width : 100%;
    height : 100%;

    padding: 48px 32px;
    border-radius: 8px;
    box-shadow: 1px 0 6px 0 #00000029;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    gap : 36px;
}

.header {
    display: flex;
    align-items: center;
    gap : 32px;
}

.logo {
    width: 160px;
    height: 160px;

    border-radius: 29px;
    background-color: #f5f6f7;

    padding: 29px;
}

.descriptions-wrap {
    display: flex;
    flex-direction: column;
    gap : 12px;
}

.club-name {
    font-family: NotoSansKR;
    font-size: 20px;
}

.descriptions {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
}

</style>