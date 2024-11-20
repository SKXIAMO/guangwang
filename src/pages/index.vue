<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.webp" alt="">

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 class="pioi" p-2 p-x-5 text-8 color-white>
        liupan0501@icloud.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.pioi{
  background-color: #EB539D;
  border: 1px solid #fff;
  border-radius: 20px;
  color:#fff;
}
</style>