<template>
    <div class="map">
        <svg id="Layer_1"
            data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 170.56 68.04">
            <g>

            </g>
        </svg>

        <button @click="()=>{seleteMap(1, 1)}">1호관 1층</button>
        <button @click="()=>{seleteMap(1, 2)}">1호관 2층</button>
        <button @click="()=>{seleteMap(1, 3)}">1호관 3층</button>
        <button @click="()=>{seleteMap(1, 4)}">1호관 4층</button>
    </div>
</template>


<script>
import * as d3 from "d3";

import * as mapData from "./../assets/MapData.js"

export default {
    name : "Map",
    data(){return{
        build : 1, //선택된 건물
        floor : 1, //층
    }},
    methods : {
        seleteMap(build, floor){
            document.querySelector(`.b${this.build}f${this.floor}`)
                .classList.remove("show")

            this.build = build
            this.floor = floor

            document.querySelector(`.b${build}f${floor}`)
                .classList.add("show")
        },
    },
    mounted(){
        const svg = d3.select(".map svg")
            .attr("class", "map-content")
            .call(d3.zoom().on("zoom", ()=>{
                svg.attr("transform", d3.event.transform)
            }))
            .append("g")


        const mapB1f4 = svg.append("g")
            .attr("class", "b1f4 map-item")

        mapData.b1f4.forEach((e)=>{
            mapB1f4.append("path")
                .attr("class", e.class)
                .attr("d", e.d)
        })

        const mapB1f3 = svg.append("g")
            .attr("class", "b1f3 map-item")

        mapData.b1f3.forEach((e)=>{
            mapB1f3.append("path")
                .attr("class", e.class)
                .attr("d", e.d)
        })

        const mapB1f2 = svg.append("g")
            .attr("class", "b1f2 map-item")

        mapData.b1f2.forEach((e)=>{
            mapB1f2.append("path")
                .attr("class", e.class)
                .attr("d", e.d)
        })

        const mapB1f1 = svg.append("g")
            .attr("class", "b1f1 map-item")

        mapData.b1f1.forEach((e)=>{
            mapB1f1.append("path")
                .attr("class", e.class)
                .attr("d", e.d)
        })


    },
    computed : {

    }
}
</script>

<style>
.cls-1{fill:#f9e192;}
.cls-2{fill:#1d1d1b;}

.map svg {
    width : 100%;
    height : 50vh;

    max-width: 1000px;

    border : 1px solid black;
}

.map .map-item {
    visibility: hidden;
}

.map .map-item.show {
    visibility: visible
}

/* .map-content{
    width : 100%;
    height : 50vh;

    background-color: #00B8D4;
}
path{
    pointer-events:all;
}

path:not(.map0):hover{
    fill : black;
    stroke:white;
}

.map0{
    fill : white;
    stroke:#000;
    stroke-miterlimit:10;
}
.map1{
    fill:#e30613
}
.map2{
    fill:#009fe3
}
.map3{
    fill:#e30613
}
.map4{
    fill:#009640
}
.map5{
    fill:#312783
}
.map6{
    fill:#009fe3
}
.map7{
    fill:#008d36
} */


</style>