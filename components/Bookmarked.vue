<template>
  <div>
    <div class="ml-20 mr-16 pb-16 h-full bg-[url('/bg_mobile.jpg')]">
      <!-- ใช้วงวนเพื่อแสดง BookmarkComponent สำหรับทุกข้อมูลที่พบใน loadedBookmarks -->
      <div v-for="bookmark in loadedBookmarks" :key="bookmark.id" class="mt-8">
          <div
            id="Bookmark{{ bookmark.id }}"
            class="flex p-[28px] mt-10 bg-white max-h-[500px] max-w-[1100PX] rounded-2xl"
          >
            <div></div>
            <img
              :src="bookmark.image"
              class="h-[150px] pr-[28px] justify-center items-center"
            />
            <div class="mr-4">
              <div><a :href="bookmark.Link"> {{ bookmark.text }} </a></div>
              <br />
              <div>{{ bookmark.minitext }}</div>
            </div>
            <div class="flex mt-0 text-xl">
              <button  @click="removeBookmark(bookmark.id)" class="mr-4">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button class="mr-4">
                <i class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// ประกาศตัวแปร ref สำหรับเก็บบุ๊คมาร์คที่โหลดมา
const loadedBookmarks = ref([]);

// ฟังก์ชันสำหรับโหลดข้อมูลบุ๊คมาร์คจาก localStorage
const loadBookmarks = () => {
  let num = 1;

  while (true) {
    const savedBookmark = localStorage.getItem("bookmark" + num);
    if (!savedBookmark) break;

    const bookmarkData = JSON.parse(savedBookmark);
    bookmarkData.id = num;
    loadedBookmarks.value.push(bookmarkData);
    num++;
  }
};

// ฟังก์ชันสำหรับลบบุ๊คมาร์ค
const removeBookmark = (id) => {
  const index = loadedBookmarks.value.findIndex((bookmark) => bookmark.id === id);
  if (index !== -1) {
    loadedBookmarks.value.splice(index, 1); // ลบบุ๊คมาร์คออกจากอาร์เรย์ loadedBookmarks
    localStorage.removeItem("bookmark" + id); // ลบบุ๊คมาร์คใน localStorage

    // ลดค่า ID ของบุ๊คมาร์คที่เหลือใน Local Storage
    let numBookmarks = localStorage.getItem("numBookmarks") || 0;
    if (numBookmarks > 0) {
      const num = Number(numBookmarks) - 1;
      localStorage.setItem("numBookmarks", num);

      // อัปเดต ID ของบุ๊คมาร์คที่เหลือใน Local Storage
      if (id === 1) {
        for (let i = 2; i <= Number(numBookmarks); i++) {
          const bookmarkData = JSON.parse(localStorage.getItem("bookmark" + i));
          localStorage.removeItem("bookmark" + i); // ลบบุ๊คมาร์คที่ ID เดิม
          bookmarkData.id = i - 1; // ปรับ ID ใหม่
          localStorage.setItem("bookmark" + (i - 1), JSON.stringify(bookmarkData)); // เซ็ทบุ๊คมาร์คที่มี ID ใหม่
        }
      }
    }
  }
};



// เรียกใช้งานฟังก์ชันโหลดบุ๊คมาร์คเมื่อคอมโพเนนท์ถูกโหลด
onMounted(() => {
  loadBookmarks();
});
</script>

<style>
.container {
  height: 618px;
}
img {
  height: 618px;
}
.scrollable-container01 {
  overflow-y: auto;
  overflow-x: auto;
}
.scrollable-container01::-webkit-scrollbar {
  display: none;
}
</style>
