<template>
  <div
    class="bg-NavBarBG flex justify-between align-middle p-4 pl-[45px] pr-8 w-full h-20"
  >
    <div class="flex justify-between">
      <h1 class="pr-4 flex items-center text-black">
        <button>
          <i
            class="fa-solid fa-bars items-end pr-4"
            @click="toggleSlideBar"
          ></i>
        </button>
        <a href="/" class="text-xl"> Pridee coffee </a>
      </h1>
      <div>
        <div
          class="flex-col w-max items-center rounded-[28px] p-[8px] bg-transparent border border-solid border-black"
        >
          <input
            type="search"
            placeholder="ค้นหา"
            v-model="searchQuery"
            @input="handleSearch"
            class="bg-transparent w-[500px] pl-2 focus:outline-none placeholder:text-black"
          />
        </div>        
        <!-- Overlay -->
        <transition name="slide">
          <div
            class="overlay filtered-items rounded-[14px] transition-transform max-w-[500px] p-[8px] pl-[15px] bg-transparent"
            v-show="showOverlay"
            @click="clearSearch"
          >
            <ul>
              <li
              class=""
                v-for="item in filteredItems"
                :key="item.id"
                @click="handleItemClick(item)"
              >
                <span
                  :class="{
                    'w-96': item.text.includes(searchQuery),
                    'text-comewith': !item.text.includes(searchQuery),
                  }"
                >
                  {{ item.text }}
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="cart cursor-pointer">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    <SlideBar :is-open="isSlideBarOpen" @close="closeSlideBar"></SlideBar>
    <!-- Pass the visibility state as a prop -->
  </div>
</template>

<script>
import SlideBar from "./SlideBar.vue";

export default {
  components: {
    SlideBar,
  },
  data() {
    return {
      isSlideBarOpen: false,
      searchQuery: "", // เริ่มต้นด้วยค่าว่างสำหรับการค้นหา
      items: [
        {
          id: 1,
          text: "เรื่องราวของ Espresso และเครื่องทำกาแฟ จุดเริ่มต้นของกาแฟสมัยใหม่",
          minitext:
            "ถ้าพูดถึง Espresso (เอสเพรสโซ่) คือน้ำสีเข้มๆ ที่ถูกสกัดมาจากเครื่องกาแฟ ไม่ว่าจะเป็นเครื่องทำกาแฟอัตโนมัติ หรือเครื่องทำกาแฟเอสเพรสโซ่ราคาหลายแสน (ถูกต้องครับ เครื่องทำกาแฟใหญ่ๆ ที่อยู่ในร้านกาแฟทั้งหลายบางเครื่องซื้อรถป้ายแดงบางยี่ห้อได้สบายๆ เลยครับ)  ร้านกาแฟยอมลงทุนหลายแสนให้กับเครื่องทำกาแฟเพื่อจุดประสงค์หลักคือ ทำให้เอสเพรสโซ่รสชาติดีที่สุด",
          Link: "Botqarm1",
        },
        {
          id: 2,
          text: "Specialty Coffee คืออะไร? ทำไมกาแฟไทยจึงฮิตหาทำ !",
          Link: "Botqarm2",
        },
        {
          id: 3,
          text: "เจาะลึกกาแฟคั่วเข้มที่ครองใจคนไทยมาอย่างช้านาน",
          Link: "Botqarm3",
        },
        {
          id: 4,
          text: "Latte Art หรือการแต่งหน้าฟองนมบนแก้วกาแฟ มีจุดเริ่มต้นมาจากเมืองซีแอตเทิล ประเทศสหรัฐอเมริกา จากร้านกาแฟ Espresso Vivace ของเดวิด โชเมอร์ ( David Schomer ) ผู้ที่มีความสนใจด้านงานศิลปะและพยายามหาจุดแตกต่างให้กาแฟที่เขาขาย จึงพยายามคิดค้นกาแฟที่ดีที่สุด เพื่อทำให้ผู้ดื่มประทับใจ เดวิดเป็นหนึ่งในผู้คิดค้นและทำให้ลาเต้อาร์ตได้รับความนิยมในช่วงทศวรรษ 1990 จนถึงปัจจุบัน",
          Link: "Botqarm4",
        }, // เพิ่มคุณสมบัติ text ให้กับแต่ละ item
      ],
    };
  },
  computed: {
    filteredItems() {
  // Convert searchQuery and item text to lowercase or uppercase for case-insensitive search
  const searchQuery = this.searchQuery.toLowerCase(); // หรือ this.searchQuery.toUpperCase();
  
  // Filter items based on case-insensitive search query
  return this.items.filter(
    (item) =>
      (item.text && item.text.toLowerCase().includes(searchQuery)) ||
      (item.minitext && item.minitext.toLowerCase().includes(searchQuery))
  );
},


    showOverlay() {
      // Show overlay only if searchQuery is not empty and there are filtered items
      return this.searchQuery !== "" && this.filteredItems.length > 0;
    },
  },
  methods: {
    toggleSlideBar() {
      this.isSlideBarOpen = !this.isSlideBarOpen;
      document.body.classList.toggle("no-scroll");
    },
    closeSlideBar() {
      this.isSlideBarOpen = false;
      document.body.classList.remove("no-scroll");
    },
    handleSearch() {
      console.log("Search Query:", this.searchQuery);
      // ทำการค้นหาด้วยคำใน searchQuery และปรับข้อมูลตามผลลัพธ์
      // เช่น กรองรายการ, แสดงผลลัพธ์, อื่นๆ
    },

    clearSearch() {
      this.searchQuery = ""; // Clear the search query
    },

    handleItemClick(item) {
      // Handle the item click, e.g., navigate to a link or perform an action
      console.log("Clicked item:", item);
      // Open link in a new tab
      window.open("https://front-req.web.app/" + item.Link, "_self");
      // You can perform any action you want here, such as navigation or displaying more information about the item.
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.slide-bar {
  transition: transform 0.3s ease-in-out;
}

.slide-bar.translate-x-0 {
  transform: translateX(0);
}

.slide-bar.-translate-x-full {
  transform: translateX(-100%);
}
.overlay {
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 99;
}
.overlay ul {
  list-style-type: none;
  padding: 0;
}
.overlay li {
  padding: 5px 10px;
  cursor: pointer;
}
.overlay li:hover {
  background-color: #f0f0f0;
  padding: 5px 10px;
  cursor: pointer;
}

.text-comewith {
  color: initial; /* ใช้สีเริ่มต้นของข้อความ */
}
.filtered-items li span {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* เพิ่ม ... เมื่อข้อความเกินขนาด */
}
/* เพิ่มส่วนของ transition สำหรับ dropdown animation */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateY(10px);
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.cart {
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left:1000px;
  font-size: 30px;
}
</style>
