<template>
  <div class="overlay" v-if="isOverlayVisible">
    <!-- เนื้อหาของ overlay ที่ต้องการแสดง -->
    <div class="overlay-content">
      <!-- ตัวอย่างเนื้อหา -->
      <button @click="closeOverlay" class="text-xl float-right">
        <i class="fa-solid fa-x"></i>
      </button>
      <h2>นี่คือเนื้อหาของ Overlay</h2>
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
  