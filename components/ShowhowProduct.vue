<template>
  <div class="h-[800px]">
    <div class="text-2xl pl-[50px] pt-[60px]">
      สินค้าของเรา
      <div class="mt-4 ml-[25px]">
        เมล็ดกาแฟ
      <div class="text-sm mr-32 ml-8 mt-4 w-[1000px]">
        Coffee Press ได้คัดเลือกเมล็ดกาแฟ อราปิก้า 100% จากแหล่งดอยช้าง จังหวัดเชียงราย ที่มีชื่อเสียงในด้านเมล็ดกาแฟระดับโลก โดยเริ่มตั้งแต่เลือกฟาร์มที่มีคุณภาพดี ไม่ใช้ยาฆ่าแมลง คัดเลือกเมล็ดอย่างพิถีพิถัน แล้วนำคั่วด้วยสูตรเฉพาะของ Coffee Press ทำให้กาแฟเข้มข้นหอมกรุ่น ตามเอกลักษณ์กาแฟไทยชั้นดี
      </div>
      </div>
    </div>
    <div class="flex scrollable-container mt-8 ml-20 bg-clip-content">
      <ShowProduct />
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
  margin-right: 50px ;
  overflow-x: auto; /* เพิ่มการเลื่อนแนวนอนเมื่อเนื้อหามีมากเกินไป */
  overflow-y: hidden;
  white-space: nowrap; /* ใช้ป้องกันเนื้อหาที่ยาวไปหลายบรรทัดในการแสดงแนวนอน */
}
.scrollable-container::-webkit-scrollbar {
  display: none; /* ซ่อนแถบเลื่อนใน Chrome, Safari, และ Edge */
}
</style>
