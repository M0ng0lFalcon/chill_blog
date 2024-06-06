<script setup lang="ts">
import MenuVertical from '@/components/ui/MenuVertical.vue'
import SiteBlock from '@/components/Home/SiteBlock.vue'
</script>

<template>
  <main class="flex h-full w-full p-5">
    <div class="w-18">
      <MenuVertical></MenuVertical>
    </div>

    <div class="flex-1 pl-5">
      <SiteBlock />
    </div>
  </main>
</template>
