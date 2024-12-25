<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.webp" alt="">

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 p-2 p-x-5 text-8 class="cher">
        639293382@qq.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.cher{
  background-color: #fff;
  color: #000;
}
</style>