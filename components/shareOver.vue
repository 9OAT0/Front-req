<template>
  <div class="overlay" v-if="isOverlayVisible">
    <div class="overlay-content w-[500px]">
      <button @click="closeOverlay" class="text-xl float-right">
        <i class="fa-solid fa-x"></i>
      </button>
      <h2 class="text-s font-bold mb-4">แชร์บทความนี้</h2>
      <div class="bg-white p-8 rounded-lg">
        <div class="flex space-x-4 overflow-x-auto" style="max-width: 100%">
          <button
            @click="shareTo('facebook')"
            class="bg-blue-500 text-white w-[60px] h-[60px] rounded-full"
          >
            F
          </button>
          <button
            @click="shareTo('twitter')"
            class="bg-black text-white w-[60px] h-[60px] rounded-full"
          >
            X
          </button>
          <button
            @click="shareTo('WhatApp')"
            class="bg-green-500 text-white w-[60px] h-[60px] rounded-full"
          >
            W
          </button>
          <button
            @click="shareTo('Instargram')"
            class="bg-gradient-to-br from-purple-600 via-orange-500 to-yellow-300 text-white w-[60px] h-[60px] rounded-full"
          >
            IG
          </button>
          <button
            @click="shareTo('Massage')"
            class="bg-gradient-to-br from-purple-700 to-blue-700 text-white w-[60px] h-[60px] rounded-full"
          >
            M
          </button>
        </div>
        <div class="mt-4">
          <input
            type="text"
            id="link"
            readonly
            :value="'https://front-req.web.app/' + this.Link"
            class="w-full bg-gray-100 p-2 rounded-md border border-solid border-black"
          />
          <button
            @click="copyLink"
            class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md mt-2"
          >
            คัดลอกลิ้งก์
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import db from "./database.js";

export default {
  props: {
    Link: String,
  },
  data() {
    return {
      isOverlayVisible: false,
    };
  },
  methods: {
    openOverlay(Link) { // รับค่า Link เพื่อนำไปใช้งาน
      this.isOverlayVisible = true;
      console.log(Link); // แสดงค่า link ที่ถูกส่งมาผ่าน prop
    },  
    closeOverlay() {
      this.isOverlayVisible = false;
    },
    shareTo(platform) {
      console.log("Sharing to " + platform);
    },

    copyLink() {
      if (this.Link) {
        const Link = this.Link;
        console.log("Link to " + Link);

        navigator.clipboard
          .writeText("https://front-req.web.app/" + Link)
          .then(() => {
            alert(
              "ลิ้งค์ถูกคัดลอกแล้ว: " + "https://front-req.web.app/" + Link
            );
          })
          .catch((err) => {
            console.error("เกิดข้อผิดพลาดในการคัดลอกลิงก์: ", err);
          });
      } else {
        console.error("Link is undefined or null");
      }
    },

    async mounted() {
      try {
        // ดึงข้อมูลจาก object store ชื่อ bookmarks
        const newBookmarks = await db.bookmarks.toArray();

        // ลบข้อมูลเก่าในฐานข้อมูล indexedDB ทั้งหมด
        await db.bookmarks.clear();

        // เพิ่มข้อมูลใหม่ลงในฐานข้อมูล indexedDB
        await db.bookmarks.bulkAdd(newBookmarks);

        // เก็บข้อมูลไว้ใน data property ของ Vue component
        this.newBookmarks = newBookmarks;
      } catch (error) {
        console.error("Error accessing indexedDB:", error);
      }
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
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