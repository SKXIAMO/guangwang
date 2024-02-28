<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: "IndexPage",
});
</script>

<template>
  <div relative min-h-100vh>
    <img h-full w-full src="../assets/bg.webp" alt="" />

    <div class="email" absolute bottom-10 w-full flex justify-center>
      <div rd-2 p-2 p-x-5 text-5 color-white class="text-bg-color">
        Nikhilkashyap34@icloud.com
      </div>
    </div>
  </div>
</template>

<style>
.text-bg-color {
  background-color: #b3e0af;
}
</style>
