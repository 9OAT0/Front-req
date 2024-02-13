<template>
  <div class="grid grid-cols-2 bg-[url(/bg-aica.jpg)]">
    <div class="container bg-[ulr('/bg-aica.jpg')]
    flex items-start flex-col justify-center pl-8 pr-8 p-16">
        <div class="bg-white h-full w-full rounded-3xl bg-[ulr('/latte-art-1.webp')]">
        <img src="/latte-art-1.webp" alt="" class="h-full w-full rounded-3xl">
        </div>
    </div>
    <div>
      svbhj
    </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  text: {
    type: String,
    default: 'Text'
  },
  minitext: {
    type: String,
    default: 'Text'
  },
  image: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.img-container {
  height: 100%;
}

.bg-green-200 {
  height: 100%;
}

.img-container img {
  height: 100%;
  width: 100%;
}
</style>
