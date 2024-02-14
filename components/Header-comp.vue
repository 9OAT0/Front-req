<template>
  <div class="bg-NavBarBG flex justify-between align-middle p-4 pl-8 pr-8">
    <div class="flex justify-between">
      <h1 class="pr-4 flex items-center ">
        <i class="fa-solid fa-bars items-end pr-4" @click="toggleSlideBar"></i>
        <a href="#home" class="text-xl"> Perdee coffee </a>
      </h1>
      <div class="flex w-max items-center rounded-[28px] p-[8px] bg-transparent border border-solid border-black">
        <input type="search" placeholder="ค้นหา" class="bg-transparent pl-2 focus:outline-none placeholder:text-black">
        <span class="pr-2 flex items-center justify-end">
        </span>
      </div>
    </div>
    <SlideBar :is-open="isSlideBarOpen" @close="closeSlideBar"></SlideBar> <!-- Pass the visibility state as a prop -->
  </div>
</template>

<script>
import SlideBar from './SlideBar.vue'

export default {
  components: {
    SlideBar
  },
  data() {
    return {
      isSlideBarOpen: false
    }
  },
  methods: {
    toggleSlideBar() {
      this.isSlideBarOpen = !this.isSlideBarOpen;
      document.body.classList.toggle('no-scroll')
    },
    closeSlideBar() {
      this.isSlideBarOpen = false;
      document.body.classList.remove('no-scroll')
    },
    handleClickOutside(event) {
      const slideBar = this.$refs.slideBar; // Reference to SlideBar component
      if (this.isSlideBarOpen && !slideBar.contains(event.target)) {
        this.closeSlideBar();
      }
    }
  },
  beforeDestroy() {
    // Remove event listener before component is destroyed
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
/* ไม่ควรเปลี่ยนชื่อคลาสจาก 'slide-bar' เป็นชื่ออื่น เนื่องจาก SlideBar ใช้ชื่อ 'SlideBar' */
.slide-bar {
  transition: transform 0.3s ease-in-out;
}

.slide-bar.translate-x-0 {
  transform: translateX(0);
}

.slide-bar.-translate-x-full {
  transform: translateX(-100%);
}
</style>
