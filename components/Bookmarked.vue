<template>
  <div>
    <div class="scrollable-container01 ml-20 mr-16 pt-16">
      <!-- ใช้วงวนเพื่อแสดง BookmarkComponent สำหรับทุกข้อมูลที่พบใน loadedBookmarks -->
      <template v-for="bookmark in loadedBookmarks" :key="bookmark.id">
        <Botqarm
          :text="bookmark.text"
          :minitext="bookmark.minitext"
          :image="bookmark.image"
        />
        <!-- เพิ่มปุ่มลบบุ๊คมาร์ค -->
        <button @click="removeBookmark(bookmark.id)">ลบบุ๊คมาร์ค</button>
      </template>
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
    const num = Number(numBookmarks) - 1;
    localStorage.setItem("numBookmarks", num);

    // อัปเดต ID ของบุ๊คมาร์คที่เหลือใน Local Storage
    for (let i = id + 1; i <= Number(numBookmarks); i++) {
      const bookmarkData = JSON.parse(localStorage.getItem("bookmark" + i));
      localStorage.removeItem("bookmark" + i); // ลบบุ๊คมาร์คที่ ID เดิม
      bookmarkData.id = i - 1; // ปรับ ID ใหม่
      localStorage.setItem("bookmark" + (i - 1), JSON.stringify(bookmarkData)); // เซ็ทบุ๊คมาร์คที่มี ID ใหม่
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
