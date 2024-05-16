<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.png" alt="">

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 p-2 p-x-5 text-8 color-white unipets>
        viviennestropus@gmail.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.unipets{
  background-color: #F1972E;
  color: #ffffff;
  font-size: 30px;
}
</style>