<template>
  <p class="font-bold text-2xl pb-3">导航栏</p>
  <div class="flex flex-row gap-3">
    <ButtonBlock
      website="https://blog.csdn.net/YUSHI_wind?spm=1018.2226.3001.5343"
      site_name="csdn"
      description="学习笔记"
      img_src="../../public/csdnlogo.jpg"
    />
    <ButtonBlock
      website="https://www.zhihu.com/people/F4lc0n"
      site_name="知乎"
      description="不懂就问"
      img_src="../../public/zhihulogo.jpg"
    />
    <ButtonBlock
      website="https://space.bilibili.com/162901193?spm_id_from=333.1007.0.0"
      site_name="b站"
      description="billbill大学"
      img_src="../../public/billlogo.jpg"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonBlock from '@/components/ui/ButtonBlock.vue'
</script>
