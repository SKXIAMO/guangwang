<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: "IndexPage",
});
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.webp" alt="" />

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 p-2 p-x-5 text-6 color-white class="box-style">
        istvanzsigmond418@gmail.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-style {
  background-color: #2dda93;
}
</style>
