<template>
  <div class="bg-[url('/bg_mobile.jpg')] w-full">
    <header-comp />
    <div class="flex justify-center items-center h-28 text-3xl text-black">
      <div>เกี่ยวกับร้านกาแฟ</div>
    </div>
    <main class="flex-container">
      <section class="flex-item">
        <div>
          <img src="/ร้านกาแฟ.jpg" alt="รูปที่ 1" />
        </div>
        <h2>ประวัติความเป็นมา</h2>
        <p>
          ที่ร้านปีดีของเรา
          เรามีความมุ่งมั่นที่จะมอบประสบการณ์กาแฟที่ดีที่สุดให้กับลูกค้าของเรา
          การเดินทางของเราเริ่มต้นด้วยแนวคิดง่ายๆ
          นั่นคือการสร้างพื้นที่แสนสบายที่ผู้คนสามารถเพลิดเพลินกับกาแฟระดับพรีเมียม
          ขนมอบแสนอร่อย และมิตรภาพดีๆ
        </p>
      </section>
      <section class="flex-item">
        <div class="card_img">
          <img src="/เมล็ดกาแฟ.jpg" alt="รูปที่ 2" />
        </div>
        <h2>กาแฟของเรา</h2>
        <p>
          เราจัดหาเมล็ดกาแฟของเราจากแหล่งกาแฟที่ดีที่สุดทั่วโลก
          แต่ละถ้วยได้รับการรังสรรค์อย่างพิถีพิถันโดยบาริสต้าผู้ชำนาญของเรา
          เพื่อให้แน่ใจว่ารสชาติและกลิ่นหอมจะสมดุลกันอย่างลงตัว
        </p>
      </section>
      <section class="flex-item">
        <div class="card_img">
          <img src="/น้ำกาแฟ.jpg" alt="รูปที่ 3" />
        </div>
        <h2>ความมุ่งมั่นของเรา</h2>
        <p>
          เรามุ่งมั่นที่จะปฏิบัติตามหลักปฏิบัติด้านความยั่งยืนและจริยธรรม
          เราทำงานโดยตรงกับเกษตรกรผู้ปลูกกาแฟเพื่อให้แน่ใจว่าได้รับค่าจ้างที่ยุติธรรมและวิธีการทำฟาร์มที่เป็นมิตรต่อสิ่งแวดล้อม
          นอกจากนี้เรายังมุ่งมั่นที่จะลดผลกระทบต่อสิ่งแวดล้อมโดยใช้บรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมและลดของเสีย
        </p>
      </section>
    </main>
    <Footer />
  </div>
</template>
  
  <script>
export default {
  name: "AboutCoffee",
  // ในกรณีที่มีการใช้งานข้อมูลหรือเพิ่มโค้ด JavaScript สามารถทำได้ที่นี่
};
</script>
  
  <style scoped>
/* สไตล์ CSS ของคอมโพเนนต์ Vue นี้ */
body {
  font-family: "Kanit", sans-serif;
  margin: 0;
  padding: 0;
}

header h1 {
  margin: 0;
}

.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flex-item {
  flex: 1;
  padding: 20px;
  max-width: 300px;
  text-align: center;
}

section h2 {
  color: #f16609;
}

footer {
  background-color: #333;
  color: #fffefe;
  text-align: left;
  padding: 10px 20px;
}

.flex-item img {
  transition: transform 0.3s ease;
}

.flex-item:hover img {
  transform: scale(1.1);
}

.card_img img {
  width: 100%;
}

.flex-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: brightness(45%);
}

p {
  color: black;
}
</style>
  