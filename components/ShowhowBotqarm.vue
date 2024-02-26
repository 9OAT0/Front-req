<template>
  <div class="h-[618px]">
    <shareOver ref="overlayRef"></shareOver>
    <div class="text-2xl pl-[50px] pt-[60px]">บทความเกี่ยวกับกาแฟ</div>
    <div
      class="justify-center flex-col scrollable-container01 mt-8 ml-20 mr-16"
    >
      <div class="mt-8">
        <div v-for="bookmark in bookmarks" :key="bookmark.id" class="mt-8">
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
              <button
                v-if="!bookmark.saved"
                @click="saveBookmark(bookmark.id, bookmark)"
                class="mr-4"
              >
                <i class="fa-regular fa-bookmark"></i>
              </button>
              <button @click="openOverlay()" class="mr-4">
                <i class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import shareOver from "./shareOver.vue";
import db from "./database";

export default {
  setup() {
    const bookmarks = ref([]);
    const overlayRef = ref(null);
    

    const newBookmarks = [
      // ข้อมูลบุ๊คมาร์คใหม่ที่ต้องการบันทึก
      {
        text: "เรื่องราวของ Espresso และเครื่องทำกาแฟ จุดเริ่มต้นของกาแฟสมัยใหม่",
        minitext:
          "ถ้าพูดถึง Espresso (เอสเพรสโซ่) คือน้ำสีเข้มๆ ที่ถูกสกัดมาจากเครื่องกาแฟ ไม่ว่าจะเป็นเครื่องทำกาแฟอัตโนมัติ หรือเครื่องทำกาแฟเอสเพรสโซ่ราคาหลายแสน (ถูกต้องครับ เครื่องทำกาแฟใหญ่ๆ ที่อยู่ในร้านกาแฟทั้งหลายบางเครื่องซื้อรถป้ายแดงบางยี่ห้อได้สบายๆ เลยครับ)  ร้านกาแฟยอมลงทุนหลายแสนให้กับเครื่องทำกาแฟเพื่อจุดประสงค์หลักคือ ทำให้เอสเพรสโซ่รสชาติดีที่สุด",
        image:
          "https://coffeepressthailand.com/wp-content/uploads/2020/05/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%82%E0%B8%AD%E0%B8%87-Espresso-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F-%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1.jpg",
        Link: "Botqarm1",
        id: 1,
      },
      {
        text: "Specialty Coffee คืออะไร? ทำไมกาแฟไทยจึงฮิตหาทำ !",
        minitext:
          "ช่วงนี้หลายคนเจอคำว่า “Speacialty Coffee” อยู่บ่อยๆใช่มั้ยครับ? ถ้าอ่านแล้วคงแปลตรงตัวกันไปเลยว่าเป็น “กาแฟพิเศษ” แน่ๆ บางร้านนำไปตั้งเป็นชื่อร้านกาแฟกันเลยทีเดียว แต่ชื่อร้านนั้นก็ไม่ได้บ่งบอกว่ากาแฟในร้านนั้น Special เหมือนชื่อเสมอไปนะครับ เพราะคำว่า “Specialty Coffee” ไม่ใช่คำที่ใครจะอนุมานนำมาใช้ได้ง่ายๆ",
        image:
          "https://coffeepressthailand.com/wp-content/uploads/2020/08/Specialty-Coffee-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%88%E0%B8%B6%E0%B8%87%E0%B8%AE%E0%B8%B4%E0%B8%95%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B3-1-1.jpg",
        Link: "Botqarm2",
        id: 2,
      },
      {
        text: "เจาะลึกกาแฟคั่วเข้มที่ครองใจคนไทยมาอย่างช้านาน",
        minitext:
          "กาแฟคั่วเข้มนั้นได้รับความนิยมในหมู่ผู้ที่ชื่นชอบกาแฟด้วยรสชาติที่เข้มข้นและมีกลิ่นที่ชัดเจนและมีลักษณะเฉพาะที่แตกต่างจากการคั่วกาแฟระดับอื่น แต่สิ่งที่ทำให้แตกต่างจากกาแฟประเภทอื่นๆ ",
        image:
          "https://coffeepressthailand.com/wp-content/uploads/2023/06/%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1.jpg",
        Link: "Botqarm3",
        id: 3,
      },
      {
        text: "จุดเริ่มต้นของ Latte Art ศิลปะการวาดบนกาแฟที่น่าหลงใหล",
        minitext:
          "Latte Art หรือการแต่งหน้าฟองนมบนแก้วกาแฟ มีจุดเริ่มต้นมาจากเมืองซีแอตเทิล ประเทศสหรัฐอเมริกา จากร้านกาแฟ Espresso Vivace ของเดวิด โชเมอร์ ( David Schomer ) ผู้ที่มีความสนใจด้านงานศิลปะและพยายามหาจุดแตกต่างให้กาแฟที่เขาขาย จึงพยายามคิดค้นกาแฟที่ดีที่สุด เพื่อทำให้ผู้ดื่มประทับใจ เดวิดเป็นหนึ่งในผู้คิดค้นและทำให้ลาเต้อาร์ตได้รับความนิยมในช่วงทศวรรษ 1990 จนถึงปัจจุบัน ",
        image:
          "https://coffeepressthailand.com/wp-content/uploads/2020/08/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87-Latte-Art-1.jpg",
        Link: "Botqarm4",
        id: 4,
      },
      // เพิ่มบุ๊คมาร์คเพิ่มเติมตามต้องการ
    ];

    const saveBookmarks = async (newBookmarks) => {
      await db.bookmarks.bulkAdd(newBookmarks);
    };

    const saveBookmark = (id, bookmarkData) => {
      // เช็คว่าบุ๊คมาร์คที่ต้องการบันทึกมีอยู่ใน localStorage หรือไม่
      const existingBookmark = localStorage.getItem("bookmark" + id);

      if (!existingBookmark) {
        // หากบุ๊คมาร์คยังไม่มีใน localStorage จึงทำการเพิ่ม
        const numBookmarks = localStorage.getItem("numBookmarks") || 0;
        const num = Number(numBookmarks) + 1;
        localStorage.setItem("bookmark" + num, JSON.stringify(bookmarkData));
        localStorage.setItem("numBookmarks", num);
        alert("บุ๊คมาร์คถูกเพิ่มแล้ว!");
      } else {
        // หากบุ๊คมาร์คมีอยู่แล้วใน localStorage แจ้งเตือนว่ามีอยู่แล้ว
        alert("บุ๊คมาร์คนี้มีอยู่แล้วในรายการ!");
      }
    };

    // ฟังก์ชันสำหรับลบบุ๊คมาร์ค
    const removeBookmark = (id) => {
      const index = loadedBookmarks.value.findIndex(
        (bookmark) => bookmark.id === id
      );
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
          localStorage.setItem(
            "bookmark" + (i - 1),
            JSON.stringify(bookmarkData)
          ); // เซ็ทบุ๊คมาร์คที่มี ID ใหม่
        }
      }
    };

    const fetchBookmarks = async () => {
      bookmarks.value = await db.bookmarks.toArray();
    };

    onMounted(async () => {
      await db.bookmarks.clear(); // ลบข้อมูลที่เก่าออกก่อน
      await saveBookmarks(newBookmarks);
      fetchBookmarks();
    });

    const openOverlay = () => {
      if (overlayRef.value){
        overlayRef.value.openOverlay();
      } // เรียกใช้งานฟังก์ชัน openOverlay ใน Component Overlay
    };

    return {
      bookmarks,
      saveBookmark,
      removeBookmark,
      overlayRef,
      openOverlay,
    };
  },
  components: {
    shareOver,
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
  height: 500px;
  overflow-y: auto;
  overflow-x: auto;
}
.scrollable-container01::-webkit-scrollbar {
  display: none;
}
</style>
