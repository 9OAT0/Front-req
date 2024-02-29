<template>
  <div class="h-[800px]">
    <div class="text-2xl pl-[50px] pt-[60px]">
      สินค้าของเรา
      <div class="mt-4 ml-[25px]">
        เมล็ดกาแฟ
      <div class="text-sm mr-32 ml-8 mt-4 ">
        Pridee Coffee Roasters ได้คัดเลือกเมล็ดกาแฟที่มีชื่อเสียงในด้านเมล็ดกาแฟต่างๆ โดยเริ่มตั้งแต่เลือกฟาร์มที่มีคุณภาพดี ไม่ใช้ยาฆ่าแมลง คัดเลือกเมล็ดอย่างพิถีพิถัน แล้วนำคั่วด้วยสูตรเฉพาะของ Pridee Coffee Roasters ทำให้กาแฟเข้มข้นหอมกรุ่น ตามเอกลักษณ์กาแฟชั้นดี
      </div>
      </div>
    </div>
    <div class="flex scrollable-container mt-8 ml-20 bg-clip-content">
      <ShowProduct text='PrideeBlend' image='/Blend.jpg' page="/Productdetail"/>
      <ShowProduct text='EthiopiaGelanaGeshaNaturalG1' image="/427134255_434821192389813_352376848246311866_n.jpg" page="/Productdetail"/>
      <ShowProduct text='EthiopiaKongaG1Washad' image="/425317857_428598959678703_1061220152207252595_n.jpg" page="/Productdetail"/>
      <ShowProduct text='HouseBlend' image="/387145320_364134009458532_2933141215424069986_n.jpg" page="/Productdetail"/>
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
