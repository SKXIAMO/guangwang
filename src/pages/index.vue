<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.webp" alt="">

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 class="baila" p-2 p-x-5 text-8 color-white>
        heyu20000408@icloud.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.baila{
  background-color: #fff;
  color: #FA3CB3;
  border: 1px solid #FA3CB3;
  border-radius: 10px;
}
</style>