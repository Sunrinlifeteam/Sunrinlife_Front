<template>
    <div class="map">

    </div>
</template>


<script>
import * as d3 from "d3";

export default {
    name : "Map",
    data(){return{

    }},
    mounted(){
        const svg = d3.select(".map")
            .append("svg")
            .attr("class", "map-content")
            .call(d3.zoom().on("zoom", ()=>{
                svg.attr("transform", d3.event.transform)
            }))
            .append("g")

        svg.append("path")
            .attr("d", "m506.7 294.7 40.4-129.5-56.1-32.3h-18.9l-93.4-21.5-90.5-19.8 2.6-11L99.4 27l3.3-18L59.3.6l-2.9 7.5-5-2.3L.5 210.9l11.1 56.8 3.7 6.6 119.6 41.9h66l7-3.8 39-2 .6 5.8 71.8 6.4 15.8 5.8 28.5-5.5 10.7-14.5 31.4-19.2 3.2-13.7 42.5 10.2z")
            .attr("class", "map0")

        svg.append("path")
            .attr("d", "m408.8 162.2 1.5-5.7 5.5-21.1-165.9-40.1-6.7 26 15.3 5.1 3-9.8 60.8 14.9-3 8.9 17.4 4.8 2.2-9.6 54.8 13.1-2.2 9.6zM233.2 92.8l1.3-4.6 7.2 2.3 3-18.4-72.8-12.7v-4.1l-17.5-2.4-4.6 23.3zM140.9 51.3l-17.5-3.5-20.7 107.3 18.1 2 8.5-42.8s-2.2.9-2.4.2c-.2-.7.4-8.7.4-8.7l3.1.9 10.5-55.4zM201.8 144.6l4.4-23-42.5-8.7-5.5 23.2z")
            .attr("class", "map1")

        svg.append("path")
            .attr("d", "m224.5 250.8 28.2-119.6 123.9 26s17.7 10.1 17.5 22.6c-.3 12.5-13.7 68.1-13.7 68.1l-61.1 19.9-94.8-17z")
            .attr("class", "map2")

        svg.append("path")
            .attr("d", "m469.5 275.5 8.1-33.5-74.2-18.3-9.3 35.2zM122.2 149.9l76.4 12.7-2.4 11.7-76.1-14.6z")
            .attr("class", "map3")

        svg.append("path")
            .attr("d", "m535.8 179.5 4.9-14-45.9-14.5-6.7 14.2z")
            .attr("class", "map4")

        svg.append("path")
            .attr("d", "m65.4 90.5-17.5-3.2-12.5 64-7.8-1.4-4.7 21.7 7.6 1.5-12.8 63.4 18 3.5zM15.6 237.4l6.7 19.5 15.1 18 46.8 10.2 3.8-19.5-6.4-.6s-15.9-24-41.9-8.7l-10.5-3.8-6.6-12.5-7-2.6zM91.9 267.7l-3.8 14.2 7.8 1.4-1.7 4.4 57.3 9.9h1.7l45.4 7.6 2.6-16.9zM195.7 261.2l20.4-82.9L78.5 153l-16.3 83.2zM74.6 91.3l9.2-52.4-32.9-6.2-10.5 50.5z")
            .attr("class", "map5")

        svg.append("path")
            .attr("d", "m476.1 174.3 10.2-29.7-54.4-17.5-9.3 27.9z")
            .attr("class", "map6")

        svg.append("path")
            .attr("d", "m403.4 283-15.8-28h-7.8l-1.8 1-52.9 17.1-86.9-10.7s-15-1.3-29.1 15l1.9 24.9s0 5.6 7.8 5.6h29.9l3.5 5.6 108 5.1 10.2-13.4 8-1.8 25-20.4z")
            .attr("class", "map7")
    },
    computed : {

    }
}
</script>

<style>
.map-content{
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
}


</style>