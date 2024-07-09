<template>
  <div class="Block">
    <div class="headBlock">
      <img src="../../../public/head.png" alt="" class="headImg" />
    </div>
    <div class="div-span">
      <div>
        <span>ip : China</span>
        <br />
        <span>school : IMNU</span>
      </div>
    </div>

    <div class="personal">
      <div class="small-block"> <span>大学牲</span> </div>
      <div class="small-block"><span>计算机</span></div>
      <div class="small-block"><span>数据科学</span></div>
      <div class="small-block"><span>健身细狗</span></div>
      <div class="small-block"><span>篮球菜鸟</span></div>
      <div class="small-block"><span>摄影小白</span></div>
    </div>
    <div class="div-span-box">
        <span>email : bnd1013@qq.com</span>
        <br />
        <span>github : https://github.com</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

span {
    color: aliceblue;
}

.Block {
  display: flex;
  background-color: #334155;
  height: 1000px;
  width: 250px;
  border-radius: 20px;
  flex-direction: column;
}

.div-span {
  margin-top: 20px;
  background-color: #0f172a;
  height: 80px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
}

.headImg {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 20px auto;
}

.personal {
  margin-top: 50px;
  border-radius: 20px;
  width: 250px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: #0f172a;
}

.small-block {
  border-radius: 10px;
  background-color: #a1aec0;
  width: fit-content;
  height: 40px;
  padding: 5px;
  margin: 10px;
}

.div-span-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    border-radius: 20px;
    width: 250px;
    height: 100px;
    background-color: #0f172a;
}
</style>
