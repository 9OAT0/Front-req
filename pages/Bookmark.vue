<template>
  <div>
    <!-- ใช้วงวนเพื่อแสดง BookmarkComponent สำหรับทุกข้อมูลที่พบใน localStorage -->
    <template v-for="bookmark in bookmarks" :key="bookmark.id">
      <div>
        <Botqarm :text="bookmark.text" :minitext="bookmark.minitext" :image="bookmark.image" />
        <!-- เพิ่มปุ่มลบบุ๊คมาร์ค -->
        <button @click="removeBookmark(bookmark.id)">ลบบุ๊คมาร์ค</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const bookmarks = ref([]);

// ฟังก์ชันสำหรับโหลดข้อมูลบุคมาร์คจาก localStorage
const loadBookmarks = () => {
  let num = 1;
  while (true) {
    const savedBookmark = localStorage.getItem('bookmarked' + num);
    if (!savedBookmark) break;

    const bookmarkData = JSON.parse(savedBookmark);
    bookmarkData.id = num;
    bookmarks.value.push(bookmarkData);
    num++;
  }
};

// ฟังก์ชันสำหรับลบบุคมาร์ค
const removeBookmark = (id) => {
  const index = bookmarks.value.findIndex(bookmark => bookmark.id === id);
  if (index !== -1) {
    bookmarks.value.splice(index, 1); // ลบบุคมาร์คออกจากอาร์เรย์ bookmarks
    localStorage.removeItem('bookmarked' + id); // ลบบุคมาร์คใน localStorage
  }
};

onMounted(() => {
  loadBookmarks(); // โหลดข้อมูลบุคมาร์คเมื่อคอมโพเนนท์ถูกโหลด
});
</script>

