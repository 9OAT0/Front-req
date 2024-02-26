<template>
  <div class="overlay" v-if="isOverlayVisible">
    <!-- เนื้อหาของ overlay ที่ต้องการแสดง -->
    <div class="overlay-content w-[500px] h-[500px]">
      <!-- ตัวอย่างเนื้อหา -->
      <button @click="closeOverlay" class="text-xl float-right">
        <i class="fa-solid fa-x"></i>
      </button>
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">แชร์บทความนี้</h2>
        <div class="flex space-x-4">
          <button
            @click="shareTo('facebook')"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Facebook
          </button>
          <button
            @click="shareTo('twitter')"
            class="bg-blue-400 text-white px-4 py-2 rounded-lg"
          >
            Twitter
          </button>
        </div>
        <div class="mt-4">
          <input
            type="text"
            id="link"
            readonly
            :value="sharedLink"
            class="w-full bg-gray-100 p-2 rounded-md border border-solid border-black"
          />
          <button
            @click="copyLink"
            class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md mt-2"
          >
            คัดลอกลิ้งก์
          </button>
        </div>
        <button
          @click="closeShareOverlay"
          class="absolute top-0 right-0 mr-4 mt-2 text-gray-500 hover:text-gray-700"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isOverlayVisible: false,
    };
  },
  methods: {
    openOverlay() {
      this.isOverlayVisible = true;
    },
    closeOverlay() {
      this.isOverlayVisible = false;
    },
    shareTo(platform) {
      // ทำงานโดยใช้ platform (Facebook, Twitter) ที่ระบุ
      // เช่นเรียกใช้ API หรือโค้ดที่เกี่ยวข้องกับการแชร์ไปยังแต่ละแพลตฟอร์ม
      console.log("Sharing to " + platform);
    },

    copyLink() {
      const linkInputElement = document.getElementById("link");

      // ทำการเลือกข้อความภายใน link element
      linkInputElement.select();

      // ทำการคัดลอกข้อความภายใน link element
      document.execCommand("copy");

      // แสดงข้อความแจ้งเตือนว่าลิ้งค์ได้ถูกคัดลอกแล้ว
      alert("ลิ้งค์ถูกคัดลอกแล้ว: " + linkInputElement.value);
    },
  },
};
</script>
  
  <style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* สีพื้นหลังแบบ semi-transparent */
  z-index: 9999; /* ให้ overlay อยู่ด้านบนสุด */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
  