<template>
  <div
    class="p-[28px] mt-16 bg-white h-[450px] w-[300px] rounded-2xl flex flex-col justify-center items-center m-7"
  >
    <div class="">
      <img :src="image" alt="นี้กาแฟซื้อป่าว" class="h-[250px]" />
    </div>
    <div class="text-center text-gray-600 font-bold pt-4">
      {{ text }}
      <div>
        Ground 100% Arabica Coffee
        <p class="text-center">กาแฟหอมอร่อยสุดๆ</p>
      </div>
    </div>
    <router-link :to="page">
      <button
        class="bg-CartBG h-[50px] p-4 flex items-center justify-center rounded-lg text-[20px] text-white mt-4"
      >
        ดูข้อมูลเพิ่มเติม
      </button>
    </router-link>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Text",
  },
  minitext: {
    type: String,
    default: "Text",
  },
  image: {
    type: String,
    default: "",
  },
  page: {
    type: String,
    default: "",
  }
});
</script>
