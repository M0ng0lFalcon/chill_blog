<script setup lang="ts">
import MenuVertical from '@/components/ui/MenuVertical.vue'
import SiteBlock from '@/components/Home/SiteBlock.vue'
import IntroductionBlock from '@/components/Introduction/IntroductionBlock.vue'
</script>

<template>
  <main class="flex h-full p-5">
    <div class="w-18">
      <IntroductionBlock></IntroductionBlock>
      <!-- <MenuVertical></MenuVertical> -->
    </div>

    <div class="flex-1 pl-5">
      <div class="flex flex-col gap-y-5">
        <SiteBlock />
      </div>
    </div>
  </main>
</template>
