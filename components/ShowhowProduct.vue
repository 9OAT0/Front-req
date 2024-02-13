<template>
  <div class="bg-[url('/bg-aica.jpg')] h-[700px]">
    <div class="text-white text-2xl pl-[50px] pt-[59px]">
      สินค้าของเรา
    </div>
    <div class="flex scrollable-container mt-8 ml-20">
      <ShowProduct />
      <ShowProduct />
      <ShowProduct />
      <ShowProduct />
      <ShowProduct />
    </div>
  </div>
</template>

<script>
import ShowProduct from "./ShowProduct.vue"; // Import Component ShowProduct.vue

export default {
  components: {
    ShowProduct, // ลงทะเบียน Component ShowProduct.vue
  },
};
</script>

<style>
.scrollable-container {
  height: 1000px;
  width: 1400px;
  overflow-x: auto; /* เพิ่มการเลื่อนแนวนอนเมื่อเนื้อหามีมากเกินไป */
  overflow-y: hidden;
  white-space: nowrap; /* ใช้ป้องกันเนื้อหาที่ยาวไปหลายบรรทัดในการแสดงแนวนอน */
}
.scrollable-container::-webkit-scrollbar {
  display: none; /* ซ่อนแถบเลื่อนใน Chrome, Safari, และ Edge */
}
</style>
