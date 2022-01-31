<template>
<nav>
    <div class="nav-bg" @click.self="$emit('navOnOff')">
        <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
            <li>메뉴5</li>
            <li>메뉴6</li>
            <li>메뉴7</li>
            <li>메뉴8</li>
            <li>메뉴9</li>
            <li>메뉴10</li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name : "Nav"
}
</script>

<style>
nav {
    width : 100%;
    height : 100vh;

    position: absolute;
}

nav ul {
    width : 250px;
    height: 100%;

    padding : 16px;

    background-color: white;

    display: inline-flex;
    flex-direction: column;

    z-index: 2;
}

nav li{
    display : inline
}

nav .nav-bg {
    width : 100%;
    height : 100vh;

    background-color: rgba(0, 0, 0, 0.788);

    position: absolute;
    top : 0;
    left : 0;
    z-index: 1;
}
</style>