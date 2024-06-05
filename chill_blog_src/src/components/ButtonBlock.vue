<template>
    <a :href="website" class="Block">
        <div class="Button-div text-center">
            <h1 class="Button-h1">{{ sitename }}</h1>
            <p class="Button-p">{{ introduce }}</p>
        </div>
        <div class="Button-div"><img :src="imgsite" alt="" class="Button-img"></div>
    </a>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props:["website","sitename","introduce","imgsite"],

    }
    
</script>

<style>
    .Block {
        display: inline-block;
        color: white;
        height: 100px;
        width: 250px;
        border-radius: 15px;
        background-color:rgba(43,52,64,0.4);
        overflow: hidden;
        transition: all 0.5s;  
        margin: 10px;
    }
    .Block:hover {
        background-color:rgba(43,52,64,1);
    }
    .Block:hover .Button-h1 {
        font-size: 25px;
    }
    .Block:hover .Button-img {
        transform: translateX(70px);
    }

    .Button-div {
        float: left;
    }
    .text-center {
        text-align: center;
    }
    .Button-h1 {
        font-size: 20px;
        position:relative;
        top: 12px;
        left:10px;
        transition: all 0.5s; 
    }
    .Button-p {
        position:relative;
        font-weight: 100;
        top: 30px;
        left: 15px;
    }
    .Button-img {
        position:relative;
        top: 30px;
        left: 120px;
        width: 50px;
        transition: all 0.5s; 
    }
</style>
 