<template>
  <div class="bg-[url('/bg-aica.jpg')] h-[618px]">
    <div class="text-white text-2xl pl-[50px] pt-[59px]">
      บทความเกี่ยวกับกาแฟ
    </div>
    <div class="justify-center flex-col scrollable-container01 mt-8 ml-20">
      <div class="-mt-8">
        <Botqarm
          text="จุดเริ่มต้นของ Latte Art ศิลปะการวาดบนกาแฟที่น่าหลงใหล"
          minitext="Latte Art หรือการแต่งหน้าฟองนมบนแก้วกาแฟ มีจุดเริ่มต้นมาจากเมืองซีแอตเทิล ประเทศสหรัฐอเมริกา จากร้านกาแฟ Espresso Vivace ของเดวิด โชเมอร์ ( David Schomer ) ผู้ที่มีความสนใจด้านงานศิลปะและพยายามหาจุดแตกต่างให้กาแฟที่เขาขาย จึงพยายามคิดค้นกาแฟที่ดีที่สุด"
          image="https://coffeepressthailand.com/wp-content/uploads/2020/08/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87-Latte-Art-1.jpg"
        />
        <Botqarm
          text="Crema สุดเย้ายวนจากเครื่องกาแฟเอสเพรสโซ่คืออะไร แล้วมันดีจริงหรือ?"
          minitext="ครีม่าเกิดจากก๊าซและน้ำมันที่มีอยู่ในกาแฟเจอปฏิกิริยาความร้อนและแรงดันอย่างรวดเร็วจากเครื่องกาแฟเอสเพรสโซ่ ทำให้เกิดการสกัดครีม่าออกมาในช่วงต้นของการสกัดกาแฟนั่นเองครับ ซึ่งครีม่าจะเป็นส่วนที่มีความมันสูง (ครีม่าส่วนนี้แหละครับที่เป็นส่วนสำคัญในเวลาทำกาแฟนมออกมาแล้วหลายคนลงความเห็นว่ามันช่างนัวเหลือเกิน) ปัจจัยของการเกิดครีม่านั้นหลักๆ คือ ความสดของกาแฟ"
          image="https://coffeepressthailand.com/wp-content/uploads/2020/08/Crema-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88%E0%B8%84%E0%B8%B7%E0%B8%AD_-1.jpg"
        />
        <Botqarm
          text="Specialty Coffee คืออะไร? ทำไมกาแฟไทยจึงฮิตหาทำ !"
          minitext="Specialty Coffee คือ กาแฟพิเศษ ที่วัดกันตั้งแต่เมล็ดกาแฟจนถึง Process ทุกอย่างครับ เมล็ดกาแฟที่เป็น Specialty Coffee ต้องเป็นเมล็ดที่ชงออกมาแล้วผ่านกระบวนการคัด คั่ว บด กลั่น ชง จนได้กาแฟที่มีรสชาติดี ได้รับการรับรองว่ามีคุณภาพจากนักชิมที่มีความเชี่ยวชาญ ที่เรียกว่า Cupper หรือ Q – Grader โดยมีการทดสอบว่าในเรื่องกระบวนการผลิตเมล็ดกาแฟ การทดสอบคุณภาพ การทดสอบกลิ่นและรสชาติ และต้องได้คะแนน 80 คะแนนขึ้นไป"
          image="https://coffeepressthailand.com/wp-content/uploads/2020/08/Specialty-Coffee-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%88%E0%B8%B6%E0%B8%87%E0%B8%AE%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B3-1-1.jpg"
        />
        <Botqarm
          text="ผู้ค้นพบกาแฟ เครื่องดื่มมหัศจรรย์ที่ได้รับความนิยมอย่างต่อเนื่องมายาวนานกว่า 700 ปี"
          minitext="มาเริ่มกันที่คำถามแรกนะครับ ใครเป็นผู้คนพบกาแฟ… หลายคนคงคิดว่าคนนั้นต้องกลายเป็นผู้ยิ่งใหญ่ที่ค้นพบเครื่องดื่มที่เป็นที่นิยมมากที่สุดของโลกกันเลยใช่มั้ยครับ ซึ่งผู้ที่ค้นพบกาแฟ ที่จริงพวกเราน่าจะเคยเห็นหรือเคยเจอลูกหลานของเค้ากันมาแล้วครับ ผู้ที่ค้นพบความลับของกาแฟนั่นก็คือ… แพะ (สัตว์เศรษฐกิจที่หลายคนบริโภคนมแพะ นั่นเองครับ) โดยประวัติที่น่าเชื่อถือที่สุดพบว่าในศตวรรษที่ 15 หรือกว่า 600 ปีที่แล้ว มีหนุ่มน้อยคนเลี้ยงแพะในเปอร์เซีย "
          image="https://coffeepressthailand.com/wp-content/uploads/2020/05/blog-coffee-magic-1.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Botqarm from "./Botqarm.vue"; // Import Component Botqarm.vue

export default {
  components: {
    Botqarm, // ลงทะเบียน Component Botqarm.vue
  },
};
</script>

<style>
.container {
  height: 618px;
}
img {
  height: 618px;
}
.scrollable-container01 {
  height: 490px; /* กำหนดความสูงของ div ตามที่ต้องการ */
  overflow-y: auto; /* เพิ่มการเลื่อนแนวตั้งเมื่อเนื้อหามีมากเกินไป */
  overflow-x: auto;
}
.scrollable-container01::-webkit-scrollbar {
  display: none; /* ซ่อนแถบเลื่อนใน Chrome, Safari, และ Edge */
}
</style>
