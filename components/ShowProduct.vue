<template>
  <div
    class="p-[28px] mt-10 bg-white h-[450px] w-[300px] rounded-2xl flex flex-col justify-center items-center m-7"
  >
    <div class="">
      <img src="/Blend.jpg" alt="นี้กาแฟซื้อป่าว" class="h-[250px]" />
    </div>
    <div class="text-center text-gray-600 font-bold pt-4">
      PREDEE BLEND
      <div>
        Ground 100% Arabica Coffee
        <p class="text-center">กาแฟหอมอร่อยสุดๆ</p>
      </div>
    </div>
    <button
      class="bg-CartBG h-[50px] p-4 flex items-center justify-center rounded-lg text-[20px] text-white mt-4"
    >
      <i class="fa-solid fa-cart-shopping mr-4"></i>
      เพิ่มลงตระกร้า
    </button>
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
});
</script>
