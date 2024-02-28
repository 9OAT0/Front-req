<template>
  <div class="h-full">
    <shareOver ref="overlayRef"></shareOver>
    <div class="pl-20 pr-16 pb-16 h-full bg-[url('/bg_mobile.jpg')]">
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
            <div>
              <a :href="bookmark.Link"> {{ bookmark.text }} </a>
            </div>
            <br />
            <div>{{ bookmark.minitext }}</div>
          </div>
          <div class="flex mt-0 text-xl">
            <button @click="removeBookmark(bookmark.id)" class="mr-4">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button @click="openOverlay(bookmark.Link)" class="mr-4">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <shareOver ref="overlayRef" :Link="overlayLink"></shareOver>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import shareOver from "./shareOver.vue";

export default {
  components: {
    shareOver,
  },
  setup() {
    const overlayRef = ref(null);
    const loadedBookmarks = ref([]);
    const overlayLink = ref("");

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

    const removeBookmark = (id) => {
      const index = loadedBookmarks.value.findIndex(
        (bookmark) => bookmark.id == id
      );
      if (index !== -1) {
        loadedBookmarks.value.splice(index, 1);
        localStorage.removeItem("bookmark" + id);

        let numBookmarks = localStorage.getItem("numBookmarks") || 0;
        if (numBookmarks > 0) {
          const num = Number(numBookmarks) - 1;
          localStorage.setItem("numBookmarks", num);

          if (id === 1 && numBookmarks > 1) {
            for (let i = 2; i <= Number(numBookmarks); i++) {
              const bookmarkData = JSON.parse(
                localStorage.getItem("bookmark" + i)
              );
              localStorage.removeItem("bookmark" + i);
              bookmarkData.id = i - 1;
              localStorage.setItem(
                "bookmark" + (i - 1),
                JSON.stringify(bookmarkData)
              );
            }
          }
        }
      }
    };

    const openOverlay = (Link) => {
      overlayLink.value = Link;
      if (overlayRef.value) {
        overlayRef.value.openOverlay();
      }
    };

    onMounted(() => {
      loadBookmarks();
    });

    return {
      overlayRef,
      openOverlay,
      loadedBookmarks,
      removeBookmark,
      overlayLink,
    };
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
  overflow-y: auto;
  overflow-x: auto;
}
.scrollable-container01::-webkit-scrollbar {
  display: none;
}
</style>
