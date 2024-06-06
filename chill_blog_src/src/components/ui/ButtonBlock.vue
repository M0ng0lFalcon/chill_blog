<template>
  <a :href="website" class="Block bg-slate-700 text-neutral-content hover:bg-slate-900">
    <div class="Button-div text-center">
      <h1 class="Button-h1">{{ site_name }}</h1>
      <p class="Button-p">{{ description }}</p>
    </div>
    <div class="Button-div"><img :src="img_src" alt="" class="Button-img rounded-2xl" /></div>
  </a>
</template>

<script setup lang="ts">
defineProps(['website', 'site_name', 'description', 'img_src'])
</script>

<style>
.Block {
  display: inline-block;
  height: 100px;
  width: 250px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.25s;
  margin: 10px;
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
  position: relative;
  top: 12px;
  left: 10px;
  transition: all 0.25s;
}

.Button-p {
  position: relative;
  font-weight: 100;
  top: 30px;
  left: 15px;
}

.Button-img {
  position: relative;
  top: 30px;
  left: 120px;
  width: 50px;
  transition: all 0.25s;
}
</style>
